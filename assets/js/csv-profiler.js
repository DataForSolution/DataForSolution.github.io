(() => {
  'use strict';

  const fileInput = document.getElementById('csv-file');
  const analyzeButton = document.getElementById('analyze-csv');
  const resetButton = document.getElementById('reset-csv');
  const statusBox = document.getElementById('csv-status');
  const results = document.getElementById('csv-results');
  const summaryGrid = document.getElementById('csv-summary');
  const columnBody = document.getElementById('column-profile-body');
  const previewHead = document.getElementById('preview-head');
  const previewBody = document.getElementById('preview-body');
  const recommendations = document.getElementById('csv-recommendations');

  if (!fileInput || !analyzeButton) return;

  const MAX_FILE_SIZE = 10 * 1024 * 1024;

  function setStatus(message, type = 'info') {
    statusBox.textContent = message;
    statusBox.className = `csv-status csv-status--${type}`;
  }

  function escapeHtml(value) {
    return String(value ?? '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function parseCsv(text) {
    const rows = [];
    let row = [];
    let field = '';
    let inQuotes = false;

    for (let i = 0; i < text.length; i += 1) {
      const char = text[i];
      const next = text[i + 1];

      if (char === '"') {
        if (inQuotes && next === '"') {
          field += '"';
          i += 1;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (char === ',' && !inQuotes) {
        row.push(field);
        field = '';
      } else if ((char === '\n' || char === '\r') && !inQuotes) {
        if (char === '\r' && next === '\n') i += 1;
        row.push(field);
        if (row.some((cell) => cell.trim() !== '')) rows.push(row);
        row = [];
        field = '';
      } else {
        field += char;
      }
    }

    row.push(field);
    if (row.some((cell) => cell.trim() !== '')) rows.push(row);
    return rows;
  }

  function isMissing(value) {
    const normalized = String(value ?? '').trim().toLowerCase();
    return ['', 'na', 'n/a', 'null', 'none', 'nan', 'missing'].includes(normalized);
  }

  function inferType(values) {
    const present = values.filter((value) => !isMissing(value));
    if (!present.length) return 'Empty';

    const booleans = new Set(['true', 'false', 'yes', 'no', '0', '1']);
    if (present.every((value) => booleans.has(String(value).trim().toLowerCase()))) return 'Boolean';

    if (present.every((value) => /^[-+]?\d+$/.test(String(value).trim()))) return 'Integer';

    if (present.every((value) => {
      const clean = String(value).trim().replaceAll(',', '');
      return clean !== '' && Number.isFinite(Number(clean));
    })) return 'Decimal';

    const dateCount = present.filter((value) => {
      const text = String(value).trim();
      return /[-/]/.test(text) && !Number.isNaN(Date.parse(text));
    }).length;
    if (dateCount / present.length >= 0.9) return 'Date';

    return 'Text';
  }

  function median(numbers) {
    if (!numbers.length) return null;
    const sorted = [...numbers].sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);
    return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
  }

  function profileColumn(values) {
    const missing = values.filter(isMissing).length;
    const present = values.filter((value) => !isMissing(value));
    const unique = new Set(present.map((value) => String(value).trim())).size;
    const type = inferType(values);
    let details = '—';

    if (type === 'Integer' || type === 'Decimal') {
      const numbers = present.map((value) => Number(String(value).replaceAll(',', ''))).filter(Number.isFinite);
      if (numbers.length) {
        const mean = numbers.reduce((sum, value) => sum + value, 0) / numbers.length;
        details = `Min ${Math.min(...numbers).toLocaleString()} · Mean ${mean.toLocaleString(undefined, { maximumFractionDigits: 2 })} · Median ${median(numbers).toLocaleString(undefined, { maximumFractionDigits: 2 })} · Max ${Math.max(...numbers).toLocaleString()}`;
      }
    } else if (present.length) {
      const counts = new Map();
      present.forEach((value) => {
        const key = String(value).trim();
        counts.set(key, (counts.get(key) || 0) + 1);
      });
      const [topValue, topCount] = [...counts.entries()].sort((a, b) => b[1] - a[1])[0];
      details = `Most common: ${topValue} (${topCount})`;
    }

    return { type, missing, unique, details };
  }

  function normalizeRows(rows) {
    const width = Math.max(...rows.map((row) => row.length));
    return rows.map((row) => [...row, ...Array(Math.max(0, width - row.length)).fill('')]);
  }

  function renderSummary(items) {
    summaryGrid.innerHTML = items.map(({ label, value }) => `
      <div class="csv-metric">
        <span>${escapeHtml(label)}</span>
        <strong>${escapeHtml(value)}</strong>
      </div>`).join('');
  }

  function renderPreview(headers, dataRows) {
    previewHead.innerHTML = `<tr>${headers.map((header) => `<th>${escapeHtml(header)}</th>`).join('')}</tr>`;
    previewBody.innerHTML = dataRows.slice(0, 10).map((row) => `
      <tr>${headers.map((_, index) => `<td>${escapeHtml(row[index] ?? '')}</td>`).join('')}</tr>`).join('');
  }

  function analyze(rows) {
    const normalized = normalizeRows(rows);
    const rawHeaders = normalized[0];
    const headers = rawHeaders.map((header, index) => String(header).trim() || `Column ${index + 1}`);
    const dataRows = normalized.slice(1);

    if (!dataRows.length) throw new Error('The CSV contains headers but no data rows.');

    const rowKeys = dataRows.map((row) => JSON.stringify(row.map((value) => String(value).trim())));
    const duplicateCount = rowKeys.length - new Set(rowKeys).size;
    let totalMissing = 0;

    const profiles = headers.map((header, index) => {
      const profile = profileColumn(dataRows.map((row) => row[index] ?? ''));
      totalMissing += profile.missing;
      return { header, ...profile };
    });

    const totalCells = dataRows.length * headers.length;
    const missingPercent = totalCells ? (totalMissing / totalCells) * 100 : 0;

    renderSummary([
      { label: 'Rows', value: dataRows.length.toLocaleString() },
      { label: 'Columns', value: headers.length.toLocaleString() },
      { label: 'Missing cells', value: `${totalMissing.toLocaleString()} (${missingPercent.toFixed(1)}%)` },
      { label: 'Duplicate rows', value: duplicateCount.toLocaleString() }
    ]);

    columnBody.innerHTML = profiles.map((profile) => {
      const missingPct = dataRows.length ? (profile.missing / dataRows.length) * 100 : 0;
      return `<tr>
        <td><strong>${escapeHtml(profile.header)}</strong></td>
        <td>${escapeHtml(profile.type)}</td>
        <td>${profile.missing.toLocaleString()} (${missingPct.toFixed(1)}%)</td>
        <td>${profile.unique.toLocaleString()}</td>
        <td>${escapeHtml(profile.details)}</td>
      </tr>`;
    }).join('');

    const advice = [];
    if (totalMissing) advice.push(`Review ${totalMissing.toLocaleString()} missing cells before modeling or reporting.`);
    if (duplicateCount) advice.push(`Investigate ${duplicateCount.toLocaleString()} duplicate rows; remove them only when they are not legitimate repeated observations.`);
    profiles.filter((profile) => profile.missing / dataRows.length >= 0.3).forEach((profile) => {
      advice.push(`${profile.header} is at least 30% missing and may need imputation, exclusion, or source review.`);
    });
    profiles.filter((profile) => profile.unique === 1 && profile.missing < dataRows.length).forEach((profile) => {
      advice.push(`${profile.header} has only one non-missing value and may add little analytical information.`);
    });
    if (!advice.length) advice.push('No major structural data-quality concerns were detected by this basic profile. Continue with domain-specific validation.');

    recommendations.innerHTML = advice.map((item) => `<li>${escapeHtml(item)}</li>`).join('');
    renderPreview(headers, dataRows);
    results.hidden = false;
  }

  analyzeButton.addEventListener('click', async () => {
    const file = fileInput.files?.[0];
    results.hidden = true;

    if (!file) {
      setStatus('Choose a CSV file first.', 'error');
      return;
    }
    if (!file.name.toLowerCase().endsWith('.csv')) {
      setStatus('Please select a file with the .csv extension.', 'error');
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      setStatus('For browser performance, use a CSV file smaller than 10 MB.', 'error');
      return;
    }

    analyzeButton.disabled = true;
    setStatus('Analyzing your file locally in this browser…', 'info');

    try {
      const text = await file.text();
      const rows = parseCsv(text.replace(/^\uFEFF/, ''));
      if (rows.length < 2) throw new Error('The file does not appear to contain a header row and data rows.');
      analyze(rows);
      setStatus(`Analysis complete: ${file.name}. The file was not uploaded.`, 'success');
    } catch (error) {
      setStatus(error.message || 'The CSV could not be analyzed.', 'error');
    } finally {
      analyzeButton.disabled = false;
    }
  });

  resetButton.addEventListener('click', () => {
    fileInput.value = '';
    results.hidden = true;
    setStatus('Choose a CSV file to begin. Your data stays in your browser.', 'info');
  });
})();
