#!/bin/sh

git checkout dev && git pull && git checkout main && git merge dev && git push && git checkout dev && git branch -D update-data
