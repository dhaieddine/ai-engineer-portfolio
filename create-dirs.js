#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const basePath = path.join(__dirname, 'app', 'services');
const dirs = [
  path.join(basePath, 'ai-engineering'),
  path.join(basePath, 'data-science'),
  path.join(basePath, 'data-engineering'),
];

try {
  // Create directories
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`Created: ${dir}`);
    }
  });

  // Create placeholder files so directories are tracked
  const placeholders = [
    { dir: 'ai-engineering', file: 'page.tsx' },
    { dir: 'data-science', file: 'page.tsx' },
    { dir: 'data-engineering', file: 'page.tsx' },
  ];

  placeholders.forEach(({ dir, file }) => {
    const filePath = path.join(basePath, dir, file);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, '// Placeholder - to be replaced\n', 'utf8');
      console.log(`Created: ${filePath}`);
    }
  });

  console.log('Setup complete!');
} catch (err) {
  console.error('Error:', err.message);
  process.exit(1);
}


