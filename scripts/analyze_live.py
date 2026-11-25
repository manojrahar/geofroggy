import re
from html.parser import HTMLParser

with open("live_body_home.html") as f:
    text = f.read()

# Find all major landmark elements
print("=== LANDMARKS IN live_body_home.html ===")
matches = re.findall(r"<(header|nav|section|footer|main|aside)[^>]*>", text)
print("Landmarks:", matches)

# Find top-level structure
print("\n=== TOP LEVEL DIVS & STRUCTURE ===")
top_divs = re.findall(r"<([a-zA-Z0-9]+)[^>]*class=\"([^\"]+)\"", text)
for tag, cls in top_divs[:20]:
    print(f"<{tag} class=\"{cls}\">")
