echo 'Beginning design system install ...'

rm -rf package.json package-lock.json node_modules

npm i @planit/design-system

cd node_modules/@planit/design-system/bin
node edit-package-json.js $1 $2
cd ../../../..
cp -R node_modules/@planit/design-system/. ./
rm -rf ./bin package.json scripts
cp package-tmp.json package.json
rm -rf package-tmp.json

echo 'Installation Complete.'
