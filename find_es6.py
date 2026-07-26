import re

path = r"C:\Users\user\.gemini\antigravity\scratch\rasch-mock-test\app.js"

with open(path, "r", encoding="utf-8") as f:
    text = f.read()

# Find optional chaining: ?.
opt_chain = re.findall(r'\?\.', text)
print(f"Optional chaining count: {len(opt_chain)}")

# Find nullish coalescing: ??
nullish = re.findall(r'\?\?', text)
print(f"Nullish coalescing count: {len(nullish)}")

# Find logical assignments: ||= or &&= or ??=
log_assign = re.findall(r'\|\|=|\&\&=|\?\?=', text)
print(f"Logical assignment count: {len(log_assign)}")

# Print lines for optional chaining
lines = text.split("\n")
for idx, line in enumerate(lines):
    if '?.' in line:
        print(f"Line {idx+1}: {line.strip()}")
