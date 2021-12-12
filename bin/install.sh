#! /usr/bin/env sh

echo 'Beginning design system install ...'

rm -rf package.json package-lock.json node_modules

npm i @planit/design-system

cp -R node_modules/@planit/design-system/. ./
rm -rf ./bin package.json
cp package-tmp.json package.json

echo 'Installation Complete.'