import os, re

files = []
for root, dirs, filenames in os.walk('C:/Users/bdademo/.qclaw/workspace/edu-platform'):
    for f in filenames:
        if f.endswith('.tsx') or f.endswith('.ts'):
            files.append(os.path.join(root, f))

for fpath in files:
    try:
        with open(fpath, 'r', encoding='utf-8') as f:
            content = f.read()
        new = re.sub(r'\bclass=', 'className=', content)
        if new != content:
            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(new)
            print(f'Fixed: {fpath}')
    except Exception as e:
        print(f'Error {fpath}: {e}')
