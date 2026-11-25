import json, os

def node_to_jsx(node, indent=0):
    pad = "  " * indent
    if isinstance(node, str):
        # clean text
        text = node.replace("{", "&#123;").replace("}", "&#125;")
        return f"{pad}{text}\n"
    if isinstance(node, (int, float)):
        return f"{pad}{node}\n"
    if isinstance(node, bool):
        return f"{pad}{str(node)}\n"
    if node is None:
        return ""
    if isinstance(node, list):
        out = ""
        for item in node:
            out += node_to_jsx(item, indent)
        return out
    if isinstance(node, dict):
        if "tag" in node:
            tag = node["tag"]
            props = node.get("props", {})
            
            # Convert Next.js internal tag names
            if tag.startswith("$"):
                tag = tag[1:]
            if tag in ["10", "81356"]:
                tag = "Image"
            elif tag in ["7", "52619"]:
                tag = "Link"
            elif tag == "" or tag == "1":
                tag = "div"
            
            # format props
            props_list = []
            children = props.pop("children", None)
            
            for k, v in sorted(props.items()):
                if k == "className":
                    props_list.append(f'className="{v}"')
                elif k in ["src", "alt", "href", "type", "placeholder", "id", "name", "target", "rel", "title"]:
                    props_list.append(f'{k}="{v}"')
                elif k in ["width", "height"]:
                    props_list.append(f'{k}={{{v}}}')
                elif k in ["fill", "priority"]:
                    props_list.append(f'{k}={{{str(v).lower()}}}')
                elif k == "style" and isinstance(v, dict):
                    props_list.append(f'style={{{json.dumps(v)}}}')
                elif isinstance(v, (int, float, bool)):
                    props_list.append(f'{k}={{{json.dumps(v)}}}')
                elif isinstance(v, str):
                    props_list.append(f'{k}="{v}"')
            
            props_str = (" " + " ".join(props_list)) if props_list else ""
            
            if children is None or (isinstance(children, list) and len(children) == 0) or children == "":
                return f"{pad}<{tag}{props_str} />\n"
            else:
                inner = ""
                if isinstance(children, list):
                    for c in children:
                        inner += node_to_jsx(c, indent + 1)
                else:
                    inner = node_to_jsx(children, indent + 1)
                return f"{pad}<{tag}{props_str}>\n{inner}{pad}</{tag}>\n"
    return ""

# Convert all chunks in recovered_home
for p in ["home", "about", "news", "media", "donate"]:
    dir_name = f"recovered_{p}"
    if not os.path.exists(dir_name): continue
    out_dir = f"jsx_{p}"
    os.makedirs(out_dir, exist_ok=True)
    for fname in sorted(os.listdir(dir_name)):
        if not fname.endswith(".json"): continue
        with open(os.path.join(dir_name, fname)) as f:
            data = json.load(f)
        jsx = node_to_jsx(data)
        out_name = fname.replace(".json", ".tsx")
        with open(os.path.join(out_dir, out_name), "w") as out:
            out.write(jsx)
        print(f"Generated {out_dir}/{out_name} ({len(jsx)} chars)")
