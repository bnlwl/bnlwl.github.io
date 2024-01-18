#!/bin/bash

echo "进行项目build"
pnpm build

echo "执行ghpage"
touch ./out/.nojekyll && gh-pages -d out -t true
