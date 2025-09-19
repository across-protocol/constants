#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

function runScript(scriptPath, description) {
  console.log(`\n🔄 ${description}...`);
  try {
    execSync(`node "${scriptPath}"`, { stdio: 'inherit' });
  } catch (error) {
    console.error(`❌ Failed to ${description.toLowerCase()}: ${error.message}`);
    process.exit(1);
  }
}

console.log('🚀 Generating all packages from JSON data...\n');

const scriptsDir = __dirname;

runScript(path.join(scriptsDir, 'generate-typescript.cjs'), 'Generate TypeScript package');
runScript(path.join(scriptsDir, 'generate-python.cjs'), 'Generate Python package');
runScript(path.join(scriptsDir, 'generate-rust.cjs'), 'Generate Rust package');

console.log('\n✅ All packages generated successfully!');
console.log('\nGenerated packages:');
console.log('📁 TypeScript: src-generated/typescript/');
console.log('📁 Python:     src-generated/python/');
console.log('📁 Rust:       src-generated/rust/');