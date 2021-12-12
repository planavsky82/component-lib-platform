#! /usr/bin/env sh

echo 'Adding GIT Commit ...'
git add -A
git commit -m "chore(release): $1"
git push

echo 'Deployment Started ...'
npm version $1

echo 'Publishing NPM Package ...'
npm publish

echo 'Deployment Complete.'