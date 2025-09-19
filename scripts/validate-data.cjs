#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const Ajv = require('ajv');

function validateFile(dataPath, schemaPath, description) {
  console.log(`\n🔍 Validating ${description}...`);
  
  try {
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
    
    const ajv = new Ajv();
    const validate = ajv.compile(schema);
    const valid = validate(data);
    
    if (valid) {
      console.log(`✅ ${description} is valid`);
      return true;
    } else {
      console.error(`❌ ${description} validation failed:`);
      console.error(validate.errors);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error validating ${description}: ${error.message}`);
    return false;
  }
}

console.log('🔍 Validating JSON data against schemas...');

const dataDir = path.join(__dirname, '../data');
const schemasDir = path.join(dataDir, 'schemas');

let allValid = true;

// Validate chains data
allValid &= validateFile(
  path.join(dataDir, 'chains.json'),
  path.join(schemasDir, 'chains-schema.json'),
  'Chains data'
);

// Validate tokens data
allValid &= validateFile(
  path.join(dataDir, 'tokens.json'),
  path.join(schemasDir, 'tokens-schema.json'),
  'Tokens data'
);

if (allValid) {
  console.log('\n✅ All data files are valid!');
  process.exit(0);
} else {
  console.log('\n❌ Some data files have validation errors');
  process.exit(1);
}