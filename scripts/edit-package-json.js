#! /usr/bin/env node

let fs = require('fs');

const packageJson = JSON.parse(fs.readFileSync('./package-tmp.json', { encoding:'utf8' }));
delete packageJson.bin;
delete packageJson.repository;
delete packageJson.bugs;
delete packageJson.homepage;
