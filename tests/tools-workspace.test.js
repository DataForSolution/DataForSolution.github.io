'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const csv = require('../assets/js/csv-profiler.js');
const tools = require('../assets/js/tools-workspace.js');

test('CSV parser handles quoted commas, escaped quotes, and CRLF', () => {
  assert.deepEqual(csv.parseCsv('name,note\r\nAda,"hello, world"\r\nLin,"said ""yes"""\r\n'), [
    ['name', 'note'], ['Ada', 'hello, world'], ['Lin', 'said "yes"']
  ]);
});

test('CSV profile reports missing cells and duplicate rows', () => {
  const result = csv.analyzeCsv('name,value\nAda,1\nAda,1\nLin,\n');
  assert.equal(result.totalMissing, 1);
  assert.equal(result.duplicateCount, 1);
  assert.equal(result.rowCount, 3);
});

test('CSV content resembling markup is escaped and retained as text data', () => {
  const payload = '<script>alert("x")</script>';
  assert.equal(csv.escapeHtml(payload), '&lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt;');
  assert.equal(csv.analyzeCsv('value\n<script>alert(1)</script>').dataRows[0][0], '<script>alert(1)</script>');
});

test('CSV validation rejects empty, invalid, and oversized inputs', () => {
  assert.throws(() => csv.parseCsv('  '), /empty/i);
  assert.throws(() => csv.parseCsv('a,b\n"open,1'), /unclosed/i);
  assert.throws(() => csv.validateFileMetadata({ name: 'data.txt', size: 10 }), /\.csv/);
  assert.throws(() => csv.validateFileMetadata({ name: 'data.csv', size: csv.MAX_FILE_SIZE + 1 }), /10 MB/);
});

test('browser CSV safety fixture retains text and reports quality issues', () => {
  const fixture = fs.readFileSync(path.join(__dirname, 'fixtures', 'csv-safety.csv'), 'utf8');
  const result = csv.analyzeCsv(fixture);
  assert.equal(result.totalMissing, 2);
  assert.equal(result.duplicateCount, 1);
  assert.equal(result.dataRows[3][1], '<script>alert(1)</script>');
});

test('statistics match known fixtures', () => {
  const result = tools.calculateStatistics([1, 2, 3, 4, 5]);
  assert.deepEqual({ count: result.count, sum: result.sum, mean: result.mean, median: result.median, minimum: result.minimum, maximum: result.maximum, range: result.range, q1: result.q1, q3: result.q3, iqr: result.iqr }, { count: 5, sum: 15, mean: 3, median: 3, minimum: 1, maximum: 5, range: 4, q1: 1.5, q3: 4.5, iqr: 3 });
  assert.ok(Math.abs(result.populationStdDev - Math.sqrt(2)) < 1e-12);
  assert.ok(Math.abs(result.sampleStdDev - Math.sqrt(2.5)) < 1e-12);
});

test('statistics parser accepts comma and newline separators and rejects invalid values', () => {
  assert.deepEqual(tools.parseNumbers('1, 2\n3'), [1, 2, 3]);
  assert.throws(() => tools.parseNumbers('1, nope'), /invalid/i);
  assert.equal(tools.calculateStatistics([7]).sampleStdDev, null);
});

test('classification formulas match an independently known confusion matrix', () => {
  const result = tools.calculateClassificationMetrics({ tp: 40, fp: 10, tn: 30, fn: 20 });
  assert.equal(result.accuracy, 0.7);
  assert.equal(result.precision, 0.8);
  assert.equal(result.recall, 2 / 3);
  assert.equal(result.specificity, 0.75);
  assert.equal(result.f1, 8 / 11);
  assert.equal(result.npv, 0.6);
  assert.equal(result.balancedAccuracy, ((2 / 3) + 0.75) / 2);
  assert.equal(result.prevalence, 0.6);
});

test('classification zero denominators are explicit', () => {
  const result = tools.calculateClassificationMetrics({ tp: 0, fp: 0, tn: 5, fn: 0 });
  assert.equal(result.precision, null);
  assert.equal(result.recall, null);
  assert.equal(result.balancedAccuracy, null);
  assert.throws(() => tools.calculateClassificationMetrics({ tp: 0, fp: 0, tn: 0, fn: 0 }), /at least one/);
});

test('career comparison is deterministic and produces no score', () => {
  const result = tools.compareCareerTexts('Python SQL healthcare analytics Python', 'Seeking Python and SQL for healthcare data analysis');
  assert.deepEqual(result.overlap, ['healthcare', 'python', 'sql']);
  assert.ok(result.jobOnly.includes('analysis'));
  assert.ok(result.repeatedTechnical.includes('python'));
  assert.equal(Object.hasOwn(result, 'score'), false);
});
