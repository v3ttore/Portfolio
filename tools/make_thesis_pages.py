"""Converte il PDF della tesi in immagini JPG con filigrana, cosi' nel repo NON c'e' il PDF.
Uso:  python3 tools/make_thesis_pages.py Tesi.pdf portfolio-nextjs/public/thesis/pages
Richiede: pip install pymupdf pillow
"""
import sys, os, pymupdf as fitz
from PIL import Image, ImageDraw, ImageFont

pdf, out = sys.argv[1], sys.argv[2]
os.makedirs(out, exist_ok=True)
doc = fitz.open(pdf)
mark = "© Ettore Liotta – all rights reserved"
for i, page in enumerate(doc, 1):
    pix = page.get_pixmap(dpi=110)               # risoluzione leggibile ma poco riutilizzabile
    img = Image.frombytes("RGB", (pix.width, pix.height), pix.samples).convert("RGBA")
    layer = Image.new("RGBA", img.size, (0, 0, 0, 0))
    try: f = ImageFont.truetype("Arial.ttf", img.width // 20)
    except Exception: f = ImageFont.truetype("DejaVuSans.ttf", img.width // 20)
    w = img.width
    for frac in (0.2, 0.5, 0.8):                  # tre diciture diagonali per pagina
        tmp = Image.new("RGBA", (int(w * 1.3), w // 8), (0, 0, 0, 0))
        ImageDraw.Draw(tmp).text((10, 10), mark, font=f, fill=(110, 110, 110, 60))
        tmp = tmp.rotate(35, expand=True)
        x = (w - tmp.width) // 2; y = int(img.height * frac - tmp.height / 2)
        layer.paste(tmp, (x, y), tmp)
    Image.alpha_composite(img, layer).convert("RGB").save(f"{out}/p{i:03d}.jpg", quality=72)
print("pagine:", len(doc), "-> metti N =", len(doc), "in portfolio-nextjs/public/thesis/index.html")
