from PIL import Image
from pathlib import Path

src = Path(r"C:\Users\Hansel Yan\Projects\askfinbot\public\logo.png")
img = Image.open(src).convert("RGBA")
pixels = img.load()
w, h = img.size

corners = [pixels[0, 0], pixels[w - 1, 0], pixels[0, h - 1], pixels[w - 1, h - 1]]
br = sum(c[0] for c in corners) // 4
bg = sum(c[1] for c in corners) // 4
bb = sum(c[2] for c in corners) // 4
print(f"bg~{(br, bg, bb)}")

for y in range(h):
    for x in range(w):
        r, g, b, a = pixels[x, y]
        dist = abs(r - br) + abs(g - bg) + abs(b - bb)
        luminance = 0.299 * r + 0.587 * g + 0.114 * b

        if dist < 90 or luminance > 170:
            if luminance > 210 or dist < 40:
                pixels[x, y] = (0, 0, 0, 0)
            elif luminance > 140:
                alpha = max(0, min(255, int((210 - luminance) * 3.2)))
                pixels[x, y] = (0, 0, 0, alpha)
            else:
                pixels[x, y] = (0, 0, 0, 255)
        else:
            pixels[x, y] = (0, 0, 0, 255)

out_paths = [
    src,
    Path(r"C:\Users\Hansel Yan\Projects\askfinbot\src\app\icon.png"),
    Path(r"C:\Users\Hansel Yan\Projects\askfinbot\src\app\apple-icon.png"),
]
for p in out_paths:
    img.save(p, "PNG")
    print("saved", p, p.stat().st_size)
