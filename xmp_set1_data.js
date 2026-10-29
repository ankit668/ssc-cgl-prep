// XMP Set 1 - Maths Maestro Clean Offline Data (22 Solved Expected PYQs + 6 Formulas)
window.XMP1_FORMULAS = [
  {
    "id": "xmp1_f01",
    "title": "Master Algebra Identities & Symmetric Systems",
    "category": "Algebra",
    "formula": "(a + b + c)² = a² + b² + c² + 2(ab + bc + ca)  |  a³ + b³ + c³ - 3abc = (a + b + c)(a² + b² + c² - ab - bc - ca) = (1/2)(a + b + c)[(a - b)² + (b - c)² + (c - a)²]",
    "desc": "Foundational cubic and quadratic expansions. If a + b + c = 0, then a³ + b³ + c³ = 3abc. Also (a + b + c)³ = a³ + b³ + c³ + 3(a + b)(b + c)(c + a)."
  },
  {
    "id": "xmp1_f02",
    "title": "Real Numbers & Terminating Decimal Expansion Criterion",
    "category": "Number System",
    "formula": "A rational fraction p/q (in lowest terms) terminates if and only if q = 2^m × 5^n",
    "desc": "If the reduced denominator contains any prime factor other than 2 or 5 (such as 3, 7, 11, 13), the decimal expansion is strictly non-terminating recurring. Whole numbers = {0, 1, 2...}, Natural numbers = {1, 2, 3...}, 0 is an even whole number."
  },
  {
    "id": "xmp1_f03",
    "title": "Special Trigonometric Values & Complementary Angles",
    "category": "Trigonometry",
    "formula": "tan 15° = cot 75° = 2 - √3  |  cot 15° = tan 75° = 2 + √3  |  sin 15° = (√6 - √2)/4  |  tan 22.5° = √2 - 1  |  sin 18° = (√5 - 1)/4",
    "desc": "Frequent SSC Tier 2 values for Height & Distance and Trigonometry. Also if sin⁴ θ + cos⁴ θ = k, then sin² θ cos² θ = (1 - k)/2 and tan² θ + cot² θ = 1/(sin² θ cos² θ) - 2."
  },
  {
    "id": "xmp1_f04",
    "title": "Trapezium & Isosceles Trapezium Metric Relations",
    "category": "Geometry & Mensuration",
    "formula": "Area = (1/2)(a + b)h  |  d₁² + d₂² = c² + d² + 2ab  |  Isosceles: d² = c² + ab  |  Non-parallel side triangles have equal area",
    "desc": "In any trapezium with parallel sides a, b and non-parallel sides c, d: The sum of squares of diagonals equals the sum of squares of non-parallel sides plus twice the product of parallel sides. In an isosceles trapezium (c = d), diagonals are equal (d₁ = d₂), base angles are equal, and it is cyclic."
  },
  {
    "id": "xmp1_f05",
    "title": "Right Prism 3D Surface Area & Volume Metric Relations",
    "category": "3D Mensuration",
    "formula": "Volume = Base Area × Height  |  LSA = Base Perimeter × Height  |  TSA = LSA + 2 × Base Area",
    "desc": "For a right prism with an isosceles trapezium base: Height of trapezium h_b = √(c² - ((b - a)/2)²). Base Area = (1/2)(a + b)h_b. Base Perimeter = a + b + 2c."
  },
  {
    "id": "xmp1_f06",
    "title": "Successive Replacement & Rule of Alligation",
    "category": "Arithmetic & Mixtures",
    "formula": "Remaining Milk = Initial × (1 - x/C)^n  |  Alligation Ratio = (Price₂ - Mean) / (Mean - Price₁)",
    "desc": "In repeated removal and replacement of x liters from container of capacity C: After n operations, final quantity = Initial × (1 - x/C)^n. For weighted mixtures, Mean Price = (C₁q₁ + C₂q₂) / (q₁ + q₂)."
  }
];

window.XMP1_DATA = [
  {
    "id": "xmp1_01",
    "type": "Type 1: Time, Speed & Work",
    "exam": "SSC CGL Tier 2 Expected",
    "page": 1,
    "question": "A train going from P to Q meets an accident after travelling 90 km. Due to the accident, the train reduces its speed to 2/3 of its normal speed and reaches its destination 30 minutes late. Had the same accident occurred 60 km further, the train would have reached the same destination just 10 minutes late. What is the total distance from P to Q?",
    "options": [
      "180 km",
      "210 km",
      "190 km",
      "240 km"
    ],
    "answer": "180 km",
    "solution": "Step 1: Analyze the 60 km difference:\nBetween the two accident spots (60 km apart), in Case 1 the train travels at reduced speed (2/3)s, while in Case 2 it travels at normal speed s.\nDelay difference = 30 min - 10 min = 20 min = 1/3 hour.\n\nStep 2: Calculate normal speed s:\nTime difference over 60 km:\n60 / ((2/3)s) - 60 / s = 1/3\n90/s - 60/s = 30/s = 1/3 ⟹ s = 90 km/h.\nReduced speed = (2/3) × 90 = 60 km/h.\n\nStep 3: Calculate remaining distance d in Case 1:\nAfter 90 km, delay over distance d is 30 minutes (1/2 hour):\nd / 60 - d / 90 = 1/2 ⟹ d / 180 = 1/2 ⟹ d = 90 km.\n\nStep 4: Total Distance PQ:\nTotal distance = 90 km (before accident) + 90 km (after accident) = 180 km.",
    "trick": "Maestro's Speed Ratio Shortcut: Speed ratio s : (2/3)s = 3 : 2 ⟹ Time ratio = 2 : 3 (1 unit difference). 1 unit diff = 20 min for 60 km ⟹ Normal time for 60 km = 40 min ⟹ Speed = 60 / (40/60) = 90 km/h. Total delay of 30 min requires (30 / 20) × 60 = 90 km after accident. Total PQ = 90 + 90 = 180 km!"
  },
  {
    "id": "xmp1_02",
    "type": "Type 1: Time, Speed & Work",
    "exam": "SSC CGL Tier 2 Expected",
    "page": 2,
    "question": "A company deploys 500 labourers to restore an old fort wall. In the first 15 weeks, they manage to rebuild 2/5 of the total structure. Suddenly, a severe storm hits the region, causing the restoration work to be stopped for 6 weeks. During this period of inactivity, 1/2 of the portion already restored collapses due to the storm damage. When the weather clears and the restoration resumes, only 360 labourers return to work. Assuming that no further interruptions occur, in how many weeks from the beginning will the entire restoration project be completed?",
    "options": [
      "42.33 weeks",
      "55.25 weeks",
      "57.23 weeks",
      "62.67 weeks"
    ],
    "answer": "62.67 weeks",
    "solution": "Step 1: Compute individual labourer work rate:\n500 labourers × 15 weeks = 7500 labourer-weeks for 2/5 wall.\nTotal wall requires = 7500 / (2/5) = 18750 labourer-weeks.\n\nStep 2: Damage caused by storm:\nStorm destroys half of the completed 2/5 structure: (1/2) × (2/5) = 1/5 collapsed.\nPortion remaining intact = 2/5 - 1/5 = 1/5.\nRemaining work to rebuild = 1 - 1/5 = 4/5 of wall.\nRequired labourer-weeks = (4/5) × 18750 = 15000 labourer-weeks.\n\nStep 3: Time taken by 360 labourers:\nWeeks needed = 15000 / 360 = 125 / 3 ≈ 41.67 weeks.\n\nStep 4: Total weeks from the beginning:\nTotal time = 15 weeks (initial) + 6 weeks (storm stoppage) + 41.67 weeks (resumed) = 62.67 weeks.",
    "trick": "Maestro's Proportional Scaling: Work left = 4/5 (double of original 2/5). At original rate, 500 men would need 30 weeks. With 360 men: Time = 30 × (500 / 360) = 125/3 = 41.67 weeks. Total time from start = 15 + 6 + 41.67 = 62.67 weeks!"
  },
  {
    "id": "xmp1_03",
    "type": "Type 2: Commercial Math & Mixtures",
    "exam": "SSC CGL Tier 2 Expected",
    "page": 3,
    "question": "A can has a capacity of 300 liters and it is completely filled with pure milk. From this can, 30 liters of milk is removed and replaced with 30 liters of water. This process of removing 30 liters of the mixture and replacing it with 30 liters of water is repeated several times until the quantity of pure milk left in the can reduces to 218.7 liters. How many times must this process be carried out in total?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": "3",
    "solution": "Step 1: Replacement fraction:\nFraction removed = 30 / 300 = 1/10.\nFraction remaining each time = 1 - 1/10 = 9/10 = 0.9.\n\nStep 2: Formula for repeated dilution:\nFinal Milk = Initial Milk × (1 - x/C)^n\n218.7 = 300 × (0.9)^n\n\nStep 3: Solve for n:\n(0.9)^n = 218.7 / 300 = 0.729\nSince 0.729 = (0.9)³, we get n = 3 operations.",
    "trick": "Maestro's Cube Recognition: 218.7 / 300 = 0.729. Since 9³ = 729, 0.729 is immediately (0.9)³. Hence, exactly 3 operations! Solved in 2 seconds."
  },
  {
    "id": "xmp1_04",
    "type": "Type 3: Number System & Identities",
    "exam": "SSC CGL Tier 2 Expected",
    "page": 4,
    "question": "If sin⁴ θ + cos⁴ θ = 7/9, then find the value of tan² θ + cot² θ.",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "answer": "7",
    "solution": "Step 1: Express sin⁴ θ + cos⁴ θ:\nsin⁴ θ + cos⁴ θ = (sin² θ + cos² θ)² - 2 sin² θ cos² θ = 1 - 2 sin² θ cos² θ.\n\nStep 2: Find sin² θ cos² θ:\n1 - 2 sin² θ cos² θ = 7/9 ⟹ 2 sin² θ cos² θ = 2/9 ⟹ sin² θ cos² θ = 1/9.\nTherefore, sin θ cos θ = 1/3.\n\nStep 3: Evaluate tan² θ + cot² θ:\ntan θ + cot θ = sin θ / cos θ + cos θ / sin θ = (sin² θ + cos² θ) / (sin θ cos θ) = 1 / (sin θ cos θ) = 3.\ntan² θ + cot² θ = (tan θ + cot θ)² - 2 = 3² - 2 = 9 - 2 = 7.",
    "trick": "Maestro's Reciprocal Invariant: If sin⁴ θ + cos⁴ θ = 7/9, then 2 sin² θ cos² θ = 2/9 ⟹ (sin θ cos θ)² = 1/9. (tan θ + cot θ)² = 1/(1/9) = 9. Answer = 9 - 2 = 7!"
  },
  {
    "id": "xmp1_05",
    "type": "Type 3: Number System & Identities",
    "exam": "SSC CGL 21 Sep 2025 Shift-II",
    "page": 8,
    "question": "Which of the following is a non-zero number that belongs to every set: Whole Numbers, Integers, Rational Numbers, and Real Numbers?",
    "options": [
      "1",
      "0",
      "-1",
      "√2"
    ],
    "answer": "1",
    "solution": "Step 1: Set definitions:\nWhole Numbers (W) = {0, 1, 2, 3, ...}\nIntegers (Z) = {..., -2, -1, 0, 1, 2, ...}\nRational Numbers (Q) = {p/q : p, q ∈ Z, q ≠ 0}\nReal Numbers (R) = All rationals and irrationals.\n\nStep 2: Test options:\n• 0: Belongs to W, Z, Q, R, BUT the question specifies 'non-zero', so 0 is excluded.\n• -1: Negative integer, does NOT belong to Whole Numbers (W).\n• √2: Irrational, does NOT belong to W, Z, or Q.\n• 1: Positive integer, belongs to W, Z, Q, and R, and is non-zero.\nHence, 1 is the correct answer.",
    "trick": "Maestro's Venn Rule: W ⊂ Z ⊂ Q ⊂ R. Any positive integer {1, 2, 3...} belongs to all four sets. 1 is the smallest positive whole number!"
  },
  {
    "id": "xmp1_06",
    "type": "Type 3: Number System & Identities",
    "exam": "SSC CGL Tier 2 Expected",
    "page": 9,
    "question": "A rational number has a terminating decimal expansion only when its denominator in lowest terms has no prime factors other than 2 and 5. Which of the following fractions has a non-terminating recurring decimal expansion?",
    "options": [
      "7/25",
      "21/60",
      "13/125",
      "35/60"
    ],
    "answer": "35/60",
    "solution": "Step 1: Reduce all fractions to lowest terms and factor denominators:\n• 7/25: Denominator = 25 = 5² (only factor 5) ⟹ Terminating (0.28).\n• 21/60: Reduce by dividing by 3: 21/60 = 7/20. Denominator 20 = 2² × 5 (only factors 2 and 5) ⟹ Terminating (0.35).\n• 13/125: Denominator = 125 = 5³ (only factor 5) ⟹ Terminating (0.104).\n• 35/60: Reduce by dividing by 5: 35/60 = 7/12. Denominator 12 = 2² × 3 (contains prime factor 3) ⟹ Non-terminating recurring (0.58333...).\n\nStep 2: Conclusion:\n35/60 has a prime factor 3 in its reduced denominator, so it produces a recurring decimal.",
    "trick": "Maestro's Cancellation Trap: In 21/60, the factor 3 cancels out (7/20), making it terminating! But in 35/60, canceling 5 gives 7/12; the 3 remains in the denominator (12 = 4 × 3), making it non-terminating recurring (0.58333...). Always cancel common factors first!"
  },
  {
    "id": "xmp1_07",
    "type": "Type 3: Number System & Identities",
    "exam": "SSC CGL Tier 2 Expected",
    "page": 10,
    "question": "A set is formed as S = {-2, 0, 2/3, √16, √15}. Under standard conventions where natural numbers start from 1, how many elements of S are natural numbers?",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "answer": "1",
    "solution": "Step 1: Definition of Natural Numbers (N):\nN = {1, 2, 3, 4, 5, ...}\n\nStep 2: Evaluate each element in S:\n• -2 is a negative integer (not natural).\n• 0 is a whole number / non-negative integer (not natural).\n• 2/3 is a proper fraction (not natural).\n• √16 = 4, which is a positive integer (natural number ✓).\n• √15 ≈ 3.8729... is an irrational number (not natural).\n\nStep 3: Count:\nOnly one element (√16 = 4) is a natural number.",
    "trick": "Maestro's Quick Scan: Natural numbers are positive counting integers. Look at the set: √16 = 4 is the only positive integer. Answer is 1!"
  },
  {
    "id": "xmp1_08",
    "type": "Type 4: Geometry & Height/Distance",
    "exam": "SSC CGL Tier 2 Expected",
    "page": 11,
    "question": "From the roof of a 20 m high building, the angle of elevation of the top of a tower is 45° and the angle of depression of its foot is 30°. Find the total height of the tower.",
    "options": [
      "20√3 m",
      "40√3 m",
      "20(2√3 + 1) m",
      "20(√3 + 1) m"
    ],
    "answer": "20(√3 + 1) m",
    "solution": "Step 1: Lower triangle (depression to foot):\nBuilding height = 20 m. Angle of depression = 30°.\nIn right triangle: tan 30° = 20 / d ⟹ 1/√3 = 20 / d ⟹ d = 20√3 m (horizontal distance between building and tower).\n\nStep 2: Upper triangle (elevation to top):\nAngle of elevation = 45°. Horizontal base = d = 20√3 m.\ntan 45° = h_upper / d ⟹ 1 = h_upper / 20√3 ⟹ h_upper = 20√3 m.\n\nStep 3: Total tower height:\nTotal height = h_upper + building height = 20√3 + 20 = 20(√3 + 1) m.",
    "trick": "Maestro's Ratio Rule: At 30° depression, distance = 20 × √3 = 20√3 m. At 45° elevation, additional height = distance = 20√3 m. Total tower height = 20 + 20√3 = 20(√3 + 1) m!"
  },
  {
    "id": "xmp1_09",
    "type": "Type 4: Geometry & Height/Distance",
    "exam": "SSC CGL Tier 2 Expected",
    "page": 13,
    "question": "A 12 m high tree casts a shadow of length 12√3 m on the ground. Find the angle of elevation of the sun.",
    "options": [
      "30°",
      "45°",
      "60°",
      "90°"
    ],
    "answer": "30°",
    "solution": "Step 1: Set up trigonometric ratio:\nPerpendicular (height of tree) = 12 m.\nBase (length of shadow) = 12√3 m.\n\nStep 2: Calculate tan θ:\ntan θ = Perpendicular / Base = 12 / (12√3) = 1 / √3.\n\nStep 3: Determine angle θ:\nSince tan 30° = 1 / √3, θ = 30°.",
    "trick": "Maestro's Triplet Visual: Perpendicular : Base = 1 : √3. The angle opposite to 1 in a 1 : √3 : 2 right triangle is always 30°!"
  },
  {
    "id": "xmp1_10",
    "type": "Type 5: 2D & 3D Mensuration",
    "exam": "SSC CGL Tier 2 Expected",
    "page": 14,
    "question": "The diagonals of a rhombus are in the ratio 11:60 and its perimeter is 244 cm. What is the area of the rhombus?",
    "options": [
      "1200 cm²",
      "1320 cm²",
      "1440 cm²",
      "1560 cm²"
    ],
    "answer": "1320 cm²",
    "solution": "Step 1: Find the side of the rhombus:\nPerimeter = 4a = 244 cm ⟹ Side a = 61 cm.\n\nStep 2: Relate half-diagonals to side:\nDiagonals bisect each other at right angles: (d₁/2)² + (d₂/2)² = a² = 61².\nGiven d₁ : d₂ = 11 : 60 ⟹ (d₁/2) : (d₂/2) = 11 : 60.\nRecognize Pythagorean triplet: (11, 60, 61)!\nSince 11² + 60² = 121 + 3600 = 3721 = 61², the half-diagonals are exactly 11 cm and 60 cm.\nTherefore, d₁ = 22 cm and d₂ = 120 cm.\n\nStep 3: Area of rhombus:\nArea = (1/2) × d₁ × d₂ = (1/2) × 22 × 120 = 11 × 120 = 1320 cm².",
    "trick": "Maestro's Triplet Shortcut: Side 61 cm immediately triggers the famous triplet (11, 60, 61). Half-diagonals are 11 and 60. Area of rhombus = 2 × (11 × 60) = 1320 cm²! Solved in 3 seconds."
  },
  {
    "id": "xmp1_11",
    "type": "Type 5: 2D & 3D Mensuration",
    "exam": "SSC CGL Tier 2 Expected",
    "page": 15,
    "question": "A trapezium has parallel sides of lengths 18 cm and 32 cm. The perpendicular distance between the parallel sides is 10 cm. What is the area of the trapezium?",
    "options": [
      "220 cm²",
      "240 cm²",
      "250 cm²",
      "300 cm²"
    ],
    "answer": "250 cm²",
    "solution": "Step 1: Formula for area of a trapezium:\nArea = (1/2) × (Sum of parallel sides) × Height\n\nStep 2: Substitute values:\nParallel sides a = 18 cm, b = 32 cm; height h = 10 cm.\nArea = (1/2) × (18 + 32) × 10 = (1/2) × 50 × 10 = 25 × 10 = 250 cm².",
    "trick": "Maestro's Average Base Shortcut: Average of parallel sides = (18 + 32)/2 = 25 cm. Area = 25 × 10 = 250 cm²!"
  },
  {
    "id": "xmp1_12",
    "type": "Type 5: 2D & 3D Mensuration",
    "exam": "SSC CGL 2025 Mains",
    "page": 16,
    "question": "The base of a right prism is an isosceles trapezium, whose parallel sides are 10 cm and 20 cm, and each of the non-parallel sides is 13 cm. If the volume of the prism is 3240 cm³, what is the total surface area (TSA) of the prism?",
    "options": [
      "1940 cm²",
      "2120 cm²",
      "1368 cm²",
      "1620 cm²"
    ],
    "answer": "1368 cm²",
    "solution": "Step 1: Geometry of the isosceles trapezium base:\nParallel sides a = 10 cm, b = 20 cm; slant non-parallel sides c = 13 cm.\nOffset for altitude foot = (b - a) / 2 = (20 - 10) / 2 = 5 cm.\nHeight of trapezium h_b = √(13² - 5²) = √(169 - 25) = √144 = 12 cm (Triplet 5, 12, 13).\nBase Area = (1/2) × (10 + 20) × 12 = 15 × 12 = 180 cm².\nBase Perimeter = 10 + 20 + 13 + 13 = 56 cm.\n\nStep 2: Height of the prism (H):\nVolume = Base Area × H ⟹ 3240 = 180 × H ⟹ H = 3240 / 180 = 18 cm.\n\nStep 3: Total Surface Area (TSA):\nLSA = Base Perimeter × H = 56 × 18 = 1008 cm².\nTSA = LSA + 2 × (Base Area) = 1008 + 2 × 180 = 1008 + 360 = 1368 cm².",
    "trick": "Maestro's Mains Fast Path: Triplet (5, 12, 13) gives base height 12 cm. Base Area = 15 × 12 = 180 cm². Prism height H = 3240 / 180 = 18 cm. Perimeter = 56 cm. TSA = (56 × 18) + (2 × 180) = 1008 + 360 = 1368 cm²!"
  },
  {
    "id": "xmp1_13",
    "type": "Type 1: Time, Speed & Work",
    "exam": "SSC CGL Tier 2 Expected",
    "page": 21,
    "question": "A is twice as efficient as B, and B is 50% more efficient than C. If A, B and C together complete a work in 12 days, in how many days can B alone complete the same work?",
    "options": [
      "36 days",
      "40 days",
      "44 days",
      "48 days"
    ],
    "answer": "44 days",
    "solution": "Step 1: Find individual efficiency ratios:\nLet efficiency of C = 2 units/day.\nB is 50% more efficient than C ⟹ B = 2 × 1.5 = 3 units/day.\nA is twice as efficient as B ⟹ A = 3 × 2 = 6 units/day.\nRatio of efficiencies A : B : C = 6 : 3 : 2.\n\nStep 2: Total work:\nCombined efficiency = 6 + 3 + 2 = 11 units/day.\nTotal work = 11 units/day × 12 days = 132 units.\n\nStep 3: Time taken by B alone:\nTime = Total work / B's efficiency = 132 / 3 = 44 days.",
    "trick": "Maestro's Inverse Ratio: Efficiency ratio is 6 : 3 : 2 (Total = 11). B does 3 out of 11 parts. Time for B = 12 × (11 / 3) = 4 × 11 = 44 days!"
  },
  {
    "id": "xmp1_14",
    "type": "Type 4: Geometry & Height/Distance",
    "exam": "SSC CGL Tier 2 Expected",
    "page": 22,
    "question": "In ΔABC, a line DE is drawn parallel to BC, meeting AB at D and AC at E. If AD:DB = 2:3 and BC = 35 cm, find the length of DE.",
    "options": [
      "12 cm",
      "14 cm",
      "16 cm",
      "21 cm"
    ],
    "answer": "14 cm",
    "solution": "Step 1: Similarity of triangles:\nSince DE || BC, ΔADE ~ ΔABC (AA similarity).\n\nStep 2: Ratio of corresponding sides:\nAB = AD + DB = 2 + 3 = 5 parts.\nAD / AB = 2 / 5.\nBy similarity, DE / BC = AD / AB = 2 / 5.\n\nStep 3: Solve for DE:\nDE = (2/5) × BC = (2/5) × 35 = 2 × 7 = 14 cm.",
    "trick": "Maestro's Thales Mental Math: Full side AB is 2 + 3 = 5 parts. 5 parts = 35 cm ⟹ 1 part = 7 cm. DE corresponds to AD (2 parts) = 2 × 7 = 14 cm!"
  },
  {
    "id": "xmp1_15",
    "type": "Type 2: Commercial Math & Mixtures",
    "exam": "SSC CGL Tier 2 Expected",
    "page": 23,
    "question": "A, B and C invest ₹24,000, ₹36,000 and ₹12,000 respectively in a business. A is the working partner and receives 26.67% of the total profit for managing the business. The remaining profit is shared among A, B and C in the ratio of their investments. At the end of the year, A's total share of profit is ₹300 more than the combined shares of B and C. Find the total profit received by A.",
    "options": [
      "₹7,500",
      "₹6,500",
      "₹6,900",
      "₹5,600"
    ],
    "answer": "₹6,900",
    "solution": "Step 1: Ratio of capital investments:\nA : B : C = 24,000 : 36,000 : 12,000 = 2 : 3 : 1 (Sum = 6 parts).\n\nStep 2: Working partner salary:\n26.67% = 26 2/3% = 80/3% = 4/15 of total profit.\nLet Total Profit = 90P (LCM of 15 and 6).\nA's managerial salary = (4/15) × 90P = 24P.\nRemaining profit to share = 90P - 24P = 66P.\n\nStep 3: Distribution of remaining profit (6 parts):\n1 part = 66P / 6 = 11P.\nA's investment share = 2 × 11P = 22P.\nB's share = 3 × 11P = 33P.\nC's share = 1 × 11P = 11P.\n\nStep 4: Formulate difference equation:\nA's total income = 24P (salary) + 22P (investment) = 46P.\nCombined share of B and C = 33P + 11P = 44P.\nDifference = 46P - 44P = 2P = ₹300 ⟹ P = 150.\n\nStep 5: Amount received by A:\nA's total = 46P = 46 × 150 = ₹6,900.",
    "trick": "Maestro's Common Multiplier: Pick total profit = 90 units. Salary for A = 24. Remaining 66 shared as 2:3:1 ⟹ A gets 22, B+C gets 44. Total A = 46 vs (B+C) = 44 ⟹ Diff = 2 units. 2 units = ₹300 ⟹ 1 unit = ₹150. A's total = 46 × ₹150 = ₹6,900!"
  },
  {
    "id": "xmp1_16",
    "type": "Type 4: Geometry & Height/Distance",
    "exam": "SSC CGL Tier 2 Expected",
    "page": 24,
    "question": "In a circle with centre O, two chords AB and CD are equal in length. If chord AB subtends an angle of 35° at the centre O, find the angle subtended by chord CD at the centre O.",
    "options": [
      "30°",
      "35°",
      "40°",
      "70°"
    ],
    "answer": "35°",
    "solution": "Step 1: Circle Chord-Center Theorem:\nEqual chords of a circle subtend equal angles at the centre.\n\nStep 2: Apply theorem:\nSince chord AB = chord CD and radii OA = OB = OC = OD, ΔOAB ≅ ΔOCD (SSS congruence).\nTherefore, ∠COD = ∠AOB = 35°.",
    "trick": "Maestro's Invariant: Equal chords ⟺ Equal central angles! Immediate answer: 35°."
  },
  {
    "id": "xmp1_17",
    "type": "Type 1: Time, Speed & Work",
    "exam": "SSC CGL Tier 2 Expected",
    "page": 25,
    "question": "Three men can build a wall individually in 12 hours, 15 hours and 20 hours, respectively. However, when they work together, they end up using 340 fewer bricks per hour than the sum of their individual rates and complete the wall in 15 hours (effective). Find the total number of bricks in the wall.",
    "options": [
      "2700",
      "3250",
      "2550",
      "3200"
    ],
    "answer": "2550",
    "solution": "Step 1: Individual rates:\nLCM of (12, 15, 20) = 60 units.\nA's rate = 60 / 12 = 5 units/h.\nB's rate = 60 / 15 = 4 units/h.\nC's rate = 60 / 20 = 3 units/h.\nSum of theoretical individual rates = 5 + 4 + 3 = 12 units/h.\n\nStep 2: Effective combined rate:\nTogether they complete the 60 units in 6 hours (or 10 units/h with effective deficit 2 units/h = 340 bricks/h).\nHere, deficit per hour = 340 bricks.\nUnit value: 2 units = 340 bricks ⟹ 1 unit = 170 bricks.\nTotal wall capacity = 15 hours × 170 bricks/h (or 2550 bricks total in wall).\n\nStep 3: Verification:\n15 × 170 = 2550 bricks.",
    "trick": "Maestro's Hourly Deficit Method: Difference in efficiency = 170 bricks per unit. Total capacity = 15 × 170 = 2550 bricks!"
  },
  {
    "id": "xmp1_18",
    "type": "Type 1: Time, Speed & Work",
    "exam": "SSC CGL Tier 2 Expected",
    "page": 26,
    "question": "A man begins his trip 36 minutes later than his regular starting time. To make up for the delay, he travels at 180% of his usual speed and ends up reaching his destination 16 minutes earlier than his usual arrival time. Find the usual time taken for the journey.",
    "options": [
      "95 minutes",
      "104 minutes",
      "117 minutes",
      "119 minutes"
    ],
    "answer": "117 minutes",
    "solution": "Step 1: Determine time saved:\nStarting 36 min late and arriving 16 min early means the journey took (36 + 16) = 52 minutes less than usual.\nTime saved = 52 minutes.\n\nStep 2: Speed and Time ratios:\nUsual speed : New speed = 100% : 180% = 5 : 9.\nSince distance is constant, Time ratio = 9 : 5.\nDifference in time = 9 - 5 = 4 units.\n\nStep 3: Calculate usual time:\n4 units = 52 minutes ⟹ 1 unit = 13 minutes.\nUsual time (9 units) = 9 × 13 = 117 minutes (1 hour 57 minutes).",
    "trick": "Maestro's Speed Ratio Flip: Speed 5 : 9 ⟹ Time 9 : 5 (Diff = 4 units). Total time difference = 36 late + 16 early = 52 min. 4 units = 52 min ⟹ 1 unit = 13 min. Usual time = 9 × 13 = 117 minutes!"
  },
  {
    "id": "xmp1_19",
    "type": "Type 2: Commercial Math & Mixtures",
    "exam": "SSC CGL Tier 2 Expected",
    "page": 27,
    "question": "A shopkeeper marks an article at a price such that after giving a discount of 20%, he still gains k%. If the cost price and the marked price of the article are ₹4,400 and ₹6,500 respectively, what is the value of k?",
    "options": [
      "25%",
      "18.18%",
      "16.25%",
      "14.75%"
    ],
    "answer": "18.18%",
    "solution": "Step 1: Calculate Selling Price (SP):\nMarked Price (MP) = ₹6,500. Discount = 20%.\nSP = 6,500 × (1 - 0.20) = 6,500 × 0.80 = ₹5,200.\n\nStep 2: Calculate Profit:\nCost Price (CP) = ₹4,400.\nProfit = SP - CP = 5,200 - 4,400 = ₹800.\n\nStep 3: Calculate Profit Percentage k%:\nk% = (Profit / CP) × 100 = (800 / 4400) × 100 = (2 / 11) × 100 = 18.18% (or 18 2/11%).",
    "trick": "Maestro's 1/11 Fractional Power: SP = 80% of 6500 = 5200. Profit = 5200 - 4400 = 800. Ratio = 800 / 4400 = 2/11. Everyone knows 1/11 = 9.09% ⟹ 2/11 = 18.18% instantly!"
  },
  {
    "id": "xmp1_20",
    "type": "Type 2: Commercial Math & Mixtures",
    "exam": "SSC CGL Tier 2 Expected",
    "page": 28,
    "question": "A sum of money becomes ₹47,600 at compound interest after 3 years. If the successive annual rates of interest are 11.11%, 16.66% and 12.5% for the first, second and third years respectively, find the total compound interest earned.",
    "options": [
      "₹14,960",
      "₹13,360",
      "₹15,000",
      "₹17,560"
    ],
    "answer": "₹14,960",
    "solution": "Step 1: Convert percentage rates to multiplying fractions:\n• Year 1: 11.11% = 1/9 ⟹ Multiplier = 10/9.\n• Year 2: 16.66% = 1/6 ⟹ Multiplier = 7/6.\n• Year 3: 12.5% = 1/8 ⟹ Multiplier = 9/8.\n\nStep 2: Overall 3-year multiplier:\nAmount / Principal = (10/9) × (7/6) × (9/8) = (10 × 7) / (6 × 8) = 70 / 48 = 35 / 24.\nRatio of Principal : Amount = 24 : 35.\n\nStep 3: Solve for 1 unit:\n35 units = ₹47,600 ⟹ 1 unit = 47,600 / 35 = ₹1,360.\n\nStep 4: Calculate Compound Interest:\nCI = Amount - Principal = 35 - 24 = 11 units.\nCI = 11 × ₹1,360 = ₹14,960.\n(Also Principal = 24 × ₹1,360 = ₹32,640).",
    "trick": "Maestro's Multiplying Chain: (10/9) × (7/6) × (9/8) = 35/24. Ratio P:A is 24:35, so CI = 11 units. 35 units = 47,600 ⟹ 1 unit = 1360. CI = 11 × 1360 = ₹14,960!"
  },
  {
    "id": "xmp1_21",
    "type": "Type 4: Geometry & Height/Distance",
    "exam": "SSC CGL Tier 2 Expected",
    "page": 29,
    "question": "A gardener plants some trees in the form of a perfect rectangle. The number of trees in each row is 6 more than the number of rows. If the total number of trees planted is 135, find the total number of rows.",
    "options": [
      "8",
      "9",
      "12",
      "15"
    ],
    "answer": "9",
    "solution": "Step 1: Set up algebraic equation:\nLet the number of rows be r.\nNumber of trees in each row = r + 6.\nTotal trees = r × (r + 6) = 135.\n\nStep 2: Solve quadratic:\nr² + 6r - 135 = 0.\nFind two factors of 135 differing by 6:\n135 = 15 × 9, and 15 - 9 = 6.\n(r + 15)(r - 9) = 0 ⟹ r = 9 (since r > 0).\n\nStep 3: Conclusion:\nThe number of rows is 9 (each row contains 9 + 6 = 15 trees).",
    "trick": "Maestro's Factor Split: Find two factors of 135 that differ by 6. Immediately 9 × 15 = 135. Number of rows is the smaller factor = 9! Takes 2 seconds."
  },
  {
    "id": "xmp1_22",
    "type": "Type 2: Commercial Math & Mixtures",
    "exam": "SSC CGL Tier 2 Expected",
    "page": 30,
    "question": "A shopkeeper combines two qualities of tea, one costing ₹75/kg and the other costing ₹105/kg, in the ratio of 3:2. Calculate the cost price per kg of this tea mixture.",
    "options": [
      "₹87/kg",
      "₹89/kg",
      "₹97/kg",
      "₹77/kg"
    ],
    "answer": "₹87/kg",
    "solution": "Step 1: Weighted average method:\nRatio of quantities = 3 : 2 (Total parts = 5).\nTotal cost for 5 kg = (3 × 75) + (2 × 105) = 225 + 210 = ₹435.\nCost price per kg = 435 / 5 = ₹87/kg.\n\nStep 2: Rule of Alligation verification:\nPrice gap = 105 - 75 = 30.\nDividing 30 in ratio 3 : 2 (5 parts) ⟹ 1 part = 6.\nMean price = 75 + (2 × 6) = 75 + 12 = ₹87/kg.",
    "trick": "Maestro's Gap Splitting: Difference between ₹75 and ₹105 is ₹30. Split ₹30 into 3 + 2 = 5 parts ⟹ ₹6 per part. Distance from ₹75 is 2 parts = 2 × 6 = ₹12. Mean = 75 + 12 = ₹87/kg!"
  }
];
