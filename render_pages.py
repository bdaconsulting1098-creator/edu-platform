import pymupdf
from pymupdf import Matrix
import os

out = r"C:\Users\bdademo\.qclaw\workspace\edu-platform\public\images\courses"
os.makedirs(out, exist_ok=True)

sql_pdf = r"C:\Users\bdademo\OneDrive\BDA1\tool_learning_materials\traning_SQL FOR DATA ANALYSIS.pdf"
bi_pdf  = r"C:\Users\bdademo\OneDrive\BDA1\tool_learning_materials\training_Power_BI.pdf"

def render_pages(pdf_path, pages, prefix):
    doc = pymupdf.open(pdf_path)
    total = len(doc)
    mat = Matrix(1.5, 1.5)
    for pg in pages:
        if pg < 1 or pg > total:
            print(f"  [SKIP] {prefix} page {pg} (only {total} pages)")
            continue
        page = doc[pg - 1]
        pix = page.get_pixmap(matrix=mat)
        out_path = os.path.join(out, f"{prefix}_page{pg}.png")
        pix.save(out_path)
        print(f"  OK {os.path.basename(out_path)}")

print("SQL pages:")
render_pages(sql_pdf, [3,4,6,7,8,17], "traning_SQL FOR DATA ANALYSIS")

print("Power BI pages:")
render_pages(bi_pdf, [3,4,6,7,8,17,36,37], "training_Power_BI")

print("Done")