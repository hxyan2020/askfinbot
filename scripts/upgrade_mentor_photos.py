"""Replace mentor photos with sharper professional Unsplash headshots (gender-matched)."""
from __future__ import annotations

import json
import urllib.request
from io import BytesIO
from pathlib import Path

from PIL import Image, ImageEnhance, ImageFilter, ImageOps

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "public" / "mentors"
DATA = ROOT / "src" / "lib" / "mentors-data.json"

MALE_IDS = [
    "1560250097-0b93528c311a",
    "1472099645785-5658abf4ff4e",
    "1519085360753-af0119f7cbe7",
    "1507003211169-0a1dd7228f2d",
    "1500648767791-00dcc994a43e",
    "1506794778202-cad84cf45f1d",
    "1557862921-37829c790f19",
    "1568602471122-7832951cc4c5",
    "1570295999919-56ceb5ecca61",
    "1535713875002-d1d0cf377fde",
    "1599566150163-29194dcaad36",
    "1522075469751-3a6694fb2f61",
    "1552058544-f2b08422138a",
    "1603415526960-f7e0328c63b1",
    "1612349317150-e413f6a5b16d",
    "1633332755192-727a05c4013d",
    "1622253692010-333f2da6031d",
    "1582750433449-648ed127bb54",
    "1556157382-97eda2d62296",
    "1463453091185-61582044d556",
    "1492562080023-ab3db95bfbce",
    "1539571696357-5a69c17a67c6",
    "1531427186611-ecfd6d936c79",
    "1545167622-3a6ac756afa4",
    "1552374196-c4e7ffc6e126",
    "1507591064344-4c6ce005b128",
    "1537511446984-935f663eb1f4",
    "1454165804606-c3d57bc86b40",
]

FEMALE_IDS = [
    "1573496359142-b8d87734a5a2",
    "1580489944761-15a19d654956",
    "1438761681033-6461ffad8d80",
    "1494790108377-be9c29b29330",
    "1551836022-d5d88e9218df",
    "1534528741775-53994a69daeb",
    "1559839734-2b71ea197ec2",
    "1548142813-c348350df52b",
    "1524504388940-b1c1722653e1",
    "1529626455594-4ff0802cfb7e",
    "1517841905240-472988babdf9",
    "1488426862026-3ee34a7d66df",
    "1502823403499-6ccfcf4fb453",
    "1594744803329-e58b31de8bf5",
    "1566492031773-4f4e44671857",
    "1506863530036-1efeddceb993",
    "1487412720507-e7ab37603c6f",
    "1531123897727-8f129e1688ce",
    "1554151228-14d9def656e4",
    "1508214751196-bcfd4ca60f91",
    "1587614382346-4ec70e388b28",
    "1573497019236-17f8177b81e8",
]


def url_for(photo_id: str) -> str:
    return (
        f"https://images.unsplash.com/photo-{photo_id}"
        f"?auto=format&fit=crop&w=800&h=800&q=88&crop=faces"
    )


def fetch(url: str) -> bytes:
    req = urllib.request.Request(
        url,
        headers={"User-Agent": "AskFinBotMentorHQ/1.0", "Accept": "image/jpeg,image/*"},
    )
    with urllib.request.urlopen(req, timeout=45) as resp:
        return resp.read()


def process(raw: bytes) -> Image.Image:
    im = Image.open(BytesIO(raw)).convert("RGB")
    im = ImageOps.fit(im, (400, 400), method=Image.Resampling.LANCZOS)
    im = ImageEnhance.Contrast(im).enhance(1.05)
    im = ImageEnhance.Color(im).enhance(0.96)
    im = ImageEnhance.Sharpness(im).enhance(1.2)
    im = im.filter(ImageFilter.UnsharpMask(radius=0.9, percent=105, threshold=2))
    return im


def main() -> None:
    mentors = json.loads(DATA.read_text(encoding="utf-8"))
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    male_i = 0
    female_i = 0

    for m in mentors:
        gender = (m.get("gender") or "male").lower()
        ok = False
        for _ in range(10):
            if gender == "female":
                pid = FEMALE_IDS[female_i % len(FEMALE_IDS)]
                female_i += 1
            else:
                pid = MALE_IDS[male_i % len(MALE_IDS)]
                male_i += 1
            try:
                raw = fetch(url_for(pid))
                if len(raw) < 8000:
                    continue
                im = process(raw)
                dest = OUT_DIR / Path(m["photo"]).name
                im.save(dest, "JPEG", quality=90, optimize=True)
                print(f"OK {m['id']} {gender} {dest.stat().st_size}")
                ok = True
                break
            except Exception as e:
                print(f"skip {pid}: {e}")
        if not ok:
            raise SystemExit(f"Failed {m['id']}")

    print(f"done {len(mentors)}")


if __name__ == "__main__":
    main()
