# PDF dan nusxalangan savollarni JSON formatga o'tkazuvchi yordamchi skript (parse_questions.py)
# Foydalanish: PDF matnini nusxalab 'savollar.txt' fayliga joylashtirasiz va ushbu skriptni runs qilasiz.

import re
import json

def parse_txt_to_json(input_file, output_file, variant_id=6):
    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"Xatolik: {input_file} topilmadi. Iltimos, avval ushbu faylni yarating!")
        return

    # Savollarni ajratish uchun regex (masalan: 1. Matn ... A) variantlar)
    # Ushbu regex DTM formatidagi savollarni (A, B, C, D variantlari bilan) ajratib oladi.
    pattern = re.compile(
        r'(\d+)\.\s*(.*?)\s*A\)\s*(.*?)\s*B\)\s*(.*?)\s*C\)\s*(.*?)\s*D\)\s*(.*?)(?=\s*\d+\.|\Z)',
        re.DOTALL
    )

    matches = pattern.findall(content)
    questions = []

    for idx, match in enumerate(matches):
        q_num = match[0]
        q_text = match[1].strip()
        opt_a = match[2].strip()
        opt_b = match[3].strip()
        opt_c = match[4].strip()
        opt_d = match[5].strip()

        # Tozalash
        q_text = q_text.replace('\n', ' ')
        
        # Savol tuzilishi
        q_obj = {
            "id": f"v{variant_id}_q{idx+1}",
            "variant": variant_id,
            "text": q_text,
            "options": [opt_a, opt_b, opt_c, opt_d],
            "correctAnswer": 0, # Standart holatda A varianti to'g'ri (Fisher-Yates tomonidan baribir aralashtiriladi)
            "difficulty": 0.0,
            "category": "Algebra"
        }
        questions.append(q_obj)

    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(questions, f, ensure_ascii=False, indent=2)

    print(f"Muvaffaqiyatli yakunlandi! {len(questions)} ta savol '{output_file}' fayliga saqlandi.")
    print("Ushbu JSON matnini nusxalab, platformadagi 'Variant yuklash' oynasiga joylashtirishingiz mumkin.")

if __name__ == "__main__":
    # Variant 6 uchun namunaviy yurgizish
    parse_txt_to_json('savollar.txt', 'variant6.json', variant_id=6)
