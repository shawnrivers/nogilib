#!/bin/sh

git checkout dev && git branch -D update-data
git checkout -b update-data
