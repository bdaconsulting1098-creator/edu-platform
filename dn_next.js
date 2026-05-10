const { execSync } = require('child_process');
const vercel = 'C:\\Users\\bdademo\\AppData\\Roaming\\QClaw\\npm-global\\vercel.cmd';

try {
  execSync('npm install next@16.0.10 --save', { stdio: 'inherit', cwd: 'C:/Users/bdademo/.qclaw/workspace/edu-platform' });
} catch(e) { console.error(e.message); }

const result = execSync(`"${vercel}" deploy --prod --yes`, {
  cwd: 'C:/Users/bdademo/.qclaw/workspace/edu-platform',
  encoding: 'utf8',
});
console.log(result);
