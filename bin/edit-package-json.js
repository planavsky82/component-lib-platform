#! /usr/bin/env node

let fs = require('fs');

const packageJson = JSON.parse(fs.readFileSync('./package-tmp.json', { encoding:'utf8' }));
let args = process.argv.slice(3);
console.log(args);

//packageJson.name = $1
//packageJson.author = $2
//fs.writeFileSync('./package-tmp.json', JSON.stringify(packageJson, null, 2));
