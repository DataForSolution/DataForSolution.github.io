'use strict';

const assert = require('node:assert/strict');
const discover = require('../assets/js/discover.js');

const items = [
  { title: 'CSV Data Profiler', category: 'Tools', type: 'Data tool', description: 'Inspect missing values and duplicate rows.', keywords: ['csv', 'data quality'], url: '/toolkits/#data-tools' },
  { title: 'What Is Data?', category: 'Learn', type: 'Lesson', description: 'Understand how observations become records.', keywords: ['dataset', 'beginner'], url: '/learn/data-science/level-1/module-1/' },
  { title: 'Chest CT Classification', category: 'Projects', type: 'Healthcare project', description: 'Medical-imaging transfer-learning reconstruction.', keywords: ['ct', 'medical imaging', 'tensorflow'], url: 'https://github.com/DataForSolution/Data-Solution/tree/Master/portfolio/chest-ct-classification', external: true }
];

assert.equal(discover.normalize("  Responsible AI's Test!  "), 'responsible ais test');
assert.deepEqual(discover.tokenize(' medical   imaging '), ['medical', 'imaging']);
assert.equal(discover.searchItems(items, 'csv', 'All')[0].title, 'CSV Data Profiler');
assert.equal(discover.searchItems(items, 'medical imaging', 'All')[0].title, 'Chest CT Classification');
assert.deepEqual(discover.searchItems(items, '', 'Learn').map((item) => item.title), ['What Is Data?']);
assert.equal(discover.searchItems(items, 'missing duplicate', 'Tools')[0].title, 'CSV Data Profiler');
assert.equal(discover.searchItems(items, 'nonexistent', 'All').length, 0);
assert.ok(discover.scoreItem(items[0], 'CSV Data Profiler') > discover.scoreItem(items[0], 'csv'));
assert.equal(discover.categoryFromParam('projects'), 'Projects');
assert.equal(discover.categoryFromParam('unknown'), 'All');
assert.equal(discover.isSafeUrl('/toolkits/#data-tools'), true);
assert.equal(discover.isSafeUrl('https://github.com/DataForSolution/Data-Solution'), true);
assert.equal(discover.isSafeUrl('javascript:alert(1)'), false);
assert.equal(discover.isSafeUrl('//evil.example'), false);

console.log('Discover tests passed.');
