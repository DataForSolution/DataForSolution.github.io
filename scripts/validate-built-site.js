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
    let target = path.join(root, decodeURIComponent(urlPath));
    if (urlPath.endsWith('/')) target = path.join(target, 'index.html');
    if (!fs.existsSync(target)) broken.push(`${path.relative(root, file)} -> ${original}`);
  }
}

const workspace = fs.readFileSync(path.join(root, 'toolkits', 'index.html'), 'utf8');
const ids = [...workspace.matchAll(/\sid=["']([^"']+)["']/g)].map((match) => match[1]);
const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
const labels = [...workspace.matchAll(/\sfor=["']([^"']+)["']/g)].map((match) => match[1]);
const unresolvedLabels = labels.filter((label) => !ids.includes(label));

console.log(`HTML_FILES=${htmlFiles.length}`);
console.log(`INTERNAL_REFERENCES=${checked}`);
console.log(`BROKEN_INTERNAL=${broken.length}`);
console.log(`WORKSPACE_IDS=${ids.length}`);
console.log(`DUPLICATE_IDS=${duplicateIds.length}`);
console.log(`UNRESOLVED_LABELS=${unresolvedLabels.length}`);

if (broken.length || duplicateIds.length || unresolvedLabels.length) {
  [...broken, ...duplicateIds.map((id) => `Duplicate id: ${id}`), ...unresolvedLabels.map((id) => `Label target missing: ${id}`)].forEach((failure) => console.error(failure));
  process.exitCode = 1;
}
