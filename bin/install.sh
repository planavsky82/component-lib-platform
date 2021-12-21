#! /usr/bin/env sh

echo 'Beginning design system install ...'

rm -rf package.json package-lock.json node_modules

npm i @planit/design-system

cd node_modules/@planit/design-system/bin
node edit-package-json.js $0 $1
cd ../../..
cp -R node_modules/@planit/design-system/. ./
rm -rf ./bin package.json
cp package-tmp.json package.json
rm -rf package-tmp.json

echo 'Installation Complete.'