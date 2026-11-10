window.XMP_SET4_DATA = {
  "title": "Maths Maestro XMP Set 4 • Tier 2 Mock",
  "instructor": "Vishesh Shukla (Maths Maestro)",
  "set_name": "Set 4",
  "total_questions": 22,
  "total_formulas": 2,
  "formulas": [
    {
      "id": "xmp4_f01",
      "title": "Product of Radii from Tangent Lengths",
      "topic": "Geometry (Circles)",
      "page": 4,
      "content": "• Direct Common Tangent (DCT): (L_DCT)² = d² - (r₁ - r₂)²\n• Transverse Common Tangent (TCT): (L_TCT)² = d² - (r₁ + r₂)²\n• Difference of Squares: (L_DCT)² - (L_TCT)² = (r₁ + r₂)² - (r₁ - r₂)² = 4 r₁ r₂\n• Product of Radii: r₁ r₂ = [(L_DCT)² - (L_TCT)²] / 4\n• Example: If DCT = 26 and TCT = 10, r₁ r₂ = (676 - 100) / 4 = 144."
    },
    {
      "id": "xmp4_f02",
      "title": "Diagonals of an n-sided Polygon",
      "topic": "Geometry (Polygons)",
      "page": 18,
      "content": "• Formula: Number of diagonals D = n(n - 3) / 2\n• Pentagon (n = 5): D = 5(2)/2 = 5 (Only polygon where sides = diagonals)\n• Hexagon (n = 6): D = 6(3)/2 = 9\n• Octagon (n = 8): D = 8(5)/2 = 20\n• Decagon (n = 10): D = 10(7)/2 = 35."
    }
  ],
  "questions": [
    {
      "id": "xmp4_01",
      "type": "Mixture & Alligation",
      "exam": "SSC CGL Tier 2 Expected",
      "page": 1,
      "question": "Three solutions contain acid and water in the ratios 1 : 2, 2 : 3, and 3 : 2 respectively. Equal quantities of the first two solutions and twice the quantity of the third solution are mixed together. What is the ratio of acid to water in the final mixture?",
      "options": [
        "29 : 31",
        "11 : 14",
        "17 : 23",
        "15 : 19"
      ],
      "answer": "29 : 31",
      "solution": "Step 1: Find the sum of ratio parts for each solution:\nSolution 1: Acid : Water = 1 : 2 (Total = 3 units)\nSolution 2: Acid : Water = 2 : 3 (Total = 5 units)\nSolution 3: Acid : Water = 3 : 2 (Total = 5 units)\n\nStep 2: Take LCM of the totals (3, 5, 5) = 15 units as the base unit volume.\n- Solution 1 (1 unit quantity = 15):\n  Acid = (1/3) × 15 = 5, Water = (2/3) × 15 = 10\n- Solution 2 (1 unit quantity = 15):\n  Acid = (2/5) × 15 = 6, Water = (3/5) × 15 = 9\n- Solution 3 (twice quantity = 2 × 15 = 30):\n  Acid = (3/5) × 30 = 18, Water = (2/5) × 30 = 12\n\nStep 3: Sum the total acid and water:\nTotal Acid = 5 + 6 + 18 = 29\nTotal Water = 10 + 9 + 12 = 31\n\nStep 4: Final Ratio = 29 : 31.",
      "trick": "⚡ 5-Sec LCM Scaling: Scale ratios to LCM 15. In ratio 1:1:2, contributions are: 1×(5:10) + 1×(6:9) + 2×(9:6) = (5+6+18) : (10+9+12) = 29 : 31 in 5 seconds!",
      "set": "Set 4"
    },
    {
      "id": "xmp4_02",
      "type": "Heights & Distances",
      "exam": "SSC CGL Tier 2 Expected",
      "page": 2,
      "question": "Two towers of heights h₁ and h₂ subtend angles of 30° and 60° respectively at a point on the line joining their feet. If the distance between the towers is d, what is the ratio of their heights h₁ : h₂ if the point is at the midpoint?",
      "options": [
        "1 : 3",
        "3 : 1",
        "4 : 5",
        "5 : 4"
      ],
      "answer": "1 : 3",
      "solution": "Step 1: Let the midpoint between the two towers be M. The distance from M to the foot of each tower is equal, say x = d/2.\n\nStep 2: For the first tower of height h₁:\ntan 30° = h₁ / x ⟹ h₁ = x × tan 30° = x / √3.\n\nStep 3: For the second tower of height h₂:\ntan 60° = h₂ / x ⟹ h₂ = x × tan 60° = x√3.\n\nStep 4: Ratio h₁ : h₂ = (x / √3) : (x√3) = 1 / (√3 × √3) = 1 : 3.",
      "trick": "⚡ 5-Sec Midpoint Ratio Rule: When distance is equal (midpoint), ratio of heights is simply tan θ₁ : tan θ₂ = tan 30° : tan 60° = (1/√3) : √3 = 1 : 3!",
      "set": "Set 4"
    },
    {
      "id": "xmp4_03",
      "type": "Geometry (Circles)",
      "exam": "SSC CGL Tier 2 Expected",
      "page": 3,
      "question": "Two circles have a common external tangent of length 17 cm and a common internal tangent of length 9 cm. Find the product of the radii of the circles.",
      "options": [
        "48",
        "52",
        "54",
        "64"
      ],
      "answer": "52",
      "solution": "Step 1: Standard formulas for tangent lengths:\n• Direct Common Tangent (DCT): (L_DCT)² = d² - (r₁ - r₂)²\n• Transverse Common Tangent (TCT): (L_TCT)² = d² - (r₁ + r₂)²\n\nStep 2: Subtracting the two equations eliminates d²:\n(L_DCT)² - (L_TCT)² = (r₁ + r₂)² - (r₁ - r₂)² = 4 r₁ r₂\n\nStep 3: Substitute given values L_DCT = 17 cm and L_TCT = 9 cm:\n17² - 9² = 4 r₁ r₂\n289 - 81 = 4 r₁ r₂\n208 = 4 r₁ r₂\nr₁ r₂ = 208 / 4 = 52.",
      "trick": "⚡ 5-Sec Radii Product Formula: r₁ r₂ = (DCT² - TCT²) / 4 = (17² - 9²) / 4 = (26 × 8) / 4 = 52!",
      "set": "Set 4"
    },
    {
      "id": "xmp4_04",
      "type": "Geometry (Circles)",
      "exam": "SSC CGL Tier 2 Expected",
      "page": 4,
      "question": "The common direct tangent of two circles is 26 cm long, while their common transverse tangent is 10 cm long. Find the product of the radii of the two circles.",
      "options": [
        "144",
        "86",
        "100",
        "120"
      ],
      "answer": "144",
      "solution": "Step 1: Using the direct relation between tangents and product of radii:\n(L_DCT)² - (L_TCT)² = 4 r₁ r₂\n\nStep 2: Substitute L_DCT = 26 cm and L_TCT = 10 cm:\n26² - 10² = 4 r₁ r₂\n676 - 100 = 4 r₁ r₂\n576 = 4 r₁ r₂\nr₁ r₂ = 576 / 4 = 144.",
      "trick": "⚡ 5-Sec Radii Product Formula: r₁ r₂ = (26² - 10²) / 4 = (36 × 16) / 4 = 36 × 4 = 144!",
      "set": "Set 4"
    },
    {
      "id": "xmp4_05",
      "type": "Geometry (Circles)",
      "exam": "SSC CGL Tier 2 Expected",
      "page": 5,
      "question": "If a tangent PQ is drawn at point P to a circle such that ∠OPQ = 90° and a chord PR is drawn such that ∠RPQ = 30°, what is the angle subtended by the chord PR at the centre O?",
      "options": [
        "30°",
        "60°",
        "90°",
        "120°"
      ],
      "answer": "60°",
      "solution": "Step 1: Given OP ⊥ PQ (radius perpendicular to tangent at point of contact P), so ∠OPQ = 90°.\n\nStep 2: The chord PR makes angle ∠RPQ = 30° with tangent PQ.\nTherefore, ∠OPR = 90° - 30° = 60°.\n\nStep 3: In △OPR, OP = OR = radius. Hence △OPR is isosceles with ∠ORP = ∠OPR = 60°.\n\nStep 4: Angle at center ∠POR = 180° - (60° + 60°) = 60°.",
      "trick": "⚡ Alternate Segment Theorem: Angle subtended at the centre = 2 × (Angle between chord and tangent) = 2 × 30° = 60° in 2 seconds!",
      "set": "Set 4"
    },
    {
      "id": "xmp4_06",
      "type": "Geometry (Circles)",
      "exam": "SSC CGL Tier 2 Expected",
      "page": 6,
      "question": "A chord of a circle has a length of 6 cm. The angle subtended by the chord at a point on the circumference is 30°. What is the distance from the center of the circle to the chord?",
      "options": [
        "2 cm",
        "2√3 cm",
        "3 cm",
        "3√3 cm"
      ],
      "answer": "3√3 cm",
      "solution": "Step 1: By the Inscribed Angle Theorem / Extended Sine Rule:\nChord c = 2R sin θ, where θ is the angle at the circumference.\n6 = 2R sin 30° = 2R × (1/2) = R ⟹ Radius R = 6 cm.\n\nStep 2: Since angle at circumference is 30°, angle at center = 2 × 30° = 60°.\nWith two equal radii (R = 6 cm), the triangle formed by the center and chord is an equilateral triangle with side 6 cm.\n\nStep 3: The distance from the center to the chord is the altitude of this equilateral triangle:\nDistance = (√3 / 2) × side = (√3 / 2) × 6 = 3√3 cm.",
      "trick": "⚡ Equilateral Triangle Shortcut: Angle at circumference = 30° ⟹ Triangle with center is Equilateral! Altitude = (√3 / 2) × 6 = 3√3 cm!",
      "set": "Set 4"
    },
    {
      "id": "xmp4_07",
      "type": "Algebra",
      "exam": "SSC CGL Tier 2 Expected",
      "page": 7,
      "question": "If x² + 1/x² = 14, find the value of (x + 1/x)².",
      "options": [
        "10",
        "12",
        "14",
        "16"
      ],
      "answer": "16",
      "solution": "Step 1: Expand (x + 1/x)²:\n(x + 1/x)² = x² + 2 + 1/x² = (x² + 1/x²) + 2.\n\nStep 2: Substitute given x² + 1/x² = 14:\n(x + 1/x)² = 14 + 2 = 16.",
      "trick": "⚡ 2-Sec Expansion Rule: (x + 1/x)² = (x² + 1/x²) + 2 = 14 + 2 = 16!",
      "set": "Set 4"
    },
    {
      "id": "xmp4_08",
      "type": "Algebra",
      "exam": "SSC CGL Tier 2 Expected",
      "page": 8,
      "question": "If √x + 1/√x = √7, what is the value of x + 1/x?",
      "options": [
        "1",
        "2",
        "4",
        "5"
      ],
      "answer": "5",
      "solution": "Step 1: Square both sides of √x + 1/√x = √7:\n(√x + 1/√x)² = (√7)²\nx + 2 + 1/x = 7.\n\nStep 2: Subtract 2:\nx + 1/x = 7 - 2 = 5.",
      "trick": "⚡ 5-Sec Square Rule: x + 1/x = (√7)² - 2 = 7 - 2 = 5!",
      "set": "Set 4"
    },
    {
      "id": "xmp4_09",
      "type": "Simple & Compound Interest",
      "exam": "SSC CGL Tier 2 Expected",
      "page": 9,
      "question": "Calculate the compound interest on ₹2,500 at 20% per annum for 1 year 9 months, compounded annually.",
      "options": [
        "₹1,050",
        "₹950",
        "₹1,000",
        "₹900"
      ],
      "answer": "₹950",
      "solution": "Step 1: Time = 1 year + 9 months = 1 + (9/12) = 1 + 3/4 year.\n\nStep 2: Rate for full 1st year = 20%.\nRate for fractional 2nd year (9 months) = 20% × (3/4) = 15%.\n\nStep 3: Total compound interest percentage:\nNet % = 20 + 15 + (20 × 15) / 100 = 35 + 3 = 38%.\n\nStep 4: CI = 38% of ₹2,500 = 25 × 38 = ₹950.",
      "trick": "⚡ Successive Rate Shortcut: 20% + 15% ⟹ 20 + 15 + 3 = 38%. CI = 38% of ₹2,500 = ₹950 in 5 seconds!",
      "set": "Set 4"
    },
    {
      "id": "xmp4_10",
      "type": "Trigonometry",
      "exam": "SSC CGL Tier 2 Expected",
      "page": 10,
      "question": "Convert -390° into radians.",
      "options": [
        "-11π/6",
        "-13π/6",
        "-7π/3",
        "-5π/3"
      ],
      "answer": "-13π/6",
      "solution": "Step 1: Standard conversion formula from degrees to radians:\nRadians = Degrees × (π / 180°).\n\nStep 2: Substitute -390°:\nRadians = -390 × (π / 180) = -39π / 18.\n\nStep 3: Divide numerator and denominator by 3:\n-39 / 3 = -13, 18 / 3 = 6 ⟹ -13π/6.",
      "trick": "⚡ 5-Sec Angle Breakdown: 390° = 360° + 30° = 2π + π/6 = 13π/6. Hence -390° = -13π/6!",
      "set": "Set 4"
    },
    {
      "id": "xmp4_11",
      "type": "Alligation & Mixture",
      "exam": "SSC CGL Tier 2 Expected",
      "page": 11,
      "question": "An audit shows assets invested in schemes giving 12% and 18% return, yielding a 15% average return. If the total investment is ₹6,00,000, what is the investment in the lower-return scheme?",
      "options": [
        "₹2,00,000",
        "₹2,50,000",
        "₹3,00,000",
        "₹3,50,000"
      ],
      "answer": "₹3,00,000",
      "solution": "Step 1: Apply Rule of Alligation:\nScheme 1 (12%)          Scheme 2 (18%)\n              Mean (15%)\n(18 - 15) = 3           (15 - 12) = 3\n\nStep 2: Ratio of capital = 3 : 3 = 1 : 1.\n\nStep 3: Total investment = ₹6,00,000.\nInvestment in lower-return scheme (12%) = 6,00,000 × (1/2) = ₹3,00,000.",
      "trick": "⚡ Midpoint Alligation: 15% is exactly midway between 12% and 18% ((12 + 18)/2 = 15%). Equal weights ⟹ 1:1 ratio ⟹ half of ₹6,00,000 = ₹3,00,000 in 2 seconds!",
      "set": "Set 4"
    },
    {
      "id": "xmp4_12",
      "type": "Profit & Loss",
      "exam": "SSC CGL Tier 2 Expected",
      "page": 12,
      "question": "A bookstore sells half the books at 20% profit and the rest at 10% loss. Overall, he gains ₹200 on a batch of books worth ₹4,000. What is the total selling price?",
      "options": [
        "₹4,150",
        "₹4,200",
        "₹4,250",
        "₹4,300"
      ],
      "answer": "₹4,200",
      "solution": "Step 1: Total Cost Price CP = ₹4,000.\n\nStep 2: Overall profit made on this batch = ₹200.\n(Verification: Half batch CP = ₹2,000 at +20% = +₹400; remaining CP = ₹2,000 at -10% = -₹200; Net gain = +₹200).\n\nStep 3: Total Selling Price SP = Total CP + Overall Gain = ₹4,000 + ₹200 = ₹4,200.",
      "trick": "⚡ Direct Definition Shortcut: Total SP = Cost Price + Total Profit = 4,000 + 200 = ₹4,200! No fractional calculations required!",
      "set": "Set 4"
    },
    {
      "id": "xmp4_13",
      "type": "Percentage",
      "exam": "SSC CGL Tier 2 Expected",
      "page": 13,
      "question": "Free delivery is available on purchases above ₹500. A customer buys items worth ₹480 and pays ₹50 as shipping charges. What percentage more should he have purchased to avoid shipping charges?",
      "options": [
        "4%",
        "4.17%",
        "5%",
        "5.18%"
      ],
      "answer": "4.17%",
      "solution": "Step 1: Amount needed to reach free delivery threshold:\nRequired amount = ₹500 - ₹480 = ₹20.\n\nStep 2: Calculate percentage increase over current purchase ₹480:\nRequired % = (20 / 480) × 100 = (1 / 24) × 100 = 4.166...% ≈ 4.17%.",
      "trick": "⚡ Standard Reciprocal Value: 1/24 = 4.166% ≈ 4.17% in 3 seconds!",
      "set": "Set 4"
    },
    {
      "id": "xmp4_14",
      "type": "Mensuration (3D)",
      "exam": "SSC CGL Tier 2 Expected",
      "page": 14,
      "question": "An architect is designing a right prism-shaped skylight with a rectangular base measuring 9 cm × 12 cm and a height of 16 cm. Determine the length of the longest diagonal across the prism for structural support planning.",
      "options": [
        "23 cm",
        "22.5 cm",
        "21.93 cm",
        "20.5 cm"
      ],
      "answer": "21.93 cm",
      "solution": "Step 1: Formula for space diagonal of a rectangular prism:\nD = √(l² + w² + h²).\n\nStep 2: Base diagonal = √(9² + 12²) = √(81 + 144) = √225 = 15 cm.\n\nStep 3: Space diagonal D = √(15² + 16²) = √(225 + 256) = √481.\nSince 22² = 484 and 21² = 441, √481 is just under 22:\n√481 ≈ 21.93 cm.",
      "trick": "⚡ 5-Sec Triplet & Approximation: 9-12-15 base diagonal. Longest diagonal = √(15² + 16²) = √481. Since 22² = 484, √481 must be 21.93 cm!",
      "set": "Set 4"
    },
    {
      "id": "xmp4_15",
      "type": "Mensuration (2D)",
      "exam": "SSC CGL Tier 2 Expected",
      "page": 15,
      "question": "A circular park has a radius of 8 cm, and a special garden area is designed as a sector with an area of 32π cm². Find the length of the curved boundary (arc) of this garden sector.",
      "options": [
        "4π cm",
        "6π cm",
        "8π cm",
        "10π cm"
      ],
      "answer": "8π cm",
      "solution": "Step 1: Formula connecting Area of Sector, radius r, and arc length l:\nArea = (1/2) × l × r.\n\nStep 2: Substitute Area = 32π and r = 8:\n32π = (1/2) × l × 8\n32π = 4l\nl = 32π / 4 = 8π cm.",
      "trick": "⚡ 3-Sec Sector Rule: Arc length l = 2 × Area / r = 2 × 32π / 8 = 8π cm!",
      "set": "Set 4"
    },
    {
      "id": "xmp4_16",
      "type": "Mensuration (3D)",
      "exam": "SSC CGL Tier 2 Expected",
      "page": 16,
      "question": "In a square pyramid, the base side is 6 cm and the slant height is 10 cm. Find the lateral surface area.",
      "options": [
        "120 cm²",
        "130 cm²",
        "140 cm²",
        "150 cm²"
      ],
      "answer": "120 cm²",
      "solution": "Step 1: Formula for Lateral Surface Area of a regular pyramid:\nLSA = (1/2) × (Perimeter of Base) × (Slant Height).\n\nStep 2: Perimeter of square base = 4 × 6 = 24 cm.\nSlant height l = 10 cm.\n\nStep 3: LSA = (1/2) × 24 × 10 = 120 cm².",
      "trick": "⚡ 5-Sec 4-Triangles Rule: 4 triangular faces each with base 6 and height 10: 4 × (1/2 × 6 × 10) = 120 cm²!",
      "set": "Set 4"
    },
    {
      "id": "xmp4_17",
      "type": "Mensuration (2D)",
      "exam": "SSC CGL Tier 2 Expected",
      "page": 17,
      "question": "Find the area of a quarter-circle with radius 7 cm.",
      "options": [
        "38.5 cm²",
        "114 cm²",
        "14 cm²",
        "144 cm²"
      ],
      "answer": "38.5 cm²",
      "solution": "Step 1: Formula for Area of a quarter-circle:\nArea = (1/4) × πr².\n\nStep 2: When r = 7 cm, πr² = (22/7) × 7 × 7 = 154 cm².\n\nStep 3: Quarter Area = 154 / 4 = 38.5 cm².",
      "trick": "⚡ SSC Benchmark Chart: Radius 7 ⟹ Full Area = 154 cm². Quarter area = 154 / 4 = 38.5 cm² in 1 second!",
      "set": "Set 4"
    },
    {
      "id": "xmp4_18",
      "type": "Geometry (Polygons)",
      "exam": "SSC CGL Tier 2 Expected",
      "page": 18,
      "question": "A regular polygon has 20 diagonals. Find the number of its sides.",
      "options": [
        "6",
        "8",
        "7",
        "10"
      ],
      "answer": "8",
      "solution": "Step 1: Formula for number of diagonals D in an n-sided polygon:\nD = n(n - 3) / 2.\n\nStep 2: Set D = 20:\nn(n - 3) / 2 = 20\nn(n - 3) = 40.\n\nStep 3: Consecutive factors with difference 3:\n8 × (8 - 3) = 8 × 5 = 40.\nTherefore, n = 8 (Octagon).",
      "trick": "⚡ Option Test: Try n = 8: 8 × 5 / 2 = 20 diagonals. Instant match!",
      "set": "Set 4"
    },
    {
      "id": "xmp4_19",
      "type": "Geometry (Polygons)",
      "exam": "SSC CGL Tier 2 Expected",
      "page": 19,
      "question": "How many diagonals are there in a regular pentagon?",
      "options": [
        "5",
        "7",
        "10",
        "15"
      ],
      "answer": "5",
      "solution": "Step 1: A pentagon has n = 5 sides.\n\nStep 2: Formula for diagonals:\nD = n(n - 3) / 2.\n\nStep 3: D = 5 × (5 - 3) / 2 = (5 × 2) / 2 = 5.",
      "trick": "⚡ Geometry Constant: Pentagon is the ONLY regular polygon where Number of Sides = Number of Diagonals = 5!",
      "set": "Set 4"
    },
    {
      "id": "xmp4_20",
      "type": "Number System",
      "exam": "SSC CGL Tier 2 Expected",
      "page": 20,
      "question": "Find the unit digit of 999³ + 888² + 777¹.",
      "options": [
        "4",
        "6",
        "2",
        "0"
      ],
      "answer": "0",
      "solution": "Step 1: Find unit digit of each term:\n• 999³: 9 raised to an odd power has unit digit 9.\n• 888²: 8² = 64 ⟹ unit digit is 4.\n• 777¹: 7¹ = 7 ⟹ unit digit is 7.\n\nStep 2: Add individual unit digits:\n9 + 4 + 7 = 20.\n\nStep 3: Unit digit of 20 is 0.",
      "trick": "⚡ 5-Sec Unit Digit Addition: 9 (odd power) + 4 (8²) + 7 = 20 ⟹ Unit digit 0!",
      "set": "Set 4"
    },
    {
      "id": "xmp4_21",
      "type": "Coordinate Geometry",
      "exam": "SSC CGL Tier 2 Expected",
      "page": 21,
      "question": "Which of the following transformations maps the line y = x onto another line that is perpendicular to it and also passes through the origin?",
      "options": [
        "Rotate 90° about origin",
        "Reflect about x-axis",
        "Translate by (1,1)",
        "Rotate 45° about origin"
      ],
      "answer": "Rotate 90° about origin",
      "solution": "Step 1: The given line is y = x, which passes through origin (0, 0) and has slope m₁ = 1.\n\nStep 2: A perpendicular line has slope m₂ = -1/m₁ = -1. Passing through origin, its equation is y = -x.\n\nStep 3: Rotation by 90° counterclockwise about origin maps any point (x, y) to (-y, x). Applying this transformation to points on y = x gives x = -y ⟹ y = -x, which is perpendicular to y = x and passes through origin.",
      "trick": "⚡ Orthogonal Rotation Rule: Rotating by 90° about the origin ALWAYS maps any line through origin into a line perpendicular to it through the origin!",
      "set": "Set 4"
    },
    {
      "id": "xmp4_22",
      "type": "Number System & Computer",
      "exam": "SSC CGL Tier 2 Expected",
      "page": 22,
      "question": "What is the hexadecimal representation of decimal 42?",
      "options": [
        "100",
        "28",
        "2A",
        "234"
      ],
      "answer": "2A",
      "solution": "Step 1: Convert decimal 42 to base-16 by division:\n42 ÷ 16 = 2 with remainder 10.\n\nStep 2: In hexadecimal notation, remainder 10 is represented by letter 'A'.\n\nStep 3: Writing quotient followed by remainder gives 2A₁₆.",
      "trick": "⚡ 5-Sec Mental Hex Division: 42 = 2 × 16 + 10. Since 10 = 'A' in hex, decimal 42 = 2A!",
      "set": "Set 4"
    }
  ]
};
