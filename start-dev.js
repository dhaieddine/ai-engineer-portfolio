#!/usr/bin/env node

/**
 * Dev Server Launcher for AI Engineer Portfolio
 * This script starts the Next.js development server
 */

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const projectDir = __dirname;
const nextBin = path.join(projectDir, 'node_modules', '.bin', 'next.cmd');

console.log('🚀 Starting AI Engineer Portfolio...');
console.log(`📁 Project directory: ${projectDir}`);
console.log('');

// Check if next is available
if (!fs.existsSync(nextBin)) {
  console.error('❌ Error: next.cmd not found. Please run "npm install" first.');
  process.exit(1);
}

// Start the dev server
const server = spawn('node', [path.join(projectDir, 'node_modules', 'next', 'dist', 'bin', 'next'), 'dev', '--port', '3000'], {
  cwd: projectDir,
  stdio: 'inherit',
  shell: true
});

server.on('error', (err) => {
  console.error('❌ Error starting server:', err);
  process.exit(1);
});

server.on('exit', (code) => {
  if (code !== 0) {
    console.error(`❌ Server exited with code ${code}`);
  }
});

// Handle Ctrl+C gracefully
process.on('SIGINT', () => {
  console.log('\n\n👋 Shutting down server...');
  server.kill();
  process.exit(0);
});

console.log('🌐 Development server should start on http://localhost:3000');
console.log('📖 Press Ctrl+C to stop the server');
console.log('');
