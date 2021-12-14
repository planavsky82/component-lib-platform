#! /usr/bin/env sh

cp package.json package-tmp.json

node ./scripts/edit-package-json.js

git add -A
git commit -m 'chore(release): create temporary package.json'

echo 'Deployment Started ...'
npm version $1

echo 'Publishing NPM Package ...'
npm publish

echo 'Adding GIT Commit ...'
rm -rf package-tmp.json
git add -A
git commit -m "chore(release): $1"
git push

echo 'Deployment Complete.'