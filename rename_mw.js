const fs = require('fs');
const src = 'C:/Users/bdademo/.qclaw/workspace/edu-platform/middleware.ts';
const dst = 'C:/Users/bdademo/.qclaw/workspace/edu-platform/proxy.ts';
try {
  fs.copyFileSync(src, dst);
  fs.unlinkSync(src);
  console.log('Renamed middleware.ts -> proxy.ts');
} catch(e) {
  console.error(e.message);
}
