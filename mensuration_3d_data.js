// 3D Mensuration 108 Master PYQ Dataset (Vishesh Shukla - English Edition)
window.MENSURATION_3D_DATA = [
  {
    "id": 1,
    "category": "cube_cuboid",
    "category_name": "Cube & Cuboid",
    "exam": "CGL 2023 Pre",
    "question": "Area of the floor of a cubical room is 64 m2 . The length of the longest rod that can be kept in the room is:",
    "options": {
      "a": "16√3",
      "b": "4√3",
      "c": "12√3",
      "d": "8√3"
    },
    "answer": "d",
    "correct_text": "8√3",
    "formula": "Longest rod in a cube = Diagonal = a√3; Floor area = a²",
    "steps": [
      "Floor area = a² = 64 m²  ⇒  Edge of cube a = √64 = 8 m.",
      "Longest rod that can be kept in a cubical room is along its space diagonal: d = a√3.",
      "Substituting a = 8 m gives d = 8√3 m."
    ],
    "trick": "Floor area 64  ⇒  Side = 8. Cubical room diagonal is always side × √3  ⇒  8√3 instantly."
  },
  {
    "id": 2,
    "category": "cube_cuboid",
    "category_name": "Cube & Cuboid",
    "exam": "Selection Post 12, 2024",
    "question": "The diagonal of a cubical block of wood is 192 cm. Find its volume.",
    "options": {
      "a": "776432√3 cm3",
      "b": "766432√3 cm3",
      "c": "786432√3 cm3",
      "d": "796432√3 cm3"
    },
    "answer": "c",
    "correct_text": "786432√3 cm3",
    "formula": "Diagonal = a√3  ⇒  a = d / √3; Volume = a³",
    "steps": [
      "Given space diagonal d = 192 cm.",
      "a√3 = 192  ⇒  a = 192 / √3 = 64√3 cm.",
      "Volume V = a³ = (64√3)³ = 64³ × (√3)³ = 262,144 × 3√3 = 786,432√3 cm³."
    ],
    "trick": "a = 192/√3 = 64√3. Volume = (64)³ × 3√3. 64³ ends in 4, times 3 ends in 2  ⇒  Matches 786432√3."
  },
  {
    "id": 3,
    "category": "cube_cuboid",
    "category_name": "Cube & Cuboid",
    "exam": "CHSL 2020 Pre",
    "question": "A solid cube having volume 46656 cm3, is cut into 27 cubes of equal volume. The surface area (in cm²) of the smaller cubes is:",
    "options": {
      "a": "864",
      "b": "936",
      "c": "756",
      "d": "921"
    },
    "answer": "a",
    "correct_text": "864",
    "formula": "Volume of small cube = V / 27; Surface area = 6a²",
    "steps": [
      "Volume of large cube = 46656 cm³.",
      "Volume of each of 27 smaller cubes = 46656 / 27 = 1728 cm³.",
      "Side of small cube a = ∛1728 = 12 cm.",
      "Surface area of each smaller cube = 6a² = 6 × 12² = 6 × 144 = 864 cm²."
    ],
    "trick": "Linear scale factor k = ∛(1/27) = 1/3. Large side A = ∛46656 = 36 cm. Small side a = 36/3 = 12 cm. SA = 6 × 144 = 864."
  },
  {
    "id": 4,
    "category": "cube_cuboid",
    "category_name": "Cube & Cuboid",
    "exam": "CGL 2023 Pre",
    "question": "A metallic cube has each of its side of length 12 cm. It is melted and recast into three small cubes. Out of these cubes, two have their sides as 6 cm and 8 cm, respectively. The length of each side of the third cube is:",
    "options": {
      "a": "1. 7 cm",
      "b": "9 cm",
      "c": "10 cm",
      "d": "5 cm"
    },
    "answer": "c",
    "correct_text": "10 cm",
    "formula": "Sum of volumes of small cubes = Volume of large cube: a₁³ + a₂³ + a₃³ = A³",
    "steps": [
      "Volume of original metallic cube = 12³ = 1728 cm³.",
      "Volumes of the two known small cubes: 6³ = 216 cm³, 8³ = 512 cm³.",
      "Sum of two small cubes = 216 + 512 = 728 cm³.",
      "Volume of third cube = 1728 - 728 = 1000 cm³.",
      "Side of third cube = ∛1000 = 10 cm."
    ],
    "trick": "Famous cubic identity: 6³ + 8³ + 10³ = 12³ (216 + 512 + 1000 = 1728). Side of third cube is immediately 10 cm."
  },
  {
    "id": 5,
    "category": "cube_cuboid",
    "category_name": "Cube & Cuboid",
    "exam": "CGL 2023 Pre",
    "question": "Three cubes with sides in the ratio of 3:4:5 are melted to form a single cube whose diagonal is 18√3cm. The sides of the three cubes are:",
    "options": {
      "a": "21 cm, 28 cm and 35 cm",
      "b": "9 cm, 12 cm and 15 cm",
      "c": "18 cm, 24 cm and 30 cm",
      "d": "12 cm, 16 cm and 20 cm"
    },
    "answer": "b",
    "correct_text": "9 cm, 12 cm and 15 cm",
    "formula": "V_total = (3x)³ + (4x)³ + (5x)³ = (6x)³; Diagonal = side × √3",
    "steps": [
      "Let the sides of the three cubes be 3x, 4x, and 5x.",
      "Total molten volume = 27x³ + 64x³ + 125x³ = 216x³ = (6x)³.",
      "Side of the resulting single cube = 6x.",
      "Diagonal of new cube = 6x√3 = 18√3 cm  ⇒  6x = 18  ⇒  x = 3.",
      "Sides of the three cubes = 3(3) = 9 cm, 4(3) = 12 cm, 5(3) = 15 cm."
    ],
    "trick": "Cubes ratio 3:4:5 cubes sum to 3³ + 4³ + 5³ = 216 = 6³. New side = 6x. Diagonal 18√3 gives new side = 18  ⇒  6x = 18  ⇒  x = 3  ⇒  9, 12, 15."
  },
  {
    "id": 6,
    "category": "cube_cuboid",
    "category_name": "Cube & Cuboid",
    "exam": "CGL 2021 Pre",
    "question": "A solid cube of side 8 cm is dropped into a rectangular container of length 16 cm, breadth 8 cm and height 15 cm which is partly filled with water. If the cube is completely submerged, then the rise of water level (in cm) is:",
    "options": {
      "a": "2",
      "b": "6",
      "c": "5",
      "d": "4"
    },
    "answer": "d",
    "correct_text": "4",
    "formula": "Rise in water level Δh = Volume of submerged object / Base area of container",
    "steps": [
      "Volume of submerged solid cube = 8³ = 512 cm³.",
      "Base area of container = length × breadth = 16 × 8 = 128 cm².",
      "Rise in water level Δh = Volume / Base Area = 512 / 128 = 4 cm."
    ],
    "trick": "Δh = 8³ / (16 × 8) = (8 × 8) / 16 = 64 / 16 = 4 cm."
  },
  {
    "id": 7,
    "category": "cube_cuboid",
    "category_name": "Cube & Cuboid",
    "exam": "UPSC CSAT 2024",
    "question": "What is the least possible number of cuts required to cut a cube into 64 identical pieces?",
    "options": {
      "a": "8",
      "b": "9",
      "c": "12",
      "d": "16"
    },
    "answer": "b",
    "correct_text": "9",
    "formula": "Identical pieces = (x + 1)(y + 1)(z + 1) = 64; Minimize cuts = x + y + z",
    "steps": [
      "To minimize total cuts (x + y + z), the factors (x + 1), (y + 1), (z + 1) should be as equal as possible.",
      "64 = 4 × 4 × 4  ⇒  (x + 1) = 4, (y + 1) = 4, (z + 1) = 4.",
      "Cuts along the three axes: x = 3, y = 3, z = 3.",
      "Total minimum cuts = 3 + 3 + 3 = 9 cuts."
    ],
    "trick": "∛64 = 4 pieces per axis  ⇒  4 - 1 = 3 cuts per axis  ⇒  3 × 3 = 9 cuts total."
  },
  {
    "id": 8,
    "category": "cube_cuboid",
    "category_name": "Cube & Cuboid",
    "exam": "CHSL MAINS 2022",
    "question": "A hollow cube is made of paper to have a volume of 512 cubic units. How much paper in square units will be required to make the cube?",
    "options": {
      "a": "384",
      "b": "328",
      "c": "348",
      "d": "288"
    },
    "answer": "a",
    "correct_text": "384",
    "formula": "V = a³  ⇒  a = ∛512; Required paper = Total Surface Area = 6a²",
    "steps": [
      "Volume of hollow cube = 512 cubic units  ⇒  Edge a = ∛512 = 8 units.",
      "Surface area of the cube = 6a² = 6 × 8² = 6 × 64 = 384 sq units."
    ],
    "trick": "a = 8  ⇒  6 × 64 = 384."
  },
  {
    "id": 9,
    "category": "cube_cuboid",
    "category_name": "Cube & Cuboid",
    "exam": "CHSL 2022 Mains",
    "question": "A cube of side 5 cm, has been assembled using 125 cubes each of 1 cm edge. One cube is removed from the middle of each of the faces of the cube. What is the surface area (in cm²) of the remaining solid?",
    "options": {
      "a": "155",
      "b": "144",
      "c": "150",
      "d": "174"
    },
    "answer": "d",
    "correct_text": "174",
    "formula": "Removal of face-center cube adds net 4 faces per removed cube",
    "steps": [
      "Original surface area of 5 cm cube = 6 × 5² = 6 × 25 = 150 cm².",
      "A cube is removed from the middle of each of the 6 faces.",
      "Removing 1 cube from the middle of a face removes 1 outer face (1 cm²) but exposes 5 new interior square faces (5 × 1 cm²).",
      "Net increase per face = 5 - 1 = +4 cm².",
      "For 6 faces, total increase = 6 × 4 = 24 cm².",
      "New surface area = 150 + 24 = 174 cm²."
    ],
    "trick": "Initial SA = 150. Center face removal adds 4 surfaces each. 6 faces × 4 = +24  ⇒  150 + 24 = 174 cm²."
  },
  {
    "id": 10,
    "category": "cube_cuboid",
    "category_name": "Cube & Cuboid",
    "exam": "CGL 2023 Mains",
    "question": "A solid cube, whose each edge is of length 48 cm, is melted. Identical solid cubes, each of volume 64 cm³, are made out of this molten cube, without any wastage. How many such small cubes are obtained?",
    "options": {
      "a": "1738",
      "b": "1728",
      "c": "1718",
      "d": "1748"
    },
    "answer": "b",
    "correct_text": "1728",
    "formula": "Number of cubes = Total Volume / Volume of 1 small cube",
    "steps": [
      "Volume of large cube = 48³ cm³.",
      "Volume of each small cube = 64 cm³ = 4³ cm³.",
      "Number of small cubes = 48³ / 64 = (48 / 4)³ = 12³ = 1728."
    ],
    "trick": "Edge ratio = 48 / ∛64 = 48 / 4 = 12. Total cubes = 12³ = 1728."
  },
  {
    "id": 11,
    "category": "cube_cuboid",
    "category_name": "Cube & Cuboid",
    "exam": "Selection Post 12, 2024",
    "question": "Three solid iron cubes of edges 8 cm, 10 cm and 12 cm are melted together to make a new cube. It is observed that 496 cm3 of the melted material is lost due to improper handling. The area (in cm2) of the whole surface of the newly formed cube is:",
    "options": {
      "a": "3375",
      "b": "1176",
      "c": "2197",
      "d": "1331"
    },
    "answer": "b",
    "correct_text": "1176",
    "formula": "Net Volume = V₁ + V₂ + V₃ - Loss; Surface area = 6A²",
    "steps": [
      "Sum of molten volumes = 8³ + 10³ + 12³ = 512 + 1000 + 1728 = 3240 cm³.",
      "Material lost = 496 cm³.",
      "Volume of newly formed cube = 3240 - 496 = 2744 cm³.",
      "Edge of new cube A = ∛2744 = 14 cm (since 14³ = 2744).",
      "Total surface area = 6A² = 6 × 14² = 6 × 196 = 1176 cm²."
    ],
    "trick": "3240 - 496 = 2744. ∛2744 = 14. TSA = 6 × 196 = 1176 cm²."
  },
  {
    "id": 12,
    "category": "cube_cuboid",
    "category_name": "Cube & Cuboid",
    "exam": "MTS 2020 Pre",
    "question": "From a wooden cubical block of side 10 cm, a sphere of radius 4.2 cm is carved out. How much wood is wasted in the process? (Use pi = 22/7 )",
    "options": {
      "a": "476.2 cm3",
      "b": "689.536 cm3",
      "c": "310.464 cm3",
      "d": "523.8 cm3"
    },
    "answer": "b",
    "correct_text": "689.536 cm3",
    "formula": "Wasted wood = Volume of cube - Volume of carved sphere",
    "steps": [
      "Volume of wooden cube = 10³ = 1000 cm³.",
      "Volume of sphere (r = 4.2 cm) = (4/3)πr³ = (4/3) × (22/7) × (4.2)³.",
      "4.2 / 7 = 0.6  ⇒  (4/3) × 22 × 0.6 × 4.2 × 4.2 = 4 × 22 × 0.2 × 17.64 = 17.6 × 17.64 = 310.464 cm³.",
      "Wasted wood = 1000 - 310.464 = 689.536 cm³."
    ],
    "trick": "Cube = 1000. Sphere volume for r = 4.2: 4/3 × 22/7 × 74.088 = 310.464. Wasted = 1000 - 310.464 = 689.536."
  },
  {
    "id": 13,
    "category": "cube_cuboid",
    "category_name": "Cube & Cuboid",
    "exam": "CGL 2024 Pre",
    "question": "Find the length of the longest diagonal (in cm) of a cuboidal box of dimension 1.2cm 1.3cm 1.5cm (correct to two decimal places)?",
    "options": {
      "a": "2.22 cm",
      "b": "2.32 cm",
      "c": "2.23 cm",
      "d": "2.35 cm"
    },
    "answer": "b",
    "correct_text": "2.32 cm",
    "formula": "Longest diagonal of cuboid d = √(l² + b² + h²)",
    "steps": [
      "Given dimensions: l = 1.2 cm, b = 1.3 cm, h = 1.5 cm.",
      "l² = 1.44, b² = 1.69, h² = 2.25.",
      "Sum of squares = 1.44 + 1.69 + 2.25 = 5.38.",
      "d = √5.38 ≈ 2.31948... ≈ 2.32 cm."
    ],
    "trick": "2.3² = 5.29, 2.35² = 5.52. 5.38 is just above 5.29  ⇒  2.32 cm."
  },
  {
    "id": 14,
    "category": "cube_cuboid",
    "category_name": "Cube & Cuboid",
    "exam": "CGL 2023 Pre",
    "question": "The length, breadth and height of a cuboid are in the ratio 1:2:3. The length, breadth and height of the cuboid are increased by 200%, 300% and 300%, respectively. Then compared to the original volume, the increase in the volume of the cuboid will be :",
    "options": {
      "a": "47 times",
      "b": "26 times",
      "c": "17 times",
      "d": "15 times"
    },
    "answer": "a",
    "correct_text": "47 times",
    "formula": "V = l × b × h; New V' = l(1 + %l) × b(1 + %b) × h(1 + %h)",
    "steps": [
      "Let initial dimensions be 1, 2, 3  ⇒  Initial volume V = 1 × 2 × 3 = 6.",
      "Increased by 200%  ⇒  New length = 1 × (1 + 2) = 3.",
      "Increased by 300%  ⇒  New breadth = 2 × (1 + 3) = 8.",
      "Increased by 300%  ⇒  New height = 3 × (1 + 3) = 12.",
      "New volume V' = 3 × 8 × 12 = 288.",
      "Increase in volume = 288 - 6 = 282.",
      "Ratio of increase to original volume = 282 / 6 = 47 times."
    ],
    "trick": "Scale factors: L becomes 3x, B becomes 4x, H becomes 4x. New V = 3 × 4 × 4 = 48x original. Increase = 48 - 1 = 47 times."
  },
  {
    "id": 15,
    "category": "cube_cuboid",
    "category_name": "Cube & Cuboid",
    "exam": "CGL 2021 Pre",
    "question": "The area of a cardboard (in cm²) needed to make a closed box of size 20 cm x 10cm × 8 cm will be:",
    "options": {
      "a": "880",
      "b": "690",
      "c": "750",
      "d": "960"
    },
    "answer": "a",
    "correct_text": "880",
    "formula": "TSA of closed box = 2(lb + bh + hl)",
    "steps": [
      "Dimensions: l = 20 cm, b = 10 cm, h = 8 cm.",
      "lb = 20 × 10 = 200, bh = 10 × 8 = 80, hl = 8 × 20 = 160.",
      "lb + bh + hl = 200 + 80 + 160 = 440 cm².",
      "Total area of cardboard = 2 × 440 = 880 cm²."
    ],
    "trick": "2 × (200 + 80 + 160) = 2 × 440 = 880 cm²."
  },
  {
    "id": 16,
    "category": "cube_cuboid",
    "category_name": "Cube & Cuboid",
    "exam": "CGL 2019 Pre",
    "question": "The length, breadth and height of a cuboidal box are in the ratio 7:5:3 and its whole surface area is 27832 cm2. Its volume is:",
    "options": {
      "a": "288100 cm3",
      "b": "280120 cm3",
      "c": "288120 cm3",
      "d": "208120 cm3"
    },
    "answer": "c",
    "correct_text": "288120 cm3",
    "formula": "TSA = 2(lb + bh + hl); Volume = lbh",
    "steps": [
      "Let dimensions be 7x, 5x, 3x.",
      "TSA = 2(35x² + 15x² + 21x²) = 2(71x²) = 142x² = 27832.",
      "x² = 27832 / 142 = 196  ⇒  x = 14.",
      "Dimensions: l = 98, b = 70, h = 42.",
      "Volume = (7 × 14) × (5 × 14) × (3 × 14) = 105 × 14³ = 105 × 2744 = 288,120 cm³."
    ],
    "trick": "Volume must be a multiple of 7, 5, 3 and 14³ (contains factor of 105). Check last digits: 105 × 2744 ends in 20  ⇒  288120."
  },
  {
    "id": 17,
    "category": "cube_cuboid",
    "category_name": "Cube & Cuboid",
    "exam": "CGL MAINS 2019",
    "question": "The sum of length, breadth and height of a cuboid is 20 cm. If the length of the diagonal is 12 cm, then find the total surface area of cuboid.",
    "options": {
      "a": "356 cm²",
      "b": "364 cm²",
      "c": "256 cm²",
      "d": "264 cm²"
    },
    "answer": "c",
    "correct_text": "256 cm²",
    "formula": "(l + b + h)² = (l² + b² + h²) + 2(lb + bh + hl)",
    "steps": [
      "Given: l + b + h = 20 cm.",
      "Diagonal d = √(l² + b² + h²) = 12 cm  ⇒  l² + b² + h² = 12² = 144.",
      "Using algebraic identity: (l + b + h)² = (l² + b² + h²) + TSA.",
      "20² = 144 + TSA  ⇒  400 = 144 + TSA.",
      "TSA = 400 - 144 = 256 cm²."
    ],
    "trick": "TSA = (Sum)² - (Diagonal)² = 20² - 12² = 400 - 144 = 256 cm² directly!"
  },
  {
    "id": 18,
    "category": "cube_cuboid",
    "category_name": "Cube & Cuboid",
    "exam": "CGL MAINS 2018",
    "question": "The areas of three adjacent faces of a cuboidal tank are 3m², 12m² and 16m². The capacity of the tank, in litres, is:",
    "options": {
      "a": "48000",
      "b": "24000",
      "c": "72000",
      "d": "36000"
    },
    "answer": "b",
    "correct_text": "24000",
    "formula": "Volume V = √(A₁ × A₂ × A₃); 1 m³ = 1000 litres",
    "steps": [
      "Let areas of 3 adjacent faces be lb = 3 m², bh = 12 m², hl = 16 m².",
      "(lb)(bh)(hl) = (lbh)² = V².",
      "V² = 3 × 12 × 16 = 576  ⇒  V = √576 = 24 m³.",
      "Capacity in litres = 24 × 1000 = 24,000 litres."
    ],
    "trick": "V = √(3 × 12 × 16) = √576 = 24 m³  ⇒  24 × 1000 = 24,000 litres."
  },
  {
    "id": 19,
    "category": "cube_cuboid",
    "category_name": "Cube & Cuboid",
    "exam": "CGL MAINS 2018",
    "question": "A tank is in the form of a cuboid with length 12 m. If 18 kilolitre of water is removed from it, the water level goes down by 30 cm. What is the width (in m) of the tank?",
    "options": {
      "a": "4",
      "b": "5",
      "c": "5.5",
      "d": "4.5"
    },
    "answer": "b",
    "correct_text": "5",
    "formula": "Volume of removed water = l × w × Δh; 1 kL = 1 m³",
    "steps": [
      "18 kilolitres = 18 m³.",
      "Length l = 12 m, drop in water level Δh = 30 cm = 0.3 m.",
      "Volume = l × w × Δh  ⇒  18 = 12 × w × 0.3 = 3.6w.",
      "Width w = 18 / 3.6 = 5 m."
    ],
    "trick": "w = 18 / (12 × 0.3) = 18 / 3.6 = 5 m."
  },
  {
    "id": 20,
    "category": "cube_cuboid",
    "category_name": "Cube & Cuboid",
    "exam": "CHSL 2024 Pre",
    "question": "An iron box with external dimensions 60 cm, 40 cm, and 20 cm is made of 1 cm thick sheet. If 1 cm³ of iron weighs 50 gm, the weight of the empty box is:",
    "options": {
      "a": "214.05kg",
      "b": "240kg",
      "c": "400kg",
      "d": "416.40kg"
    },
    "answer": "d",
    "correct_text": "416.40kg",
    "formula": "Volume of iron = External Vol - Internal Vol; Weight = Volume × Density",
    "steps": [
      "External dimensions: 60 × 40 × 20 cm  ⇒  External Vol = 48,000 cm³.",
      "Sheet thickness = 1 cm.",
      "Internal dimensions: (60 - 2) × (40 - 2) × (20 - 2) = 58 × 38 × 18 cm.",
      "Internal Vol = 58 × 38 × 18 = 39,672 cm³.",
      "Volume of iron = 48,000 - 39,672 = 8,328 cm³.",
      "Weight = 8,328 × 50 g = 416,400 g = 416.40 kg."
    ],
    "trick": "V_iron = 48000 - 39672 = 8328 cm³. Weight = 8328 × 0.05 kg = 416.4 kg."
  },
  {
    "id": 21,
    "category": "cube_cuboid",
    "category_name": "Cube & Cuboid",
    "exam": "CHSL 2024 Pre",
    "question": "The volume of rectangular block is 12288 m³. Its dimension are in the ratio of 4:3 2. If the entire surface is polished at the rate 2 paise per m2, then find the total cost of polishing.",
    "options": {
      "a": "33.28",
      "b": "44.42",
      "c": "₹66.56",
      "d": "₹11.14"
    },
    "answer": "c",
    "correct_text": "₹66.56",
    "formula": "V = 4x × 3x × 2x = 24x³; Cost = TSA × Rate",
    "steps": [
      "24x³ = 12288  ⇒  x³ = 512  ⇒  x = 8.",
      "Dimensions: l = 32 m, b = 24 m, h = 16 m.",
      "TSA = 2(32 × 24 + 24 × 16 + 16 × 32) = 2(768 + 384 + 512) = 2(1664) = 3328 m².",
      "Cost = 3328 × 2 paise = 6656 paise = ₹66.56."
    ],
    "trick": "x = 8. TSA = 2(1664) = 3328. Cost = 3328 × 0.02 = ₹66.56."
  },
  {
    "id": 22,
    "category": "cube_cuboid",
    "category_name": "Cube & Cuboid",
    "exam": "CPO 2022 Pre",
    "question": "The length of a cold storage is 5 times its breadth, and its height is 8 m. The area of its four walls (including the doors) is 720 m² Find the total surface area of cold storage.",
    "options": {
      "a": "1290.6 m²",
      "b": "1275.3 m²",
      "c": "1265.25 m²",
      "d": "1282.5 m²"
    },
    "answer": "d",
    "correct_text": "1282.5 m²",
    "formula": "Area of 4 walls = 2(l + b)h; TSA = 4 walls + 2(lb)",
    "steps": [
      "Given: l = 5b, h = 8 m.",
      "Area of 4 walls = 2(5b + b)(8) = 96b = 720 m²  ⇒  b = 720 / 96 = 7.5 m.",
      "Length l = 5 × 7.5 = 37.5 m.",
      "Floor and ceiling area = 2(lb) = 2(37.5 × 7.5) = 2(281.25) = 562.5 m².",
      "Total surface area = 720 + 562.5 = 1282.5 m²."
    ],
    "trick": "b = 7.5, l = 37.5. 2(lb) = 562.5. TSA = 720 + 562.5 = 1282.5 m²."
  },
  {
    "id": 23,
    "category": "cube_cuboid",
    "category_name": "Cube & Cuboid",
    "exam": "CGL 2022 Pre",
    "question": "Three cubes of equal volume are joined end to end. Find the surface area of the resulting cuboid if the diagonal of the cube is 6√3 cm.",
    "options": {
      "a": "509 cm²",
      "b": "516 cm",
      "c": "504 cm",
      "d": "512 cm"
    },
    "answer": "c",
    "correct_text": "504 cm",
    "formula": "Cube diagonal = a√3; Cuboid TSA = 3(6a²) - 4a² = 14a²",
    "steps": [
      "Diagonal of cube = a√3 = 6√3 cm  ⇒  a = 6 cm.",
      "When 3 cubes are joined end to end, 2 contact faces (4 surfaces of a²) are hidden.",
      "Total surface area = 3(6a²) - 4a² = 18a² - 4a² = 14a².",
      "TSA = 14 × 6² = 14 × 36 = 504 cm²."
    ],
    "trick": "3 cubes joined in line have 14 exposed faces. TSA = 14 × a² = 14 × 36 = 504 cm²."
  },
  {
    "id": 24,
    "category": "cube_cuboid",
    "category_name": "Cube & Cuboid",
    "exam": "CGL 2022 Pre",
    "question": "A cuboid of length 36 m, breadth 18 m and height 9 m is melted and recast into a cube. Find the length of the diagonal of the cube.",
    "options": {
      "a": "18√3 m",
      "b": "15√3 m",
      "c": "12√3 m",
      "d": "17√3 m"
    },
    "answer": "a",
    "correct_text": "18√3 m",
    "formula": "V_cube = V_cuboid = l × b × h; Diagonal = a√3",
    "steps": [
      "Volume of cuboid = 36 × 18 × 9 = (2 × 18) × 18 × 9 = 18 × 18 × 18 = 18³ m³.",
      "Side of recast cube a = 18 m.",
      "Diagonal of the cube = a√3 = 18√3 m."
    ],
    "trick": "36 × 18 × 9 = 18 × (2 × 9) × 18 = 18³. Side = 18  ⇒  Diagonal = 18√3 m."
  },
  {
    "id": 25,
    "category": "cube_cuboid",
    "category_name": "Cube & Cuboid",
    "exam": "CGL MAINS 2020",
    "question": "The areas of three adjacent faces of a cuboidal solid block of wax are 216 cm², 96 cm² and 144 cm². It is melted and 8 cubes of the same size are formed from it. What is the lateral surface area (in cm²) of 3 such cubes?",
    "options": {
      "a": "648",
      "b": "432",
      "c": "576",
      "d": "288"
    },
    "answer": "b",
    "correct_text": "432",
    "formula": "V = √(A₁A₂A₃); LSA of cube = 4a²",
    "steps": [
      "V² = 216 × 96 × 144 = 6³ × (6 × 16) × 12² = 2985984  ⇒  V = 1728 cm³.",
      "Melted into 8 equal cubes  ⇒  Volume of each cube = 1728 / 8 = 216 cm³.",
      "Edge of each cube a = ∛216 = 6 cm.",
      "LSA of 1 cube = 4a² = 4 × 6² = 144 cm².",
      "LSA of 3 such cubes = 3 × 144 = 432 cm²."
    ],
    "trick": "V = 1728. Each cube = 216  ⇒  side = 6. LSA of 3 cubes = 3 × (4 × 36) = 432 cm²."
  },
  {
    "id": 26,
    "category": "cube_cuboid",
    "category_name": "Cube & Cuboid",
    "exam": "CGL MAINS 2018",
    "question": "A solid cube is cut into three cuboids of same volumes. What is the ratio of the surface area of the cube to the sum of the surface areas of any two of the cuboids so formed?",
    "options": {
      "a": "9: 10",
      "b": "27:16",
      "c": "27: 10",
      "d": "9:8"
    },
    "answer": "a",
    "correct_text": "9: 10",
    "formula": "SA_cube = 6a²; SA of 1 cuboid = (6a² + 4a²)/3 = 10a²/3",
    "steps": [
      "A cube of side a has surface area 6a².",
      "Cutting a cube into 3 equal-volume cuboids requires 2 parallel cuts.",
      "Each cut introduces 2 new faces of area a², adding 4a² in total.",
      "Combined surface area of all 3 cuboids = 6a² + 4a² = 10a².",
      "Surface area of each cuboid = 10a² / 3.",
      "Sum of surface areas of any two cuboids = 2 × (10a² / 3) = 20a² / 3.",
      "Ratio = 6a² : (20a² / 3) = 18 : 20 = 9 : 10."
    ],
    "trick": "Cube SA = 6. 3 cuboids total SA = 6 + 4 = 10. Two cuboids = 2/3 × 10 = 20/3. Ratio = 6 : (20/3) = 18 : 20 = 9 : 10."
  },
  {
    "id": 27,
    "category": "cube_cuboid",
    "category_name": "Cube & Cuboid",
    "exam": "CHSL 2020 Pre",
    "question": "From a rectangular sheet of dimensions 32cm x 18cm, a square of side 3 cm is cut from the four corners of the sheet and a box is made. The volume of the box is:",
    "options": {
      "a": "946 cm3",
      "b": "936 cm3",
      "c": "1305 cm3",
      "d": "1300 cm3"
    },
    "answer": "b",
    "correct_text": "936 cm3",
    "formula": "Box volume = (L - 2x)(B - 2x)x",
    "steps": [
      "Given sheet: 32 cm × 18 cm, corner square cut = 3 cm.",
      "Length of open box = 32 - 2(3) = 26 cm.",
      "Breadth of open box = 18 - 2(3) = 12 cm.",
      "Height of open box = 3 cm.",
      "Volume = 26 × 12 × 3 = 26 × 36 = 936 cm³."
    ],
    "trick": "26 × 12 × 3 = 26 × 36 = 936 cm³."
  },
  {
    "id": 28,
    "category": "cube_cuboid",
    "category_name": "Cube & Cuboid",
    "exam": "CPO 2024 Pre",
    "question": "A woman working in a company was supplied a rectangular solid (cuboid shape) of wax with dimensions 70 cm, 44 cm and 20 cm to prepare cylindrical candles, each 14 cm in diameter and 20 cm of height. Find the number of candles.",
    "options": {
      "a": "15",
      "b": "20",
      "c": "10",
      "d": "30"
    },
    "answer": "b",
    "correct_text": "20",
    "formula": "Number of candles = V_cuboid / V_cylinder; V_cyl = πr²h",
    "steps": [
      "Volume of wax block = 70 × 44 × 20 = 61,600 cm³.",
      "Candle cylinder: diameter = 14 cm  ⇒  r = 7 cm, h = 20 cm.",
      "Volume of 1 candle = (22/7) × 7² × 20 = 22 × 7 × 20 = 3,080 cm³.",
      "Number of candles = 61,600 / 3,080 = 20."
    ],
    "trick": "N = (70 × 44 × 20) / ((22/7) × 7 × 7 × 20) = (70 × 44) / (22 × 7) = (10 × 2) = 20."
  },
  {
    "id": 29,
    "category": "cube_cuboid",
    "category_name": "Cube & Cuboid",
    "exam": "MTS 2021",
    "question": "A large solid cube is melted and cast into 'N' small solid spheres, each of radius 3 cm, and 'N + 2' small solid cuboids, each of dimensions 4 cm x 4 cm x 6.5 cm. If the length of each side of the large solid cube is 12 cm, then find the value 'N'. [Use π = 22/7]",
    "options": {
      "a": "6",
      "b": "7",
      "c": "5",
      "d": "8"
    },
    "answer": "b",
    "correct_text": "7",
    "formula": "V_cube = N × V_sphere + (N + 2) × V_cuboid",
    "steps": [
      "Volume of large cube = 12³ = 1728 cm³.",
      "Volume of 1 sphere (r = 3) = (4/3) × (22/7) × 3³ = 36 × (22/7) = 792 / 7 cm³.",
      "Volume of 1 cuboid = 4 × 4 × 6.5 = 104 cm³.",
      "N × (792/7) + (N + 2) × 104 = 1728.",
      "N(792/7 + 104) = 1728 - 208 = 1520.",
      "N((792 + 728)/7) = 1520  ⇒  N(1520/7) = 1520  ⇒  N = 7."
    ],
    "trick": "1520 / 7 × N = 1520  ⇒  N = 7 directly!"
  },
  {
    "id": 30,
    "category": "cylinder_cone",
    "category_name": "Cylinder, Cone & Frustum",
    "exam": "CGL 2022 Pre",
    "question": "The radius of a right circular cylinder is five times of its height. If the height of the cylinder is 3.5 cm, then what is the volume of cylinder?",
    "options": {
      "a": "3368.75 cm³",
      "b": "3872.75 cm3",
      "c": "3146.75 cm3",
      "d": "3524.25 cm3"
    },
    "answer": "a",
    "correct_text": "3368.75 cm³",
    "formula": "V = πr²h; r = 5h",
    "steps": [
      "Given: h = 3.5 cm, r = 5h = 5 × 3.5 = 17.5 cm.",
      "V = πr²h = (22/7) × (17.5)² × 3.5 = (22/7) × 306.25 × 3.5.",
      "3.5 / 7 = 0.5  ⇒  V = 22 × 306.25 × 0.5 = 11 × 306.25 = 3368.75 cm³."
    ],
    "trick": "r = 35/2, h = 7/2. V = 22/7 × (35/2)² × 7/2 = 11 × 1225 / 4 = 13475 / 4 = 3368.75 cm³."
  },
  {
    "id": 31,
    "category": "cylinder_cone",
    "category_name": "Cylinder, Cone & Frustum",
    "exam": "CHSL 2022 Mains",
    "question": "The radii of two cylinders are in the ratio 2:1 and their heights are in the ratio 5:2. The ratio of their volumes is:",
    "options": {
      "a": "20:1",
      "b": "15:1",
      "c": "10:1",
      "d": "5:1"
    },
    "answer": "c",
    "correct_text": "10:1",
    "formula": "V₁ / V₂ = (r₁/r₂)² × (h₁/h₂)",
    "steps": [
      "Given: r₁/r₂ = 2/1 and h₁/h₂ = 5/2.",
      "V₁ / V₂ = (2/1)² × (5/2) = 4 × (5/2) = 10 / 1 = 10 : 1."
    ],
    "trick": "Volume ratio = 2² × 5 : 1² × 2 = 20 : 2 = 10 : 1."
  },
  {
    "id": 32,
    "category": "cylinder_cone",
    "category_name": "Cylinder, Cone & Frustum",
    "exam": "CGL 2024 Pre",
    "question": "The circumference of the base of the cylindrical vessel is 154 cm and its height is 49 mm. How many litres of water can it hold? (correct to three places of decimals, use π = 22/7)",
    "options": {
      "a": "9.244",
      "b": "2.439",
      "c": "3.924",
      "d": "4.329"
    },
    "answer": "a",
    "correct_text": "9.244",
    "formula": "Circumference = 2πr; V = πr²h; 1 litre = 1000 cm³",
    "steps": [
      "2πr = 154  ⇒  2 × (22/7) × r = 154  ⇒  r = 154 × 7 / 44 = 24.5 cm.",
      "Height h = 49 mm = 4.9 cm.",
      "V = (22/7) × (24.5)² × 4.9 = 22 × 600.25 × 0.7 = 15.4 × 600.25 = 9243.85 cm³.",
      "In litres = 9243.85 / 1000 ≈ 9.244 litres."
    ],
    "trick": "r = 49/2, h = 4.9. V = 22/7 × 2401/4 × 4.9 = 9243.85 cm³  ⇒  9.244 L."
  },
  {
    "id": 33,
    "category": "cylinder_cone",
    "category_name": "Cylinder, Cone & Frustum",
    "exam": "CGL 2024 Pre",
    "question": "The base radius of a circular cylinder is 10.5 cm. If the area of its curved surface is 792 cm 2 , then what is the volume of the cylinder?",
    "options": {
      "a": "4185 cm3",
      "b": "4518 cm3",
      "c": "4152 cm3",
      "d": "4158 cm3"
    },
    "answer": "d",
    "correct_text": "4158 cm3",
    "formula": "CSA = 2πrh; Volume = πr²h = (CSA × r) / 2",
    "steps": [
      "Given: r = 10.5 cm, CSA = 792 cm².",
      "2πrh = 792  ⇒  2 × (22/7) × 10.5 × h = 792  ⇒  66h = 792  ⇒  h = 12 cm.",
      "Volume = πr²h = (22/7) × (10.5)² × 12 = 4158 cm³.",
      "Shortcut: Volume = (CSA × r) / 2 = (792 × 10.5) / 2 = 396 × 10.5 = 4158 cm³."
    ],
    "trick": "Direct relation: V = (CSA × r) / 2 = 792 × 10.5 / 2 = 396 × 10.5 = 4158 cm³ in 5 seconds!"
  },
  {
    "id": 34,
    "category": "cylinder_cone",
    "category_name": "Cylinder, Cone & Frustum",
    "exam": "CGL 2024 Pre",
    "question": "A rectangular piece of paper is 50 cm long and 22 cm wide. If a cylinder is formed by rolling the paper along its breadth, then the volume of the cylinder is:",
    "options": {
      "a": "2,125 cm3",
      "b": "1,925 cm3",
      "c": "2025 cm3",
      "d": "1,825 cm3"
    },
    "answer": "b",
    "correct_text": "1,925 cm3",
    "formula": "Rolled along breadth  ⇒  2πr = breadth, h = length; V = πr²h",
    "steps": [
      "When rolled along breadth, 22 cm becomes the circumference of the cylinder base.",
      "2πr = 22  ⇒  2 × (22/7) × r = 22  ⇒  r = 3.5 cm = 7/2 cm.",
      "Height h = 50 cm.",
      "Volume = πr²h = (22/7) × (7/2)² × 50 = (22/7) × (49/4) × 50 = (77/2) × 50 = 77 × 25 = 1925 cm³."
    ],
    "trick": "r = 3.5, h = 50. V = 22/7 × 12.25 × 50 = 38.5 × 50 = 1925 cm³."
  },
  {
    "id": 35,
    "category": "cylinder_cone",
    "category_name": "Cylinder, Cone & Frustum",
    "exam": "CGL 2024 Pre",
    "question": "A cylindrical tank of radius 14 cm is full of water. If 616 litres of water are drawn out, then the water level in the tank is dropped by_m. (Take pi = 22/7 )",
    "options": {
      "a": "1000",
      "b": "100",
      "c": "1",
      "d": "10"
    },
    "answer": "d",
    "correct_text": "10",
    "formula": "Volume drawn = πr²Δh; 1 litre = 1000 cm³",
    "steps": [
      "616 litres = 616,000 cm³.",
      "Radius r = 14 cm.",
      "V = πr²Δh  ⇒  616,000 = (22/7) × 14² × Δh = 616 × Δh.",
      "Δh = 616,000 / 616 = 1000 cm.",
      "In metres = 1000 / 100 = 10 m."
    ],
    "trick": "616 L = 0.616 m³. Base area = 22/7 × 0.14² = 0.0616 m². Drop = 0.616 / 0.0616 = 10 m."
  },
  {
    "id": 36,
    "category": "cylinder_cone",
    "category_name": "Cylinder, Cone & Frustum",
    "exam": "CGL 2023 Pre",
    "question": "A one metre pipe is made with inner diameter equal to outer radius. How much material (in cube units) is required to make the pipe, if it can hold 88/7 cubic metres water in it?",
    "options": {
      "a": "37.7",
      "b": "35.5",
      "c": "33.3",
      "d": "36.6"
    },
    "answer": "a",
    "correct_text": "37.7",
    "formula": "Inner diameter 2r = R  ⇒  R = 2r; Material = π(R² - r²)h; Capacity = πr²h",
    "steps": [
      "Given pipe length h = 1 m. Internal diameter 2r = outer radius R  ⇒  R = 2r.",
      "Capacity = πr²h = 88/7  ⇒  (22/7) × r² × 1 = 88/7  ⇒  22r² = 88  ⇒  r² = 4  ⇒  r = 2 m.",
      "Outer radius R = 2r = 4 m.",
      "Material required = π(R² - r²)h = (22/7) × (4² - 2²) × 1 = (22/7) × 12 = 264 / 7 ≈ 37.714 ≈ 37.7 cubic units."
    ],
    "trick": "R = 2r  ⇒  Material / Capacity = (R² - r²) / r² = (4 - 1) / 1 = 3 times! Material = 3 × (88/7) = 264/7 ≈ 37.7."
  },
  {
    "id": 37,
    "category": "cylinder_cone",
    "category_name": "Cylinder, Cone & Frustum",
    "exam": "CGL 2022 Pre",
    "question": "A conical vessel, whose internal radius is 20 cm and height is 27 cm, is full of water. If this water is poured into a cylindrical vessel with internal radius 15cm, what will be the height to which the water rises in it?",
    "options": {
      "a": "16 cm",
      "b": "10 cm",
      "c": "12 cm",
      "d": "14 cm"
    },
    "answer": "a",
    "correct_text": "16 cm",
    "formula": "V_cone = (1/3)πr₁²h₁; V_cyl = πr₂²h₂",
    "steps": [
      "Volume of cone = (1/3)π × 20² × 27 = 3600π cm³.",
      "Water poured into cylinder of radius r₂ = 15 cm.",
      "πr₂²h₂ = 3600π  ⇒  15² × h₂ = 3600  ⇒  225 h₂ = 3600.",
      "h₂ = 3600 / 225 = 16 cm."
    ],
    "trick": "h₂ = (1/3 × 20² × 27) / 15² = (400 × 9) / 225 = 3600 / 225 = 16 cm."
  },
  {
    "id": 38,
    "category": "cylinder_cone",
    "category_name": "Cylinder, Cone & Frustum",
    "exam": "CGL 2022 Pre",
    "question": "The external diameter of an iron pipe is 20 cm and its length is 12 cm. If the thickness of the pipe is 1 cm, find the surface area of the pipe (π = 22/7) correct to two places of decimal.",
    "options": {
      "a": "1,662.67 cm²",
      "b": "1,552.57 cm²",
      "c": "1,442.48 cm²",
      "d": "1,772.76 cm²"
    },
    "answer": "b",
    "correct_text": "1,552.57 cm²",
    "formula": "TSA of hollow pipe = 2π(R + r)h + 2π(R² - r²)",
    "steps": [
      "External diameter = 20 cm  ⇒  Outer radius R = 10 cm.",
      "Thickness = 1 cm  ⇒  Inner radius r = 9 cm. Length h = 12 cm.",
      "TSA = 2πRh + 2πrh + 2π(R² - r²) = 2π[(R + r)h + (R² - r²)].",
      "TSA = 2π[(19)(12) + (100 - 81)] = 2π[228 + 19] = 2π × 247 = 494π.",
      "TSA = 494 × (22/7) = 10868 / 7 ≈ 1552.57 cm²."
    ],
    "trick": "2π(19 × 12 + 19) = 2π × 19 × 13 = 494π = 494 × 22/7 ≈ 1552.57 cm²."
  },
  {
    "id": 39,
    "category": "cylinder_cone",
    "category_name": "Cylinder, Cone & Frustum",
    "exam": "CGL 2022 Pre",
    "question": "A solid copper sphere of radius 9 cm is hammered and moulded into a wire of radius 2 cm. What is the length of this wire?",
    "options": {
      "a": "224 cm",
      "b": "183 cm",
      "c": "198 cm",
      "d": "243 cm"
    },
    "answer": "d",
    "correct_text": "243 cm",
    "formula": "V_sphere = (4/3)πR³ = V_wire = πr²L",
    "steps": [
      "Volume of solid copper sphere (R = 9 cm) = (4/3)π × 9³ = (4/3)π × 729 = 972π cm³.",
      "Volume of cylindrical wire (r = 2 cm) = π × 2² × L = 4πL.",
      "4πL = 972π  ⇒  L = 972 / 4 = 243 cm."
    ],
    "trick": "L = (4/3 × 9³) / 2² = (4/3 × 729) / 4 = 729 / 3 = 243 cm."
  },
  {
    "id": 40,
    "category": "cylinder_cone",
    "category_name": "Cylinder, Cone & Frustum",
    "exam": "CGL 2021 Pre",
    "question": "A solid cone of radius 7 cm and height 7 cm was melted along with two solid spheres of radius 7 cm each to form a solid cylinder of radius 7 cm. What is the curved surface area (in cm²) of the cylinder? (Take π, 22/7)",
    "options": {
      "a": "924",
      "b": "2196",
      "c": "880",
      "d": "482"
    },
    "answer": "a",
    "correct_text": "924",
    "formula": "V_cone + 2 × V_sphere = V_cylinder; CSA_cylinder = 2πrH",
    "steps": [
      "All shapes have radius r = 7 cm.",
      "Cone height h = 7 cm  ⇒  V_cone = (1/3)π(7)³.",
      "Two spheres  ⇒  2 × (4/3)π(7)³ = (8/3)π(7)³.",
      "Total volume = (1/3 + 8/3)π(7)³ = (9/3)π(7)³ = 3π(7)³.",
      "Equating to cylinder: π(7)²H = 3π(7)³  ⇒  H = 3 × 7 = 21 cm.",
      "CSA of cylinder = 2πrH = 2 × (22/7) × 7 × 21 = 44 × 21 = 924 cm²."
    ],
    "trick": "Total vol in terms of πr³: cone is 1/3, 2 spheres are 8/3  ⇒  sum = 9/3 = 3. Cylinder height H = 3r = 21. CSA = 2 × 22/7 × 7 × 21 = 924."
  },
  {
    "id": 41,
    "category": "cylinder_cone",
    "category_name": "Cylinder, Cone & Frustum",
    "exam": "CGL 2021 Pre",
    "question": "A 35 cm high bucket in the form of a frustum is full of water. Radii of its lower and upper ends are 12 cm and 18 cm, respectively. If water from this bucket is poured in a cylindrical drum, whose base radius is 20 cm, then what will be the height of water (in cm) in the drum?",
    "options": {
      "a": "16.25",
      "b": "19.95",
      "c": "18.25",
      "d": "20.50"
    },
    "answer": "b",
    "correct_text": "19.95",
    "formula": "V_frustum = (1/3)πH(R² + r² + Rr); V_cyl = πr_c²h",
    "steps": [
      "Frustum: H = 35 cm, r = 12 cm, R = 18 cm.",
      "R² + r² + Rr = 18² + 12² + (18 × 12) = 324 + 144 + 216 = 684.",
      "V_frustum = (1/3)π × 35 × 684 = 35 × 228π = 7980π cm³.",
      "Cylindrical drum radius r_c = 20 cm.",
      "π × 20² × h = 7980π  ⇒  400h = 7980  ⇒  h = 7980 / 400 = 19.95 cm."
    ],
    "trick": "h = (35 × 684) / (3 × 400) = (35 × 228) / 400 = 7980 / 400 = 19.95 cm."
  },
  {
    "id": 42,
    "category": "cylinder_cone",
    "category_name": "Cylinder, Cone & Frustum",
    "exam": "CGL MAINS 2020",
    "question": "A cylindrical tube, open at both ends, is made of a metal sheet which is 0.5 cm thick. Its outer radius is 4 cm and length is 2 m. How much metal (in cm3 ) has been used in making the tube?",
    "options": {
      "a": "800π",
      "b": "450π",
      "c": "750π",
      "d": "550π"
    },
    "answer": "c",
    "correct_text": "750π",
    "formula": "V_metal = π(R² - r²)L",
    "steps": [
      "Outer radius R = 4 cm, thickness = 0.5 cm  ⇒  Inner radius r = 3.5 cm.",
      "Length L = 2 m = 200 cm.",
      "R² - r² = 4² - 3.5² = 16 - 12.25 = 3.75 cm².",
      "V_metal = π × 3.75 × 200 = 750π cm³."
    ],
    "trick": "(4 + 3.5)(4 - 3.5) × 200π = 7.5 × 0.5 × 200π = 3.75 × 200π = 750π cm³."
  },
  {
    "id": 43,
    "category": "cylinder_cone",
    "category_name": "Cylinder, Cone & Frustum",
    "exam": "CGL MAINS 2019",
    "question": "From a solid cylindrical wooden block of height 18 cm and radius 7.5 cm, a conical cavity of the same height and same radius is taken out. What is total surface area (in cm²) of the remaining solid?",
    "options": {
      "a": "326.25π",
      "b": "416.25π",
      "c": "472.5π",
      "d": "270π"
    },
    "answer": "c",
    "correct_text": "472.5π",
    "formula": "TSA = CSA_cyl + Base_area + CSA_cone = 2πrh + πr² + πrl",
    "steps": [
      "Cylinder: r = 7.5 cm, h = 18 cm.",
      "Slant height of cone l = √(r² + h²) = √(7.5² + 18²) = √(56.25 + 324) = √380.25 = 19.5 cm.",
      "Remaining solid has: 1 cylindrical side, 1 flat base, and 1 conical interior surface.",
      "TSA = 2πrh + πr² + πrl = πr(2h + r + l).",
      "TSA = π × 7.5 × (36 + 7.5 + 19.5) = π × 7.5 × 63 = 472.5π cm²."
    ],
    "trick": "l = 19.5. Formula πr(2h + r + l) = 7.5π(36 + 7.5 + 19.5) = 7.5 × 63π = 472.5π cm²."
  },
  {
    "id": 44,
    "category": "cylinder_cone",
    "category_name": "Cylinder, Cone & Frustum",
    "exam": "CGL MAINS 2018",
    "question": "The height of a solid cylinder is 30 cm and the diameter of its base is 10 cm. Two identical conical holes each of radius 5 cm and height 12 cm are drilled out. What is the surface area (in cm²) of the remaining solid?",
    "options": {
      "a": "230π",
      "b": "430π",
      "c": "330π",
      "d": "120π"
    },
    "answer": "b",
    "correct_text": "430π",
    "formula": "TSA = CSA_cylinder + 2 × CSA_cone",
    "steps": [
      "Cylinder: h = 30 cm, diameter 10 cm  ⇒  r = 5 cm.",
      "Conical holes: r = 5 cm, h_cone = 12 cm  ⇒  Slant height l = √(5² + 12²) = 13 cm.",
      "Since the holes are drilled through both circular bases, the bases become open conical cavities.",
      "Remaining SA = CSA_cyl + 2 × (CSA_cone) = 2πrh + 2πrl = 2πr(h + l).",
      "Remaining SA = 2π(5)(30 + 13) = 10π × 43 = 430π cm²."
    ],
    "trick": "2πr(h + l) = 2π(5)(30 + 13) = 10π × 43 = 430π cm²."
  },
  {
    "id": 45,
    "category": "cylinder_cone",
    "category_name": "Cylinder, Cone & Frustum",
    "exam": "CHSL 2023 Pre",
    "question": "If the curved surface area of a cylinder is increased by 20%, and height is decreased by 4%, then the net decrease or increase in the volume will be:",
    "options": {
      "a": "36% decrease",
      "b": "20% increase",
      "c": "50% increase",
      "d": "33% decrease"
    },
    "answer": "c",
    "correct_text": "50% increase",
    "formula": "CSA = 2πrh  ⇒  r ∝ CSA / h; V = πr²h = (CSA²)/(4πh)",
    "steps": [
      "CSA increases by 20%  ⇒  CSA' = 1.2 × CSA.",
      "Height decreases by 4%  ⇒  h' = 0.96 × h.",
      "Radius ratio: r'/r = (CSA'/CSA) / (h'/h) = 1.20 / 0.96 = 1.25 (increased by 25%).",
      "Volume V = πr²h  ⇒  V'/V = (r'/r)² × (h'/h) = (1.25)² × 0.96 = 1.5625 × 0.96 = 1.50.",
      "Net change in volume = (1.50 - 1.00) × 100% = 50% increase."
    ],
    "trick": "V = (CSA × r) / 2. r increases by 1.2/0.96 = 1.25. V increases by (1.2 × 1.25) = 1.50  ⇒  +50% increase."
  },
  {
    "id": 46,
    "category": "cylinder_cone",
    "category_name": "Cylinder, Cone & Frustum",
    "exam": "CPO 2024 Pre",
    "question": "A solid metal cylinder of 12 cm height and 7 cm radius is melted and recast into two cones in the proportion of 1:2 (volume), keeping the height 12 cm. What would be the percentage change in the flat surface area before and after [Use π22/7]?",
    "options": {
      "a": "35 %",
      "b": "20%",
      "c": "45%",
      "d": "50%"
    },
    "answer": "d",
    "correct_text": "50%",
    "formula": "Flat surface before = 2πr²; Flat surface after = πr₁² + πr₂²",
    "steps": [
      "Initial cylinder: r = 7 cm, h = 12 cm. Initial flat surface area (2 circular ends) = 2πr² = 2π(49) = 98π.",
      "Volume of cylinder = πr²h = π(49)(12) = 588π.",
      "Melted into 2 cones in ratio 1:2 (volume), height = 12 cm.",
      "V_cone1 = (1/3) × 588π = 196π  ⇒  (1/3)π r₁²(12) = 196π  ⇒  4π r₁² = 196π  ⇒  r₁² = 49.",
      "V_cone2 = (2/3) × 588π = 392π  ⇒  (1/3)π r₂²(12) = 392π  ⇒  4π r₂² = 392π  ⇒  r₂² = 98.",
      "Flat surface area after (bases of 2 cones) = πr₁² + πr₂² = π(49 + 98) = 147π.",
      "Percentage change = [(147π - 98π) / 98π] × 100% = (49 / 98) × 100% = 50%."
    ],
    "trick": "Cones have 1/3 volume of cylinders of same height and base. Since sum of cone volumes = cylinder volume, sum of cone base areas = 3 × (1/2 original bases) = 1.5x  ⇒  50% increase!"
  },
  {
    "id": 47,
    "category": "cylinder_cone",
    "category_name": "Cylinder, Cone & Frustum",
    "exam": "CPO 2024 Pre",
    "question": "Two rectangular sheets of paper, each 60 cm × 36 cm, are made into two right circular cylinders, one by rolling the paper along its length and the other along the breadth. The ratio of the volumes of the two cylinders, thus formed, is:",
    "options": {
      "a": "5:6",
      "b": "8:3",
      "c": "7:4",
      "d": "5:3"
    },
    "answer": "d",
    "correct_text": "5:3",
    "formula": "V = (Circumference)² × height / (4π)",
    "steps": [
      "Rolling along length (60 cm becomes circumference): C₁ = 60, h₁ = 36  ⇒  V₁ = (60² × 36) / (4π).",
      "Rolling along breadth (36 cm becomes circumference): C₂ = 36, h₂ = 60  ⇒  V₂ = (36² × 60) / (4π).",
      "Ratio V₁ / V₂ = (60² × 36) / (36² × 60) = 60 / 36 = 5 / 3 = 5 : 3."
    ],
    "trick": "Direct rule: Ratio of volumes when rolled along length vs breadth = Length : Breadth = 60 : 36 = 5 : 3!"
  },
  {
    "id": 48,
    "category": "cylinder_cone",
    "category_name": "Cylinder, Cone & Frustum",
    "exam": "CPO 2022 Pre",
    "question": "Water is flowing through a cylindrical canal with an internal diameter of 7 m at the speed of 18 km/h. Find the volume of water flowing through the canal in 30 minutes. (take pi = 22/7 )",
    "options": {
      "a": "3, 76, 500 m3",
      "b": "3, 56, 500 m3",
      "c": "3, 66, 500 m3",
      "d": "3, 46, 500 m3"
    },
    "answer": "d",
    "correct_text": "3, 46, 500 m3",
    "formula": "Volume = πr²L; L = Speed × Time",
    "steps": [
      "Internal diameter = 7 m  ⇒  r = 3.5 m = 7/2 m.",
      "Speed = 18 km/h = 18,000 m/h.",
      "Time = 30 minutes = 0.5 hour  ⇒  Length of water column L = 18,000 × 0.5 = 9,000 m.",
      "Volume = (22/7) × (7/2)² × 9,000 = (22/7) × (49/4) × 9,000 = (77/2) × 9,000 = 77 × 4,500 = 346,500 m³."
    ],
    "trick": "V = 38.5 × 9,000 = 346,500 m³."
  },
  {
    "id": 49,
    "category": "cylinder_cone",
    "category_name": "Cylinder, Cone & Frustum",
    "exam": "CPO 2019 Pre",
    "question": "A right circular cylinder of maximum possible size is cut out from a solid wooden cube. The remaining material of the cube is what percentage of the original cube? (Take pi = 3.14 )",
    "options": {
      "a": "22.4",
      "b": "21.5",
      "c": "22.8",
      "d": "21.8"
    },
    "answer": "b",
    "correct_text": "21.5",
    "formula": "Max cylinder inside cube has diameter = a, height = a; % remaining = (1 - π/4) × 100%",
    "steps": [
      "For a cube of edge a, the maximum inscribed cylinder has diameter a (r = a/2) and height a.",
      "Volume of cube = a³.",
      "Volume of cylinder = π(a/2)²(a) = (π/4)a³ = (3.14 / 4)a³ = 0.785a³ = 78.5% of cube volume.",
      "Remaining material = 100% - 78.5% = 21.5%."
    ],
    "trick": "Standard ratio: Max cylinder in cube occupies π/4 ≈ 78.5% of volume. Wasted/remaining is always 100 - 78.5 = 21.5%."
  },
  {
    "id": 50,
    "category": "cylinder_cone",
    "category_name": "Cylinder, Cone & Frustum",
    "exam": "CPO 2018 Pre",
    "question": "An 18m deep well with diameter 7m is dug and the earth from digging is spread evenly to form a platform 18m X 14m. The height of the platform is:",
    "options": {
      "a": "2.6 m",
      "b": "3.05 m",
      "c": "2.75 m",
      "d": "3.2 m"
    },
    "answer": "c",
    "correct_text": "2.75 m",
    "formula": "Volume of well = Volume of platform: πr²h = L × B × H",
    "steps": [
      "Well: diameter = 7 m  ⇒  r = 3.5 m = 7/2 m, depth h = 18 m.",
      "Volume of dug earth = (22/7) × (7/2)² × 18 = (77/2) × 18 = 77 × 9 = 693 m³.",
      "Platform base area = 18 × 14 = 252 m².",
      "Height of platform H = 693 / 252 = 2.75 m."
    ],
    "trick": "H = (22/7 × 49/4 × 18) / (18 × 14) = (77/2) / 14 = 77 / 28 = 11 / 4 = 2.75 m."
  },
  {
    "id": 51,
    "category": "cylinder_cone",
    "category_name": "Cylinder, Cone & Frustum",
    "exam": "MTS 2021",
    "question": "A goldsmith uses 110 cm³ of gold to make a wire 1 mm of diameter. He will use this wire to make gold chains of equal lengths. If each chain requires 56 cm length of wire, then how many gold chains can he make? [Use π = 22/7]",
    "options": {
      "a": "210",
      "b": "320",
      "c": "250",
      "d": "160"
    },
    "answer": "c",
    "correct_text": "250",
    "formula": "V_gold = πr²L; Number of chains = Total wire length / Length per chain",
    "steps": [
      "Total volume of gold = 110 cm³.",
      "Wire diameter = 1 mm = 0.1 cm  ⇒  radius r = 0.05 cm = 1/20 cm.",
      "Cross-sectional area = (22/7) × (1/20)² = 22 / (7 × 400) = 11 / 1400 cm².",
      "Total wire length L = 110 / (11/1400) = 110 × (1400/11) = 14,000 cm.",
      "Each chain requires 56 cm of wire.",
      "Number of chains = 14,000 / 56 = 250."
    ],
    "trick": "L = 110 × 2800 / 22 = 14,000 cm. Chains = 14,000 / 56 = 250."
  },
  {
    "id": 52,
    "category": "cylinder_cone",
    "category_name": "Cylinder, Cone & Frustum",
    "exam": "MTS 2021",
    "question": "In a camp, there are tents of the same shape and size. Each tent is cylindrical up to a height of 4 m and conical above it. The diameters of the bases of the cylinder and the cone are both 10.5 m and the slant height of the conical part is 10 m. If a total of 3861 m² canvas is used in making all the tents, then how many tents are there in the camp? [Use π = 22/7]",
    "options": {
      "a": "7",
      "b": "13",
      "c": "19",
      "d": "11"
    },
    "answer": "b",
    "correct_text": "13",
    "formula": "Canvas per tent = 2πrh + πrl = πr(2h + l); Total tents = Total canvas / Canvas per tent",
    "steps": [
      "Base diameter = 10.5 m  ⇒  radius r = 5.25 m = 21/4 m.",
      "Cylinder height h = 4 m, cone slant height l = 10 m.",
      "Canvas per tent = πr(2h + l) = (22/7) × (21/4) × (2 × 4 + 10) = (33/2) × 18 = 297 m².",
      "Total tents = 3861 / 297 = 13."
    ],
    "trick": "Area per tent = 33/2 × 18 = 297 m². Number of tents = 3861 / 297 = 13."
  },
  {
    "id": 53,
    "category": "cylinder_cone",
    "category_name": "Cylinder, Cone & Frustum",
    "exam": "MTS 2020 Pre",
    "question": "The material of a sphere of radius r is melted and recast into a hollow cylindrical shell of thickness a and outer radius b. What is its length assuming that no material is lost in recasting?",
    "options": {
      "a": "4r3 / 3a(2a - b)",
      "b": "4r3 / 3a (b+a)(b-a)",
      "c": "4r3 / 3a(b-a)",
      "d": "4r3 / 3a (2b-a)"
    },
    "answer": "d",
    "correct_text": "4r3 / 3a (2b-a)",
    "formula": "V_sphere = (4/3)πr³; Hollow cylinder cross-section = π[b² - (b - a)²] = πa(2b - a)",
    "steps": [
      "Outer radius = b, thickness = a  ⇒  Inner radius = b - a.",
      "Cross-sectional area of metal = π[b² - (b - a)²] = π[b² - (b² - 2ab + a²)] = π(2ab - a²) = πa(2b - a).",
      "Volume of hollow cylindrical shell of length L = πa(2b - a)L.",
      "Equating to sphere volume: πa(2b - a)L = (4/3)πr³.",
      "Length L = 4r³ / [3a(2b - a)]."
    ],
    "trick": "b² - (b-a)² = a(2b-a). Equate volumes: L = 4r³ / [3a(2b - a)]."
  },
  {
    "id": 54,
    "category": "cylinder_cone",
    "category_name": "Cylinder, Cone & Frustum",
    "exam": "CGL MAINS 2019",
    "question": "The circumference of the base of a right circular cone is 44 cm and its height is 24cm. The curved surface area (in cm²) of the cone is :",
    "options": {
      "a": "572",
      "b": "550",
      "c": "528",
      "d": "440"
    },
    "answer": "b",
    "correct_text": "550",
    "formula": "Circumference = 2πr  ⇒  r = 7; l = √(r² + h²); CSA = πrl",
    "steps": [
      "Circumference = 2πr = 44  ⇒  2 × (22/7) × r = 44  ⇒  r = 7 cm.",
      "Height h = 24 cm.",
      "Slant height l = √(7² + 24²) = 25 cm (7, 24, 25 Pythagorean triplet).",
      "CSA = πrl = (22/7) × 7 × 25 = 22 × 25 = 550 cm²."
    ],
    "trick": "r = 7, h = 24  ⇒  l = 25. CSA = 22 × 25 = 550 cm²."
  },
  {
    "id": 55,
    "category": "cylinder_cone",
    "category_name": "Cylinder, Cone & Frustum",
    "exam": "CGL 2023 Pre",
    "question": "A conical tent of height 10 m and base diameter 48 m was erected by a company in a park. Find the curved surface area of the tent (in m2 ) .",
    "options": {
      "a": "56 𝝅",
      "b": "1248 𝝅",
      "c": "1152 𝝅",
      "d": "624 𝝅"
    },
    "answer": "d",
    "correct_text": "624 𝝅",
    "formula": "CSA = πrl; l = √(r² + h²)",
    "steps": [
      "Height h = 10 m, diameter 48 m  ⇒  radius r = 24 m.",
      "Slant height l = √(10² + 24²) = 2 × √(5² + 12²) = 2 × 13 = 26 m.",
      "CSA = πrl = π × 24 × 26 = 624π m²."
    ],
    "trick": "5-12-13 doubled gives 10-24-26 triplet. Slant height l = 26. CSA = 24 × 26π = 624π m²."
  },
  {
    "id": 56,
    "category": "cylinder_cone",
    "category_name": "Cylinder, Cone & Frustum",
    "exam": "CGL 2023 Pre",
    "question": "The volume of a cone with height equal to radius and slant height 5 cm is:",
    "options": {
      "a": "125π /12√3 cm³",
      "b": "125π / 6√3 cm³",
      "c": "125π 12√2  cm3",
      "d": "125π /  6√2 cm3"
    },
    "answer": "d",
    "correct_text": "125π /  6√2 cm3",
    "formula": "r = h; l = r√2  ⇒  r = l / √2; Volume = (1/3)πr²h = (1/3)πr³",
    "steps": [
      "Given: height equals radius (h = r), slant height l = 5 cm.",
      "l² = r² + h² = 2r²  ⇒  r√2 = 5  ⇒  r = 5 / √2 cm.",
      "Height h = 5 / √2 cm.",
      "Volume = (1/3)πr²h = (1/3)π × (25/2) × (5/√2) = 125π / (6√2) cm³."
    ],
    "trick": "V = 1/3 π r³ = 1/3 π (5/√2)³ = 125π / (6√2) cm³."
  },
  {
    "id": 57,
    "category": "cylinder_cone",
    "category_name": "Cylinder, Cone & Frustum",
    "exam": "CGL 2022 Pre",
    "question": "How many metres of 2-m-wide cloth will be required to make a conical tent with the diameter of the base as 14 m and slant height as 9 m ignore wastage?",
    "options": {
      "a": "66 m",
      "b": "99 m",
      "c": "88 m",
      "d": "77 m"
    },
    "answer": "b",
    "correct_text": "99 m",
    "formula": "Cloth length = CSA / width; CSA = πrl",
    "steps": [
      "Diameter = 14 m  ⇒  r = 7 m, slant height l = 9 m.",
      "CSA = πrl = (22/7) × 7 × 9 = 198 m².",
      "Width of cloth = 2 m.",
      "Length of cloth required = 198 / 2 = 99 m."
    ],
    "trick": "Length = (22 × 9) / 2 = 11 × 9 = 99 m."
  },
  {
    "id": 58,
    "category": "cylinder_cone",
    "category_name": "Cylinder, Cone & Frustum",
    "exam": "CGL 2022 Pre",
    "question": "A conical vessel (solid) is made of iron. Its base radius is 7 cm and height is 15 cm. If the weight of the iron per cubic centimetre is 15 g, what is the weight of the vessel?",
    "options": {
      "a": "13.55 kg",
      "b": "12.55 kg",
      "c": "14.55 kg",
      "d": "11.55 kg"
    },
    "answer": "d",
    "correct_text": "11.55 kg",
    "formula": "V = (1/3)πr²h; Weight = Volume × Density",
    "steps": [
      "Radius r = 7 cm, height h = 15 cm.",
      "Volume = (1/3) × (22/7) × 7² × 15 = 22 × 7 × 5 = 770 cm³.",
      "Weight = 770 × 15 g = 11,550 g = 11.55 kg."
    ],
    "trick": "770 × 15 = 11550 g = 11.55 kg."
  },
  {
    "id": 59,
    "category": "cylinder_cone",
    "category_name": "Cylinder, Cone & Frustum",
    "exam": "CGL 2024 Pre",
    "question": "A right triangle with sides 3 cm, 4 cm and 5 cm is rotated about the side of 3 cm to form a cone. The volume of the cone so formed is:",
    "options": {
      "a": "20 𝝅 cm3",
      "b": "16 𝝅 cm3",
      "c": "25 𝝅 cm3",
      "d": "28 𝝅 cm3"
    },
    "answer": "b",
    "correct_text": "16 𝝅 cm3",
    "formula": "Rotated about side of 3 cm  ⇒  h = 3 cm, r = 4 cm; V = (1/3)πr²h",
    "steps": [
      "Right triangle with sides 3, 4, 5 cm (hypotenuse = 5 cm).",
      "When rotated about the side of 3 cm, that side becomes the vertical axis/height: h = 3 cm.",
      "The other perpendicular side becomes the base radius: r = 4 cm.",
      "Volume of cone = (1/3)πr²h = (1/3)π × 4² × 3 = 16π cm³."
    ],
    "trick": "Rotated about leg of 3  ⇒  h = 3, r = 4. V = 1/3 π (16)(3) = 16π cm³."
  },
  {
    "id": 60,
    "category": "cylinder_cone",
    "category_name": "Cylinder, Cone & Frustum",
    "exam": "CGL MAINS 2020",
    "question": "Volume of a cone whose radius of a base and height are r and h respectively, is 400 cm³.What will be the volume of a cone whose radius of base and and height are 2r cm and h cm respectively?",
    "options": {
      "a": "100 cm³",
      "b": "1600 cm³",
      "c": "1200 cm³",
      "d": "800 cm³"
    },
    "answer": "b",
    "correct_text": "1600 cm³",
    "formula": "V ∝ r²; Doubling radius quadruples volume",
    "steps": [
      "Initial volume V₁ = (1/3)πr²h = 400 cm³.",
      "New cone has base radius 2r and same height h.",
      "New volume V₂ = (1/3)π(2r)²h = 4 × [(1/3)πr²h] = 4 × 400 = 1600 cm³."
    ],
    "trick": "Radius doubled  ⇒  Volume increases by 2² = 4 times  ⇒  4 × 400 = 1600 cm³."
  },
  {
    "id": 61,
    "category": "cylinder_cone",
    "category_name": "Cylinder, Cone & Frustum",
    "exam": "CGL MAINS 2020",
    "question": "The curved surface area of a (right circular cone is 2310 cm² and its radius is 21 cm. If its radius is increased by 100% and height is reduced by 50%, then its capacity (in litres) will be correct to one decimal place (Take pi = (22/7)",
    "options": {
      "a": "27.8",
      "b": "28.2",
      "c": "26.7",
      "d": "25.9"
    },
    "answer": "d",
    "correct_text": "25.9",
    "formula": "CSA = πrl; h = √(l² - r²); Capacity = (1/3)πR²H",
    "steps": [
      "CSA = 2310 cm², r = 21 cm  ⇒  (22/7) × 21 × l = 2310  ⇒  66l = 2310  ⇒  l = 35 cm.",
      "Height h = √(35² - 21²) = 7 × √(5² - 3²) = 7 × 4 = 28 cm.",
      "Radius increased by 100%  ⇒  New radius R = 2 × 21 = 42 cm.",
      "Height reduced by 50%  ⇒  New height H = 28 / 2 = 14 cm.",
      "New capacity = (1/3) × (22/7) × 42 × 42 × 14 = 44 × 588 = 25,872 cm³.",
      "In litres = 25,872 / 1000 = 25.872 ≈ 25.9 litres."
    ],
    "trick": "l = 35, h = 28. New R = 42, H = 14. V = 1/3 × 22/7 × 42² × 14 = 25872 cm³ = 25.9 L."
  },
  {
    "id": 62,
    "category": "cylinder_cone",
    "category_name": "Cylinder, Cone & Frustum",
    "exam": "CGL MAINS 2019",
    "question": "A conical tent has to accommodate 25 persons. Each person must have 4 m2 of space on the ground and 80 m3 of air to breathe. Find the height of the tent.",
    "options": {
      "a": "50 m",
      "b": "60 m",
      "c": "40 m",
      "d": "45 m"
    },
    "answer": "b",
    "correct_text": "60 m",
    "formula": "Base Area = 25 × 4 m²; Volume = 25 × 80 m³; h = 3V / Base Area",
    "steps": [
      "25 persons require 4 m² ground space each  ⇒  Base Area = 25 × 4 = 100 m².",
      "Total air volume required = 25 × 80 = 2000 m³.",
      "Volume of cone = (1/3) × Base Area × h.",
      "2000 = (1/3) × 100 × h  ⇒  h = (2000 × 3) / 100 = 60 m."
    ],
    "trick": "h = 3 × (Volume / Base Area) = 3 × 80 / 4 = 3 × 20 = 60 m!"
  },
  {
    "id": 63,
    "category": "cylinder_cone",
    "category_name": "Cylinder, Cone & Frustum",
    "exam": "CGL MAINS 2018",
    "question": "A right circular solid cone of radius 3.2 cm and height 7.2 cm is melted and recast into a right circular cylinder of height 9.6 cm. What is the diameter of the base of the cylinder?",
    "options": {
      "a": "4.2 cm",
      "b": "4.5 cm",
      "c": "3.5 cm",
      "d": "3.2 cm"
    },
    "answer": "d",
    "correct_text": "3.2 cm",
    "formula": "V_cone = (1/3)πr₁²h₁ = V_cyl = πr₂²h₂",
    "steps": [
      "Cone: r₁ = 3.2 cm, h₁ = 7.2 cm  ⇒  V_cone = (1/3)π × (3.2)² × 7.2 = 2.4 × 10.24π = 24.576π cm³.",
      "Cylinder: h₂ = 9.6 cm  ⇒  πr₂²(9.6) = 24.576π.",
      "r₂² = 24.576 / 9.6 = 2.56  ⇒  r₂ = √2.56 = 1.6 cm.",
      "Diameter of base = 2r₂ = 2 × 1.6 = 3.2 cm."
    ],
    "trick": "r₂² = (1/3 × 3.2² × 7.2) / 9.6 = (10.24 × 2.4) / 9.6 = 10.24 / 4 = 2.56  ⇒  r₂ = 1.6  ⇒  Diameter = 3.2 cm."
  },
  {
    "id": 64,
    "category": "cylinder_cone",
    "category_name": "Cylinder, Cone & Frustum",
    "exam": "Selection Post 12, 2024",
    "question": "There is a large cone with a diameter of 14m and height of 12m. It is being filled with water at a rate of 2 m³ in every 20 seconds. How long will it take to fill the cone?",
    "options": {
      "a": "12320 sec",
      "b": "616 sec",
      "c": "6160  sec",
      "d": "313 sec"
    },
    "answer": "c",
    "correct_text": "6160  sec",
    "formula": "V = (1/3)πr²h; Time = Volume / Rate",
    "steps": [
      "Cone: diameter = 14 m  ⇒  r = 7 m, height h = 12 m.",
      "Volume = (1/3) × (22/7) × 7² × 12 = 22 × 7 × 4 = 616 m³.",
      "Water filling rate = 2 m³ per 20 seconds = 0.1 m³/sec (1 m³ takes 10 seconds).",
      "Time to fill = 616 × 10 = 6160 seconds."
    ],
    "trick": "V = 616 m³. Rate is 1 m³ per 10 s  ⇒  616 × 10 = 6160 seconds."
  },
  {
    "id": 65,
    "category": "cylinder_cone",
    "category_name": "Cylinder, Cone & Frustum",
    "exam": "CHSL 2023 Pre",
    "question": "A metallic sphere of radius 21 cm is melted and then recast into smaller cones each with a radius of 7cm, and a height of 3 cm. Find the number of cones obtained.",
    "options": {
      "a": "325",
      "b": "252",
      "c": "225",
      "d": "522"
    },
    "answer": "b",
    "correct_text": "252",
    "formula": "Number of cones = V_sphere / V_cone",
    "steps": [
      "Sphere: R = 21 cm  ⇒  V_sphere = (4/3)π(21)³ = (4/3)π × 9261 = 12,348π cm³.",
      "Cone: r = 7 cm, h = 3 cm  ⇒  V_cone = (1/3)π(7)²(3) = 49π cm³.",
      "Number of cones = 12,348π / 49π = 252."
    ],
    "trick": "N = [(4/3)π × 21³] / [(1/3)π × 7² × 3] = 4 × (21/7)² × (21/3) = 4 × 9 × 7 = 252."
  },
  {
    "id": 66,
    "category": "cylinder_cone",
    "category_name": "Cylinder, Cone & Frustum",
    "exam": "CPO 2024 Pre",
    "question": "How many metres of cloth will be required to make a conical tent, the radius of whose base is 21 metres and height is 28 metres. The width of the cloth is 5 metres. (Where π = (22/7)",
    "options": {
      "a": "470",
      "b": "462",
      "c": "456",
      "d": "478"
    },
    "answer": "b",
    "correct_text": "462",
    "formula": "l = √(r² + h²); Length of cloth = CSA / width",
    "steps": [
      "Base radius r = 21 m, height h = 28 m.",
      "Slant height l = √(21² + 28²) = 7 × √(3² + 4²) = 7 × 5 = 35 m.",
      "CSA = πrl = (22/7) × 21 × 35 = 66 × 35 = 2310 m².",
      "Width of cloth = 5 m  ⇒  Length of cloth = 2310 / 5 = 462 m."
    ],
    "trick": "l = 35. CSA = 66 × 35 = 2310. Length = 2310 / 5 = 462 m."
  },
  {
    "id": 67,
    "category": "cylinder_cone",
    "category_name": "Cylinder, Cone & Frustum",
    "exam": "MTS 2020 Pre",
    "question": "A solid right circular cone is cut into two parts by a plane parallel to its base and at a point one-third vertically below its vertex. What is the ratio of the volume of the smaller cone to that of the whole cone?",
    "options": {
      "a": "1:91",
      "b": "1:270",
      "c": "1:80",
      "d": "1:31"
    },
    "answer": "b",
    "correct_text": "1:270",
    "formula": "Ratio of volumes of similar cones = (h_small / H)³",
    "steps": [
      "Cutting plane is 1/3 vertically below vertex  ⇒  Height of smaller top cone = H / 3.",
      "Since small cone and original cone are similar solids, volume ratio = (h / H)³ = (1 / 3)³ = 1 / 27.",
      "Exact mathematical ratio of smaller cone to whole cone is 1 : 27.",
      "Note: Option (b) in the exam slide contains a standard typographical error (1:270 instead of 1:27)."
    ],
    "trick": "Height ratio = 1 : 3  ⇒  Volume ratio = 1³ : 3³ = 1 : 27 (Option b with typo 1:270)."
  },
  {
    "id": 68,
    "category": "cylinder_cone",
    "category_name": "Cylinder, Cone & Frustum",
    "exam": "MTS 2020 Pre",
    "question": "A right circular cone is inscribed in a cube of side 9 cm occupying the maximum space possible. What is the ratio of the volume of the cube to the volume of the cone? (Take pi = 22/7 )",
    "options": {
      "a": "81:22",
      "b": "11:42",
      "c": "42:11",
      "d": "22: 81"
    },
    "answer": "c",
    "correct_text": "42:11",
    "formula": "Max cone in cube: r = a/2, h = a; Ratio = V_cube / V_cone",
    "steps": [
      "Cube of side a = 9 cm  ⇒  V_cube = a³ = 9³ = 729 cm³.",
      "Max cone has base diameter 9 cm (r = 4.5 cm = 9/2 cm) and height h = 9 cm.",
      "V_cone = (1/3) × (22/7) × (9/2)² × 9 = (1/3) × (22/7) × (81/4) × 9 = 2673 / 14 cm³.",
      "Ratio V_cube : V_cone = 729 : (2673 / 14) = (729 × 14) : 2673 = 10,206 : 2673 = 42 : 11."
    ],
    "trick": "Direct formula: V_cube / V_cone = a³ / [(1/3)π(a/2)²a] = 1 / [π / 12] = 12 / π = 12 / (22/7) = 84 / 22 = 42 : 11!"
  },
  {
    "id": 69,
    "category": "cylinder_cone",
    "category_name": "Cylinder, Cone & Frustum",
    "exam": "CGL 2022 Pre",
    "question": "The radii of the ends of a frustum of a cone 7 cm high are 5 cm and 3 cm. Find the volume.correct to one decimal place. (use pi = 22/7 )",
    "options": {
      "a": "345.6 cm3",
      "b": "359.3 cm3",
      "c": "379.3 cm3",
      "d": "369.3 cm3"
    },
    "answer": "b",
    "correct_text": "359.3 cm3",
    "formula": "V_frustum = (1/3)πh(R² + r² + Rr)",
    "steps": [
      "Given: h = 7 cm, R = 5 cm, r = 3 cm.",
      "R² + r² + Rr = 25 + 9 + 15 = 49.",
      "V = (1/3) × (22/7) × 7 × 49 = (22 × 49) / 3 = 1078 / 3 ≈ 359.33... ≈ 359.3 cm³."
    ],
    "trick": "V = 22/3 × 49 = 1078 / 3 = 359.3 cm³."
  },
  {
    "id": 70,
    "category": "cylinder_cone",
    "category_name": "Cylinder, Cone & Frustum",
    "exam": "CGL 2021 Pre",
    "question": "A 22.5 m high tent is in the shape of a frustum of a cone surmounted by a hemisphere. If the diameters of the upper and the lower circular ends of the frustum are 21 m and 39 m,respectively, then find the area of cloth (in m2 ) used to make the tent (ignoring the wastage). (Use pi = 22/7 )",
    "options": {
      "a": "787 2/7",
      "b": "2107 2/7",
      "c": "1635 6/7",
      "d": "2800 2/7"
    },
    "answer": "b",
    "correct_text": "2107 2/7",
    "formula": "Area = CSA_frustum + CSA_hemisphere = π(R + r)l + 2πr²",
    "steps": [
      "Diameters: lower = 39 m  ⇒  R = 19.5 m; upper = 21 m  ⇒  r = 10.5 m.",
      "Hemisphere radius = upper radius = 10.5 m  ⇒  Hemisphere height = 10.5 m.",
      "Frustum height h = Total height - Hemisphere height = 22.5 - 10.5 = 12 m.",
      "Slant height of frustum l = √[h² + (R - r)²] = √[12² + (19.5 - 10.5)²] = √(144 + 81) = √225 = 15 m.",
      "CSA of frustum = π(R + r)l = (22/7) × 30 × 15 = 9900 / 7 m².",
      "CSA of hemisphere = 2πr² = 2 × (22/7) × (10.5)² = 4851 / 7 m².",
      "Total cloth area = (9900 + 4851) / 7 = 14,751 / 7 = 2107 2/7 m²."
    ],
    "trick": "l = 15. Area = 22/7 × [30 × 15 + 2 × 110.25] = 22/7 × [450 + 220.5] = 22/7 × 670.5 = 14751/7 = 2107 2/7."
  },
  {
    "id": 71,
    "category": "cylinder_cone",
    "category_name": "Cylinder, Cone & Frustum",
    "exam": "CPO 2022 Pre",
    "question": "A frustum of a right circular cone, whose height is 18 cm, large base radius is 25 cm, and small base radius is 20 cm, is melted to form a small sphere of diameter 2 cm. How many spheres will be formed?",
    "options": {
      "a": "6287",
      "b": "6862",
      "c": "4575",
      "d": "5857"
    },
    "answer": "b",
    "correct_text": "6862",
    "formula": "Number of spheres = V_frustum / V_sphere",
    "steps": [
      "Frustum: h = 18 cm, R = 25 cm, r = 20 cm.",
      "R² + r² + Rr = 625 + 400 + 500 = 1525.",
      "V_frustum = (1/3)π × 18 × 1525 = 6π × 1525 = 9150π cm³.",
      "Sphere: diameter = 2 cm  ⇒  radius r_s = 1 cm.",
      "V_sphere = (4/3)π(1)³ = (4/3)π cm³.",
      "Number of spheres = 9150π / [(4/3)π] = 9150 × (3/4) = 6862.5 ≈ 6862."
    ],
    "trick": "N = 6 × 1525 × 3 / 4 = 9150 × 3 / 4 = 27450 / 4 = 6862.5 ≈ 6862."
  },
  {
    "id": 72,
    "category": "sphere_hemisphere",
    "category_name": "Sphere & Hemisphere",
    "exam": "CGL 2022 Pre",
    "question": "If the volume of a sphere is 179 ⅔ m3 , what is its surface area?",
    "options": {
      "a": "221m ^ 2",
      "b": "154m ^ 2",
      "c": "144m ^ 2",
      "d": "151m ^ 2"
    },
    "answer": "b",
    "correct_text": "154m ^ 2",
    "formula": "V = (4/3)πr³; Surface area = 4πr²",
    "steps": [
      "Given volume V = 179 2/3 = 539 / 3 m³.",
      "(4/3) × (22/7) × r³ = 539 / 3.",
      "88/7 × r³ = 539  ⇒  r³ = (539 × 7) / 88 = (49 × 7) / 8 = 343 / 8 = (7/2)³.",
      "Radius r = 7/2 = 3.5 m.",
      "Surface area = 4πr² = 4 × (22/7) × (7/2)² = 4 × (22/7) × (49/4) = 22 × 7 = 154 m²."
    ],
    "trick": "r³ = 343/8  ⇒  r = 3.5. SA for r = 3.5 is always 154 m² (famous standard value in SSC)!"
  },
  {
    "id": 73,
    "category": "sphere_hemisphere",
    "category_name": "Sphere & Hemisphere",
    "exam": "CGL 2022 Pre",
    "question": "How many spherical lead shots each of diameter 8.4 cm can be obtained from a rectangular solid of lead with dimension 88 cm, 63 cm, 42 cm (take π = 22/7)?",
    "options": {
      "a": "920",
      "b": "750",
      "c": "650",
      "d": "860"
    },
    "answer": "b",
    "correct_text": "750",
    "formula": "Number of lead shots = V_cuboid / V_sphere",
    "steps": [
      "Cuboid: 88 × 63 × 42 cm  ⇒  Volume = 232,848 cm³.",
      "Lead shot: diameter = 8.4 cm  ⇒  radius r = 4.2 cm = 21/5 cm.",
      "Volume of 1 shot = (4/3) × (22/7) × (4.2)³ = (88/21) × 74.088 = 310.464 cm³.",
      "Number of shots = 232,848 / 310.464 = 750."
    ],
    "trick": "N = (88 × 63 × 42 × 3 × 7) / (4 × 22 × 4.2 × 4.2 × 4.2) = (63 × 42 × 21) / (74.088) = 750."
  },
  {
    "id": 74,
    "category": "sphere_hemisphere",
    "category_name": "Sphere & Hemisphere",
    "exam": "CGL 2021 Pre",
    "question": "The length of a wire (in cm) of 0.1 mm radius that can be drawn from melting a solid copper sphere of diameter 6 cm is",
    "options": {
      "a": "250000",
      "b": "360000",
      "c": "440000",
      "d": "810000"
    },
    "answer": "b",
    "correct_text": "360000",
    "formula": "V_sphere = (4/3)πR³ = V_wire = πr²L",
    "steps": [
      "Solid sphere: diameter = 6 cm  ⇒  radius R = 3 cm.",
      "Volume = (4/3)π(3)³ = 36π cm³.",
      "Wire: radius r = 0.1 mm = 0.01 cm.",
      "Volume of wire = πr²L = π × (0.01)² × L = 0.0001πL.",
      "0.0001πL = 36π  ⇒  L = 36 / 0.0001 = 360,000 cm."
    ],
    "trick": "L = 36 / (10⁻⁴) = 360,000 cm."
  },
  {
    "id": 75,
    "category": "sphere_hemisphere",
    "category_name": "Sphere & Hemisphere",
    "exam": "CGL 2023 Pre",
    "question": "A spherical ball of lead, 3 cm in diameter, is melted and recast into three spherical balls. The diameters of two of these balls are 3/2 cm and 2 cm, 2 respectively. Find the diameter of the third ball.",
    "options": {
      "a": "2.1 cm",
      "b": "3.3 cm",
      "c": "3 cm",
      "d": "2.5 cm"
    },
    "answer": "d",
    "correct_text": "2.5 cm",
    "formula": "D³ = D₁³ + D₂³ + D₃³ (Diameters scale proportionally to radii)",
    "steps": [
      "Total lead ball diameter D = 3 cm.",
      "Given two balls have diameters D₁ = 3/2 = 1.5 cm and D₂ = 2 cm.",
      "Since volume is proportional to diameter cubed: D³ = D₁³ + D₂³ + D₃³.",
      "3³ = (1.5)³ + 2³ + D₃³.",
      "27 = 3.375 + 8 + D₃³ = 11.375 + D₃³.",
      "D₃³ = 27 - 11.375 = 15.625.",
      "D₃ = ∛15.625 = 2.5 cm (since 2.5³ = 15.625)."
    ],
    "trick": "Work directly with diameters! 27 - (3.375 + 8) = 15.625. ∛15.625 = 2.5 cm."
  },
  {
    "id": 76,
    "category": "sphere_hemisphere",
    "category_name": "Sphere & Hemisphere",
    "exam": "CGL 2022 Pre",
    "question": "A solid cone of height 42 cm with diameter of its base 42 cm is cut out from a wooden solid sphere of radius 24 cm. Find the percentage of wood wasted correct to two places of decimal.",
    "options": {
      "a": "75.56%",
      "b": "56.65%",
      "c": "66.50%",
      "d": "67.50%"
    },
    "answer": "c",
    "correct_text": "66.50%",
    "formula": "Wasted % = [(V_sphere - V_cone) / V_sphere] × 100%",
    "steps": [
      "Sphere: R = 24 cm  ⇒  V_sphere = (4/3)π(24)³ = (4/3)π(13,824) = 18,432π cm³.",
      "Cone: height h = 42 cm, diameter 42 cm  ⇒  radius r = 21 cm.",
      "V_cone = (1/3)π(21)²(42) = 14 × 441π = 6,174π cm³.",
      "Wasted volume = 18,432π - 6,174π = 12,258π cm³.",
      "Percentage wasted = (12,258π / 18,432π) × 100% = (12,258 / 18,432) × 100% ≈ 66.5038% ≈ 66.50%."
    ],
    "trick": "Fraction retained = 6174 / 18432 ≈ 33.496%  ⇒  Wasted = 100% - 33.50% = 66.50%."
  },
  {
    "id": 77,
    "category": "sphere_hemisphere",
    "category_name": "Sphere & Hemisphere",
    "exam": "CGL 2022 Pre",
    "question": "A copper sphere of diameter 18 metre is drawn into a cylindrical wire of length 12 metre. What is the radius of the wire?",
    "options": {
      "a": "5 metre",
      "b": "9 metre",
      "c": "3 metre",
      "d": "12 metre"
    },
    "answer": "b",
    "correct_text": "9 metre",
    "formula": "V_sphere = (4/3)πR³ = V_cyl = πr²L",
    "steps": [
      "Copper sphere: diameter = 18 m  ⇒  radius R = 9 m.",
      "V_sphere = (4/3)π(9)³ = (4/3)π(729) = 972π m³.",
      "Cylindrical wire length L = 12 m.",
      "πr²(12) = 972π  ⇒  12r² = 972  ⇒  r² = 81  ⇒  r = 9 m."
    ],
    "trick": "r² = (4/3 × 729) / 12 = 972 / 12 = 81  ⇒  r = 9 m."
  },
  {
    "id": 78,
    "category": "sphere_hemisphere",
    "category_name": "Sphere & Hemisphere",
    "exam": "CGL 2022 Pre",
    "question": "The length of the side of a cube is 5.6 cm. What is the volume of the largest sphere that can be taken out of the cube?",
    "options": {
      "a": "91.98 cm3",
      "b": "99.96 cm3",
      "c": "96.98 cm3",
      "d": "90.69 cm3"
    },
    "answer": "a",
    "correct_text": "91.98 cm3",
    "formula": "Max sphere in cube has diameter = a  ⇒  r = a/2; V = (4/3)πr³",
    "steps": [
      "Cube edge a = 5.6 cm.",
      "Largest sphere inside cube has diameter = 5.6 cm  ⇒  radius r = 2.8 cm.",
      "Volume = (4/3) × (22/7) × (2.8)³ = (88 / 21) × 21.952 = 1931.776 / 21 ≈ 91.989 ≈ 91.98 cm³."
    ],
    "trick": "V = 4/3 × 22/7 × 2.8³ = 88/3 × 0.4 × 7.84 = 35.2 × 7.84 / 3 = 275.968 / 3 ≈ 91.98 cm³."
  },
  {
    "id": 79,
    "category": "sphere_hemisphere",
    "category_name": "Sphere & Hemisphere",
    "exam": "CGL 2021 Pre",
    "question": "From the body of a solid cube of edge 7 cm, a solid sphere is removed. The volume of the remaining solid was found to be 163 ⅓ cm3. What is the diameter (in cm) of the sphere ?(Take pi = 22/7 )",
    "options": {
      "a": "10",
      "b": "7",
      "c": "5",
      "d": "8"
    },
    "answer": "b",
    "correct_text": "7",
    "formula": "V_sphere = V_cube - V_remaining; V_cube = a³",
    "steps": [
      "Volume of cube = 7³ = 343 cm³.",
      "Remaining solid volume = 163 1/3 = 490 / 3 cm³.",
      "Volume of removed sphere = 343 - 490/3 = (1029 - 490) / 3 = 539 / 3 cm³.",
      "(4/3) × (22/7) × r³ = 539 / 3  ⇒  (88/7) r³ = 539  ⇒  r³ = 343 / 8 = (7/2)³.",
      "Radius r = 7/2 = 3.5 cm  ⇒  Diameter = 2r = 7 cm."
    ],
    "trick": "Sphere volume = 539/3  ⇒  r = 3.5 cm  ⇒  Diameter = 7 cm."
  },
  {
    "id": 80,
    "category": "sphere_hemisphere",
    "category_name": "Sphere & Hemisphere",
    "exam": "CGL 2021 Pre",
    "question": "A cylindrical vessel of diameter 32 cm is partially filled with water. A solid metallic sphere of radius 12 cm is dropped into it. What will be the increase in the level of water in the vessel (in cm)?",
    "options": {
      "a": "9",
      "b": "27",
      "c": "72",
      "d": "2.25"
    },
    "answer": "a",
    "correct_text": "9",
    "formula": "Rise in water level Δh = V_sphere / (πR²)",
    "steps": [
      "Cylindrical vessel: diameter = 32 cm  ⇒  radius R = 16 cm.",
      "Solid sphere: radius r = 12 cm  ⇒  Volume = (4/3)π(12)³ = (4/3)π(1728) = 2304π cm³.",
      "Equating water displacement: πR²Δh = 2304π  ⇒  16² × Δh = 2304  ⇒  256 Δh = 2304.",
      "Δh = 2304 / 256 = 9 cm."
    ],
    "trick": "Δh = (4/3 × 12³) / 16² = (4/3 × 1728) / 256 = 2304 / 256 = 9 cm."
  },
  {
    "id": 81,
    "category": "sphere_hemisphere",
    "category_name": "Sphere & Hemisphere",
    "exam": "CGL MAINS 2020",
    "question": "A solid metallic sphere of radius 4 cm is melted and recast into spheres of 2 cm each. What is the ratio of the surface area of the original sphere to the sum of surface areas of the spheres, so formed?",
    "options": {
      "a": "2:1",
      "b": "2:3",
      "c": "1:2",
      "d": "1:4"
    },
    "answer": "c",
    "correct_text": "1:2",
    "formula": "Number of spheres n = (R/r)³; Ratio = 4πR² : n(4πr²)",
    "steps": [
      "Large sphere: R = 4 cm  ⇒  Surface area = 4π(4)² = 64π cm².",
      "Small spheres: r = 2 cm  ⇒  Number of small spheres = (4/2)³ = 8.",
      "Surface area of each small sphere = 4π(2)² = 16π cm².",
      "Sum of surface areas of 8 small spheres = 8 × 16π = 128π cm².",
      "Ratio of original SA to sum of new SAs = 64π : 128π = 1 : 2."
    ],
    "trick": "When a solid is broken into n equal parts with linear factor k = 1/2, total surface area multiplies by 1/k = 2. Ratio = 1 : 2 directly!"
  },
  {
    "id": 82,
    "category": "sphere_hemisphere",
    "category_name": "Sphere & Hemisphere",
    "exam": "CHSL 2021 Pre",
    "question": "15 identical solid spherical balls of radius 5 cm are melted to form a single sphere. In this process, 35% of the mass is wasted. What is the radius (in cm) of the single sphere that is now formed? [Use pi = 22/7 ] , and give your answer correct to two decimal places.",
    "options": {
      "a": "12.68 cm",
      "b": "16.68 cm",
      "c": "10.68 cm",
      "d": "34.68 cm"
    },
    "answer": "c",
    "correct_text": "10.68 cm",
    "formula": "0.65 × [15 × (4/3)πr³] = (4/3)πR³",
    "steps": [
      "15 balls of radius r = 5 cm.",
      "Total volume before loss = 15 × [(4/3)π × 5³] = 15 × (500/3)π = 2500π cm³.",
      "35% mass wasted  ⇒  65% retained.",
      "Volume of new sphere = 2500π × 0.65 = 1625π cm³.",
      "(4/3)πR³ = 1625π  ⇒  R³ = 1625 × (3/4) = 4875 / 4 = 1218.75.",
      "R = ∛1218.75 ≈ 10.68 cm (since 10.68³ ≈ 1218.1)."
    ],
    "trick": "R³ = 1218.75. Since 10³ = 1000 and 11³ = 1331, R must be close to 10.7  ⇒  10.68 cm."
  },
  {
    "id": 83,
    "category": "sphere_hemisphere",
    "category_name": "Sphere & Hemisphere",
    "exam": "SSC GD 2024",
    "question": "If the diameter of a hemisphere is 63 cm, then what is the volume of hemisphere?",
    "options": {
      "a": "72654.5 cm³",
      "b": "61324.5 cm³",
      "c": "65488.5 cm³",
      "d": "69246.5 cm³"
    },
    "answer": "c",
    "correct_text": "65488.5 cm³",
    "formula": "V = (2/3)πr³; r = d / 2",
    "steps": [
      "Diameter = 63 cm  ⇒  Radius r = 63/2 = 31.5 cm.",
      "V = (2/3) × (22/7) × (63/2)³ = (44 / 21) × (250,047 / 8).",
      "44/8 = 11/2; 250,047 / 21 = 11,907.",
      "V = (11 × 11,907) / 2 = 130,977 / 2 = 65,488.5 cm³."
    ],
    "trick": "r = 63/2. V = (2/3) × (22/7) × 63 × 63 × 63 / 8 = 11 × 3 × 63 × 63 / 2 = 130977 / 2 = 65488.5 cm³."
  },
  {
    "id": 84,
    "category": "sphere_hemisphere",
    "category_name": "Sphere & Hemisphere",
    "exam": "CGL 2023 Pre",
    "question": "A ball is to be made with inner radius of 2 units and outside radius of 3 units. How much material is required to make the ball?",
    "options": {
      "a": "19/3  𝝅",
      "b": "19 𝝅",
      "c": "76/3 𝝅",
      "d": "𝝅"
    },
    "answer": "c",
    "correct_text": "76/3 𝝅",
    "formula": "Material volume = (4/3)π(R³ - r³)",
    "steps": [
      "Inner radius r = 2 units, outer radius R = 3 units.",
      "Volume of hollow spherical shell = (4/3)π(R³ - r³) = (4/3)π(3³ - 2³).",
      "3³ - 2³ = 27 - 8 = 19.",
      "Volume = (4/3)π × 19 = (76/3)π cubic units."
    ],
    "trick": "4/3 π × (27 - 8) = 76/3 π."
  },
  {
    "id": 85,
    "category": "sphere_hemisphere",
    "category_name": "Sphere & Hemisphere",
    "exam": "CGL 2023 Pre",
    "question": "A hemispherical bowl has a radius of 7 cm. It is to be painted from inside as well as outside. Find the cost of painting it at the rate of ₹40 per 20 cm²? (Take thickness of the bowl as negligible).",
    "options": {
      "a": "1,232",
      "c": "1,432",
      "b": "₹1,125",
      "d": "₹1,550"
    },
    "answer": "a",
    "correct_text": "1,232",
    "formula": "Total painted area = Inside CSA + Outside CSA = 2πr² + 2πr² = 4πr²",
    "steps": [
      "Radius r = 7 cm.",
      "Both inside and outside are painted  ⇒  Total area = 2πr² + 2πr² = 4πr².",
      "Total area = 4 × (22/7) × 7² = 4 × 22 × 7 = 616 cm².",
      "Cost rate = ₹40 per 20 cm² = ₹2 per cm².",
      "Total cost = 616 × 2 = ₹1,232."
    ],
    "trick": "Area = 4 × 154 = 616 cm². Cost = 616 × (40/20) = 616 × 2 = ₹1,232."
  },
  {
    "id": 86,
    "category": "sphere_hemisphere",
    "category_name": "Sphere & Hemisphere",
    "exam": "CGL 2022 Pre",
    "question": "Steel is used to make a hemispherical bowl that is 0.37 cm thick. The bowl's inner radius is 6 cm. Find the bowl's outside curved surface area (take π = 22/7).",
    "options": {
      "a": "532 cm²",
      "b": "255.0548 cm²",
      "c": "484 cm²",
      "d": "523.4107 cm²"
    },
    "answer": "b",
    "correct_text": "255.0548 cm²",
    "formula": "Outer CSA = 2πR²; R = r + thickness",
    "steps": [
      "Inner radius r = 6 cm, thickness = 0.37 cm.",
      "Outer radius R = 6 + 0.37 = 6.37 cm.",
      "Outer CSA = 2πR² = 2 × (22/7) × (6.37)².",
      "6.37 / 7 = 0.91  ⇒  Outer CSA = 44 × 0.91 × 6.37 = 40.04 × 6.37 = 255.0548 cm²."
    ],
    "trick": "2 × 22/7 × 6.37² = 44 × 0.91 × 6.37 = 40.04 × 6.37 = 255.0548 cm²."
  },
  {
    "id": 87,
    "category": "sphere_hemisphere",
    "category_name": "Sphere & Hemisphere",
    "exam": "CGL 2022 Pre",
    "question": "A solid hemisphere has radius 21 cm. It is melted to form a cylinder such that the ratio of its curved surface area to total surface area is 2: 5. What is the radius (in cm) of its base (take pi = 22/7 ) ?",
    "options": {
      "a": "23",
      "b": "21",
      "c": "17",
      "d": "19"
    },
    "answer": "b",
    "correct_text": "21",
    "formula": "CSA / TSA = 2/5  ⇒  h / (h + r) = 2/5  ⇒  h = 2r/3; V_hemi = V_cyl",
    "steps": [
      "Solid hemisphere: R = 21 cm  ⇒  Volume = (2/3)π(21)³ = 6174π cm³.",
      "Cylinder: CSA / TSA = (2πrh) / [2πr(h + r)] = h / (h + r) = 2 / 5.",
      "5h = 2h + 2r  ⇒  3h = 2r  ⇒  h = 2r / 3.",
      "Volume of cylinder = πr²h = πr²(2r / 3) = (2/3)πr³.",
      "Equating volumes: (2/3)πr³ = (2/3)π(21)³  ⇒  r³ = 21³  ⇒  r = 21 cm."
    ],
    "trick": "V_cyl = (2/3)πr³ must equal V_hemi = (2/3)π(21)³  ⇒  r = 21 cm immediately!"
  },
  {
    "id": 88,
    "category": "sphere_hemisphere",
    "category_name": "Sphere & Hemisphere",
    "exam": "CGL 2021 Pre",
    "question": "A hemispherical depression of diameter 4 cm is cut out from each face of a cubical block of sides 10 cm. Find the surface area of the remaining solid (in cm2) . (Take pi = 22/7 )",
    "options": {
      "a": "900 4/7",
      "b": "112 4/7",
      "c": "675 3/7",
      "d": "713 1/7"
    },
    "answer": "c",
    "correct_text": "675 3/7",
    "formula": "TSA = 6a² + 6(2πr² - πr²) = 6a² + 6πr²",
    "steps": [
      "Cube side a = 10 cm  ⇒  Original SA = 6 × 10² = 600 cm².",
      "On each of the 6 faces, a hemispherical depression (diameter 4 cm  ⇒  r = 2 cm) is carved out.",
      "Cutting a hemispherical depression removes 1 flat circular base (πr²) and adds the curved hemisphere bowl (2πr²).",
      "Net change per face = 2πr² - πr² = +πr².",
      "For all 6 faces: Net increase = 6πr² = 6 × (22/7) × 2² = 6 × (22/7) × 4 = 528 / 7 = 75 3/7 cm².",
      "Total surface area = 600 + 75 3/7 = 675 3/7 cm²."
    ],
    "trick": "TSA = 600 + 6 × (22/7 × 4) = 600 + 528/7 = 600 + 75 3/7 = 675 3/7 cm²."
  },
  {
    "id": 89,
    "category": "sphere_hemisphere",
    "category_name": "Sphere & Hemisphere",
    "exam": "CGL MAINS 2020",
    "question": "The curved surface area of a solid hemisphere is 22 cm². What is the total surface area of the hemisphere? (Use pi = 22/7 )",
    "options": {
      "a": "66 cm2",
      "b": "44 cm2",
      "c": "33 cm2",
      "d": "30 cm2"
    },
    "answer": "c",
    "correct_text": "33 cm2",
    "formula": "CSA_hemi = 2πr² = 22; TSA_hemi = 3πr² = (3/2) × CSA",
    "steps": [
      "Given: CSA of solid hemisphere = 2πr² = 22 cm².",
      "πr² = 11 cm².",
      "Total surface area of solid hemisphere = 3πr² = 3 × 11 = 33 cm²."
    ],
    "trick": "TSA = 1.5 × CSA = 1.5 × 22 = 33 cm² directly!"
  },
  {
    "id": 90,
    "category": "sphere_hemisphere",
    "category_name": "Sphere & Hemisphere",
    "exam": "CGL MAINS 2019",
    "question": "A hemispherical tank full of water is emptied by a pipe at the rate of 7.7 litres per second. How much time (in hours) will it take to empty 2/3 part of the tank, if the internal radius of the tank is 10.5 m?",
    "options": {
      "a": "185/6",
      "b": "175/3",
      "c": "185/3",
      "d": "175/2"
    },
    "answer": "b",
    "correct_text": "175/3",
    "formula": "Volume to empty = (2/3) × [(2/3)πR³]; Time = Volume / Rate",
    "steps": [
      "Hemisphere radius R = 10.5 m = 21/2 m.",
      "Total capacity = (2/3) × (22/7) × (10.5)³ = (44 / 21) × 1157.625 = 2425.5 m³.",
      "In litres: 2425.5 × 1000 = 2,425,500 litres.",
      "2/3 part to empty = (2/3) × 2,425,500 = 1,617,000 litres.",
      "Discharge rate = 7.7 litres/sec.",
      "Time in seconds = 1,617,000 / 7.7 = 210,000 seconds.",
      "Time in hours = 210,000 / 3600 = 2100 / 36 = 175 / 3 hours."
    ],
    "trick": "Time = (2/3 × 2425500) / (7.7 × 3600) = 1617000 / 27720 = 175 / 3 hours."
  },
  {
    "id": 91,
    "category": "sphere_hemisphere",
    "category_name": "Sphere & Hemisphere",
    "exam": "MTS 2021",
    "question": "A toy is formed by placing a solid circular cone on a solid hemisphere and the radius of the common base of the cone and the hemisphere is 15 cm. If the volume of the toy is 2850 π cm³ , then find the total surface area of that toy.",
    "options": {
      "a": "755 𝝅 cm2",
      "b": "685  𝝅 cm2",
      "c": "815  𝝅 cm2",
      "d": "705  𝝅 cm2"
    },
    "answer": "d",
    "correct_text": "705  𝝅 cm2",
    "formula": "V_toy = (2/3)πr³ + (1/3)πr²h; TSA_toy = 2πr² + πrl",
    "steps": [
      "Common radius r = 15 cm.",
      "Volume of toy = (2/3)π(15)³ + (1/3)π(15)²h = 2850π.",
      "(2/3)(3375) + (1/3)(225)h = 2850  ⇒  2250 + 75h = 2850  ⇒  75h = 600  ⇒  h = 8 cm.",
      "Cone slant height l = √(r² + h²) = √(15² + 8²) = √(225 + 64) = √289 = 17 cm (8-15-17 triplet).",
      "TSA of toy = CSA_hemisphere + CSA_cone = 2πr² + πrl = πr(2r + l).",
      "TSA = π × 15 × (2 × 15 + 17) = 15π × (30 + 17) = 15 × 47π = 705π cm²."
    ],
    "trick": "h = 8  ⇒  l = 17. TSA = 15π(30 + 17) = 15 × 47π = 705π cm²."
  },
  {
    "id": 92,
    "category": "sphere_hemisphere",
    "category_name": "Sphere & Hemisphere",
    "exam": "MTS 2021",
    "question": "A toy is in the shape of a cylinder surmounted by a hemisphere. The total height of the toy is 15 cm and the radius of the hemisphere is 6 cm. What is the volume of the toy?",
    "options": {
      "a": "496 𝝅 cm3",
      "b": "458 𝝅 cm3",
      "c": "476 𝝅 cm3",
      "d": "468 𝝅 cm3"
    },
    "answer": "d",
    "correct_text": "468 𝝅 cm3",
    "formula": "V = V_cylinder + V_hemisphere = πr²h + (2/3)πr³",
    "steps": [
      "Radius r = 6 cm.",
      "Hemisphere height = r = 6 cm.",
      "Cylinder height h = Total height - 6 = 15 - 6 = 9 cm.",
      "V_cylinder = π × 6² × 9 = 324π cm³.",
      "V_hemisphere = (2/3)π × 6³ = (2/3)π × 216 = 144π cm³.",
      "Total volume = 324π + 144π = 468π cm³."
    ],
    "trick": "V = π(36)(9) + 2/3π(216) = 324π + 144π = 468π cm³."
  },
  {
    "id": 93,
    "category": "sphere_hemisphere",
    "category_name": "Sphere & Hemisphere",
    "exam": "SP 2023 Phase-11 Matric. L.",
    "question": "A spherical ball of diameter 8 cm is cut into two equal parts. The curved area of one such part has to be painted with green colour, while the other part has to be painted with red colour. The bases of both the hemispheres are to be painted with blue colour. The cost of painting with blue is Rs. 2 cm2 while the cost of painting the curved area is Rs 3 cm2 What will be the cost (in Rs) of painting the hemispheres? Take pi = 3.14",
    "options": {
      "a": "₹451.92",
      "b": "₹803.84",
      "c": "₹401.92",
      "d": "₹492.92"
    },
    "answer": "b",
    "correct_text": "₹803.84",
    "formula": "Total cost = Curved area cost + Flat base area cost",
    "steps": [
      "Spherical ball: diameter = 8 cm  ⇒  radius r = 4 cm.",
      "When cut into two hemispheres:",
      "Each hemisphere has curved area = 2πr² = 2 × 3.14 × 16 = 100.48 cm².",
      "Each hemisphere has flat base area = πr² = 3.14 × 16 = 50.24 cm².",
      "Total curved area (green + red) = 2 × 100.48 = 200.96 cm² at ₹3/cm²  ⇒  200.96 × 3 = ₹602.88.",
      "Total base area (both blue) = 2 × 50.24 = 100.48 cm² at ₹2/cm²  ⇒  100.48 × 2 = ₹200.96.",
      "Total painting cost = 602.88 + 200.96 = ₹803.84."
    ],
    "trick": "Cost = 3 × (4πr²) + 2 × (2πr²) = 12πr² + 4πr² = 16πr²? Wait: Curved is 2 × 2πr² = 4πr²  ⇒  4πr² × 3 = 12πr². Flat bases = 2πr² × 2 = 4πr². Total = 16πr² = 16 × 3.14 × 16 = 256 × 3.14 = ₹803.84!"
  },
  {
    "id": 94,
    "category": "prism_pyramid",
    "category_name": "Prism & Pyramid",
    "exam": "CHSL 2023 Mains",
    "question": "The base of a right prism is an equilateral triangle with each side of 4 cm. If the lateral surface area is 120 cm², find the volume (in cm3 ) of the prism.",
    "options": {
      "a": "10√3",
      "b": "20√3",
      "c": "30√3",
      "d": "40√3"
    },
    "answer": "d",
    "correct_text": "40√3",
    "formula": "LSA = Base Perimeter × h; Volume = Base Area × h",
    "steps": [
      "Base is equilateral triangle of side a = 4 cm.",
      "Base Perimeter = 3a = 3 × 4 = 12 cm.",
      "Base Area = (√3 / 4)a² = (√3 / 4) × 4² = 4√3 cm².",
      "LSA = Base Perimeter × h  ⇒  120 = 12h  ⇒  h = 10 cm.",
      "Volume = Base Area × h = 4√3 × 10 = 40√3 cm³."
    ],
    "trick": "h = 120 / 12 = 10. Volume = (√3/4 × 16) × 10 = 40√3 cm³."
  },
  {
    "id": 95,
    "category": "prism_pyramid",
    "category_name": "Prism & Pyramid",
    "exam": "CGL MAINS 2019",
    "question": "The base of a right prism is a square having side of 15 cm. If its height is 8 cm, then find the total surface area.",
    "options": {
      "a": "900 cm²",
      "b": "920 cm2",
      "c": "940 cm²",
      "d": "930 cm²"
    },
    "answer": "d",
    "correct_text": "930 cm²",
    "formula": "TSA = LSA + 2 × Base Area = (Perimeter × h) + 2a²",
    "steps": [
      "Base is a square with side a = 15 cm.",
      "Base Perimeter = 4 × 15 = 60 cm, Base Area = 15² = 225 cm².",
      "LSA = Base Perimeter × h = 60 × 8 = 480 cm².",
      "TSA = LSA + 2 × (Base Area) = 480 + 2(225) = 480 + 450 = 930 cm²."
    ],
    "trick": "TSA = (4 × 15 × 8) + 2 × 225 = 480 + 450 = 930 cm²."
  },
  {
    "id": 96,
    "category": "prism_pyramid",
    "category_name": "Prism & Pyramid",
    "exam": "CGL MAINS 2020",
    "question": "The base of a right prism is an equilateral triangle whose side is 10 cm. If height of this prism is 10√3 cm, then what is the total surface area of prism?",
    "options": {
      "a": "125√3",
      "b": "325√3",
      "c": "150√3",
      "d": "350√3"
    },
    "answer": "d",
    "correct_text": "350√3",
    "formula": "TSA = LSA + 2 × Base Area = (3a × h) + 2 × [(√3/4)a²]",
    "steps": [
      "Base is equilateral triangle: side a = 10 cm, height h = 10√3 cm.",
      "Base Perimeter = 3 × 10 = 30 cm.",
      "Base Area = (√3 / 4) × 10² = 25√3 cm².",
      "LSA = 30 × 10√3 = 300√3 cm².",
      "TSA = 300√3 + 2(25√3) = 300√3 + 50√3 = 350√3 cm²."
    ],
    "trick": "TSA = 30 × 10√3 + 2 × 25√3 = 300√3 + 50√3 = 350√3 cm²."
  },
  {
    "id": 97,
    "category": "prism_pyramid",
    "category_name": "Prism & Pyramid",
    "exam": "CGL MAINS 2020",
    "question": "The base of a right prism is a triangle with sides 16 cm, 30 cm and 34 cm. Its height is 32 cm. The lateral surface area (in cm2 ) and the volume (in cm3) are, respectively:",
    "options": {
      "a": "2688 and 7680",
      "b": "2624 and 7040",
      "c": "2560 and 6400",
      "d": "2560 and 7680"
    },
    "answer": "d",
    "correct_text": "2560 and 7680",
    "formula": "LSA = Perimeter × h; Volume = Base Area × h",
    "steps": [
      "Base sides: 16, 30, 34 cm. Check: 16² + 30² = 256 + 900 = 1156 = 34² (Right-angled triangle!).",
      "Base Area = (1/2) × 16 × 30 = 240 cm².",
      "Base Perimeter = 16 + 30 + 34 = 80 cm.",
      "Height h = 32 cm.",
      "LSA = Base Perimeter × h = 80 × 32 = 2560 cm².",
      "Volume = Base Area × h = 240 × 32 = 7680 cm³."
    ],
    "trick": "8-15-17 doubled gives right triangle. Area = 16 × 15 = 240. V = 240 × 32 = 7680, LSA = 80 × 32 = 2560."
  },
  {
    "id": 98,
    "category": "prism_pyramid",
    "category_name": "Prism & Pyramid",
    "exam": "CGL MAINS 2018",
    "question": "The base of a right prism is a regular hexagon of side 5 cm. If its height is 12√3 cm, then its volume (in cm2 ) is:",
    "options": {
      "a": "900",
      "b": "1800",
      "c": "1350",
      "d": "675"
    },
    "answer": "c",
    "correct_text": "1350",
    "formula": "Base Area of regular hexagon = 6 × (√3/4)a²; Volume = Base Area × h",
    "steps": [
      "Base is regular hexagon with side a = 5 cm.",
      "Base Area = 6 × (√3 / 4) × 5² = 6 × (25√3 / 4) = (75√3) / 2 cm².",
      "Height h = 12√3 cm.",
      "Volume = [(75√3) / 2] × 12√3 = (75 × 3 × 12) / 2 = 75 × 18 = 1350 cm³."
    ],
    "trick": "V = 6 × (√3/4 × 25) × 12√3 = 150 × 9 = 1350 cm³."
  },
  {
    "id": 99,
    "category": "prism_pyramid",
    "category_name": "Prism & Pyramid",
    "exam": "CGL MAINS 2018",
    "question": "The base of right prism is a trapezium whose parallel sides are 11 cm and 15 cm and the distance between them is 9 cm. If the volume of the prism is 1731.6 cm³, then the height (in cm) of the prism will be:",
    "options": {
      "a": "15.2",
      "b": "14.2",
      "c": "14.8",
      "d": "15.6"
    },
    "answer": "c",
    "correct_text": "14.8",
    "formula": "Base Area of trapezium = (1/2)(a + b)d; Volume = Base Area × h",
    "steps": [
      "Trapezium base: parallel sides a = 11 cm, b = 15 cm, distance d = 9 cm.",
      "Base Area = (1/2) × (11 + 15) × 9 = (1/2) × 26 × 9 = 13 × 9 = 117 cm².",
      "Volume of prism = 1731.6 cm³.",
      "Height h = Volume / Base Area = 1731.6 / 117 = 14.8 cm."
    ],
    "trick": "h = 1731.6 / 117 = 14.8 cm."
  },
  {
    "id": 100,
    "category": "prism_pyramid",
    "category_name": "Prism & Pyramid",
    "exam": "CGL MAINS 2018",
    "question": "A right prism has height 18cm and its base is a triangle with sides 5 cm, 8 cm and 12 cm. What is its lateral surface area (in cm2 ) ?",
    "options": {
      "a": "450",
      "b": "468",
      "c": "432",
      "d": "486"
    },
    "answer": "a",
    "correct_text": "450",
    "formula": "LSA = Base Perimeter × h",
    "steps": [
      "Base triangle sides: 5 cm, 8 cm, 12 cm.",
      "Base Perimeter = 5 + 8 + 12 = 25 cm.",
      "Height h = 18 cm.",
      "LSA = Base Perimeter × h = 25 × 18 = 450 cm²."
    ],
    "trick": "LSA = 25 × 18 = 450 cm²."
  },
  {
    "id": 101,
    "category": "prism_pyramid",
    "category_name": "Prism & Pyramid",
    "exam": "CGL MAINS 2018",
    "question": "The volume of a right pyramid is 45√3 cm³ and its base is an equilateral triangle with side 6 cm. What is the height (in cm) of the pyramid?",
    "options": {
      "a": "20",
      "b": "18",
      "c": "12",
      "d": "15"
    },
    "answer": "d",
    "correct_text": "15",
    "formula": "Volume of pyramid = (1/3) × Base Area × h",
    "steps": [
      "Base is equilateral triangle with side a = 6 cm.",
      "Base Area = (√3 / 4) × 6² = 9√3 cm².",
      "Volume = 45√3 cm³.",
      "Volume = (1/3) × Base Area × h  ⇒  45√3 = (1/3) × (9√3) × h = 3√3 h.",
      "h = 45√3 / (3√3) = 15 cm."
    ],
    "trick": "h = 3V / Base Area = 3 × 45√3 / 9√3 = 135 / 9 = 15 cm."
  },
  {
    "id": 102,
    "category": "prism_pyramid",
    "category_name": "Prism & Pyramid",
    "exam": "CGL 2021 Pre",
    "question": "The total surface area of a right pyramid, with base as a square of side 8 cm, is 208 cm². What is the slant height (in cm) of the pyramid?",
    "options": {
      "a": "7",
      "b": "10",
      "c": "9",
      "d": "8"
    },
    "answer": "c",
    "correct_text": "9",
    "formula": "TSA = Base Area + LSA; LSA = (1/2) × Base Perimeter × l",
    "steps": [
      "Square base: side a = 8 cm  ⇒  Base Area = 8² = 64 cm².",
      "TSA = 208 cm²  ⇒  LSA = TSA - Base Area = 208 - 64 = 144 cm².",
      "Base Perimeter = 4 × 8 = 32 cm.",
      "LSA = (1/2) × Perimeter × l  ⇒  144 = (1/2) × 32 × l = 16l.",
      "Slant height l = 144 / 16 = 9 cm."
    ],
    "trick": "LSA = 208 - 64 = 144. l = 144 / (2 × 8) = 144 / 16 = 9 cm."
  },
  {
    "id": 103,
    "category": "prism_pyramid",
    "category_name": "Prism & Pyramid",
    "exam": "MTS 2021",
    "question": "A solid sphere whose radius is 21 cm is melted and recast into a regular pyramid of square base. If height of the pyramid is 66 cm, then what is the length of each side of the base of the pyramid? (Use π = 22/7)",
    "options": {
      "a": "68 cm",
      "b": "85 cm",
      "c": "42 cm",
      "d": "48 cm"
    },
    "answer": "c",
    "correct_text": "42 cm",
    "formula": "V_sphere = (4/3)πR³ = V_pyramid = (1/3)a²h",
    "steps": [
      "Sphere: R = 21 cm  ⇒  Volume = (4/3) × (22/7) × 21³ = (88 / 21) × 9261 = 88 × 441 = 38,808 cm³.",
      "Regular square pyramid: height h = 66 cm.",
      "Volume = (1/3) × a² × 66 = 22a².",
      "22a² = 38,808  ⇒  a² = 38,808 / 22 = 1764.",
      "a = √1764 = 42 cm."
    ],
    "trick": "a² = 4/3 × (22/7) × 21³ × 3 / (66) = (88/7 × 9261) / 22 = 4 × 1323 = 1764  ⇒  a = 42 cm."
  },
  {
    "id": 104,
    "category": "prism_pyramid",
    "category_name": "Prism & Pyramid",
    "exam": "CGL MAINS 2018",
    "question": "The base of a right pyramid is an equilateral triangle with area 16√3 cm2, if the area of one of its lateral faces is 30 cm2 , then its height (in cm) is",
    "options": {
      "a": "√(739/12)",
      "b": "√(209/12)",
      "c": "√(611/12)",
      "d": "√(643/12)"
    },
    "answer": "c",
    "correct_text": "√(611/12)",
    "formula": "Base Area = (√3/4)a²; Face Area = (1/2)al; h² = l² - r_in²; r_in = a / (2√3)",
    "steps": [
      "Base is equilateral triangle: Area = (√3/4)a² = 16√3  ⇒  a² = 64  ⇒  a = 8 cm.",
      "In-radius of base triangle: r_in = a / (2√3) = 8 / (2√3) = 4 / √3 cm.",
      "Area of 1 lateral face = (1/2) × a × l = 30  ⇒  (1/2) × 8 × l = 30  ⇒  4l = 30  ⇒  l = 15/2 cm.",
      "In a right pyramid: h² = l² - r_in².",
      "h² = (15/2)² - (4/√3)² = 225/4 - 16/3 = (675 - 64) / 12 = 611 / 12.",
      "Height h = √(611 / 12) cm."
    ],
    "trick": "a = 8  ⇒  r_in² = 16/3. l = 30/4 = 7.5  ⇒  l² = 225/4. h² = 225/4 - 16/3 = 611/12  ⇒  h = √(611/12)."
  },
  {
    "id": 105,
    "category": "prism_pyramid",
    "category_name": "Prism & Pyramid",
    "exam": "CGL MAINS 2018",
    "question": "The base of a right pyramid is a square of side 10 cm. If its height is 10 cm, then the area (in cm2 ) of its lateral surface is:",
    "options": {
      "a": "100",
      "b": "100(√5 + 1)",
      "c": "50 √5",
      "d": "100√5"
    },
    "answer": "d",
    "correct_text": "100√5",
    "formula": "Slant height l = √(h² + (a/2)²); LSA = (1/2) × Perimeter × l",
    "steps": [
      "Square base side a = 10 cm, height h = 10 cm.",
      "Distance from center of base to side = a/2 = 5 cm.",
      "Slant height l = √(h² + (a/2)²) = √(10² + 5²) = √(100 + 25) = √125 = 5√5 cm.",
      "Base Perimeter = 4 × 10 = 40 cm.",
      "LSA = (1/2) × Base Perimeter × l = (1/2) × 40 × 5√5 = 20 × 5√5 = 100√5 cm²."
    ],
    "trick": "LSA = 4 × (1/2 × 10 × 5√5) = 20 × 5√5 = 100√5 cm²."
  },
  {
    "id": 106,
    "category": "prism_pyramid",
    "category_name": "Prism & Pyramid",
    "exam": "CGL MAINS 2020",
    "question": "The base of right pyramid is an equilateral triangle, each side of which is 20 cm. Each slant edge is 30 cm. The vertical height (in cm) of the pyramid is:",
    "options": {
      "a": "5√3",
      "b": "10√3",
      "c": "√(35/3)",
      "d": "10√(23/3)"
    },
    "answer": "d",
    "correct_text": "10√(23/3)",
    "formula": "Slant edge e² = h² + R²; Circumradius R = a / √3",
    "steps": [
      "Base is equilateral triangle with side a = 20 cm.",
      "Circumradius of base triangle R = a / √3 = 20 / √3 cm.",
      "Slant edge e = 30 cm.",
      "In any right pyramid, vertical height h, slant edge e, and circumradius R form a right triangle: h² = e² - R².",
      "h² = 30² - (20/√3)² = 900 - 400/3 = (2700 - 400) / 3 = 2300 / 3.",
      "h = √(2300 / 3) = √(100 × 23 / 3) = 10√(23 / 3) cm."
    ],
    "trick": "h = √[30² - (20/√3)²] = √[900 - 400/3] = √(2300/3) = 10√(23/3) cm."
  },
  {
    "id": 107,
    "category": "prism_pyramid",
    "category_name": "Prism & Pyramid",
    "exam": "CGL MAINS 2020",
    "question": "The base of a right pyramid is a square of side 8√2 cm and each of its slant edge is of length 10 cm. What is the volume (in cm3 ) of the pyramid?",
    "options": {
      "a": "256",
      "b": "224",
      "c": "426 ⅔",
      "d": "96√2"
    },
    "answer": "a",
    "correct_text": "256",
    "formula": "h² = e² - (Diagonal/2)²; Volume = (1/3) × Base Area × h",
    "steps": [
      "Square base: side a = 8√2 cm.",
      "Diagonal of base = a√2 = (8√2) × √2 = 16 cm.",
      "Half-diagonal = 16 / 2 = 8 cm.",
      "Slant edge e = 10 cm.",
      "Vertical height h = √[e² - (half-diagonal)²] = √(10² - 8²) = √(100 - 64) = √36 = 6 cm (6-8-10 triplet).",
      "Base Area = a² = (8√2)² = 64 × 2 = 128 cm².",
      "Volume = (1/3) × Base Area × h = (1/3) × 128 × 6 = 128 × 2 = 256 cm³."
    ],
    "trick": "Half diagonal = 8, edge = 10  ⇒  h = 6. Base Area = 128. V = 1/3 × 128 × 6 = 256 cm³."
  },
  {
    "id": 108,
    "category": "prism_pyramid",
    "category_name": "Prism & Pyramid",
    "exam": "CGL MAINS 2020",
    "question": "A prism and a pyramid have the same base and the same height. Find the ratio of the volumes of the prism and the pyramid.",
    "options": {
      "a": "2:3",
      "b": "3:1",
      "c": "1:3",
      "d": "3:2"
    },
    "answer": "b",
    "correct_text": "3:1",
    "formula": "V_prism = Base Area × h; V_pyramid = (1/3) × Base Area × h",
    "steps": [
      "Let common Base Area be B and common height be h.",
      "Volume of prism = B × h.",
      "Volume of pyramid = (1/3) × B × h.",
      "Ratio of volumes (Prism : Pyramid) = (B × h) : [(1/3) × B × h] = 1 : (1/3) = 3 : 1."
    ],
    "trick": "Any prism has 3 times the volume of a pyramid with the same base and height  ⇒  3 : 1 instantly!"
  }
];
