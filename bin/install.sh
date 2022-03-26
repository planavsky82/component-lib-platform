echo 'Beginning component library platform install ...'

rm -rf package.json package-lock.json node_modules

npm i @planit/component-lib-platform --save-dev

cd node_modules/@planit/component-lib-platform/bin
node edit-package-json.js $1 $2
cd ../../../..
cp -R node_modules/@planit/component-lib-platform/. ./
rm -rf ./bin package.json scripts/deploy* scripts/edit*
cp package-tmp.json package.json
rm -rf package-tmp.json
cp gitignore .gitignore
rm -rf gitignore

npm i
npm run build:all

echo 'Installation Complete.'
