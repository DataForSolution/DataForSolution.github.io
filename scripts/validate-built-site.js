'use strict';

const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(process.argv[2] || '_site');
const htmlFiles = [];

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(fullPath);
    else if (entry.name.endsWith('.html')) htmlFiles.push(fullPath);
  }
}

function builtTarget(url) {
  const urlPath = String(url).split(/[?#]/)[0];
  let target = path.join(root, decodeURIComponent(urlPath));
  if (urlPath.endsWith('/')) target = path.join(target, 'index.html');
  return target;
}

walk(root);
let checked = 0;
const broken = [];

for (const file of htmlFiles) {
  const source = fs.readFileSync(file, 'utf8');
  for (const match of source.matchAll(/(?:href|src)=["']([^"']+)["']/g)) {
    const original = match[1];
    if (!original.startsWith('/') || original.startsWith('//')) continue;
    const urlPath = original.split(/[?#]/)[0];
    if (!urlPath) continue;
    checked += 1;
    if (!fs.existsSync(builtTarget(original))) broken.push(`${path.relative(root, file)} -> ${original}`);
  }
}

const workspace = fs.readFileSync(path.join(root, 'toolkits', 'index.html'), 'utf8');
const ids = [...workspace.matchAll(/\sid=["']([^"']+)["']/g)].map((match) => match[1]);
const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
const labels = [...workspace.matchAll(/\sfor=["']([^"']+)["']/g)].map((match) => match[1]);
const unresolvedLabels = labels.filter((label) => !ids.includes(label));

const discoverPath = path.join(root, 'assets', 'data', 'discover-index.json');
const discoverFailures = [];
let discoverItems = [];
try {
  discoverItems = JSON.parse(fs.readFileSync(discoverPath, 'utf8'));
} catch (error) {
  discoverFailures.push(`Discover index is not valid JSON: ${error.message}`);
}

const allowedCategories = new Set(['Learn', 'Projects', 'Tools', 'Insights', 'Platform']);
if (!Array.isArray(discoverItems)) {
  discoverFailures.push('Discover index must be an array.');
  discoverItems = [];
}
if (discoverItems.length < 30) discoverFailures.push(`Discover index unexpectedly small: ${discoverItems.length}`);

const discoverKeys = new Set();
for (const item of discoverItems) {
  if (!item || !item.title || !item.category || !item.type || !item.url) {
    discoverFailures.push(`Incomplete Discover item: ${JSON.stringify(item)}`);
    continue;
  }
  if (!allowedCategories.has(item.category)) discoverFailures.push(`Unexpected Discover category: ${item.category}`);
  const key = `${item.title}|${item.url}`;
  if (discoverKeys.has(key)) discoverFailures.push(`Duplicate Discover item: ${key}`);
  discoverKeys.add(key);
  if (String(item.url).startsWith('/') && !String(item.url).startsWith('//') && !fs.existsSync(builtTarget(item.url))) {
    discoverFailures.push(`Discover internal target missing: ${item.title} -> ${item.url}`);
  }
  if (!String(item.url).startsWith('/') && !String(item.url).startsWith('https://')) {
    discoverFailures.push(`Unsafe Discover URL: ${item.title} -> ${item.url}`);
  }
}

const libraryFailures = [];
const libraryPath = path.join(root, 'library', 'index.html');
if (!fs.existsSync(libraryPath)) {
  libraryFailures.push('Reading Library route is missing.');
} else {
  const library = fs.readFileSync(libraryPath, 'utf8');
  if (!library.includes('Weekly Reading Notes')) libraryFailures.push('Reading Library is missing the weekly-reading section.');
  if (!library.includes('Professional Bookshelf')) libraryFailures.push('Reading Library is missing the professional-bookshelf section.');
  if (/href=["']\/[^"']*\.pdf(?:[?#][^"']*)?["']/i.test(library)) libraryFailures.push('Reading Library exposes a locally hosted PDF link.');
  if (/assets\/books\//i.test(library)) libraryFailures.push('Reading Library references the retired local books directory.');
}

const weeklyDirectory = path.join(root, 'library', 'weekly');
if (!fs.existsSync(weeklyDirectory)) libraryFailures.push('Weekly reading-note output directory is missing.');
const readingLibraryItem = discoverItems.find((item) => item.title === 'Reading Library' && item.url === '/library/');
if (!readingLibraryItem) libraryFailures.push('Discover index does not contain the Reading Library.');
const weeklyDiscoverItem = discoverItems.find((item) => item.type === 'Weekly reading note');
if (!weeklyDiscoverItem) libraryFailures.push('Discover index does not contain a weekly reading note.');

console.log(`HTML_FILES=${htmlFiles.length}`);
console.log(`INTERNAL_REFERENCES=${checked}`);
console.log(`BROKEN_INTERNAL=${broken.length}`);
console.log(`WORKSPACE_IDS=${ids.length}`);
console.log(`DUPLICATE_IDS=${duplicateIds.length}`);
console.log(`UNRESOLVED_LABELS=${unresolvedLabels.length}`);
console.log(`DISCOVER_ITEMS=${discoverItems.length}`);
console.log(`DISCOVER_FAILURES=${discoverFailures.length}`);
console.log(`LIBRARY_FAILURES=${libraryFailures.length}`);

if (broken.length || duplicateIds.length || unresolvedLabels.length || discoverFailures.length || libraryFailures.length) {
  [
    ...broken,
    ...duplicateIds.map((id) => `Duplicate id: ${id}`),
    ...unresolvedLabels.map((id) => `Label target missing: ${id}`),
    ...discoverFailures,
    ...libraryFailures
  ].forEach((failure) => console.error(failure));
  process.exitCode = 1;
}
