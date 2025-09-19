#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const dataDir = path.join(__dirname, '../data');
const generateScript = path.join(__dirname, 'generate-all.cjs');

console.log('👀 Watching JSON data files for changes...');
console.log(`Watching: ${dataDir}`);
console.log('Press Ctrl+C to stop\n');

function regenerateAll() {
  console.log('\n🔄 Data files changed, regenerating packages...');
  try {
    execSync(`node "${generateScript}"`, { stdio: 'inherit' });
    console.log('\n✅ Regeneration complete!\n');
  } catch (error) {
    console.error(`❌ Regeneration failed: ${error.message}`);
  }
}

// Initial generation
regenerateAll();

// Watch for changes
fs.watch(dataDir, { recursive: true }, (eventType, filename) => {
  if (filename && filename.endsWith('.json') && !filename.includes('schema')) {
    console.log(`📝 File changed: ${filename}`);
    // Debounce multiple rapid changes
    clearTimeout(regenerateAll.timeout);
    regenerateAll.timeout = setTimeout(regenerateAll, 500);
  }
});

// Keep process alive
process.on('SIGINT', () => {
  console.log('\n👋 Stopping file watcher...');
  process.exit(0);
});