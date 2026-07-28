"""
Fetch 76 real person profiles from randomuser.me with balanced nationalities.
Each profile keeps API name + gender + nat + photo together so they match.
"""
from __future__ import annotations

import json
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "public" / "mentors"
DATA_OUT = ROOT / "src" / "lib" / "mentors-data.json"

# Clearly gendered given names used to drop occasional API mismatches
FEMALE_ONLY = {
    "frederikke", "maja", "nanna", "amber", "ava", "isla", "scarlett", "freya",
    "alma", "erika", "catherine", "abigail", "noelle", "siri", "sol", "jennie",
    "enni", "madhura", "shravya", "elif", "soledad", "guillermina", "elisa",
    "melisa", "murielle", "gabija", "klara", "laurie", "amelia", "alice",
    "sarah", "doris", "erundina", "maría", "maria",
}
MALE_ONLY = {
    "josé", "jose", "miguel", "jorge", "pablo", "espartaco", "ian", "jacob",
    "william", "harold", "darryl", "armand", "mathys", "sergio", "nimit",
    "nakul", "mustafa", "adem", "toivo", "lauri", "frank", "felix", "matthew",
    "victor", "valdemar", "adam", "wayne", "byron", "claude", "frankie",
    "gyan", "thilo", "raik", "elio", "inácio", "inacio", "cetin", "çetin",
}

NAT_PLAN: list[tuple[str, int]] = [
    ("US", 6), ("GB", 6), ("IN", 6), ("AU", 5), ("CA", 5), ("DE", 5),
    ("FR", 4), ("NL", 4), ("BR", 4), ("CH", 4), ("IE", 4), ("ES", 4),
    ("TR", 4), ("MX", 4), ("NO", 3), ("DK", 3), ("FI", 3), ("NZ", 2),
]

NAT_LOCATIONS: dict[str, list[tuple[str, str]]] = {
    "US": [("New York", "United States"), ("Chicago", "United States"), ("Boston", "United States")],
    "GB": [("London", "United Kingdom"), ("Edinburgh", "United Kingdom")],
    "AU": [("Sydney", "Australia"), ("Melbourne", "Australia")],
    "CA": [("Toronto", "Canada"), ("Vancouver", "Canada")],
    "DE": [("Frankfurt", "Germany"), ("Munich", "Germany")],
    "FR": [("Paris", "France"), ("Lyon", "France")],
    "NL": [("Amsterdam", "Netherlands")],
    "IE": [("Dublin", "Ireland")],
    "BR": [("São Paulo", "Brazil"), ("Rio de Janeiro", "Brazil")],
    "IN": [("Mumbai", "India"), ("Bengaluru", "India"), ("Delhi", "India")],
    "CH": [("Zurich", "Switzerland"), ("Geneva", "Switzerland")],
    "NO": [("Oslo", "Norway")],
    "ES": [("Madrid", "Spain"), ("Barcelona", "Spain")],
    "TR": [("Istanbul", "Turkey")],
    "NZ": [("Auckland", "New Zealand")],
    "DK": [("Copenhagen", "Denmark")],
    "FI": [("Helsinki", "Finland")],
    "MX": [("Mexico City", "Mexico")],
}

NAT_UNIVERSITIES: dict[str, list[tuple[str, str]]] = {
    "US": [
        ("Finance", "University of Pennsylvania"),
        ("Financial Engineering", "Columbia University"),
        ("Economics", "University of Chicago"),
        ("Business Administration", "NYU Stern"),
    ],
    "GB": [
        ("Economics", "London School of Economics"),
        ("Mathematics", "University of Cambridge"),
        ("Finance", "Imperial College London"),
    ],
    "AU": [
        ("Accounting", "University of Melbourne"),
        ("Commerce", "University of New South Wales"),
    ],
    "CA": [
        ("Commerce", "University of Toronto"),
        ("Finance", "McGill University"),
    ],
    "DE": [
        ("Economics", "University of Mannheim"),
        ("Management", "Frankfurt School of Finance"),
    ],
    "FR": [
        ("International Business", "HEC Paris"),
        ("Finance", "Sciences Po"),
    ],
    "NL": [
        ("Economics", "Erasmus University Rotterdam"),
        ("Finance", "University of Amsterdam"),
    ],
    "IE": [
        ("Finance", "University College Dublin"),
        ("Business Administration", "Trinity College Dublin"),
    ],
    "BR": [
        ("Economics", "Insper"),
        ("Business Administration", "FGV EAESP"),
    ],
    "IN": [
        ("Finance", "Indian Institute of Management Ahmedabad"),
        ("Economics", "Delhi School of Economics"),
        ("Commerce", "Indian School of Business"),
    ],
    "CH": [
        ("Finance", "University of Zurich"),
        ("Economics", "University of St. Gallen"),
    ],
    "NO": [
        ("Finance", "BI Norwegian Business School"),
        ("Economics", "University of Oslo"),
    ],
    "ES": [
        ("Finance", "IE Business School"),
        ("Management", "ESADE"),
    ],
    "TR": [
        ("Economics", "Boğaziçi University"),
        ("Business Administration", "Koç University"),
    ],
    "NZ": [
        ("Finance", "University of Auckland"),
        ("Commerce", "University of Otago"),
    ],
    "DK": [
        ("Finance", "Copenhagen Business School"),
        ("Economics", "University of Copenhagen"),
    ],
    "FI": [
        ("Finance", "Aalto University"),
        ("Economics", "University of Helsinki"),
    ],
    "MX": [
        ("Finance", "ITAM"),
        ("Business Administration", "Tecnológico de Monterrey"),
    ],
}

EXAM_IDS = ["cfa", "frm", "cpa", "acca", "caia", "cfp", "sie", "cima", "cmt", "cfa-esg"]
EXAM_NAMES = {
    "cfa": "CFA",
    "frm": "FRM",
    "cpa": "CPA",
    "acca": "ACCA",
    "caia": "CAIA",
    "cfp": "CFP",
    "sie": "SIE",
    "cima": "CIMA",
    "cmt": "CMT",
    "cfa-esg": "CFA ESG",
}

# Complementary credentials that are plausible alongside each primary
# qualification. Ordering is varied per mentor below to avoid repeated pairs.
COMPATIBLE_QUALIFICATIONS: dict[str, list[str]] = {
    "cfa": ["frm", "caia", "cfa-esg", "cfp", "cmt"],
    "frm": ["cfa", "caia", "cpa"],
    "cpa": ["cfa", "cfp", "cima"],
    "acca": ["cima", "cfa", "cpa"],
    "caia": ["cfa", "frm", "cfa-esg"],
    "cfp": ["cfa", "cpa", "sie"],
    "sie": ["cfp", "cfa", "cpa"],
    "cima": ["acca", "cfa", "cpa"],
    "cmt": ["cfa", "frm", "caia"],
    "cfa-esg": ["cfa", "caia", "frm"],
}


def fetch_nat(nat: str, n: int, seed: str) -> list[dict]:
    url = (
        f"https://randomuser.me/api/?results={n}&nat={nat}"
        f"&inc=name,gender,picture,nat&noinfo&seed={seed}"
    )
    with urllib.request.urlopen(url, timeout=60) as resp:
        payload = json.loads(resp.read().decode("utf-8"))
    return payload["results"]


def download(url: str, dest: Path) -> None:
    req = urllib.request.Request(url, headers={"User-Agent": "AskFinBotMentorSync/1.0"})
    with urllib.request.urlopen(req, timeout=60) as resp:
        dest.write_bytes(resp.read())


def gender_ok(first: str, gender: str) -> bool:
    key = first.strip().lower()
    if gender == "male" and key in FEMALE_ONLY:
        return False
    if gender == "female" and key in MALE_ONLY:
        return False
    return True


def qualification_focus(primary: str, i: int) -> list[str]:
    """Return a realistic credential mix: 48 single, 24 dual, 4 triple."""
    number = i + 1
    count = 3 if number % 19 == 0 else 2 if number % 3 == 0 else 1
    options = COMPATIBLE_QUALIFICATIONS[primary]
    offset = (i // len(EXAM_IDS)) % len(options)
    extras = [options[(offset + n) % len(options)] for n in range(count - 1)]
    return [primary, *extras]


def unique_quals(focus: list[str], i: int) -> list[dict]:
    names = [EXAM_NAMES[x] for x in focus]
    out = list(dict.fromkeys(names))
    out = out[:3]
    first_year = 2008 + (i % 11)
    years = [first_year]
    for n in range(1, len(out)):
        years.append(min(2024, years[-1] + 1 + ((i + n) % 4)))
    return [{"name": name, "year": year} for name, year in zip(out, years)]


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for old in OUT_DIR.glob("mentor-*.jpg"):
        old.unlink()

    people: list[dict] = []
    for nat, count in NAT_PLAN:
        # fetch extras for filtering duplicates / gender mismatches
        batch = fetch_nat(nat, max(count * 3, 12), seed=f"askfinbot-{nat}-v3")
        people.extend(batch)

    seen: set[str] = set()
    by_nat: dict[str, int] = {nat: 0 for nat, _ in NAT_PLAN}
    targets = dict(NAT_PLAN)
    mentors: list[dict] = []

    for raw in people:
        if len(mentors) >= 76:
            break
        nat = raw["nat"]
        if by_nat.get(nat, 0) >= targets.get(nat, 0):
            continue

        first = raw["name"]["first"].strip().title()
        last = raw["name"]["last"].strip().title()
        gender = raw["gender"]
        if not gender_ok(first, gender):
            continue

        key = f"{first} {last}".lower()
        if key in seen:
            continue
        seen.add(key)

        locs = NAT_LOCATIONS[nat]
        city, country = locs[by_nat[nat] % len(locs)]
        unis = NAT_UNIVERSITIES[nat]
        major, university = unis[by_nat[nat] % len(unis)]

        i = len(mentors)
        primary = EXAM_IDS[i % len(EXAM_IDS)]
        focus = qualification_focus(primary, i)

        photo_name = f"mentor-{i + 1}.jpg"
        download(raw["picture"]["large"], OUT_DIR / photo_name)

        mentors.append(
            {
                "id": f"mentor-{i + 1}",
                "name": f"{first} {last}",
                "gender": gender,
                "nat": nat,
                "city": city,
                "country": country,
                "major": major,
                "university": university,
                "qualifications": unique_quals(focus, i),
                "photo": f"/mentors/{photo_name}",
                "focusExamIds": focus,
            }
        )
        by_nat[nat] = by_nat.get(nat, 0) + 1
        line = f"{i + 1:02d} {gender[0].upper()} {nat} {first} {last} -> {city}"
        print(line.encode("ascii", "replace").decode("ascii"))

    if len(mentors) < 76:
        raise SystemExit(f"Only got {len(mentors)} mentors; by_nat={by_nat}")

    DATA_OUT.write_text(json.dumps(mentors, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print("wrote", len(mentors), "mentors; photos", len(list(OUT_DIR.glob('mentor-*.jpg'))))
    print("by_nat", {k: v for k, v in by_nat.items() if v})


if __name__ == "__main__":
    main()
