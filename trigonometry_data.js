// Trigonometry Master Hub Clean Offline Data (70 PYQs + 16 Formulas)
window.TRIGONOMETRY_FORMULAS = [
  {
    "id": "trig_f01",
    "title": "Trigonometric Ratios & SOH-CAH-TOA",
    "category": "Basic Ratios",
    "formula": "sin θ = P/H,  cos θ = B/H,  tan θ = P/B,  cot θ = B/P,  sec θ = H/B,  cosec θ = H/P",
    "desc": "In a right triangle with acute angle θ: P = side opposite to θ, B = adjacent base side, H = hypotenuse. Reciprocals: sin θ × cosec θ = 1, cos θ × sec θ = 1, tan θ × cot θ = 1."
  },
  {
    "id": "trig_f02",
    "title": "Pythagorean Triplets Master Catalog",
    "category": "Triplets",
    "formula": "(3, 4, 5),  (5, 12, 13),  (7, 24, 25),  (8, 15, 17),  (9, 40, 41),  (11, 60, 61),  (12, 35, 37),  (20, 21, 29)",
    "desc": "Generator rules: For odd integer n: (n, (n²-1)/2, (n²+1)/2). For even integer 2m: (2m, m²-1, m²+1). Multiples of triplets are also triplets (e.g. 6, 8, 10 or 15, 20, 25)."
  },
  {
    "id": "trig_f03",
    "title": "ASTC Quadrant Rule (All Silver Tea Cups)",
    "category": "Quadrant Rules",
    "formula": "Q1 (0°-90°): ALL (+),  Q2 (90°-180°): Sin/Cosec (+),  Q3 (180°-270°): Tan/Cot (+),  Q4 (270°-360°): Cos/Sec (+)",
    "desc": "Transformation: At (90° ± θ) and (270° ± θ), the trigonometric function changes (sin ↔ cos, tan ↔ cot, sec ↔ cosec). At (180° ± θ) and (360° ± θ), function stays identical. Negative angles: sin(-θ) = -sin θ, cos(-θ) = cos θ, tan(-θ) = -tan θ."
  },
  {
    "id": "trig_f04",
    "title": "Standard Values Table (0°, 30°, 45°, 60°, 90°)",
    "category": "Table Values",
    "formula": "sin: (0, 1/2, 1/√2, √3/2, 1)  |  cos: (1, √3/2, 1/√2, 1/2, 0)  |  tan: (0, 1/√3, 1, √3, ∞)",
    "desc": "Reciprocals: cot is reverse of tan (∞, √3, 1, 1/√3, 0); sec is reciprocal of cos; cosec is reciprocal of sin."
  },
  {
    "id": "trig_f05",
    "title": "Special High-Yield Angles (15° and 75°)",
    "category": "Special Angles",
    "formula": "sin 15° = cos 75° = (√6 - √2)/4  |  cos 15° = sin 75° = (√6 + √2)/4",
    "desc": "Tangent & Cotangent: tan 15° = cot 75° = 2 - √3  and  cot 15° = tan 75° = 2 + √3. High frequency in SSC CGL Tier 2!"
  },
  {
    "id": "trig_f06",
    "title": "Complementary Angles Rule (θ₁ + θ₂ = 90°)",
    "category": "Complementary",
    "formula": "sin θ₁ = cos θ₂,  tan θ₁ × tan θ₂ = 1,  cot θ₁ × cot θ₂ = 1,  sin²θ₁ + sin²θ₂ = 1,  cos²θ₁ + cos²θ₂ = 1",
    "desc": "Whenever the sum of angles equals 90°, products of tans/cots equal 1, and sums of sin²/cos² equal 1. For example: tan 10° × tan 80° = 1, sin² 23° + sin² 67° = 1."
  },
  {
    "id": "trig_f07",
    "title": "Identity 1: sin²θ + cos²θ = 1",
    "category": "Identities",
    "formula": "sin²θ + cos²θ = 1  ⟹  sin⁴θ + cos⁴θ = 1 - 2sin²θcos²θ,  sin⁶θ + cos⁶θ = 1 - 3sin²θcos²θ",
    "desc": "Also: (sin θ + cos θ)² = 1 + 2sin θ cos θ = 1 + sin 2θ, and (sin θ - cos θ)² = 1 - sin 2θ."
  },
  {
    "id": "trig_f08",
    "title": "Identity 2: sec²θ - tan²θ = 1 (The Conjugate Pair)",
    "category": "Identities",
    "formula": "sec θ - tan θ = 1 / (sec θ + tan θ)  ⟹  If sec θ + tan θ = x, then sec θ = (x² + 1)/(2x), tan θ = (x² - 1)/(2x)",
    "desc": "Notice that sin θ = tan θ / sec θ = (x² - 1)/(x² + 1) directly in one step!"
  },
  {
    "id": "trig_f09",
    "title": "Identity 3: cosec²θ - cot²θ = 1 (The Cosec Conjugate)",
    "category": "Identities",
    "formula": "cosec θ - cot θ = 1 / (cosec θ + cot θ)  ⟹  If cosec θ + cot θ = s, then cos θ = (s² - 1)/(s² + 1)",
    "desc": "Direct result: cosec θ = (s² + 1)/(2s), cot θ = (s² - 1)/(2s), and sin θ = 2s/(s² + 1)."
  },
  {
    "id": "trig_f10",
    "title": "Linear Forms: a·sin θ + b·cos θ = c",
    "category": "Linear Forms",
    "formula": "If a·sin θ + b·cos θ = c where a² + b² = c²  ⟹  sin θ = a/c,  cos θ = b/c,  tan θ = a/b",
    "desc": "Conjugate linear pair: If a·sin θ + b·cos θ = c and a·cos θ - b·sin θ = d, then a² + b² = c² + d²."
  },
  {
    "id": "trig_f11",
    "title": "Maestro's Value Putting Master Strategy",
    "category": "Topper Tricks",
    "formula": "Pure sin & cos: put θ = 0° or 90°  |  Mixed with tan, cot, sec, cosec: put θ = 45°",
    "desc": "Ensure the chosen angle does not make any denominator zero or create (1/0 = ∞). If two options yield the same value at 45°, switch to θ = 30°."
  },
  {
    "id": "trig_f12",
    "title": "Double Angle Transformations",
    "category": "Double Angles",
    "formula": "sin 2θ = 2sin θ cos θ = (2tan θ)/(1 + tan²θ)  |  cos 2θ = cos²θ - sin²θ = 2cos²θ - 1 = 1 - 2sin²θ",
    "desc": "Half-angle forms: (1 - cos 2θ)/(1 + cos 2θ) = tan²θ. Also: 1 + sin 2θ = (sin θ + cos θ)²."
  },
  {
    "id": "trig_f13",
    "title": "Compound Angles & 45° Product Rules",
    "category": "Compound Angles",
    "formula": "If A + B = 45°  ⟹  (1 + tan A)(1 + tan B) = 2  and  (1 - cot A)(1 - cot B) = 2",
    "desc": "If A + B = 135° ⟹ (1 - tan A)(1 - tan B) = 2. Also: tan(A ± B) = (tan A ± tan B)/(1 ∓ tan A tan B)."
  },
  {
    "id": "trig_f14",
    "title": "Maxima & Minima: a·sin θ ± b·cos θ",
    "category": "Maxima & Minima",
    "formula": "Maximum = +√(a² + b²)  and  Minimum = -√(a² + b²)",
    "desc": "With constant term: For (a·sin θ + b·cos θ + c): Max = c + √(a² + b²), Min = c - √(a² + b²). Example: 7cos A + 24sin A + 32 ⟹ Max = 32 + 25 = 57."
  },
  {
    "id": "trig_f15",
    "title": "Maxima & Minima: a·sin²θ + b·cos²θ",
    "category": "Maxima & Minima",
    "formula": "If a > b: Maximum = a, Minimum = b  |  If b > a: Maximum = b, Minimum = a",
    "desc": "Pure square combinations are bounded strictly between the two coefficients! No calculations needed."
  },
  {
    "id": "trig_f16",
    "title": "Maxima & Minima: Reciprocal Pairs",
    "category": "Maxima & Minima",
    "formula": "a·tan²θ + b·cot²θ: Min = 2√(ab)  |  a·sin²θ + b·cosec²θ: Min = 2√(ab) (if a ≥ b), Min = a + b (if b > a)",
    "desc": "Same rule applies to a·cos²θ + b·sec²θ: Min = 2√(ab) if a ≥ b, and Min = a + b if b > a."
  }
];

window.TRIGONOMETRY_DATA = [
  {
    "id": "trig_01",
    "type": "Type 1: Basic Ratios & Triplets",
    "exam": "SSC CGL 2021 Pre",
    "page": 23,
    "question": "If sec A = 17/8, given that A < 90°, what is the value of (34 sin A + 15 cot A) / (68 cos A - 16 tan A)?",
    "options": [
      "23",
      "19",
      "30",
      "38"
    ],
    "answer": "19",
    "solution": "Given sec A = 17/8. Since A is an acute angle, this corresponds to the Pythagorean triplet (8, 15, 17):\n• Hypotenuse (H) = 17\n• Base (B) = 8\n• Perpendicular (P) = √(17² - 8²) = 15.\n\nNow calculate individual trigonometric ratios:\n• sin A = P/H = 15/17\n• cos A = B/H = 8/17\n• tan A = P/B = 15/8\n• cot A = B/P = 8/15.\n\nSubstitute into the numerator:\n34 sin A + 15 cot A = 34(15/17) + 15(8/15) = 2(15) + 8 = 30 + 8 = 38.\n\nSubstitute into the denominator:\n68 cos A - 16 tan A = 68(8/17) - 16(15/8) = 4(8) - 2(15) = 32 - 30 = 2.\n\nFinal value = 38 / 2 = 19.",
    "trick": "Identify triplet (8, 15, 17) instantly: P = 15, B = 8, H = 17. Numerator = 34(15/17) + 15(8/15) = 30 + 8 = 38. Denominator = 68(8/17) - 16(15/8) = 32 - 30 = 2. Ans = 38/2 = 19."
  },
  {
    "id": "trig_02",
    "type": "Type 1: Basic Ratios & Triplets",
    "exam": "SSC CGL 2021 Pre",
    "page": 24,
    "question": "If cos B = 5/7, what is the value of cosec B + cot B? Given 0 < B < π/2.",
    "options": [
      "√6",
      "√6 / 2",
      "2√6",
      "7/5"
    ],
    "answer": "√6",
    "solution": "Given cos B = 5/7 with 0 < B < 90°:\n• Base (B) = 5\n• Hypotenuse (H) = 7\n• Perpendicular (P) = √(7² - 5²) = √(49 - 25) = √24 = 2√6.\n\nNow calculate cosec B + cot B:\ncosec B + cot B = (H / P) + (B / P) = (H + B) / P\n= (7 + 5) / (2√6) = 12 / (2√6) = 6 / √6 = √6.",
    "trick": "Master Identity: cosec B + cot B = (H + B) / P. Here H = 7, B = 5, P = √24 = 2√6. Directly: (7 + 5) / (2√6) = 12 / (2√6) = √6 in 5 seconds!"
  },
  {
    "id": "trig_03",
    "type": "Type 1: Basic Ratios & Triplets",
    "exam": "SSC CGL 2023 Pre",
    "page": 25,
    "question": "If sin 23° = a/b, then the value of sec 23° - sin 67° is:",
    "options": [
      "a² / (b√(b² - a²))",
      "(b² - a²) / a²",
      "a² / (a√(b² + a²))",
      "b / √(b² - a²)"
    ],
    "answer": "a² / (b√(b² - a²))",
    "solution": "Note that 67° = 90° - 23°, so sin 67° = cos 23°.\nThe expression becomes:\nsec 23° - sin 67° = sec 23° - cos 23° = (1 / cos 23°) - cos 23° = (1 - cos² 23°) / cos 23° = sin² 23° / cos 23°.\n\nFrom a right triangle with angle 23°:\n• sin 23° = a/b ⟹ Perpendicular = a, Hypotenuse = b\n• Base = √(b² - a²)\n• cos 23° = √(b² - a²) / b.\n\nSubstitute:\nsin² 23° / cos 23° = (a² / b²) / [√(b² - a²) / b] = a² / [b√(b² - a²)].",
    "trick": "sec 23° - sin 67° = sec 23° - cos 23° = sin² 23° / cos 23°. Directly substitute sin 23° = a/b and cos 23° = √(b²-a²)/b ⟹ a² / [b√(b² - a²)]."
  },
  {
    "id": "trig_04",
    "type": "Type 1: Basic Ratios & Triplets",
    "exam": "SSC CGL 2021 Pre",
    "page": 26,
    "question": "If cos 53° = x/y, then sec 53° + cot 37° is equal to:",
    "options": [
      "(y + √(y² - x²)) / x",
      "(x + √(y² - x²)) / √(y² - x²)",
      "(y - √(y² - x²)) / x",
      "(y + √(y² - x²)) / y"
    ],
    "answer": "(y + √(y² - x²)) / x",
    "solution": "Complementary angle relation: cot 37° = cot(90° - 53°) = tan 53°.\nThus the expression simplifies to:\nsec 53° + cot 37° = sec 53° + tan 53°.\n\nIn right triangle with angle 53°:\n• Base = x, Hypotenuse = y ⟹ Perpendicular = √(y² - x²)\n• sec 53° = y/x\n• tan 53° = √(y² - x²) / x.\n\nCombining both terms:\nsec 53° + tan 53° = (y + √(y² - x²)) / x.",
    "trick": "cot 37° = tan 53°. So sec 53° + tan 53° = (H + P)/B = (y + √(y² - x²)) / x. Solved in 5 seconds!"
  },
  {
    "id": "trig_05",
    "type": "Type 1: Basic Ratios & Triplets",
    "exam": "SSC CGL 2023 Pre",
    "page": 27,
    "question": "Find the value of cos 47° sec 133° + sin 44° cosec 136°.",
    "options": [
      "1/2",
      "1",
      "0",
      "-1"
    ],
    "answer": "0",
    "solution": "Step 1: Simplify the first term using allied angles:\n• 133° = 180° - 47°\n• sec 133° = sec(180° - 47°) = -sec 47°\n• cos 47° · sec 133° = cos 47° · (-sec 47°) = -1.\n\nStep 2: Simplify the second term:\n• 136° = 180° - 44°\n• cosec 136° = cosec(180° - 44°) = +cosec 44°\n• sin 44° · cosec 136° = sin 44° · cosec 44° = +1.\n\nSum of terms = -1 + 1 = 0.",
    "trick": "Allied angle ASTC rule: sec(180° - θ) = -sec θ (Quadrant 2) ⟹ first term is -1. cosec(180° - θ) = +cosec θ ⟹ second term is +1. (-1) + (+1) = 0."
  },
  {
    "id": "trig_06",
    "type": "Type 1: Basic Ratios & Triplets",
    "exam": "SSC CGL 2023 Pre",
    "page": 28,
    "question": "If sin x = 3/10, then what is the value of tan x + cot x?",
    "options": [
      "100 / (3√91)",
      "100 / (2√83)",
      "100 / √7",
      "100 / (3√85)"
    ],
    "answer": "100 / (3√91)",
    "solution": "Identity: tan x + cot x = (sin x / cos x) + (cos x / sin x) = (sin²x + cos²x) / (sin x cos x) = 1 / (sin x cos x).\n\nGiven sin x = 3/10:\n• Perpendicular = 3, Hypotenuse = 10\n• Base = √(10² - 3²) = √(100 - 9) = √91\n• cos x = √91 / 10.\n\nNow calculate product:\nsin x cos x = (3/10) × (√91 / 10) = 3√91 / 100.\n\nTherefore:\ntan x + cot x = 1 / (sin x cos x) = 100 / (3√91).",
    "trick": "tan x + cot x = 1 / (sin x cos x). Here sin x = 3/10 and cos x = √91 / 10. Reciprocal of (3√91/100) = 100 / (3√91)."
  },
  {
    "id": "trig_07",
    "type": "Type 1: Basic Ratios & Triplets",
    "exam": "SSC CGL 2023 Pre",
    "page": 29,
    "question": "What is the value of sin(-405°)?",
    "options": [
      "1/2",
      "1/√2",
      "-1/2",
      "-1/√2"
    ],
    "answer": "-1/√2",
    "solution": "Quadrant rules for negative and large angles:\n1. sin(-θ) = -sin θ ⟹ sin(-405°) = -sin(405°).\n2. 405° = 360° + 45°.\n3. sin(360° + 45°) = sin 45° = 1/√2.\n\nTherefore:\nsin(-405°) = -sin(45°) = -1/√2.",
    "trick": "Negative angle sin(-θ) pulls minus outside: -sin(405°) = -sin(360° + 45°) = -sin 45° = -1/√2."
  },
  {
    "id": "trig_08",
    "type": "Type 1: Basic Ratios & Triplets",
    "exam": "SSC CGL 2023 Pre",
    "page": 30,
    "question": "What is the value of tan(-1125°)?",
    "options": [
      "1",
      "1/2",
      "-1",
      "0"
    ],
    "answer": "-1",
    "solution": "Step 1: Negative angle rule: tan(-θ) = -tan θ ⟹ tan(-1125°) = -tan(1125°).\n\nStep 2: Express 1125° in terms of complete rotations (360°):\n1125° = 3 × 360° + 45° = 1080° + 45°.\n\nStep 3: Since tangent has period 180° (and 360°):\ntan(1080° + 45°) = tan(45°) = 1.\n\nTherefore:\ntan(-1125°) = -1.",
    "trick": "1125 / 360 leaves remainder 45°. tan(-1125°) = -tan 45° = -1."
  },
  {
    "id": "trig_09",
    "type": "Type 1: Basic Ratios & Triplets",
    "exam": "SSC CGL 2023 Pre",
    "page": 31,
    "question": "What is the value of cosec 2910° + sec 4260° + tan 2565° + cot 1755°?",
    "options": [
      "3",
      "1",
      "4",
      "0"
    ],
    "answer": "4",
    "solution": "Evaluate each term individually modulo 360°:\n• cosec 2910°: 2910° = 8 × 360° + 30° = 2880° + 30° ⟹ cosec 30° = 2.\n• sec 4260°: 4260° = 11 × 360° + 300° = 3960° + 300° = 12 × 360° - 60° ⟹ sec(-60°) = sec 60° = 2.\n• tan 2565°: 2565° = 7 × 360° + 45° = 2520° + 45° ⟹ tan 45° = 1.\n• cot 1755°: 1755° = 5 × 360° - 45° = 1800° - 45° ⟹ cot(-45°) = -cot 45° = -1.\n\nSum of all terms = 2 + 2 + 1 + (-1) = 4.",
    "trick": "Divide all angles by 360° for remainders: cosec 30° + sec 60° + tan 45° + cot(-45°) = 2 + 2 + 1 - 1 = 4."
  },
  {
    "id": "trig_10",
    "type": "Type 1: Basic Ratios & Triplets",
    "exam": "SSC CGL 2023 Pre",
    "page": 32,
    "question": "If sin A = -3/5, and A lies in the III quadrant, the value of sec A is:",
    "options": [
      "-5/3",
      "5/4",
      "-4/5",
      "-5/4"
    ],
    "answer": "-5/4",
    "solution": "In the III quadrant:\n• Both sine and cosine (and secant) are negative; only tan and cot are positive (ASTC rule).\n• Given sin A = -3/5 ⟹ |P| = 3, H = 5 ⟹ |B| = √(5² - 3²) = 4.\n• Since cosine is negative in Q3: cos A = -4/5.\n• sec A = 1 / cos A = -5/4.",
    "trick": "Triplet (3, 4, 5). In Quadrant 3, cos and sec are NEGATIVE. sec A = -H/B = -5/4."
  },
  {
    "id": "trig_11",
    "type": "Type 1: Basic Ratios & Triplets",
    "exam": "SSC CGL 2023 Pre",
    "page": 33,
    "question": "If tan x = -12/5 where x lies in the second quadrant, what is the value of sin x - cot x?",
    "options": [
      "209/156",
      "169/156",
      "156/209",
      "-156/169"
    ],
    "answer": "209/156",
    "solution": "In the II quadrant:\n• Sine and cosecant are positive; all other ratios are negative.\n• Given tan x = -12/5 ⟹ P = 12, B = -5, H = √(12² + 5²) = 13.\n• sin x = P/H = 12/13.\n• cot x = 1 / tan x = -5/12.\n\nNow calculate sin x - cot x:\nsin x - cot x = (12/13) - (-5/12) = 12/13 + 5/12 = (144 + 65) / (13 × 12) = 209 / 156.",
    "trick": "Quadrant 2: sin is positive (+12/13), cot is negative (-5/12). Difference = 12/13 - (-5/12) = 12/13 + 5/12 = (144 + 65)/156 = 209/156."
  },
  {
    "id": "trig_12",
    "type": "Type 1: Basic Ratios & Triplets",
    "exam": "SSC CGL 2023 Pre",
    "page": 34,
    "question": "If tan x = 7/5, then the value of (9 sin x - (42/5) cos x) / (15 sin x + 21 cos x) is:",
    "options": [
      "0",
      "1",
      "0.1",
      "0.5"
    ],
    "answer": "0.1",
    "solution": "Divide both the numerator and denominator by cos x (since tan x = sin x / cos x):\n\nNumerator = 9 tan x - 42/5 = 9(7/5) - 42/5 = 63/5 - 42/5 = 21/5.\n\nDenominator = 15 tan x + 21 = 15(7/5) + 21 = 3(7) + 21 = 21 + 21 = 42.\n\nFinal value = (21/5) / 42 = 21 / (5 × 42) = 1 / (5 × 2) = 1/10 = 0.1.",
    "trick": "Divide by cos x to convert to tan x: Numerator = 9(7/5) - 42/5 = 21/5. Denominator = 15(7/5) + 21 = 42. Ratio = (21/5)/42 = 1/10 = 0.1."
  },
  {
    "id": "trig_13",
    "type": "Type 1: Basic Ratios & Triplets",
    "exam": "SSC CGL 2024 Pre",
    "page": 35,
    "question": "If 4 tan θ - 3 = 0, then the value of (1 - cos 2θ) / (1 + cos 2θ) is:",
    "options": [
      "1",
      "7/15",
      "4/3",
      "9/16"
    ],
    "answer": "9/16",
    "solution": "Half-angle identity simplification:\n• 1 - cos 2θ = 2 sin²θ\n• 1 + cos 2θ = 2 cos²θ\n• (1 - cos 2θ) / (1 + cos 2θ) = (2 sin²θ) / (2 cos²θ) = tan²θ.\n\nFrom given equation: 4 tan θ - 3 = 0 ⟹ tan θ = 3/4.\n\nTherefore:\ntan²θ = (3/4)² = 9/16.",
    "trick": "Golden formula: (1 - cos 2θ)/(1 + cos 2θ) = tan²θ. Given tan θ = 3/4 ⟹ tan²θ = 9/16 in 3 seconds!"
  },
  {
    "id": "trig_14",
    "type": "Type 1: Basic Ratios & Triplets",
    "exam": "SSC CGL 2024 Pre",
    "page": 36,
    "question": "If (7 sin θ + 4 cos θ) / (9 sin θ - 2 cos θ) = 5/4, then find the value of (tan²θ + 5) / (tan²θ - 5).",
    "options": [
      "2121/769",
      "-2121/769",
      "769/2121",
      "-769/2121"
    ],
    "answer": "-2121/769",
    "solution": "Step 1: Cross-multiply the given equation:\n4(7 sin θ + 4 cos θ) = 5(9 sin θ - 2 cos θ)\n28 sin θ + 16 cos θ = 45 sin θ - 10 cos θ\n16 cos θ + 10 cos θ = 45 sin θ - 28 sin θ\n26 cos θ = 17 sin θ ⟹ tan θ = sin θ / cos θ = 26/17.\n\nStep 2: Compute tan²θ:\ntan²θ = (26/17)² = 676 / 289.\n\nStep 3: Evaluate (tan²θ + 5) / (tan²θ - 5):\n= [(676/289) + 5] / [(676/289) - 5]\n= [676 + 5(289)] / [676 - 5(289)]\n= (676 + 1445) / (676 - 1445)\n= 2121 / (-769) = -2121/769.",
    "trick": "Cross multiply: 26 cos θ = 17 sin θ ⟹ tan θ = 26/17 ⟹ tan²θ = 676/289. Then (676 + 1445)/(676 - 1445) = -2121/769."
  },
  {
    "id": "trig_15",
    "type": "Type 1: Basic Ratios & Triplets",
    "exam": "SSC CGL 2024 Pre",
    "page": 37,
    "question": "If sin 31° = a, then the value of cot 59° is:",
    "options": [
      "a / √(1 - a²)",
      "√(1 - a²) / a",
      "1/a",
      "a / √(1 + a²)"
    ],
    "answer": "a / √(1 - a²)",
    "solution": "Complementary angle identity: cot 59° = cot(90° - 31°) = tan 31°.\n\nIn right triangle with angle 31°:\n• sin 31° = a = a/1 ⟹ Perpendicular = a, Hypotenuse = 1\n• Base = √(1² - a²) = √(1 - a²)\n• tan 31° = Perpendicular / Base = a / √(1 - a²).\n\nTherefore, cot 59° = a / √(1 - a²).",
    "trick": "cot 59° = tan 31°. For sin 31° = a/1, P = a, B = √(1 - a²). Thus tan 31° = a / √(1 - a²)."
  },
  {
    "id": "trig_16",
    "type": "Type 1: Basic Ratios & Triplets",
    "exam": "SSC CGL 2024 Pre",
    "page": 38,
    "question": "Evaluate: [4 cos(90° - θ) sin³(90° - θ) - 4 sin(90° + θ) cos³(90° - θ)] / cos((180° + 8θ)/2).",
    "options": [
      "-1",
      "1",
      "2",
      "0"
    ],
    "answer": "-1",
    "solution": "Step 1: Simplify numerator with allied angles:\n• cos(90° - θ) = sin θ\n• sin(90° - θ) = cos θ\n• sin(90° + θ) = cos θ\n\nNumerator = 4 sin θ cos³θ - 4 cos θ sin³θ = 4 sin θ cos θ (cos²θ - sin²θ)\n= 2(2 sin θ cos θ)(cos 2θ) = 2 sin 2θ cos 2θ = sin 4θ.\n\nStep 2: Simplify denominator:\ncos((180° + 8θ)/2) = cos(90° + 4θ) = -sin 4θ.\n\nStep 3: Calculate ratio:\nsin 4θ / (-sin 4θ) = -1.",
    "trick": "Topper shortcut: Put θ = 15°. Numerator = sin 4(15°) = sin 60° = √3/2. Denominator = cos(90° + 60°) = -sin 60° = -√3/2. Ratio = -1."
  },
  {
    "id": "trig_17",
    "type": "Type 1: Basic Ratios & Triplets",
    "exam": "SSC CGL 2022 Pre",
    "page": 39,
    "question": "If sin A = 4/5 and sin B = 15/17, where A and B are acute angles, what is the value of sin(A - B)?",
    "options": [
      "-13/85",
      "13/85",
      "-32/85",
      "82/85"
    ],
    "answer": "-13/85",
    "solution": "Compound angle formula: sin(A - B) = sin A cos B - cos A sin B.\n\nFrom the Pythagorean triplets:\n1. sin A = 4/5 ⟹ triplet (3, 4, 5) ⟹ cos A = 3/5.\n2. sin B = 15/17 ⟹ triplet (8, 15, 17) ⟹ cos B = 8/17.\n\nSubstitute:\nsin(A - B) = (4/5)(8/17) - (3/5)(15/17) = (32 - 45) / 85 = -13/85.",
    "trick": "Compound sine: sin A cos B - cos A sin B = (4/5)(8/17) - (3/5)(15/17) = (32 - 45)/85 = -13/85."
  },
  {
    "id": "trig_18",
    "type": "Type 1: Basic Ratios & Triplets",
    "exam": "SSC CGL 2022 Pre",
    "page": 40,
    "question": "What is the value of tan(θ - 14π)?",
    "options": [
      "tan θ",
      "-cot θ",
      "cot θ",
      "-tan θ"
    ],
    "answer": "tan θ",
    "solution": "Periodicity of tangent:\n• Tangent has a fundamental period of π: tan(θ + kπ) = tan θ for any integer k.\n• For k = -14 (an even integer multiple of π):\ntan(θ - 14π) = tan(θ - 7 × 2π) = tan θ.\n\nAlternatively, tan(θ - 14π) = -tan(14π - θ) = -(-tan θ) = tan θ.",
    "trick": "Tangents repeat every π radians! Dropping any integer multiple of π leaves tan θ unchanged. Ans = tan θ."
  },
  {
    "id": "trig_19",
    "type": "Type 1: Basic Ratios & Triplets",
    "exam": "SSC CGL 2022 Pre",
    "page": 41,
    "question": "What is the exact value of cos 15°?",
    "options": [
      "(√6 + √2)/4",
      "(√6 - √2)/4",
      "(2 + √3)/4",
      "(√3 - 1)/2"
    ],
    "answer": "(√6 + √2)/4",
    "solution": "Using compound angle expansion cos(A - B) with A = 45°, B = 30°:\ncos 15° = cos(45° - 30°) = cos 45° cos 30° + sin 45° sin 30°\n= (1/√2)(√3/2) + (1/√2)(1/2) = (√3 + 1) / (2√2).\n\nRationalize denominator by multiplying numerator and denominator by √2:\ncos 15° = (√3 + 1)√2 / (2√2 × √2) = (√6 + √2) / 4.",
    "trick": "Golden Formula: cos 15° = sin 75° = (√6 + √2)/4. sin 15° = cos 75° = (√6 - √2)/4. Memorize for 1-second recall!"
  },
  {
    "id": "trig_20",
    "type": "Type 1: Basic Ratios & Triplets",
    "exam": "SSC CGL 2023 Pre",
    "page": 42,
    "question": "Evaluate: cos(36° + A) cos(36° - A) + cos(54° + A) cos(54° - A).",
    "options": [
      "sin 2A",
      "cos A",
      "sin A",
      "cos 2A"
    ],
    "answer": "cos 2A",
    "solution": "Complementary angle conversion:\n• 54° + A = 90° - (36° - A) ⟹ cos(54° + A) = sin(36° - A)\n• 54° - A = 90° - (36° + A) ⟹ cos(54° - A) = sin(36° + A).\n\nSubstitute these into the expression:\n= cos(36° + A) cos(36° - A) + sin(36° + A) sin(36° - A).\n\nThis matches the standard identity cos(X - Y) = cos X cos Y + sin X sin Y with X = 36° + A and Y = 36° - A:\n= cos[(36° + A) - (36° - A)] = cos(2A).",
    "trick": "Topper Trick: Put A = 0°! Expression = cos² 36° + cos² 54° = cos² 36° + sin² 36° = 1. At A = 0°, cos 2(0°) = cos 0° = 1. Matches option cos 2A!"
  },
  {
    "id": "trig_21",
    "type": "Type 1: Basic Ratios & Triplets",
    "exam": "SSC CGL 2024 Pre",
    "page": 43,
    "question": "If p cos A = 2q sin A and 2p cosec A - q sec A = 3, then the value of p² + 4q² is:",
    "options": [
      "2",
      "4",
      "1",
      "3"
    ],
    "answer": "4",
    "solution": "From equation 1: p cos A = 2q sin A ⟹ tan A = sin A / cos A = p / (2q).\n\nIn right triangle with angle A:\n• Perpendicular = p, Base = 2q\n• Hypotenuse = √(p² + (2q)²) = √(p² + 4q²).\n• cosec A = √(p² + 4q²) / p\n• sec A = √(p² + 4q²) / (2q).\n\nSubstitute these into equation 2:\n2p cosec A - q sec A = 3\n2p [√(p² + 4q²) / p] - q [√(p² + 4q²) / (2q)] = 3\n2√(p² + 4q²) - (1/2)√(p² + 4q²) = 3\n(3/2)√(p² + 4q²) = 3 ⟹ √(p² + 4q²) = 2.\n\nSquare both sides:\np² + 4q² = 4.",
    "trick": "2√(p² + 4q²) - 0.5√(p² + 4q²) = 3 ⟹ 1.5√(p² + 4q²) = 3 ⟹ √(p² + 4q²) = 2 ⟹ p² + 4q² = 4."
  },
  {
    "id": "trig_22",
    "type": "Type 1: Basic Ratios & Triplets",
    "exam": "SSC CGL 2024 Pre",
    "page": 44,
    "question": "Simplify: (1 + sin θ - cos θ) / (1 + sin θ + cos θ).",
    "options": [
      "cos(θ/2)",
      "sin(θ/2)",
      "cot(θ/2)",
      "tan(θ/2)"
    ],
    "answer": "tan(θ/2)",
    "solution": "Rewrite the expression grouping the 1 and cos θ:\nNumerator = (1 - cos θ) + sin θ = 2 sin²(θ/2) + 2 sin(θ/2) cos(θ/2) = 2 sin(θ/2) [sin(θ/2) + cos(θ/2)].\nDenominator = (1 + cos θ) + sin θ = 2 cos²(θ/2) + 2 sin(θ/2) cos(θ/2) = 2 cos(θ/2) [cos(θ/2) + sin(θ/2)].\n\nDivide numerator by denominator:\n= [2 sin(θ/2) (sin(θ/2) + cos(θ/2))] / [2 cos(θ/2) (cos(θ/2) + sin(θ/2))] = sin(θ/2) / cos(θ/2) = tan(θ/2).",
    "trick": "Maestro's Value Putting: Put θ = 60°. Numerator = 1 + √3/2 - 1/2 = (1 + √3)/2. Denominator = 1 + √3/2 + 1/2 = √3(1 + √3)/2. Ratio = 1/√3 = tan 30° = tan(θ/2)!"
  },
  {
    "id": "trig_23",
    "type": "Type 1: Basic Ratios & Triplets",
    "exam": "SSC CGL 2024 Pre",
    "page": 45,
    "question": "If 3 sin A + 4 cos A = 5, what is the value of tan A?",
    "options": [
      "3/4",
      "3/5",
      "5/4",
      "4/5"
    ],
    "answer": "3/4",
    "solution": "Formula: In linear form a sin A + b cos A = c, if a² + b² = c² (here 3² + 4² = 9 + 16 = 25 = 5²), the coefficients form a right triangle:\n• sin A = a/c = 3/5\n• cos A = b/c = 4/5\n• tan A = sin A / cos A = (3/5) / (4/5) = 3/4.",
    "trick": "Whenever a sin A + b cos A = c with a² + b² = c², tan A = a/b directly! Here tan A = 3/4 in 1 second."
  },
  {
    "id": "trig_24",
    "type": "Type 1: Basic Ratios & Triplets",
    "exam": "SSC CGL 2019 Pre",
    "page": 46,
    "question": "If (sec θ - tan θ) / (sec θ + tan θ) = 3/5, then the value of (cosec θ + cot θ) / (cosec θ - cot θ) is:",
    "options": [
      "31 + 8√15",
      "33 + 4√15",
      "27 + √15",
      "24 + √15"
    ],
    "answer": "31 + 8√15",
    "solution": "Apply Componendo & Dividendo to the given equation:\n[(sec θ - tan θ) + (sec θ + tan θ)] / [(sec θ + tan θ) - (sec θ - tan θ)] = (3 + 5) / (5 - 3)\n2 sec θ / (2 tan θ) = 8 / 2 = 4 ⟹ sec θ / tan θ = 4\n(1/cos θ) / (sin θ/cos θ) = 1/sin θ = cosec θ = 4.\n\nFrom cosec θ = 4/1:\n• Hypotenuse = 4, Perpendicular = 1\n• Base = √(4² - 1²) = √15\n• cot θ = √15 / 1 = √15.\n\nNow calculate (cosec θ + cot θ) / (cosec θ - cot θ):\n= (4 + √15) / (4 - √15).\nRationalize denominator by multiplying numerator and denominator by (4 + √15):\n= (4 + √15)² / (16 - 15) = 16 + 15 + 8√15 = 31 + 8√15.",
    "trick": "C&D gives cosec θ = 4 ⟹ cot θ = √15. Required expression = (4 + √15)/(4 - √15) = (4 + √15)² = 31 + 8√15."
  },
  {
    "id": "trig_25",
    "type": "Type 1: Basic Ratios & Triplets",
    "exam": "SSC CGL Mains 2022",
    "page": 47,
    "question": "Evaluate: sin 25° sin 65° - cos 25° cos 65°.",
    "options": [
      "4",
      "1",
      "0",
      "40"
    ],
    "answer": "0",
    "solution": "Factor out -1:\nsin 25° sin 65° - cos 25° cos 65° = -(cos 25° cos 65° - sin 25° sin 65°).\n\nUse compound angle formula cos(A + B) = cos A cos B - sin A sin B with A = 25° and B = 65°:\n= -cos(25° + 65°) = -cos(90°).\n\nSince cos 90° = 0:\n= -0 = 0.",
    "trick": "cos(A + B) formula reversed: -(cos 25° cos 65° - sin 25° sin 65°) = -cos 90° = 0."
  },
  {
    "id": "trig_26",
    "type": "Type 1: Basic Ratios & Triplets",
    "exam": "SSC CGL Mains 2020",
    "page": 48,
    "question": "Evaluate: [3(cot² 47° - sec² 43°) - 2(tan² 23° - cosec² 67°)] / [cosec²(68° + θ) - tan(θ + 61°) - tan²(22° - θ) + cot(29° - θ)].",
    "options": [
      "1",
      "0",
      "5",
      "-1"
    ],
    "answer": "-1",
    "solution": "Step 1: Simplify Numerator using complementary angles:\n• cot 47° = tan 43° ⟹ cot² 47° - sec² 43° = tan² 43° - sec² 43° = -1.\n• cosec 67° = sec 23° ⟹ tan² 23° - cosec² 67° = tan² 23° - sec² 23° = -1.\nNumerator = 3(-1) - 2(-1) = -3 + 2 = -1.\n\nStep 2: Simplify Denominator:\n• (68° + θ) + (22° - θ) = 90° ⟹ tan(22° - θ) = cot(68° + θ).\n  Thus, cosec²(68° + θ) - tan²(22° - θ) = cosec²(68° + θ) - cot²(68° + θ) = 1.\n• (θ + 61°) + (29° - θ) = 90° ⟹ cot(29° - θ) = tan(θ + 61°).\n  Thus, -tan(θ + 61°) + cot(29° - θ) = 0.\nDenominator = 1 + 0 = 1.\n\nStep 3: Final Value = -1 / 1 = -1.",
    "trick": "Numerator: 3(-1) - 2(-1) = -1. Denominator: Put θ = 0° ⟹ cosec² 68° - tan 61° - tan² 22° + cot 29° = (cosec² 68° - cot² 68°) + 0 = 1. Ans = -1/1 = -1."
  },
  {
    "id": "trig_27",
    "type": "Type 1: Basic Ratios & Triplets",
    "exam": "SSC CGL Mains 2019",
    "page": 49,
    "question": "If cosec 39° = x, then the value of 1/cosec² 51° + sin² 39° + tan² 51° - 1/(sin² 51° sec² 39°) is:",
    "options": [
      "x² - 1",
      "√(x² - 1)",
      "1 / (x² - 1)",
      "x² + 1"
    ],
    "answer": "x² - 1",
    "solution": "Convert all angles using complementary pairs (39° + 51° = 90°):\n1. 1 / cosec² 51° = sin² 51° = cos² 39°.\n2. sin² 39° remains as sin² 39°.\n   So the first two terms combine: cos² 39° + sin² 39° = 1.\n3. tan² 51° = cot² 39°.\n4. For the last term: sin 51° = cos 39° ⟹ sin² 51° sec² 39° = cos² 39° sec² 39° = 1. So 1 / 1 = 1.\n\nSubstitute back into the expression:\n= (1) + cot² 39° - 1 = cot² 39°.\n\nFrom trigonometric identity cot²θ = cosec²θ - 1:\ncot² 39° = cosec² 39° - 1 = x² - 1.",
    "trick": "Complementary angle reduction: (sin² 51° + sin² 39°) + tan² 51° - 1 = 1 + cot² 39° - 1 = cot² 39° = cosec² 39° - 1 = x² - 1."
  },
  {
    "id": "trig_28",
    "type": "Type 1: Basic Ratios & Triplets",
    "exam": "SSC CGL Mains 2018",
    "page": 50,
    "question": "If sec θ + tan θ = p, (p > 1), then (cosec θ + 1) / (cosec θ - 1) is equal to:",
    "options": [
      "(p - 1)/(p + 1)",
      "p²",
      "2p²",
      "(p + 1)/(p - 1)"
    ],
    "answer": "p²",
    "solution": "Golden Formula: If sec θ + tan θ = p, then:\n• sin θ = (p² - 1) / (p² + 1)\n• cosec θ = 1 / sin θ = (p² + 1) / (p² - 1).\n\nNow evaluate (cosec θ + 1) / (cosec θ - 1):\n• cosec θ + 1 = [(p² + 1) / (p² - 1)] + 1 = (p² + 1 + p² - 1) / (p² - 1) = 2p² / (p² - 1).\n• cosec θ - 1 = [(p² + 1) / (p² - 1)] - 1 = (p² + 1 - p² + 1) / (p² - 1) = 2 / (p² - 1).\n\nDivide:\n[2p² / (p² - 1)] / [2 / (p² - 1)] = 2p² / 2 = p².",
    "trick": "Topper Value Putting: Put θ = 30° ⟹ sec 30° + tan 30° = 2/√3 + 1/√3 = √3 = p ⟹ p² = 3. Expression = (cosec 30° + 1)/(cosec 30° - 1) = (2 + 1)/(2 - 1) = 3 = p²!"
  },
  {
    "id": "trig_29",
    "type": "Type 1: Basic Ratios & Triplets",
    "exam": "SSC CGL Mains 2018",
    "page": 51,
    "question": "If (1 + sin θ) / (1 - sin θ) = p² / q², then sec θ is equal to:",
    "options": [
      "(1/2)(p/q + q/p)",
      "p/q + q/p",
      "2pq / (p² + q²)",
      "(p² - q²) / 2pq"
    ],
    "answer": "(1/2)(p/q + q/p)",
    "solution": "Take square root on both sides:\n√[(1 + sin θ) / (1 - sin θ)] = p / q.\n\nMultiply inside square root by (1 + sin θ) / (1 + sin θ):\n√[(1 + sin θ)² / (1 - sin²θ)] = √[(1 + sin θ)² / cos²θ] = (1 + sin θ) / cos θ = p / q\nsec θ + tan θ = p / q  --- (Equation 1)\n\nFrom conjugate identity (sec θ - tan θ) = 1 / (sec θ + tan θ):\nsec θ - tan θ = q / p  --- (Equation 2)\n\nAdd Equation 1 and Equation 2:\n2 sec θ = p/q + q/p ⟹ sec θ = (1/2)(p/q + q/p).",
    "trick": "Square root gives sec θ + tan θ = p/q and sec θ - tan θ = q/p. Add both equations: 2 sec θ = p/q + q/p ⟹ sec θ = (1/2)(p/q + q/p)."
  },
  {
    "id": "trig_30",
    "type": "Type 1: Basic Ratios & Triplets",
    "exam": "SSC CGL Mains 2019",
    "page": 52,
    "question": "In △PQR, ∠Q = 90°. If cot R = 1/3, then what is the value of [sec P (cos R + sin P)] / [cosec R (sin R - cosec P)]?",
    "options": [
      "-2/7",
      "2/7",
      "-3/7",
      "3/7"
    ],
    "answer": "-2/7",
    "solution": "In right triangle PQR with ∠Q = 90°, angles P and R are complementary (P + R = 90°):\n• sec P = cosec R\n• sin P = cos R\n• cosec P = sec R.\n\nSubstitute these relations into the expression:\nNumerator = sec P (cos R + sin P) = cosec R (cos R + cos R) = 2 cosec R cos R.\nDenominator = cosec R (sin R - cosec P) = cosec R (sin R - sec R).\n\nDivide numerator by denominator (cosec R cancels):\n= 2 cos R / (sin R - sec R).\n\nFrom cot R = 1/3 = Base / Perpendicular:\n• Base = 1, Perpendicular = 3, Hypotenuse = √(1² + 3²) = √10.\n• cos R = 1/√10, sin R = 3/√10, sec R = √10.\n\nSubstitute:\nNumerator = 2(1/√10) = 2/√10.\nDenominator = 3/√10 - √10 = (3 - 10) / √10 = -7/√10.\n\nFinal value = (2/√10) / (-7/√10) = -2/7.",
    "trick": "Complementary angles: sec P = cosec R and sin P = cos R. Expression reduces to 2 cos R / (sin R - sec R). Plug in cos R = 1/√10, sin R = 3/√10, sec R = √10 ⟹ (2/√10)/(-7/√10) = -2/7."
  },
  {
    "id": "trig_31",
    "type": "Type 1: Basic Ratios & Triplets",
    "exam": "SSC CHSL 2022 Pre",
    "page": 53,
    "question": "If cosec θ + cot θ = s, then what is the value of cos θ?",
    "options": [
      "(s² + 1)/(s² - 1)",
      "(s² - 1)/2s",
      "2s/(s² + 1)",
      "(s² - 1)/(s² + 1)"
    ],
    "answer": "(s² - 1)/(s² + 1)",
    "solution": "Conjugate identity: cosec²θ - cot²θ = 1 ⟹ (cosec θ - cot θ) = 1 / (cosec θ + cot θ) = 1/s.\n\nAdd both equations:\n2 cosec θ = s + 1/s = (s² + 1)/s ⟹ sin θ = 2s / (s² + 1).\n\nSubtract both equations:\n2 cot θ = s - 1/s = (s² - 1)/s ⟹ cot θ = (s² - 1)/(2s).\n\nNow calculate cos θ:\ncos θ = cot θ × sin θ = [(s² - 1)/(2s)] × [2s/(s² + 1)] = (s² - 1) / (s² + 1).",
    "trick": "Golden Formula: When cosec θ + cot θ = s ⟹ cos θ = (s² - 1)/(s² + 1) and sin θ = 2s/(s² + 1). Direct 2-second formula!"
  },
  {
    "id": "trig_32",
    "type": "Type 1: Basic Ratios & Triplets",
    "exam": "SSC CHSL 2020 Pre",
    "page": 54,
    "question": "If A lies between 45° and 540°, and sin A = 0.5, what is the value of A/3 in degrees?",
    "options": [
      "170°",
      "175°",
      "165°",
      "160°"
    ],
    "answer": "170°",
    "solution": "Given sin A = 0.5 = 1/2 with 45° < A < 540°.\nPossible values of A where sin A = 1/2:\n• Cycle 1 (0° to 360°): A = 150° (since 30° is outside range > 45°). Here A/3 = 50° (not in options).\n• Cycle 2 (360° to 720°): A = 360° + 30° = 390° ⟹ A/3 = 130° (not in options).\n• Second quadrant of Cycle 2: A = 540° - 30° = 510° (within 45° < 510° < 540°).\n\nFor A = 510°:\nA/3 = 510° / 3 = 170°.",
    "trick": "Options are ~160°-175°, so A is between 480° and 525°. sin(510°) = sin(540° - 30°) = sin 30° = 0.5. Thus A = 510° ⟹ A/3 = 170°."
  },
  {
    "id": "trig_33",
    "type": "Type 2: Values Putting",
    "exam": "SSC CGL 2020 Pre",
    "page": 56,
    "question": "What is the value of: sin⁴ 30° + cos⁴ 30° - sin 25° cos 65° - sin 65° cos 25°?",
    "options": [
      "-3/8",
      "5/8",
      "0",
      "3/8"
    ],
    "answer": "-3/8",
    "solution": "Step 1: Simplify the complementary part:\nsin 25° cos 65° + sin 65° cos 25° = sin(25° + 65°) = sin 90° = 1.\n\nStep 2: Evaluate powers of standard angles:\n• sin 30° = 1/2 ⟹ sin⁴ 30° = (1/2)⁴ = 1/16.\n• cos 30° = √3/2 ⟹ cos⁴ 30° = (√3/2)⁴ = 9/16.\n• sin⁴ 30° + cos⁴ 30° = 1/16 + 9/16 = 10/16 = 5/8.\n\nStep 3: Combine both parts:\n5/8 - 1 = -3/8.",
    "trick": "First part = (1/2)⁴ + (√3/2)⁴ = 10/16 = 5/8. Second part = sin(25° + 65°) = 1. Ans = 5/8 - 1 = -3/8."
  },
  {
    "id": "trig_34",
    "type": "Type 2: Values Putting",
    "exam": "SSC CHSL 2020 Pre",
    "page": 57,
    "question": "The value of (3 tan² 60° + sec² 30° - sin² 45°) / [(cos 15° + sin 75°)(sec 15° + cosec 75°)] is:",
    "options": [
      "59/24",
      "13/12",
      "59/12",
      "25/12"
    ],
    "answer": "59/24",
    "solution": "Step 1: Evaluate Numerator:\n• tan 60° = √3 ⟹ tan² 60° = 3 ⟹ 3 tan² 60° = 9.\n• sec 30° = 2/√3 ⟹ sec² 30° = 4/3.\n• sin 45° = 1/√2 ⟹ sin² 45° = 1/2.\nNumerator = 9 + 4/3 - 1/2 = (54 + 8 - 3) / 6 = 59/6.\n\nStep 2: Evaluate Denominator using complementary angles:\n• sin 75° = cos 15° ⟹ cos 15° + sin 75° = 2 cos 15°.\n• cosec 75° = sec 15° ⟹ sec 15° + cosec 75° = 2 sec 15°.\nDenominator = (2 cos 15°)(2 sec 15°) = 4 (cos 15° sec 15°) = 4 × 1 = 4.\n\nStep 3: Calculate full ratio:\n(59/6) / 4 = 59 / 24.",
    "trick": "Denominator = 2 cos 15° × 2 sec 15° = 4. Numerator = 9 + 4/3 - 1/2 = 59/6. Total = (59/6)/4 = 59/24 in 10 seconds!"
  },
  {
    "id": "trig_35",
    "type": "Type 2: Values Putting",
    "exam": "SSC CHSL 2024 Pre",
    "page": 58,
    "question": "Evaluate: [(cosec 31° - sec 59°) / (sin 18° + cos 72°)] + (tan 26° / cot 64°) - [(tan 30° + tan 15°) / (1 - tan 30° tan 15°)].",
    "options": [
      "0",
      "1",
      "-1",
      "2"
    ],
    "answer": "0",
    "solution": "Step 1: Term 1: cosec 31° - sec 59° = sec 59° - sec 59° = 0. So Term 1 = 0.\n\nStep 2: Term 2: tan 26° / cot 64° = tan 26° / tan 26° = 1.\n\nStep 3: Term 3: (tan 30° + tan 15°) / (1 - tan 30° tan 15°) = tan(30° + 15°) = tan 45° = 1.\n\nCombine all terms:\n0 + 1 - 1 = 0.",
    "trick": "Term 1 is 0 (cosec 31° = sec 59°). Term 2 is 1. Term 3 is tan(30° + 15°) = tan 45° = 1. Ans = 0 + 1 - 1 = 0."
  },
  {
    "id": "trig_36",
    "type": "Type 3: Complementary Angles",
    "exam": "SSC CGL 2023 Pre",
    "page": 60,
    "question": "If sin(5x - 25°) = cos(5y + 25°), where 5x - 25° and 5y + 25° are acute angles, then the value of (x + y) is:",
    "options": [
      "50°",
      "40°",
      "18°",
      "16°"
    ],
    "answer": "18°",
    "solution": "Complementary angle theorem: If sin A = cos B for acute angles, then A + B = 90°.\n\nHere A = 5x - 25° and B = 5y + 25°:\n(5x - 25°) + (5y + 25°) = 90°\n5x + 5y = 90°\n5(x + y) = 90°\nx + y = 90° / 5 = 18°.",
    "trick": "sin A = cos B ⟹ A + B = 90°. (5x - 25°) + (5y + 25°) = 90° ⟹ 5(x + y) = 90° ⟹ x + y = 18°."
  },
  {
    "id": "trig_37",
    "type": "Type 3: Complementary Angles",
    "exam": "SSC CGL 2022 Pre",
    "page": 61,
    "question": "Find the value of tan 3θ if sec 3θ = cosec(4θ - 15°):",
    "options": [
      "1",
      "1/√3",
      "-1",
      "√3"
    ],
    "answer": "1",
    "solution": "Complementary angle theorem: If sec A = cosec B, then A + B = 90°.\n\nHere A = 3θ and B = 4θ - 15°:\n3θ + (4θ - 15°) = 90°\n7θ - 15° = 90°\n7θ = 105° ⟹ θ = 15°.\n\nNow find tan 3θ:\ntan(3 × 15°) = tan 45° = 1.",
    "trick": "sec A = cosec B ⟹ 3θ + 4θ - 15° = 90° ⟹ 7θ = 105° ⟹ θ = 15°. tan 3θ = tan 45° = 1."
  },
  {
    "id": "trig_38",
    "type": "Type 3: Complementary Angles",
    "exam": "SSC CGL Mains 2018",
    "page": 62,
    "question": "What is the value of: [sin² 64° + cos 64° sin 26°] + 2 cos 43° cosec 47°?",
    "options": [
      "4",
      "1/2",
      "2",
      "3"
    ],
    "answer": "3",
    "solution": "Part 1: sin² 64° + cos 64° sin 26°:\n• Since 26° = 90° - 64°, sin 26° = cos 64°.\n• So cos 64° sin 26° = cos² 64°.\n• Thus sin² 64° + cos² 64° = 1.\n\nPart 2: 2 cos 43° cosec 47°:\n• cosec 47° = sec 43° = 1 / cos 43°.\n• 2 cos 43° × (1 / cos 43°) = 2 × 1 = 2.\n\nCombine both parts:\n1 + 2 = 3.",
    "trick": "sin² 64° + cos² 64° = 1. And 2 cos 43° sec 43° = 2. Ans = 1 + 2 = 3."
  },
  {
    "id": "trig_39",
    "type": "Type 3: Complementary Angles",
    "exam": "SSC CGL Mains 2021",
    "page": 63,
    "question": "What is the value of: (cos 50° / sin 40°) + (3 cosec 80° / sec 10°) - 2 cos 50° cosec 40°?",
    "options": [
      "3",
      "2",
      "5",
      "4"
    ],
    "answer": "2",
    "solution": "Apply complementary angle relations (angles sum to 90°):\n1. cos 50° / sin 40° = cos 50° / cos 50° = 1.\n2. 3 cosec 80° / sec 10° = 3 sec 10° / sec 10° = 3 × 1 = 3.\n3. cosec 40° = sec 50° ⟹ 2 cos 50° cosec 40° = 2 cos 50° sec 50° = 2 × 1 = 2.\n\nCombine all terms:\n1 + 3 - 2 = 2.",
    "trick": "Each pair of complementary angles yields 1: 1 + 3(1) - 2(1) = 1 + 3 - 2 = 2."
  },
  {
    "id": "trig_40",
    "type": "Type 3: Complementary Angles",
    "exam": "SSC CPO 2019 Pre",
    "page": 64,
    "question": "If tan(11θ) = cot(7θ), then what is the value of sin²(6θ) + sec²(9θ) + cosec²(12θ)?",
    "options": [
      "35/12",
      "23/12",
      "31/12",
      "43/12"
    ],
    "answer": "43/12",
    "solution": "Complementary angle theorem: If tan A = cot B, then A + B = 90°.\n11θ + 7θ = 90° ⟹ 18θ = 90° ⟹ θ = 5°.\n\nNow calculate individual angle arguments:\n• 6θ = 6 × 5° = 30° ⟹ sin²(30°) = (1/2)² = 1/4.\n• 9θ = 9 × 5° = 45° ⟹ sec²(45°) = (√2)² = 2.\n• 12θ = 12 × 5° = 60° ⟹ cosec²(60°) = (2/√3)² = 4/3.\n\nSum of terms = 1/4 + 2 + 4/3 = (3 + 24 + 16) / 12 = 43/12.",
    "trick": "18θ = 90° ⟹ θ = 5°. Angles become standard 30°, 45°, 60°! sin² 30° + sec² 45° + cosec² 60° = 1/4 + 2 + 4/3 = 43/12."
  },
  {
    "id": "trig_41",
    "type": "Type 4: Trigonometric Identities",
    "exam": "SSC CGL 2024 Pre",
    "page": 66,
    "question": "If sec θ + tan θ = x, then find sin θ in terms of x:",
    "options": [
      "(x² + 1)/(x² - 1)",
      "(x² - 1)/(x² + 1)",
      "(x² - 1)/2x",
      "2x/(x² + 1)"
    ],
    "answer": "(x² - 1)/(x² + 1)",
    "solution": "From fundamental identity sec²θ - tan²θ = 1:\nsec θ - tan θ = 1/x.\n\nAdding gives: 2 sec θ = x + 1/x = (x² + 1)/x ⟹ sec θ = (x² + 1)/(2x).\nSubtracting gives: 2 tan θ = x - 1/x = (x² - 1)/x ⟹ tan θ = (x² - 1)/(2x).\n\nNow calculate sin θ:\nsin θ = tan θ / sec θ = [(x² - 1)/(2x)] / [(x² + 1)/(2x)] = (x² - 1) / (x² + 1).",
    "trick": "Golden Formula: sec θ + tan θ = x ⟹ sin θ = (x² - 1)/(x² + 1) directly. Put x = 2: sin θ = 3/5."
  },
  {
    "id": "trig_42",
    "type": "Type 4: Trigonometric Identities",
    "exam": "SSC CPO 2023 Pre",
    "page": 67,
    "question": "What is the value of (tan θ + sec θ + 1)(cot θ - cosec θ + 1)?",
    "options": [
      "2",
      "1",
      "0",
      "-1"
    ],
    "answer": "2",
    "solution": "Maestro's Value Putting Method:\nPut θ = 45°:\n• tan 45° = 1, sec 45° = √2\n• cot 45° = 1, cosec 45° = √2.\n\nSubstitute into the expression:\n= (1 + √2 + 1)(1 - √2 + 1)\n= (2 + √2)(2 - √2)\n= 2² - (√2)² = 4 - 2 = 2.",
    "trick": "Put θ = 45°: (2 + √2)(2 - √2) = 4 - 2 = 2. Solved in 2 seconds!"
  },
  {
    "id": "trig_43",
    "type": "Type 4: Trigonometric Identities",
    "exam": "SSC CGL 2024 Pre",
    "page": 68,
    "question": "If sin A + cos A = √3, then find the value of tan A + cot A + 2 sin A cos A:",
    "options": [
      "6",
      "2",
      "1",
      "3"
    ],
    "answer": "3",
    "solution": "Step 1: Square both sides of given equation:\n(sin A + cos A)² = (√3)²\nsin² A + cos² A + 2 sin A cos A = 3\n1 + 2 sin A cos A = 3 ⟹ 2 sin A cos A = 2 ⟹ sin A cos A = 1.\n\nStep 2: Simplify tan A + cot A:\ntan A + cot A = (sin² A + cos² A) / (sin A cos A) = 1 / (sin A cos A) = 1 / 1 = 1.\n\nStep 3: Combine terms:\ntan A + cot A + 2 sin A cos A = 1 + 2 = 3.",
    "trick": "Square both sides: 1 + 2 sin A cos A = 3 ⟹ 2 sin A cos A = 2 and sin A cos A = 1. tan A + cot A = 1/(sin A cos A) = 1. Ans = 1 + 2 = 3."
  },
  {
    "id": "trig_44",
    "type": "Type 4: Trigonometric Identities",
    "exam": "SSC CGL 2024 Pre",
    "page": 69,
    "question": "Find the value of: tan 72° - tan 27° - tan 72° tan 27°.",
    "options": [
      "-1",
      "1",
      "-2",
      "0"
    ],
    "answer": "1",
    "solution": "Notice that 72° - 27° = 45°.\nUsing compound angle identity for tan(A - B):\ntan(72° - 27°) = (tan 72° - tan 27°) / (1 + tan 72° tan 27°).\n\nSince tan 45° = 1:\n1 = (tan 72° - tan 27°) / (1 + tan 72° tan 27°)\n1 + tan 72° tan 27° = tan 72° - tan 27°.\n\nRearranging gives:\ntan 72° - tan 27° - tan 72° tan 27° = 1.",
    "trick": "Compound angle property: When A - B = 45°, tan A - tan B - tan A tan B = 1. Always equals 1!"
  },
  {
    "id": "trig_45",
    "type": "Type 4: Trigonometric Identities",
    "exam": "SSC CGL 2024 Pre",
    "page": 70,
    "question": "If cot⁴θ - cot²θ = 1, then the value of cos⁴θ + cos²θ is:",
    "options": [
      "2",
      "1/2",
      "1",
      "3/2"
    ],
    "answer": "1",
    "solution": "Given cot⁴θ - cot²θ = 1 ⟹ cot⁴θ = 1 + cot²θ = cosec²θ.\n\nConvert into terms of sine and cosine:\ncos⁴θ / sin⁴θ = 1 / sin²θ\ncos⁴θ = sin²θ.\n\nSubstitute cos⁴θ = sin²θ into the required expression:\ncos⁴θ + cos²θ = sin²θ + cos²θ = 1.",
    "trick": "cot⁴θ = cosec²θ ⟹ cos⁴θ = sin²θ. Required cos⁴θ + cos²θ = sin²θ + cos²θ = 1. Direct result!"
  },
  {
    "id": "trig_46",
    "type": "Type 4: Trigonometric Identities",
    "exam": "SSC CGL 2024 Pre",
    "page": 71,
    "question": "If p sin A - cos A = 1, then p² - (1 + p²) cos A equals:",
    "options": [
      "1",
      "-1",
      "2",
      "0"
    ],
    "answer": "1",
    "solution": "Rearrange equation: p sin A = 1 + cos A.\nSquare both sides:\np² sin² A = (1 + cos A)²\np² (1 - cos² A) = (1 + cos A)²\np² (1 - cos A)(1 + cos A) = (1 + cos A)².\n\nAssuming cos A ≠ -1 (divide by 1 + cos A):\np² (1 - cos A) = 1 + cos A\np² - p² cos A = 1 + cos A\np² - 1 = cos A + p² cos A = (1 + p²) cos A.\n\nTherefore:\np² - (1 + p²) cos A = p² - (p² - 1) = 1.",
    "trick": "Topper Value Putting: Put p = 1 ⟹ sin A - cos A = 1 ⟹ A = 90°. Then p² - (1 + p²) cos A = 1² - (1 + 1) cos 90° = 1 - 0 = 1 in 3 seconds!"
  },
  {
    "id": "trig_47",
    "type": "Type 4: Trigonometric Identities",
    "exam": "SSC CGL 2023 Pre",
    "page": 72,
    "question": "If cos A + cos² A = 1, then the value of sin⁴ A + sin² A is:",
    "options": [
      "2",
      "cos A",
      "1",
      "sin A"
    ],
    "answer": "1",
    "solution": "From given equation: cos A = 1 - cos² A = sin² A.\n\nSquare both sides:\ncos² A = sin⁴ A.\n\nSubstitute sin⁴ A = cos² A into required expression:\nsin⁴ A + sin² A = cos² A + sin² A = 1.",
    "trick": "cos A = sin² A ⟹ cos² A = sin⁴ A. Expression becomes cos² A + sin² A = 1. Direct standard result!"
  },
  {
    "id": "trig_48",
    "type": "Type 4: Trigonometric Identities",
    "exam": "SSC CGL 2023 Pre",
    "page": 73,
    "question": "If sin θ + cosec θ = √5, then the value of sin³θ + cosec³θ is:",
    "options": [
      "0",
      "3√5",
      "√5",
      "2√5"
    ],
    "answer": "2√5",
    "solution": "This is equivalent to the standard algebraic identity x + 1/x = k ⟹ x³ + 1/x³ = k³ - 3k, since cosec θ = 1 / sin θ.\n\nHere k = √5:\nsin³θ + cosec³θ = (√5)³ - 3(√5) = 5√5 - 3√5 = 2√5.",
    "trick": "Maestro's Power 3 Shortcut: k³ - 3k = (√5)³ - 3√5 = 5√5 - 3√5 = 2√5."
  },
  {
    "id": "trig_49",
    "type": "Type 4: Trigonometric Identities",
    "exam": "SSC CGL 2023 Pre",
    "page": 74,
    "question": "If cos A / (1 - sin A) + cos A / (1 + sin A) = 4, then what will be the value of A? (0° < A < 90°)",
    "options": [
      "90°",
      "45°",
      "60°",
      "30°"
    ],
    "answer": "60°",
    "solution": "Take common denominator:\ncos A [(1 + sin A + 1 - sin A) / (1 - sin² A)] = 4\ncos A [2 / cos² A] = 4\n2 / cos A = 4 ⟹ 2 sec A = 4 ⟹ sec A = 2 ⟹ cos A = 1/2.\n\nSince 0° < A < 90°: A = 60°.",
    "trick": "LHS simplifies to 2 sec A = 4 ⟹ sec A = 2 ⟹ A = 60°."
  },
  {
    "id": "trig_50",
    "type": "Type 4: Trigonometric Identities",
    "exam": "SSC CGL 2023 Pre",
    "page": 75,
    "question": "Find the value of: 12(sin⁴θ + cos⁴θ) + 18(sin⁶θ + cos⁶θ) + 78 sin²θ cos²θ.",
    "options": [
      "30",
      "40",
      "10",
      "20"
    ],
    "answer": "30",
    "solution": "Maestro's Value Putting Method:\nSince the expression contains only powers of sin θ and cos θ with independent real constants, the value is invariant for all θ.\n\nPut θ = 0°:\n• sin 0° = 0, cos 0° = 1.\n\nSubstitute:\n= 12(0⁴ + 1⁴) + 18(0⁶ + 1⁶) + 78(0² × 1²)\n= 12(1) + 18(1) + 0 = 30.",
    "trick": "Maestro's Invariance Principle: Put θ = 0°! 12(1) + 18(1) + 0 = 30. Takes 2 seconds!"
  },
  {
    "id": "trig_51",
    "type": "Type 4: Trigonometric Identities",
    "exam": "SSC CGL 2022 Pre",
    "page": 76,
    "question": "If sec θ + 1/cos θ = 2, find the value of sec⁵⁵θ + cos⁵⁵θ:",
    "options": [
      "2",
      "0",
      "1",
      "55"
    ],
    "answer": "2",
    "solution": "Since 1/cos θ = sec θ, the equation is:\nsec θ + sec θ = 2 ⟹ 2 sec θ = 2 ⟹ sec θ = 1 ⟹ cos θ = 1.\n\nSubstitute into higher powers:\nsec⁵⁵θ + cos⁵⁵θ = 1⁵⁵ + 1⁵⁵ = 1 + 1 = 2.",
    "trick": "sec θ + sec θ = 2 ⟹ sec θ = 1. Therefore 1⁵⁵ + 1⁵⁵ = 2."
  },
  {
    "id": "trig_52",
    "type": "Type 4: Trigonometric Identities",
    "exam": "SSC CGL 2022 Pre",
    "page": 77,
    "question": "If sec x - cos x = 4, then what will be the value of (1 + cos²x) / cos x?",
    "options": [
      "9/2",
      "1/2",
      "2√5",
      "√5"
    ],
    "answer": "2√5",
    "solution": "Rewrite required expression by splitting numerator:\n(1 + cos²x) / cos x = (1 / cos x) + (cos²x / cos x) = sec x + cos x.\n\nLet u = sec x, then cos x = 1/u.\nWe are given u - 1/u = 4, and need u + 1/u.\n\nUsing standard algebra relation:\n(u + 1/u)² = (u - 1/u)² + 4 = 4² + 4 = 16 + 4 = 20.\nu + 1/u = √20 = 2√5.",
    "trick": "(1 + cos²x)/cos x = sec x + cos x. If x - 1/x = 4 ⟹ x + 1/x = √(4² + 4) = √20 = 2√5."
  },
  {
    "id": "trig_53",
    "type": "Type 4: Trigonometric Identities",
    "exam": "SSC CGL 2022 Pre",
    "page": 78,
    "question": "If 1 + sin θ = m cos θ, then what is the value of sin θ?",
    "options": [
      "(m² - 1)/(m² + 1)",
      "m/(m² + 1)",
      "(2m² - 1)/(m² + 1)",
      "(m² + 1)/(m² - 1)"
    ],
    "answer": "(m² - 1)/(m² + 1)",
    "solution": "Divide both sides by cos θ:\n(1 + sin θ) / cos θ = m\nsec θ + tan θ = m.\n\nFrom Maestro's Conjugate Golden Formula:\nIf sec θ + tan θ = m, then:\nsec θ = (m² + 1)/(2m)  and  tan θ = (m² - 1)/(2m).\n\nTherefore:\nsin θ = tan θ / sec θ = [(m² - 1)/(2m)] / [(m² + 1)/(2m)] = (m² - 1) / (m² + 1).",
    "trick": "Divide by cos θ ⟹ sec θ + tan θ = m. Directly sin θ = (m² - 1)/(m² + 1) in 3 seconds!"
  },
  {
    "id": "trig_54",
    "type": "Type 4: Trigonometric Identities",
    "exam": "SSC CGL Mains 2020",
    "page": 79,
    "question": "If sin²θ / (cos²θ - 3 cos θ + 2) = 1, and θ lies in the first quadrant, then find (tan²(θ/2) + sin²(θ/2)) / (tan θ + sin θ):",
    "options": [
      "2/27",
      "7√3 / 54",
      "2√3 / 9",
      "√3 / 54"
    ],
    "answer": "7√3 / 54",
    "solution": "Step 1: Solve for θ:\nsin²θ = cos²θ - 3 cos θ + 2\n1 - cos²θ = cos²θ - 3 cos θ + 2\n2 cos²θ - 3 cos θ + 1 = 0\n(2 cos θ - 1)(cos θ - 1) = 0.\n\nSince denominator cos²θ - 3 cos θ + 2 ≠ 0, cos θ ≠ 1.\nThus 2 cos θ - 1 = 0 ⟹ cos θ = 1/2 ⟹ θ = 60° (first quadrant).\n\nStep 2: Evaluate numerator at θ/2 = 30°:\n• tan 30° = 1/√3 ⟹ tan² 30° = 1/3\n• sin 30° = 1/2 ⟹ sin² 30° = 1/4\nNumerator = 1/3 + 1/4 = 7/12.\n\nStep 3: Evaluate denominator at θ = 60°:\n• tan 60° = √3\n• sin 60° = √3/2\nDenominator = √3 + √3/2 = 3√3 / 2.\n\nStep 4: Calculate ratio:\n(7/12) / (3√3 / 2) = (7/12) × (2 / 3√3) = 7 / (18√3) = 7√3 / 54.",
    "trick": "Solve quadratic: cos θ = 1/2 ⟹ θ = 60°. Numerator = tan² 30° + sin² 30° = 7/12. Denominator = tan 60° + sin 60° = 3√3/2. Ratio = (7/12)/(3√3/2) = 7√3 / 54."
  },
  {
    "id": "trig_55",
    "type": "Type 4: Trigonometric Identities",
    "exam": "SSC CGL Mains 2020",
    "page": 80,
    "question": "If 7 sin²θ + 4 cos²θ = 5 and θ lies in the first quadrant, then find (√3 sec θ + tan θ) / (√2 cot θ - √3 cos θ):",
    "options": [
      "2(1 + √2)",
      "2(√2 - 1)",
      "3(1 + √2)",
      "√2 + 1"
    ],
    "answer": "2(1 + √2)",
    "solution": "Step 1: Solve for θ:\n7 sin²θ + 4(1 - sin²θ) = 5\n3 sin²θ + 4 = 5 ⟹ 3 sin²θ = 1 ⟹ sin²θ = 1/3 ⟹ sin θ = 1/√3.\ncos θ = √(1 - 1/3) = √(2/3) = √2 / √3.\ntan θ = 1 / √2,  cot θ = √2,  sec θ = √3 / √2.\n\nStep 2: Evaluate Numerator:\n√3 sec θ + tan θ = √3(√3/√2) + 1/√2 = 3/√2 + 1/√2 = 4/√2 = 2√2.\n\nStep 3: Evaluate Denominator:\n√2 cot θ - √3 cos θ = √2(√2) - √3(√2/√3) = 2 - √2 = √2(√2 - 1).\n\nStep 4: Calculate ratio:\n(2√2) / [√2(√2 - 1)] = 2 / (√2 - 1) = 2(√2 + 1) = 2(1 + √2).",
    "trick": "sin²θ = 1/3. Numerator = 3/√2 + 1/√2 = 2√2. Denominator = 2 - √2 = √2(√2 - 1). Ratio = 2/(√2 - 1) = 2(√2 + 1)."
  },
  {
    "id": "trig_56",
    "type": "Type 4: Trigonometric Identities",
    "exam": "SSC CGL Mains 2020",
    "page": 81,
    "question": "If 1 + 2 tan²θ + 2 sin θ sec²θ = a/b, where 0° < θ < 90°, then (a + b) / (a - b) is equal to:",
    "options": [
      "sin θ",
      "cos θ",
      "cosec θ",
      "sec θ"
    ],
    "answer": "cosec θ",
    "solution": "Method 1 (Algebraic reduction):\n1 + 2 tan²θ + 2 sin θ sec²θ = 1 + tan²θ + tan²θ + 2 sin θ / cos²θ\n= sec²θ + sin²θ/cos²θ + 2 sin θ/cos²θ\n= (1 + sin²θ + 2 sin θ) / cos²θ = (1 + sin θ)² / (1 - sin²θ)\n= (1 + sin θ)² / [(1 + sin θ)(1 - sin θ)] = (1 + sin θ) / (1 - sin θ).\n\nThus (1 + sin θ) / (1 - sin θ) = a/b.\nApply Componendo and Dividendo:\n[(1 + sin θ) + (1 - sin θ)] / [(1 + sin θ) - (1 - sin θ)] = (a + b) / (a - b)\n2 / (2 sin θ) = (a + b) / (a - b) ⟹ 1 / sin θ = cosec θ = (a + b) / (a - b).\n\nMethod 2 (Maestro's Value Putting Trick):\nPut θ = 30°:\n• tan 30° = 1/√3, sec 30° = 2/√3, sin 30° = 1/2\n• LHS = 1 + 2(1/3) + 2(1/2)(4/3) = 1 + 2/3 + 4/3 = 3 = 3/1 ⟹ a = 3, b = 1.\n• (a + b) / (a - b) = (3 + 1) / (3 - 1) = 4/2 = 2.\n• At θ = 30°, cosec 30° = 2. Matches cosec θ!",
    "trick": "Put θ = 30° ⟹ LHS = 3/1 (a=3, b=1). (a+b)/(a-b) = 4/2 = 2. Option cosec 30° = 2. Instant match!"
  },
  {
    "id": "trig_57",
    "type": "Type 4: Trigonometric Identities",
    "exam": "SSC CHSL 2024 Pre",
    "page": 82,
    "question": "If θ is an acute angle and tan θ + cot θ = 2, then find tan¹²θ + cot¹²θ + 2 tan⁵θ cot⁷θ:",
    "options": [
      "4",
      "3",
      "2",
      "1"
    ],
    "answer": "4",
    "solution": "Given tan θ + cot θ = 2.\nSince tan θ and cot θ are reciprocals, x + 1/x = 2 ⟹ x = 1.\nThus tan θ = 1 and cot θ = 1 (which corresponds to θ = 45°).\n\nSubstitute tan θ = 1 and cot θ = 1 into the expression:\ntan¹²θ + cot¹²θ + 2 tan⁵θ cot⁷θ = 1¹² + 1¹² + 2(1⁵)(1⁷) = 1 + 1 + 2 = 4.",
    "trick": "tan θ + cot θ = 2 ⟹ tan θ = cot θ = 1. 1¹² + 1¹² + 2(1)(1) = 1 + 1 + 2 = 4 in 2 seconds!"
  },
  {
    "id": "trig_58",
    "type": "Type 4: Trigonometric Identities",
    "exam": "SSC CHSL 2024 Pre",
    "page": 83,
    "question": "If tan A = a tan B and sin A = b sin B, then the value of cos² A is:",
    "options": [
      "(b² - 1)/(a² - 1)",
      "(a² - 1)/(b² - 1)",
      "(b² + 1)/(a² + 1)",
      "(a² + 1)/(b² + 1)"
    ],
    "answer": "(b² - 1)/(a² - 1)",
    "solution": "Express B in terms of A:\n• cot B = a cot A\n• cosec B = b cosec A.\n\nUse fundamental identity cosec² B - cot² B = 1:\nb² cosec² A - a² cot² A = 1\nb² / sin² A - a² cos² A / sin² A = 1\nb² - a² cos² A = sin² A.\n\nReplace sin² A with 1 - cos² A:\nb² - a² cos² A = 1 - cos² A\nb² - 1 = a² cos² A - cos² A\nb² - 1 = (a² - 1) cos² A.\n\nTherefore:\ncos² A = (b² - 1) / (a² - 1).",
    "trick": "Master Identity: Eliminate B via cosec² B - cot² B = 1 ⟹ b²/sin²A - a²cot²A = 1 ⟹ cos² A = (b² - 1)/(a² - 1)."
  },
  {
    "id": "trig_59",
    "type": "Type 4: Trigonometric Identities",
    "exam": "SSC CHSL 2024 Pre",
    "page": 84,
    "question": "If cos⁴θ - sin⁴θ = 4/5, then find sin 4θ:",
    "options": [
      "24/25",
      "12/25",
      "16/25",
      "18/25"
    ],
    "answer": "24/25",
    "solution": "Step 1: Simplify given expression:\ncos⁴θ - sin⁴θ = (cos²θ - sin²θ)(cos²θ + sin²θ) = (cos 2θ)(1) = cos 2θ = 4/5.\n\nStep 2: Find sin 2θ:\nFrom triplet (3, 4, 5): sin 2θ = √(1 - (4/5)²) = 3/5.\n\nStep 3: Calculate sin 4θ using double-angle formula:\nsin 4θ = 2 sin 2θ cos 2θ = 2(3/5)(4/5) = 24/25.",
    "trick": "cos⁴θ - sin⁴θ = cos 2θ = 4/5 ⟹ sin 2θ = 3/5. sin 4θ = 2 sin 2θ cos 2θ = 2(3/5)(4/5) = 24/25."
  },
  {
    "id": "trig_60",
    "type": "Type 4: Trigonometric Identities",
    "exam": "SSC CGL 2022 Pre",
    "page": 85,
    "question": "If tan(α + β) = a and tan(α - β) = b, then the value of tan 2α is:",
    "options": [
      "(a + b)/(1 - ab)",
      "(a + b)/(1 + ab)",
      "(a - b)/(1 - ab)",
      "(a - b)/(1 + ab)"
    ],
    "answer": "(a + b)/(1 - ab)",
    "solution": "Notice that 2α = (α + β) + (α - β).\nApplying compound angle formula for tan(X + Y) with X = α + β and Y = α - β:\ntan 2α = tan[(α + β) + (α - β)]\n= [tan(α + β) + tan(α - β)] / [1 - tan(α + β) tan(α - β)]\n= (a + b) / (1 - ab).",
    "trick": "Express 2α as sum of (α + β) and (α - β). Formula tan(X + Y) gives (a + b) / (1 - ab) directly!"
  },
  {
    "id": "trig_61",
    "type": "Type 4: Trigonometric Identities",
    "exam": "SSC CGL Mains 2021",
    "page": 86,
    "question": "Simplify: (tan θ + sec θ - 1) / (tan θ - sec θ + 1).",
    "options": [
      "(1 + sin θ) / cos θ",
      "(1 + tan θ) / cot θ",
      "(1 + cot θ) / tan θ",
      "(1 + cos θ) / sin θ"
    ],
    "answer": "(1 + sin θ) / cos θ",
    "solution": "Replace 1 in numerator using identity 1 = sec²θ - tan²θ:\nNumerator = (sec θ + tan θ) - (sec²θ - tan²θ)\n= (sec θ + tan θ) - (sec θ + tan θ)(sec θ - tan θ)\n= (sec θ + tan θ) [1 - (sec θ - tan θ)]\n= (sec θ + tan θ) (1 - sec θ + tan θ) = (sec θ + tan θ) (tan θ - sec θ + 1).\n\nDivide by denominator (tan θ - sec θ + 1):\n= sec θ + tan θ = (1 / cos θ) + (sin θ / cos θ) = (1 + sin θ) / cos θ.",
    "trick": "Maestro's Standard Result: (tan θ + sec θ - 1)/(tan θ - sec θ + 1) = sec θ + tan θ = (1 + sin θ)/cos θ. Put θ = 45°: LHS = √2 + 1, Option A = √2 + 1."
  },
  {
    "id": "trig_62",
    "type": "Type 4: Trigonometric Identities",
    "exam": "SSC CGL Mains 2018",
    "page": 87,
    "question": "Evaluate: [2(sin⁶θ + cos⁶θ) - 3(sin⁴θ + cos⁴θ)] / (cos⁴θ - sin⁴θ - 2 cos²θ).",
    "options": [
      "-1",
      "-2",
      "2",
      "1"
    ],
    "answer": "1",
    "solution": "Maestro's Value Putting Method:\nPut θ = 0°:\n• sin 0° = 0, cos 0° = 1.\n• Numerator = 2(0 + 1) - 3(0 + 1) = 2 - 3 = -1.\n• Denominator = 1⁴ - 0⁴ - 2(1)² = 1 - 2 = -1.\n• Ratio = -1 / -1 = 1.\n\nAlgebraic Verification:\n• sin⁶θ + cos⁶θ = 1 - 3 sin²θ cos²θ ⟹ 2(sin⁶θ + cos⁶θ) = 2 - 6 sin²θ cos²θ.\n• sin⁴θ + cos⁴θ = 1 - 2 sin²θ cos²θ ⟹ 3(sin⁴θ + cos⁴θ) = 3 - 6 sin²θ cos²θ.\n• Numerator = (2 - 6 sin²θ cos²θ) - (3 - 6 sin²θ cos²θ) = 2 - 3 = -1.\n• Denominator = (cos²θ - sin²θ)(cos²θ + sin²θ) - 2 cos²θ = cos²θ - sin²θ - 2 cos²θ = -(sin²θ + cos²θ) = -1.\n• Ratio = -1 / -1 = 1.",
    "trick": "Put θ = 0°: Numerator = 2(1) - 3(1) = -1. Denominator = 1 - 2 = -1. -1 / -1 = 1. Solved in 2 seconds!"
  },
  {
    "id": "trig_63",
    "type": "Type 4: Trigonometric Identities",
    "exam": "SSC CHSL 2024 Pre",
    "page": 88,
    "question": "What is the value of: cos⁻¹(7/25) - cos⁻¹(15/17)?",
    "options": [
      "sin⁻¹(304/425)",
      "cot⁻¹(297/425)",
      "cos⁻¹(297/425)",
      "cos⁻¹(304/425)"
    ],
    "answer": "cos⁻¹(297/425)",
    "solution": "Let α = cos⁻¹(7/25) and β = cos⁻¹(15/17):\n• cos α = 7/25 ⟹ triplet (7, 24, 25) ⟹ sin α = 24/25.\n• cos β = 15/17 ⟹ triplet (8, 15, 17) ⟹ sin β = 8/17.\n\nNow calculate cos(α - β):\ncos(α - β) = cos α cos β + sin α sin β\n= (7/25)(15/17) + (24/25)(8/17)\n= (105 + 192) / (25 × 17)\n= 297 / 425.\n\nTherefore:\nα - β = cos⁻¹(297/425).",
    "trick": "Use cos(α - β) = cos α cos β + sin α sin β = (7/25)(15/17) + (24/25)(8/17) = (105 + 192)/425 = 297/425. Thus cos⁻¹(297/425)."
  },
  {
    "id": "trig_64",
    "type": "Type 4: Trigonometric Identities",
    "exam": "SSC CHSL 2024 Pre",
    "page": 89,
    "question": "If cot α = P/Q, then find the value of (P cos α - Q sin α) / (P cos α + Q sin α) - (P² - Q²) / (P² + Q²):",
    "options": [
      "0",
      "1",
      "2",
      "-1"
    ],
    "answer": "0",
    "solution": "Divide numerator and denominator of the first term by sin α:\n(P cos α - Q sin α) / (P cos α + Q sin α) = (P cot α - Q) / (P cot α + Q).\n\nSubstitute cot α = P/Q:\n= [P(P/Q) - Q] / [P(P/Q) + Q]\n= (P²/Q - Q) / (P²/Q + Q)\n= (P² - Q²) / (P² + Q²).\n\nNow subtract the second term:\n(P² - Q²) / (P² + Q²) - (P² - Q²) / (P² + Q²) = 0.",
    "trick": "Divide by sin α: first fraction equals (P² - Q²)/(P² + Q²). Subtracting the identical second term gives 0!"
  },
  {
    "id": "trig_65",
    "type": "Type 5: Maxima & Minima",
    "exam": "SSC Selection Post Phase-9",
    "page": 94,
    "question": "If x is a real quantity, what is the minimum value of (16 cos²x + 9 sec²x)?",
    "options": [
      "24",
      "25",
      "20",
      "12"
    ],
    "answer": "24",
    "solution": "Golden Formula: For reciprocal trigonometric forms a cos²x + b sec²x (with a ≥ b):\nMinimum value = 2√(a × b).\n\nHere a = 16 and b = 9:\nMinimum = 2√(16 × 9) = 2√(144) = 2 × 12 = 24.\n(The minimum occurs when 16 cos²x = 9 sec²x ⟹ cos⁴x = 9/16 ⟹ cos²x = 3/4 ≤ 1, which is valid for real x).",
    "trick": "AM-GM Reciprocal rule: Min = 2√(16 × 9) = 2 × 12 = 24. 1-second recall!"
  },
  {
    "id": "trig_66",
    "type": "Type 5: Maxima & Minima",
    "exam": "SSC CGL 2020 Pre",
    "page": 95,
    "question": "If x is a real quantity, what is the minimum value of (25 cos²x + 9 sec²x)?",
    "options": [
      "30",
      "20",
      "15",
      "40"
    ],
    "answer": "30",
    "solution": "Golden Formula: For reciprocal forms a cos²x + b sec²x (where a ≥ b):\nMinimum value = 2√(a × b).\n\nHere a = 25 and b = 9:\nMinimum = 2√(25 × 9) = 2 × (5 × 3) = 2 × 15 = 30.\n(Valid because cos²x = √(9/25) = 3/5 ≤ 1).",
    "trick": "Min = 2√(25 × 9) = 2 × 15 = 30. Direct application of reciprocal formula!"
  },
  {
    "id": "trig_67",
    "type": "Type 5: Maxima & Minima",
    "exam": "SSC CGL 2024 Pre",
    "page": 96,
    "question": "The maximum value of (2 sin θ + 3 cos θ) is:",
    "options": [
      "√17",
      "√11",
      "9",
      "√13"
    ],
    "answer": "√13",
    "solution": "Golden Formula: For linear combination a sin θ + b cos θ:\n• Maximum = +√(a² + b²)\n• Minimum = -√(a² + b²).\n\nHere a = 2 and b = 3:\nMaximum = +√(2² + 3²) = √(4 + 9) = √13.",
    "trick": "Max = √(a² + b²) = √(2² + 3²) = √13. Instant 1-second answer!"
  },
  {
    "id": "trig_68",
    "type": "Type 5: Maxima & Minima",
    "exam": "SSC CGL 2023 Pre",
    "page": 97,
    "question": "The maximum value of (sin¹⁷θ + cos²⁰θ) for all real values of θ is:",
    "options": [
      "2",
      "3",
      "1",
      "0"
    ],
    "answer": "1",
    "solution": "Analysis of trigonometric bounds:\nFor any real angle θ: |sin θ| ≤ 1 and |cos θ| ≤ 1.\n• When power n > 2, sinⁿθ ≤ sin²θ and cosⁿθ ≤ cos²θ.\n• Therefore: sin¹⁷θ + cos²⁰θ ≤ sin²θ + cos²θ = 1.\n\nEquality holds at boundary values:\n• At θ = 90°: sin¹⁷(90°) + cos²⁰(90°) = 1¹⁷ + 0²⁰ = 1 + 0 = 1.\n• At θ = 0°: sin¹⁷(0°) + cos²⁰(0°) = 0¹⁷ + 1²⁰ = 0 + 1 = 1.\n\nThus, the absolute maximum value is 1.",
    "trick": "For high powers, max is achieved at either θ = 0° or θ = 90°. At 90°: 1 + 0 = 1. Maximum is 1."
  },
  {
    "id": "trig_69",
    "type": "Type 5: Maxima & Minima",
    "exam": "SSC CHSL 2024 Pre",
    "page": 98,
    "question": "What is the maximum value of 7 cos A + 24 sin A + 32?",
    "options": [
      "57",
      "32",
      "25",
      "39"
    ],
    "answer": "57",
    "solution": "Golden Formula: For expression a cos A + b sin A + c:\nMaximum value = c + √(a² + b²).\n\nHere a = 7, b = 24, c = 32:\n• From triplet (7, 24, 25): √(7² + 24²) = √(49 + 576) = √625 = 25.\n• Maximum value = 32 + 25 = 57.\n(Minimum value would be 32 - 25 = 7).",
    "trick": "Triplet (7, 24, 25) ⟹ Max of linear part is 25. Add constant 32: 32 + 25 = 57 in 3 seconds!"
  },
  {
    "id": "trig_70",
    "type": "Type 5: Maxima & Minima",
    "exam": "SSC CGL Pre",
    "page": 99,
    "question": "The solution of the equation cos²θ + sin θ + 1 = 0 lies between the interval:",
    "options": [
      "(5π/4, 7π/4)",
      "(π/4, 3π/4)",
      "(3π/4, 5π/4)",
      "(-π/4, π/4)"
    ],
    "answer": "(5π/4, 7π/4)",
    "solution": "Step 1: Convert cos²θ into 1 - sin²θ:\n(1 - sin²θ) + sin θ + 1 = 0\n-sin²θ + sin θ + 2 = 0\nsin²θ - sin θ - 2 = 0.\n\nStep 2: Factorize:\n(sin θ - 2)(sin θ + 1) = 0.\n\nSince sin θ cannot equal 2 (range of sine is [-1, 1]):\nsin θ = -1.\n\nStep 3: Find θ:\nsin θ = -1 ⟹ θ = 270° = 3π/2.\n\nStep 4: Check interval options:\n• 5π/4 = 225°\n• 7π/4 = 315°\nSince 225° < 270° < 315°, the solution 3π/2 lies strictly inside (5π/4, 7π/4).",
    "trick": "sin²θ - sin θ - 2 = 0 ⟹ sin θ = -1 ⟹ θ = 270° = 3π/2. 5π/4 = 225° and 7π/4 = 315°. 270° is inside (5π/4, 7π/4)."
  }
];
