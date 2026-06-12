#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Since we don't have image creation libraries readily available,
// let's copy an existing project image as a temporary placeholder
const projectsDir = path.join(__dirname, 'public', 'projects');

// Create placeholders by copying existing images
const sourceImage = path.join(projectsDir, 'job-intelligent.jpg');
const homesmartImage = path.join(projectsDir, 'homesmart-ai.jpg');

try {
  if (fs.existsSync(sourceImage)) {
    // Copy for homesmart-ai if it doesn't exist
    if (!fs.existsSync(homesmartImage)) {
      fs.copyFileSync(sourceImage, homesmartImage);
      console.log('✓ Created homesmart-ai.jpg placeholder');
    } else {
      console.log('✓ homesmart-ai.jpg already exists');
    }
  } else {
    console.warn('⚠ Source image not found, but that\'s okay for now');
  }
} catch (error) {
  console.error('Error creating placeholder:', error.message);
}
