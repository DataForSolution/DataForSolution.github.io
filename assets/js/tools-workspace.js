(function toolsWorkspaceModule(root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.DataForSolutionTools = api;
}(typeof globalThis !== 'undefined' ? globalThis : this, function buildToolsWorkspace() {
  'use strict';

  const STOP_WORDS = new Set('a an and are as at be by for from has have in is it of on or that the this to was were will with you your our we they their role work working experience required preferred including using'.split(' '));
  const TECHNICAL_PHRASES = ['machine learning', 'deep learning', 'data science', 'data analysis', 'data visualization', 'business intelligence', 'natural language processing', 'medical imaging', 'responsible ai', 'computer vision', 'power bi', 'scikit-learn'];
  const TOPIC_GROUPS = {
    'Programming and querying': ['python', 'r', 'sql', 'javascript', 'java', 'scala'],
    'Data and analytics': ['analytics', 'statistics', 'excel', 'tableau', 'power bi', 'pandas', 'numpy', 'visualization'],
    'Machine learning and AI': ['machine learning', 'deep learning', 'pytorch', 'tensorflow', 'scikit-learn', 'nlp', 'natural language processing', 'computer vision'],
    'Engineering and platforms': ['aws', 'azure', 'gcp', 'docker', 'kubernetes', 'spark', 'git', 'airflow'],
    'Healthcare and responsible AI': ['healthcare', 'clinical', 'medical imaging', 'fairness', 'explainability', 'responsible ai']
  };

  const ROLE_GUIDANCE = {
    'data-analyst': { title: 'Data Analyst', skills: ['SQL and data validation', 'descriptive statistics', 'spreadsheet and BI workflows', 'clear stakeholder communication'], projects: ['Exploratory analysis with documented data-quality checks', 'A decision-focused dashboard with metric definitions', 'A reproducible SQL analysis'], priorities: ['Practice translating questions into measurable definitions', 'Document assumptions and data limitations', 'Learn accessible chart and table design'], links: [['Spark ingestion validation project', '/projects/'], ['Data and AI resources', '/resources/'], ['Microsoft Learn: data analytics', 'https://learn.microsoft.com/training/career-paths/data-analyst']] },
    'data-scientist': { title: 'Data Scientist', skills: ['Python and SQL', 'statistics and experimental reasoning', 'leakage-safe model evaluation', 'clear communication of uncertainty'], projects: ['A classification study with an explicit validation design', 'A model-comparison project with error analysis', 'A responsible-AI evaluation'], priorities: ['Strengthen probability and statistical inference', 'Use pipelines and reproducible environments', 'Separate predictive performance from deployment readiness'], links: [['Pima diabetes evaluation project', 'https://github.com/DataForSolution/Data-Solution/tree/Master/portfolio/pima-diabetes-ml'], ['Scikit-learn model evaluation guide', 'https://scikit-learn.org/stable/modules/model_evaluation.html']] },
    'ml-engineer': { title: 'Machine Learning Engineer', skills: ['Software engineering and testing', 'model packaging and reproducibility', 'data and inference pipelines', 'monitoring and failure handling'], projects: ['A tested inference service or library', 'A data-contract and validation pipeline', 'A model evaluation package with deterministic fixtures'], priorities: ['Build reliable interfaces around models', 'Learn deployment tradeoffs without hiding limitations', 'Treat observability, privacy, and rollback as product requirements'], links: [['Chest CT classification project', 'https://github.com/DataForSolution/Data-Solution/tree/Master/portfolio/chest-ct-classification'], ['Google Rules of ML', 'https://developers.google.com/machine-learning/guides/rules-of-ml']] },
    'bi-developer': { title: 'BI / Analytics Developer', skills: ['Dimensional modeling and SQL', 'metric governance', 'dashboard interaction and accessibility', 'refresh and data-quality monitoring'], projects: ['A semantic model with documented measures', 'An operational dashboard with quality guardrails', 'A source-to-report lineage example'], priorities: ['Define metrics before formatting dashboards', 'Test filters, totals, and empty states', 'Design for decision-making and accessibility'], links: [['Data engineering portfolio', '/projects/'], ['Microsoft Learn: Power BI', 'https://learn.microsoft.com/power-bi/']] },
    'ai-research': { title: 'AI / Applied Research', skills: ['Experimental design', 'literature review and provenance', 'robust evaluation', 'responsible reporting and reproducibility'], projects: ['A controlled robustness or fairness study', 'A transparent benchmark reproduction', 'An explainability comparison with known limits'], priorities: ['Pre-register hypotheses and evaluation choices where practical', 'Distinguish exploratory from confirmatory findings', 'Publish limitations and negative results'], links: [['Adversarial robustness project', 'https://github.com/DataForSolution/Data-Solution/tree/Master/portfolio/adversarial-robustness'], ['Fairness evaluation project', 'https://github.com/DataForSolution/Data-Solution/tree/Master/portfolio/fairness-evaluation']] }
  };

  function parseNumbers(input) {
    const pieces = String(input ?? '').split(/[\n,]/).map((piece) => piece.trim()).filter(Boolean);
    if (!pieces.length) throw new Error('Enter at least one number.');
    const invalid = pieces.filter((piece) => !Number.isFinite(Number(piece)));
    if (invalid.length) throw new Error(`Invalid numeric value: ${invalid[0]}`);
    return pieces.map(Number);
  }

  function median(sortedNumbers) {
    const middle = Math.floor(sortedNumbers.length / 2);
    return sortedNumbers.length % 2 ? sortedNumbers[middle] : (sortedNumbers[middle - 1] + sortedNumbers[middle]) / 2;
  }

  function calculateStatistics(values) {
    if (!Array.isArray(values) || !values.length || values.some((value) => !Number.isFinite(value))) throw new Error('Statistics require one or more finite numbers.');
    const sorted = [...values].sort((left, right) => left - right);
    const count = sorted.length;
    const sum = sorted.reduce((total, value) => total + value, 0);
    const mean = sum / count;
    const midpoint = Math.floor(count / 2);
    const lower = sorted.slice(0, midpoint);
    const upper = sorted.slice(count % 2 ? midpoint + 1 : midpoint);
    const q1 = count === 1 ? sorted[0] : median(lower);
    const q3 = count === 1 ? sorted[0] : median(upper);
    const squaredDeviationSum = sorted.reduce((total, value) => total + ((value - mean) ** 2), 0);
    return { count, sum, mean, median: median(sorted), minimum: sorted[0], maximum: sorted[count - 1], range: sorted[count - 1] - sorted[0], q1, q3, iqr: q3 - q1, populationStdDev: Math.sqrt(squaredDeviationSum / count), sampleStdDev: count > 1 ? Math.sqrt(squaredDeviationSum / (count - 1)) : null };
  }

  function safeDivide(numerator, denominator) { return denominator === 0 ? null : numerator / denominator; }

  function calculateClassificationMetrics({ tp, fp, tn, fn }) {
    const counts = [tp, fp, tn, fn];
    if (counts.some((value) => !Number.isInteger(value) || value < 0)) throw new Error('Enter non-negative whole numbers for all four counts.');
    const total = tp + fp + tn + fn;
    if (!total) throw new Error('The confusion matrix must contain at least one observation.');
    const recall = safeDivide(tp, tp + fn);
    const specificity = safeDivide(tn, tn + fp);
    return { accuracy: safeDivide(tp + tn, total), precision: safeDivide(tp, tp + fp), recall, specificity, f1: safeDivide(2 * tp, (2 * tp) + fp + fn), npv: safeDivide(tn, tn + fn), balancedAccuracy: recall === null || specificity === null ? null : (recall + specificity) / 2, prevalence: safeDivide(tp + fn, total) };
  }

  function normalizeText(text) { return String(text ?? '').toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9+#.\-\s]/g, ' '); }

  function extractTerms(text) {
    const normalized = normalizeText(text);
    const counts = new Map();
    normalized.split(/\s+/).filter((word) => word.length > 2 && !STOP_WORDS.has(word) && !/^\d+$/.test(word)).forEach((word) => counts.set(word, (counts.get(word) || 0) + 1));
    TECHNICAL_PHRASES.forEach((phrase) => { const matches = normalized.match(new RegExp(`\\b${phrase.replace(' ', '\\s+')}\\b`, 'g')); if (matches) counts.set(phrase, matches.length); });
    return counts;
  }

  function compareCareerTexts(resumeText, jobText) {
    if (!String(resumeText).trim() || !String(jobText).trim()) throw new Error('Paste both resume text and a job description.');
    const resume = extractTerms(resumeText);
    const job = extractTerms(jobText);
    const jobTerms = [...job.keys()];
    const overlap = jobTerms.filter((term) => resume.has(term)).sort();
    const jobOnly = jobTerms.filter((term) => !resume.has(term)).sort();
    const repeatedTechnical = [...new Set([...resume.keys(), ...job.keys()])].filter((term) => ((resume.get(term) || 0) + (job.get(term) || 0)) > 1 && (TECHNICAL_PHRASES.includes(term) || Object.values(TOPIC_GROUPS).flat().includes(term))).sort();
    const topicGroups = Object.entries(TOPIC_GROUPS).filter(([, terms]) => terms.some((term) => resume.has(term) || job.has(term))).map(([group]) => group);
    return { overlap, jobOnly, repeatedTechnical, topicGroups };
  }

  function formatNumber(value) { return Number(value).toLocaleString(undefined, { maximumFractionDigits: 4 }); }
  function formatPercent(value) { return value === null ? 'Not defined (zero denominator)' : `${(value * 100).toFixed(2)}%`; }
  function append(parent, tag, text) { const node = document.createElement(tag); node.textContent = text; parent.appendChild(node); return node; }
  function renderList(parent, heading, items, fallback) { append(parent, 'h4', heading); const list = document.createElement('ul'); if (items.length) items.forEach((item) => append(list, 'li', item)); else append(list, 'li', fallback); parent.appendChild(list); }
  function setStatus(element, message, state) { element.textContent = message; element.dataset.state = state || 'info'; }

  function initializeTabs() {
    const tabs = [...document.querySelectorAll('[data-workspace-tab]')];
    const panels = [...document.querySelectorAll('[data-workspace-panel]')];
    if (!tabs.length) return;
    const activate = (requested, updateHash) => {
      const id = panels.some((panel) => panel.id === requested) ? requested : 'data-tools';
      tabs.forEach((tab) => { const active = tab.dataset.workspaceTab === id; tab.setAttribute('aria-selected', String(active)); tab.tabIndex = active ? 0 : -1; });
      panels.forEach((panel) => { panel.hidden = panel.id !== id; });
      if (updateHash && history.replaceState) history.replaceState(null, '', `#${id}`);
    };
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => activate(tab.dataset.workspaceTab, true));
      tab.addEventListener('keydown', (event) => { if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return; event.preventDefault(); let next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length; tabs[next].focus(); activate(tabs[next].dataset.workspaceTab, true); });
    });
    activate(location.hash.slice(1), false);
    window.addEventListener('hashchange', () => activate(location.hash.slice(1), false));
  }

  function initializeStatistics() {
    const input = document.getElementById('statistics-input'); if (!input) return;
    const status = document.getElementById('statistics-status'); const results = document.getElementById('statistics-results');
    document.getElementById('calculate-statistics').addEventListener('click', () => {
      results.replaceChildren(); results.hidden = true;
      try { const stats = calculateStatistics(parseNumbers(input.value)); const labels = [['Count', stats.count], ['Sum', stats.sum], ['Mean', stats.mean], ['Median', stats.median], ['Minimum', stats.minimum], ['Maximum', stats.maximum], ['Range', stats.range], ['Q1', stats.q1], ['Q3', stats.q3], ['IQR', stats.iqr], ['Population standard deviation', stats.populationStdDev], ['Sample standard deviation', stats.sampleStdDev === null ? 'Not defined for one value' : stats.sampleStdDev]]; const list = document.createElement('dl'); labels.forEach(([label, value]) => { append(list, 'dt', label); append(list, 'dd', typeof value === 'number' ? formatNumber(value) : value); }); results.appendChild(list); append(results, 'p', 'Quartiles use the median-of-halves method. The sample standard deviation divides by n − 1; the population standard deviation divides by n.'); results.hidden = false; setStatus(status, `Calculated ${stats.count} supplied values.`, 'success'); }
      catch (error) { setStatus(status, error.message, 'error'); }
    });
    document.getElementById('reset-statistics').addEventListener('click', () => { input.value = ''; results.replaceChildren(); results.hidden = true; setStatus(status, 'Enter at least one number.', 'info'); input.focus(); });
  }

  function initializeMetrics() {
    const ids = ['tp', 'fp', 'tn', 'fn']; const inputs = Object.fromEntries(ids.map((id) => [id, document.getElementById(`metric-${id}`)])); if (!inputs.tp) return;
    const status = document.getElementById('metrics-status'); const results = document.getElementById('metrics-results');
    document.getElementById('calculate-metrics').addEventListener('click', () => {
      results.replaceChildren(); results.hidden = true;
      try { const values = Object.fromEntries(ids.map((id) => [id, Number(inputs[id].value)])); if (ids.some((id) => inputs[id].value === '')) throw new Error('Enter all four confusion-matrix counts.'); const metrics = calculateClassificationMetrics(values); const labels = [['Accuracy', metrics.accuracy], ['Precision / PPV', metrics.precision], ['Recall / sensitivity', metrics.recall], ['Specificity', metrics.specificity], ['F1', metrics.f1], ['NPV', metrics.npv], ['Balanced accuracy', metrics.balancedAccuracy], ['Prevalence', metrics.prevalence]]; const list = document.createElement('dl'); labels.forEach(([label, value]) => { append(list, 'dt', label); append(list, 'dd', formatPercent(value)); }); results.appendChild(list); append(results, 'p', 'These metrics describe only the supplied confusion matrix. They do not prove generalization, fairness, usefulness, or clinical validity.'); results.hidden = false; setStatus(status, 'Metrics calculated. Undefined ratios are identified explicitly.', 'success'); }
      catch (error) { setStatus(status, error.message, 'error'); }
    });
    document.getElementById('reset-metrics').addEventListener('click', () => { ids.forEach((id) => { inputs[id].value = ''; }); results.replaceChildren(); results.hidden = true; setStatus(status, 'Enter four non-negative whole-number counts.', 'info'); inputs.tp.focus(); });
  }

  function initializeCareer() {
    const resume = document.getElementById('career-resume'); if (!resume) return;
    const job = document.getElementById('career-job'); const status = document.getElementById('career-status'); const results = document.getElementById('career-results');
    document.getElementById('compare-career-text').addEventListener('click', () => { results.replaceChildren(); results.hidden = true; try { const comparison = compareCareerTexts(resume.value, job.value); renderList(results, 'Terms in both texts', comparison.overlap, 'No shared terms were identified.'); renderList(results, 'Job-description terms not found in the resume', comparison.jobOnly, 'No additional job-description terms were identified.'); renderList(results, 'Repeated technical terms', comparison.repeatedTechnical, 'No repeated technical terms were identified.'); renderList(results, 'Possible topic groups', comparison.topicGroups, 'No configured topic group was identified.'); append(results, 'p', 'Review these terms against your real experience. This is a text-comparison aid, not an ATS score or hiring prediction.'); results.hidden = false; setStatus(status, 'Comparison complete. No score was calculated.', 'success'); } catch (error) { setStatus(status, error.message, 'error'); } });
    document.getElementById('reset-career-text').addEventListener('click', () => { resume.value = ''; job.value = ''; results.replaceChildren(); results.hidden = true; setStatus(status, 'Paste both documents to begin.', 'info'); resume.focus(); });
    const role = document.getElementById('career-role'); const roleResults = document.getElementById('career-role-results');
    role.addEventListener('change', () => { roleResults.replaceChildren(); const guidance = ROLE_GUIDANCE[role.value]; if (!guidance) { roleResults.hidden = true; return; } roleResults.hidden = false; append(roleResults, 'h4', guidance.title); renderList(roleResults, 'Core skill areas', guidance.skills, ''); renderList(roleResults, 'Useful project types', guidance.projects, ''); renderList(roleResults, 'Learning priorities', guidance.priorities, ''); append(roleResults, 'h4', 'Relevant projects and maintained sources'); const links = document.createElement('div'); links.className = 'tools-inline-links'; guidance.links.forEach(([label, href]) => { const link = document.createElement('a'); link.textContent = label; link.href = href; if (/^https:/.test(href)) { link.target = '_blank'; link.rel = 'noopener noreferrer'; } links.appendChild(link); }); roleResults.appendChild(links); });
    document.getElementById('reset-career-role').addEventListener('click', () => { role.value = ''; roleResults.replaceChildren(); roleResults.hidden = true; role.focus(); });
  }

  function initialize() { if (typeof document === 'undefined') return; initializeTabs(); initializeStatistics(); initializeMetrics(); initializeCareer(); }
  if (typeof document !== 'undefined') { if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize); else initialize(); }
  return { ROLE_GUIDANCE, parseNumbers, calculateStatistics, calculateClassificationMetrics, extractTerms, compareCareerTexts, initialize };
}));
