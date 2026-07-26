import re
import json

path = r"C:\Users\user\.gemini\antigravity\scratch\rasch-mock-test\questions.js"

with open(path, "r", encoding="utf-8") as f:
    text = f.read()

# Find the start of the array
start_idx = text.find("const questionBank = [")
if start_idx == -1:
    start_idx = text.find("[")
else:
    start_idx = text.find("[", start_idx)

end_idx = text.rfind("]")
array_text = text[start_idx + 1:end_idx].strip()

# Let's split by lines
lines = array_text.split("\n")
errors = []

for idx, line in enumerate(lines):
    line_str = line.strip().rstrip(",")
    if not line_str or line_str.startswith("//"):
        continue
    
    # We will parse using json.loads, but if it has unquoted keys, let's fix it by regex or eval
    try:
        # Try evaluating as python dictionary
        # We need to define false/true/null/undefined for JS compatibility
        undefined = None
        null = None
        false = False
        true = True
        
        # Replace JS comments if any inside the line
        line_str_clean = re.sub(r'//.*$', '', line_str)
        
        obj = eval(line_str_clean)
        
        # Verify properties
        qid = obj.get("id")
        options = obj.get("options")
        correctAnswer = obj.get("correctAnswer")
        
        if not qid:
            errors.append((idx + 1, "Missing id", line_str))
            continue
            
        if not isinstance(options, list):
            errors.append((idx + 1, f"Question {qid}: options is not a list", line_str))
        elif len(options) != 4:
            errors.append((idx + 1, f"Question {qid}: options length is {len(options)}, expected 4", line_str))
            
        if correctAnswer is None:
            errors.append((idx + 1, f"Question {qid}: correctAnswer is missing", line_str))
        elif not isinstance(correctAnswer, int) or correctAnswer < 0 or correctAnswer > 3:
            errors.append((idx + 1, f"Question {qid}: correctAnswer is {correctAnswer}, expected 0-3", line_str))
            
    except Exception as e:
        errors.append((idx + 1, f"Parsing error: {e}", line_str))

print(f"Total lines checked: {len(lines)}")
print(f"Validation errors: {len(errors)}")
for err in errors[:20]:
    print(f"Line {err[0]} - Error: {err[1]}")
