// This is a placeholder JavaScript file that will copy the job-intelligent image
// to homesmart-ai.jpg when npm install runs (via postinstall script)

const fs = require('fs');
const path = require('path');

function copyPlaceholder() {
  const projectsDir = path.join(__dirname, 'public', 'projects');
  const source = path.join(projectsDir, 'job-intelligent.jpg');
  const dest = path.join(projectsDir, 'homesmart-ai.jpg');
  
  try {
    // Only copy if destination doesn't exist
    if (!fs.existsSync(dest) && fs.existsSync(source)) {
      fs.copyFileSync(source, dest);
    }
  } catch (e) {
    // Silently fail - missing image will fallback to placeholder
  }
}

if (require.main === module) {
  copyPlaceholder();
}

module.exports = { copyPlaceholder };
