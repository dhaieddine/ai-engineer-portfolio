#!/usr/bin/env node
/**
 * Quick Dev Server Launcher
 * Run this to start the development server immediately
 */

const { execSync } = require('child_process');
const path = require('path');
const os = require('os');

const projectDir = path.resolve(__dirname);

console.log('\n╔════════════════════════════════════════════════════════╗');
console.log('║  🚀 AI Engineer Portfolio - Dev Server Launcher        ║');
console.log('╚════════════════════════════════════════════════════════╝\n');

try {
  console.log('📦 Ensuring dependencies are installed...');
  execSync('npm install', { cwd: projectDir, stdio: 'pipe' });
  console.log('✅ Dependencies ready\n');

  console.log('🔧 Setting up directories...');
  execSync('npm run setup:dirs', { cwd: projectDir, stdio: 'pipe' });
  console.log('✅ Directories ready\n');

  console.log('🌐 Starting development server...\n');
  console.log('╔════════════════════════════════════════════════════════╗');
  console.log('║  🎉 Server running at: http://localhost:3000          ║');
  console.log('║  📁 Project: AI Engineer Portfolio                     ║');
  console.log('║  ✨ New: HomeSmart AI project page                    ║');
  console.log('║  🛑 Press Ctrl+C to stop                              ║');
  console.log('╚════════════════════════════════════════════════════════╝\n');

  // Start the development server with inherited stdio
  execSync('npm run dev', {
    cwd: projectDir,
    stdio: 'inherit'
  });
} catch (error) {
  if (error.status !== null) {
    // Command exited with non-zero status (likely Ctrl+C)
    console.log('\n\n👋 Dev server stopped\n');
  } else {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}
