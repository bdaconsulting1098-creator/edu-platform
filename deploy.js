const { execSync } = require('child_process');

// Use npx to run vercel
execSync('npx vercel --prod', {
  cwd: 'C:/Users/bdademo/.qclaw/workspace/edu-platform',
  stdio: 'inherit',
  env: { ...process.env, NODE_PATH: undefined }
});
