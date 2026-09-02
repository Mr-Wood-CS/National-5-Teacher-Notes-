from markitdown import MarkItDown

md = MarkItDown(enable_plugins=False) # Set to True to enable plugins
result = md.convert("01 - Outputs, Inputs and Variables.pptx")

output_file = "lessons1.md"

with open(output_file, "w", encoding="utf-8") as file:
    file.write(result.text_content)

print(f"Saved markdown to {output_file}")
