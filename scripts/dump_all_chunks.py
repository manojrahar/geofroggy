import re, json, os

def clean_flight(text):
    chunks = {}
    for line in text.split("\n"):
        if ":" in line:
            parts = line.split(":", 1)
            chunks[parts[0]] = parts[1]
    return chunks

def parse_element(node):
    if isinstance(node, str):
        return node
    if isinstance(node, (int, float, bool)) or node is None:
        return node
    if isinstance(node, list):
        if len(node) >= 4 and node[0] == "$":
            tag = node[1]
            key = node[2]
            props = node[3] if isinstance(node[3], dict) else {}
            
            clean_props = {}
            for k, v in props.items():
                if k == "children":
                    if isinstance(v, list):
                        clean_props["children"] = [parse_element(c) for c in v]
                    else:
                        clean_props["children"] = parse_element(v)
                else:
                    clean_props[k] = v
            return {"tag": tag, "key": key, "props": clean_props}
        else:
            return [parse_element(item) for item in node]
    if isinstance(node, dict):
        return {k: parse_element(v) for k, v in node.items()}
    return str(node)

for page in ["home", "about", "news", "explore", "media", "donate"]:
    fname = f"parsed_{page}.txt"
    if not os.path.exists(fname): continue
    chunks = clean_flight(open(fname).read())
    os.makedirs(f"recovered_{page}", exist_ok=True)
    for k, v in chunks.items():
        if v.startswith("[") or v.startswith("{"):
            try:
                parsed = json.loads(v)
                cleaned = parse_element(parsed)
                s = json.dumps(cleaned)
                # save chunks with substantial content
                if len(s) > 300:
                    out_path = f"recovered_{page}/chunk_{k}.json"
                    with open(out_path, "w") as out:
                        out.write(json.dumps(cleaned, indent=2))
                    print(f"{page} - chunk {k}: saved {len(s)} bytes")
            except Exception as e:
                pass
