#!/bin/bash

# Loop through each line in .env file
while IFS= read -r line; do
  # Use awk to split the line by '=', getting the key and value
  key=$(echo $line | awk -F '=' '{print $1}')
  value=$(echo $line | awk -F '=' '{print $2}')

  # Add the environment variable to Vercel project
  vercel env add $key production <<< $value
done < .env