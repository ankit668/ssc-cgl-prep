// Geometry Master Hub Clean Offline Data (40 PYQs + 16 Formulas)
window.GEOMETRY_FORMULAS = [
  {
    "id": "geom_f01",
    "title": "Angle Sum & Exterior Angle Theorems",
    "category": "Lines & Angles",
    "formula": "∠A + ∠B + ∠C = 180°  |  Ext ∠ACD = ∠A + ∠B  |  ∠MAN = |∠B - ∠C| / 2",
    "desc": "In any triangle: Exterior angle equals the sum of two opposite interior angles. If AM ⊥ BC (altitude) and AN bisects ∠A, then ∠MAN = |∠B - ∠C| / 2. Angle between internal bisector of B and external bisector of C is ∠E = ∠A / 2."
  },
  {
    "id": "geom_f02",
    "title": "Triangle Inequality & Classification",
    "category": "Inequalities",
    "formula": "|a - b| < c < a + b  |  Acute: c² < a² + b²  |  Right: c² = a² + b²  |  Obtuse: c² > a² + b²",
    "desc": "Triangle existence rule: The sum of any two sides must be strictly greater than the third side, and their difference must be strictly less. Classification by largest side c: If c² < a² + b² (acute), c² = a² + b² (right), c² > a² + b² (obtuse)."
  },
  {
    "id": "geom_f03",
    "title": "Sine Rule & Cosine Rule",
    "category": "Trigonometric Geometry",
    "formula": "a/sin A = b/sin B = c/sin C = 2R  |  cos A = (b² + c² - a²) / (2bc)",
    "desc": "Sine Rule connects sides, opposite angles, and circumradius R. Area = (1/2)ab sin C. Cosine Rule finds the third side or angles: cos B = (a² + c² - b²)/(2ac), cos C = (a² + b² - c²)/(2ab)."
  },
  {
    "id": "geom_f04",
    "title": "Cevian & Stewart's Isosceles Theorem",
    "category": "Cevians",
    "formula": "b² · m + c² · n = a(d² + m · n)  |  Isosceles: b² - d² = BD · CD",
    "desc": "Stewart's theorem finds the length d of any cevian AD drawn to base BC. In an isosceles triangle where AB = AC = b: AD² = b² - BD · CD. High frequency in SSC CGL Tier 2!"
  },
  {
    "id": "geom_f05",
    "title": "Interior & Exterior Angle Bisector Theorems",
    "category": "Angle Bisectors",
    "formula": "Interior: BD / CD = AB / AC  |  AD² = AB · AC - BD · CD  |  Exterior: BE / CE = AB / AC",
    "desc": "Internal angle bisector divides the opposite side in the ratio of the adjacent sides. External angle bisector of ∠A meeting extended BC at E divides BC externally in ratio AB / AC."
  },
  {
    "id": "geom_f06",
    "title": "Similarity & Area Ratio Rules",
    "category": "Similarity",
    "formula": "If ΔABC ~ ΔDEF: Area(ABC) / Area(DEF) = (Side₁ / Side₂)² = (Alt₁ / Alt₂)² = (Perim₁ / Perim₂)²",
    "desc": "For similar triangles, ratios of all corresponding linear dimensions (sides, perimeters, heights, medians, inradii, circumradii) are equal to k. The ratio of their areas is equal to k²."
  },
  {
    "id": "geom_f07",
    "title": "Midpoint Theorem & Thales Theorem",
    "category": "Similarity",
    "formula": "DE || BC ⟹ AD / DB = AE / EC  |  Midpoint: DE = BC / 2  and  Area(ADE) = (1/4) Area(ABC)",
    "desc": "Basic Proportionality Theorem (Thales): A line parallel to one side divides the other two sides proportionally. Segment connecting midpoints of two sides is parallel to the third side, half its length, and cuts off 1/4 of total area."
  },
  {
    "id": "geom_f08",
    "title": "Incenter & Inradius Properties",
    "category": "Triangle Centers",
    "formula": "r = Area / s  |  ∠BIC = 90° + ∠A / 2  |  Right Δ: r = (a + b - c) / 2  |  Equilateral: r = a / (2√3)",
    "desc": "Incenter I is the concurrence of internal angle bisectors, equidistant from all 3 sides, and ALWAYS lies inside the triangle. Inradius r = Area / semi-perimeter."
  },
  {
    "id": "geom_f09",
    "title": "Circumcenter & Circumradius Properties",
    "category": "Triangle Centers",
    "formula": "R = abc / (4 · Area)  |  ∠BOC = 2∠A  |  Right Δ: R = c / 2  |  Equilateral: R = a / √3 = 2r",
    "desc": "Circumcenter O is the concurrence of perpendicular bisectors of sides, equidistant from all 3 vertices. In a right triangle, circumcenter is the midpoint of the hypotenuse (R = hypotenuse / 2)."
  },
  {
    "id": "geom_f10",
    "title": "Orthocenter & Altitude Properties",
    "category": "Triangle Centers",
    "formula": "∠BHC = 180° - ∠A  |  Right Δ: Orthocenter is at the 90° vertex  |  Distance(H, C) = c / 2",
    "desc": "Orthocenter H is the concurrence of altitudes. In an acute triangle it lies inside, in an obtuse triangle outside, and in a right triangle directly at the right-angled vertex. Distance between orthocenter and circumcenter in right Δ is c / 2."
  },
  {
    "id": "geom_f11",
    "title": "Centroid, Medians & Apollonius Theorem",
    "category": "Centroid",
    "formula": "AG : GD = 2 : 1  |  AB² + AC² = 2(AD² + BD²)  |  3(AB² + BC² + CA²) = 4(mₐ² + m_b² + m_c²)",
    "desc": "Centroid G divides medians in 2 : 1 ratio and splits triangle into 3 equal areas (and 6 equal sub-triangles). If medians AD ⊥ BE (at 90°): 5AB² = AC² + BC². Area from 3 medians = (4/3) × Area(medians)."
  },
  {
    "id": "geom_f12",
    "title": "Right-Angled Triangle Metric Relations",
    "category": "Right Triangle",
    "formula": "BD = (AB · BC) / AC  |  BD² = AD · CD  |  AB² = AD · AC  |  1 / BD² = 1 / AB² + 1 / BC²",
    "desc": "In ΔABC with ∠B = 90° and altitude BD ⊥ AC: Median to hypotenuse BM = AC / 2. Altitude BD = (base × height) / hypotenuse. BD² = AD · CD, AB² = AD · AC, BC² = CD · AC."
  },
  {
    "id": "geom_f13",
    "title": "Equilateral & Isosceles Triangle Properties",
    "category": "Special Triangles",
    "formula": "Height h = (√3/2)a  |  Area = (√3/4)a²  |  R : r = 2 : 1  |  h = r₁ + r₂ + r₃ (Viviani's Theorem)",
    "desc": "In an equilateral triangle, all four centers (I, O, H, G) coincide! Circumradius R = a/√3, Inradius r = a/(2√3). Sum of perpendicular distances from any interior point to sides equals height h."
  },
  {
    "id": "geom_f14",
    "title": "Circles: Chords, Angles & Cyclic Quadrilaterals",
    "category": "Circles",
    "formula": "Central angle = 2 × Circumference angle  |  Semicircle angle = 90°  |  Cyclic: ∠A + ∠C = 180°",
    "desc": "Perpendicular from center bisects chord. Alternate segment theorem: Angle between tangent and chord equals angle in alternate segment. For cyclic quadrilateral: Ext angle = opposite int angle, and Ptolemy's Theorem: AC · BD = AB · CD + BC · AD."
  },
  {
    "id": "geom_f15",
    "title": "Intersecting Chords & Secant-Tangent Rules",
    "category": "Circles",
    "formula": "Inside: PA · PB = PC · PD  |  Outside: PA · PB = PC · PD  |  Tangent: PT² = PA · PB",
    "desc": "Power of a Point Theorem: For intersecting chords or secants, products of segments are equal. When one line is tangent PT: PT² = PA · PB = d² - r²."
  },
  {
    "id": "geom_f16",
    "title": "Common Tangents, Common Chord & Concentric Rings",
    "category": "Circles",
    "formula": "DCT = √(d² - (r₁ - r₂)²)  |  TCT = √(d² - (r₁ + r₂)²)  |  Common chord = √3 · r  |  Annulus Area = π(L/2)²",
    "desc": "Direct common tangent (DCT) and transverse common tangent (TCT) where d is distance between centers. When 2 equal circles pass through each other's centers: Common chord = √3 · r. Concentric circles with chord L tangent to inner circle: Area = π(L/2)²."
  }
];

window.GEOMETRY_DATA = [
  {
    "id": "geom_01",
    "type": "Type 1: Lines & Angles",
    "exam": "SSC CGL Pre",
    "page": 3,
    "question": "In a triangle ABC, side CA is produced to P such that ∠BAP = 126°. If ∠B : ∠C = 5 : 2, find the degree measures of ∠B and ∠C respectively.",
    "options": [
      "90° and 36°",
      "80° and 46°",
      "75° and 30°",
      "100° and 26°"
    ],
    "answer": "90° and 36°",
    "solution": "Step 1: Exterior Angle Theorem:\nThe exterior angle of a triangle equals the sum of the two opposite interior angles:\n∠BAP = ∠B + ∠C = 126°.\n\nStep 2: Apply ratio:\nGiven ∠B : ∠C = 5 : 2. Let ∠B = 5x and ∠C = 2x.\n5x + 2x = 126° ⟹ 7x = 126° ⟹ x = 18°.\n\nStep 3: Calculate angles:\n∠B = 5 × 18° = 90°\n∠C = 2 × 18° = 36°.\n(Also ∠A = 180° - 126° = 54°).",
    "trick": "Maestro's Exterior Angle Shortcut: 126° divided by (5 + 2 = 7) parts = 18° per part. ∠B = 5 × 18° = 90° and ∠C = 2 × 18° = 36°. Solved in 3 seconds!"
  },
  {
    "id": "geom_02",
    "type": "Type 1: Lines & Angles",
    "exam": "SSC CGL Pre",
    "page": 5,
    "question": "The angle between the internal bisectors of ∠B and ∠C of a triangle ABC is 132°. What is the measure of ∠A?",
    "options": [
      "84°",
      "87°",
      "96°",
      "78°"
    ],
    "answer": "84°",
    "solution": "Step 1: Incenter Angle Theorem:\nThe intersection of the internal angle bisectors is the incenter I of ΔABC.\nThe angle formed is given by:\n∠BIC = 90° + ∠A / 2.\n\nStep 2: Solve for ∠A:\n132° = 90° + ∠A / 2\n∠A / 2 = 132° - 90° = 42°\n∠A = 42° × 2 = 84°.",
    "trick": "Maestro's Incenter Shortcut: Double the excess over 90°! (132 - 90) × 2 = 42 × 2 = 84° in 2 seconds!"
  },
  {
    "id": "geom_03",
    "type": "Type 1: Lines & Angles",
    "exam": "SSC CGL Pre",
    "page": 9,
    "question": "If x, y and z are the lengths of the three sides of a triangle such that z is the longest side and z² > x² + y², then the triangle must be:",
    "options": [
      "An obtuse-angled triangle",
      "An acute-angled triangle",
      "A right-angled triangle",
      "An equilateral triangle"
    ],
    "answer": "An obtuse-angled triangle",
    "solution": "Classification of Triangles by Sides:\nLet z be the longest side of a triangle with sides x, y, z:\n• If z² < x² + y², all angles are acute ⟹ Acute-angled triangle.\n• If z² = x² + y², the angle opposite to z is 90° ⟹ Right-angled triangle.\n• If z² > x² + y², by the Cosine Rule: cos Z = (x² + y² - z²) / (2xy) < 0, which means the angle opposite to z is greater than 90° ⟹ Obtuse-angled triangle.",
    "trick": "z² > x² + y² means the hypotenuse has stretched beyond the 90° right triangle, opening the angle into an obtuse-angled triangle!"
  },
  {
    "id": "geom_04",
    "type": "Type 1: Lines & Angles",
    "exam": "SSC CGL Pre",
    "page": 11,
    "question": "In ΔABC, ∠B = 72° and ∠C = 44°. Side BC is produced to D. The internal bisector of ∠B and the external bisector of ∠ACD meet at point E. What is the measure of ∠BEC?",
    "options": [
      "32°",
      "58°",
      "46°",
      "36°"
    ],
    "answer": "32°",
    "solution": "Step 1: Find angle A of ΔABC:\n∠A = 180° - (∠B + ∠C) = 180° - (72° + 44°) = 180° - 116° = 64°.\n\nStep 2: Golden Bisector Theorem:\nThe angle formed between the internal bisector of one base angle and the external bisector of the other base angle equals half of the vertical angle:\n∠BEC = ∠A / 2.\n\nStep 3: Calculate:\n∠BEC = 64° / 2 = 32°.",
    "trick": "Golden Rule: ∠E = ∠A / 2. In ΔABC, ∠A = 180 - 116 = 64°. Angle at intersection E = 64 / 2 = 32° in 5 seconds!"
  },
  {
    "id": "geom_05",
    "type": "Type 1: Lines & Angles",
    "exam": "SSC CGL Pre",
    "page": 12,
    "question": "In ΔABC, AM ⊥ BC and AN is the internal bisector of ∠A. What is the measure of ∠MAN if ∠B = 55° and ∠C = 35°?",
    "options": [
      "10°",
      "12°",
      "15°",
      "5°"
    ],
    "answer": "10°",
    "solution": "Golden Altitude-Bisector Theorem:\nIn any triangle, the angle between the altitude and the angle bisector drawn from the same vertex equals half the absolute difference of the other two base angles:\n∠MAN = |∠B - ∠C| / 2.\n\nSubstitute given values:\n∠MAN = |55° - 35°| / 2 = 20° / 2 = 10°.",
    "trick": "Altitude and Angle Bisector relation: Half the difference of base angles! (55 - 35) / 2 = 20 / 2 = 10° in 2 seconds!"
  },
  {
    "id": "geom_06",
    "type": "Type 1: Lines & Angles",
    "exam": "SSC CHSL Pre",
    "page": 16,
    "question": "In a triangle ABC, the lengths of the three sides are a = 5, b = 7, and c = 3. What is the measure of angle B?",
    "options": [
      "120°",
      "60°",
      "90°",
      "150°"
    ],
    "answer": "120°",
    "solution": "Step 1: Apply Cosine Rule for angle B:\ncos B = (a² + c² - b²) / (2ac).\n\nStep 2: Substitute values:\ncos B = (5² + 3² - 7²) / (2 × 5 × 3)\n= (25 + 9 - 49) / 30\n= (34 - 49) / 30 = -15 / 30 = -1/2.\n\nStep 3: Determine angle B:\nSince cos B = -1/2 and 0° < B < 180°:\nB = 180° - 60° = 120°.",
    "trick": "cos B = (25 + 9 - 49) / 30 = -15/30 = -1/2. Negative cosine in a triangle means obtuse: 180 - 60 = 120°!"
  },
  {
    "id": "geom_07",
    "type": "Type 1: Lines & Angles",
    "exam": "SSC CGL Mains",
    "page": 18,
    "question": "In triangle ABC, AB = AC = 12 cm. Point D lies on BC such that BD = 5 cm and AD = 8 cm. Find the length of CD.",
    "options": [
      "16 cm",
      "14 cm",
      "15 cm",
      "18 cm"
    ],
    "answer": "16 cm",
    "solution": "Isosceles Cevian Theorem (Stewart's Special Case):\nIn an isosceles triangle with equal sides AB = AC = b and cevian AD = d dividing base BC into segments BD = m and CD = n:\nb² - d² = m · n.\n\nSubstitute given values:\n12² - 8² = 5 · CD\n144 - 64 = 5 · CD\n80 = 5 · CD\nCD = 80 / 5 = 16 cm.",
    "trick": "Maestro's Isosceles Cevian Shortcut: b² - d² = BD · CD ⟹ 12² - 8² = 144 - 64 = 80. CD = 80 / 5 = 16 cm in 5 seconds!"
  },
  {
    "id": "geom_08",
    "type": "Type 1: Lines & Angles",
    "exam": "SSC CGL Pre",
    "page": 10,
    "question": "In ΔABC with altitude AD ⊥ BC and angle bisector AE of ∠A, if point D lies closer to B than C, which of the following is always true?",
    "options": [
      "AB < AC",
      "AB > AC",
      "AB = AC",
      "Cannot be determined"
    ],
    "answer": "AB < AC",
    "solution": "Geometric Property:\nThe altitude from a vertex always falls closer to the shorter adjacent side of the triangle.\nIn right triangles ΔADB and ΔADC:\nAB² = AD² + BD² and AC² = AD² + CD².\nSince D lies closer to B than to C (BD < CD):\nAB² < AC² ⟹ AB < AC.",
    "trick": "Maestro's Rule: 'Jo perpendicular ke paas hai woh chhota hai' ⟹ Side adjacent to shorter foot is smaller: AB < AC!"
  },
  {
    "id": "geom_09",
    "type": "Type 2: Similarity & Bisectors",
    "exam": "SSC CGL Mains",
    "page": 19,
    "question": "In a triangle ABC, AB = 7 cm, BC = 10 cm, and AC = 8 cm. If AD is the internal angle bisector of ∠BAC, where D is a point on BC, then BD is equal to:",
    "options": [
      "14/3 cm",
      "16/3 cm",
      "5 cm",
      "4 cm"
    ],
    "answer": "14/3 cm",
    "solution": "Step 1: Angle Bisector Theorem:\nThe internal angle bisector divides the opposite side in the ratio of the sides containing the angle:\nBD / CD = AB / AC = 7 / 8.\n\nStep 2: Divide base BC:\nTotal ratio parts = 7 + 8 = 15 parts.\nTotal length BC = 10 cm.\nBD = (7 / 15) × 10 = 70 / 15 = 14/3 cm (≈ 4.67 cm).\n(And CD = (8 / 15) × 10 = 16/3 cm).",
    "trick": "Angle Bisector ratio = 7 : 8. BD = 10 × (7 / 15) = 14/3 cm in 3 seconds!"
  },
  {
    "id": "geom_10",
    "type": "Type 2: Similarity & Bisectors",
    "exam": "SSC CGL Pre",
    "page": 20,
    "question": "In a triangle ABC, AB : AC = 5 : 2 and BC = 9 cm. Side BA is produced to D, and the external bisector of ∠CAD meets extended BC at E. What is the length in cm of CE?",
    "options": [
      "6 cm",
      "9 cm",
      "10 cm",
      "3 cm"
    ],
    "answer": "6 cm",
    "solution": "Exterior Angle Bisector Theorem:\nThe external bisector of an angle of a triangle divides the opposite side externally in the ratio of the sides containing the angle:\nBE / CE = AB / AC = 5 / 2.\n\nSince E lies on BC produced:\nBE = BC + CE = 9 + CE.\n\nSet up the equation:\n(9 + CE) / CE = 5 / 2\n2(9 + CE) = 5 · CE\n18 + 2 · CE = 5 · CE\n3 · CE = 18 ⟹ CE = 6 cm.",
    "trick": "External ratio 5 : 2 means BC is 5 - 2 = 3 parts. 3 parts = 9 cm ⟹ 1 part = 3 cm. CE = 2 parts = 2 × 3 = 6 cm in 5 seconds!"
  },
  {
    "id": "geom_11",
    "type": "Type 2: Similarity & Bisectors",
    "exam": "SSC CGL Pre",
    "page": 26,
    "question": "In a triangle ABC, DE || BC, where D is a point on AB and E is a point on AC. If DE divides the area of ΔABC into two equal parts, then DB : AB is equal to:",
    "options": [
      "(√2 - 1) / √2",
      "1 / √2",
      "(√2 + 1) / √2",
      "1 / 2"
    ],
    "answer": "(√2 - 1) / √2",
    "solution": "Step 1: Similarity of triangles:\nSince DE || BC, ΔADE ~ ΔABC.\nArea(ΔADE) / Area(ΔABC) = 1 / 2.\n\nStep 2: Ratio of sides:\nIn similar triangles, the ratio of sides equals the square root of the ratio of areas:\nAD / AB = √(1 / 2) = 1 / √2.\n\nStep 3: Find DB : AB:\nDB = AB - AD\nDB / AB = (AB - AD) / AB = 1 - AD/AB = 1 - 1/√2 = (√2 - 1) / √2.",
    "trick": "Area ratio 1 : 2 ⟹ Side ratio AD : AB = 1 : √2. Therefore DB : AB = (√2 - 1) : √2. Solved in 3 seconds!"
  },
  {
    "id": "geom_12",
    "type": "Type 2: Similarity & Bisectors",
    "exam": "SSC CGL Pre",
    "page": 27,
    "question": "The midpoints of sides AB and AC of a triangle ABC are X and Y respectively. If BC + XY = 18 units, then the value of BC - XY is:",
    "options": [
      "6 units",
      "9 units",
      "12 units",
      "8 units"
    ],
    "answer": "6 units",
    "solution": "Step 1: Midpoint Theorem:\nThe segment joining the midpoints of two sides of a triangle is parallel to the third side and equal to half its length:\nXY = BC / 2 ⟹ BC = 2 · XY.\n\nStep 2: Solve for XY and BC:\nBC + XY = 18\n2 · XY + XY = 18 ⟹ 3 · XY = 18 ⟹ XY = 6 units.\nBC = 2 × 6 = 12 units.\n\nStep 3: Difference:\nBC - XY = 12 - 6 = 6 units.",
    "trick": "Midpoint theorem: XY = 1 part, BC = 2 parts. Sum = 3 parts = 18 ⟹ 1 part = 6. Difference = 2 - 1 = 1 part = 6 units!"
  },
  {
    "id": "geom_13",
    "type": "Type 2: Similarity & Bisectors",
    "exam": "SSC CHSL Pre",
    "page": 28,
    "question": "Triangle DEF and triangle GHI are two similar triangles. If DE = 64 cm, GH = 24 cm, and the perimeter of triangle GHI is 72 cm, then what is the sum of the lengths of sides EF and FD of triangle DEF?",
    "options": [
      "128 cm",
      "192 cm",
      "96 cm",
      "82 cm"
    ],
    "answer": "128 cm",
    "solution": "Step 1: Ratio of perimeters in similar triangles:\nPerimeter(DEF) / Perimeter(GHI) = DE / GH = 64 / 24 = 8 / 3.\nPerimeter(DEF) = 72 × (8 / 3) = 24 × 8 = 192 cm.\n\nStep 2: Find EF + FD:\nPerimeter(DEF) = DE + EF + FD = 192 cm.\n64 + (EF + FD) = 192\nEF + FD = 192 - 64 = 128 cm.",
    "trick": "Scale factor = 64/24 = 8/3. Total perimeter = 72 × (8/3) = 192 cm. Sum of other two sides = 192 - 64 = 128 cm! (192 is the trap option)."
  },
  {
    "id": "geom_14",
    "type": "Type 2: Similarity & Bisectors",
    "exam": "SSC CGL Pre",
    "page": 30,
    "question": "If ΔXYZ ~ ΔLMR such that the ratio of their corresponding altitudes is 3 : 5 and the area of ΔXYZ is 36 cm², what is the area of ΔLMR in cm²?",
    "options": [
      "100 cm²",
      "75 cm²",
      "60 cm²",
      "120 cm²"
    ],
    "answer": "100 cm²",
    "solution": "Area Ratio Theorem for Similar Triangles:\nThe ratio of the areas of two similar triangles equals the square of the ratio of their corresponding altitudes:\nArea(ΔXYZ) / Area(ΔLMR) = (h₁ / h₂)² = (3 / 5)² = 9 / 25.\n\nSubstitute Area(ΔXYZ) = 36 cm²:\n36 / Area(ΔLMR) = 9 / 25\nArea(ΔLMR) = (36 × 25) / 9 = 4 × 25 = 100 cm².",
    "trick": "Area ratio = (3/5)² = 9/25. If 9 parts = 36 cm² (×4), then 25 parts = 25 × 4 = 100 cm² in 2 seconds!"
  },
  {
    "id": "geom_15",
    "type": "Type 3: Centers of Triangles",
    "exam": "SSC CGL Pre",
    "page": 33,
    "question": "The inradius of a triangle is 8 cm, and the sum of the lengths of its three sides is 125 cm. What is the area of the triangle in cm²?",
    "options": [
      "500 cm²",
      "1000 cm²",
      "250 cm²",
      "625 cm²"
    ],
    "answer": "500 cm²",
    "solution": "Inradius Formula:\nArea(Δ) = r · s, where r is inradius and s is semi-perimeter.\n\nPerimeter = 125 cm ⟹ s = 125 / 2 = 62.5 cm.\nArea = 8 × (125 / 2) = 4 × 125 = 500 cm².",
    "trick": "Area = r × s = 8 × (125 / 2) = 4 × 125 = 500 cm² in 3 seconds!"
  },
  {
    "id": "geom_16",
    "type": "Type 3: Centers of Triangles",
    "exam": "SSC CHSL Pre",
    "page": 37,
    "question": "In a triangle XYZ, C is the circumcentre of the triangle. If ∠Y = 50° and ∠Z = 70°, what is the value of ∠YCZ?",
    "options": [
      "120°",
      "140°",
      "60°",
      "100°"
    ],
    "answer": "120°",
    "solution": "Step 1: Find angle X in ΔXYZ:\n∠X = 180° - (∠Y + ∠Z) = 180° - (50° + 70°) = 180° - 120° = 60°.\n\nStep 2: Circumcentre Angle Property:\nThe angle subtended by any side at the circumcentre is double the angle subtended at the opposite vertex:\n∠YCZ = 2 · ∠X = 2 × 60° = 120°.",
    "trick": "Angle X = 180 - 120 = 60°. Angle at circumcentre = 2 × 60° = 120° in 2 seconds!"
  },
  {
    "id": "geom_17",
    "type": "Type 3: Centers of Triangles",
    "exam": "SSC CGL Pre",
    "page": 37,
    "question": "The sides of a triangle are 11 cm, 60 cm, and 61 cm. What is the radius of the circle circumscribing the triangle?",
    "options": [
      "30.5 cm",
      "30 cm",
      "31 cm",
      "25 cm"
    ],
    "answer": "30.5 cm",
    "solution": "Step 1: Verify triangle type:\n11² + 60² = 121 + 3600 = 3721 = 61².\nThis is a right-angled triangle with hypotenuse = 61 cm.\n\nStep 2: Circumradius of right triangle:\nIn any right-angled triangle, the circumcentre lies at the midpoint of the hypotenuse:\nCircumradius R = Hypotenuse / 2 = 61 / 2 = 30.5 cm.",
    "trick": "Pythagorean triplet (11, 60, 61) ⟹ Circumradius R = Hypotenuse / 2 = 61 / 2 = 30.5 cm!"
  },
  {
    "id": "geom_18",
    "type": "Type 3: Centers of Triangles",
    "exam": "SSC CGL Mains",
    "page": 41,
    "question": "In triangle ABC, altitudes AD, BE and CF intersect at orthocenter P. If ∠EPD = 110°, and the internal bisectors of ∠A and ∠B meet at incenter Q, what is the measure of ∠AQB?",
    "options": [
      "125°",
      "110°",
      "135°",
      "145°"
    ],
    "answer": "125°",
    "solution": "Step 1: Find angle C from orthocenter:\nIn quadrilateral CDPE, ∠CDP = 90° and ∠CEP = 90°.\nOpposite angles sum to 180°:\n∠C + ∠EPD = 180° ⟹ ∠C = 180° - 110° = 70°.\n\nStep 2: Find incenter angle:\nQ is the incenter of ΔABC (concurrence of angle bisectors):\n∠AQB = 90° + ∠C / 2 = 90° + 70° / 2 = 90° + 35° = 125°.",
    "trick": "∠C = 180 - 110 = 70°. Incenter angle ∠AQB = 90 + 70/2 = 90 + 35 = 125°!"
  },
  {
    "id": "geom_19",
    "type": "Type 3: Centers of Triangles",
    "exam": "SSC CGL Pre",
    "page": 43,
    "question": "In ΔABC, G is the centroid. If the area of ΔABC is 72 cm², what is the area of ΔGBC in cm²?",
    "options": [
      "24 cm²",
      "36 cm²",
      "18 cm²",
      "12 cm²"
    ],
    "answer": "24 cm²",
    "solution": "Centroid Area Sharing Property:\nThe line segments connecting the centroid G to the three vertices A, B, and C divide the triangle into three smaller triangles of equal area:\nArea(ΔGAB) = Area(ΔGBC) = Area(ΔGCA) = (1/3) Area(ΔABC).\n\nSubstitute total area:\nArea(ΔGBC) = 72 / 3 = 24 cm².",
    "trick": "Centroid splits the triangle into 3 equal areas: 72 / 3 = 24 cm² in 1 second!"
  },
  {
    "id": "geom_20",
    "type": "Type 3: Centers of Triangles",
    "exam": "SSC CGL Mains",
    "page": 48,
    "question": "The lengths of the three medians of a triangle are 11 cm, 60 cm, and 61 cm. What is the area of the triangle in cm²?",
    "options": [
      "440 cm²",
      "330 cm²",
      "660 cm²",
      "550 cm²"
    ],
    "answer": "440 cm²",
    "solution": "Median Area Formula:\nArea of triangle = (4/3) × Area of triangle formed by taking the medians as sides.\n\nHere the medians are 11, 60, 61. Since 11² + 60² = 121 + 3600 = 3721 = 61², the medians form a right-angled triangle:\nArea(medians) = (1/2) × 11 × 60 = 330 cm².\n\nArea of original triangle:\n= (4/3) × 330 = 4 × 110 = 440 cm².",
    "trick": "Medians (11, 60, 61) form right Δ: Area = (4/3) × (1/2 × 11 × 60) = (4/3) × 330 = 440 cm²!"
  },
  {
    "id": "geom_21",
    "type": "Type 3: Centers of Triangles",
    "exam": "SSC CGL Pre",
    "page": 49,
    "question": "In triangle ABC, two medians AD and BE intersect at G at right angles (90°). If AD = 12 cm and BE = 9 cm, then the length of side AB is equal to:",
    "options": [
      "10 cm",
      "14 cm",
      "12 cm",
      "15 cm"
    ],
    "answer": "10 cm",
    "solution": "Step 1: Centroid ratio:\nCentroid G divides each median in the ratio 2 : 1 from the vertex:\nAG = (2/3) × 12 = 8 cm\nBG = (2/3) × 9 = 6 cm.\n\nStep 2: Right triangle AGB:\nSince medians intersect at 90°, ΔAGB is a right-angled triangle with legs AG = 8 cm and BG = 6 cm:\nAB² = AG² + BG² = 8² + 6² = 64 + 36 = 100\nAB = √100 = 10 cm.",
    "trick": "AG = (2/3)×12 = 8, BG = (2/3)×9 = 6. Legs are 6 and 8 ⟹ Hypotenuse AB = 10 cm (Pythagorean triplet)!"
  },
  {
    "id": "geom_22",
    "type": "Type 3: Centers of Triangles",
    "exam": "SSC CGL Mains",
    "page": 50,
    "question": "In triangle ABC, AB = 48 cm, BC = 55 cm, and AC = 73 cm. If O is the centroid of the triangle, then the length of BO (correct to one decimal place) is:",
    "options": [
      "24.3 cm",
      "20.4 cm",
      "18.5 cm",
      "22.6 cm"
    ],
    "answer": "24.3 cm",
    "solution": "Step 1: Check triplet:\n48² + 55² = 2304 + 3025 = 5329 = 73².\nΔABC is a right-angled triangle with ∠B = 90° and hypotenuse AC = 73 cm.\n\nStep 2: Median to hypotenuse:\nIn a right triangle, the median from the 90° vertex to the hypotenuse is BM = AC / 2 = 73 / 2 = 36.5 cm.\n\nStep 3: Centroid distance BO:\nCentroid O divides median BM in 2 : 1 from vertex B:\nBO = (2/3) × BM = (2/3) × (73 / 2) = 73 / 3 = 24.333... ≈ 24.3 cm.",
    "trick": "BO = (2/3) × (Hypotenuse / 2) = 73 / 3 = 24.3 cm in 5 seconds!"
  },
  {
    "id": "geom_23",
    "type": "Type 3: Centers of Triangles",
    "exam": "SSC CGL Pre",
    "page": 58,
    "question": "In a right-angled triangle with legs a and b and hypotenuse c, what is the distance between its orthocenter and circumcenter?",
    "options": [
      "c / 2",
      "c",
      "(a + b) / 2",
      "√(a² + b²) / 3"
    ],
    "answer": "c / 2",
    "solution": "Centers in Right Triangle:\n1. Orthocenter H is located exactly at the vertex containing the 90° angle.\n2. Circumcenter C is located at the midpoint of the hypotenuse c.\n3. The distance between the 90° vertex and the midpoint of the hypotenuse is the circumradius R = c / 2.\nTherefore, the distance between the orthocenter and circumcenter is c / 2.",
    "trick": "Distance between H and C in any right triangle is simply circumradius R = Hypotenuse / 2 = c / 2!"
  },
  {
    "id": "geom_24",
    "type": "Type 3: Centers of Triangles",
    "exam": "SSC CGL Pre",
    "page": 47,
    "question": "In ΔABC, AB = 6 cm, AC = 8 cm, and median AD = 5 cm. What is the length of side BC?",
    "options": [
      "10 cm",
      "12 cm",
      "8 cm",
      "14 cm"
    ],
    "answer": "10 cm",
    "solution": "Apply Apollonius' Theorem:\nAB² + AC² = 2(AD² + BD²).\n\nSubstitute known lengths:\n6² + 8² = 2(5² + BD²)\n36 + 64 = 2(25 + BD²)\n100 = 2(25 + BD²)\n50 = 25 + BD² ⟹ BD² = 25 ⟹ BD = 5 cm.\n\nSince D is the midpoint of BC:\nBC = 2 · BD = 2 × 5 = 10 cm.",
    "trick": "Notice (6, 8, 10) forms a right triangle where median to hypotenuse is 10/2 = 5 cm! Thus BC = 10 cm instantly!"
  },
  {
    "id": "geom_25",
    "type": "Type 4: Special Triangles",
    "exam": "SSC CGL Pre",
    "page": 54,
    "question": "PQR is an equilateral triangle and the centroid of triangle PQR is point A. If the side of the triangle is 12 cm, then what is the length of PA?",
    "options": [
      "4√3 cm",
      "6√3 cm",
      "2√3 cm",
      "8 cm"
    ],
    "answer": "4√3 cm",
    "solution": "In an equilateral triangle, all four centers coincide (centroid = circumcenter).\nThe distance PA from vertex P to centroid A is equal to the circumradius R:\nR = a / √3.\n\nSubstitute a = 12 cm:\nPA = 12 / √3 = (12√3) / 3 = 4√3 cm.",
    "trick": "In an equilateral triangle, distance from vertex to centroid is circumradius R = a / √3 = 12 / √3 = 4√3 cm in 2 seconds!"
  },
  {
    "id": "geom_26",
    "type": "Type 4: Special Triangles",
    "exam": "SSC CGL Pre",
    "page": 56,
    "question": "In a triangle ABC, D is the midpoint of BC. If DL ⊥ AB and DM ⊥ AC such that DL = DM, then triangle ABC must be:",
    "options": [
      "An isosceles triangle",
      "An equilateral triangle",
      "A right-angled triangle",
      "A scalene triangle"
    ],
    "answer": "An isosceles triangle",
    "solution": "In right triangles ΔBLD and ΔCMD:\n• Hypotenuse BD = CD (D is midpoint of BC)\n• Perpendicular leg DL = DM (given)\n• ∠BLD = ∠CMD = 90°.\nBy RHS congruence criterion: ΔBLD ≅ ΔCMD.\nTherefore, ∠B = ∠C.\nSince base angles are equal, the opposite sides are equal: AB = AC.\nThus ΔABC is an isosceles triangle.",
    "trick": "Equal perpendiculars from the midpoint of base to the sides implies symmetry: ∠B = ∠C ⟹ Isosceles triangle!"
  },
  {
    "id": "geom_27",
    "type": "Type 4: Special Triangles",
    "exam": "SSC CHSL Pre",
    "page": 62,
    "question": "In right-angled triangle ABC, ∠C = 90° and CM ⊥ AB. If AB = 18 cm and BM = 6 cm, then find the length of CM.",
    "options": [
      "6√2 cm",
      "4√3 cm",
      "6 cm",
      "8 cm"
    ],
    "answer": "6√2 cm",
    "solution": "Right Triangle Altitude Metric Relation:\nIn right ΔABC with altitude CM to hypotenuse AB:\nAM = AB - BM = 18 - 6 = 12 cm.\n\nThe square of the altitude to the hypotenuse equals the product of the segments of the hypotenuse:\nCM² = AM · BM\nCM² = 12 × 6 = 72\nCM = √72 = 6√2 cm.",
    "trick": "CM = √(AM × BM) = √(12 × 6) = √72 = 6√2 cm in 3 seconds!"
  },
  {
    "id": "geom_28",
    "type": "Type 4: Special Triangles",
    "exam": "SSC CGL Pre",
    "page": 63,
    "question": "If D is the midpoint of the hypotenuse BC in right-angled triangle ABC (with ∠A = 90°), then AD is equal to:",
    "options": [
      "BC / 2",
      "BC",
      "AB · AC / BC",
      "√(AB² + AC²)"
    ],
    "answer": "BC / 2",
    "solution": "Circumcenter Property of Right Triangle:\nIn right ΔABC with ∠A = 90°, the circumcentre is the midpoint D of hypotenuse BC.\nSince D is the circumcentre, it is equidistant from all three vertices:\nAD = BD = CD = Circumradius R = BC / 2.",
    "trick": "Median to the hypotenuse is always half the hypotenuse: AD = BC / 2."
  },
  {
    "id": "geom_29",
    "type": "Type 4: Special Triangles",
    "exam": "SSC CGL Pre",
    "page": 63,
    "question": "In right-angled triangle ABC with ∠ABC = 90° and BD ⊥ AC, which of the following relations is correct?",
    "options": [
      "1 / BD² = 1 / AB² + 1 / BC²",
      "BD² = AB² + BC²",
      "BD = AB + BC - AC",
      "BD² = AB · BC"
    ],
    "answer": "1 / BD² = 1 / AB² + 1 / BC²",
    "solution": "Equating area representations:\nArea = (1/2) · AB · BC = (1/2) · AC · BD ⟹ BD = (AB · BC) / AC.\n1 / BD² = AC² / (AB² · BC²).\nSince AC² = AB² + BC² (Pythagoras theorem):\n1 / BD² = (AB² + BC²) / (AB² · BC²) = 1 / BC² + 1 / AB².",
    "trick": "Classic SSC Invariant: 1/BD² = 1/AB² + 1/BC²! Always remember this direct result."
  },
  {
    "id": "geom_30",
    "type": "Type 4: Special Triangles",
    "exam": "SSC CGL Pre",
    "page": 52,
    "question": "For an equilateral triangle of side 6 cm, what is the ratio of its inradius (r) to its circumradius (R)?",
    "options": [
      "1 : 2",
      "1 : √3",
      "1 : 3",
      "2 : 3"
    ],
    "answer": "1 : 2",
    "solution": "Equilateral Triangle Radii Formulas:\n• Inradius r = a / (2√3)\n• Circumradius R = a / √3\n\nRatio r : R = [a / (2√3)] : [a / √3] = 1/2 : 1 = 1 : 2.\n(For side 6 cm: r = √3 cm, R = 2√3 cm, ratio = 1 : 2).",
    "trick": "In ANY equilateral triangle, r : R is ALWAYS 1 : 2! No calculation needed."
  },
  {
    "id": "geom_31",
    "type": "Type 5: Circles & Tangents",
    "exam": "SSC CGL Pre",
    "page": 71,
    "question": "In a circle with centre O, an arc ABC subtends an angle of 138° at the centre of the circle. The chord AB is produced to a point P. Then, the measure of angle CBP is:",
    "options": [
      "69°",
      "42°",
      "56°",
      "138°"
    ],
    "answer": "69°",
    "solution": "Step 1: Circumference angle:\nThe angle subtended by arc AC at the circumference in the alternate segment is half the central angle:\n∠ADC = 138° / 2 = 69°.\n\nStep 2: Cyclic quadrilateral property:\nQuadrilateral ADCB is cyclic. The exterior angle formed by producing side AB to P is equal to the opposite interior angle:\n∠CBP = ∠ADC = 69°.",
    "trick": "Exterior angle of cyclic quadrilateral equals half the central angle: 138° / 2 = 69° in 2 seconds!"
  },
  {
    "id": "geom_32",
    "type": "Type 5: Circles & Tangents",
    "exam": "SSC CGL Pre",
    "page": 72,
    "question": "In a circle with centre O, PQ is the diameter. If R is a point on the circumference such that ∠QOR = 100°, and S is a point on the minor arc QR, what is the measure of ∠PSR?",
    "options": [
      "140°",
      "80°",
      "50°",
      "130°"
    ],
    "answer": "140°",
    "solution": "Step 1: Linear pair angle at center:\nSince PQ is diameter, ∠POR + ∠QOR = 180° ⟹ ∠POR = 180° - 100° = 80°.\n\nStep 2: Angle in major segment:\nLet T be a point on the major arc PR. The angle subtended by chord PR at T is:\n∠PTR = ∠POR / 2 = 80° / 2 = 40°.\n\nStep 3: Opposite angle in cyclic quadrilateral:\nQuadrilateral PTRS is cyclic. Opposite angles sum to 180°:\n∠PSR = 180° - ∠PTR = 180° - 40° = 140°.",
    "trick": "Major arc angle = 80 / 2 = 40°. Opposite cyclic angle = 180 - 40 = 140° in 5 seconds!"
  },
  {
    "id": "geom_33",
    "type": "Type 5: Circles & Tangents",
    "exam": "SSC CGL Pre",
    "page": 73,
    "question": "In the shown figure, BC is a chord and CD is a tangent through point C. If central angle ∠AOC = 112° (where OA is along diameter), find angle ACD:",
    "options": [
      "56°",
      "34°",
      "68°",
      "44°"
    ],
    "answer": "56°",
    "solution": "Alternate Segment Theorem:\nThe angle between a chord and the tangent at one of its endpoints is equal to the angle subtended by the chord in the alternate segment.\nCentral angle ∠AOC = 112°.\nThe angle subtended at the circumference by arc AC is:\n∠ABC = 112° / 2 = 56°.\nBy the Alternate Segment Theorem:\n∠ACD = ∠ABC = 56°.",
    "trick": "Alternate segment angle = Central angle / 2 = 112° / 2 = 56° in 2 seconds!"
  },
  {
    "id": "geom_34",
    "type": "Type 5: Circles & Tangents",
    "exam": "SSC CGL Pre",
    "page": 74,
    "question": "In a circle with centre O, AP and BP are tangents drawn from an external point P. If ∠APB = 62°, then the measure of angle AQB (where Q is a point on the major arc AB) is:",
    "options": [
      "59°",
      "62°",
      "118°",
      "121°"
    ],
    "answer": "59°",
    "solution": "Step 1: Central angle ∠AOB:\nIn quadrilateral OAPB, OA ⊥ AP and OB ⊥ BP (90° each).\nOpposite angles sum to 180°:\n∠AOB = 180° - ∠APB = 180° - 62° = 118°.\n\nStep 2: Angle at circumference:\nThe angle subtended by arc AB at point Q on the major arc is half the central angle:\n∠AQB = ∠AOB / 2 = 118° / 2 = 59°.",
    "trick": "∠AOB = 180 - 62 = 118°. Angle at circumference = 118 / 2 = 59° in 3 seconds!"
  },
  {
    "id": "geom_35",
    "type": "Type 5: Circles & Tangents",
    "exam": "SSC CGL Pre",
    "page": 80,
    "question": "AB and CD are two parallel chords drawn in a circle with centre O on opposite sides of the centre. The distance between the two chords is 21 cm. If AB = 24 cm and CD = 18 cm, then the radius of the circle is equal to:",
    "options": [
      "15 cm",
      "12 cm",
      "20 cm",
      "25 cm"
    ],
    "answer": "15 cm",
    "solution": "Step 1: Perpendiculars from center bisect chords:\nHalf of AB = 24 / 2 = 12 cm.\nHalf of CD = 18 / 2 = 9 cm.\n\nStep 2: Distance equations:\nLet distances from center O be d₁ and d₂:\nd₁² + 12² = r²  and  d₂² + 9² = r².\nd₂² - d₁² = 12² - 9² = 144 - 81 = 63.\nSince chords are on opposite sides: d₁ + d₂ = 21 cm.\nd₂ - d₁ = 63 / 21 = 3 cm.\nSolving gives d₁ = 9 cm, d₂ = 12 cm.\n\nStep 3: Radius:\nr = √(9² + 12²) = √(81 + 144) = √225 = 15 cm.",
    "trick": "Pythagorean Triplet Trick: Half-chords are 12 and 9. Notice 12 + 9 = 21 (distance between chords!). Triplet (9, 12, 15) immediately gives radius = 15 cm in 2 seconds!"
  },
  {
    "id": "geom_36",
    "type": "Type 5: Circles & Tangents",
    "exam": "SSC CGL Pre",
    "page": 80,
    "question": "R is a point outside a circle and is 18 cm away from its centre. A secant drawn from point R intersects the circle at points A and B in such a way that RA = 7 cm and AB = 5 cm. The radius of the circle in cm is:",
    "options": [
      "4√15 cm",
      "5√15 cm",
      "2√15 cm",
      "3√15 cm"
    ],
    "answer": "4√15 cm",
    "solution": "Secant Power of a Point Theorem:\nFor external point R at distance d from center of circle with radius r:\nRA · RB = d² - r².\n\nGiven:\nd = 18 cm, RA = 7 cm, and RB = RA + AB = 7 + 5 = 12 cm.\n7 × 12 = 18² - r²\n84 = 324 - r²\nr² = 324 - 84 = 240\nr = √240 = √(16 × 15) = 4√15 cm.",
    "trick": "Power of Point: d² - r² = RA · RB ⟹ 324 - r² = 7 × 12 = 84 ⟹ r² = 240 ⟹ r = 4√15 cm in 5 seconds!"
  },
  {
    "id": "geom_37",
    "type": "Type 5: Circles & Tangents",
    "exam": "SSC CGL Pre",
    "page": 81,
    "question": "Chords AB and CD of a circle intersect inside the circle at point F. If AF = 2.4 cm, BF = 1.8 cm, and CD = 5.7 cm, what is the length in cm of the longer of the two line segments, CF and DF?",
    "options": [
      "4.8 cm",
      "0.9 cm",
      "3.6 cm",
      "4.2 cm"
    ],
    "answer": "4.8 cm",
    "solution": "Intersecting Chords Theorem:\nAF · BF = CF · DF.\n2.4 × 1.8 = 4.32.\n\nLet CF = x, then DF = 5.7 - x:\nx(5.7 - x) = 4.32\nx² - 5.7x + 4.32 = 0.\n(x - 4.8)(x - 0.9) = 0.\nx = 4.8 cm or x = 0.9 cm.\n\nThe longer line segment is 4.8 cm.",
    "trick": "Product = 2.4 × 1.8 = 4.32, Sum = 5.7. 4.8 × 0.9 = 4.32 and 4.8 + 0.9 = 5.7. Longer piece = 4.8 cm!"
  },
  {
    "id": "geom_38",
    "type": "Type 5: Circles & Tangents",
    "exam": "SSC CGL Pre 2020",
    "page": 82,
    "question": "Chord AB of a circle of radius 10 cm is at a distance of 8 cm from the centre O. If tangents drawn at A and B intersect at point P, then the length of the tangent AP is:",
    "options": [
      "7.5 cm",
      "8.5 cm",
      "6.5 cm",
      "9 cm"
    ],
    "answer": "7.5 cm",
    "solution": "Step 1: Half-chord length:\nLet M be the midpoint of chord AB. OM ⊥ AB.\nAM = √(OA² - OM²) = √(10² - 8²) = 6 cm.\n\nStep 2: Right triangle OAP (OA ⊥ AP) with altitude AM ⊥ OP:\nΔAMP ~ ΔOMA ⟹ AP / AM = OA / OM\nAP / 6 = 10 / 8\nAP = 6 × (10 / 8) = 60 / 8 = 7.5 cm.",
    "trick": "Tangents from chord endpoints: AP = (Radius × Half-chord) / Distance from centre = (10 × 6) / 8 = 7.5 cm in 3 seconds!"
  },
  {
    "id": "geom_39",
    "type": "Type 5: Circles & Tangents",
    "exam": "SSC CGL Pre",
    "page": 90,
    "question": "Two equal circles pass through each other's centre. If the radius of each circle is 13 cm, then what is the length of their common chord?",
    "options": [
      "13√3 cm",
      "26 cm",
      "13√2 cm",
      "12√3 cm"
    ],
    "answer": "13√3 cm",
    "solution": "Common Chord Theorem:\nWhen two circles of radius r pass through each other's centers, the distance between centers d = r.\nThe line of centers perpendicularly bisects the common chord at distance r / 2 from each center.\nHalf-chord h = √(r² - (r/2)²) = √(3r² / 4) = (√3 / 2) · r.\nTotal length of common chord = 2h = √3 · r.\n\nFor r = 13 cm:\nLength = 13√3 cm.",
    "trick": "Golden Invariant: When 2 equal circles pass through each other's centers, common chord length is ALWAYS √3 · r = 13√3 cm in 1 second!"
  },
  {
    "id": "geom_40",
    "type": "Type 5: Circles & Tangents",
    "exam": "SSC CGL Pre",
    "page": 91,
    "question": "A chord of the larger among two concentric circles is of length 20 cm and it is tangent to the smaller circle. What is the area in cm² of the annular portion between the two circles?",
    "options": [
      "100π cm²",
      "400π cm²",
      "200π cm²",
      "50π cm²"
    ],
    "answer": "100π cm²",
    "solution": "Annular Area of Concentric Circles:\nLet R be the radius of the outer circle and r be the radius of the inner circle.\nThe chord of the outer circle of length L = 20 cm is tangent to the inner circle at its midpoint.\nHalf-chord = L / 2 = 10 cm.\nBy Pythagoras theorem: R² - r² = 10² = 100.\n\nArea of annular portion between circles:\nArea = πR² - πr² = π(R² - r²) = 100π cm² (≈ 314.16 cm²).",
    "trick": "Maestro's Concentric Circle Shortcut: Area = π × (chord / 2)² = π × (10)² = 100π cm² in 2 seconds!"
  }
];
