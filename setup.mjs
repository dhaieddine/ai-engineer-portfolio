const fs = require('fs');
const path = require('path');

const dirs = [
  'app/services/ai-engineering',
  'app/services/data-science',
  'app/services/data-engineering',
];

dirs.forEach(dir => {
  fs.mkdirSync(dir, { recursive: true });
});

// Copy homesmart-ai.jpg placeholder if it doesn't exist
const projectsDir = path.join(__dirname, 'public', 'projects');
const source = path.join(projectsDir, 'job-intelligent.jpg');
const dest = path.join(projectsDir, 'homesmart-ai.jpg');

try {
  if (!fs.existsSync(dest) && fs.existsSync(source)) {
    fs.copyFileSync(source, dest);
    console.log('✓ Project image placeholder created');
  }
} catch (e) {
  // Silently fail
}

console.log('Directories created!');
