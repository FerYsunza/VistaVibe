#
#  vistaVibe
#    
#  By Fer Ysunza, 01/02/24.  
#

import os
import re

photos_directory = './photos'
js_file_path = './script.js'

# Fetch all jpg files from the photos directory
photos = [f for f in os.listdir(photos_directory) if f.endswith('.jpg')]

# Generate the new JavaScript line to insert into the script.js file
new_images_line = f"const images = {photos}; // Example placeholders"

# Read the current contents of the script.js file
with open(js_file_path, 'r') as file:
    content = file.readlines()

# Look for the line to replace - assuming it starts with 'const images ='
for i, line in enumerate(content):
    if line.strip().startswith('const images ='):
        content[i] = new_images_line + "\n"
        break

# Write the modified content back to script.js
with open(js_file_path, 'w') as file:
    file.writelines(content)

print("Updated script.js with current photos.")
