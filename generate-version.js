const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const packageJson = require('./package.json');

// Extract the version from package.json
const version = packageJson.version;

// Generate a new GUID for the build prop
const build = uuidv4();

// Create the version.json data structure
const versionData = {
  version, // Version from package.json
  build    // Generated GUID
};

// Define the path where version.json will be created
const filePath = path.join(__dirname, 'public', 'version.json');

// Write version.json to the public directory
fs.writeFileSync(filePath, JSON.stringify(versionData, null, 2));

console.log(`version.json generated with version ${version} and build ${build}`);