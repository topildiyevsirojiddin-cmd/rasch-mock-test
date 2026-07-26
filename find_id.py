import re

path = r"C:\Users\user\.gemini\antigravity\brain\3ced8dab-f32a-4133-961b-0c339fd860bf\.system_generated\steps\1026\content.md"

with open(path, "r", encoding="utf-8") as f:
    text = f.read()

print(f"File length: {len(text)}")

# Find all instances of "id" containing "v5_" or just any math variant
v5_matches = re.findall(r'"id":\s*"v5_q\d+"', text)
print(f"v5_matches: {len(v5_matches)}")

# Let's find some IDs
ids = re.findall(r'"id":\s*"([^"]+)"', text)
print(f"Total IDs: {len(ids)}")
print("IDs sample:", ids[:20])
print("Last IDs sample:", ids[-20:])
