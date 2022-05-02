#! /usr/bin/env node

let fs = require('fs');
let args = process.argv.slice(2);
let rootPath = '../../package.json';
if (args[0] === 'react-components') {
  rootPath = '../package.json';
}

const packageJson = JSON.parse(fs.readFileSync('./package.json', { encoding:'utf8' }));
const rootPackageJson = JSON.parse(fs.readFileSync(rootPath, { encoding:'utf8' }));
packageJson.name = '@planit/' + args[0];

if (args[0] === 'react-components') {
  packageJson.dependencies['@planit/components'] = rootPackageJson.version;
  delete packageJson.dependencies['component-lib-platform-web-components'];
}

packageJson.version = rootPackageJson.version;
fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));
