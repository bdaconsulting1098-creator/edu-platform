const { execSync } = require('child_process');
const fs = require('fs');

// Rename middleware.ts to proxy.ts for Next.js 16
const mwPath = 'C:/Users/bdademo/.qclaw/workspace/edu-platform/middleware.ts';
const proxyPath = 'C:/Users/bdademo/.qclaw/workspace/edu-platform/proxy.ts';

if (fs.existsSync(mwPath)) {
  fs.copyFileSync(mwPath, proxyPath);
  fs.unlinkSync(mwPath);
  console.log('Renamed middleware.ts -> proxy.ts');
}

// Update next.config.ts: remove experimental.typedRoutes, make typedRoutes top-level
const configPath = 'C:/Users/bdademo/.qclaw/workspace/edu-platform/next.config.ts';
let config = fs.readFileSync(configPath, 'utf8');
config = config.replace(
  'const nextConfig: NextConfig = {\n  experimental: {\n    typedRoutes: true,\n  },\n};',
  'const nextConfig: NextConfig = {\n  typedRoutes: true,\n};'
);
fs.writeFileSync(configPath, config);
console.log('Updated next.config.ts');

// Install next@16.0.10
try {
  execSync('npm install next@16.0.10 --save', { stdio: 'inherit', cwd: 'C:/Users/bdademo/.qclaw/workspace/edu-platform' });
} catch(e) { console.error(e.message); }
