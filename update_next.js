const { execSync } = require('child_process');
try {
  execSync('npm install next@latest --save', { stdio: 'inherit', cwd: 'C:/Users/bdademo/.qclaw/workspace/edu-platform' });
} catch(e) {}
