import urllib.request
import re

url = "https://raw.githubusercontent.com/topildiyevsirojiddin-cmd/rasch-mock-test/18123dd9559d79af4bf8729957a0be757c3c53e3/questions.js"
backup_path = r"C:\Users\user\.gemini\antigravity\scratch\rasch-mock-test\questions_math_backup.js"
current_path = r"C:\Users\user\.gemini\antigravity\scratch\rasch-mock-test\questions.js"

print("Downloading original questions.js containing math questions...")
try:
    with urllib.request.urlopen(url) as response:
        content = response.read().decode('utf-8')
        
    with open(backup_path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Downloaded successfully. File size: {len(content)} chars.")
    
    # Let's count how many questions are in it
    q_ids = re.findall(r'"id":\s*"([^"]+)"', content)
    print(f"Total questions in downloaded backup: {len(q_ids)}")
    print("Last 5 IDs in backup:", q_ids[-5:])
    
    # Extract the math questions part (up to v5_q30)
    # The file starts with the questionBank array.
    start_idx = content.find("[")
    v5_q30_idx = content.find("v5_q30")
    if v5_q30_idx == -1:
        print("Error: Could not find v5_q30 in backup!")
        exit(1)
        
    obj_end_idx = content.find("}", v5_q30_idx)
    math_questions_part = content[start_idx + 1:obj_end_idx + 1].strip()
    
    # Read our current questions.js which contains the 900 new Ona Tili & Adabiyot questions
    with open(current_path, "r", encoding="utf-8") as f:
        current_text = f.read()
        
    # Extract the Ona Tili & Adabiyot questions from the current file
    v1_lang_q1_idx = current_text.find("v1_lang_q1")
    if v1_lang_q1_idx == -1:
        print("Error: Could not find v1_lang_q1 in the current file!")
        exit(1)
        
    obj_start_idx = current_text.rfind("{", 0, v1_lang_q1_idx)
    v30_lang_q30_idx = current_text.find("v30_lang_q30")
    end_array_idx = current_text.find("];", v30_lang_q30_idx)
    
    lang_questions_part = current_text[obj_start_idx:end_array_idx].strip()
    lang_questions_part = lang_questions_part.rstrip(",")
    
    # Assemble the new merged questions.js file
    new_js_content = "const questionBank = [\n"
    new_js_content += math_questions_part + ",\n\n"
    new_js_content += "  // ==================== ONA TILI VA ADABIYOT 30 TA VARIANT (REAL PDF SAVOLLARI) ====================\n"
    new_js_content += lang_questions_part + "\n];\n\n"
    new_js_content += "// Savollarni tashqi eksport qilish\n"
    new_js_content += "if (typeof module !== 'undefined' && module.exports) {\n"
    new_js_content += "  module.exports = { questionBank };\n"
    new_js_content += "}\n"
    
    # Write back to questions.js
    with open(current_path, "w", encoding="utf-8") as f:
        f.write(new_js_content)
        
    print("Successfully merged Math questions and 30 Language variants into questions.js!")
    
except Exception as e:
    print(f"Error during download/merge: {e}")
