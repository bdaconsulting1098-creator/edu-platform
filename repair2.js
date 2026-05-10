const fs = require('fs');

// Read as raw text
let zh = fs.readFileSync('./messages/zh.json', 'utf8');

console.log('File length:', zh.length);

// The broken JSON has patterns like:
// "quote": "...",\n},\n{
//
// We need to fix this to:
// "quote": "...",\n  "tag": "...",\n},\n{

// Replace all occurrences of just '},' (when on its own line) with proper closing
// Actually the simpler fix: replace "\": \".*\",\n},\n{" with "\": \"...\",\n  \"tag\": \"...\"\n},\n{"

// But this is complex. Let's try simpler: 
// Just find the entire stories array boundary by looking for "\"stories\": [" and the matching close

// Actually, let's just find and remove lines that are exactly "," or exactly "}," within the stories section.

// Find where "stories": [ starts
const storiesStartPattern = '"stories":';
const storiesStart = zh.indexOf(storiesStartPattern);
console.log('Stories start at:', storiesStart);

// Find the end of the stories array (look for ], that's after the last story)
// Search backwards from end for the first ]
const arrEndMatch = zh.indexOf(']', storiesStart + 10);
console.log('Stories array ends at:', arrEndMatch);

// Extract just the stories portion (from stories: [ to ])
let storiesSection = zh.substring(storiesStart + storiesStartPattern.length, arrEndMatch + 1).trim();
console.log('Stories section starts with:', storiesSection.substring(0, 50));

// Now clean up this section
// The issue is lines that are just "}," or just ","
// Let's replace patterns:
// - "},\n{"  with proper replacement for the missing tag
// - remove lines that are just ","

let cleanStories = storiesSection
  .replace(/,\n\s*},/g, '\n  }')  // Fix }, alone on line
  .replace(/,\n\s*,/g, ',');       // Remove double commas

// Actually the real issue: each story is missing the tag field
// The original had: "tag": "职业转型",\n"photo": "..."
// We removed photo but should have kept tag. Let me add it back.

// Actually let's just completely rebuild the array using our clean JSON
const cleanStoriesJson = fs.readFileSync('./stories-clean.json', 'utf8');

// Now find and replace the stories section
// The old section starts with "stories": [ and ends with ]
let beforeStories = zh.substring(0, storiesStart + storiesStartPattern.length);
let afterStories = zh.substring(arrEndMatch + 1);

// New file content
let newZh = beforeStories + cleanStoriesJson + afterStories;

console.log('New zh.json length:', newZh.length);

// Write and test
fs.writeFileSync('./messages/zh-new.json', newZh);
console.log('Written to zh-new.json');

// Test if valid
try {
  JSON.parse(newZh);
  console.log('New JSON is valid!');
  // If valid, replace old
  fs.renameSync('./messages/zh.json', './messages/zh-old-broken.json');
  fs.renameSync('./messages/zh-new.json', './messages/zh.json');
  console.log('Replaced zh.json');
} catch(e) {
  console.log('New JSON still invalid:', e.message);
}