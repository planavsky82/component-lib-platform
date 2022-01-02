#! /usr/bin/env sh

cd stencil-web-components
npm i
npm run build
cd ../apps/react-demo
rm -rf node_modules
npm i
cd ..
