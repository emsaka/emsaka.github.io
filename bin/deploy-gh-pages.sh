#!/usr/bin/env bash

echo "Deploying emsaka.github.io"

git checkout -B staging
rm .gitignore

git add dist
git -c user.name='CircleCI Deploy' -c user.email='deploy@emsaka.com' commit -m "deploy" --no-verify

git subtree split --prefix dist -b deploy
git push -f origin deploy:master

git reset --hard
git checkout develop
git branch -D staging
git branch -D deploy

echo "Deployed emsaka.github.io"
