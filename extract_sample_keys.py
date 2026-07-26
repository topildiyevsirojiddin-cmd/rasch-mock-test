import pdfplumber

pdf_path = r"C:\Users\user\.gemini\antigravity\scratch\rasch-mock-test\Test.pdf"
output_path = r"C:\Users\user\.gemini\antigravity\scratch\rasch-mock-test\sample_keys.txt"

out_lines = []

with pdfplumber.open(pdf_path) as pdf:
    # Page 3 and 4 (indices 2 and 3)
    for idx in [2, 3]:
        page = pdf.pages[idx]
        out_lines.append(f"\n--- Page {idx+1} ---")
        
        for rect_idx, rect in enumerate(page.rects):
            color = rect.get('non_stroking_color') or rect.get('stroking_color')
            if not color or color == (0,) or color == (0,0,0):
                continue
                
            rx0, ry0, rx1, ry1 = rect['x0'], rect['y0'], rect['x1'], rect['y1']
            rtop = rect.get('top', page.height - ry1)
            rbottom = rect.get('bottom', page.height - ry0)
            
            inside_chars = []
            for char in page.chars:
                cx0, cy0, cx1, cy1 = char['x0'], char['top'], char['x1'], char['bottom']
                if cx0 >= rx0 - 2 and cx1 <= rx1 + 2 and char['top'] >= rtop - 2 and char['bottom'] <= rbottom + 2:
                    inside_chars.append(char['text'])
                    
            text_inside = "".join(inside_chars).strip()
            if text_inside:
                out_lines.append(f"Rect {rect_idx}: color={color}, bbox=({rx0:.1f}, {rtop:.1f}) -> '{text_inside}'")

with open(output_path, "w", encoding="utf-8") as f:
    f.write("\n".join(out_lines))

print("Wrote output to sample_keys.txt")
