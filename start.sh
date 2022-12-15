# /usr/bin/env bash

# Description: This script is used to generate the docs folder from the src folder

# copy all markdown files from src to docs with the same directory structure
find src -iname "*.md" -exec cp --parents  {} docs \;

# rename src to solution
mv docs/src docs/solution;

# rename all directories to {$DIR}.md
find docs/solution -iname "*.md" -exec bash -c ' DIR=$( dirname "{}"  ); mv "{}" "$DIR".md; rmdir "$DIR"  ' \;

#  rename solution.md to SERIALWISE.md
mv docs/solution.md docs/SERIALWISE.md;

# copy TOPICWISE.md to docs
cp TOPICWISE.md docs;


