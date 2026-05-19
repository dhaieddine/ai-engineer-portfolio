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

console.log('Directories created!');
