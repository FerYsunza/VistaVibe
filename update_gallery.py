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

# Function to detect and preserve indentation
def detect_indentation(line):
    return line[:len(line) - len(line.lstrip())]

# Read the current contents of the script.js file
with open(js_file_path, 'r') as file:
    content = file.readlines()

# Look for the line to replace and preserve its indentation
for i, line in enumerate(content):
    if line.strip().startswith('const images ='):
        indentation = detect_indentation(line)
        new_images_line = indentation + f"const images = {photos}; // Example placeholders\n"
        content[i] = new_images_line
        break

# Write the modified content back to script.js
with open(js_file_path, 'w') as file:
    file.writelines(content)

print("Updated script.js with current photos.")
