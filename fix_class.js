const fs = require('fs');
const path = require('path');

const root = 'C:/Users/bdademo/.qclaw/workspace/edu-platform';
const files = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (full.endsWith('.tsx') || full.endsWith('.ts')) files.push(full);
  }
}
walk(root);

let count = 0;
for (const fpath of files) {
  try {
    let content = fs.readFileSync(fpath, 'utf-8');
    const re = /\bclass=/g;
    if (re.test(content)) {
      content = content.replace(re, 'className=');
      fs.writeFileSync(fpath, content, 'utf-8');
      console.log('Fixed:', fpath);
      count++;
    }
  } catch (e) {
    console.error('Error:', fpath, e.message);
  }
}
console.log('Done. Files fixed:', count);
