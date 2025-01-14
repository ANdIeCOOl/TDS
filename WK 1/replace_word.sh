# #!/bin/bash

# word_to_replace=$1
# replacement_word=$2

# for file in $3; do

#         if [[ -f "$file" ]]; then
#             echo "Processing File: $file"

#             sed -i "s/${word_to_replace}/${replacement_word}/Ig" "$file"
#         fi

# done

# echo "Finsihed "

#!/bin/bash

# Usage: ./replace_word.sh <word_to_replace> <replacement_word>
# Example: ./replace_word.sh apple orange

# Check if both arguments are provided
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <word_to_replace> <replacement_word>"
    exit 1
fi

word_to_replace=$1
replacement_word=$2

# Loop through all files in the current directory
for file in *; do
    # Check if it's a regular file
    if [[ -f "$file" ]]; then
        echo "Processing file: $file"
        # Use sed to perform a case-insensitive search and replace (in-place editing)
        sed -i "s/${word_to_replace}/${replacement_word}/Ig" "$file"
    fi
done

echo "Replacement complete!"