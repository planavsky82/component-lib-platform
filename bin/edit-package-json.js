#! /usr/bin/env node

let fs = require('fs');

const packageJson = JSON.parse(fs.readFileSync('../package-tmp.json', { encoding:'utf8' }));
let args = process.argv;

packageJson.name = args[2] || 'my-component-lib-platform';
packageJson.author = args[3] || '';
packageJson.devDependencies['@planit/component-lib-platform'] = packageJson.version;
packageJson.version = '0.0.1';
delete packageJson.scripts['firebase:setup'];
delete packageJson.scripts['firebase:login'];
delete packageJson.scripts['firebase:deploy'];
delete packageJson.scripts['test:deploy'];
delete packageJson.scripts['deploy:major'];
delete packageJson.scripts['deploy:minor'];
delete packageJson.scripts['deploy:patch'];
fs.writeFileSync('../package-tmp.json', JSON.stringify(packageJson, null, 2));
