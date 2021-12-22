#! /usr/bin/env node

let fs = require('fs');

const packageJson = JSON.parse(fs.readFileSync('../package-tmp.json', { encoding:'utf8' }));
let args = process.argv.slice(2);
console.log(args[0]);

//packageJson.name = args[0]
//packageJson.author = args[1] || ''
//fs.writeFileSync('./package-tmp.json', JSON.stringify(packageJson, null, 2));
