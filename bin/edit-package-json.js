#! /usr/bin/env node

let fs = require('fs');

const packageJson = JSON.parse(fs.readFileSync('../package-tmp.json', { encoding:'utf8' }));
let args = process.argv;

packageJson.name = args[2]
packageJson.author = args[3] || ''
fs.writeFileSync('../package-tmp.json', JSON.stringify(packageJson, null, 2));
