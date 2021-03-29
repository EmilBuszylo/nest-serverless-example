#!/bin/bash

REF=HEAD
SINCE=origin/master
DIR_TO_CHECK=./src

MERGE_BASE=$(git merge-base ${SINCE} ${REF})
FILES_CHANGED=$(git diff --name-only ${MERGE_BASE}..${REF} -- ${DIR_TO_CHECK})
printf "Files changed:\n${FILES_CHANGED}\n"

if [[ -n $FILES_CHANGED ]]; then
  echo "TRUE"
else
  echo "No changes"
fi