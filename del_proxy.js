const fs = require('fs');
try {
  fs.unlinkSync('C:/Users/bdademo/.qclaw/workspace/edu-platform/proxy.ts');
  console.log('Deleted proxy.ts');
} catch(e) {
  console.error(e.message);
}
