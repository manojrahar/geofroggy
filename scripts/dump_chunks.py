import re, json

def clean_flight(text):
    # Join flight chunks into a dict of line_id: content
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
            
            # recursive props
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

# Parse parsed_home.txt
chunks = clean_flight(open("parsed_home.txt").read())
print(f"Total chunks in parsed_home.txt: {len(chunks)}")
for k, v in chunks.items():
    if v.startswith("[") or v.startswith("{"):
        try:
            parsed = json.loads(v)
            cleaned = parse_element(parsed)
            # check if it contains sections
            s = json.dumps(cleaned)
            if "section" in s or "Stories" in s or "Offer" in s or "Contributors" in s or "Involved" in s:
                print(f"Chunk {k} has content! Length: {len(s)}")
                with open(f"chunk_{k}.json", "w") as out:
                    out.write(json.dumps(cleaned, indent=2))
        except Exception as e:
            pass
