from pathlib import Path

out = Path(__file__).resolve().parents[1] / "public" / "exams"
out.mkdir(parents=True, exist_ok=True)

SVGS = {
    "cfa": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <rect width="64" height="64" rx="14" fill="#0B1F3A"/>
  <path d="M14 40 L26 28 L34 34 L50 16" stroke="#C9A227" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="50" cy="16" r="3.5" fill="#C9A227"/>
  <text x="32" y="54" text-anchor="middle" fill="#F5F0E8" font-family="Arial,sans-serif" font-size="9" font-weight="700">CFA</text>
</svg>""",
    "frm": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <rect width="64" height="64" rx="14" fill="#1B3A4B"/>
  <path d="M32 10 L48 18 V32 C48 42 40 48 32 52 C24 48 16 42 16 32 V18 Z" fill="#2E6B7A" stroke="#7EC8D4" stroke-width="2"/>
  <path d="M22 32 Q32 22 42 32" stroke="#E8F4F6" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <text x="32" y="58" text-anchor="middle" fill="#E8F4F6" font-family="Arial,sans-serif" font-size="8" font-weight="700">FRM</text>
</svg>""",
    "cpa": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <rect width="64" height="64" rx="14" fill="#1A2F4A"/>
  <rect x="18" y="14" width="28" height="30" rx="2" fill="#F5F0E8"/>
  <path d="M24 22 H40 M24 28 H40 M24 34 H34" stroke="#0B1F3A" stroke-width="2" stroke-linecap="round"/>
  <circle cx="40" cy="40" r="8" fill="#C9A227"/>
  <path d="M37 40 L39.5 42.5 L44 37" stroke="#0B1F3A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="32" y="58" text-anchor="middle" fill="#F5F0E8" font-family="Arial,sans-serif" font-size="8" font-weight="700">CPA</text>
</svg>""",
    "acca": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <rect width="64" height="64" rx="14" fill="#8B1E2D"/>
  <circle cx="32" cy="26" r="14" stroke="#F5D0D4" stroke-width="2.5" fill="none"/>
  <ellipse cx="32" cy="26" rx="6" ry="14" stroke="#F5D0D4" stroke-width="2" fill="none"/>
  <path d="M18 26 H46 M32 12 V40" stroke="#F5D0D4" stroke-width="1.5"/>
  <text x="32" y="56" text-anchor="middle" fill="#FFF" font-family="Arial,sans-serif" font-size="8" font-weight="700">ACCA</text>
</svg>""",
    "caia": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <rect width="64" height="64" rx="14" fill="#2C1A4A"/>
  <polygon points="32,10 48,26 32,42 16,26" fill="#6B4C9A" stroke="#D4C0F0" stroke-width="2"/>
  <circle cx="32" cy="26" r="5" fill="#C9A227"/>
  <text x="32" y="56" text-anchor="middle" fill="#F0E8FF" font-family="Arial,sans-serif" font-size="8" font-weight="700">CAIA</text>
</svg>""",
    "cfp": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <rect width="64" height="64" rx="14" fill="#0E3D2E"/>
  <path d="M18 34 L32 16 L46 34 Z" fill="#3D8B6E"/>
  <rect x="22" y="34" width="20" height="12" fill="#2A6B52"/>
  <path d="M26 42 V36 H30 V42 M34 42 V32 H38 V42" stroke="#C9E8D8" stroke-width="1.8"/>
  <text x="32" y="58" text-anchor="middle" fill="#E8F5EE" font-family="Arial,sans-serif" font-size="8" font-weight="700">CFP</text>
</svg>""",
    "sie": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <rect width="64" height="64" rx="14" fill="#0B2A4A"/>
  <rect x="16" y="26" width="8" height="18" fill="#4A90C2"/>
  <rect x="28" y="18" width="8" height="26" fill="#6BB0E0"/>
  <rect x="40" y="22" width="8" height="22" fill="#4A90C2"/>
  <path d="M14 44 H50" stroke="#C9A227" stroke-width="2.5" stroke-linecap="round"/>
  <text x="32" y="58" text-anchor="middle" fill="#E8F0F8" font-family="Arial,sans-serif" font-size="8" font-weight="700">SIE</text>
</svg>""",
    "cima": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <rect width="64" height="64" rx="14" fill="#3A1A0B"/>
  <circle cx="32" cy="26" r="14" stroke="#E8B88A" stroke-width="2.5" fill="#5A2E18"/>
  <path d="M32 26 L32 16 M32 26 L40 32" stroke="#F5D0B0" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="32" cy="26" r="3" fill="#C9A227"/>
  <text x="32" y="56" text-anchor="middle" fill="#F5E6D8" font-family="Arial,sans-serif" font-size="8" font-weight="700">CIMA</text>
</svg>""",
    "cmt": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <rect width="64" height="64" rx="14" fill="#1A2433"/>
  <path d="M18 38 V26 M18 26 H22 M18 38 H22" stroke="#5BDC8A" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M30 40 V20 M30 20 H34 M30 40 H34" stroke="#5BDC8A" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M42 36 V28 M42 28 H46 M42 36 H46" stroke="#E85B5B" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M16 44 H50" stroke="#6B7A8A" stroke-width="1.5"/>
  <text x="32" y="58" text-anchor="middle" fill="#E8EEF4" font-family="Arial,sans-serif" font-size="8" font-weight="700">CMT</text>
</svg>""",
    "cfa-esg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <rect width="64" height="64" rx="14" fill="#0F3D28"/>
  <path d="M28 38 C28 26 36 18 44 16 C42 26 36 32 28 34 Z" fill="#4CAF70"/>
  <path d="M24 40 C24 30 20 22 14 18 C18 28 20 34 24 38 Z" fill="#7BC896"/>
  <path d="M28 38 V46" stroke="#C9A227" stroke-width="2.5" stroke-linecap="round"/>
  <text x="32" y="58" text-anchor="middle" fill="#E8F5EE" font-family="Arial,sans-serif" font-size="7" font-weight="700">ESG</text>
</svg>""",
}

for name, svg in SVGS.items():
    path = out / f"{name}.svg"
    path.write_text(svg.strip() + "\n", encoding="utf-8")
    print(path.name)

print("done", len(SVGS))
