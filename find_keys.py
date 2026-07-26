import re

path = r"C:\Users\user\.gemini\antigravity\scratch\rasch-mock-test\Test_extracted.txt"
output_path = r"C:\Users\user\.gemini\antigravity\scratch\rasch-mock-test\keys_found.txt"

with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# Search for patterns of keys/answers
# Let's search for "Javoblar", "Kalitlar", "Kalit", etc.
lines = content.split("\n")

matches = []
for idx, line in enumerate(lines):
    if any(k in line.lower() for k in ["kalit", "javob", "kalitlar", "javoblar"]):
        matches.append((idx + 1, line))

with open(output_path, "w", encoding="utf-8") as f:
    f.write(f"Total lines: {len(lines)}\n")
    f.write("Matches found:\n")
    for line_num, text in matches:
        f.write(f"Line {line_num}: {text}\n")
        
    f.write("\n--- Last 500 lines ---\n")
    for idx in range(max(0, len(lines)-500), len(lines)):
        f.write(lines[idx] + "\n")

print(f"Done. Wrote results to {output_path}")
