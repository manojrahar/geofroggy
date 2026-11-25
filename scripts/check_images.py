import os, re

used_images = set()
for root_dir in ['app', 'components']:
    for root, dirs, files in os.walk(root_dir):
        for f in files:
            if f.endswith(('.tsx', '.ts', '.js')):
                with open(os.path.join(root, f)) as fp:
                    content = fp.read()
                    matches = re.findall(r'["\'](/website-images/[^"\']+)["\']', content)
                    used_images.update(matches)
                    matches2 = re.findall(r'["\'](/[^"\']+\.(?:png|jpg|jpeg|svg|webp|ico))["\']', content)
                    used_images.update(matches2)

print(f"Total referenced images: {len(used_images)}")
missing = []
for img in sorted(used_images):
    pub_path = os.path.join('public', img.lstrip('/'))
    if not os.path.exists(pub_path):
        missing.append((img, pub_path))

print(f"Missing images count: {len(missing)}")
for m, p in missing:
    print(f"  MISSING: {m}")
