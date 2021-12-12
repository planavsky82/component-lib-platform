#! /usr/bin/env sh

echo 'Beginning design system install ...'

npm i @planit/design-system

cp node_modules/@planit/design-system ./
rm -rf ./bin