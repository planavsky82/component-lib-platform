#! /usr/bin/env node

let fs = require('fs');
let args = process.argv.slice(2);

const packageJson = JSON.parse(fs.readFileSync('./package.json', { encoding:'utf8' }));
const rootPackageJson = JSON.parse(fs.readFileSync('../../package.json', { encoding:'utf8' }));
packageJson.name = '@planit/' + args[0];
packageJson.version = rootPackageJson.version;
fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));