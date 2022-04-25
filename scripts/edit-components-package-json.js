#! /usr/bin/env node

let fs = require('fs');

const packageJson = JSON.parse(fs.readFileSync('./package.json', { encoding:'utf8' }));
const rootPackageJson = JSON.parse(fs.readFileSync('../../package.json', { encoding:'utf8' }));
packageJson.name = "@planit/components";
packageJson.version = rootPackageJson.version;
fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));
