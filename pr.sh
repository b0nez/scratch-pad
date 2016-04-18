#!/bin/bash
set -ev

homework="homework"
inclass="in-class-exercises"

git diff --name-only HEAD^ | while read -r file ; do
    if [[ $file =~ ^"$homework" || $file =~ ^"$inclass" ]]; then
        name=$(echo $file | cut -f 1 -d '.')
        test="test/$name.spec.js"
        mocha "$test"
    fi
done
