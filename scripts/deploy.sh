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

echo 'Build and Publishing @planit/components and @planit/react-components NPM Packages ...'

pushd stencil-web-components
npm run build
pushd dist
node ../../scripts/edit-components-package-json.js components
npm publish
popd
popd

pushd stencil-react-wrappers
node ../scripts/edit-components-package-json.js react-components
npm publish
popd

echo 'Deployment Complete.'
