const fs = require('fs');

// Read the broken zh.json
let zh = fs.readFileSync('./messages/zh.json', 'utf8');

// Read the clean stories
const cleanStories = JSON.parse(fs.readFileSync('./stories-clean.json', 'utf8'));

// First, let's find the actual position of success.stories in the broken file
// by looking for "success": and the stories array start [
console.log('Looking for success in zh.json...');

const successMatch = zh.match(/"success"\s*:/);
if (successMatch) {
  console.log('Found success at position:', zh.indexOf('"success":'));
}

// Now just write a completely new zh.json with the success section replaced
// We need to read the original - but we can't since it's broken
// So let's just write a minimal valid JSON that just contains what we need
// (actually, that's not going to work since next-intl needs more keys)

// Alternative: Parse and rebuild
// The issue is there's a stray }, on newlines
// Let's see if we can find the issue and fix it

// Actually, let's just completely replace the success section
// Find "success": { ... stories: [ ... ] }
// and replace stories: [...] with our clean array

// Find the start of stories array
const storiesStartIdx = zh.indexOf('"stories":');
console.log('stories start at:', storiesStartIdx);

// Let's try a simple approach: Find and replace the [ after "stories": until the matching ]
// Actually that's complex due to nested arrays

// Let's try a completely different approach:
// Just restore the entire file by finding the success.stories in the original backup source
// But we don't have one.

// Let's try creating a minimal valid JSON just for testing - what if we just comment out/remove the broken lines?
// Actually we can try to find lines that are just }, and remove them

// New approach: Find and patch the specific lines with }, alone
let lines = zh.split('\n');
let fixedLines = [];
let prevWasQuote = false;
let i = 0;
while (i < lines.length) {
  const line = lines[i].trim();
  // Skip lines that are just }, or just ,
  if (line === '},' || line === ',') {
    // Skip this line
    i++;
    continue;
  }
  fixedLines.push(lines[i]);
  i++;
}

let fixed = fixedLines.join('\n');
try {
  const parsed = JSON.parse(fixed);
  console.log('SUCCESS! JSON is now valid after removing spurious lines');
  fs.writeFileSync('./messages/zh.json', JSON.stringify(parsed, null, 2) + '\n');
} catch(e) {
  console.log('Still broken:', e.message);
  // Try replacing stories section specifically
  console.log('Trying to replace stories section...');
}