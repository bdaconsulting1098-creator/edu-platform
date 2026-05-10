const fs = require('fs');
try {
  const data = JSON.parse(fs.readFileSync('./messages/zh.json', 'utf8'));
  console.log('Stories count:', data.success.stories.length);
} catch(e) {
  console.log('Error:', e.message);
}