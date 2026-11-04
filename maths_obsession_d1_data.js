// Maths Obsession Day 1 - Maths Maestro Offline Data
// Instructor: Vishesh Shukla
window.MATHS_OBSESSION_D1_FORMULAS = [
  {
    "id": "obs1_f01",
    "title": "Right Circular Cylinder & Prism Metric Relations",
    "category": "3D Mensuration",
    "page": 4,
    "formula": "Volume = πr²h  |  CSA = 2πrh  |  TSA = 2πr(h + r)  |  Prism Volume = Base Area × h",
    "desc": "• Prism Identity: Volume = Base Area × Height; LSA = Perimeter of Base × Height; TSA = LSA + 2 × (Base Area).\n• Cylinder: Circular prism with base area πr² and perimeter 2πr. Unfolded CSA forms a rectangle of dimensions (2πr) × h.\n• Golden Radius Table (π = 22/7):\n  - r = 7 ⟹ Circumference = 44, Area = 154\n  - r = 10.5 (7 × 3/2) ⟹ Circumference = 66, Area = 346.5 (154 × 9/4)\n  - r = 14 (7 × 2) ⟹ Circumference = 88, Area = 616 (154 × 4)\n  - r = 21 (7 × 3) ⟹ Circumference = 132, Area = 1386 (154 × 9)",
    "day": "Day 1"
  },
  {
    "id": "obs1_f02",
    "title": "Hollow Cylinder (खोखला बेलन) Metric Identities",
    "category": "3D Mensuration",
    "page": 5,
    "formula": "Volume = πh(R² - r²)  |  CSA = 2πh(R + r)  |  TSA = 2π(R + r)(h + R - r)  |  Thickness t = R - r",
    "desc": "• Parameters: External radius = R, Internal radius = r, Thickness t = R - r, Height = h.\n• Material Volume: V = πh(R² - r²) = πh(R + r)(R - r) = πh·t(R + r).\n• Curved Surface Area (CSA): External CSA + Internal CSA = 2πRh + 2πrh = 2πh(R + r).\n• Flat Base Rings Area (both ends): 2 × π(R² - r²).\n• Total Surface Area (TSA): CSA + 2 × Base Area = 2πh(R + r) + 2π(R² - r²) = 2π(R + r)[h + (R - r)] = 2π(R + r)(h + t).",
    "day": "Day 1"
  },
  {
    "id": "obs1_f03",
    "title": "Equilateral Triangle Advanced Metric & Geometric Properties",
    "category": "Geometry & Mensuration",
    "page": 8,
    "formula": "Height h = (√3/2)a  |  Area = (√3/4)a²  |  R = a/√3 = (2/3)h  |  r = a/(2√3) = (1/3)h  |  R : r = 2 : 1",
    "desc": "• Centers Invariant: Centroid (G), Incenter (I), Circumcenter (O), and Orthocenter (H) all coincide!\n• Ratio R : r = 2 : 1 ⟹ Area of Circumcircle : Area of Incircle = 4 : 1.\n• Interior Point Perpendiculars: For any point P inside ΔABC with perpendiculars h₁, h₂, h₃ to the 3 sides: h = h₁ + h₂ + h₃ = (√3/2)a ⟹ a = (2/√3)(h₁ + h₂ + h₃).\n• Inscribed Square: Side of square x = (Base × Height)/(Base + Height) = (√3 a)/(2 + √3) = (2√3 - 3)a.\n• Corner Circles: Circle inscribed in corner touching 2 sides and incircle has radius ratio 1 : 3 (r_small = r/3) and area ratio 1 : 9.",
    "day": "Day 1"
  },
  {
    "id": "obs1_f04",
    "title": "Rhombus Incircle & Parallelogram Invariant Theorems",
    "category": "Geometry",
    "page": 9,
    "formula": "Side a = √((d₁/2)² + (d₂/2)²)  |  4a² = d₁² + d₂²  |  Inradius r = (d₁ × d₂)/(4a) = (legs product)/hypotenuse",
    "desc": "• Diagonals bisect at 90°. Right triangle with legs d₁/2 and d₂/2 has hypotenuse a.\n• Incircle radius r is altitude to hypotenuse: r = (OA × OB) / a = (d₁ × d₂) / (4a).\n• Area = (1/2)d₁d₂ = Base × Height = a × (2r).\n• Theorem 1: Parallelogram inscribed in a circle is ALWAYS a RECTANGLE.\n• Theorem 2: Parallelogram circumscribed about a circle is ALWAYS a RHOMBUS.",
    "day": "Day 1"
  },
  {
    "id": "obs1_f05",
    "title": "LCM Remainder Model 1 & Centroid Median Theorems",
    "category": "Number System & Geometry",
    "page": 17,
    "formula": "N = LCM(a, b, c) × K + r  |  (AB² + BC² + CA²)/(AD² + BE² + CF²) = 4/3  |  Area(ΔXGY) = (1/3) Area(ΔXYZ)",
    "desc": "• LCM Model 1 (Entering Another Dimension): A number divided by a, b, c leaving constant remainder r has the form N = LCM(a, b, c) × K + r (K ≥ 0 integer).\n• Centroid Area Division: Centroid G divides triangle XYZ into 3 triangles of equal area: Area(ΔXGY) = Area(ΔYGZ) = Area(ΔZGX) = (1/3) Area(ΔXYZ).\n• All 3 medians divide triangle into 6 equal triangles of area (1/6) Area(ΔXYZ).\n• Perpendicular Medians: If BE ⊥ CF, then AB² + AC² = 5 BC².\n• Area from Medians: Area(Δ) = (4/3) × Area of triangle formed with medians as sides.",
    "day": "Day 1"
  }
];

window.MATHS_OBSESSION_D1_QUESTIONS = [
  {
    "id": "obs1_01",
    "type": "Data Interpretation",
    "exam": "SSC CGL / Tier 2 High-Yield",
    "page": 1,
    "question": "The following chart shows the total number of candidates in 5 different organizations, and the line graph represents the ratio of boys and girls in these organizations. Let the total number of candidates be 60,000.\n\n• Candidates % by Organization: M = 26%, N = 18%, O = 22%, P = 15%, Q = 19% (Total = 100%)\n• Ratio of Boys to Girls (Boys / Girls):\n  - M: 0.625 (= 5/8)\n  - N: 0.8 (= 4/5)\n  - O: 1.2 (= 6/5)\n  - P: 2.0 (= 2/1)\n  - Q: 1.375 (= 11/8)\n\nIf 50% of the girl candidates transferred from organization O to organization P, then the total number of boy candidates in M is what percentage of the total number of girl candidates in organization P?\n\nयदि संगठन O से 50% महिला उम्मीदवार संगठन P में स्थानांतरित हो जाती हैं, तो M में पुरुष उम्मीदवारों की कुल संख्या संगठन P में महिला उम्मीदवारों की कुल संख्या का कितना प्रतिशत है?",
    "options": [
      "100%",
      "83%",
      "92%",
      "105%"
    ],
    "answer": "100%",
    "solution": "Step 1: Simplify by working directly with 100 percentage units (60,000 cancels out):\n\n• Organization M:\nTotal candidates = 26 units.\nRatio of Boys : Girls = 0.625 = 5 : 8.\nTotal ratio parts = 5 + 8 = 13 parts.\n13 parts = 26 units ⟹ 1 part = 2 units.\nBoy candidates in M = 5 × 2 = 10 units.\nGirl candidates in M = 8 × 2 = 16 units.\n\n• Organization O:\nTotal candidates = 22 units.\nRatio of Boys : Girls = 1.2 = 6 : 5.\nTotal ratio parts = 6 + 5 = 11 parts.\n11 parts = 22 units ⟹ 1 part = 2 units.\nInitial Girl candidates in O = 5 × 2 = 10 units.\n50% of girls transferred from O to P = 50% of 10 = 5 units.\n\n• Organization P:\nTotal candidates = 15 units.\nRatio of Boys : Girls = 2 : 1.\nTotal ratio parts = 2 + 1 = 3 parts.\n3 parts = 15 units ⟹ 1 part = 5 units.\nInitial Girl candidates in P = 1 × 5 = 5 units.\nNew Girl candidates in P after transfer = 5 + 5 = 10 units.\n\nStep 2: Percentage calculation:\nRequired Percentage = (Boys in M / New Girls in P) × 100%\n= (10 / 10) × 100% = 100%.",
    "trick": "Direct Unit Method: Ignore 60,000 completely! M has 26% with 5:8 ⟹ 13 parts = 26 ⟹ Boys(M) = 10. O has 22% with 6:5 ⟹ 11 parts = 22 ⟹ Girls(O) = 10 ⟹ 50% transfer = 5. P has 15% with 2:1 ⟹ 3 parts = 15 ⟹ Girls(P) = 5. New Girls(P) = 5 + 5 = 10. Ratio = 10 / 10 = 100% in 15 seconds!",
    "day": "Day 1"
  },
  {
    "id": "obs1_02",
    "type": "Data Interpretation",
    "exam": "SSC CGL / Tier 2 High-Yield",
    "page": 2,
    "question": "A company's actual revenue and actual expenditure (in million ₹) from 2018 to 2022 are shown in the table below. The line graph shows the predicted profit margin (in %) for the same years. In which year did the actual profit deviate the most from the profit predicted by the profit margin line graph based on the revenue and expenditure data?\n(Profit Margin = [Revenue - Expenditure] / Expenditure)\n\n• 2018: Revenue = ₹120M, Expenditure = ₹90M, Predicted Margin = 25.0%\n• 2019: Revenue = ₹150M, Expenditure = ₹110M, Predicted Margin = 20.0%\n• 2020: Revenue = ₹180M, Expenditure = ₹150M, Predicted Margin = 16.7%\n• 2021: Revenue = ₹210M, Expenditure = ₹180M, Predicted Margin = 14.3%\n• 2022: Revenue = ₹240M, Expenditure = ₹210M, Predicted Margin = 12.5%\n\nराजस्व और व्यय डेटा के आधार पर लाभ मार्जिन रेखा ग्राफ द्वारा अनुमानित लाभ से वास्तविक लाभ किस वर्ष सबसे अधिक विचलित हुआ?",
    "options": [
      "2018",
      "2021",
      "2019",
      "2020"
    ],
    "answer": "2019",
    "solution": "Step 1: Calculate Actual Profit Margin for each year:\nProfit Margin = (Revenue - Expenditure) / Expenditure\n\n• 2018:\nActual = (120 - 90)/90 = 30/90 = 1/3 = 33.33%.\nPredicted = 25.0%.\nDeviation = |33.33% - 25.0%| = 8.33%.\n\n• 2019:\nActual = (150 - 110)/110 = 40/110 = 4/11 = 36.36% (since 1/11 = 9.09%).\nPredicted = 20.0%.\nDeviation = |36.36% - 20.0%| = 16.36%.\n\n• 2020:\nActual = (180 - 150)/150 = 30/150 = 1/5 = 20.0%.\nPredicted = 16.7%.\nDeviation = |20.0% - 16.7%| = 3.3%.\n\n• 2021:\nActual = (210 - 180)/180 = 30/180 = 1/6 = 16.66%.\nPredicted = 14.3%.\nDeviation = |16.66% - 14.3%| = 2.36%.\n\n• 2022:\nActual = (240 - 210)/210 = 30/210 = 1/7 = 14.28%.\nPredicted = 12.5%.\nDeviation = |14.28% - 12.5%| = 1.78%.\n\nStep 2: Conclusion:\nThe deviation is highest in 2019 with a divergence of 16.36%.",
    "trick": "Profit Jump Inspection: Actual profit is ₹30M in all years except 2019 where it jumps to ₹40M! 40/110 = 36.36% vs predicted 20.0% gives a huge 16.36% gap! Marks 2019 in 10 seconds without computing all decimal places.",
    "day": "Day 1"
  },
  {
    "id": "obs1_03",
    "type": "Mensuration (3D)",
    "exam": "SSC CGL / Tier 2 High-Yield",
    "page": 3,
    "question": "A cylindrical container has a base radius of 4 cm. It consists of five cylindrical sections whose heights are in arithmetic progression, starting at 2 cm and ending at 10 cm. Find the total volume of the container. Use π = 3.14.\n\nएक बेलनाकार पात्र के आधार की त्रिज्या 4 cm है। इसमें पाँच बेलनाकार खंड हैं, जिनकी ऊँचाइयाँ समांतर श्रेणी (A.P.) में हैं तथा पहली ऊँचाई 2 cm और अंतिम ऊँचाई 10 cm है। पात्र का कुल आयतन ज्ञात कीजिए। π = 3.14 का प्रयोग कीजिए।",
    "options": [
      "1,507.2 cm³",
      "1,758.4 cm³",
      "2,009.6 cm³",
      "2,260.8 cm³"
    ],
    "answer": "1,507.2 cm³",
    "solution": "Step 1: Find total height (H) of the container:\nThe 5 cylindrical sections have common base radius r = 4 cm and heights in AP starting at 2 cm and ending at 10 cm.\nNumber of terms n = 5, first term a = 2 cm, last term l = 10 cm.\nTotal Height H = (n / 2) × (a + l) = (5 / 2) × (2 + 10) = (5 / 2) × 12 = 30 cm.\n(The 5 individual heights are 2 cm, 4 cm, 6 cm, 8 cm, 10 cm).\n\nStep 2: Calculate total volume:\nTotal Volume = π × r² × H\n= 3.14 × 4² × 30\n= 3.14 × 16 × 30\n= 3.14 × 480\n= 1,507.2 cm³.",
    "trick": "AP Sum + Fast Multiplication: Total height H = 5 × (2 + 10)/2 = 30 cm. Volume = 3.14 × 16 × 30 = 3.14 × 480. 3 × 480 = 1440, 0.14 × 480 = 67.2 ⟹ 1440 + 67.2 = 1,507.2 cm³ in 8 seconds!",
    "day": "Day 1"
  },
  {
    "id": "obs1_04",
    "type": "Mensuration (2D) & Geometry",
    "exam": "SSC CGL / Tier 2 High-Yield",
    "page": 6,
    "question": "A square courtyard has a side length of 24 m. At each corner of the courtyard, a quarter-circle of radius 8 m is constructed inside the square. A circular fountain of radius 4 m is placed exactly at the centre of the courtyard. The fountain does not overlap with any quarter-circle. The remaining portion of the courtyard is paved with decorative tiles and is considered the shaded region. The area (in m²) of the shaded region is:\n\nएक वर्गाकार प्रांगण (Square Courtyard) की भुजा की लंबाई 24 m है। प्रांगण के प्रत्येक कोने पर, वर्ग के अंदर 8 m त्रिज्या का एक चतुर्थांश वृत्त (Quarter-Circle) बनाया गया है। प्रांगण के ठीक केंद्र में 4 m त्रिज्या का एक वृत्ताकार फव्वारा (Circular Fountain) बनाया गया है। फव्वारा किसी भी चतुर्थांश वृत्त को अतिव्यापित (Overlap) नहीं करता है। प्रांगण के शेष भाग में सजावटी टाइलें लगाई गई हैं, जिसे छायांकित क्षेत्र (Shaded Region) माना गया है। छायांकित क्षेत्र का क्षेत्रफल (m²) कितना है?",
    "options": [
      "576 - 72π",
      "576 - 84π",
      "576 - 80π",
      "576 - 78π"
    ],
    "answer": "576 - 80π",
    "solution": "Step 1: Calculate area of the square courtyard:\nSide a = 24 m.\nArea of Square = a² = 24² = 576 m².\n\nStep 2: Calculate combined area of the 4 corner quarter-circles:\nEach corner has a quarter-circle of radius r₁ = 8 m.\n4 quarter-circles combine to form 1 complete circle of radius 8 m.\nCombined Corner Area = 4 × (1/4 × π × 8²) = π × 64 = 64π m².\n\nStep 3: Calculate area of the central circular fountain:\nRadius r₂ = 4 m.\nFountain Area = π × r₂² = π × 4² = 16π m².\n\nStep 4: Calculate shaded region area:\nShaded Area = Area of Square - (Corner Area + Fountain Area)\n= 576 - (64π + 16π)\n= 576 - 80π m².",
    "trick": "4 Quarters = 1 Full Circle: 4 corner quarter circles of r = 8 make one full circle of area 64π. Add the center fountain circle of r = 4 (area 16π). Total unshaded = 64π + 16π = 80π. Shaded = 576 - 80π immediately!",
    "day": "Day 1"
  },
  {
    "id": "obs1_05",
    "type": "Geometry & Mensuration",
    "exam": "SSC CGL / Tier 2 High-Yield",
    "page": 7,
    "question": "An equilateral triangle has a side length of 14√3 cm. A large circle (circumcircle) passes through its three corners, and a smaller circle (incircle) touches all three sides from inside. What is the area of the ring-shaped region between these two circles? (Use π = 22/7)\n\nएक समबाहु त्रिभुज (Equilateral Triangle) की भुजा की लंबाई 14√3 cm है। एक बड़ा वृत्त (Circumcircle) इसके तीनों शीर्षों से होकर गुजरता है तथा एक छोटा वृत्त (Incircle) त्रिभुज की तीनों भुजाओं को अंदर से स्पर्श करता है। इन दोनों वृत्तों के बीच बने वलयाकार क्षेत्र (Ring-shaped Region) का क्षेत्रफल कितना है? (π = 22/7 का प्रयोग कीजिए।)",
    "options": [
      "427 cm²",
      "492 cm²",
      "462 cm²",
      "483 cm²"
    ],
    "answer": "462 cm²",
    "solution": "Step 1: Find Circumradius (R) and Inradius (r):\nFor an equilateral triangle with side a = 14√3 cm:\n• Circumradius R = a / √3 = (14√3) / √3 = 14 cm.\n• Inradius r = a / (2√3) = (14√3) / (2√3) = 7 cm.\n\nStep 2: Calculate area of the ring-shaped region:\nRing Area = Area of Circumcircle - Area of Incircle\n= πR² - πr² = π(R² - r²)\n= (22 / 7) × (14² - 7²)\n= (22 / 7) × (196 - 49)\n= (22 / 7) × 147\n= 22 × 21\n= 462 cm².",
    "trick": "Golden 4:1 Ratio Shortcut: In any equilateral triangle, R : r = 2 : 1 ⟹ Area ratio = 4 : 1. The ring area is always 3 times the incircle area! Incircle with r = 7 cm has area 154 cm². Ring Area = 3 × 154 = 462 cm² mentally in 3 seconds!",
    "day": "Day 1"
  },
  {
    "id": "obs1_06",
    "type": "Geometry (Rhombus)",
    "exam": "SSC CGL / Tier 2 High-Yield",
    "page": 9,
    "question": "A circle of radius 6 cm is inscribed in a rhombus with one diagonal of length 20 cm. What is the perimeter of the rhombus?\n\n6 cm त्रिज्या वाला एक वृत्त किसी समचतुर्भुज (Rhombus) के अंदर अंतःवृत्त (Incircle) के रूप में बना हुआ है। यदि समचतुर्भुज के एक विकर्ण की लंबाई 20 cm है, तो समचतुर्भुज का परिमाप कितना होगा?",
    "options": [
      "48 cm",
      "52 cm",
      "44 cm",
      "50 cm"
    ],
    "answer": "50 cm",
    "solution": "Step 1: Understand the right-angled triangle formed by diagonals:\nIn a rhombus, diagonals bisect each other at right angles (90°).\nLet semi-diagonals be OA = d₁ / 2 = 20 / 2 = 10 cm, and OB = x cm.\nSide of rhombus a is the hypotenuse: a² = 10² + x² = 100 + x².\n\nStep 2: Incircle radius as altitude to hypotenuse:\nThe incircle touches side AB at a point of tangency. Radius r = 6 cm is perpendicular to side a.\nArea of right triangle OAB = (1/2) × OA × OB = (1/2) × a × r\n⟹ 10 × x = a × 6 ⟹ 5x = 3a ⟹ x = 3a / 5.\n\nStep 3: Solve for side a:\nSubstitute x = 3a / 5 into a² = 100 + x²:\na² = 100 + (3a / 5)² = 100 + 9a² / 25\na² - 9a² / 25 = 100 ⟹ 16a² / 25 = 100\na² = 2500 / 16 = 625 / 4 ⟹ a = 25 / 2 = 12.5 cm.\n\nStep 4: Calculate perimeter:\nPerimeter = 4a = 4 × 12.5 = 50 cm.",
    "trick": "Right Triangle Altitude Relation: Altitude h = (legs product)/hypotenuse ⟹ 6 = (10 × x) / a ⟹ 3a = 5x. By Pythagorean triplet scaling with hypotenuse a, leg 10, leg x: a = 12.5 cm. Perimeter = 4 × 12.5 = 50 cm!",
    "day": "Day 1"
  },
  {
    "id": "obs1_07",
    "type": "Statistics (Mean)",
    "exam": "SSC CGL / Tier 2 High-Yield",
    "page": 11,
    "question": "Find the arithmetic mean of the given data.\n\nClass Interval | Frequency\n0 - 8          | 4\n8 - 16         | 3\n16 - 24        | 2\n24 - 32        | 5\n32 - 40        | 2\n\nदिए गए आंकड़ों का समांतर माध्य ज्ञात कीजिए।",
    "options": [
      "19",
      "27",
      "24",
      "18"
    ],
    "answer": "19",
    "solution": "Step 1: Calculate Class Midpoints (x) and f × x:\n• 0 - 8: Midpoint x₁ = 4, Frequency f₁ = 4 ⟹ fx₁ = 16\n• 8 - 16: Midpoint x₂ = 12, Frequency f₂ = 3 ⟹ fx₂ = 36\n• 16 - 24: Midpoint x₃ = 20, Frequency f₃ = 2 ⟹ fx₃ = 40\n• 24 - 32: Midpoint x₄ = 28, Frequency f₄ = 5 ⟹ fx₄ = 140\n• 32 - 40: Midpoint x₅ = 36, Frequency f₅ = 2 ⟹ fx₅ = 72\n\nStep 2: Sum the frequencies and products:\nTotal Frequency Σf = 4 + 3 + 2 + 5 + 2 = 16.\nTotal Σfx = 16 + 36 + 40 + 140 + 72 = 304.\n\nStep 3: Direct Method Mean:\nMean = Σfx / Σf = 304 / 16 = 19.\n\nStep 4: Assumed Mean Method Verification (A = 20):\nDeviations d = x - 20: -16, -8, 0, +8, +16.\nΣfd = 4(-16) + 3(-8) + 2(0) + 5(+8) + 2(+16) = -64 - 24 + 0 + 40 + 32 = -16.\nMean = A + (Σfd / Σf) = 20 + (-16 / 16) = 20 - 1 = 19.",
    "trick": "Assumed Mean Shortcut: Take middle interval midpoint A = 20. Deviations are -16, -8, 0, +8, +16. Weighted sum Σfd = 4(-16) + 3(-8) + 5(8) + 2(16) = -88 + 72 = -16. Correction = -16 / 16 = -1. Mean = 20 - 1 = 19 in 15 seconds!",
    "day": "Day 1"
  },
  {
    "id": "obs1_08",
    "type": "Statistics (Data Sufficiency)",
    "exam": "SSC CGL / Tier 2 High-Yield",
    "page": 12,
    "question": "A researcher calculates the arithmetic mean of a grouped dataset using an assumed mean (A) of 50. Which combination of statements is sufficient to find the actual arithmetic mean?\n\nStatement I: The sum of the frequencies (Σf) is exactly 100.\nStatement II: The sum of the products of frequencies and deviations (Σfd) is +250.\nStatement III: The lowest class interval starts at 10.",
    "options": [
      "Statements I and II together are not sufficient.",
      "Statements I and II together are sufficient.",
      "Statements I and III together are sufficient.",
      "All statements I, II, and III together are necessary."
    ],
    "answer": "Statements I and II together are sufficient.",
    "solution": "Step 1: Formula for Arithmetic Mean by Assumed Mean Method:\nMean = A + (Σfd / Σf)\nwhere:\n• A = Assumed Mean\n• Σfd = Sum of products of frequencies and deviations\n• Σf = Total frequency\n\nStep 2: Evaluate given data:\n• The problem statement specifies A = 50.\n• Statement I gives: Σf = 100.\n• Statement II gives: Σfd = +250.\n\nStep 3: Compute the unique mean:\nUsing Statements I and II together:\nMean = 50 + (250 / 100) = 50 + 2.5 = 52.5.\nThe mean is uniquely determined without needing Statement III.\nTherefore, Statements I and II together are sufficient.",
    "trick": "Formula Requirement Inspection: Mean = A + Σfd / Σf. Since A is already known (50), we only require Σfd (Statement II) and Σf (Statement I). Statement III (class boundaries) is irrelevant. Option (b) instantly!",
    "day": "Day 1"
  },
  {
    "id": "obs1_09",
    "type": "Statistics (Properties)",
    "exam": "SSC CGL / Tier 2 High-Yield",
    "page": 13,
    "question": "A data set has values: 100, 110, 120, 130, 140. If you choose 120 as the assumed mean, what is the sum of deviations from the assumed mean?\n\nएक डेटा सेट में निम्नलिखित मान हैं: 100, 110, 120, 130, 140। यदि आप 120 को कल्पित माध्य (Assumed Mean) के रूप में चुनते हैं, तो कल्पित माध्य से विचलनों (Deviations) का योग कितना होगा?",
    "options": [
      "20",
      "0",
      "-20",
      "10"
    ],
    "answer": "0",
    "solution": "Step 1: Calculate deviation (d = x - A) for each data point with A = 120:\n• 100 - 120 = -20\n• 110 - 120 = -10\n• 120 - 120 = 0\n• 130 - 120 = +10\n• 140 - 120 = +20\n\nStep 2: Sum the deviations:\nSum of deviations = (-20) + (-10) + 0 + (+10) + (+20) = 0.\n\nStep 3: Fundamental Statistical Theorem:\nThe sum of deviations of any data set taken from its actual arithmetic mean is ALWAYS identically zero (Σ(x - x̄) = 0). Since 120 is the exact arithmetic mean of the symmetric dataset {100, 110, 120, 130, 140}, the sum of deviations must equal 0.",
    "trick": "Universal Property: The values form an AP centered at 120, so 120 is the true mean. By definition, sum of deviations from the true mean is ALWAYS 0! Marked in 1 second.",
    "day": "Day 1"
  },
  {
    "id": "obs1_10",
    "type": "Profit & Loss",
    "exam": "SSC CGL / Tier 2 High-Yield",
    "page": 14,
    "question": "A shopkeeper claims that he sells rock salt at ₹14 per kg, which costs him ₹40 per kg. But he gives 517 g instead of 1551 g. What is his percentage profit or loss?\n\nएक दुकानदार दावा करता है कि वह सेंधा नमक ₹14 प्रति kg की दर से बेचता है, जबकि उसे इसकी कीमत ₹40 प्रति kg पड़ती है। लेकिन वह 1551 g के स्थान पर केवल 517 g नमक देता है। उसका लाभ या हानि प्रतिशत कितना है?",
    "options": [
      "Loss of 2% (2% की हानि)",
      "Profit of 5% (5% का लाभ)",
      "Profit of 6% (6% का लाभ)",
      "Loss of 4% (4% की हानि)"
    ],
    "answer": "Profit of 5% (5% का लाभ)",
    "solution": "Step 1: Price factor ratio (CP to SP):\nClaims selling at SP = ₹14 for goods costing CP = ₹40.\nRatio CP : SP = 40 : 14 = 20 : 7.\n\nStep 2: Weight factor ratio:\nDelivers only 517 g while charging for 1551 g.\nNote that 1551 = 3 × 517 (a clean 1 : 3 ratio).\nRatio CP : SP = 517 : 1551 = 1 : 3.\n\nStep 3: Combine both factors by multiplying ratios:\nOverall CP : SP = (20 × 1) : (7 × 3) = 20 : 21.\n\nStep 4: Calculate percentage profit:\nProfit = 21 - 20 = 1 unit on CP of 20.\nPercentage Profit = (1 / 20) × 100% = 5% profit.",
    "trick": "Vishesh Sir's Compounding Shortcut: Price factor: 40 : 14 = 20 : 7. Weight factor: 517 : 1551 = 1 : 3. Compounded CP : SP = (20 × 1) : (7 × 3) = 20 : 21. Net gain = 1/20 = 5% profit in 10 seconds flat!",
    "day": "Day 1"
  },
  {
    "id": "obs1_11",
    "type": "Profit & Loss",
    "exam": "SSC CGL / Tier 2 High-Yield",
    "page": 15,
    "question": "94. Ramesh sells rice at ₹36 per kg, which he purchased for ₹30 per kg. Moreover, he gives only 800 g of rice instead of 1 kg while selling. Find the actual profit percentage of Ramesh?\n\nरमेश ₹36 प्रति किलो चावल बेचता है, जिसे उसने ₹30 प्रति किलो खरीदा था। इसके अलावा, वह बेचते समय 1 किलो के बजाय केवल 800 ग्राम चावल देता है। रमेश का वास्तविक लाभ प्रतिशत ज्ञात करें।",
    "options": [
      "46%",
      "50%",
      "48%",
      "52%"
    ],
    "answer": "50%",
    "solution": "Step 1: Price factor ratio (CP to SP):\nCP = ₹30, SP = ₹36.\nRatio CP : SP = 30 : 36 = 5 : 6.\n\nStep 2: Weight factor ratio:\nHe gives 800 g instead of 1000 g.\nRatio CP : SP = 800 : 1000 = 4 : 5.\n\nStep 3: Combine both factors:\nOverall CP : SP = (5 × 4) : (6 × 5) = 20 : 30 = 2 : 3.\n\nStep 4: Calculate profit percentage:\nProfit = 3 - 2 = 1 unit on CP of 2.\nProfit Percentage = (1 / 2) × 100% = 50%.",
    "trick": "Cross-Cancellation of Ratio: Price = 5 : 6; Weight = 4 : 5. The 5 cancels out! Ratio becomes 4 : 6 = 2 : 3. Increase = 1 on 2 = 50% profit mentally!",
    "day": "Day 1"
  },
  {
    "id": "obs1_12",
    "type": "Number System",
    "exam": "SSC CGL / Tier 2 High-Yield",
    "page": 16,
    "question": "What is the smallest natural number which, when divided by 6, 8, and 10, leaves a remainder of 3 in each case?\n\nसबसे छोटी प्राकृतिक संख्या कौन-सी है, जिसे 6, 8 और 10 से विभाजित करने पर प्रत्येक स्थिति में 3 शेष बचता है?",
    "options": [
      "243",
      "117",
      "123",
      "131"
    ],
    "answer": "123",
    "solution": "Step 1: General form for constant remainder:\nAny number leaving remainder r when divided by divisors a, b, c has the form:\nN = LCM(a, b, c) × K + r (where K is an integer ≥ 1 for natural numbers).\n\nStep 2: Find LCM(6, 8, 10):\n• 6 = 2 × 3\n• 8 = 2³\n• 10 = 2 × 5\nLCM = 2³ × 3 × 5 = 8 × 15 = 120.\n\nStep 3: Smallest natural number:\nSubstitute K = 1:\nN = 120 × 1 + 3 = 123.\n\nVerification:\n• 123 / 6 = 20 (remainder 3)\n• 123 / 8 = 15 (remainder 3)\n• 123 / 10 = 12 (remainder 3).",
    "trick": "LCM + Remainder: LCM(6, 8, 10) = 120. Smallest natural number = 120 + 3 = 123. Checked in 2 seconds!",
    "day": "Day 1"
  },
  {
    "id": "obs1_13",
    "type": "Number System",
    "exam": "SSC CPO 2019 Pre",
    "page": 18,
    "question": "Q23. Let x be the least 4-digit number which, when divided by 2, 3, 4, 5, 6 and 7, leaves a remainder of 1 in each case. If x lies between 2800 and 3000, then what is the sum of the digits of x?\n\nQ23. मान लीजिए x वह सबसे छोटी 4 अंकों की संख्या है जिसे 2, 3, 4, 5, 6 और 7 से भाग देने पर प्रत्येक स्थिति में शेषफल 1 प्राप्त होता है। यदि x, 2800 और 3000 के बीच है, तो x के अंकों का योग क्या है? (CPO 2019 - Pre)",
    "options": [
      "15",
      "16",
      "12",
      "13"
    ],
    "answer": "16",
    "solution": "Step 1: Find LCM of divisors (2, 3, 4, 5, 6, 7):\n• 2 = 2\n• 3 = 3\n• 4 = 2²\n• 5 = 5\n• 6 = 2 × 3\n• 7 = 7\nLCM = 4 × 3 × 5 × 7 = 420.\n\nStep 2: General form of number:\nx = 420 × K + 1.\n\nStep 3: Range constraint (2800 < x < 3000):\nTest integer multiples of 420:\n• For K = 6: 420 × 6 = 2520 (below range)\n• For K = 7: 420 × 7 = 2940 ⟹ x = 2940 + 1 = 2941 (within 2800 and 3000)\n• For K = 8: 420 × 8 = 3360 (above range)\nThus, x = 2941.\n\nStep 4: Sum of digits of x:\nSum of digits of 2941 = 2 + 9 + 4 + 1 = 16.",
    "trick": "420 Multiplier Inspection: 420 × 7 = 2940. Number = 2940 + 1 = 2941. Sum of digits = 2 + 9 + 4 + 1 = 16!",
    "day": "Day 1"
  },
  {
    "id": "obs1_14",
    "type": "Number System",
    "exam": "SSC CPO 2019 Pre",
    "page": 19,
    "question": "Q25. Let x be the least number divisible by 13 such that when x is divided by 4, 5, 6, 7, 8 and 12, the remainder in each case is 2. The sum of the digits of x is:\n\nQ25. मान लीजिए x वह सबसे छोटी संख्या है जो 13 से विभाज्य है तथा जब x को 4, 5, 6, 7, 8 और 12 से भाग दिया जाता है, तो प्रत्येक स्थिति में शेषफल 2 प्राप्त होता है। x के अंकों का योग क्या है? (CPO 2019 - Pre)",
    "options": [
      "11",
      "8",
      "9",
      "10"
    ],
    "answer": "11",
    "solution": "Step 1: Find LCM of divisors (4, 5, 6, 7, 8, 12):\n• 4 = 2²\n• 5 = 5\n• 6 = 2 × 3\n• 7 = 7\n• 8 = 2³\n• 12 = 2² × 3\nLCM = 2³ × 3 × 5 × 7 = 8 × 105 = 840.\n\nStep 2: General form of number:\nx = 840k + 2.\n\nStep 3: Apply divisibility by 13:\nDivide 840 by 13: 840 = 13 × 64 + 8.\nSo 840k + 2 = 13(64k) + (8k + 2).\nFor x to be divisible by 13, (8k + 2) must be divisible by 13.\n\nStep 4: Test integer values of k:\n• k = 1: 8(1) + 2 = 10 (not divisible by 13)\n• k = 2: 8(2) + 2 = 18 (not divisible by 13)\n• k = 3: 8(3) + 2 = 26 = 13 × 2 (divisible by 13!)\n\nStep 5: Compute x and its sum of digits:\nx = 840 × 3 + 2 = 2520 + 2 = 2522.\nVerification: 2522 / 13 = 194.\nSum of digits = 2 + 5 + 2 + 2 = 11.",
    "trick": "Remainder Splitting: 840 = 13 × 64 + 8. Check (8k + 2) / 13. At k = 3, 8(3)+2 = 26 (divisible!). x = 840×3 + 2 = 2522. Sum = 2+5+2+2 = 11 in 20 seconds!",
    "day": "Day 1"
  },
  {
    "id": "obs1_15",
    "type": "Geometry (Lines & Angles)",
    "exam": "SSC CGL / Tier 2 High-Yield",
    "page": 20,
    "question": "Two parallel lines are cut by a transversal. If one alternate interior angle measures (5x - 8)° and the other measures (2x + 46)°, what is the value of x?\n\nदो समानांतर रेखाओं को एक तिर्यक रेखा (Transversal) काटती है। यदि एक एकांतर अंतः कोण (Alternate Interior Angle) का माप (5x - 8)° तथा दूसरे का माप (2x + 46)° है, तो x का मान ज्ञात कीजिए।",
    "options": [
      "12",
      "18",
      "20",
      "14"
    ],
    "answer": "18",
    "solution": "Step 1: Understand Alternate Interior Angle Theorem:\nWhen two parallel lines are intersected by a transversal, alternate interior angles (the 'Z' configuration angles) are strictly equal to each other.\n\nStep 2: Equate both angles:\n5x - 8 = 2x + 46\n\nStep 3: Solve for x:\n5x - 2x = 46 + 8\n3x = 54\nx = 54 / 3 = 18.\n\nStep 4: Verification:\nAngle 1 = 5(18) - 8 = 90 - 8 = 82°.\nAngle 2 = 2(18) + 46 = 36 + 46 = 82°.\nBoth angles equal 82°, confirming x = 18.",
    "trick": "Direct Z-Angle Equating: 5x - 8 = 2x + 46 ⟹ 3x = 54 ⟹ x = 18. Calculated in 3 seconds!",
    "day": "Day 1"
  },
  {
    "id": "obs1_16",
    "type": "Coordinate Geometry",
    "exam": "SSC CGL / Tier 2 High-Yield",
    "page": 21,
    "question": "The coordinates of a triangle are A(1, 2), B(4, 6), and C(k, 10). If the area of the triangle is 15 square units, then the possible value(s) of k is (are):\n\nएक त्रिभुज के शीर्षों के निर्देशांक A(1, 2), B(4, 6) और C(k, 10) हैं। यदि त्रिभुज का क्षेत्रफल 15 वर्ग इकाई है, तो k के संभावित मान क्या हैं?",
    "options": [
      "14.5 only",
      "-1 and 29",
      "-0.5 and 14.5",
      "-0.5 only"
    ],
    "answer": "-0.5 and 14.5",
    "solution": "Step 1: Origin Shift Shortcut:\nSubtract coordinates of A(1, 2) from all three vertices to shift A to origin (0, 0):\n• A'(0, 0)\n• B'(4 - 1, 6 - 2) = (3, 4)\n• C'(k - 1, 10 - 2) = (k - 1, 8)\n\nStep 2: Apply origin triangle area formula:\nArea = (1/2) × |x₁y₂ - x₂y₁|\n15 = (1/2) × |3 × 8 - 4 × (k - 1)|\n30 = |24 - 4k + 4|\n30 = |28 - 4k|\n\nStep 3: Solve absolute value cases:\n• Case 1: 28 - 4k = 30\n4k = 28 - 30 = -2 ⟹ k = -2/4 = -0.5\n\n• Case 2: 28 - 4k = -30\n4k = 28 + 30 = 58 ⟹ k = 58/4 = 14.5\n\nTherefore, the possible values of k are -0.5 and 14.5.",
    "trick": "Zero Shift Shortcut: Shift (1, 2) to (0, 0) ⟹ other points become (3, 4) and (k-1, 8). Cross-multiply: |3(8) - 4(k-1)| = 2 × 15 = 30 ⟹ |28 - 4k| = 30 ⟹ 28 - 4k = ±30 ⟹ k = -0.5 or 14.5. Never use the long formula!",
    "day": "Day 1"
  },
  {
    "id": "obs1_17",
    "type": "Coordinate Geometry",
    "exam": "SSC CGL Expected",
    "page": 22,
    "question": "Q28. Find the area of the triangle whose coordinates are A(1, 2), B(-4, -3) and C(4, 1)?\n\nउस त्रिभुज का क्षेत्रफल ज्ञात कीजिए जिसके शीर्षों के निर्देशांक A(1, 2), B(-4, -3) और C(4, 1) हैं?\n(SSC CGL)",
    "options": [
      "7 square units",
      "10 square units",
      "14 square units",
      "8 square units"
    ],
    "answer": "10 square units",
    "solution": "Step 1: Origin Shift Method (Zero Shifting):\nSubtract coordinates of A(1, 2) from all vertices:\n• A'(1 - 1, 2 - 2) = (0, 0)\n• B'(-4 - 1, -3 - 2) = (-5, -5)\n• C'(4 - 1, 1 - 2) = (3, -1)\n\nStep 2: Calculate Area from Origin:\nArea = (1/2) × |x₁y₂ - x₂y₁|\n= (1/2) × |(-5)(-1) - (-5)(3)|\n= (1/2) × |5 - (-15)|\n= (1/2) × |5 + 15|\n= (1/2) × 20 = 10 square units.\n\nStep 3: Shoelace Formula Verification:\nArea = (1/2) |[1(-3) + (-4)(1) + 4(2)] - [2(-4) + (-3)(4) + 1(1)]|\n= (1/2) |[-3 - 4 + 8] - [-8 - 12 + 1]|\n= (1/2) |1 - (-19)| = (1/2) × 20 = 10 square units.",
    "trick": "Zero Shifting Shortcut: Shift (1, 2) to (0, 0) ⟹ B becomes (-5, -5) and C becomes (3, -1). Area = (1/2)|(-5)(-1) - (-5)(3)| = (1/2)|5 + 15| = 10 square units in 10 seconds flat!",
    "day": "Day 1"
  },
  {
    "id": "obs1_18",
    "type": "Geometry (Centroid & Medians)",
    "exam": "SSC CGL / Tier 2 High-Yield",
    "page": 23,
    "question": "In triangle XYZ, the medians from X and Y intersect at point G. If the area of triangle XYZ is 54 square units, what is the area (in square units) of triangle XGY?\n\nत्रिभुज XYZ में, शीर्ष X और Y से खींची गई माध्यिकाएँ (Medians) बिंदु G पर प्रतिच्छेद करती हैं। यदि त्रिभुज XYZ का क्षेत्रफल 54 वर्ग इकाई है, तो त्रिभुज XGY का क्षेत्रफल (वर्ग इकाई में) कितना होगा?",
    "options": [
      "9",
      "36",
      "18",
      "12"
    ],
    "answer": "18",
    "solution": "Step 1: Centroid definition:\nThe point of intersection of the medians of a triangle is its centroid (G).\n\nStep 2: Area division properties of the Centroid:\n• The centroid divides the area of the entire triangle into three equal triangles formed by joining G to each vertex: Area(ΔXGY) = Area(ΔYGZ) = Area(ΔZGX) = (1/3) × Area(ΔXYZ).\n• If all 3 medians are drawn, the triangle is divided into 6 equal small triangles, each having area = (1/6) × Area(ΔXYZ).\n\nStep 3: Calculate Area(ΔXGY):\nArea(ΔXGY) = (1/3) × 54 = 18 square units.\n(Alternatively: ΔXGY comprises 2 of the 6 small triangles: 2 × (54 / 6) = 2 × 9 = 18 square units).",
    "trick": "Centroid 1/3 Rule: Any triangle formed by the centroid and two vertices of ΔXYZ has exactly 1/3 of the total area! Area = 54 / 3 = 18 square units immediately!",
    "day": "Day 1"
  },
  {
    "id": "obs1_19",
    "type": "Number System & AP",
    "exam": "SSC CGL / Tier 2 High-Yield",
    "page": 24,
    "question": "What is the average of all integers between 100 and 250 that are exactly divisible by 11?\n\n100 और 250 के बीच उन सभी पूर्णांकों का औसत क्या है, जो 11 से पूर्णतः विभाज्य हैं?",
    "options": [
      "146",
      "176",
      "186",
      "196"
    ],
    "answer": "176",
    "solution": "Step 1: Determine the first and last integer in the range:\n• Smallest integer > 100 divisible by 11: 100 / 11 = 9.09 ⟹ 11 × 10 = 110.\nFirst term a = 110.\n• Largest integer < 250 divisible by 11: 250 / 11 = 22.72 ⟹ 11 × 22 = 242.\nLast term l = 242.\n\nStep 2: Arithmetic Progression Average Property:\nSince consecutive multiples of 11 form an AP with common difference d = 11, the average of an AP is always simply the average of its first and last terms:\nAverage = (First term + Last term) / 2\n= (110 + 242) / 2\n= 352 / 2 = 176.\n\n(Verification: Number of terms n = (242 - 110)/11 + 1 = 13. Sum = (13/2) × (110 + 242) = 13 × 176 = 2288. Average = 2288 / 13 = 176).",
    "trick": "(First + Last) / 2 AP Rule: First multiple = 110, last multiple = 242. Average = (110 + 242) / 2 = 352 / 2 = 176. No need to sum all terms or calculate n! Done in 5 seconds.",
    "day": "Day 1"
  }
];

window.MATHS_OBSESSION_D1_DATA = {
  "title": "Maths Obsession Day 1 • Maths Maestro",
  "instructor": "Vishesh Shukla",
  "total_questions": 19,
  "total_formulas": 5,
  "formulas": [
    {
      "id": "obs1_f01",
      "title": "Right Circular Cylinder & Prism Metric Relations",
      "category": "3D Mensuration",
      "page": 4,
      "formula": "Volume = πr²h  |  CSA = 2πrh  |  TSA = 2πr(h + r)  |  Prism Volume = Base Area × h",
      "desc": "• Prism Identity: Volume = Base Area × Height; LSA = Perimeter of Base × Height; TSA = LSA + 2 × (Base Area).\n• Cylinder: Circular prism with base area πr² and perimeter 2πr. Unfolded CSA forms a rectangle of dimensions (2πr) × h.\n• Golden Radius Table (π = 22/7):\n  - r = 7 ⟹ Circumference = 44, Area = 154\n  - r = 10.5 (7 × 3/2) ⟹ Circumference = 66, Area = 346.5 (154 × 9/4)\n  - r = 14 (7 × 2) ⟹ Circumference = 88, Area = 616 (154 × 4)\n  - r = 21 (7 × 3) ⟹ Circumference = 132, Area = 1386 (154 × 9)",
      "day": "Day 1"
    },
    {
      "id": "obs1_f02",
      "title": "Hollow Cylinder (खोखला बेलन) Metric Identities",
      "category": "3D Mensuration",
      "page": 5,
      "formula": "Volume = πh(R² - r²)  |  CSA = 2πh(R + r)  |  TSA = 2π(R + r)(h + R - r)  |  Thickness t = R - r",
      "desc": "• Parameters: External radius = R, Internal radius = r, Thickness t = R - r, Height = h.\n• Material Volume: V = πh(R² - r²) = πh(R + r)(R - r) = πh·t(R + r).\n• Curved Surface Area (CSA): External CSA + Internal CSA = 2πRh + 2πrh = 2πh(R + r).\n• Flat Base Rings Area (both ends): 2 × π(R² - r²).\n• Total Surface Area (TSA): CSA + 2 × Base Area = 2πh(R + r) + 2π(R² - r²) = 2π(R + r)[h + (R - r)] = 2π(R + r)(h + t).",
      "day": "Day 1"
    },
    {
      "id": "obs1_f03",
      "title": "Equilateral Triangle Advanced Metric & Geometric Properties",
      "category": "Geometry & Mensuration",
      "page": 8,
      "formula": "Height h = (√3/2)a  |  Area = (√3/4)a²  |  R = a/√3 = (2/3)h  |  r = a/(2√3) = (1/3)h  |  R : r = 2 : 1",
      "desc": "• Centers Invariant: Centroid (G), Incenter (I), Circumcenter (O), and Orthocenter (H) all coincide!\n• Ratio R : r = 2 : 1 ⟹ Area of Circumcircle : Area of Incircle = 4 : 1.\n• Interior Point Perpendiculars: For any point P inside ΔABC with perpendiculars h₁, h₂, h₃ to the 3 sides: h = h₁ + h₂ + h₃ = (√3/2)a ⟹ a = (2/√3)(h₁ + h₂ + h₃).\n• Inscribed Square: Side of square x = (Base × Height)/(Base + Height) = (√3 a)/(2 + √3) = (2√3 - 3)a.\n• Corner Circles: Circle inscribed in corner touching 2 sides and incircle has radius ratio 1 : 3 (r_small = r/3) and area ratio 1 : 9.",
      "day": "Day 1"
    },
    {
      "id": "obs1_f04",
      "title": "Rhombus Incircle & Parallelogram Invariant Theorems",
      "category": "Geometry",
      "page": 9,
      "formula": "Side a = √((d₁/2)² + (d₂/2)²)  |  4a² = d₁² + d₂²  |  Inradius r = (d₁ × d₂)/(4a) = (legs product)/hypotenuse",
      "desc": "• Diagonals bisect at 90°. Right triangle with legs d₁/2 and d₂/2 has hypotenuse a.\n• Incircle radius r is altitude to hypotenuse: r = (OA × OB) / a = (d₁ × d₂) / (4a).\n• Area = (1/2)d₁d₂ = Base × Height = a × (2r).\n• Theorem 1: Parallelogram inscribed in a circle is ALWAYS a RECTANGLE.\n• Theorem 2: Parallelogram circumscribed about a circle is ALWAYS a RHOMBUS.",
      "day": "Day 1"
    },
    {
      "id": "obs1_f05",
      "title": "LCM Remainder Model 1 & Centroid Median Theorems",
      "category": "Number System & Geometry",
      "page": 17,
      "formula": "N = LCM(a, b, c) × K + r  |  (AB² + BC² + CA²)/(AD² + BE² + CF²) = 4/3  |  Area(ΔXGY) = (1/3) Area(ΔXYZ)",
      "desc": "• LCM Model 1 (Entering Another Dimension): A number divided by a, b, c leaving constant remainder r has the form N = LCM(a, b, c) × K + r (K ≥ 0 integer).\n• Centroid Area Division: Centroid G divides triangle XYZ into 3 triangles of equal area: Area(ΔXGY) = Area(ΔYGZ) = Area(ΔZGX) = (1/3) Area(ΔXYZ).\n• All 3 medians divide triangle into 6 equal triangles of area (1/6) Area(ΔXYZ).\n• Perpendicular Medians: If BE ⊥ CF, then AB² + AC² = 5 BC².\n• Area from Medians: Area(Δ) = (4/3) × Area of triangle formed with medians as sides.",
      "day": "Day 1"
    }
  ],
  "questions": [
    {
      "id": "obs1_01",
      "type": "Data Interpretation",
      "exam": "SSC CGL / Tier 2 High-Yield",
      "page": 1,
      "question": "The following chart shows the total number of candidates in 5 different organizations, and the line graph represents the ratio of boys and girls in these organizations. Let the total number of candidates be 60,000.\n\n• Candidates % by Organization: M = 26%, N = 18%, O = 22%, P = 15%, Q = 19% (Total = 100%)\n• Ratio of Boys to Girls (Boys / Girls):\n  - M: 0.625 (= 5/8)\n  - N: 0.8 (= 4/5)\n  - O: 1.2 (= 6/5)\n  - P: 2.0 (= 2/1)\n  - Q: 1.375 (= 11/8)\n\nIf 50% of the girl candidates transferred from organization O to organization P, then the total number of boy candidates in M is what percentage of the total number of girl candidates in organization P?\n\nयदि संगठन O से 50% महिला उम्मीदवार संगठन P में स्थानांतरित हो जाती हैं, तो M में पुरुष उम्मीदवारों की कुल संख्या संगठन P में महिला उम्मीदवारों की कुल संख्या का कितना प्रतिशत है?",
      "options": [
        "100%",
        "83%",
        "92%",
        "105%"
      ],
      "answer": "100%",
      "solution": "Step 1: Simplify by working directly with 100 percentage units (60,000 cancels out):\n\n• Organization M:\nTotal candidates = 26 units.\nRatio of Boys : Girls = 0.625 = 5 : 8.\nTotal ratio parts = 5 + 8 = 13 parts.\n13 parts = 26 units ⟹ 1 part = 2 units.\nBoy candidates in M = 5 × 2 = 10 units.\nGirl candidates in M = 8 × 2 = 16 units.\n\n• Organization O:\nTotal candidates = 22 units.\nRatio of Boys : Girls = 1.2 = 6 : 5.\nTotal ratio parts = 6 + 5 = 11 parts.\n11 parts = 22 units ⟹ 1 part = 2 units.\nInitial Girl candidates in O = 5 × 2 = 10 units.\n50% of girls transferred from O to P = 50% of 10 = 5 units.\n\n• Organization P:\nTotal candidates = 15 units.\nRatio of Boys : Girls = 2 : 1.\nTotal ratio parts = 2 + 1 = 3 parts.\n3 parts = 15 units ⟹ 1 part = 5 units.\nInitial Girl candidates in P = 1 × 5 = 5 units.\nNew Girl candidates in P after transfer = 5 + 5 = 10 units.\n\nStep 2: Percentage calculation:\nRequired Percentage = (Boys in M / New Girls in P) × 100%\n= (10 / 10) × 100% = 100%.",
      "trick": "Direct Unit Method: Ignore 60,000 completely! M has 26% with 5:8 ⟹ 13 parts = 26 ⟹ Boys(M) = 10. O has 22% with 6:5 ⟹ 11 parts = 22 ⟹ Girls(O) = 10 ⟹ 50% transfer = 5. P has 15% with 2:1 ⟹ 3 parts = 15 ⟹ Girls(P) = 5. New Girls(P) = 5 + 5 = 10. Ratio = 10 / 10 = 100% in 15 seconds!",
      "day": "Day 1"
    },
    {
      "id": "obs1_02",
      "type": "Data Interpretation",
      "exam": "SSC CGL / Tier 2 High-Yield",
      "page": 2,
      "question": "A company's actual revenue and actual expenditure (in million ₹) from 2018 to 2022 are shown in the table below. The line graph shows the predicted profit margin (in %) for the same years. In which year did the actual profit deviate the most from the profit predicted by the profit margin line graph based on the revenue and expenditure data?\n(Profit Margin = [Revenue - Expenditure] / Expenditure)\n\n• 2018: Revenue = ₹120M, Expenditure = ₹90M, Predicted Margin = 25.0%\n• 2019: Revenue = ₹150M, Expenditure = ₹110M, Predicted Margin = 20.0%\n• 2020: Revenue = ₹180M, Expenditure = ₹150M, Predicted Margin = 16.7%\n• 2021: Revenue = ₹210M, Expenditure = ₹180M, Predicted Margin = 14.3%\n• 2022: Revenue = ₹240M, Expenditure = ₹210M, Predicted Margin = 12.5%\n\nराजस्व और व्यय डेटा के आधार पर लाभ मार्जिन रेखा ग्राफ द्वारा अनुमानित लाभ से वास्तविक लाभ किस वर्ष सबसे अधिक विचलित हुआ?",
      "options": [
        "2018",
        "2021",
        "2019",
        "2020"
      ],
      "answer": "2019",
      "solution": "Step 1: Calculate Actual Profit Margin for each year:\nProfit Margin = (Revenue - Expenditure) / Expenditure\n\n• 2018:\nActual = (120 - 90)/90 = 30/90 = 1/3 = 33.33%.\nPredicted = 25.0%.\nDeviation = |33.33% - 25.0%| = 8.33%.\n\n• 2019:\nActual = (150 - 110)/110 = 40/110 = 4/11 = 36.36% (since 1/11 = 9.09%).\nPredicted = 20.0%.\nDeviation = |36.36% - 20.0%| = 16.36%.\n\n• 2020:\nActual = (180 - 150)/150 = 30/150 = 1/5 = 20.0%.\nPredicted = 16.7%.\nDeviation = |20.0% - 16.7%| = 3.3%.\n\n• 2021:\nActual = (210 - 180)/180 = 30/180 = 1/6 = 16.66%.\nPredicted = 14.3%.\nDeviation = |16.66% - 14.3%| = 2.36%.\n\n• 2022:\nActual = (240 - 210)/210 = 30/210 = 1/7 = 14.28%.\nPredicted = 12.5%.\nDeviation = |14.28% - 12.5%| = 1.78%.\n\nStep 2: Conclusion:\nThe deviation is highest in 2019 with a divergence of 16.36%.",
      "trick": "Profit Jump Inspection: Actual profit is ₹30M in all years except 2019 where it jumps to ₹40M! 40/110 = 36.36% vs predicted 20.0% gives a huge 16.36% gap! Marks 2019 in 10 seconds without computing all decimal places.",
      "day": "Day 1"
    },
    {
      "id": "obs1_03",
      "type": "Mensuration (3D)",
      "exam": "SSC CGL / Tier 2 High-Yield",
      "page": 3,
      "question": "A cylindrical container has a base radius of 4 cm. It consists of five cylindrical sections whose heights are in arithmetic progression, starting at 2 cm and ending at 10 cm. Find the total volume of the container. Use π = 3.14.\n\nएक बेलनाकार पात्र के आधार की त्रिज्या 4 cm है। इसमें पाँच बेलनाकार खंड हैं, जिनकी ऊँचाइयाँ समांतर श्रेणी (A.P.) में हैं तथा पहली ऊँचाई 2 cm और अंतिम ऊँचाई 10 cm है। पात्र का कुल आयतन ज्ञात कीजिए। π = 3.14 का प्रयोग कीजिए।",
      "options": [
        "1,507.2 cm³",
        "1,758.4 cm³",
        "2,009.6 cm³",
        "2,260.8 cm³"
      ],
      "answer": "1,507.2 cm³",
      "solution": "Step 1: Find total height (H) of the container:\nThe 5 cylindrical sections have common base radius r = 4 cm and heights in AP starting at 2 cm and ending at 10 cm.\nNumber of terms n = 5, first term a = 2 cm, last term l = 10 cm.\nTotal Height H = (n / 2) × (a + l) = (5 / 2) × (2 + 10) = (5 / 2) × 12 = 30 cm.\n(The 5 individual heights are 2 cm, 4 cm, 6 cm, 8 cm, 10 cm).\n\nStep 2: Calculate total volume:\nTotal Volume = π × r² × H\n= 3.14 × 4² × 30\n= 3.14 × 16 × 30\n= 3.14 × 480\n= 1,507.2 cm³.",
      "trick": "AP Sum + Fast Multiplication: Total height H = 5 × (2 + 10)/2 = 30 cm. Volume = 3.14 × 16 × 30 = 3.14 × 480. 3 × 480 = 1440, 0.14 × 480 = 67.2 ⟹ 1440 + 67.2 = 1,507.2 cm³ in 8 seconds!",
      "day": "Day 1"
    },
    {
      "id": "obs1_04",
      "type": "Mensuration (2D) & Geometry",
      "exam": "SSC CGL / Tier 2 High-Yield",
      "page": 6,
      "question": "A square courtyard has a side length of 24 m. At each corner of the courtyard, a quarter-circle of radius 8 m is constructed inside the square. A circular fountain of radius 4 m is placed exactly at the centre of the courtyard. The fountain does not overlap with any quarter-circle. The remaining portion of the courtyard is paved with decorative tiles and is considered the shaded region. The area (in m²) of the shaded region is:\n\nएक वर्गाकार प्रांगण (Square Courtyard) की भुजा की लंबाई 24 m है। प्रांगण के प्रत्येक कोने पर, वर्ग के अंदर 8 m त्रिज्या का एक चतुर्थांश वृत्त (Quarter-Circle) बनाया गया है। प्रांगण के ठीक केंद्र में 4 m त्रिज्या का एक वृत्ताकार फव्वारा (Circular Fountain) बनाया गया है। फव्वारा किसी भी चतुर्थांश वृत्त को अतिव्यापित (Overlap) नहीं करता है। प्रांगण के शेष भाग में सजावटी टाइलें लगाई गई हैं, जिसे छायांकित क्षेत्र (Shaded Region) माना गया है। छायांकित क्षेत्र का क्षेत्रफल (m²) कितना है?",
      "options": [
        "576 - 72π",
        "576 - 84π",
        "576 - 80π",
        "576 - 78π"
      ],
      "answer": "576 - 80π",
      "solution": "Step 1: Calculate area of the square courtyard:\nSide a = 24 m.\nArea of Square = a² = 24² = 576 m².\n\nStep 2: Calculate combined area of the 4 corner quarter-circles:\nEach corner has a quarter-circle of radius r₁ = 8 m.\n4 quarter-circles combine to form 1 complete circle of radius 8 m.\nCombined Corner Area = 4 × (1/4 × π × 8²) = π × 64 = 64π m².\n\nStep 3: Calculate area of the central circular fountain:\nRadius r₂ = 4 m.\nFountain Area = π × r₂² = π × 4² = 16π m².\n\nStep 4: Calculate shaded region area:\nShaded Area = Area of Square - (Corner Area + Fountain Area)\n= 576 - (64π + 16π)\n= 576 - 80π m².",
      "trick": "4 Quarters = 1 Full Circle: 4 corner quarter circles of r = 8 make one full circle of area 64π. Add the center fountain circle of r = 4 (area 16π). Total unshaded = 64π + 16π = 80π. Shaded = 576 - 80π immediately!",
      "day": "Day 1"
    },
    {
      "id": "obs1_05",
      "type": "Geometry & Mensuration",
      "exam": "SSC CGL / Tier 2 High-Yield",
      "page": 7,
      "question": "An equilateral triangle has a side length of 14√3 cm. A large circle (circumcircle) passes through its three corners, and a smaller circle (incircle) touches all three sides from inside. What is the area of the ring-shaped region between these two circles? (Use π = 22/7)\n\nएक समबाहु त्रिभुज (Equilateral Triangle) की भुजा की लंबाई 14√3 cm है। एक बड़ा वृत्त (Circumcircle) इसके तीनों शीर्षों से होकर गुजरता है तथा एक छोटा वृत्त (Incircle) त्रिभुज की तीनों भुजाओं को अंदर से स्पर्श करता है। इन दोनों वृत्तों के बीच बने वलयाकार क्षेत्र (Ring-shaped Region) का क्षेत्रफल कितना है? (π = 22/7 का प्रयोग कीजिए।)",
      "options": [
        "427 cm²",
        "492 cm²",
        "462 cm²",
        "483 cm²"
      ],
      "answer": "462 cm²",
      "solution": "Step 1: Find Circumradius (R) and Inradius (r):\nFor an equilateral triangle with side a = 14√3 cm:\n• Circumradius R = a / √3 = (14√3) / √3 = 14 cm.\n• Inradius r = a / (2√3) = (14√3) / (2√3) = 7 cm.\n\nStep 2: Calculate area of the ring-shaped region:\nRing Area = Area of Circumcircle - Area of Incircle\n= πR² - πr² = π(R² - r²)\n= (22 / 7) × (14² - 7²)\n= (22 / 7) × (196 - 49)\n= (22 / 7) × 147\n= 22 × 21\n= 462 cm².",
      "trick": "Golden 4:1 Ratio Shortcut: In any equilateral triangle, R : r = 2 : 1 ⟹ Area ratio = 4 : 1. The ring area is always 3 times the incircle area! Incircle with r = 7 cm has area 154 cm². Ring Area = 3 × 154 = 462 cm² mentally in 3 seconds!",
      "day": "Day 1"
    },
    {
      "id": "obs1_06",
      "type": "Geometry (Rhombus)",
      "exam": "SSC CGL / Tier 2 High-Yield",
      "page": 9,
      "question": "A circle of radius 6 cm is inscribed in a rhombus with one diagonal of length 20 cm. What is the perimeter of the rhombus?\n\n6 cm त्रिज्या वाला एक वृत्त किसी समचतुर्भुज (Rhombus) के अंदर अंतःवृत्त (Incircle) के रूप में बना हुआ है। यदि समचतुर्भुज के एक विकर्ण की लंबाई 20 cm है, तो समचतुर्भुज का परिमाप कितना होगा?",
      "options": [
        "48 cm",
        "52 cm",
        "44 cm",
        "50 cm"
      ],
      "answer": "50 cm",
      "solution": "Step 1: Understand the right-angled triangle formed by diagonals:\nIn a rhombus, diagonals bisect each other at right angles (90°).\nLet semi-diagonals be OA = d₁ / 2 = 20 / 2 = 10 cm, and OB = x cm.\nSide of rhombus a is the hypotenuse: a² = 10² + x² = 100 + x².\n\nStep 2: Incircle radius as altitude to hypotenuse:\nThe incircle touches side AB at a point of tangency. Radius r = 6 cm is perpendicular to side a.\nArea of right triangle OAB = (1/2) × OA × OB = (1/2) × a × r\n⟹ 10 × x = a × 6 ⟹ 5x = 3a ⟹ x = 3a / 5.\n\nStep 3: Solve for side a:\nSubstitute x = 3a / 5 into a² = 100 + x²:\na² = 100 + (3a / 5)² = 100 + 9a² / 25\na² - 9a² / 25 = 100 ⟹ 16a² / 25 = 100\na² = 2500 / 16 = 625 / 4 ⟹ a = 25 / 2 = 12.5 cm.\n\nStep 4: Calculate perimeter:\nPerimeter = 4a = 4 × 12.5 = 50 cm.",
      "trick": "Right Triangle Altitude Relation: Altitude h = (legs product)/hypotenuse ⟹ 6 = (10 × x) / a ⟹ 3a = 5x. By Pythagorean triplet scaling with hypotenuse a, leg 10, leg x: a = 12.5 cm. Perimeter = 4 × 12.5 = 50 cm!",
      "day": "Day 1"
    },
    {
      "id": "obs1_07",
      "type": "Statistics (Mean)",
      "exam": "SSC CGL / Tier 2 High-Yield",
      "page": 11,
      "question": "Find the arithmetic mean of the given data.\n\nClass Interval | Frequency\n0 - 8          | 4\n8 - 16         | 3\n16 - 24        | 2\n24 - 32        | 5\n32 - 40        | 2\n\nदिए गए आंकड़ों का समांतर माध्य ज्ञात कीजिए।",
      "options": [
        "19",
        "27",
        "24",
        "18"
      ],
      "answer": "19",
      "solution": "Step 1: Calculate Class Midpoints (x) and f × x:\n• 0 - 8: Midpoint x₁ = 4, Frequency f₁ = 4 ⟹ fx₁ = 16\n• 8 - 16: Midpoint x₂ = 12, Frequency f₂ = 3 ⟹ fx₂ = 36\n• 16 - 24: Midpoint x₃ = 20, Frequency f₃ = 2 ⟹ fx₃ = 40\n• 24 - 32: Midpoint x₄ = 28, Frequency f₄ = 5 ⟹ fx₄ = 140\n• 32 - 40: Midpoint x₅ = 36, Frequency f₅ = 2 ⟹ fx₅ = 72\n\nStep 2: Sum the frequencies and products:\nTotal Frequency Σf = 4 + 3 + 2 + 5 + 2 = 16.\nTotal Σfx = 16 + 36 + 40 + 140 + 72 = 304.\n\nStep 3: Direct Method Mean:\nMean = Σfx / Σf = 304 / 16 = 19.\n\nStep 4: Assumed Mean Method Verification (A = 20):\nDeviations d = x - 20: -16, -8, 0, +8, +16.\nΣfd = 4(-16) + 3(-8) + 2(0) + 5(+8) + 2(+16) = -64 - 24 + 0 + 40 + 32 = -16.\nMean = A + (Σfd / Σf) = 20 + (-16 / 16) = 20 - 1 = 19.",
      "trick": "Assumed Mean Shortcut: Take middle interval midpoint A = 20. Deviations are -16, -8, 0, +8, +16. Weighted sum Σfd = 4(-16) + 3(-8) + 5(8) + 2(16) = -88 + 72 = -16. Correction = -16 / 16 = -1. Mean = 20 - 1 = 19 in 15 seconds!",
      "day": "Day 1"
    },
    {
      "id": "obs1_08",
      "type": "Statistics (Data Sufficiency)",
      "exam": "SSC CGL / Tier 2 High-Yield",
      "page": 12,
      "question": "A researcher calculates the arithmetic mean of a grouped dataset using an assumed mean (A) of 50. Which combination of statements is sufficient to find the actual arithmetic mean?\n\nStatement I: The sum of the frequencies (Σf) is exactly 100.\nStatement II: The sum of the products of frequencies and deviations (Σfd) is +250.\nStatement III: The lowest class interval starts at 10.",
      "options": [
        "Statements I and II together are not sufficient.",
        "Statements I and II together are sufficient.",
        "Statements I and III together are sufficient.",
        "All statements I, II, and III together are necessary."
      ],
      "answer": "Statements I and II together are sufficient.",
      "solution": "Step 1: Formula for Arithmetic Mean by Assumed Mean Method:\nMean = A + (Σfd / Σf)\nwhere:\n• A = Assumed Mean\n• Σfd = Sum of products of frequencies and deviations\n• Σf = Total frequency\n\nStep 2: Evaluate given data:\n• The problem statement specifies A = 50.\n• Statement I gives: Σf = 100.\n• Statement II gives: Σfd = +250.\n\nStep 3: Compute the unique mean:\nUsing Statements I and II together:\nMean = 50 + (250 / 100) = 50 + 2.5 = 52.5.\nThe mean is uniquely determined without needing Statement III.\nTherefore, Statements I and II together are sufficient.",
      "trick": "Formula Requirement Inspection: Mean = A + Σfd / Σf. Since A is already known (50), we only require Σfd (Statement II) and Σf (Statement I). Statement III (class boundaries) is irrelevant. Option (b) instantly!",
      "day": "Day 1"
    },
    {
      "id": "obs1_09",
      "type": "Statistics (Properties)",
      "exam": "SSC CGL / Tier 2 High-Yield",
      "page": 13,
      "question": "A data set has values: 100, 110, 120, 130, 140. If you choose 120 as the assumed mean, what is the sum of deviations from the assumed mean?\n\nएक डेटा सेट में निम्नलिखित मान हैं: 100, 110, 120, 130, 140। यदि आप 120 को कल्पित माध्य (Assumed Mean) के रूप में चुनते हैं, तो कल्पित माध्य से विचलनों (Deviations) का योग कितना होगा?",
      "options": [
        "20",
        "0",
        "-20",
        "10"
      ],
      "answer": "0",
      "solution": "Step 1: Calculate deviation (d = x - A) for each data point with A = 120:\n• 100 - 120 = -20\n• 110 - 120 = -10\n• 120 - 120 = 0\n• 130 - 120 = +10\n• 140 - 120 = +20\n\nStep 2: Sum the deviations:\nSum of deviations = (-20) + (-10) + 0 + (+10) + (+20) = 0.\n\nStep 3: Fundamental Statistical Theorem:\nThe sum of deviations of any data set taken from its actual arithmetic mean is ALWAYS identically zero (Σ(x - x̄) = 0). Since 120 is the exact arithmetic mean of the symmetric dataset {100, 110, 120, 130, 140}, the sum of deviations must equal 0.",
      "trick": "Universal Property: The values form an AP centered at 120, so 120 is the true mean. By definition, sum of deviations from the true mean is ALWAYS 0! Marked in 1 second.",
      "day": "Day 1"
    },
    {
      "id": "obs1_10",
      "type": "Profit & Loss",
      "exam": "SSC CGL / Tier 2 High-Yield",
      "page": 14,
      "question": "A shopkeeper claims that he sells rock salt at ₹14 per kg, which costs him ₹40 per kg. But he gives 517 g instead of 1551 g. What is his percentage profit or loss?\n\nएक दुकानदार दावा करता है कि वह सेंधा नमक ₹14 प्रति kg की दर से बेचता है, जबकि उसे इसकी कीमत ₹40 प्रति kg पड़ती है। लेकिन वह 1551 g के स्थान पर केवल 517 g नमक देता है। उसका लाभ या हानि प्रतिशत कितना है?",
      "options": [
        "Loss of 2% (2% की हानि)",
        "Profit of 5% (5% का लाभ)",
        "Profit of 6% (6% का लाभ)",
        "Loss of 4% (4% की हानि)"
      ],
      "answer": "Profit of 5% (5% का लाभ)",
      "solution": "Step 1: Price factor ratio (CP to SP):\nClaims selling at SP = ₹14 for goods costing CP = ₹40.\nRatio CP : SP = 40 : 14 = 20 : 7.\n\nStep 2: Weight factor ratio:\nDelivers only 517 g while charging for 1551 g.\nNote that 1551 = 3 × 517 (a clean 1 : 3 ratio).\nRatio CP : SP = 517 : 1551 = 1 : 3.\n\nStep 3: Combine both factors by multiplying ratios:\nOverall CP : SP = (20 × 1) : (7 × 3) = 20 : 21.\n\nStep 4: Calculate percentage profit:\nProfit = 21 - 20 = 1 unit on CP of 20.\nPercentage Profit = (1 / 20) × 100% = 5% profit.",
      "trick": "Vishesh Sir's Compounding Shortcut: Price factor: 40 : 14 = 20 : 7. Weight factor: 517 : 1551 = 1 : 3. Compounded CP : SP = (20 × 1) : (7 × 3) = 20 : 21. Net gain = 1/20 = 5% profit in 10 seconds flat!",
      "day": "Day 1"
    },
    {
      "id": "obs1_11",
      "type": "Profit & Loss",
      "exam": "SSC CGL / Tier 2 High-Yield",
      "page": 15,
      "question": "94. Ramesh sells rice at ₹36 per kg, which he purchased for ₹30 per kg. Moreover, he gives only 800 g of rice instead of 1 kg while selling. Find the actual profit percentage of Ramesh?\n\nरमेश ₹36 प्रति किलो चावल बेचता है, जिसे उसने ₹30 प्रति किलो खरीदा था। इसके अलावा, वह बेचते समय 1 किलो के बजाय केवल 800 ग्राम चावल देता है। रमेश का वास्तविक लाभ प्रतिशत ज्ञात करें।",
      "options": [
        "46%",
        "50%",
        "48%",
        "52%"
      ],
      "answer": "50%",
      "solution": "Step 1: Price factor ratio (CP to SP):\nCP = ₹30, SP = ₹36.\nRatio CP : SP = 30 : 36 = 5 : 6.\n\nStep 2: Weight factor ratio:\nHe gives 800 g instead of 1000 g.\nRatio CP : SP = 800 : 1000 = 4 : 5.\n\nStep 3: Combine both factors:\nOverall CP : SP = (5 × 4) : (6 × 5) = 20 : 30 = 2 : 3.\n\nStep 4: Calculate profit percentage:\nProfit = 3 - 2 = 1 unit on CP of 2.\nProfit Percentage = (1 / 2) × 100% = 50%.",
      "trick": "Cross-Cancellation of Ratio: Price = 5 : 6; Weight = 4 : 5. The 5 cancels out! Ratio becomes 4 : 6 = 2 : 3. Increase = 1 on 2 = 50% profit mentally!",
      "day": "Day 1"
    },
    {
      "id": "obs1_12",
      "type": "Number System",
      "exam": "SSC CGL / Tier 2 High-Yield",
      "page": 16,
      "question": "What is the smallest natural number which, when divided by 6, 8, and 10, leaves a remainder of 3 in each case?\n\nसबसे छोटी प्राकृतिक संख्या कौन-सी है, जिसे 6, 8 और 10 से विभाजित करने पर प्रत्येक स्थिति में 3 शेष बचता है?",
      "options": [
        "243",
        "117",
        "123",
        "131"
      ],
      "answer": "123",
      "solution": "Step 1: General form for constant remainder:\nAny number leaving remainder r when divided by divisors a, b, c has the form:\nN = LCM(a, b, c) × K + r (where K is an integer ≥ 1 for natural numbers).\n\nStep 2: Find LCM(6, 8, 10):\n• 6 = 2 × 3\n• 8 = 2³\n• 10 = 2 × 5\nLCM = 2³ × 3 × 5 = 8 × 15 = 120.\n\nStep 3: Smallest natural number:\nSubstitute K = 1:\nN = 120 × 1 + 3 = 123.\n\nVerification:\n• 123 / 6 = 20 (remainder 3)\n• 123 / 8 = 15 (remainder 3)\n• 123 / 10 = 12 (remainder 3).",
      "trick": "LCM + Remainder: LCM(6, 8, 10) = 120. Smallest natural number = 120 + 3 = 123. Checked in 2 seconds!",
      "day": "Day 1"
    },
    {
      "id": "obs1_13",
      "type": "Number System",
      "exam": "SSC CPO 2019 Pre",
      "page": 18,
      "question": "Q23. Let x be the least 4-digit number which, when divided by 2, 3, 4, 5, 6 and 7, leaves a remainder of 1 in each case. If x lies between 2800 and 3000, then what is the sum of the digits of x?\n\nQ23. मान लीजिए x वह सबसे छोटी 4 अंकों की संख्या है जिसे 2, 3, 4, 5, 6 और 7 से भाग देने पर प्रत्येक स्थिति में शेषफल 1 प्राप्त होता है। यदि x, 2800 और 3000 के बीच है, तो x के अंकों का योग क्या है? (CPO 2019 - Pre)",
      "options": [
        "15",
        "16",
        "12",
        "13"
      ],
      "answer": "16",
      "solution": "Step 1: Find LCM of divisors (2, 3, 4, 5, 6, 7):\n• 2 = 2\n• 3 = 3\n• 4 = 2²\n• 5 = 5\n• 6 = 2 × 3\n• 7 = 7\nLCM = 4 × 3 × 5 × 7 = 420.\n\nStep 2: General form of number:\nx = 420 × K + 1.\n\nStep 3: Range constraint (2800 < x < 3000):\nTest integer multiples of 420:\n• For K = 6: 420 × 6 = 2520 (below range)\n• For K = 7: 420 × 7 = 2940 ⟹ x = 2940 + 1 = 2941 (within 2800 and 3000)\n• For K = 8: 420 × 8 = 3360 (above range)\nThus, x = 2941.\n\nStep 4: Sum of digits of x:\nSum of digits of 2941 = 2 + 9 + 4 + 1 = 16.",
      "trick": "420 Multiplier Inspection: 420 × 7 = 2940. Number = 2940 + 1 = 2941. Sum of digits = 2 + 9 + 4 + 1 = 16!",
      "day": "Day 1"
    },
    {
      "id": "obs1_14",
      "type": "Number System",
      "exam": "SSC CPO 2019 Pre",
      "page": 19,
      "question": "Q25. Let x be the least number divisible by 13 such that when x is divided by 4, 5, 6, 7, 8 and 12, the remainder in each case is 2. The sum of the digits of x is:\n\nQ25. मान लीजिए x वह सबसे छोटी संख्या है जो 13 से विभाज्य है तथा जब x को 4, 5, 6, 7, 8 और 12 से भाग दिया जाता है, तो प्रत्येक स्थिति में शेषफल 2 प्राप्त होता है। x के अंकों का योग क्या है? (CPO 2019 - Pre)",
      "options": [
        "11",
        "8",
        "9",
        "10"
      ],
      "answer": "11",
      "solution": "Step 1: Find LCM of divisors (4, 5, 6, 7, 8, 12):\n• 4 = 2²\n• 5 = 5\n• 6 = 2 × 3\n• 7 = 7\n• 8 = 2³\n• 12 = 2² × 3\nLCM = 2³ × 3 × 5 × 7 = 8 × 105 = 840.\n\nStep 2: General form of number:\nx = 840k + 2.\n\nStep 3: Apply divisibility by 13:\nDivide 840 by 13: 840 = 13 × 64 + 8.\nSo 840k + 2 = 13(64k) + (8k + 2).\nFor x to be divisible by 13, (8k + 2) must be divisible by 13.\n\nStep 4: Test integer values of k:\n• k = 1: 8(1) + 2 = 10 (not divisible by 13)\n• k = 2: 8(2) + 2 = 18 (not divisible by 13)\n• k = 3: 8(3) + 2 = 26 = 13 × 2 (divisible by 13!)\n\nStep 5: Compute x and its sum of digits:\nx = 840 × 3 + 2 = 2520 + 2 = 2522.\nVerification: 2522 / 13 = 194.\nSum of digits = 2 + 5 + 2 + 2 = 11.",
      "trick": "Remainder Splitting: 840 = 13 × 64 + 8. Check (8k + 2) / 13. At k = 3, 8(3)+2 = 26 (divisible!). x = 840×3 + 2 = 2522. Sum = 2+5+2+2 = 11 in 20 seconds!",
      "day": "Day 1"
    },
    {
      "id": "obs1_15",
      "type": "Geometry (Lines & Angles)",
      "exam": "SSC CGL / Tier 2 High-Yield",
      "page": 20,
      "question": "Two parallel lines are cut by a transversal. If one alternate interior angle measures (5x - 8)° and the other measures (2x + 46)°, what is the value of x?\n\nदो समानांतर रेखाओं को एक तिर्यक रेखा (Transversal) काटती है। यदि एक एकांतर अंतः कोण (Alternate Interior Angle) का माप (5x - 8)° तथा दूसरे का माप (2x + 46)° है, तो x का मान ज्ञात कीजिए।",
      "options": [
        "12",
        "18",
        "20",
        "14"
      ],
      "answer": "18",
      "solution": "Step 1: Understand Alternate Interior Angle Theorem:\nWhen two parallel lines are intersected by a transversal, alternate interior angles (the 'Z' configuration angles) are strictly equal to each other.\n\nStep 2: Equate both angles:\n5x - 8 = 2x + 46\n\nStep 3: Solve for x:\n5x - 2x = 46 + 8\n3x = 54\nx = 54 / 3 = 18.\n\nStep 4: Verification:\nAngle 1 = 5(18) - 8 = 90 - 8 = 82°.\nAngle 2 = 2(18) + 46 = 36 + 46 = 82°.\nBoth angles equal 82°, confirming x = 18.",
      "trick": "Direct Z-Angle Equating: 5x - 8 = 2x + 46 ⟹ 3x = 54 ⟹ x = 18. Calculated in 3 seconds!",
      "day": "Day 1"
    },
    {
      "id": "obs1_16",
      "type": "Coordinate Geometry",
      "exam": "SSC CGL / Tier 2 High-Yield",
      "page": 21,
      "question": "The coordinates of a triangle are A(1, 2), B(4, 6), and C(k, 10). If the area of the triangle is 15 square units, then the possible value(s) of k is (are):\n\nएक त्रिभुज के शीर्षों के निर्देशांक A(1, 2), B(4, 6) और C(k, 10) हैं। यदि त्रिभुज का क्षेत्रफल 15 वर्ग इकाई है, तो k के संभावित मान क्या हैं?",
      "options": [
        "14.5 only",
        "-1 and 29",
        "-0.5 and 14.5",
        "-0.5 only"
      ],
      "answer": "-0.5 and 14.5",
      "solution": "Step 1: Origin Shift Shortcut:\nSubtract coordinates of A(1, 2) from all three vertices to shift A to origin (0, 0):\n• A'(0, 0)\n• B'(4 - 1, 6 - 2) = (3, 4)\n• C'(k - 1, 10 - 2) = (k - 1, 8)\n\nStep 2: Apply origin triangle area formula:\nArea = (1/2) × |x₁y₂ - x₂y₁|\n15 = (1/2) × |3 × 8 - 4 × (k - 1)|\n30 = |24 - 4k + 4|\n30 = |28 - 4k|\n\nStep 3: Solve absolute value cases:\n• Case 1: 28 - 4k = 30\n4k = 28 - 30 = -2 ⟹ k = -2/4 = -0.5\n\n• Case 2: 28 - 4k = -30\n4k = 28 + 30 = 58 ⟹ k = 58/4 = 14.5\n\nTherefore, the possible values of k are -0.5 and 14.5.",
      "trick": "Zero Shift Shortcut: Shift (1, 2) to (0, 0) ⟹ other points become (3, 4) and (k-1, 8). Cross-multiply: |3(8) - 4(k-1)| = 2 × 15 = 30 ⟹ |28 - 4k| = 30 ⟹ 28 - 4k = ±30 ⟹ k = -0.5 or 14.5. Never use the long formula!",
      "day": "Day 1"
    },
    {
      "id": "obs1_17",
      "type": "Coordinate Geometry",
      "exam": "SSC CGL Expected",
      "page": 22,
      "question": "Q28. Find the area of the triangle whose coordinates are A(1, 2), B(-4, -3) and C(4, 1)?\n\nउस त्रिभुज का क्षेत्रफल ज्ञात कीजिए जिसके शीर्षों के निर्देशांक A(1, 2), B(-4, -3) और C(4, 1) हैं?\n(SSC CGL)",
      "options": [
        "7 square units",
        "10 square units",
        "14 square units",
        "8 square units"
      ],
      "answer": "10 square units",
      "solution": "Step 1: Origin Shift Method (Zero Shifting):\nSubtract coordinates of A(1, 2) from all vertices:\n• A'(1 - 1, 2 - 2) = (0, 0)\n• B'(-4 - 1, -3 - 2) = (-5, -5)\n• C'(4 - 1, 1 - 2) = (3, -1)\n\nStep 2: Calculate Area from Origin:\nArea = (1/2) × |x₁y₂ - x₂y₁|\n= (1/2) × |(-5)(-1) - (-5)(3)|\n= (1/2) × |5 - (-15)|\n= (1/2) × |5 + 15|\n= (1/2) × 20 = 10 square units.\n\nStep 3: Shoelace Formula Verification:\nArea = (1/2) |[1(-3) + (-4)(1) + 4(2)] - [2(-4) + (-3)(4) + 1(1)]|\n= (1/2) |[-3 - 4 + 8] - [-8 - 12 + 1]|\n= (1/2) |1 - (-19)| = (1/2) × 20 = 10 square units.",
      "trick": "Zero Shifting Shortcut: Shift (1, 2) to (0, 0) ⟹ B becomes (-5, -5) and C becomes (3, -1). Area = (1/2)|(-5)(-1) - (-5)(3)| = (1/2)|5 + 15| = 10 square units in 10 seconds flat!",
      "day": "Day 1"
    },
    {
      "id": "obs1_18",
      "type": "Geometry (Centroid & Medians)",
      "exam": "SSC CGL / Tier 2 High-Yield",
      "page": 23,
      "question": "In triangle XYZ, the medians from X and Y intersect at point G. If the area of triangle XYZ is 54 square units, what is the area (in square units) of triangle XGY?\n\nत्रिभुज XYZ में, शीर्ष X और Y से खींची गई माध्यिकाएँ (Medians) बिंदु G पर प्रतिच्छेद करती हैं। यदि त्रिभुज XYZ का क्षेत्रफल 54 वर्ग इकाई है, तो त्रिभुज XGY का क्षेत्रफल (वर्ग इकाई में) कितना होगा?",
      "options": [
        "9",
        "36",
        "18",
        "12"
      ],
      "answer": "18",
      "solution": "Step 1: Centroid definition:\nThe point of intersection of the medians of a triangle is its centroid (G).\n\nStep 2: Area division properties of the Centroid:\n• The centroid divides the area of the entire triangle into three equal triangles formed by joining G to each vertex: Area(ΔXGY) = Area(ΔYGZ) = Area(ΔZGX) = (1/3) × Area(ΔXYZ).\n• If all 3 medians are drawn, the triangle is divided into 6 equal small triangles, each having area = (1/6) × Area(ΔXYZ).\n\nStep 3: Calculate Area(ΔXGY):\nArea(ΔXGY) = (1/3) × 54 = 18 square units.\n(Alternatively: ΔXGY comprises 2 of the 6 small triangles: 2 × (54 / 6) = 2 × 9 = 18 square units).",
      "trick": "Centroid 1/3 Rule: Any triangle formed by the centroid and two vertices of ΔXYZ has exactly 1/3 of the total area! Area = 54 / 3 = 18 square units immediately!",
      "day": "Day 1"
    },
    {
      "id": "obs1_19",
      "type": "Number System & AP",
      "exam": "SSC CGL / Tier 2 High-Yield",
      "page": 24,
      "question": "What is the average of all integers between 100 and 250 that are exactly divisible by 11?\n\n100 और 250 के बीच उन सभी पूर्णांकों का औसत क्या है, जो 11 से पूर्णतः विभाज्य हैं?",
      "options": [
        "146",
        "176",
        "186",
        "196"
      ],
      "answer": "176",
      "solution": "Step 1: Determine the first and last integer in the range:\n• Smallest integer > 100 divisible by 11: 100 / 11 = 9.09 ⟹ 11 × 10 = 110.\nFirst term a = 110.\n• Largest integer < 250 divisible by 11: 250 / 11 = 22.72 ⟹ 11 × 22 = 242.\nLast term l = 242.\n\nStep 2: Arithmetic Progression Average Property:\nSince consecutive multiples of 11 form an AP with common difference d = 11, the average of an AP is always simply the average of its first and last terms:\nAverage = (First term + Last term) / 2\n= (110 + 242) / 2\n= 352 / 2 = 176.\n\n(Verification: Number of terms n = (242 - 110)/11 + 1 = 13. Sum = (13/2) × (110 + 242) = 13 × 176 = 2288. Average = 2288 / 13 = 176).",
      "trick": "(First + Last) / 2 AP Rule: First multiple = 110, last multiple = 242. Average = (110 + 242) / 2 = 352 / 2 = 176. No need to sum all terms or calculate n! Done in 5 seconds.",
      "day": "Day 1"
    }
  ]
};
