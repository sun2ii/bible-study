#!/bin/bash

# Check if the correct number of arguments is provided
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 'book chapter:verse'"
    exit 1
fi

# Extract the search term from the input
search_term=$1

# Print the search term for debugging
echo "Searching for: $search_term"

# Print lines from nasb.txt to verify format
echo "File content for debugging:"
cat nasb.txt

# Use grep to search for the exact verse reference
result=$(grep -i -- " -- ${search_term}$" nasb.txt)

# Check if the verse was found
if [ -z "$result" ]; then
    echo "Verse not found."
else
    echo "$result"
fi