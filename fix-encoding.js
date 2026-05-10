const fs = require('fs');
const path = require('path');

const baseDir = 'C:\\Users\\bdademo\\.qclaw\\workspace\\edu-platform';

// Read the corrupted UTF-8 file
const corruptedUtf8 = fs.readFileSync(path.join(baseDir, 'messages/zh.json'), 'utf8');

// Convert UTF-8 string back to the original bytes
// The process: UTF-8 bytes -> Windows-1252 interpretation -> UTF-8 encoding
// Reverse: UTF-8 chars -> Windows-1252 bytes -> UTF-8 interpretation

// Step 1: Convert each character to its Windows-1252 byte value
const bytes = [];
for (let i = 0; i < corruptedUtf8.length; i++) {
  const char = corruptedUtf8[i];
  const cp = char.charCodeAt(0);
  
  if (cp < 256) {
    // ASCII range - same in both encodings
    bytes.push(cp);
  } else if (cp >= 256 && cp <= 65535) {
    // These were originally Windows-1252 bytes (0x80-0xFF)
    // The code point value IS the original byte value in Windows-1252
    // Because Windows-1252 maps bytes 0x80-0xFF directly to U+0080-U+00FF
    // EXCEPT: 0x80-0x9F in Windows-1252 map to U+20AC, U+201A, U+0192, U+201E, U+2026, U+2020, U+2021, U+02C6, U+2030, U+0160, U+2039, U+0152, U+008D (undefined), U+017D, U+008F (undefined), U+0090 (undefined), U+2018, U+2019, U+201C, U+201D, U+2022, U+2013, U+2014, U+02DC, U+2122, U+0161, U+203A, U+0153, U+009D (undefined), U+017E, U+0178
    
    // Common Windows-1252 special mappings
    const win1252ToUnicode = {
      0x20AC: 0x80, // Euro sign
      0x201A: 0x82, // Single low-9 quotation mark
      0x0192: 0x83, // Latin small letter f with hook
      0x201E: 0x84, // Double low-9 quotation mark
      0x2026: 0x85, // Horizontal ellipsis
      0x2020: 0x86, // Dagger
      0x2021: 0x87, // Double dagger
      0x02C6: 0x88, // Modifier letter circumflex accent
      0x2030: 0x89, // Per mille sign
      0x0160: 0x8A, // Latin capital letter S with caron
      0x2039: 0x8B, // Single left-pointing angle quotation mark
      0x0152: 0x8C, // Latin capital ligature OE
      0x017D: 0x8E, // Latin capital letter Z with caron
      0x2018: 0x91, // Left single quotation mark
      0x2019: 0x92, // Right single quotation mark
      0x201C: 0x93, // Left double quotation mark
      0x201D: 0x94, // Right double quotation mark
      0x2022: 0x95, // Bullet
      0x2013: 0x96, // En dash
      0x2014: 0x97, // Em dash
      0x02DC: 0x98, // Small tilde
      0x2122: 0x99, // Trade mark sign
      0x0161: 0x9A, // Latin small letter s with caron
      0x203A: 0x9B, // Single right-pointing angle quotation mark
      0x0153: 0x9C, // Latin small ligature oe
      0x017E: 0x9E, // Latin small letter z with caron
      0x0178: 0x9F, // Latin capital letter Y with diaeresis
    };
    
    if (win1252ToUnicode[cp] !== undefined) {
      bytes.push(win1252ToUnicode[cp]);
    } else if (cp >= 0x0100 && cp <= 0x00FF) {
      // This shouldn't happen - code points U+0100+ don't map to Windows-1252
      // But some might be in the Latin Extended-A range that maps back
      console.log(`Warning: code point ${cp} (0x${cp.toString(16)}) at position ${i}, char: ${char}`);
      bytes.push(cp); // Assume it's the original byte value
    } else {
      // Standard Latin-1 range (U+00A0-U+00FF) maps 1:1
      bytes.push(cp);
    }
  } else {
    // Surrogate pairs - handle UTF-16 encoded chars
    console.log(`Surrogate at ${i}: ${cp}`);
    // Skip for now, these shouldn't appear in double-encoded text
  }
}

// Step 2: Interpret these bytes as UTF-8
const fixed = Buffer.from(bytes).toString('utf8');

console.log('Fixed preview:');
console.log(fixed.substring(0, 300));

fs.writeFileSync(path.join(baseDir, 'messages/zh.json'), fixed);
console.log('\nFixed zh.json saved!');

// Also fix en.json
const corruptedEn = fs.readFileSync(path.join(baseDir, 'messages/en.json'), 'utf8');
const enBytes = [];
for (let i = 0; i < corruptedEn.length; i++) {
  const cp = corruptedEn.charCodeAt(i);
  if (cp < 256) {
    enBytes.push(cp);
  } else {
    const win1252ToUnicode = {
      0x20AC: 0x80, 0x201A: 0x82, 0x0192: 0x83, 0x201E: 0x84, 0x2026: 0x85,
      0x2020: 0x86, 0x2021: 0x87, 0x02C6: 0x88, 0x2030: 0x89, 0x0160: 0x8A,
      0x2039: 0x8B, 0x0152: 0x8C, 0x017D: 0x8E, 0x2018: 0x91, 0x2019: 0x92,
      0x201C: 0x93, 0x201D: 0x94, 0x2022: 0x95, 0x2013: 0x96, 0x2014: 0x97,
      0x02DC: 0x98, 0x2122: 0x99, 0x0161: 0x9A, 0x203A: 0x9B, 0x0153: 0x9C,
      0x017E: 0x9E, 0x0178: 0x9F,
    };
    if (win1252ToUnicode[cp] !== undefined) {
      enBytes.push(win1252ToUnicode[cp]);
    } else {
      enBytes.push(cp);
    }
  }
}
const fixedEn = Buffer.from(enBytes).toString('utf8');
fs.writeFileSync(path.join(baseDir, 'messages/en.json'), fixedEn);
console.log('Fixed en.json saved!');