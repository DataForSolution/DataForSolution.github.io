(function csvProfilerModule(root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.DataForSolutionCsv = api;
}(typeof globalThis !== 'undefined' ? globalThis : this, function buildCsvProfiler() {
  'use strict';

  const MAX_FILE_SIZE = 10 * 1024 * 1024;
  const MISSING_VALUES = new Set(['', 'na', 'n/a', 'null', 'none', 'nan', 'missing']);

  function escapeHtml(value) {
    return String(value ?? '').replaceAll('&', '&amp;').replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');
  }

  function validateFileMetadata(file) {
    if (!file) throw new Error('Choose a CSV file first.');
    if (!String(file.name || '').toLowerCase().endsWith('.csv')) throw new Error('Please select a file with the .csv extension.');
    if (Number(file.size) > MAX_FILE_SIZE) throw new Error('For browser performance, use a CSV file no larger than 10 MB.');
    return true;
  }

  function parseCsv(input) {
    const text = String(input ?? '').replace(/^\uFEFF/, '');
    if (!text.trim()) throw new Error('The CSV file is empty.');
    const rows = [];
    let row = [];
    let field = '';
    let inQuotes = false;
    for (let index = 0; index < text.length; index += 1) {
      const character = text[index];
      const next = text[index + 1];
      if (character === '"') {
        if (inQuotes && next === '"') { field += '"'; index += 1; } else { inQuotes = !inQuotes; }
      } else if (character === ',' && !inQuotes) {
        row.push(field); field = '';
      } else if ((character === '\n' || character === '\r') && !inQuotes) {
        if (character === '\r' && next === '\n') index += 1;
        row.push(field);
        if (row.some((cell) => cell.trim() !== '')) rows.push(row);
        row = []; field = '';
      } else { field += character; }
    }
    if (inQuotes) throw new Error('The CSV contains an unclosed quoted field.');
    row.push(field);
    if (row.some((cell) => cell.trim() !== '')) rows.push(row);
    if (!rows.length) throw new Error('The CSV file is empty.');
    return rows;
  }

  function isMissing(value) { return MISSING_VALUES.has(String(value ?? '').trim().toLowerCase()); }

  function inferType(values) {
    const present = values.filter((value) => !isMissing(value));
    if (!present.length) return 'Empty';
    const booleans = new Set(['true', 'false', 'yes', 'no', '0', '1']);
    if (present.every((value) => booleans.has(String(value).trim().toLowerCase()))) return 'Boolean';
    if (present.every((value) => /^[-+]?\d+$/.test(String(value).trim()))) return 'Integer';
    if (present.every((value) => { const clean = String(value).trim().replaceAll(',', ''); return clean && Number.isFinite(Number(clean)); })) return 'Decimal';
    const dateCount = present.filter((value) => { const text = String(value).trim(); return /[-/]/.test(text) && !Number.isNaN(Date.parse(text)); }).length;
    return dateCount / present.length >= 0.9 ? 'Date' : 'Text';
  }

  function median(numbers) {
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
      const mean = numbers.reduce((sum, value) => sum + value, 0) / numbers.length;
      details = `Min ${Math.min(...numbers).toLocaleString()} · Mean ${mean.toLocaleString(undefined, { maximumFractionDigits: 2 })} · Median ${median(numbers).toLocaleString(undefined, { maximumFractionDigits: 2 })} · Max ${Math.max(...numbers).toLocaleString()}`;
    } else if (present.length) {
      const counts = new Map();
      present.forEach((value) => { const key = String(value).trim(); counts.set(key, (counts.get(key) || 0) + 1); });
      const [topValue, topCount] = [...counts.entries()].sort((left, right) => right[1] - left[1])[0];
      details = `Most common: ${topValue} (${topCount})`;
    }
    return { type, missing, unique, details };
  }

  function analyzeCsv(input) {
    const rows = Array.isArray(input) ? input : parseCsv(input);
    if (rows.length < 2) throw new Error('The file must contain a header row and at least one data row.');
    const width = Math.max(...rows.map((row) => row.length));
    const normalized = rows.map((row) => [...row, ...Array(Math.max(0, width - row.length)).fill('')]);
    const headers = normalized[0].map((header, index) => String(header).trim() || `Column ${index + 1}`);
    const dataRows = normalized.slice(1);
    const duplicateCount = dataRows.length - new Set(dataRows.map((row) => JSON.stringify(row.map((value) => String(value).trim())))).size;
    let totalMissing = 0;
    const profiles = headers.map((header, index) => {
      const profile = profileColumn(dataRows.map((row) => row[index] ?? ''));
      totalMissing += profile.missing;
      return { header, ...profile };
    });
    const totalCells = dataRows.length * headers.length;
    const recommendations = [];
    if (totalMissing) recommendations.push(`Review ${totalMissing.toLocaleString()} missing cells before modeling or reporting.`);
    if (duplicateCount) recommendations.push(`Investigate ${duplicateCount.toLocaleString()} duplicate rows; remove them only when they are not legitimate repeated observations.`);
    profiles.filter((profile) => profile.missing / dataRows.length >= 0.3).forEach((profile) => recommendations.push(`${profile.header} is at least 30% missing and may need imputation, exclusion, or source review.`));
    profiles.filter((profile) => profile.unique === 1 && profile.missing < dataRows.length).forEach((profile) => recommendations.push(`${profile.header} has only one non-missing value and may add little analytical information.`));
    if (!recommendations.length) recommendations.push('No major structural data-quality concerns were detected by this basic profile. Continue with domain-specific validation.');
    return { headers, dataRows, profiles, rowCount: dataRows.length, columnCount: headers.length, totalMissing, missingPercent: totalCells ? (totalMissing / totalCells) * 100 : 0, duplicateCount, recommendations };
  }

  function appendTextElement(parent, tag, text) { const element = document.createElement(tag); element.textContent = text; parent.appendChild(element); return element; }

  function initialize() {
    if (typeof document === 'undefined') return;
    const fileInput = document.getElementById('csv-file');
    const analyzeButton = document.getElementById('analyze-csv');
    if (!fileInput || !analyzeButton) return;
    const resetButton = document.getElementById('reset-csv');
    const status = document.getElementById('csv-status');
    const results = document.getElementById('csv-results');
    const summary = document.getElementById('csv-summary');
    const columnBody = document.getElementById('column-profile-body');
    const previewHead = document.getElementById('preview-head');
    const previewBody = document.getElementById('preview-body');
    const recommendations = document.getElementById('csv-recommendations');
    const setStatus = (message, state) => { status.textContent = message; status.dataset.state = state || 'info'; };
    const clear = () => { summary.replaceChildren(); columnBody.replaceChildren(); previewHead.replaceChildren(); previewBody.replaceChildren(); recommendations.replaceChildren(); results.hidden = true; };
    const render = (profile) => {
      clear();
      [['Rows', profile.rowCount.toLocaleString()], ['Columns', profile.columnCount.toLocaleString()], ['Missing cells', `${profile.totalMissing.toLocaleString()} (${profile.missingPercent.toFixed(1)}%)`], ['Duplicate rows', profile.duplicateCount.toLocaleString()]].forEach(([label, value]) => { const box = document.createElement('div'); box.className = 'tools-metric'; appendTextElement(box, 'span', label); appendTextElement(box, 'strong', value); summary.appendChild(box); });
      profile.profiles.forEach((column) => { const row = document.createElement('tr'); [column.header, column.type, `${column.missing.toLocaleString()} (${((column.missing / profile.rowCount) * 100).toFixed(1)}%)`, column.unique.toLocaleString(), column.details].forEach((value) => appendTextElement(row, 'td', value)); columnBody.appendChild(row); });
      const headerRow = document.createElement('tr'); profile.headers.forEach((header) => appendTextElement(headerRow, 'th', header)); previewHead.appendChild(headerRow);
      profile.dataRows.slice(0, 10).forEach((values) => { const row = document.createElement('tr'); profile.headers.forEach((_, index) => appendTextElement(row, 'td', values[index] ?? '')); previewBody.appendChild(row); });
      profile.recommendations.forEach((item) => appendTextElement(recommendations, 'li', item)); results.hidden = false;
    };
    analyzeButton.addEventListener('click', async () => {
      clear(); analyzeButton.disabled = true;
      try { const file = fileInput.files?.[0]; validateFileMetadata(file); setStatus('Analyzing the file locally…', 'info'); render(analyzeCsv(await file.text())); setStatus(`Analysis complete: ${file.name}. The file was not uploaded.`, 'success'); }
      catch (error) { setStatus(error.message || 'The CSV could not be analyzed.', 'error'); }
      finally { analyzeButton.disabled = false; }
    });
    resetButton.addEventListener('click', () => { fileInput.value = ''; clear(); setStatus('Choose a CSV file to begin.', 'info'); fileInput.focus(); });
  }

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize); else initialize();
  }
  return { MAX_FILE_SIZE, escapeHtml, validateFileMetadata, parseCsv, isMissing, inferType, profileColumn, analyzeCsv, initialize };
}));
