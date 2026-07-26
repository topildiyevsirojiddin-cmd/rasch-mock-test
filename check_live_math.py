import urllib.request
import re

url = "https://rasch-mock-test.vercel.app/questions.js"

print("Downloading questions.js from live website to check Math...")
try:
    with urllib.request.urlopen(url) as response:
        content = response.read().decode('utf-8')
        
    print(f"Downloaded. Size: {len(content)} chars.")
    
    # Match Math IDs like: id: "v1_q1" or "id": "v1_q1"
    # and NOT containing "lang"
    all_ids = re.findall(r'\b"??id"??:\s*"([^"]+)"', content)
    math_ids = [qid for qid in all_ids if "lang" not in qid]
    lang_ids = [qid for qid in all_ids if "lang" in qid]
    
    print("Math questions found in live file:", len(math_ids))
    print("Lang questions found in live file:", len(lang_ids))
    
    if len(math_ids) > 0:
        print("Sample Math IDs:", math_ids[:10])
        
except Exception as e:
    print("Error:", e)
