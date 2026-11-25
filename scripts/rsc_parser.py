import re, json

def rsc_to_jsx(node, indent=0):
    pad = "  " * indent
    if isinstance(node, str):
        # Escape curly braces for JSX
        escaped = node.replace("{", "&#123;").replace("}", "&#125;")
        return f'{pad}{escaped}\n'
    if isinstance(node, (int, float, bool)) or node is None:
        return f'{pad}{str(node)}\n'
    if isinstance(node, list):
        # Check if it is an RSC element: ["$", "tag", key, props]
        if len(node) >= 4 and node[0] == "$":
            tag = node[1]
            key = node[2]
            props = node[3] if isinstance(node[3], dict) else {}
            
            # handle Fragment
            if tag == "$":
                tag = "Fragment"
            elif isinstance(tag, str) and tag.startswith("$"):
                tag = tag[1:]
            
            # format props
            props_str = ""
            children = None
            for k, v in props.items():
                if k == "children":
                    children = v
                elif k == "className":
                    props_str += f' className="{v}"'
                elif k == "src":
                    props_str += f' src="{v}"'
                elif k == "alt":
                    props_str += f' alt="{v}"'
                elif k == "href":
                    props_str += f' href="{v}"'
                elif k == "width":
                    props_str += f' width={{{v}}}'
                elif k == "height":
                    props_str += f' height={{{v}}}'
                elif k == "fill":
                    props_str += f' fill={{{str(v).lower()}}}'
                elif k == "priority":
                    props_str += f' priority={{{str(v).lower()}}}'
                elif k == "style" and isinstance(v, dict):
                    style_str = json.dumps(v)
                    props_str += f' style={{{style_str}}}'
                elif isinstance(v, (str, int, float, bool)):
                    props_str += f' {k}={{{json.dumps(v)}}}'

            if children is None or (isinstance(children, list) and len(children) == 0):
                return f"{pad}<{tag}{props_str} />\n"
            else:
                inner = ""
                if isinstance(children, list):
                    for c in children:
                        inner += rsc_to_jsx(c, indent + 1)
                else:
                    inner = rsc_to_jsx(children, indent + 1)
                return f"{pad}<{tag}{props_str}>\n{inner}{pad}</{tag}>\n"
        else:
            out = ""
            for item in node:
                out += rsc_to_jsx(item, indent)
            return out
    return ""

# Test on parsed_home.txt
with open("parsed_home.txt") as f:
    raw = f.read()

# Flight data lines start with e.g. "b:..." or "16:..." or ":[..."
# Find the line that has the page content
lines = raw.split("\n")
print(f"Total lines in parsed_home.txt: {len(lines)}")
for idx, l in enumerate(lines):
    if "Stories Beyond Borders" in l:
        print(f"Found 'Stories Beyond Borders' on line {idx}, length {len(l)}")
        # Parse this line
        # line format: id:payload
        payload = l.split(":", 1)[1] if ":" in l else l
        try:
            parsed = json.loads(payload)
            jsx = rsc_to_jsx(parsed)
            with open("recovered_home.tsx", "w") as out:
                out.write(jsx)
            print(f"Successfully recovered home JSX! Output length: {len(jsx)} chars")
        except Exception as e:
            print(f"JSON parse error: {e}")
            # Try to find the JSON array inside
            m = re.search(r'\[.*\]', payload)
            if m:
                try:
                    parsed = json.loads(m.group(0))
                    jsx = rsc_to_jsx(parsed)
                    with open("recovered_home.tsx", "w") as out:
                        out.write(jsx)
                    print(f"Recovered from regex! Output length: {len(jsx)} chars")
                except Exception as e2:
                    print(f"Regex JSON parse error: {e2}")
