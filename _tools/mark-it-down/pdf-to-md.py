from markitdown import MarkItDown

md = MarkItDown(enable_plugins=False)  # Set to True to enable plugins

# Convert from file
# result = md.convert("/Applications/XAMPP/xamppfiles/htdocs/Winning! _ Boat race _ Scratch _ Coding projects for kids and teens.pdf")

# Convert from URL
result = md.convert("https://www.sqa.org.uk/files/nu/SoftwareDesignandDevelopmentSCQF5.pdf")

output_file = "temp.md"

with open(output_file, "w", encoding="utf-8") as file:
    file.write(result.text_content)

print(f"Saved markdown to {output_file}")
