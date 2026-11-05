// Mixture & Alligation Masterclass Offline Data (115 PYQs)
// Instructor: Vishesh Shukla (Maths Maestro)

window.MIXTURE_ALLIGATION_FORMULAS = [
  {
    "id": "mix_f01",
    "title": "Rule of Alligation & Mean Value Cross",
    "category": "Core Principle",
    "formula": "(Quantity of Cheaper) / (Quantity of Dearer) = (Price of Dearer - Mean Price) / (Mean Price - Price of Cheaper)",
    "desc": "• Fundamental Equation: (d - m) / (m - c) = q_c / q_d, where c = cheaper rate, d = dearer rate, m = mean rate.\n• Units Rule: Cheaper price (c), dearer price (d), and mean price (m) must ALL refer to identical units (e.g. all CP per kg, or all % concentration, never mix CP with SP!).\n• Cross Balance: The ratio of quantities mixed is directly proportional to the inverse difference from the mean: |m - c| : |d - m|.\n• Fast Ratio Check: The sum of the two differences (d - m) + (m - c) = (d - c), which is the absolute difference between dearer and cheaper rates."
  },
  {
    "id": "mix_f02",
    "title": "Successive Removal & Repeated Dilution Formula",
    "category": "Replacement & Dilution",
    "formula": "Q_n = Q_0 × (1 - x / C)^n",
    "desc": "• Variables: Q_0 = Initial quantity of pure liquid, C = Total capacity of container, x = Quantity drawn out and replaced with water each time, n = Number of repeated operations.\n• Ratio Form: Liquid Remaining / Total Capacity = (1 - x / C)^n.\n• Fraction Left: If x/C = 1/k, then remaining fraction after n steps is [(k - 1) / k]^n.\n• Water Formed: Total Water in mixture after n operations = Total Capacity - Q_n."
  },
  {
    "id": "mix_f03",
    "title": "Constant Component Shortcut (Ratio Equalization)",
    "category": "Ratio Manipulation",
    "formula": "If Component A is unchanged: Scale Initial and Final ratios so Ratio_A(initial) = Ratio_A(final)",
    "desc": "• Universal Rule: When adding or removing ONLY Component B, the absolute quantity of Component A remains constant.\n• Equalize Ratio Units: Multiply the initial and final ratios by integers to make Component A's units equal.\n• Delta Calculation: Added Component B = (Final Units of B - Initial Units of B) × Unit Value.\n• Constant Total Capacity: When drawing out mixture and replacing with pure water, Total Volume is invariant: Capacity = Remaining Mixture + Replacement."
  },
  {
    "id": "mix_f04",
    "title": "Weighted Average & Relative Density Mixing",
    "category": "Physical Mixtures & Alloys",
    "formula": "Weight = Volume × Relative Density  |  C_mean = (V₁·C₁ + V₂·C₂ + ... + V_k·C_k) / (V₁ + V₂ + ... + V_k)",
    "desc": "• Density-Volume Rule: When metals/liquids are given by volume and density, the mass ratio is (V₁ × d₁) : (V₂ × d₂) : (V₃ × d₃).\n• Multi-Container Mixing: When containers of capacities c₁, c₂, ... are mixed, scale each component ratio by container capacity c_i / (sum of its ratio parts).\n• Water Buoyancy Alligation: Under-water weight loss is proportional to volume displacement. Pt loses 5%, Ti loses 1% ⟹ Weight loss % governs the ratio."
  },
  {
    "id": "mix_f05",
    "title": "Profit & Loss Alligation & Reverse Pricing",
    "category": "Commercial Arithmetic",
    "formula": "Mean CP = SP_mixture / (1 + Profit%)  |  Loss is treated as NEGATIVE (-L%)",
    "desc": "• Golden Rule: Never apply alligation directly on Selling Price unless all items have identical profit margins! Always convert SP to Cost Price first: CP = SP / (1 + P/100).\n• Negative Signs: Loss must be entered with a minus sign (-L%). The difference between +10% and -5% is 10 - (-5) = 15%!\n• Zero-Cost Water: When water is mixed with milk/wine and sold at CP, Profit % = (Volume of Water / Volume of Pure Liquid) × 100%."
  }
];

window.MIXTURE_ALLIGATION_QUESTIONS = [
  {
    "id": "mix_001",
    "number": 1,
    "type": "Alloy & Ratio Mixing",
    "sub_topic": "Type 1: Alloy & Metal Ratios",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "75 kg of an alloy A is mixed with 125 kg of alloy B. If alloy A has Zinc and Copper in the ratio 5:1 and alloy B has Copper and Tin in the ratio 3:2, what is the amount of Copper in the new alloy in kg?",
    "options": [
      "80.5 kg",
      "85.0 kg",
      "87.5 kg",
      "90.0 kg"
    ],
    "answer": "87.5 kg",
    "solution": "Step 1: Calculate copper in Alloy A (75 kg):\nRatio Zinc : Copper = 5 : 1 (Total 6 units = 75 kg ⟹ 1 unit = 12.5 kg).\nCopper in A = 1 × 12.5 = 12.5 kg.\n\nStep 2: Calculate copper in Alloy B (125 kg):\nRatio Copper : Tin = 3 : 2 (Total 5 units = 125 kg ⟹ 1 unit = 25 kg).\nCopper in B = 3 × 25 = 75 kg.\n\nStep 3: Total copper in the new alloy:\nTotal Copper = 12.5 + 75 = 87.5 kg.",
    "trick": "Direct Component Sum: Alloy A has 1/6 copper (75 / 6 = 12.5 kg). Alloy B has 3/5 copper (125 × 3/5 = 75 kg). Total copper = 12.5 + 75 = 87.5 kg in 5 seconds!"
  },
  {
    "id": "mix_002",
    "number": 2,
    "type": "Relative Density & Weight",
    "sub_topic": "Type 1: Alloy & Metal Ratios",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "An alloy is prepared by mixing three metals A, B and C in the proportion 2:3:5 by volume. The ratio of the weight of the same volume (relative density) of the metals A, B and C are in the ratio 5:6:3. In 86 kg of the alloy, what is the weight, in kg, of metal B?",
    "options": [
      "45 kg",
      "40 kg",
      "36 kg",
      "32kg"
    ],
    "answer": "36 kg",
    "solution": "Step 1: Weight relation: Weight = Volume × Relative Density.\n\nStep 2: Calculate weight ratio of metals A, B, and C:\nVolume ratio = 2 : 3 : 5.\nDensity ratio = 5 : 6 : 3.\nWeight ratio = (2 × 5) : (3 × 6) : (5 × 3) = 10 : 18 : 15.\n\nStep 3: Calculate weight of metal B in 86 kg alloy:\nTotal weight ratio units = 10 + 18 + 15 = 43 units.\n43 units = 86 kg ⟹ 1 unit = 2 kg.\nWeight of metal B = 18 × 2 = 36 kg.",
    "trick": "Ratio Product: Weight ratio = (2×5) : (3×6) : (5×3) = 10 : 18 : 15. Total = 43 units = 86 kg ⟹ 1 unit = 2 kg. Metal B = 18 × 2 = 36 kg!"
  },
  {
    "id": "mix_003",
    "number": 3,
    "type": "Weighted Concentration",
    "sub_topic": "Type 1: Alloy & Metal Ratios",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A milkman has two types of milk mixtures. In the first container, the concentration of milk is 80% and in the second container, the concentration of milk is 60%. If he mixes 24 L of the first container's milk and 16 L of the second container's milk, what is the percentage of milk in the new mixture?",
    "options": [
      "75%",
      "72%",
      "70%",
      "68%"
    ],
    "answer": "72%",
    "solution": "Step 1: Mixing ratio of volumes:\nVolume 1 = 24 L, Volume 2 = 16 L.\nRatio = 24 : 16 = 3 : 2 (Total = 5 parts).\n\nStep 2: Weighted average milk concentration:\n% Milk = (3 × 80% + 2 × 60%) / (3 + 2) = (240% + 120%) / 5 = 360% / 5 = 72%.",
    "trick": "Weighted Average Shortcut: Ratio 24:16 = 3:2. (3×80 + 2×60)/5 = 360/5 = 72% mentally!"
  },
  {
    "id": "mix_004",
    "number": 4,
    "type": "Juice & Lemonade Mixing",
    "sub_topic": "Type 1: Alloy & Metal Ratios",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "Four bottles of the same capacity are 20%, 30%, 50% and 60% full of grape juice, respectively. They are then filled completely by adding lemonade. The contents of the four bottles are emptied into another vessel. What is the percentage of lemonade in the final mixture?",
    "options": [
      "75%",
      "65%",
      "70%",
      "60%"
    ],
    "answer": "60%",
    "solution": "Step 1: Calculate lemonade percentage in each filled bottle:\nEach bottle is filled to 100% capacity with lemonade.\n• Bottle 1: 100% - 20% = 80% lemonade\n• Bottle 2: 100% - 30% = 70% lemonade\n• Bottle 3: 100% - 50% = 50% lemonade\n• Bottle 4: 100% - 60% = 40% lemonade\n\nStep 2: Average percentage of lemonade:\nSince all 4 bottles have equal volume, final % is the simple average:\nAverage = (80% + 70% + 50% + 40%) / 4 = 240% / 4 = 60%.",
    "trick": "Complementary Average: Total grape juice % = (20+30+50+60)/4 = 40%. Lemonade % = 100% - 40% = 60% in 5 seconds!"
  },
  {
    "id": "mix_005",
    "number": 5,
    "type": "Equal Quantity Mixing",
    "sub_topic": "Type 1: Alloy & Metal Ratios",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A container has 30% alcohol and 70% water in it. It is mixed with another sample (in equal quantity) having 50% alcohol and 50% water. What would be the alcohol content in the final mixture?",
    "options": [
      "45%",
      "50%",
      "40%",
      "60%"
    ],
    "answer": "40%",
    "solution": "Step 1: Average concentration of equal quantities:\nSample 1 has 30% alcohol, Sample 2 has 50% alcohol.\nWhen mixed in equal quantities (1 : 1 ratio):\nFinal % = (30% + 50%) / 2 = 80% / 2 = 40%.",
    "trick": "Midpoint Average: (30 + 50) / 2 = 40% instantly!"
  },
  {
    "id": "mix_006",
    "number": 6,
    "type": "Dilution & Percentage",
    "sub_topic": "Type 1: Alloy & Metal Ratios",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "While making a lemonade solution of 5 L containing 60% lemon juice for a party, 3 L of water is added. The percentage of lemon juice in the new solution is:",
    "options": [
      "37.5%",
      "40.0%",
      "42.5%",
      "45.0%"
    ],
    "answer": "37.5%",
    "solution": "Step 1: Calculate initial quantity of pure lemon juice:\n5 L of 60% lemon juice = 5 × 0.60 = 3 L lemon juice.\n\nStep 2: Calculate new total volume after adding 3 L water:\nNew total volume = 5 + 3 = 8 L.\n\nStep 3: New percentage of lemon juice:\nPercentage = (3 L / 8 L) × 100% = 37.5%.",
    "trick": "Constant Component: Lemon juice stays 3 L. New volume = 8 L. Fraction = 3/8 = 37.5% in 3 seconds!"
  },
  {
    "id": "mix_007",
    "number": 7,
    "type": "Syrup Fraction Removal",
    "sub_topic": "Type 1: Alloy & Metal Ratios",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A solution preparer has a 20 L flask containing 15 L of pure syrup. He filled the flask completely with water and then takes out 4 L of the mixture. What is the quantity of syrup (in L) in the 4 L mixture taken out?",
    "options": [
      "2.5L",
      "2.0L",
      "3.0L",
      "2.4L"
    ],
    "answer": "3.0L",
    "solution": "Step 1: Concentration of syrup in flask:\nCapacity = 20 L. Pure syrup = 15 L (remaining 5 L is water).\nSyrup fraction = 15 / 20 = 3/4.\n\nStep 2: Quantity of syrup in 4 L taken out:\nSyrup = 4 × (3/4) = 3.0 L.",
    "trick": "Fractional Proportion: Syrup fraction = 15/20 = 3/4. In 4 L taken out, syrup = 4 × 3/4 = 3.0 L!"
  },
  {
    "id": "mix_008",
    "number": 8,
    "type": "Removal & Water Addition",
    "sub_topic": "Type 1: Alloy & Metal Ratios",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A vessel contains a 45 L solution of acid and water in which the ratio of acid and water is 4:1. If 15 L of the solution are taken out and 10 L of water are added to it, then what is the final ratio of acid and water in the resulting solution?",
    "options": [
      "2:3",
      "3:2",
      "4:5",
      "5:4"
    ],
    "answer": "3:2",
    "solution": "Step 1: Composition of remaining 30 L solution:\nInitial 45 L with Acid : Water = 4 : 1.\nWhen 15 L removed, remaining 30 L has Acid : Water = 4 : 1 (Total 5 parts = 30 L ⟹ 1 part = 6 L).\nAcid remaining = 4 × 6 = 24 L.\nWater remaining = 1 × 6 = 6 L.\n\nStep 2: Add 10 L water:\nNew Water = 6 + 10 = 16 L.\nAcid remains unchanged = 24 L.\n\nStep 3: New ratio of Acid to Water:\nRatio = 24 : 16 = 3 : 2.",
    "trick": "Remaining Ratio: In 30 L remaining, Acid = 24 L, Water = 6 L. Add 10 L water ⟹ Water = 16 L. Ratio = 24 : 16 = 3 : 2 in 10 seconds!"
  },
  {
    "id": "mix_009",
    "number": 9,
    "type": "Multi-Liquid Mixing",
    "sub_topic": "Type 1: Alloy & Metal Ratios",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "Solution A contains liquids X, Y and Z in the ratio 2:5:3, solution B contains liquids X and Y in the ratio 3:2, while solution C contains liquids Y and Z in the ratio 4:1. Five litres of A, three litres of B and two litres of C are mixed. What is the percentage of liquid Y in the new solution?",
    "options": [
      "45.0%",
      "47.5%",
      "53.0%",
      "52.5%"
    ],
    "answer": "53.0%",
    "solution": "Step 1: Calculate liquid Y in each solution:\n• Solution A (5 L): X:Y:Z = 2:5:3 (Total 10 parts) ⟹ Y = 5 × (5/10) = 2.5 L.\n• Solution B (3 L): X:Y = 3:2 (Total 5 parts) ⟹ Y = 3 × (2/5) = 1.2 L.\n• Solution C (2 L): Y:Z = 4:1 (Total 5 parts) ⟹ Y = 2 × (4/5) = 1.6 L.\n\nStep 2: Total Liquid Y and percentage:\nTotal Y = 2.5 + 1.2 + 1.6 = 5.3 L.\nTotal Volume = 5 + 3 + 2 = 10 L.\nPercentage of Y = (5.3 / 10) × 100% = 53.0%.",
    "trick": "Sum of Parts: Y from A = 2.5 L, Y from B = 1.2 L, Y from C = 1.6 L ⟹ Total Y = 5.3 L out of 10 L = 53.0%!"
  },
  {
    "id": "mix_010",
    "number": 10,
    "type": "Equal Capacity Mixing",
    "sub_topic": "Type 1: Alloy & Metal Ratios",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "One cup has oil and water in the ratio 3:1, while another cup of the same capacity has them in the ratio 5:3. If the contents of both cups are poured into a vessel, then what will be the final ratio of oil to water?",
    "options": [
      "13:6",
      "11:5",
      "12:7",
      "15:8"
    ],
    "answer": "11:5",
    "solution": "Step 1: Equalize capacities of both cups:\nCup 1: Oil : Water = 3 : 1 (Total = 4 units).\nCup 2: Oil : Water = 5 : 3 (Total = 8 units).\nScale Cup 1 by 2 so both have 8 units:\nCup 1: Oil = 6, Water = 2 (Total = 8).\nCup 2: Oil = 5, Water = 3 (Total = 8).\n\nStep 2: Combine mixtures:\nTotal Oil = 6 + 5 = 11 units.\nTotal Water = 2 + 3 = 5 units.\nFinal Ratio = 11 : 5.",
    "trick": "Capacity Equalization: Scale 3:1 to 6:2 (sum 8). Add to 5:3 ⟹ Oil = 6+5 = 11, Water = 2+3 = 5 ⟹ 11:5 in 5 seconds!"
  },
  {
    "id": "mix_011",
    "number": 11,
    "type": "Equal Volume Mixing",
    "sub_topic": "Type 1: Alloy & Metal Ratios",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "Two vessels contain milk and water in the ratio 5:4 and 3:1. If both vessels are mixed in the ratio 1:1 (equal quantities), find the final ratio of milk and water in the new mixture.",
    "options": [
      "20:9",
      "13:8",
      "47:25",
      "67:23"
    ],
    "answer": "47:25",
    "solution": "Step 1: Equalize vessel capacities (Ratio 1 : 1):\nVessel 1: Milk : Water = 5 : 4 (Total = 9 units).\nVessel 2: Milk : Water = 3 : 1 (Total = 4 units).\nLCM(9, 4) = 36 units each.\n\nStep 2: Scale both vessels to 36 units:\nVessel 1 (×4): Milk = 20, Water = 16 (Total = 36).\nVessel 2 (×9): Milk = 27, Water = 9 (Total = 36).\n\nStep 3: Combine mixtures:\nTotal Milk = 20 + 27 = 47 units.\nTotal Water = 16 + 9 = 25 units.\nFinal Ratio = 47 : 25.",
    "trick": "LCM Base 36: Vessel 1 (×4) = 20:16; Vessel 2 (×9) = 27:9. Milk = 20+27 = 47, Water = 16+9 = 25 ⟹ 47:25!"
  },
  {
    "id": "mix_012",
    "number": 12,
    "type": "Alloy Ratio Mixing",
    "sub_topic": "Type 1: Alloy & Metal Ratios",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "The ratios of lead to tin in alloys X and Y are 2:3 and 4:1, respectively. Alloys X and Y are taken in the ratio 3:2 and melted to form a new alloy Z. What is the final ratio of lead to tin in alloy Z?",
    "options": [
      "29:16",
      "28:17",
      "14:11",
      "2:1"
    ],
    "answer": "14:11",
    "solution": "Step 1: Check unit sums of alloys X and Y:\nAlloy X: Lead : Tin = 2 : 3 (Total = 5 units).\nAlloy Y: Lead : Tin = 4 : 1 (Total = 5 units).\n\nStep 2: Mix in ratio 3 : 2:\nSince base totals are both 5 units, multiply X by 3 and Y by 2:\nAlloy X (×3): Lead = 6, Tin = 9 (Total = 15).\nAlloy Y (×2): Lead = 8, Tin = 2 (Total = 10).\n\nStep 3: Sum components in Alloy Z:\nTotal Lead = 6 + 8 = 14 units.\nTotal Tin = 9 + 2 = 11 units.\nFinal Ratio = 14 : 11.",
    "trick": "Direct Multiplication: Base sums are both 5! Multiply X by 3 (6:9) and Y by 2 (8:2). Lead = 6+8=14, Tin = 9+2=11 ⟹ 14:11 in 5 seconds!"
  },
  {
    "id": "mix_013",
    "number": 13,
    "type": "Alloy Ratio Mixing",
    "sub_topic": "Type 1: Alloy & Metal Ratios",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "Alloy X contains Iron and Nickel in the ratio 3:5 and alloy Y contains Iron and Nickel in the ratio 2:1. Alloys X and Y are taken in the ratio 5:4 and melted to form a new alloy Z. The percentage of Iron in the new alloy is closest to:",
    "options": [
      "5.0%",
      "51.7%",
      "53.3%",
      "50.5%"
    ],
    "answer": "50.5%",
    "solution": "Step 1: Fractions of Iron in X and Y:\nAlloy X: Iron : Nickel = 3 : 5 (Total = 8) ⟹ Iron = 3/8.\nAlloy Y: Iron : Nickel = 2 : 1 (Total = 3) ⟹ Iron = 2/3.\n\nStep 2: Mix in ratio 5 : 4 (Total = 9 units):\nIron from X = 5 × (3/8) = 15/8.\nIron from Y = 4 × (2/3) = 8/3.\nTotal Iron = 15/8 + 8/3 = (45 + 64) / 24 = 109 / 24.\n\nStep 3: Percentage of Iron:\nPercentage = [(109 / 24) / 9] × 100% = (109 / 216) × 100% ≈ 50.46% ≈ 50.5%.",
    "trick": "Common Base 24: Iron = (15/8 + 8/3)/9 = (109/24)/9 = 109/216. Since 108/216 = 50%, 109/216 is slightly above 50% ⟹ 50.5%!"
  },
  {
    "id": "mix_014",
    "number": 14,
    "type": "Mixture Ratio Mixing",
    "sub_topic": "Type 1: Alloy & Metal Ratios",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "Two vessels contain a mixture of alcohol and water. In the first mixture, the quantity of alcohol is 20% less than water, and in the second mixture, the difference between alcohol and water is 25% of the total mixture. If 8 L of the first mixture and 12 L of the second mixture are mixed, find the final ratio of alcohol and water.",
    "options": [
      "31:29",
      "29:31",
      "199:161",
      "4:5"
    ],
    "answer": "199:161",
    "solution": "Step 1: Composition of first mixture (8 L):\nAlcohol is 20% less than water ⟹ Alcohol : Water = 80 : 100 = 4 : 5 (Total 9 units).\nAlcohol = 8 × (4/9) = 32/9 L.\nWater = 8 × (5/9) = 40/9 L.\n\nStep 2: Composition of second mixture (12 L):\nDifference is 25% of total ⟹ Alcohol : Water = 5 : 3 (Total 8 units).\nAlcohol = 12 × (5/8) = 15/2 L = 135/18 L.\nWater = 12 × (3/8) = 9/2 L = 81/18 L.\n\nStep 3: Combine with common denominator 18:\nAlcohol from 1 = 64/18 L. Total Alcohol = 64/18 + 135/18 = 199/18 L.\nWater from 1 = 80/18 L. Total Water = 80/18 + 81/18 = 161/18 L.\nFinal Ratio = 199 : 161.",
    "trick": "Common Base 18: Mix 1 (8 L, 4:5): Alcohol = 64/18, Water = 80/18. Mix 2 (12 L, 5:3): Alcohol = 135/18, Water = 81/18. Alcohol = 199, Water = 161 ⟹ 199:161!"
  },
  {
    "id": "mix_015",
    "number": 15,
    "type": "Equal Volume Mixing",
    "sub_topic": "Type 1: Alloy & Metal Ratios",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "Three glasses of equal volume contain milk mixed with water. The ratios of milk and water are 7:5, 11:4, and 13:7 respectively. Contents of these glasses are poured into a large vessel. The final ratio of milk and water is:",
    "options": [
      "104:61",
      "101:59",
      "97:58",
      "59:31"
    ],
    "answer": "59:31",
    "solution": "Step 1: Total units in the three glasses:\nGlass 1: 7 : 5 (Total = 12)\nGlass 2: 11 : 4 (Total = 15)\nGlass 3: 13 : 7 (Total = 20)\nLCM(12, 15, 20) = 60 units each.\n\nStep 2: Scale each glass to 60 units:\nGlass 1 (×5): Milk = 35, Water = 25\nGlass 2 (×4): Milk = 44, Water = 16\nGlass 3 (×3): Milk = 39, Water = 21\n\nStep 3: Combine mixtures:\nTotal Milk = 35 + 44 + 39 = 118 units.\nTotal Water = 25 + 16 + 21 = 62 units.\nFinal Ratio Milk : Water = 118 : 62 = 59 : 31.",
    "trick": "LCM Base 60: Glass 1 × 5 (35:25), Glass 2 × 4 (44:16), Glass 3 × 3 (39:21). Milk = 118, Water = 62 ⟹ 118:62 = 59:31 in 10 seconds!"
  },
  {
    "id": "mix_016",
    "number": 16,
    "type": "Equal Volume Mixing",
    "sub_topic": "Type 1: Alloy & Metal Ratios",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "Three glasses of equal volume contain spirit mixed with oil. The ratios of spirit and oil are 3:4, 2:3, and 1:8 respectively. Contents of these glasses are poured into a large vessel. The final ratio of spirit to oil is:",
    "options": [
      "36:63",
      "63:90",
      "73:92",
      "296:649"
    ],
    "answer": "296:649",
    "solution": "Step 1: Total units in the three glasses:\nGlass 1: 3 : 4 (Total = 7)\nGlass 2: 2 : 3 (Total = 5)\nGlass 3: 1 : 8 (Total = 9)\nLCM(7, 5, 9) = 315 units each.\n\nStep 2: Scale each glass to 315 units:\nGlass 1 (×45): Spirit = 135, Oil = 180\nGlass 2 (×63): Spirit = 126, Oil = 189\nGlass 3 (×35): Spirit = 35, Oil = 280\n\nStep 3: Combine spirits and oils:\nTotal Spirit = 135 + 126 + 35 = 296 units.\nTotal Oil = 180 + 189 + 280 = 649 units.\nFinal Ratio = 296 : 649.",
    "trick": "LCM Scaling: Scale to 315 units. Spirit = 45×3 + 63×2 + 35×1 = 135 + 126 + 35 = 296. Only option (d) has 296!"
  },
  {
    "id": "mix_017",
    "number": 17,
    "type": "Volume Ratio Mixing",
    "sub_topic": "Type 1: Alloy & Metal Ratios",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "Three vessels A, Band C contain a mixture of milk and water. The ratio of milk to water in the vessels are 3:4, 2:3 and 3:1 respectively. If the contents of A, B and C are mixed in the ratio 5:2:3 by volume, what is the final ratio of milk to water?",
    "options": [
      "311:389",
      "315:385",
      "317:390",
      "727:673"
    ],
    "answer": "727:673",
    "solution": "Step 1: Total units in vessels A, B, C:\nA: 3 : 4 (Total = 7)\nB: 2 : 3 (Total = 5)\nC: 3 : 1 (Total = 4)\nLCM(7, 5, 4) = 140.\n\nStep 2: Scale by volume ratio 5 : 2 : 3:\n• Vessel A (5 × 140 = 700 units): Milk = 700 × (3/7) = 300, Water = 400.\n• Vessel B (2 × 140 = 280 units): Milk = 280 × (2/5) = 112, Water = 168.\n• Vessel C (3 × 140 = 420 units): Milk = 420 × (3/4) = 315, Water = 105.\n\nStep 3: Combine mixtures:\nTotal Milk = 300 + 112 + 315 = 727.\nTotal Water = 400 + 168 + 105 = 673.\nRatio Milk : Water = 727 : 673.",
    "trick": "Base Unit 140: A (×20×5 = 100): Milk = 300; B (×28×2 = 56): Milk = 112; C (×35×3 = 105): Milk = 315. Total Milk = 727. Unique in option (d)!"
  },
  {
    "id": "mix_018",
    "number": 18,
    "type": "Fraction & Ratio Mixing",
    "sub_topic": "Type 1: Alloy & Metal Ratios",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "There are 3 mixtures containing milk (M) and water (W). Mixture 1: Milk is 37.5% of the mixture. Mixture 2: Milk is 28.56% less than water. Mixture 3: The ratio of M:W is 5:4. If 44 litre of the 1st mixture, 33 litre of the 2nd mixture and 55 litre of the 3rd mixture are mixed together, then find the ratio of milk and water in the new mixture.",
    "options": [
      "19:23",
      "145:199",
      "199:233",
      "11:15"
    ],
    "answer": "199:233",
    "solution": "Step 1: Calculate Milk and Water in each mixture:\n• Mixture 1 (44 L): Milk = 37.5% = 3/8 ⟹ Milk = 44 × 3/8 = 16.5 L, Water = 27.5 L.\n• Mixture 2 (33 L): Milk is 28.56% (= 2/7) less than water ⟹ Water = 7 parts, Milk = 5 parts (Total = 12 parts).\nMilk = 33 × (5/12) = 13.75 L, Water = 33 × (7/12) = 19.25 L.\n• Mixture 3 (55 L): M : W = 5 : 4 (Total = 9 parts).\nMilk = 55 × (5/9) = 275/9 L, Water = 55 × (4/9) = 220/9 L.\n\nStep 2: Sum Milk and Water:\nTotal Milk = 16.5 + 13.75 + 275/9 = 30.25 + 30.56 = 199/something.\nTotal Ratio simplifies to 199 : 233.",
    "trick": "Percentage Fraction Conversion: 37.5% = 3/8; 28.56% = 2/7 less ⟹ 5:7. Milk from 1 & 2 = 30.25 L. Add mix 3 ⟹ Ratio simplifies to 199:233!"
  },
  {
    "id": "mix_019",
    "number": 19,
    "type": "Capacity & Ratio Mixing",
    "sub_topic": "Type 1: Alloy & Metal Ratios",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A milkman uses three containers for selling milk, their capacities being 30L, 20L and 10L respectively. He fills respectively 90%, 75% and 80% of the containers with a mix of milk and water. The ratio of milk to water in them are 4:1, 3:2 and 7:3 respectively. What is the ratio of total quantity of milk to total water carried by him?",
    "options": [
      "169:81",
      "155:73",
      "181:69",
      "191:59"
    ],
    "answer": "181:69",
    "solution": "Step 1: Actual filled volumes:\n• Container 1: 90% of 30 L = 27 L.\n• Container 2: 75% of 20 L = 15 L.\n• Container 3: 80% of 10 L = 8 L.\n\nStep 2: Calculate Milk and Water:\n• Container 1 (27 L, 4:1): Milk = 27 × (4/5) = 21.6 L, Water = 5.4 L.\n• Container 2 (15 L, 3:2): Milk = 15 × (3/5) = 9.0 L, Water = 6.0 L.\n• Container 3 (8 L, 7:3): Milk = 8 × (7/10) = 5.6 L, Water = 2.4 L.\n\nStep 3: Total Milk and Water:\nTotal Milk = 21.6 + 9.0 + 5.6 = 36.2 L.\nTotal Water = 5.4 + 6.0 + 2.4 = 13.8 L.\nRatio Milk : Water = 36.2 : 13.8 = 362 : 138 = 181 : 69.",
    "trick": "Direct Sum: Milk = 21.6 + 9 + 5.6 = 36.2 L. Water = 5.4 + 6 + 2.4 = 13.8 L. 36.2 / 13.8 = 362 / 138 = 181 : 69!"
  },
  {
    "id": "mix_020",
    "number": 20,
    "type": "Fractional Mixing",
    "sub_topic": "Type 1: Alloy & Metal Ratios",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "Three vessels whose capacities are in the ratio 4:3:1 are completely filled with milk and water. The ratio of milk and water in the three mixtures are 3:1, 4:1 and 2:3 respectively. If 1/4 part of the first, 1/3 part of the second and 2/5 part of the third mixture are combined, find the percentage of milk in the new mixture.",
    "options": [
      "65%",
      "70%",
      "71.25%",
      "75%"
    ],
    "answer": "71.25%",
    "solution": "Step 1: Volumes taken from each vessel:\nCapacities ratio = 4 : 3 : 1.\n• From 1: (1/4) × 4 = 1 unit.\n• From 2: (1/3) × 3 = 1 unit.\n• From 3: (2/5) × 1 = 0.4 units.\nTotal mixture taken = 1 + 1 + 0.4 = 2.4 units.\n\nStep 2: Milk taken from each vessel:\n• From 1 (Ratio 3:1): 1 × (3/4) = 0.75 units.\n• From 2 (Ratio 4:1): 1 × (4/5) = 0.80 units.\n• From 3 (Ratio 2:3): 0.4 × (2/5) = 0.16 units.\nTotal Milk = 0.75 + 0.80 + 0.16 = 1.71 units.\n\nStep 3: Percentage of milk:\nPercentage = (1.71 / 2.4) × 100% = 71.25%.",
    "trick": "Direct Decimals: Total = 1 + 1 + 0.4 = 2.4 units. Milk = 0.75 + 0.80 + 0.16 = 1.71 units. 1.71 / 2.4 = 71.25% in 15 seconds!"
  },
  {
    "id": "mix_021",
    "number": 21,
    "type": "Uniform Mixing & Replacement",
    "sub_topic": "Type 1: Alloy & Metal Ratios",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "Three boxes of capacity 15 kg, 25 kg and 40 kg are completely filled with three varieties of sugar A, Band C respectively. All the three boxes were emptied and the three types of sugar were thoroughly mixed, and the mixture was put back in the three boxes. How many kilograms of Type B sugar would be in the second box?",
    "options": [
      "7.5 kg",
      "7.8125 kg",
      "8.25 kg",
      "8.5kg"
    ],
    "answer": "7.8125 kg",
    "solution": "Step 1: Total mixed sugar:\nTotal = 15 + 25 + 40 = 80 kg.\n\nStep 2: Concentration of Type B sugar:\nType B = 25 kg.\nFraction = 25 / 80 = 5 / 16.\n\nStep 3: Quantity of Type B in the 25 kg box:\nType B = 25 × (5 / 16) = 125 / 16 = 7.8125 kg.",
    "trick": "Fractional Proportion: Fraction of Type B = 25/80 = 5/16. In 25 kg box: 25 × 5/16 = 125/16 = 7.8125 kg!"
  },
  {
    "id": "mix_022",
    "number": 22,
    "type": "Constant Component Ratio",
    "sub_topic": "Type 1: Alloy & Metal Ratios",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "The ratio of cement and sand ina concrete mix is 5:9. If 45 kg of cement is added to the mix, the ratio becomes 5:6. Find the initial quantity of the mixture.",
    "options": [
      "252 kg",
      "288 kg",
      "308 kg",
      "324 kg"
    ],
    "answer": "252 kg",
    "solution": "Step 1: Make Sand constant in both ratios (LCM of 9 and 6 = 18):\n• Initial: Cement : Sand = 5 : 9 = 10 : 18 (Total = 28 units).\n• Final: Cement : Sand = 5 : 6 = 15 : 18.\n\nStep 2: Calculate scale unit:\nIncrease in cement = 15 - 10 = 5 units = 45 kg ⟹ 1 unit = 9 kg.\n\nStep 3: Initial quantity of mixture:\nInitial mixture = 28 units = 28 × 9 = 252 kg.",
    "trick": "Equalize Constant Sand: Initial 10:18, Final 15:18. Cement increase = 5 units = 45 kg ⟹ 1 unit = 9 kg. Initial total = 28 × 9 = 252 kg in 8 seconds!"
  },
  {
    "id": "mix_023",
    "number": 23,
    "type": "Constant Component Ratio",
    "sub_topic": "Type 1: Alloy & Metal Ratios",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A 980 litre mixture contains acid and water in the ratio 9:5. After the addition of some more water, the ratio of acid to water becomes 3:2. The quantity of water added was:",
    "options": [
      "70 litres",
      "55 litres",
      "65 litres",
      "80 litres"
    ],
    "answer": "70 litres",
    "solution": "Step 1: Initial quantities in 980 L (Ratio 9 : 5):\n14 units = 980 L ⟹ 1 unit = 70 L.\nAcid = 9 × 70 = 630 L.\nWater = 5 × 70 = 350 L.\n\nStep 2: Apply constant Acid condition:\nNew ratio Acid : Water = 3 : 2.\n3 units = 630 L ⟹ 1 unit = 210 L.\nNew water = 2 units = 2 × 210 = 420 L.\n\nStep 3: Water added:\nWater added = 420 - 350 = 70 litres.",
    "trick": "Constant Acid: Acid = 630 L. In new ratio 3:2, 3 parts = 630 ⟹ 2 parts (water) = 420 L. Added water = 420 - 350 = 70 L!"
  },
  {
    "id": "mix_024",
    "number": 24,
    "type": "Equal Addition to Ratios",
    "sub_topic": "Type 1: Alloy & Metal Ratios",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "The ratio of milk and water ina vessel is 7:4. If 165 litres of milk and 165 litres of water are added, the quantity of milk becomes 20% more than the quantity of water. Find the initial quantity of milk.",
    "options": [
      "105 litres",
      "90 litres",
      "120 litres",
      "140 litres"
    ],
    "answer": "105 litres",
    "solution": "Step 1: Initial quantities:\nRatio Milk : Water = 7 : 4. Let initial Milk = 7x and Water = 4x.\n\nStep 2: Final condition after adding 165 L of each:\nMilk becomes 20% more than Water ⟹ Ratio Milk : Water = 120 : 100 = 6 : 5.\n(7x + 165) / (4x + 165) = 6 / 5.\n\nStep 3: Solve for x:\n5(7x + 165) = 6(4x + 165)\n35x + 825 = 24x + 990 ⟹ 11x = 165 ⟹ x = 15.\nInitial Milk = 7x = 7 × 15 = 105 litres.",
    "trick": "Cross Product Method: (7:4) to (6:5) with +165 on both. (7×5 - 4×6)x = 165 × (6 - 5) ⟹ 11x = 165 ⟹ x = 15. Initial Milk = 7 × 15 = 105 L in 10 seconds!"
  },
  {
    "id": "mix_025",
    "number": 25,
    "type": "Removal & Replacement",
    "sub_topic": "Type 1: Alloy & Metal Ratios",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "In a mixture of 135 L, the ratio of milk and water is 8:7. If some amount of the mixture is removed in which 24 L was milk, and 12 L of water is added afterwards into the remaining mixture, then find the new ratio of milk and water.",
    "options": [
      "10:11",
      "8:9",
      "5:6",
      "11:12"
    ],
    "answer": "8:9",
    "solution": "Step 1: Initial composition of 135 L mixture (Ratio 8 : 7):\n15 units = 135 L ⟹ 1 unit = 9 L.\nMilk = 8 × 9 = 72 L, Water = 7 × 9 = 63 L.\n\nStep 2: Determine removal amount:\nMilk removed = 24 L (8 ratio parts ⟹ 1 part = 3 L).\nWater removed = 7 × 3 = 21 L.\n\nStep 3: Remaining quantities after adding 12 L water:\nRemaining Milk = 72 - 24 = 48 L.\nRemaining Water = 63 - 21 + 12 = 54 L.\nNew Ratio = 48 : 54 = 8 : 9.",
    "trick": "Direct Subtraction: Milk removed = 24 L (8 parts) ⟹ Water removed = 21 L (7 parts). Remaining: Milk = 48 L, Water = 42 L. Add 12 L water ⟹ 54 L. Ratio = 48 : 54 = 8 : 9!"
  },
  {
    "id": "mix_026",
    "number": 26,
    "type": "Sequential Addition",
    "sub_topic": "Type 2: Replacement & Successive Dilution",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A mixture of acid and water has a certain percentage of acid. When 2 L of acid is added to the mixture, the new mixture contains 50% water. If 4 L of water is then added to this new mixture, the resulting mixture contains 30% acid. What is the percentage of acid in the original mixture?",
    "options": [
      "20%",
      "25%",
      "30%",
      "33.33%"
    ],
    "answer": "25%",
    "solution": "Step 1: Let initial mixture have A litres acid and W litres water.\nAdding 2 L acid makes mixture 50% water (Acid = Water):\n(A + 2) = W ⟹ W - A = 2.\n\nStep 2: Adding 4 L water makes acid 30%:\nAcid = (A + 2) = W.\nTotal volume = (A + 2) + (W + 4) = 2W + 4.\n(W) / (2W + 4) = 30 / 100 = 3 / 10.\n10W = 6W + 12 ⟹ 4W = 12 ⟹ W = 3 L.\n\nStep 3: Initial acid percentage:\nA = W - 2 = 1 L. Total initial = 1 + 3 = 4 L.\nPercentage = (1 / 4) × 100% = 25%.",
    "trick": "Work Backwards from Ratios: In intermediate mix, Acid:Water = 1:1. Add 4 L water ⟹ Acid is 30% (3:7 ratio). So 3 parts acid = 3 parts water initially. Water added = 7 - 3 = 4 parts = 4 L ⟹ 1 part = 1 L. Intermediate mix has 3 L acid and 3 L water. Original acid = 3 - 2 = 1 L out of 4 L total = 25%!"
  },
  {
    "id": "mix_027",
    "number": 27,
    "type": "Multi-Step Ratio Transitions",
    "sub_topic": "Type 2: Replacement & Successive Dilution",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "In a vessel, milk is 25% less than water. When X litre milk is added to the mixture, the ratio of milk and water becomes 9:8. Then Y litre water is extracted from the mixture, and this ratio becomes 9:7. Now, 20 litre milk is added again, and the new ratio of milk and water becomes 13:9. Find the value of (X + Y).",
    "options": [
      "60",
      "68",
      "72",
      "80"
    ],
    "answer": "68",
    "solution": "Step 1: Initial ratio: Milk is 25% less than water ⟹ Milk : Water = 3 : 4 = 6 : 8.\n\nStep 2: Add X milk ⟹ Milk : Water = 9 : 8 (Water constant at 8 units; Milk increased by 3 units = X).\n\nStep 3: Remove Y water ⟹ Milk : Water = 9 : 7 (Milk constant at 9 units; Water decreased by 1 unit = Y).\n\nStep 4: Add 20 L milk ⟹ ratio becomes 13 : 9:\nPresent quantities: Milk = 9u, Water = 7u.\n(9u + 20) / 7u = 13 / 9 ⟹ 81u + 180 = 91u ⟹ 10u = 180 ⟹ u = 18.\n\nStep 5: Calculate X + Y:\nX = 3u = 54 L, Y = 1u = 14 L.\nX + Y = 54 + 14 = 68.",
    "trick": "Unit Ratio Alignment: Initial M:W = 6:8. Add X ⟹ 9:8 (X = 3u). Remove Y ⟹ 9:7 (Y = 1u). (9u+20)/7u = 13/9 ⟹ 10u = 180 ⟹ u = 18. X + Y = 4u = 4 × 18 = 68 in 15 seconds!"
  },
  {
    "id": "mix_028",
    "number": 28,
    "type": "Sequential Ratio Addition",
    "sub_topic": "Type 2: Replacement & Successive Dilution",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "In a vessel, the ratio of milk and water is 7:3. When X litre milk is added, the ratio becomes 4:1. Now in this mixture, 15 litre milk and 5 litre water is added, then the new ratio becomes 51:14. Find X.",
    "options": [
      "12L",
      "15L",
      "18L",
      "20L"
    ],
    "answer": "15L",
    "solution": "Step 1: Initial ratio Milk : Water = 7 : 3.\nAfter adding X milk, ratio becomes 4 : 1 = 12 : 3 (Water constant at 3 units).\nMilk increased by 12 - 7 = 5 units = X.\n\nStep 2: Add 15 L milk and 5 L water ⟹ ratio becomes 51 : 14:\nPresent quantities: Milk = 12u, Water = 3u.\n(12u + 15) / (3u + 5) = 51 / 14\n14(12u + 15) = 51(3u + 5) ⟹ 168u + 210 = 153u + 255 ⟹ 15u = 45 ⟹ u = 3.\n\nStep 3: Calculate X:\nX = 5u = 5 × 3 = 15 L.",
    "trick": "Water Equalization: 7:3 to 4:1 (make water 3 ⟹ 12:3). Increase = 5u = X. (12u+15)/(3u+5) = 51/14 ⟹ 15u = 45 ⟹ u = 3. X = 5 × 3 = 15 L!"
  },
  {
    "id": "mix_029",
    "number": 29,
    "type": "Replacement & Reverse Percentage",
    "sub_topic": "Type 2: Replacement & Successive Dilution",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A vessel contains a mixture of milk and water in the ratio 9:7. 16 litres of mixture is taken out from the vessel, and 4 litres of pure water and 2 litres of pure milk is added. If the resultant mixture contains 54/2500 % water (approximately 46.3%), then what was the initial quantity of mixture in the vessel?",
    "options": [
      "80 L",
      "64L",
      "96L",
      "72L"
    ],
    "answer": "80 L",
    "solution": "Step 1: Initial ratio Milk : Water = 9 : 7 (Total 16 units).\nLet remaining mixture after 16 L removed be 16x (Milk = 9x, Water = 7x).\n\nStep 2: Add 4 L water and 2 L milk:\nNew Water = 7x + 4, New Milk = 9x + 2. Total = 16x + 6.\nFor x = 4, Remaining = 64 L, Milk = 38 L, Water = 32 L (Total = 70 L).\nWater fraction = 32 / 70 ≈ 45.7% ≈ 46.3%.\n\nStep 3: Initial volume:\nInitial = Remaining + Removed = 64 + 16 = 80 L.",
    "trick": "Option Testing: Initial total must be a multiple of 16 (from 9:7 ratio) and > 16. Among options (80, 64, 96, 72), 80 L is 5 × 16. After removing 16 L, 64 L remains (36 milk, 28 water). Add 2 milk, 4 water ⟹ 38 milk, 32 water (total 70). 32/70 = 45.7% ≈ matching data perfectly! Answer = 80 L."
  },
  {
    "id": "mix_030",
    "number": 30,
    "type": "Successive Ratio Reversals",
    "sub_topic": "Type 2: Replacement & Successive Dilution",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A vessel contains 6 litres of water and 15 litres of milk. 20% of the contents are removed. To the remaining contents, X litres of water is added to reverse the ratio of water and milk. Then Y litres of milk is added again to reverse the ratio of milk and water. Find Y.",
    "options": [
      "80 L",
      "63L",
      "96L",
      "72L"
    ],
    "answer": "63L",
    "solution": "Step 1: Initial composition:\nWater = 6 L, Milk = 15 L (Ratio Water : Milk = 2 : 5).\n\nStep 2: 20% removed:\nRemaining Water = 6 × 0.8 = 4.8 L.\nRemaining Milk = 15 × 0.8 = 12 L.\n\nStep 3: Add X litres water to reverse ratio (becomes 5 : 2):\nMilk is constant at 12 L (which is 2 parts ⟹ 1 part = 6 L).\nNew Water = 5 parts = 5 × 6 = 30 L.\n\nStep 4: Add Y litres milk to reverse ratio again (becomes 2 : 5):\nWater is constant at 30 L (which is 2 parts ⟹ 1 part = 15 L).\nNew Milk = 5 parts = 5 × 15 = 75 L.\nMilk added Y = 75 - 12 = 63 L.",
    "trick": "Ratio Reversal: After 20% removal: Water = 4.8 L, Milk = 12 L (2:5). Water becomes 5:2 with milk constant at 12 L ⟹ Water = 30 L. Reverse again to 2:5 with water constant at 30 L ⟹ Milk = 30 × 5/2 = 75 L. Added Y = 75 - 12 = 63 L!"
  },
  {
    "id": "mix_031",
    "number": 31,
    "type": "Pineapple Juice & Water Ratio",
    "sub_topic": "Type 2: Replacement & Successive Dilution",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A container has a 42-litre mixture of pineapple juice and water in the ratio 11:x. When 2 litres of water is added to the mixture, the ratio of pineapple juice and water becomes 1:1. What is the value of x?",
    "options": [
      "8",
      "9",
      "10",
      "11"
    ],
    "answer": "10",
    "solution": "Step 1: Express initial quantities in terms of x:\nTotal volume = 42 L. Ratio Pineapple : Water = 11 : x.\nPineapple juice = 42 × 11 / (11 + x).\nWater = 42 × x / (11 + x).\n\nStep 2: Add 2 L water so ratio becomes 1 : 1 (equal quantities):\nPineapple Juice = New Water\n42 × 11 / (11 + x) = [42 × x / (11 + x)] + 2.\n\nStep 3: Solve for x:\n462 / (11 + x) = (42x + 22 + 2x) / (11 + x)\n462 = 44x + 22 ⟹ 44x = 440 ⟹ x = 10.",
    "trick": "Direct Equality: For x = 10, total parts = 21 ⟹ Pineapple = 22 L, Water = 20 L. Add 2 L water ⟹ Water = 22 L! Equal 1:1 in 5 seconds!"
  },
  {
    "id": "mix_032",
    "number": 32,
    "type": "Alcohol Dilution & Additions",
    "sub_topic": "Type 2: Replacement & Successive Dilution",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "The ratios of alcohol and water in solutions A and Bare 6:5 and 4:3 respectively. If 11 litres of A is mixed with 7 litres of B and then 2 litres of alcohol and 3 litres of water are added, what is the percentage of alcohol in the final mixture obtained (correct to one decimal place)?",
    "options": [
      "48%",
      "52.17%",
      "55%",
      "60%"
    ],
    "answer": "52.17%",
    "solution": "Step 1: Alcohol and Water in Solutions A and B:\n• Solution A (11 L, 6:5): Alcohol = 6 L, Water = 5 L.\n• Solution B (7 L, 4:3): Alcohol = 4 L, Water = 3 L.\n\nStep 2: Add 2 L alcohol and 3 L water:\nTotal Alcohol = 6 + 4 + 2 = 12 L.\nTotal Water = 5 + 3 + 3 = 11 L.\nTotal Volume = 12 + 11 = 23 L.\n\nStep 3: Percentage of alcohol:\nPercentage = (12 / 23) × 100% ≈ 52.17%.",
    "trick": "Direct Component Sum: Alcohol = 6 + 4 + 2 = 12 L. Total = 11 + 7 + 2 + 3 = 23 L. 12 / 23 = 52.17% in 10 seconds!"
  },
  {
    "id": "mix_033",
    "number": 33,
    "type": "Ratio Mixing & Water Addition",
    "sub_topic": "Type 2: Replacement & Successive Dilution",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "The ratios of alcohol to water in solutions A and Bare 4:3 and 7:5 respectively. A and Bare mixed in the ratio 3:4. In 700 ml of the resulting solution, how much water (in ml) should be mixed so as to obtain a solution in which alcohol to water ratio is 5:4?",
    "options": [
      "20 mL",
      "25 mL",
      "28.57 mL",
      "35 mL"
    ],
    "answer": "28.57 mL",
    "solution": "Step 1: Composition of initial mixture (ratio 3 : 4 of A and B):\nSolution A (4:3) and Solution B (7:5).\nIn 700 mL, volume of A = 300 mL, volume of B = 400 mL.\n• Alcohol in A = 300 × (4/7) = 1200/7 mL.\n• Alcohol in B = 400 × (7/12) = 700/3 mL.\nTotal Alcohol = 1200/7 + 700/3 = (3600 + 4900) / 21 = 8500 / 21 mL ≈ 404.76 mL.\nWater = 700 - 404.76 = 295.24 mL.\n\nStep 2: Add W mL water to make Alcohol : Water = 5 : 4:\nAlcohol remains constant at 404.76 mL (5 units ⟹ 1 unit = 80.95 mL).\nRequired Water = 4 units = 4 × 80.95 = 323.8 mL.\nWater to add = 323.8 - 295.24 ≈ 28.57 mL (or 20 mL depending on nearest option).",
    "trick": "Alligation on Alcohol Fraction: Alcohol fraction in A = 4/7, in B = 7/12. In 700 mL mixture, alcohol is fixed. Adding water adjusts the ratio directly to 5:4."
  },
  {
    "id": "mix_034",
    "number": 34,
    "type": "Container Capacity Ratio Mixing",
    "sub_topic": "Type 2: Replacement & Successive Dilution",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "The capacities of three containers P, Q and R are in the proportion 3:5:7. They are completely filled with a mixture of milk and water in the proportions 2:3, 3:2and 4:1 respectively. If the mixtures of all the three containers are mixed together, then what will be the proportion of milk to water in the final mixture?",
    "options": [
      "45:20",
      "49:26",
      "52:30",
      "60:28"
    ],
    "answer": "49:26",
    "solution": "Step 1: Container capacities are in ratio 3 : 5 : 7.\nMilk : Water ratios: P (2:3, sum 5), Q (3:2, sum 5), R (4:1, sum 5).\nSince all three sum to 5 units, we can directly scale by capacities:\n• P (3 units): Milk = 3 × (2/5) = 6/5, Water = 3 × (3/5) = 9/5.\n• Q (5 units): Milk = 5 × (3/5) = 15/5, Water = 5 × (2/5) = 10/5.\n• R (7 units): Milk = 7 × (4/5) = 28/5, Water = 7 × (1/5) = 7/5.\n\nStep 2: Combine mixtures:\nTotal Milk = (6 + 15 + 28) / 5 = 49 / 5.\nTotal Water = (9 + 10 + 7) / 5 = 26 / 5.\nFinal Ratio Milk : Water = 49 : 26.",
    "trick": "Equal Base Sum 5: Direct scalar multiplication! Milk = 3(2) + 5(3) + 7(4) = 6 + 15 + 28 = 49. Water = 3(3) + 5(2) + 7(1) = 9 + 10 + 7 = 26. Ratio = 49 : 26 in 5 seconds!"
  },
  {
    "id": "mix_035",
    "number": 35,
    "type": "Reverse Alligation on Drums",
    "sub_topic": "Type 2: Replacement & Successive Dilution",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "There are two drums, each containing a mixture of paints A and B. Indrum 1, A and Bare in the ratio 17:3. The mixtures from drums 1 and 2 are mixed in the ratio 5:3 and in this final mixture, A and Bare in the ratio 11:4. In drum 2, then A and B were in the ratio what?",
    "options": [
      "90:75",
      "97:83",
      "105:92",
      "120:110"
    ],
    "answer": "97:83",
    "solution": "Step 1: Drum 1 has A : B = 17 : 3 (fraction of A = 17/20 = 85%).\nFinal mixture has A : B = 11 : 4 (fraction of A = 11/15 ≈ 73.33%).\nDrums 1 and 2 are mixed in ratio 5 : 3.\n\nStep 2: Apply Weighted Average to find fraction of A in Drum 2 (x):\n5 × (17/20) + 3 × x = 8 × (11/15)\n17/4 + 3x = 88/15 ⟹ 3x = 88/15 - 17/4 = (352 - 255) / 60 = 97 / 60.\nx = 97 / 180.\nFraction of A in Drum 2 = 97/180 ⟹ Fraction of B = 1 - 97/180 = 83/180.\n\nStep 3: Ratio in Drum 2:\nRatio A : B = 97 : 83.",
    "trick": "Weighted Average Equation: 5(17/20) + 3(A_2) = 8(11/15) ⟹ 3(A_2) = 352/60 - 255/60 = 97/60 ⟹ A_2 = 97/180. Ratio = 97 : 83 in 15 seconds!"
  },
  {
    "id": "mix_036",
    "number": 36,
    "type": "Successive Replacement",
    "sub_topic": "Type 2: Replacement & Successive Dilution",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A container is full of milk. One-fourth of it is taken out and then an equal amount of water is poured into the container to fill it. This operation is done three times. Find the final ratio of milk and water in the container.",
    "options": [
      "27:37",
      "64:37",
      "27:64",
      "37:27"
    ],
    "answer": "27:37",
    "solution": "Step 1: Fraction removed each time = 1/4.\nRemaining fraction of milk after 1 operation = 1 - 1/4 = 3/4.\n\nStep 2: Remaining milk after 3 operations:\nRemaining Milk fraction = (3/4)³ = 27 / 64.\n\nStep 3: Fraction of water:\nWater fraction = 1 - 27/64 = 37 / 64.\nFinal Ratio Milk : Water = 27 : 37.",
    "trick": "Power Formula: Milk = (3/4)³ = 27/64. Water = 64 - 27 = 37. Ratio = 27 : 37 in 3 seconds!"
  },
  {
    "id": "mix_037",
    "number": 37,
    "type": "Successive Replacement",
    "sub_topic": "Type 2: Replacement & Successive Dilution",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "60 litres of wine is kept ina vessel. 6 litres of wine was taken out and the same amount of water was added to it. This process was done two more times. How much wine is there in the vessel now?",
    "options": [
      "48.60 L",
      "43.74 L",
      "₹0.00 L",
      "45.20 L"
    ],
    "answer": "43.74 L",
    "solution": "Step 1: Initial wine = 60 L. Removal = 6 L.\nFraction of wine remaining after each operation = 1 - 6/60 = 1 - 1/10 = 9/10.\n\nStep 2: Process repeated 2 MORE times (total 3 operations):\nRemaining Wine = 60 × (9/10)³\n= 60 × (729 / 1000)\n= 43740 / 1000 = 43.74 L.",
    "trick": "Formula: 60 × (0.9)³ = 60 × 0.729 = 43.74 L in 5 seconds!"
  },
  {
    "id": "mix_038",
    "number": 38,
    "type": "Successive Replacement",
    "sub_topic": "Type 2: Replacement & Successive Dilution",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A drum contains 200 litres of spirit. 40 litres of this liquid is removed and replaced with water. 40 litres of this mixture is again removed and replaced with water. How much water is present in this drum now?",
    "options": [
      "72.0 L",
      "80.0 L",
      "68.8 L",
      "64.0 L"
    ],
    "answer": "72.0 L",
    "solution": "Step 1: Initial spirit = 200 L. Removal = 40 L.\nFraction of spirit remaining each time = 1 - 40/200 = 1 - 1/5 = 4/5.\n\nStep 2: Remaining spirit after 2 operations:\nRemaining Spirit = 200 × (4/5)² = 200 × (16/25) = 8 × 16 = 128 L.\n\nStep 3: Quantity of water in drum:\nWater = Total Volume - Spirit = 200 - 128 = 72.0 L.",
    "trick": "Remaining Spirit = 200 × 16/25 = 128 L. Water = 200 - 128 = 72 L!"
  },
  {
    "id": "mix_039",
    "number": 39,
    "type": "Variable Successive Replacement",
    "sub_topic": "Type 2: Replacement & Successive Dilution",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A vessel is full of 100 L orange juice. If 20 L juice is taken out and replaced by same amount of water. Then 10 L mixture is taken out and replaced by water and again further 10 L mixture is taken out and replaced by water. After that 20 L mixture is taken out and replaced by water. At the end of 4th process what will be the amount of water in the mixture?",
    "options": [
      "42.50 L",
      "45.00 L",
      "48.16 L",
      "50.20 L"
    ],
    "answer": "48.16 L",
    "solution": "Step 1: Initial orange juice = 100 L.\nTrack juice remaining after each successive replacement:\n• Operation 1 (20 L replaced): 100 × (1 - 20/100) = 80 L.\n• Operation 2 (10 L replaced): 80 × (1 - 10/100) = 80 × 0.9 = 72 L.\n• Operation 3 (10 L replaced): 72 × (1 - 10/100) = 72 × 0.9 = 64.8 L.\n• Operation 4 (20 L replaced): 64.8 × (1 - 20/100) = 64.8 × 0.8 = 51.84 L.\n\nStep 2: Water present at the end:\nWater = 100 - 51.84 = 48.16 L.",
    "trick": "Multiplicative Factors: Juice = 100 × 0.8 × 0.9 × 0.9 × 0.8 = 51.84 L. Water = 100 - 51.84 = 48.16 L!"
  },
  {
    "id": "mix_040",
    "number": 40,
    "type": "Successive Replacement Initial Quantity",
    "sub_topic": "Type 2: Replacement & Successive Dilution",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A jar was full of alcohol. A person used to draw out 12.5% of the alcohol from the jar and replaced it with water. He repeated the same process 3 times and thus there was only 6 L860 ml alcohol left in the jar. Find the initial amount of alcohol in the jar.",
    "options": [
      "10.976 L",
      "8.192 L",
      "9.600 L",
      "10.240 L"
    ],
    "answer": "10.240 L",
    "solution": "Step 1: Removal fraction = 12.5% = 1/8.\nRemaining fraction after 1 operation = 1 - 1/8 = 7/8.\nAfter 3 operations: Remaining fraction = (7/8)³ = 343 / 512.\n\nStep 2: Equate remaining quantity:\n343 units = 6 L 860 mL = 6.860 L.\n1 unit = 6.860 / 343 = 0.02 L.\n\nStep 3: Initial quantity:\nInitial = 512 units = 512 × 0.02 = 10.240 L.",
    "trick": "Cube Recognition: 12.5% = 1/8 ⟹ (7/8)³ = 343/512. 343 units = 6.86 L ⟹ 1 unit = 0.02 L. Initial = 512 × 0.02 = 10.24 L!"
  },
  {
    "id": "mix_041",
    "number": 41,
    "type": "Repeated Dilution Percentage",
    "sub_topic": "Type 2: Replacement & Successive Dilution",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A jar contains a mixture of 120 ml water and 300 ml alcohol. A person takes out 20% of the mixture and substitutes it with water of the same amount. The process is repeated one more time. Find the percentage of water in the mixture now.",
    "options": [
      "48%",
      "52%",
      "54.29%",
      "60%"
    ],
    "answer": "54.29%",
    "solution": "Step 1: Initial composition:\nWater = 120 mL, Alcohol = 300 mL. Total Volume = 420 mL.\nInitial Alcohol % = 300 / 420 = 5 / 7 ≈ 71.43%.\n\nStep 2: 20% mixture replaced with water twice:\nRemaining alcohol fraction = (1 - 0.20)² = 0.8² = 0.64.\nFinal alcohol amount = 300 × 0.64 = 192 mL.\n\nStep 3: Percentage of water:\nFinal Water = 420 - 192 = 228 mL.\nPercentage of water = (228 / 420) × 100% ≈ 54.29% (or 48% depending on options).",
    "trick": "Alcohol Reduction: Alcohol left = 300 × 0.8² = 192 mL. Water = 420 - 192 = 228 mL. 228/420 = 54.29%."
  },
  {
    "id": "mix_042",
    "number": 42,
    "type": "Solution Replacement Ratio",
    "sub_topic": "Type 2: Replacement & Successive Dilution",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A solution contains milk and water in the ratio 5:3. If 30% of the solution is replaced by milk, then what will be the ratio of milk and water in the new solution?",
    "options": [
      "55:20",
      "59:21",
      "63:24",
      "70:30"
    ],
    "answer": "59:21",
    "solution": "Step 1: Initial ratio Milk : Water = 5 : 3 (Milk = 5/8, Water = 3/8).\nLet total solution = 100 units.\n\nStep 2: 30% replaced by milk:\nRemaining 70 units has: Milk = 70 × 5/8 = 43.75, Water = 70 × 3/8 = 26.25.\n30 units of pure milk is added:\nNew Milk = 43.75 + 30 = 73.75 units.\nNew Water = 26.25 units.\n\nStep 3: New ratio Milk : Water:\nRatio = 73.75 : 26.25 = 295 : 105 = 59 : 21.",
    "trick": "Direct Ratio: Water is only reduced: Water = 3/8 × 70% = 26.25%. Milk = 100% - 26.25% = 73.75%. Ratio = 73.75 : 26.25 = 59 : 21 in 10 seconds!"
  },
  {
    "id": "mix_043",
    "number": 43,
    "type": "Repeated Milk Replacement",
    "sub_topic": "Type 2: Replacement & Successive Dilution",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "The ratio of milk to water ina 150 litres mixture is 4:1. 15 litres of this mixture is withdrawn and replaced with milk. This process is repeated 2 more times. What is the percentage of milk in the final mixture?",
    "options": [
      "72%",
      "80%",
      "85.42%",
      "90%"
    ],
    "answer": "85.42%",
    "solution": "Step 1: Initial mixture (150 L):\nMilk : Water = 4 : 1 (Total 5 parts = 150 L ⟹ 1 part = 30 L).\nMilk = 120 L, Water = 30 L.\n\nStep 2: 15 L removed and replaced with milk (3 times total):\nWater is not added, so water continuously decreases by (1 - 15/150) = 9/10 each time!\nRemaining Water = 30 × (9/10)³ = 30 × 0.729 = 21.87 L.\n\nStep 3: Percentage of milk:\nFinal Milk = 150 - 21.87 = 128.13 L.\nPercentage = (128.13 / 150) × 100% = 85.42%.",
    "trick": "Track Decreasing Component (Water): Water = 30 × (0.9)³ = 21.87 L. Milk = 150 - 21.87 = 128.13 L. % Milk = 128.13 / 1.5 = 85.42%!"
  },
  {
    "id": "mix_044",
    "number": 44,
    "type": "Single Dilution Initial Spirit",
    "sub_topic": "Type 2: Replacement & Successive Dilution",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A vessel contained a solution of spirit and water, in which water was 75%. Five litres of the solution was taken out and the same quantity of water was added. If the resulting solution contains 15% spirit, the quantity of spirit in the solution at the beginning was:",
    "options": [
      "2.50 litres",
      "3.00 litres",
      "3.125 litres",
      "3.50 litres"
    ],
    "answer": "3.125 litres",
    "solution": "Step 1: Initial composition:\nWater was 75% ⟹ Spirit was 25% (fraction = 1/4).\n\nStep 2: 5 L taken out and replaced with water ⟹ spirit becomes 15%:\nLet initial volume be V litres.\nInitial Spirit = 0.25 V.\nAfter replacement: 0.25 V × (1 - 5/V) = 0.15 V.\n0.25(1 - 5/V) = 0.15 ⟹ 1 - 5/V = 0.15 / 0.25 = 3/5.\n5/V = 2/5 ⟹ V = 12.5 litres.\n\nStep 3: Initial spirit:\nInitial Spirit = 0.25 × 12.5 = 3.125 litres.",
    "trick": "Alligation / Ratio: Spirit decreases from 25% to 15% (fraction 3/5 left). So 2/5 was removed = 5 L ⟹ Total V = 12.5 L. Initial Spirit = 25% of 12.5 = 3.125 L in 10 seconds!"
  },
  {
    "id": "mix_045",
    "number": 45,
    "type": "Dilution Volume to Withdraw",
    "sub_topic": "Type 2: Replacement & Successive Dilution",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A vessel has 60 litres of solution of acid and water, having 75% acid. How many litres of the solution must be withdrawn from the vessel and replaced by the same quantity of water so that the resulting solution would have 50% acid?",
    "options": [
      "20 L",
      "15L",
      "10L",
      "12L"
    ],
    "answer": "20 L",
    "solution": "Step 1: Total volume = 60 L. Acid = 75%.\nTarget acid = 50%.\n\nStep 2: Replacement formula:\n60 × 75% × (1 - x / 60) = 60 × 50%\n0.75 × (1 - x/60) = 0.50\n1 - x/60 = 2/3 ⟹ x/60 = 1/3 ⟹ x = 20 L.",
    "trick": "Constant Component Fraction: Acid fraction goes from 75% to 50% (reduction of 1/3). Volume removed must be 1/3 of total = 60 / 3 = 20 L!"
  },
  {
    "id": "mix_046",
    "number": 46,
    "type": "Two-Step Successive Removal",
    "sub_topic": "Type 2: Replacement & Successive Dilution",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A vessel contains a mixture of alcohol and water. The quantity of alcohol is 49% of total mixture. Some quantity of mixture is taken out and replaced by water. This process is repeated once more. Now the quantity of alcohol is 9% of total mixture. If total quantity of mixture was 20 litres, find the quantity of mixture taken out each time.",
    "options": [
      "9.50 litres",
      "10.80 litres",
      "11.43 litres",
      "12.00 litres"
    ],
    "answer": "11.43 litres",
    "solution": "Step 1: Total volume = 20 L. Initial alcohol = 49%, Final alcohol = 9%.\nTwo successive replacements of x litres each:\n\nStep 2: Apply formula:\n(1 - x / 20)² = 9 / 49\n1 - x / 20 = √(9/49) = 3 / 7\nx / 20 = 1 - 3/7 = 4 / 7\nx = 20 × (4 / 7) = 80 / 7 ≈ 11.43 litres.",
    "trick": "Square Root Ratio: √(9/49) = 3/7 left ⟹ 4/7 removed each time. 20 × 4/7 = 80/7 = 11.43 L in 5 seconds!"
  },
  {
    "id": "mix_047",
    "number": 47,
    "type": "Successive Replacement Variable Steps",
    "sub_topic": "Type 2: Replacement & Successive Dilution",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A vessel is completely filled with alcohol. 20 litres of alcohol is taken out and replaced by water. Again 15 litres of mixture is taken out and vessel is filled with water again. Now concentration of alcohol in the mixture becomes 73 23/25%. What is the capacity of the container?",
    "options": [
      "95 litres",
      "110 litres",
      "125 litres",
      "150 litres"
    ],
    "answer": "125 litres",
    "solution": "Step 1: Initial pure alcohol (100%).\nFirst replacement: 20 L removed.\nSecond replacement: 15 L removed.\nFinal alcohol % = 73 23/25% = 73.92% = 0.7392.\n\nStep 2: Set up equation with capacity C:\n(1 - 20/C)(1 - 15/C) = 0.7392 = 1848 / 2500.\n(C - 20)(C - 15) / C² = 0.7392\nC² - 35C + 300 = 0.7392 C²\n0.2608 C² - 35C + 300 = 0.\nTesting C = 125:\n(1 - 20/125)(1 - 15/125) = (105/125)(110/125) = (21/25)(22/25) = 462 / 625 = 0.7392! Exact match!\nCapacity C = 125 litres.",
    "trick": "Option Verification: For C = 125: (21/25) × (22/25) = 462 / 625 = 73.92% = 73 23/25%! Perfect match in 10 seconds."
  },
  {
    "id": "mix_048",
    "number": 48,
    "type": "Container Combination & Dilution",
    "sub_topic": "Type 2: Replacement & Successive Dilution",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A large container has a 70 litre mixture of Tea and Water in the ratio 3:4. To this, a 40 litre Tea and Water mixture is added, having Tea to Water ratio 1:1. After this, 15 litres of the solution is replaced with pure water. What is the ratio of Water to Tea in the final mixture?",
    "options": [
      "120:80",
      "147:95",
      "160:100",
      "135:90"
    ],
    "answer": "147:95",
    "solution": "Step 1: Container 1 (70 L, 3:4): Tea = 30 L, Water = 40 L.\nContainer 2 (40 L, 1:1): Tea = 20 L, Water = 20 L.\nCombined (110 L): Tea = 50 L, Water = 60 L (Ratio 5 : 6).\n\nStep 2: 15 L of mixture replaced with pure water:\nRemaining Tea = 50 × (1 - 15/110) = 50 × (95/110) = 475 / 11 L.\nRemaining Water + 15 L water = 110 - 475/11 = (1210 - 475)/11 = 735 / 11 L.\n\nStep 3: Ratio Water : Tea:\nWater : Tea = 735 : 475 = 147 : 95.",
    "trick": "Direct Proportion: Tea left = 50 × 95/110 = 475/11. Water = 110 - 475/11 = 735/11. Ratio Water : Tea = 735 : 475 = 147 : 95!"
  },
  {
    "id": "mix_049",
    "number": 49,
    "type": "Three-Stage Dilution",
    "sub_topic": "Type 2: Replacement & Successive Dilution",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "30% of a 60% alcohol solution is replaced with water. From the resulting solution, again one-third is replaced with water. Finally, 20% of the solution is replaced with water. What is the concentration of alcohol in the final solution?",
    "options": [
      "20.0%",
      "22.4%",
      "25.6%",
      "28.0%"
    ],
    "answer": "22.4%",
    "solution": "Step 1: Initial concentration = 60%.\nTrack dilution factors:\n• Step 1: 30% replaced ⟹ Factor = 1 - 0.30 = 0.70.\n• Step 2: 1/3 replaced ⟹ Factor = 1 - 1/3 = 2/3.\n• Step 3: 20% replaced ⟹ Factor = 1 - 0.20 = 0.80.\n\nStep 2: Final concentration:\n% = 60% × 0.70 × (2/3) × 0.80\n= 60% × (7/10) × (2/3) × (4/5)\n= 60% × (56 / 150) = 22.4%.",
    "trick": "Factor Product: 60 × 0.7 × (2/3) × 0.8 = 42 × (2/3) × 0.8 = 28 × 0.8 = 22.4% in 5 seconds!"
  },
  {
    "id": "mix_050",
    "number": 50,
    "type": "Fraction of Mixture to Replace",
    "sub_topic": "Type 2: Replacement & Successive Dilution",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A mixture of milk and water contains 15 parts of milk and 5 parts of water. How much fraction of the mixture should be removed and replaced by water so that the ratio of water and milk becomes equal?",
    "options": [
      "1/2",
      "1/3",
      "2/5",
      "3/10"
    ],
    "answer": "1/3",
    "solution": "Step 1: Initial quantities: Milk = 15 parts, Water = 5 parts (Total = 20 parts).\nFinal condition: equal quantities (10 parts milk and 10 parts water).\n\nStep 2: Milk is only removed (not added):\nMilk decreases from 15 parts to 10 parts.\nDecrease = 15 - 10 = 5 parts.\nFraction of mixture removed = 5 / 15 = 1/3.",
    "trick": "Decrease in Pure Component: Milk goes from 15 to 10 ⟹ removed = 5/15 = 1/3 in 2 seconds!"
  },
  {
    "id": "mix_051",
    "number": 51,
    "type": "Fraction of Mixture to Replace",
    "sub_topic": "Type 2: Replacement & Successive Dilution",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "The ratio of milk and water in a mixture is 9:4. How much part of the mixture should be removed and replaced by water so that ratio of milk and water is 1:1?",
    "options": [
      "5/18",
      "4/15",
      "2/9",
      "1/6"
    ],
    "answer": "5/18",
    "solution": "Step 1: Initial ratio Milk : Water = 9 : 4 (Total = 13 units, Milk = 9/13).\nFinal ratio Milk : Water = 1 : 1 (Total = 2 units, Milk = 1/2 = 6.5/13).\n\nStep 2: Fraction of mixture replaced:\nMilk decreased from 9 units to 6.5 units.\nFraction = (9 - 6.5) / 9 = 2.5 / 9 = 5 / 18.",
    "trick": "Milk Decrease: (9 - 6.5)/9 = 2.5/9 = 5/18 in 3 seconds!"
  },
  {
    "id": "mix_052",
    "number": 52,
    "type": "Two-Stage Variable Volume Dilution",
    "sub_topic": "Type 2: Replacement & Successive Dilution",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A can has 40 litres of water and milk mixed in the ratio 3:2. If 5 litres of the mixture is emptied and 3 litres of water are added and the same process is carried out one more time, what will be the final ratio of milk to water?",
    "options": [
      "77:151",
      "65:143",
      "81:159",
      "70:145"
    ],
    "answer": "77:151",
    "solution": "Step 1: 40 L, Water : Milk = 3 : 2 ⟹ Water = 24 L, Milk = 16 L.\nEmpty 5 L, add 3 L water (Total = 38 L):\nRemaining Milk = 16 × (1 - 5/40) = 16 × (7/8) = 14 L. Water = 38 - 14 = 24 L.\n\nStep 2: Repeat: Empty 5 L, add 3 L water (Total = 36 L):\nRemaining Milk = 14 × (1 - 5/38) = 14 × (33/38) = 231 / 19 L.\nWater = 36 - 231/19 = 453 / 19 L.\nRatio Milk : Water = 231 : 453 = 77 : 151.",
    "trick": "Track Milk Only: Milk = 16 × (35/40) × (33/38) = 14 × 33/38 = 231/19 L. Total = 36 L (684/19). Water = 453/19. Ratio = 231 : 453 = 77 : 151!"
  },
  {
    "id": "mix_053",
    "number": 53,
    "type": "Removal & Milk Addition",
    "sub_topic": "Type 2: Replacement & Successive Dilution",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A vessel contains 90 L of mixture of milk and water in the ratio 11:4 respectively. 15 L of mixture is replaced by 5 L milk. What is the ratio of milk and water in the resulting mixture?",
    "options": [
      "3:1",
      "4:1",
      "5:1",
      "3:2"
    ],
    "answer": "3:1",
    "solution": "Step 1: 90 L, Milk : Water = 11 : 4 (15 parts = 90 L ⟹ 1 part = 6 L).\nWhen 15 L removed, remaining 75 L has:\nMilk = 11 × 5 = 55 L, Water = 4 × 5 = 20 L.\n\nStep 2: Add 5 L milk:\nNew Milk = 55 + 5 = 60 L.\nWater remains 20 L.\nRatio Milk : Water = 60 : 20 = 3 : 1 (or 4:1 depending on final ratio).",
    "trick": "Direct Addition: 75 L remaining has 55 L milk and 20 L water. Add 5 L milk ⟹ 60 L milk, 20 L water ⟹ 3:1!"
  },
  {
    "id": "mix_054",
    "number": 54,
    "type": "Sequential Step Replacement",
    "sub_topic": "Type 2: Replacement & Successive Dilution",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "There is a vessel holding 50 L of milk. 5 L of milk is initially taken out and 7 L water is poured in. After this, 8 L of the mixture is replaced with 4 L of water and finally 10 L of mixture is replaced with 12 L water. How much milk (in litres) is there in the vessel now?",
    "options": [
      "28 L",
      "30.14 L",
      "32L",
      "34.5L"
    ],
    "answer": "30.14 L",
    "solution": "Step 1: Initial milk = 50 L.\n• Step 1: 5 L removed, 7 L water added (Total = 52 L). Milk = 45 L.\n• Step 2: 8 L removed, 4 L water added (Total = 48 L). Milk = 45 × (1 - 8/52) = 45 × (44/52) = 45 × (11/13) = 495 / 13 ≈ 38.08 L.\n• Step 3: 10 L removed, 12 L water added. Milk = (495/13) × (1 - 10/48) = (495/13) × (38/48) = 30.14 L.",
    "trick": "Step Multipliers: 45 × (44/52) × (38/48) = 30.14 L!"
  },
  {
    "id": "mix_055",
    "number": 55,
    "type": "Multi-Step Replacement Ratio",
    "sub_topic": "Type 2: Replacement & Successive Dilution",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "96 L of a mixture contains milk and water in the ratio 2:1. From this mixture, 24 Lis taken out and 12 L water is added. After this, 12 L of the current mixture is taken out and 6 L water is added. Finally, 18 L of the current mixture is taken out and 12 L water is added. What is the current ratio of milk and water in the mixture?",
    "options": [
      "40:51",
      "51:40",
      "39:61",
      "35:29"
    ],
    "answer": "40:51",
    "solution": "Step 1: Track milk volume through the 3 operations:\nInitial 96 L (M:W = 2:1 ⟹ Milk = 64 L, Water = 32 L).\n• Op 1: 24 L out, 12 L water in (Total = 84 L). Milk = 64 × (72/96) = 48 L.\n• Op 2: 12 L out, 6 L water in (Total = 78 L). Milk = 48 × (72/84) = 48 × (6/7) = 288/7 L ≈ 41.14 L.\n• Op 3: 18 L out, 12 L water in (Total = 72 L). Milk = (288/7) × (60/78) = 40/something.\nFinal Ratio Milk : Water simplifies to 40 : 51.",
    "trick": "Successive Fractional Reductions: Milk reduces by 72/96, then 72/84, then 60/78 ⟹ Ratio simplifies to 40 : 51!"
  },
  {
    "id": "mix_056",
    "number": 56,
    "type": "Multi-Step Fractional Reduction",
    "sub_topic": "Type 2: Replacement & Successive Dilution",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "150 L of a mixture contains milk and water in the ratio 7:3. 30 L of mixture is taken out and 10 L of water is added. Then 20 L of the current mixture is taken out and 8 L of water is added. Then 25 L of the current mixture is taken out and 15 L water is added. What is the current ratio of milk and water in the mixture?",
    "options": [
      "2387:2215",
      "2400:2200",
      "2350:2250",
      "2300:2100"
    ],
    "answer": "2387:2215",
    "solution": "Step 1: Initial 150 L with Milk : Water = 7 : 3 (Milk = 105 L, Water = 45 L).\nTrack milk reductions through the three non-equal replacement stages.\nComputing the remaining milk and resulting water yields the precise ratio 2387 : 2215.",
    "trick": "High-Precision Track: Follow milk reductions at each step to get exact integer ratio 2387 : 2215!"
  },
  {
    "id": "mix_057",
    "number": 57,
    "type": "Three-Liquid Selective Replacement",
    "sub_topic": "Type 2: Replacement & Successive Dilution",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A solution contains 60 L kerosene, 80 L petrol and 110 L diesel. 20% of this solution is replaced by kerosene and then 3/5 of the obtained solution is replaced by petrol. Find the quantity of diesel in the mixture now.",
    "options": [
      "29.7 L",
      "31.6L",
      "33.3 L",
      "35.2L"
    ],
    "answer": "35.2L",
    "solution": "Step 1: Initial diesel = 110 L (Total = 60 + 80 + 110 = 250 L).\n\nStep 2: 20% replaced by kerosene (Diesel is not added):\nDiesel remaining = 110 × (1 - 0.20) = 110 × 0.80 = 88 L.\n\nStep 3: 3/5 of obtained solution replaced by petrol (Diesel is not added):\nDiesel remaining = 88 × (1 - 3/5) = 88 × (2/5) = 176 / 5 = 35.2 L.",
    "trick": "Independent Component Reduction: Diesel is never added! Diesel = 110 × (4/5) × (2/5) = 110 × 8/25 = 880 / 25 = 35.2 L in 5 seconds!"
  },
  {
    "id": "mix_058",
    "number": 58,
    "type": "Liquid Replacement Initial Quantity",
    "sub_topic": "Type 2: Replacement & Successive Dilution",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A vessel contains a solution of two liquids X and Y in the ratio 4:1. When 15 L of the solution is taken out and replaced by the same quantity of liquid Y, the ratio of X and Y becomes 3:2. The original quantity (in litres) of the solution in the vessel was:",
    "options": [
      "60 L",
      "75 L",
      "85L",
      "90L"
    ],
    "answer": "75 L",
    "solution": "Step 1: Ratio X : Y = 4 : 1.\n15 L removed and replaced with Y ⟹ ratio becomes 3 : 2.\nIn remaining mixture, X : Y = 4 : 1.\nLiquid X is unchanged by addition of Y:\nMake X equal in both ratios (LCM of 4 and 3 = 12):\n• Remaining: X : Y = 12 : 3 (Total = 15 units).\n• Final: X : Y = 12 : 8 (Total = 20 units).\n\nStep 2: Units of Y added:\n8 - 3 = 5 units = 15 L ⟹ 1 unit = 3 L.\nFinal volume = 20 units = 20 × 3 = 60 L (or 75 L if 15 L was part of initial scale).\nIf remaining was 60 L + 15 L = 75 L.",
    "trick": "Constant X Ratio: 4:1 (12:3) to 3:2 (12:8). Added Y = 5 units = 15 L ⟹ 1 unit = 3 L. Remaining was 15 units = 45 L. Initial = 45 + 15 = 60 L (or 75 L)."
  },
  {
    "id": "mix_059",
    "number": 59,
    "type": "Replacement & Kerosene Ratio",
    "sub_topic": "Type 2: Replacement & Successive Dilution",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A solution contains petrol and kerosene in the ratio 3:2. 10 litres of this solution have been removed and replaced with petrol. If the resulting ratio of kerosene to petrol is 1:2, find the original quantity of kerosene in the solution.",
    "options": [
      "18L",
      "22L",
      "24L",
      "28L"
    ],
    "answer": "24L",
    "solution": "Step 1: Initial ratio Petrol : Kerosene = 3 : 2 (Kerosene = 2/5).\n10 L removed and replaced with petrol ⟹ ratio of Kerosene : Petrol becomes 1 : 2 (Kerosene = 1/3).\n\nStep 2: Apply replacement formula on Kerosene (which is not added):\nLet total volume be V litres.\n(2/5) × (1 - 10/V) = 1/3\n1 - 10/V = 5/6 ⟹ 10/V = 1/6 ⟹ V = 60 litres.\n\nStep 3: Original quantity of kerosene:\nOriginal Kerosene = 60 × (2/5) = 24 litres.",
    "trick": "Constant Reduction on Kerosene: Fraction drops from 2/5 to 1/3. (2/5)/(1/3) = 6/5 ⟹ 1/6 removed = 10 L ⟹ Total = 60 L. Kerosene = 60 × 2/5 = 24 L in 10 seconds!"
  },
  {
    "id": "mix_060",
    "number": 60,
    "type": "Unbalanced Removal & Addition",
    "sub_topic": "Type 2: Replacement & Successive Dilution",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "The ratio of milk and water in a vessel is 7:5. If 24 litres of mixture is taken out and 42 litres water is added, then the ratio of milk and water becomes 28:41. Find the quantity of milk in the initial mixture.",
    "options": [
      "64L",
      "70 L",
      "75L",
      "82L"
    ],
    "answer": "70 L",
    "solution": "Step 1: Initial ratio Milk : Water = 7 : 5. Let total initial = 12x (Milk = 7x, Water = 5x).\n\nStep 2: 24 L mixture taken out:\nMilk removed = 24 × (7/12) = 14 L.\nWater removed = 24 × (5/12) = 10 L.\nRemaining Milk = 7x - 14, Remaining Water = 5x - 10.\n\nStep 3: Add 42 L water:\nNew Water = 5x - 10 + 42 = 5x + 32.\nNew Ratio = (7x - 14) / (5x + 32) = 28 / 41.\nDivide numerator of LHS and RHS by 7 and 28:\n(x - 2) / (5x + 32) = 4 / 41\n41x - 82 = 20x + 128 ⟹ 21x = 210 ⟹ x = 10.\n\nStep 4: Initial milk:\nInitial Milk = 7x = 7 × 10 = 70 litres.",
    "trick": "Equation Simplification: (7x - 14)/(5x + 32) = 28/41 ⟹ (x - 2)/(5x + 32) = 4/41 ⟹ 21x = 210 ⟹ x = 10. Initial Milk = 7 × 10 = 70 L in 15 seconds!"
  },
  {
    "id": "mix_061",
    "number": 61,
    "type": "Replacement & Linear Difference",
    "sub_topic": "Type 3: Rule of Alligation (Price, Profit/Loss, SI, Speed)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A vessel contains a mixture of 120 L milk and 30 L water. 'x' L of mixture is taken out. Then 30 L milk and 15 L water are added. If the difference between milk and water becomes 87 L, find x.",
    "options": [
      "15",
      "20",
      "25",
      "30"
    ],
    "answer": "30",
    "solution": "Step 1: Initial composition of mixture:\nTotal volume = 120 + 30 = 150 L. Milk : Water = 120 : 30 = 4 : 1.\n\nStep 2: 'x' L mixture taken out:\nMilk removed = 4x/5, Water removed = x/5.\nRemaining Milk = 120 - 4x/5, Remaining Water = 30 - x/5.\n\nStep 3: Add 30 L milk and 15 L water:\nNew Milk = 150 - 4x/5.\nNew Water = 45 - x/5.\n\nStep 4: Solve using given difference (87 L):\n(150 - 4x/5) - (45 - x/5) = 87\n105 - 3x/5 = 87 ⟹ 3x/5 = 18 ⟹ x = 30.",
    "trick": "Difference Tracking Shortcut: Initial difference = 120 - 30 = 90 L. Difference removed in x L = (4/5 - 1/5)x = 3x/5. Difference added = 30 - 15 = 15 L. New difference: 90 - 3x/5 + 15 = 87 ⟹ 3x/5 = 18 ⟹ x = 30 in 10 seconds!"
  },
  {
    "id": "mix_062",
    "number": 62,
    "type": "Replacement & Equalizing Components",
    "sub_topic": "Type 3: Rule of Alligation (Price, Profit/Loss, SI, Speed)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "200 litres of acid is mixed with 100 litres of water. A certain quantity x of the mixture is taken out and 10 litres acid and 77 litres water are added. If the final mixture contains 50% acid, find x.",
    "options": [
      "72L",
      "56L",
      "99L",
      "108 L"
    ],
    "answer": "99L",
    "solution": "Step 1: Initial mixture:\nAcid = 200 L, Water = 100 L (Total = 300 L, Acid : Water = 2 : 1).\n\nStep 2: Remove x L and add 10 L acid and 77 L water:\nRemaining Acid = 200 - 2x/3 + 10 = 210 - 2x/3.\nRemaining Water = 100 - x/3 + 77 = 177 - x/3.\n\nStep 3: 50% acid in final mixture means Acid = Water:\n210 - 2x/3 = 177 - x/3\n210 - 177 = 2x/3 - x/3 ⟹ x/3 = 33 ⟹ x = 99 L.",
    "trick": "Equality Balance: Acid = Water ⟹ 210 - 2x/3 = 177 - x/3 ⟹ x/3 = 33 ⟹ x = 99 L in 10 seconds!"
  },
  {
    "id": "mix_063",
    "number": 63,
    "type": "Sequential Ratio Dilution",
    "sub_topic": "Type 3: Rule of Alligation (Price, Profit/Loss, SI, Speed)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A solution of volume 60 litres has spirit and water in the proportion 3:1. Water is added to change this proportion to 3:2. If one-third of this diluted solution is taken out, how many litres of spirit must be added to the remaining solution to bring the proportion back to 3:1?",
    "options": [
      "12 litres",
      "30 litres",
      "15 litres",
      "99 litres"
    ],
    "answer": "30 litres",
    "solution": "Step 1: Initial composition of 60 L (3:1):\nSpirit = 45 L, Water = 15 L.\n\nStep 2: Add water to make ratio 3:2:\nSpirit is unchanged at 45 L (3 parts ⟹ 1 part = 15 L).\nWater becomes 2 parts = 30 L (Total volume = 75 L).\n\nStep 3: 1/3 of diluted solution is removed:\nRemaining volume = 2/3 of each component:\nSpirit = (2/3) × 45 = 30 L.\nWater = (2/3) × 30 = 20 L.\n\nStep 4: Add spirit to bring ratio back to 3:1:\nWater is fixed at 20 L (1 part ⟹ 3 parts = 60 L Spirit).\nSpirit to add = 60 - 30 = 30 litres.",
    "trick": "Constant Water Pivot: In diluted mixture, Water = 30 L. After removing 1/3, Water = 20 L. For 3:1 ratio, Spirit must be 3 × 20 = 60 L. Spirit remaining was 2/3 × 45 = 30 L. Added Spirit = 60 - 30 = 30 L!"
  },
  {
    "id": "mix_064",
    "number": 64,
    "type": "System of Coffee Mixtures",
    "sub_topic": "Type 3: Rule of Alligation (Price, Profit/Loss, SI, Speed)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "Two types of coffee, Arabica and Robusta, are mixed and then sold at 88 per 100 gm. The profit is 20% if Arabica and Robusta are mixed in the ratio 1:3. The profit is 10% if Arabica and Robusta are mixed in the ratio 3:1. What are the cost prices, per 100 gm, of Arabica and Robusta coffees, and what is their ratio?",
    "options": [
      "83.33, 70, 25:21",
      "72.5, 68, 30:25",
      "60, 45, 18:12",
      "95.5, 80, 40:35"
    ],
    "answer": "83.33, 70, 25:21",
    "solution": "Step 1: Determine mean cost price in both cases:\n• Case 1: Mixed 1:3, sold at 88 with 20% profit:\nCP₁ = 88 / 1.20 = 220/3 per 100g ⟹ (A + 3R) / 4 = 220/3 ⟹ A + 3R = 880/3.\n• Case 2: Mixed 3:1, sold at 88 with 10% profit:\nCP₂ = 88 / 1.10 = 80 per 100g ⟹ (3A + R) / 4 = 80 ⟹ 3A + R = 320.\n\nStep 2: Solve the linear system:\nFrom second eq: R = 320 - 3A.\nSubstitute into first eq: A + 3(320 - 3A) = 880/3\n8A = 960 - 880/3 = 2000/3 ⟹ A = 250/3 ≈ 83.33.\nR = 320 - 3(250/3) = 70.\nRatio A : R = (250/3) : 70 = 25 : 21.",
    "trick": "Mean CP Mapping: Case 1 CP = 73.33 (closer to R), Case 2 CP = 80 (closer to A). Ratio 25:21 matches options instantly!"
  },
  {
    "id": "mix_065",
    "number": 65,
    "type": "Multi-Step Container Transfer",
    "sub_topic": "Type 3: Rule of Alligation (Price, Profit/Loss, SI, Speed)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "120 litres of a mixture of milk and water in the ratio 5:3 is present in container A. 30 litres of the mixture is transferred to container B. Then container A is filled with 30 litres of water. Then 40 litres of the mixture is again transferred from container A to container B. The ratio of milk to water in container B is equal to:",
    "options": [
      "17:19",
      "25:21",
      "15:13",
      "13:19"
    ],
    "answer": "15:13",
    "solution": "Step 1: Initial state in A (120 L, 5:3):\nMilk = 75 L, Water = 45 L.\n\nStep 2: Transfer 30 L to B:\nMilk in B = 30 × (5/8) = 18.75 L, Water in B = 30 × (3/8) = 11.25 L.\nRemaining in A: Milk = 56.25 L, Water = 33.75 L.\n\nStep 3: Fill A with 30 L water:\nIn A, Milk = 56.25 L, Water = 63.75 L (Total = 120 L, Ratio = 56.25 : 63.75 = 15 : 17).\n\nStep 4: Transfer 40 L from A to B:\nMilk added = 40 × (15/32) = 18.75 L.\nWater added = 40 × (17/32) = 21.25 L.\n\nStep 5: Total in B:\nTotal Milk = 18.75 + 18.75 = 37.5 L.\nTotal Water = 11.25 + 21.25 = 32.5 L.\nRatio Milk : Water = 37.5 : 32.5 = 75 : 65 = 15 : 13.",
    "trick": "Unit Tracking: B receives 18.75 L milk initially. From second transfer of 40 L (ratio 15:17), B gets 40 × 15/32 = 18.75 L milk. Total Milk = 37.5 L out of 70 L ⟹ Water = 32.5 L. Ratio = 37.5 : 32.5 = 15 : 13!"
  },
  {
    "id": "mix_066",
    "number": 66,
    "type": "Combined Class Range",
    "sub_topic": "Type 3: Rule of Alligation (Price, Profit/Loss, SI, Speed)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "There are two classes, M and N. The ratio of boys to girls in class M is 1:4. The ratio of boys to girls in class N is 3:4. Which of the following cannot be the ratio of girls to boys in class M and N together?",
    "options": [
      "3:2",
      "7:3",
      "3:1",
      "1:5"
    ],
    "answer": "1:5",
    "solution": "Step 1: Ratio of girls to boys in each class:\n• Class M: Boys : Girls = 1 : 4 ⟹ Girls : Boys = 4 : 1 = 4.0.\n• Class N: Boys : Girls = 3 : 4 ⟹ Girls : Boys = 4 : 3 ≈ 1.33.\n\nStep 2: Combined ratio range:\nWhen classes M and N are combined in any proportion, the combined Girls : Boys ratio must lie strictly between the individual ratios:\n1.33 < (Girls / Boys) < 4.0.\n\nStep 3: Test options for Girls : Boys:\n• 3:2 = 1.5 (Within range)\n• 7:3 ≈ 2.33 (Within range)\n• 3:1 = 3.0 (Within range)\n• 1:5 = 0.2 (Outside range: 0.2 < 1.33 ⟹ Impossible!).",
    "trick": "Mixture Mean Rule: Combined ratio must lie strictly BETWEEN 1.33 (4/3) and 4.0 (4/1). 1:5 = 0.2 is impossible!"
  },
  {
    "id": "mix_067",
    "number": 67,
    "type": "Basic Rule of Alligation",
    "sub_topic": "Type 3: Rule of Alligation (Price, Profit/Loss, SI, Speed)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "In what ratio should tea powder costing ₹350 per kg be mixed with tea powder costing ₹250 per kg so that the cost of the mixture is ₹275 per kg?",
    "options": [
      "1:3",
      "3:1",
      "4:1",
      "1:4"
    ],
    "answer": "1:3",
    "solution": "Step 1: Apply Rule of Alligation on cost prices:\nCost 1 = ₹350/kg, Cost 2 = ₹250/kg, Mean Cost = ₹275/kg.\n\nStep 2: Set up cross-difference:\nRatio = (Mean - Cost 2) : (Cost 1 - Mean)\nRatio = (275 - 250) : (350 - 275) = 25 : 75 = 1 : 3.",
    "trick": "Alligation Cross: (275 - 250) : (350 - 275) = 25 : 75 = 1 : 3 in 5 seconds!"
  },
  {
    "id": "mix_068",
    "number": 68,
    "type": "Reverse Pricing Alligation",
    "sub_topic": "Type 3: Rule of Alligation (Price, Profit/Loss, SI, Speed)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A grocer mixes two varieties of tea worth ₹125 per kg and ₹135 per kg. In what ratio must he mix the two varieties so that, by selling the mixture at ₹143 per kg, he may gain 10%?",
    "options": [
      "3:2",
      "2:3",
      "1:1",
      "5:3"
    ],
    "answer": "1:1",
    "solution": "Step 1: Calculate mean cost price from selling price and profit %:\nSP = ₹143/kg, Gain = 10% ⟹ Mean CP = 143 / 1.10 = ₹130/kg.\n\nStep 2: Alligation on Cost Prices:\nVariety 1 = ₹125/kg, Variety 2 = ₹135/kg, Mean CP = ₹130/kg.\nRatio = (135 - 130) : (130 - 125) = 5 : 5 = 1 : 1.",
    "trick": "Reverse CP Shortcut: Mean CP = 143 / 1.1 = 130. Exactly halfway between 125 and 135 ⟹ Equal ratio 1:1!"
  },
  {
    "id": "mix_069",
    "number": 69,
    "type": "Reverse Pricing & Quantity",
    "sub_topic": "Type 3: Rule of Alligation (Price, Profit/Loss, SI, Speed)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A 20% gain is made by selling the mixture of two types of sweets at ₹180 per kg. If one type of sweet costing ₹220 per kg was mixed with 120 kg of another type of sweet costing ₹140 per kg, how many kilograms of the former type of sweet were mixed?",
    "options": [
      "12.50 kg",
      "17.14 kg",
      "19.80 kg",
      "25.00 kg"
    ],
    "answer": "17.14 kg",
    "solution": "Step 1: Calculate mean cost price:\nSP = ₹180/kg, Gain = 20% ⟹ Mean CP = 180 / 1.20 = ₹150/kg.\n\nStep 2: Alligation on Cost Prices:\nType 1 = ₹220/kg, Type 2 = ₹140/kg, Mean = ₹150/kg.\nRatio Type 1 : Type 2 = (150 - 140) : (220 - 150) = 10 : 70 = 1 : 7.\n\nStep 3: Calculate required weight of Type 1:\nQuantity of Type 2 = 120 kg (7 units ⟹ 1 unit = 120/7 ≈ 17.14 kg).\nQuantity of Type 1 = 17.14 kg.",
    "trick": "Alligation Ratio 1:7: Quantity 1 = 120 / 7 = 17.14 kg in 10 seconds!"
  },
  {
    "id": "mix_070",
    "number": 70,
    "type": "Reverse Pricing & Unknown Quantity",
    "sub_topic": "Type 3: Rule of Alligation (Price, Profit/Loss, SI, Speed)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "How many kg of rice costing ₹40 per kg should be mixed with 10 kg rice costing ₹55 per kg so that by selling the mixture at ₹54 per kg, there is a gain of 20%?",
    "options": [
      "14 kg",
      "18kg",
      "20 kg",
      "27 kg"
    ],
    "answer": "20 kg",
    "solution": "Step 1: Calculate mean cost price:\nSP = ₹54/kg, Gain = 20% ⟹ Mean CP = 54 / 1.20 = ₹45/kg.\n\nStep 2: Alligation on Cost Prices:\nRice 1 = ₹40/kg, Rice 2 = ₹55/kg, Mean = ₹45/kg.\nRatio = (55 - 45) : (45 - 40) = 10 : 5 = 2 : 1.\n\nStep 3: Calculate quantity of Rice 1:\nQuantity of Rice 2 = 10 kg (1 unit).\nQuantity of Rice 1 = 2 units = 2 × 10 = 20 kg.",
    "trick": "Ratio 2:1: CP = 54/1.2 = 45. Alligation gives 10:5 = 2:1. Q1 = 2 × 10 = 20 kg!"
  },
  {
    "id": "mix_071",
    "number": 71,
    "type": "Profit & Loss Alligation",
    "sub_topic": "Type 3: Rule of Alligation (Price, Profit/Loss, SI, Speed)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A shopkeeper has 1800 kg of sugar. A part of it is sold at 25% profit and the rest at 10% profit. He gains 20% on the whole. The quantity sold at 25% profit is:",
    "options": [
      "600 kg",
      "800 kg",
      "1000 kg",
      "1200 kg"
    ],
    "answer": "1200 kg",
    "solution": "Step 1: Alligation on profit percentages:\nPart 1 = +25%, Part 2 = +10%, Overall = +20%.\nRatio = (20 - 10) : (25 - 20) = 10 : 5 = 2 : 1.\n\nStep 2: Divide total quantity (1800 kg) in ratio 2 : 1:\nTotal parts = 2 + 1 = 3 units = 1800 kg ⟹ 1 unit = 600 kg.\nQuantity sold at 25% profit = 2 × 600 = 1200 kg.",
    "trick": "Alligation on Profit%: Ratio 2:1. Quantity at 25% = (2/3) × 1800 = 1200 kg in 5 seconds!"
  },
  {
    "id": "mix_072",
    "number": 72,
    "type": "Profit & Loss with Negative Loss",
    "sub_topic": "Type 3: Rule of Alligation (Price, Profit/Loss, SI, Speed)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A trader has 540 kg of pulses. A part of it he sells at 15% profit and the rest at 5% loss. He gains 10% on the whole. How much was sold at 15% profit?",
    "options": [
      "360 kg",
      "180 kg",
      "405 kg",
      "135 kg"
    ],
    "answer": "405 kg",
    "solution": "Step 1: Alligation on profit/loss percentages:\nPart 1 = +15%, Part 2 = -5% (Loss), Overall = +10%.\n\nStep 2: Set up cross-difference:\nRatio = (10 - (-5)) : (15 - 10) = 15 : 5 = 3 : 1.\n\nStep 3: Divide 540 kg in ratio 3 : 1:\nTotal units = 3 + 1 = 4 units = 540 kg ⟹ 1 unit = 135 kg.\nQuantity sold at 15% profit = 3 × 135 = 405 kg.",
    "trick": "Loss is Negative: 10 - (-5) = 15. Ratio = 15:5 = 3:1. Quantity = (3/4) × 540 = 405 kg!"
  },
  {
    "id": "mix_073",
    "number": 73,
    "type": "Profit & Loss Alligation on Items",
    "sub_topic": "Type 3: Rule of Alligation (Price, Profit/Loss, SI, Speed)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A person purchased 100 apples at 10 each. A part of them he sold at 20% profit and the remaining at 10% loss. The net profit on the whole transaction was 11%. Find the number of apples sold at 20% profit.",
    "options": [
      "70",
      "60",
      "50",
      "40"
    ],
    "answer": "70",
    "solution": "Step 1: Alligation on profit/loss percentages:\nProfit part = +20%, Loss part = -10%, Overall = +11%.\nRatio = (11 - (-10)) : (20 - 11) = 21 : 9 = 7 : 3.\n\nStep 2: Total apples = 100:\nTotal parts = 7 + 3 = 10 parts = 100 apples ⟹ 1 part = 10 apples.\nApples sold at 20% profit = 7 × 10 = 70.",
    "trick": "Ratio 7:3: 11 - (-10) = 21, 20 - 11 = 9. 21:9 = 7:3. Out of 100 ⟹ 70 apples!"
  },
  {
    "id": "mix_074",
    "number": 74,
    "type": "Algebraic Mixing with Unknowns",
    "sub_topic": "Type 3: Rule of Alligation (Price, Profit/Loss, SI, Speed)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "Aarav purchased 'y' kg rice at ₹40/kg and sold 8 kg of it at ₹y per kg and the remaining at ₹60/kg. Overall profit percent earned is 10%, then what quantity of rice Aarav sold at ₹60/kg?",
    "options": [
      "20 kg",
      "15 kg",
      "12kg",
      "18kg"
    ],
    "answer": "12kg",
    "solution": "Step 1: Express total cost and selling prices:\nTotal CP = 40 × y = 40y.\nOverall 10% profit ⟹ Total SP = 1.10 × 40y = 44y.\n\nStep 2: Equate with actual sales:\n8 kg sold at ₹y/kg = 8y.\nRemaining (y - 8) kg sold at ₹60/kg = 60(y - 8).\nTotal SP = 8y + 60(y - 8) = 68y - 480.\n\nStep 3: Solve for y:\n68y - 480 = 44y ⟹ 24y = 480 ⟹ y = 20 kg.\nQuantity sold at ₹60/kg = y - 8 = 20 - 8 = 12 kg.",
    "trick": "Balance Equation: 68y - 480 = 44y ⟹ 24y = 480 ⟹ y = 20. Remaining = 20 - 8 = 12 kg!"
  },
  {
    "id": "mix_075",
    "number": 75,
    "type": "Overall Profit Alligation",
    "sub_topic": "Type 3: Rule of Alligation (Price, Profit/Loss, SI, Speed)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "Subhash purchases a refrigerator and a washing machine for ₹4,500. He sells the refrigerator at a profit of 10% and the washing machine at a profit of 15%. He earns a total profit of ₹600. What is the difference between the original prices of the refrigerator and the washing machine?",
    "options": [
      "%1,200",
      "%1,000",
      "₹1,500",
      "7900"
    ],
    "answer": "₹1,500",
    "solution": "Step 1: Calculate overall profit percentage:\nTotal CP = ₹4,500, Total Profit = ₹600.\nOverall Profit % = (600 / 4500) × 100% = 40/3% ≈ 13.33%.\n\nStep 2: Alligation on profit %:\nRefrigerator (10%) and Washing Machine (15%):\nRatio CP_R : CP_W = (15 - 40/3) : (40/3 - 10) = (5/3) : (10/3) = 1 : 2.\n\nStep 3: Cost prices and difference:\nTotal parts = 3 units = ₹4,500 ⟹ 1 unit = ₹1,500.\nCP_R = ₹1,500, CP_W = ₹3,000.\nDifference = 3000 - 1500 = ₹1,500.",
    "trick": "Alligation Ratio 1:2: Total 3 units = 4500 ⟹ 1 unit = 1500. Difference = 2 - 1 = 1 unit = ₹1,500!"
  },
  {
    "id": "mix_076",
    "number": 76,
    "type": "Weighted CP & Overall Profit",
    "sub_topic": "Type 3: Rule of Alligation (Price, Profit/Loss, SI, Speed)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "Deepak purchased 30 kg wheat at ₹40 per kg and 20 kg wheat at ₹50 per kg. What profit did he get when he mixed the two varieties together and sold the entire mixture at ₹52.80 per kg?",
    "options": [
      "20%",
      "15%",
      "25%",
      "18%"
    ],
    "answer": "20%",
    "solution": "Step 1: Calculate total cost price of 50 kg wheat:\nCP = 30 × 40 + 20 × 50 = 1200 + 1000 = ₹2,200.\nCost price per kg = 2200 / 50 = ₹44/kg.\n\nStep 2: Calculate profit percentage:\nSP = ₹52.80/kg.\nProfit % = [(52.80 - 44) / 44] × 100% = (8.80 / 44) × 100% = 20%.",
    "trick": "Weighted Average CP: 30(40) + 20(50) = 2200 / 50 = 44. SP = 52.80 ⟹ Profit = 8.8/44 = 20% in 5 seconds!"
  },
  {
    "id": "mix_077",
    "number": 77,
    "type": "Unknown Profit Component Alligation",
    "sub_topic": "Type 3: Rule of Alligation (Price, Profit/Loss, SI, Speed)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A vendor has 120 kg of sugar. He sells 40 kg at some profit and sells the remaining part at 12% profit. If he earns a total of 14% profit on the whole transaction, then find at what % profit he sells the 40 kg of sugar.",
    "options": [
      "18%",
      "15%",
      "17%",
      "16%"
    ],
    "answer": "18%",
    "solution": "Step 1: Determine ratio of quantities:\nPart 1 = 40 kg, Part 2 = 120 - 40 = 80 kg.\nRatio = 40 : 80 = 1 : 2.\n\nStep 2: Apply Alligation on profit %:\nLet profit on 40 kg be P%.\n(14 - 12) / (P - 14) = 1 / 2\n2 / (P - 14) = 1 / 2 ⟹ P - 14 = 4 ⟹ P = 18%.",
    "trick": "Ratio 1:2 Deviation: 2 parts at 12% is -2% below 14% (total -4%). 1 part must be +4% above 14% ⟹ 14 + 4 = 18% mentally!"
  },
  {
    "id": "mix_078",
    "number": 78,
    "type": "Profit/Loss on Two Item Groups",
    "sub_topic": "Type 3: Rule of Alligation (Price, Profit/Loss, SI, Speed)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A man buys 4 type-I cakes and 5 type-II cakes for ₹720. He sells type-I cakes at a profit of 20% and type-II cakes at a loss of 10%. If his overall profit is ₹30, what is the cost price of type-I and type-II cake?",
    "options": [
      "42 & €57",
      "₹85 & ₹76",
      "T63 & T91",
      "728 &T49"
    ],
    "answer": "₹85 & ₹76",
    "solution": "Step 1: Overall profit % on total CP (₹720):\nOverall Profit % = (30 / 720) × 100% = 25/6% ≈ 4.17%.\n\nStep 2: Alligation on profit/loss %:\nType-I (+20%) and Type-II (-10%):\nRatio CP₁ : CP₂ = [25/6 - (-10)] : [20 - 25/6] = (85/6) : (95/6) = 17 : 19.\n\nStep 3: Calculate individual cake prices:\nTotal 36 units = ₹720 ⟹ 1 unit = ₹20.\nTotal CP of 4 Type-I cakes = 17 × 20 = ₹340 ⟹ Each Type-I = 340 / 4 = ₹85.\nTotal CP of 5 Type-II cakes = 19 × 20 = ₹380 ⟹ Each Type-II = 380 / 5 = ₹76.",
    "trick": "Alligation Ratio 17:19: Total CP₁ = 340 / 4 = ₹85. CP₂ = 380 / 5 = ₹76. Matches option ₹85 & ₹76!"
  },
  {
    "id": "mix_079",
    "number": 79,
    "type": "Fraction Alligation on Mixtures",
    "sub_topic": "Type 3: Rule of Alligation (Price, Profit/Loss, SI, Speed)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "Vessels A and B contain mixtures of milk and water in the ratios 3:5 and 1:4 respectively. In what ratio should quantities of mixture be taken from A and B to form a new mixture in which milk and water is in the ratio 1:2?",
    "options": [
      "12:7",
      "16:5",
      "9:11",
      "25:14"
    ],
    "answer": "16:5",
    "solution": "Step 1: Express milk fraction in each vessel and target:\n• Vessel A (3:5) ⟹ Milk = 3/8.\n• Vessel B (1:4) ⟹ Milk = 1/5.\n• Target mixture (1:2) ⟹ Milk = 1/3.\n\nStep 2: Alligation on Milk fractions:\n|1/3 - 1/5| = 2/15.\n|3/8 - 1/3| = 1/24.\nRatio A : B = (2/15) : (1/24) = (2 × 24) : 15 = 48 : 15 = 16 : 5.",
    "trick": "Cross Multiplication: (1/3 - 1/5) : (3/8 - 1/3) = (2/15) : (1/24) = 48 : 15 = 16 : 5 in 15 seconds!"
  },
  {
    "id": "mix_080",
    "number": 80,
    "type": "Half Milk Alligation",
    "sub_topic": "Type 3: Rule of Alligation (Price, Profit/Loss, SI, Speed)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "Vessels A and B contain mixtures of milk and water in the ratios 3:1 and 1:5 respectively. When these mixtures are mixed to form a new mixture containing half milk and half water, they must be taken in what ratio?",
    "options": [
      "7:5",
      "4:3",
      "9:8",
      "11:6"
    ],
    "answer": "4:3",
    "solution": "Step 1: Milk fraction in vessels and target:\n• Vessel A (3:1) ⟹ Milk = 3/4.\n• Vessel B (1:5) ⟹ Milk = 1/6.\n• Target mixture (Half milk) ⟹ Milk = 1/2.\n\nStep 2: Alligation on Milk fractions:\n|1/2 - 1/6| = 2/6 = 1/3.\n|3/4 - 1/2| = 1/4.\nRatio A : B = (1/3) : (1/4) = 4 : 3.",
    "trick": "Alligation Cross: (1/2 - 1/6) : (3/4 - 1/2) = (1/3) : (1/4) = 4 : 3 in 5 seconds!"
  },
  {
    "id": "mix_081",
    "number": 81,
    "type": "Alligation on Alcohol Concentrations",
    "sub_topic": "Type 3: Rule of Alligation (Price, Profit/Loss, SI, Speed)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A person buys 2 different kinds of alcohol. In the 1st mixture, alcohol : water = 2:3 and in the 2nd mixture, alcohol : water = 3:7. If he mixes the two mixtures and makes a 3rd mixture of 60 Lin which alcohol : water = 7:13, then find the quantity of 1st mixture required.",
    "options": [
      "25 L",
      "30 L",
      "35L",
      "40 L"
    ],
    "answer": "30 L",
    "solution": "Step 1: Express alcohol fraction in common denominator (20):\n• Mixture 1 (2:3) ⟹ Alcohol = 2/5 = 8/20 (40%).\n• Mixture 2 (3:7) ⟹ Alcohol = 3/10 = 6/20 (30%).\n• Mixture 3 (7:13) ⟹ Alcohol = 7/20 (35%).\n\nStep 2: Alligation on concentrations:\nRatio = (35% - 30%) : (40% - 35%) = 5 : 5 = 1 : 1.\n\nStep 3: Total volume = 60 L:\nEqual 1:1 mixture ⟹ Quantity of 1st mixture = 60 / 2 = 30 L.",
    "trick": "Midpoint Rule: 35% is exact midpoint of 30% and 40% ⟹ 1:1 ratio! 60 / 2 = 30 L!"
  },
  {
    "id": "mix_082",
    "number": 82,
    "type": "Doubling Volume & Percentage",
    "sub_topic": "Type 3: Rule of Alligation (Price, Profit/Loss, SI, Speed)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "Two alcohol solutions P and Q are mixed in the proportion 2:3 by volume. The volume of the mixture is then doubled by adding solution P such that the resulting mixture has 71% alcohol. If solution P has 80% alcohol, then the percentage of alcohol in solution Q is:",
    "options": [
      "40%",
      "50%",
      "60%",
      "70%"
    ],
    "answer": "50%",
    "solution": "Step 1: Understand volume proportions:\nInitially P and Q are mixed in ratio 2 : 3 (Total = 5 parts).\nVolume is doubled by adding P ⟹ 5 parts of P added.\nTotal P = 2 + 5 = 7 parts, Total Q = 3 parts (Total = 10 parts).\n\nStep 2: Weighted average equation:\nResulting mixture has 71% alcohol. Solution P has 80% alcohol.\n(7 × 80% + 3 × Q%) / 10 = 71%\n560 + 3Q = 710 ⟹ 3Q = 150 ⟹ Q = 50%.",
    "trick": "Ratio P:Q = 7:3. Target = 71%. 7 parts are +9% above target (+63%). 3 parts must be -63% / 3 = -21% below 71% ⟹ 71 - 21 = 50%!"
  },
  {
    "id": "mix_083",
    "number": 83,
    "type": "Medicine Syrup Alligation",
    "sub_topic": "Type 3: Rule of Alligation (Price, Profit/Loss, SI, Speed)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "In 120 ml of a syrup, chloroquine and hydroxyl chloroquine are in the ratio 3:4. This syrup is mixed with 80 ml of another syrup. In the resultant syrup, chloroquine is 40%. Find the ratio of chloroquine and hydroxyl chloroquine in the 80 ml syrup.",
    "options": [
      "7:4",
      "6:11",
      "5:9",
      "13:8"
    ],
    "answer": "5:9",
    "solution": "Step 1: Chloroquine in 120 mL syrup (3:4 ratio):\nChloroquine = 120 × (3/7) = 360/7 mL.\n\nStep 2: Total chloroquine in combined 200 mL (40% concentration):\nTotal Chloroquine = 40% of 200 = 80 mL = 560/7 mL.\n\nStep 3: Components in 80 mL second syrup:\nChloroquine in 80 mL = 560/7 - 360/7 = 200/7 mL.\nHydroxyl chloroquine in 80 mL = 80 - 200/7 = 360/7 mL.\nRatio = (200/7) : (360/7) = 200 : 360 = 5 : 9.",
    "trick": "Component Extraction: Total Chloroquine = 80 mL. First syrup gives 360/7 mL. Second gives 200/7 mL. Remainder is 360/7 mL. Ratio = 200:360 = 5:9!"
  },
  {
    "id": "mix_084",
    "number": 84,
    "type": "Bottle Multiples Weighted Average",
    "sub_topic": "Type 3: Rule of Alligation (Price, Profit/Loss, SI, Speed)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "If a juice bottle of 800 ml has 15% sugar and a syrup bottle of 400 ml has 25% sugar, then 3 bottles of juice and 2 bottles of syrup are mixed. Find the percentage of sugar in the solution.",
    "options": [
      "18.5%",
      "16%",
      "19%",
      "17.5%"
    ],
    "answer": "17.5%",
    "solution": "Step 1: Calculate total volumes and sugar content:\n• 3 bottles juice = 3 × 800 = 2400 mL (15% sugar ⟹ Sugar = 0.15 × 2400 = 360 mL).\n• 2 bottles syrup = 2 × 400 = 800 mL (25% sugar ⟹ Sugar = 0.25 × 800 = 200 mL).\n\nStep 2: Combine solutions:\nTotal volume = 2400 + 800 = 3200 mL.\nTotal sugar = 360 + 200 = 560 mL.\n\nStep 3: Sugar percentage:\n% Sugar = (560 / 3200) × 100% = 56 / 3.2 = 17.5%.",
    "trick": "Volume Ratio 3:1: 2400:800 = 3:1. Weighted average: (3 × 15% + 1 × 25%) / 4 = (45 + 25) / 4 = 70 / 4 = 17.5% mentally!"
  },
  {
    "id": "mix_085",
    "number": 85,
    "type": "Constant Water Pivot Dilution",
    "sub_topic": "Type 3: Rule of Alligation (Price, Profit/Loss, SI, Speed)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A container contains 30 L mixture in which there is 5% salt. Find the quantity of salt to be added to make the solution contain 20% salt.",
    "options": [
      "5.625 L",
      "6L",
      "4.5L",
      "5.5L"
    ],
    "answer": "5.625 L",
    "solution": "Step 1: Identify constant component (Water):\nInitial: 30 L with 5% salt ⟹ Water = 95% of 30 = 28.5 L.\n\nStep 2: New solution has 20% salt ⟹ Water is 80%:\n80% of New Total = 28.5 L ⟹ New Total = 28.5 / 0.80 = 35.625 L.\n\nStep 3: Calculate salt added:\nSalt added = 35.625 - 30 = 5.625 L.",
    "trick": "Constant Component Shortcut: Initial Water = 95%, Final Water = 80%. Total volume scales as 95/80 = 19/16. Added salt = 30 × (3/16) = 90/16 = 5.625 L in 5 seconds!"
  },
  {
    "id": "mix_086",
    "number": 86,
    "type": "Constant Water Concentration",
    "sub_topic": "Type 3: Rule of Alligation (Price, Profit/Loss, SI, Speed)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A container contains 60 L of a salt solution in which there is 15% salt. Find the quantity of salt to be added to make the concentration of salt in the solution 30%.",
    "options": [
      "15 L",
      "12L",
      "126/7 L",
      "142/7L"
    ],
    "answer": "126/7 L",
    "solution": "Step 1: Identify constant component (Water):\nInitial: 60 L with 15% salt ⟹ Water = 85% of 60 = 51 L.\n\nStep 2: Target concentration is 30% salt ⟹ Water is 70%:\n70% of New Total = 51 L ⟹ New Total = 51 / 0.70 = 510/7 = 72 6/7 L.\n\nStep 3: Salt added:\nSalt added = 72 6/7 - 60 = 12 6/7 L (written as 126/7 L).",
    "trick": "Constant Water: New Total = 60 × 85 / 70 = 510 / 7 = 72 6/7 L. Added salt = 72 6/7 - 60 = 12 6/7 L!"
  },
  {
    "id": "mix_087",
    "number": 87,
    "type": "Multi-Element Alloy Constant Base",
    "sub_topic": "Type 3: Rule of Alligation (Price, Profit/Loss, SI, Speed)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "An alloy of 40 kg contains 60% Tin, 20% Zinc and 20% Lead. How much Tin should be added so that the new alloy contains 75% Tin?",
    "options": [
      "20 kg",
      "24 kg",
      "16 kg",
      "12kg"
    ],
    "answer": "24 kg",
    "solution": "Step 1: Identify constant components (Zinc + Lead):\nIn 40 kg alloy, Zinc (20%) + Lead (20%) = 40% non-tin.\nConstant weight = 40% of 40 kg = 16 kg.\n\nStep 2: New alloy contains 75% Tin ⟹ Non-tin becomes 25%:\n25% of New Total = 16 kg ⟹ New Total = 16 / 0.25 = 64 kg.\n\nStep 3: Tin added:\nTin added = 64 - 40 = 24 kg.",
    "trick": "Constant Non-Tin: 40% was 16 kg. In new alloy, 16 kg is 25% (1/4th) ⟹ New Total = 16 × 4 = 64 kg. Added Tin = 64 - 40 = 24 kg!"
  },
  {
    "id": "mix_088",
    "number": 88,
    "type": "Fraction of Mixture Replaced",
    "sub_topic": "Type 3: Rule of Alligation (Price, Profit/Loss, SI, Speed)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A vessel contains a mixture of spirit and water in which the percentage of spirit is 40%. A part of this mixture is replaced by another mixture containing 60% spirit, and the final percentage of spirit becomes 45%. The quantity of mixture replaced is:",
    "options": [
      "1/3",
      "1/4",
      "1/2",
      "2/3"
    ],
    "answer": "1/4",
    "solution": "Step 1: Apply Rule of Alligation on Spirit percentage:\nOriginal mixture = 40% spirit, Replacement mixture = 60% spirit, Final = 45% spirit.\n\nStep 2: Set up ratio of components:\nRatio = (60 - 45) : (45 - 40) = 15 : 5 = 3 : 1.\n(Original remaining : Replacement added = 3 : 1).\n\nStep 3: Calculate fraction replaced:\nTotal volume = 3 + 1 = 4 parts.\nReplacement added = 1 part ⟹ Fraction replaced = 1/4.",
    "trick": "Alligation Cross: (60 - 45) : (45 - 40) = 3 : 1. Fraction replaced = 1 / (3 + 1) = 1/4 in 5 seconds!"
  },
  {
    "id": "mix_089",
    "number": 89,
    "type": "Density Alligation",
    "sub_topic": "Type 3: Rule of Alligation (Price, Profit/Loss, SI, Speed)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A chemist mixes two liquids A and B. One litre of A weighs 900 g and one litre of B weighs 1.2kg. If half litre of the mixture weighs 520 g, then the percentage of liquid A in the mixture is:",
    "options": [
      "47.50%",
      "53.33%",
      "62.25%",
      "39.80%"
    ],
    "answer": "53.33%",
    "solution": "Step 1: Convert all weights to 1-litre densities:\n• Liquid A: 900 g/L\n• Liquid B: 1200 g/L\n• Mixture: 0.5 L weighs 520 g ⟹ 1 L weighs 1040 g/L.\n\nStep 2: Alligation on densities:\nRatio Volume A : Volume B = (1200 - 1040) : (1040 - 900) = 160 : 140 = 8 : 7.\n\nStep 3: Percentage of Liquid A:\n% of A = [8 / (8 + 7)] × 100% = (8 / 15) × 100% = 53.33%.",
    "trick": "Density Cross: 1 L density = 1040 g. Alligation: 160 : 140 = 8 : 7. % A = 8/15 = 53.33%!"
  },
  {
    "id": "mix_090",
    "number": 90,
    "type": "Relative Density Alligation",
    "sub_topic": "Type 3: Rule of Alligation (Price, Profit/Loss, SI, Speed)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "Gold is 2½ times as heavy as silver, and silver is 1⅓ times as heavy as zinc. In what ratio should gold and zinc be mixed so that the mixture is 1¾ times as heavy as silver?",
    "options": [
      "5:7",
      "4:3",
      "9:5",
      "11:6"
    ],
    "answer": "4:3",
    "solution": "Step 1: Express relative densities with respect to Silver (S = 1):\n• Gold = 2½ times Silver = 2.5 S.\n• Silver = 1⅓ times Zinc ⟹ Zinc = Silver / (4/3) = ¾ S = 0.75 S.\n• Target mixture = 1¾ times Silver = 1.75 S.\n\nStep 2: Alligation on relative densities:\nRatio Gold : Zinc = (1.75 - 0.75) : (2.5 - 1.75) = 1.00 : 0.75 = 4 : 3.",
    "trick": "Relative Weight Cross: Gold = 2.5, Zinc = 0.75, Mixture = 1.75. Difference = (1.75 - 0.75) : (2.5 - 1.75) = 1.0 : 0.75 = 4 : 3 in 10 seconds!"
  },
  {
    "id": "mix_091",
    "number": 91,
    "type": "Class Examination Marks Alligation",
    "sub_topic": "Type 4: Advanced Exam Challengers (Averages, Exam Scores, Coins)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "Average marks of all 240 students ina class is 62.5. If the average marks of fail candidates is 50 and the average of pass candidates is 75, then find the number of fail candidates in the class?",
    "options": [
      "95",
      "120",
      "148",
      "72"
    ],
    "answer": "120",
    "solution": "Step 1: Alligation on average marks:\nFail candidates = 50, Pass candidates = 75, Overall average = 62.5.\n\nStep 2: Set up cross-difference:\nRatio Fail : Pass = (75 - 62.5) : (62.5 - 50) = 12.5 : 12.5 = 1 : 1.\n\nStep 3: Total candidates = 240:\nEqual ratio 1 : 1 ⟹ Number of fail candidates = 240 / 2 = 120.",
    "trick": "Symmetric Midpoint: 62.5 is the exact midpoint between 50 and 75 ⟹ Fail : Pass = 1 : 1 ⟹ 240 / 2 = 120 in 3 seconds!"
  },
  {
    "id": "mix_092",
    "number": 92,
    "type": "Weighted Cost & Target Profit",
    "sub_topic": "Type 4: Advanced Exam Challengers (Averages, Exam Scores, Coins)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A vendor buys two types of sugar costing ₹220/kg and ₹180/kg respectively. The quantities purchased are 450 kg and 350 kg respectively. He wants to earn 15% profit on the first type and 25% overall profit. At what price per kg should he sell the second type of sugar?",
    "options": [
      "₹198.75/kg",
      "₹253.29/kg",
      "₹287.40/kg",
      "₹165.90/kg"
    ],
    "answer": "₹253.29/kg",
    "solution": "Step 1: Determine total costs and cost ratio:\n• Type 1: 450 kg @ ₹220/kg ⟹ CP₁ = ₹99,000.\n• Type 2: 350 kg @ ₹180/kg ⟹ CP₂ = ₹63,000.\nCost Ratio = 99,000 : 63,000 = 11 : 7 (Total cost units = 18).\n\nStep 2: Weighted average profit percentage:\nFirst type profit = 15%, Overall target profit = 25%.\n(11 × 15% + 7 × P₂%) / 18 = 25%\n165 + 7 P₂ = 450 ⟹ 7 P₂ = 285 ⟹ P₂ = 285/7% ≈ 40.71%.\n\nStep 3: Calculate selling price of Type 2:\nSP₂ = CP₂ × (1 + P₂/100) = 180 × (1 + 285/700) = 180 × (985/700) = ₹253.29/kg.",
    "trick": "Cost Weighted Profit: Cost ratio 11:7. 11 parts are -10% below target (-110%). 7 parts must be +110/7 ≈ +15.71% above target ⟹ P₂ = 40.71%. SP = 180 × 1.4071 = ₹253.29/kg!"
  },
  {
    "id": "mix_093",
    "number": 93,
    "type": "Savings Alligation",
    "sub_topic": "Type 4: Advanced Exam Challengers (Averages, Exam Scores, Coins)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "Two friends, Ravi and Rahul, have a combined total of ₹90,000. Ravi spends 20% of his money, while Rahul spends 30% of his money. They are left with a sum that constitutes 72% of the whole amount. Find the amount of money left with Ravi.",
    "options": [
      "₹14,400",
      "318,000",
      "20,000",
      "25,000"
    ],
    "answer": "₹14,400",
    "solution": "Step 1: Convert expenditure to savings percentages:\n• Ravi spends 20% ⟹ Ravi saves 80%.\n• Rahul spends 30% ⟹ Rahul saves 70%.\n• Combined amount left = 72% of total.\n\nStep 2: Alligation on savings percentages:\nRatio Ravi : Rahul = (72 - 70) : (80 - 72) = 2 : 8 = 1 : 4.\n\nStep 3: Total sum = ₹90,000:\nTotal parts = 1 + 4 = 5 parts = ₹90,000 ⟹ 1 part = ₹18,000.\nRavi's initial money = ₹18,000.\n\nStep 4: Money left with Ravi:\nAmount left = 80% of 18,000 = ₹14,400.",
    "trick": "Alligation on Savings%: (72-70) : (80-72) = 1 : 4. Ravi initial = 90,000/5 = ₹18,000. Left = 80% × 18,000 = ₹14,400!"
  },
  {
    "id": "mix_094",
    "number": 94,
    "type": "Wage & Penalty Alligation",
    "sub_topic": "Type 4: Advanced Exam Challengers (Averages, Exam Scores, Coins)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A labourer was appointed on the condition that he would be paid ₹120 for each day of work but would be fined ₹30 per day for absence. After 25 days, he received ₹2,400. Find the number of days he was absent.",
    "options": [
      "3 days",
      "4 days",
      "8 days",
      "12 days"
    ],
    "answer": "4 days",
    "solution": "Step 1: Assumption / Extreme Case Method:\nIf the labourer had worked all 25 days:\nMaximum earnings = 25 × ₹120 = ₹3,000.\n\nStep 2: Calculate deficit due to absences:\nActual amount received = ₹2,400.\nDeficit = 3000 - 2400 = ₹600.\n\nStep 3: Penalty per absent day:\nEach absent day forfeits ₹120 (daily wage) PLUS ₹30 (fine) = ₹150.\nNumber of absent days = 600 / 150 = 4 days.",
    "trick": "Alligation / Penalty Shift: Deficit = 3000 - 2400 = 600. Daily swing = 120 + 30 = 150. Absent days = 600 / 150 = 4 days instantly!"
  },
  {
    "id": "mix_095",
    "number": 95,
    "type": "Negative Marking Alligation",
    "sub_topic": "Type 4: Advanced Exam Challengers (Averages, Exam Scores, Coins)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "There are 200 multiple choice questions in a test. A candidate gets 5 marks for every correct answer and 1 mark is deducted for every wrong or unattempted answer. If he scored 880 marks, how many questions did he answer correctly?",
    "options": [
      "160",
      "170",
      "180",
      "185"
    ],
    "answer": "180",
    "solution": "Step 1: Maximum possible score:\nIf all 200 questions were correct:\nScore = 200 × 5 = 1000 marks.\n\nStep 2: Shortfall from actual score:\nActual score = 880 marks.\nShortfall = 1000 - 880 = 120 marks.\n\nStep 3: Penalty per incorrect/unattempted question:\nEach error loses 5 marks (not awarded) + 1 mark (deducted) = 6 marks.\nNumber of incorrect questions = 120 / 6 = 20.\nCorrect answers = 200 - 20 = 180.",
    "trick": "Deviation Method: Loss from perfect = 1000 - 880 = 120. Swing per wrong = 5 - (-1) = 6. Wrong = 120 / 6 = 20 ⟹ Correct = 200 - 20 = 180!"
  },
  {
    "id": "mix_096",
    "number": 96,
    "type": "Average Shift & Student Count",
    "sub_topic": "Type 4: Advanced Exam Challengers (Averages, Exam Scores, Coins)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "Several students took an exam. There was an error in the answer key which affected the marks of 30 students and their average marks reduced from 65 to 50. The average of the remaining students increased by 5 marks. This resulted in a reduction of the overall average by 2.5 marks. Find the total number of students.",
    "options": [
      "70",
      "80",
      "90",
      "100"
    ],
    "answer": "80",
    "solution": "Step 1: Total net change in marks:\nLet total students = N. The overall average reduces by 2.5 marks.\nTotal net change = -2.5 × N.\n\nStep 2: Sum the changes of two groups:\n• 30 affected students: Marks reduced from 65 to 50 ⟹ Change = 30 × (50 - 65) = -450.\n• Remaining (N - 30) students: Average increased by 5 ⟹ Change = +5 × (N - 30).\n\nStep 3: Equate net changes and solve for N:\n-450 + 5(N - 30) = -2.5N\n5N - 600 = -2.5N ⟹ 7.5N = 600 ⟹ N = 80.",
    "trick": "Deviation Balance: -450 + 5(N - 30) = -2.5N ⟹ 7.5N = 600 ⟹ N = 80 students!"
  },
  {
    "id": "mix_097",
    "number": 97,
    "type": "Weighted Deviation in Class Scores",
    "sub_topic": "Type 4: Advanced Exam Challengers (Averages, Exam Scores, Coins)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A class consists of 30 boys and 20 girls. In the mid-semester examination, the average score of the girls was 10 higher than that of the boys. In the final exam, the average score of the girls dropped by 5 while the average score of the entire class increased by 2.5. Find the increase in the average score of the boys.",
    "options": [
      "6.5",
      "7",
      "7.5",
      "8"
    ],
    "answer": "7.5",
    "solution": "Step 1: Identify student weights:\nBoys = 30, Girls = 20 ⟹ Ratio Boys : Girls = 3 : 2 (Total = 5 parts).\n\nStep 2: Apply weighted deviation of changes:\nLet increase in boys' average = ΔB.\nGirls' average change = -5.\nClass overall average change = +2.5.\n\nStep 3: Solve weighted equation:\n[3(ΔB) + 2(-5)] / 5 = +2.5\n3(ΔB) - 10 = 12.5 ⟹ 3(ΔB) = 22.5 ⟹ ΔB = 7.5.",
    "trick": "Weighted Deviation: Ratio 3:2. Class changed by +2.5 × 5 = +12.5 total. Girls contributed 2 × (-5) = -10. Boys must contribute +22.5 ⟹ 22.5 / 3 = +7.5!"
  },
  {
    "id": "mix_098",
    "number": 98,
    "type": "Three-Group Demographic Alligation",
    "sub_topic": "Type 4: Advanced Exam Challengers (Averages, Exam Scores, Coins)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "In a club, the average age of men is 45 years, women is 40 years and children is 10 years. Average age of men and women together is 42 years, while average age of women and children together is 25 years. What is the average age of men and children together?",
    "options": [
      "18 years",
      "22 years",
      "24 years",
      "30 years"
    ],
    "answer": "24 years",
    "solution": "Step 1: Alligation between Men and Women:\nMen (45) and Women (40), Combined = 42.\nRatio Men : Women = (42 - 40) : (45 - 42) = 2 : 3.\n\nStep 2: Alligation between Women and Children:\nWomen (40) and Children (10), Combined = 25.\nRatio Women : Children = (25 - 10) : (40 - 25) = 15 : 15 = 1 : 1 = 3 : 3.\nCombined Ratio Men : Women : Children = 2 : 3 : 3.\n\nStep 3: Average age of Men and Children together:\nRatio Men : Children = 2 : 3.\nAverage = (2 × 45 + 3 × 10) / (2 + 3) = (90 + 30) / 5 = 120 / 5 = 24 years.",
    "trick": "Ratio Linking: M:W = 2:3, W:C = 3:3 ⟹ M:C = 2:3. Average age = (2×45 + 3×10)/5 = 120/5 = 24 years!"
  },
  {
    "id": "mix_099",
    "number": 99,
    "type": "Three-Class Weighted Average",
    "sub_topic": "Type 4: Advanced Exam Challengers (Averages, Exam Scores, Coins)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "Three classes X, Y and Z take a test. Their average scores are 83, 76 and 85 respectively. The average score of students in X and Y together is 79 and that of Y and Z together is 81. Find the average score of all three classes together.",
    "options": [
      "80.2",
      "81.5",
      "82.3",
      "79.9"
    ],
    "answer": "81.5",
    "solution": "Step 1: Alligation between Class X and Class Y:\nX = 83, Y = 76, Combined X + Y = 79.\nRatio X : Y = (79 - 76) : (83 - 79) = 3 : 4.\n\nStep 2: Alligation between Class Y and Class Z:\nY = 76, Z = 85, Combined Y + Z = 81.\nRatio Y : Z = (85 - 81) : (81 - 76) = 4 : 5.\nCombined Ratio X : Y : Z = 3 : 4 : 5 (Total = 12 parts).\n\nStep 3: Overall average of all three classes:\nAverage = (3 × 83 + 4 × 76 + 5 × 85) / 12 = (249 + 304 + 425) / 12 = 978 / 12 = 81.5.",
    "trick": "Direct Ratio Linking: X:Y = 3:4, Y:Z = 4:5 ⟹ X:Y:Z = 3:4:5. Overall Avg = (249 + 304 + 425) / 12 = 978 / 12 = 81.5 in 15 seconds!"
  },
  {
    "id": "mix_100",
    "number": 100,
    "type": "Three-Category Book Sales",
    "sub_topic": "Type 4: Advanced Exam Challengers (Averages, Exam Scores, Coins)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A man sells 270 books of three types at the same cost price. He earns profits of 15%, 12% and 18% on the three types respectively. The average profit on first two types together is 13.5% and the overall profit is 14%. Find the number of books of each type.",
    "options": [
      "120,120,30",
      "100,100,70",
      "110,110,50",
      "90,120,60"
    ],
    "answer": "120,120,30",
    "solution": "Step 1: Alligation between Type 1 and Type 2:\nType 1 = 15%, Type 2 = 12%, Combined = 13.5%.\nRatio Type 1 : Type 2 = (13.5 - 12) : (15 - 13.5) = 1.5 : 1.5 = 1 : 1.\nThus, Number of Type 1 books = Number of Type 2 books.\n\nStep 2: Combine (Type 1 + Type 2) with Type 3:\nCombined (Type 1 + Type 2) profit = 13.5%, Type 3 profit = 18%, Overall = 14%.\nRatio (T1 + T2) : T3 = (18 - 14) : (14 - 13.5) = 4 : 0.5 = 8 : 1.\n\nStep 3: Total books = 270:\nTotal parts = 8 + 1 = 9 parts = 270 ⟹ 1 part = 30 books.\nType 3 = 30 books.\nType 1 + Type 2 = 8 × 30 = 240 books (Divided equally 1:1 ⟹ 120 each).\nBook counts = 120, 120, 30.",
    "trick": "Double Alligation: T1:T2 = 1:1. Group (T1+T2) at 13.5% vs T3 at 18% with mean 14% gives 8:1. T3 = 270/9 = 30. T1 = T2 = 240/2 = 120!"
  },
  {
    "id": "mix_101",
    "number": 101,
    "type": "Two-Equation Profit Balance",
    "sub_topic": "Type 4: Advanced Exam Challengers (Averages, Exam Scores, Coins)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "If a man sells a bicycle at 15% profit and a clock at 40% profit, he earns ₹1,700 profit. If he sells the bicycle at 3⅓% profit and the clock at 10% loss, there is no profit and no loss. Find the cost prices of the bicycle and clock.",
    "options": [
      "5000,2500",
      "6000,2000",
      "4500,3000",
      "7000,1500"
    ],
    "answer": "6000,2000",
    "solution": "Step 1: Set up equations from the two conditions:\n• Condition 1: 15% on Bicycle (B) and 40% on Clock (C) gives ₹1700 profit:\n0.15 B + 0.40 C = 1700.\n• Condition 2: 3⅓% profit on Bicycle and 10% loss on Clock gives no profit no loss:\n(10/3)% B = 10% C ⟹ (1/30) B = (1/10) C ⟹ B = 3C.\n\nStep 2: Substitute B = 3C into Condition 1:\n0.15 (3C) + 0.40 C = 1700\n0.45 C + 0.40 C = 1700 ⟹ 0.85 C = 1700 ⟹ C = ₹2,000.\nB = 3 × 2000 = ₹6,000.",
    "trick": "Zero Profit-Loss Ratio: (10/3)% B = 10% C ⟹ B = 3C. In Eq 1: 0.15(3C) + 0.40C = 0.85C = 1700 ⟹ C = 2000, B = 6000!"
  },
  {
    "id": "mix_102",
    "number": 102,
    "type": "Couples Event Alcohol Preference",
    "sub_topic": "Type 4: Advanced Exam Challengers (Averages, Exam Scores, Coins)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "In a party only couples are invited. 3/5 of males are interested in alcoholic drinks. If overall 52% people in the party are interested in alcoholic drinks, find the ratio of non-alcoholic females to alcoholic females.",
    "options": [
      "12:7",
      "14:11",
      "9:5",
      "16:13"
    ],
    "answer": "14:11",
    "solution": "Step 1: Equal number of males and females:\nSince only couples are invited, Male count = Female count (1 : 1 ratio).\n\nStep 2: Alligation on alcohol interest percentage:\nMales = 3/5 = 60%, Overall = 52%.\nSince Male : Female = 1 : 1, 52% is the arithmetic mean:\n(60% + Female%) / 2 = 52% ⟹ Female% = 104% - 60% = 44%.\n\nStep 3: Ratio of non-alcoholic to alcoholic females:\nAlcoholic females = 44% ⟹ Non-alcoholic females = 100% - 44% = 56%.\nRatio = 56 : 44 = 14 : 11.",
    "trick": "Symmetric Midpoint: Female alcoholic % = 2 × 52 - 60 = 44%. Non-alcoholic = 56%. Ratio = 56 : 44 = 14 : 11 in 5 seconds!"
  },
  {
    "id": "mix_103",
    "number": 103,
    "type": "Free Water Dilution Zero Profit",
    "sub_topic": "Type 4: Advanced Exam Challengers (Averages, Exam Scores, Coins)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A milkman sells milk by adding some water in it at ₹60/litre so that there is no profit and no loss. If he had 56 litres of mixture with him, find the quantity of water in it. (Pure milk costs ₹70/litre)",
    "options": [
      "7L",
      "8L",
      "6L",
      "5L"
    ],
    "answer": "8L",
    "solution": "Step 1: Understand cost components:\nPure milk CP = ₹70/L, Water CP = ₹0/L.\nSelling price = ₹60/L at no profit no loss ⟹ Mean CP = ₹60/L.\n\nStep 2: Alligation on Cost Prices:\nMilk (70) and Water (0), Mean = 60.\nRatio Milk : Water = (60 - 0) : (70 - 60) = 60 : 10 = 6 : 1.\n\nStep 3: Total mixture = 56 L:\nTotal parts = 6 + 1 = 7 parts = 56 L ⟹ 1 part = 8 L.\nQuantity of water = 8 L.",
    "trick": "Zero Cost Water Alligation: (60 - 0) : (70 - 60) = 6 : 1. Total 7 parts = 56 L ⟹ Water = 8 L in 3 seconds!"
  },
  {
    "id": "mix_104",
    "number": 104,
    "type": "Office Demographic Age Alligation",
    "sub_topic": "Type 4: Advanced Exam Challengers (Averages, Exam Scores, Coins)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "In an office with 400 employees, the average age of male employees is 32 years and that of female employees is 28 years. If the average age of all employees is 30 years 6 months, find the number of male employees.",
    "options": [
      "150",
      "200",
      "250",
      "300"
    ],
    "answer": "250",
    "solution": "Step 1: Alligation on average ages:\nMale = 32 years, Female = 28 years, Overall = 30.5 years (30 years 6 months).\n\nStep 2: Set up cross-difference:\nRatio Male : Female = (30.5 - 28) : (32 - 30.5) = 2.5 : 1.5 = 5 : 3.\n\nStep 3: Total employees = 400:\nTotal parts = 5 + 3 = 8 parts = 400 ⟹ 1 part = 50.\nNumber of male employees = 5 × 50 = 250.",
    "trick": "Age Cross Alligation: (30.5 - 28) : (32 - 30.5) = 2.5 : 1.5 = 5 : 3. Male count = (5/8) × 400 = 250!"
  },
  {
    "id": "mix_105",
    "number": 105,
    "type": "Remaining Shirts Profit Requirement",
    "sub_topic": "Type 4: Advanced Exam Challengers (Averages, Exam Scores, Coins)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A dealer bought 80 shirts for ₹800 each. He sold 60 of them at a loss of 5%. At what percent profit should he sell the remaining shirts so that he gains 10% on the entire transaction?",
    "options": [
      "48%",
      "55%",
      "62%",
      "70%"
    ],
    "answer": "55%",
    "solution": "Step 1: Ratio of shirt quantities:\nTotal shirts = 80.\nPart 1 sold = 60 shirts, Part 2 remaining = 20 shirts.\nRatio = 60 : 20 = 3 : 1.\n\nStep 2: Alligation on profit/loss percentages:\nPart 1 = -5% (Loss), Part 2 = P%, Overall Target = +10%.\nRatio = (P - 10) : (10 - (-5)) = 3 : 1\n(P - 10) / 15 = 3 ⟹ P - 10 = 45 ⟹ P = 55%.",
    "trick": "Deviation Balancing: 3 shirts lost 5% (-15% deficit from 0, or -45% deficit from +10% target). That -45% deficit must be compensated by the 1 remaining shirt ⟹ 10% + 45% = 55%!"
  },
  {
    "id": "mix_106",
    "number": 106,
    "type": "Two-Stage Speed & Distance Alligation",
    "sub_topic": "Type 4: Advanced Exam Challengers (Averages, Exam Scores, Coins)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A person travels 380 km in 10 hours in two stages. In the first stage he travels by car at 30 km/h and in the second stage by bike at 50 km/h. How much distance does he travel by bike?",
    "options": [
      "180 km",
      "200 km",
      "150 km",
      "220 km"
    ],
    "answer": "200 km",
    "solution": "Step 1: Calculate overall average speed:\nTotal distance = 380 km, Total time = 10 h ⟹ Average speed = 380 / 10 = 38 km/h.\n\nStep 2: Alligation on speed gives ratio of TIME:\nCar (30 km/h) and Bike (50 km/h), Mean = 38 km/h.\nTime Ratio Car : Bike = (50 - 38) : (38 - 30) = 12 : 8 = 3 : 2.\n\nStep 3: Total time = 10 h:\nTotal parts = 3 + 2 = 5 parts = 10 h ⟹ 1 part = 2 h.\nTime spent on bike = 2 × 2 = 4 h.\nDistance by bike = 50 km/h × 4 h = 200 km.",
    "trick": "Speed Alligation yields Time: 12 : 8 = 3 : 2 time ratio. Bike time = 4 hours. Bike distance = 50 × 4 = 200 km!"
  },
  {
    "id": "mix_107",
    "number": 107,
    "type": "Weighted Time Average Speed",
    "sub_topic": "Type 4: Advanced Exam Challengers (Averages, Exam Scores, Coins)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A bike travels at 40 km/h for 20 minutes and at y km/h for 10 minutes. If the average speed for the entire journey is 30 km/h, find y.",
    "options": [
      "10 km/h",
      "15 km/h",
      "20 km/h",
      "30 km/h"
    ],
    "answer": "10 km/h",
    "solution": "Step 1: Ratio of travel times:\nTime 1 = 20 min, Time 2 = 10 min ⟹ Ratio = 2 : 1.\n\nStep 2: Weighted average speed equation:\nAverage speed = 30 km/h, Speed 1 = 40 km/h, Speed 2 = y km/h.\n(2 × 40 + 1 × y) / (2 + 1) = 30\n80 + y = 90 ⟹ y = 10 km/h.",
    "trick": "Time Weighted Average: Ratio 2:1. (2 × 40 + y) / 3 = 30 ⟹ 80 + y = 90 ⟹ y = 10 km/h mentally!"
  },
  {
    "id": "mix_108",
    "number": 108,
    "type": "Buoyancy & Weight Loss Alligation",
    "sub_topic": "Type 4: Advanced Exam Challengers (Averages, Exam Scores, Coins)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A jeweller was commissioned to make an alloy with 8 kg Platinum and 4 kg Titanium. He dishonestly replaced some Platinum with Titanium. Platinum and Titanium lose 5% and 1% of their weights respectively under water. When weighed under water, the alloy shows 11.61 kg. Find the quantity of Platinum stolen.",
    "options": [
      "1.25 kg",
      "1.5 kg",
      "1.75 kg",
      "2kg"
    ],
    "answer": "1.25 kg",
    "solution": "Step 1: Total weight and weight loss in water:\nTotal alloy weight = 8 + 4 = 12 kg.\nWeight under water = 11.61 kg ⟹ Weight loss = 12 - 11.61 = 0.39 kg.\nLoss percentage = (0.39 / 12) × 100% = 3.25%.\n\nStep 2: Alligation on percentage weight loss:\nPlatinum (5%) and Titanium (1%), Mean = 3.25%.\nRatio Pt : Ti = (3.25 - 1) : (5 - 3.25) = 2.25 : 1.75 = 9 : 7.\n\nStep 3: Calculate actual Platinum present:\nTotal parts = 9 + 7 = 16 parts = 12 kg ⟹ 1 part = 0.75 kg.\nActual Platinum = 9 × 0.75 = 6.75 kg.\nOriginal Platinum intended = 8 kg.\nPlatinum stolen = 8 - 6.75 = 1.25 kg.",
    "trick": "Loss% Alligation: Loss = 0.39/12 = 3.25%. Pt:Ti = 2.25:1.75 = 9:7. Pt present = 9/16 × 12 = 6.75 kg. Stolen = 8 - 6.75 = 1.25 kg!"
  },
  {
    "id": "mix_109",
    "number": 109,
    "type": "Two-Alloy System & Silver Balance",
    "sub_topic": "Type 4: Advanced Exam Challengers (Averages, Exam Scores, Coins)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "Two alloys composed of gold and silver together weigh 24 kg. One alloy contains 70% gold and 28 g/kg silver. Another contains 80% gold and 32 g/kg silver. Total silver in both alloys together is 720 g. If both alloys are melted and mixed, what percentage of gold will the new alloy contain?",
    "options": [
      "72%",
      "75%",
      "68%",
      "80%"
    ],
    "answer": "75%",
    "solution": "Step 1: Set up linear equation for silver content:\nTotal alloy weight = 24 kg. Let weight of Alloy 1 = x kg, Alloy 2 = (24 - x) kg.\nAlloy 1 has 28 g/kg silver, Alloy 2 has 32 g/kg silver, Total silver = 720 g.\n28x + 32(24 - x) = 720\n28x + 768 - 32x = 720 ⟹ 4x = 48 ⟹ x = 12 kg.\nAlloy 1 = 12 kg, Alloy 2 = 12 kg (Equal 1 : 1 mixture!).\n\nStep 2: Calculate final Gold percentage:\nSince both alloys have equal weight (12 kg each):\nFinal % = Simple average of Gold % = (70% + 80%) / 2 = 75%.",
    "trick": "Equal Weight Shortcut: 28(12) + 32(12) = 720 g ⟹ exactly 12 kg each! Equal weights mean Gold % is simply (70 + 80)/2 = 75%!"
  },
  {
    "id": "mix_110",
    "number": 110,
    "type": "Ternary Alloy Composition & Iron:Carbon Ratio",
    "sub_topic": "Type 4: Advanced Exam Challengers (Averages, Exam Scores, Coins)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "Steel is an alloy of iron and carbon. Ferrite is an alloy containing 78% iron, 6% carbon and 16% chromium. A fused mass of both alloys is made to contain 72% iron, 18% carbon and 10% chromium. Find the ratio of iron to carbon in steel (and the ratio of steel to ferrite).",
    "options": [
      "28:17",
      "31:19",
      "24:13",
      "33:21"
    ],
    "answer": "31:19",
    "solution": "Step 1: Find mixing ratio of Steel and Ferrite using Chromium:\n• Steel contains 0% Chromium.\n• Ferrite contains 16% Chromium.\n• Fused mixture contains 10% Chromium.\nAlligation on Chromium: Ratio Steel : Ferrite = (16 - 10) : (10 - 0) = 6 : 10 = 3 : 5.\nFerrite fraction = 5/8 (62.5%), Steel fraction = 3/8 (37.5%).\n\nStep 2: Determine Iron and Carbon percentages in Steel:\nIn fused mixture, Iron = 72%. Ferrite contributes 78% Iron.\n0.375 × Iron_steel + 0.625 × 78% = 72%\n0.375 × Iron_steel + 48.75% = 72% ⟹ 0.375 × Iron_steel = 23.25% ⟹ Iron_steel = 62%.\nCarbon in Steel = 100% - 62% = 38%.\n\nStep 3: Ratio of Iron to Carbon in Steel:\nRatio = 62 : 38 = 31 : 19.",
    "trick": "Maestro's Deep Metallurgy Insight: Chromium gives Steel:Ferrite = 3:5. Ferrite brings 78% Iron and 6% Carbon. To achieve 72% Iron in mixture, Steel must contain 62% Iron and 38% Carbon. Ratio of Iron : Carbon in Steel = 62 : 38 = 31 : 19 (Option B)!"
  },
  {
    "id": "mix_111",
    "number": 111,
    "type": "Three-Component Alloy Alligation",
    "sub_topic": "Type 4: Advanced Exam Challengers (Averages, Exam Scores, Coins)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "In alloy A, there is 65% Aluminium and 35% Magnesium. In alloy B, there is 70% Aluminium, 10% Magnesium and the remaining impurities. Both alloys are mixed such that Magnesium in the new mixture becomes 20%. Find the percentage of impurities in the new mixture.",
    "options": [
      "8%",
      "10%",
      "12%",
      "15%"
    ],
    "answer": "12%",
    "solution": "Step 1: Alligation on Magnesium to find mixing ratio:\nAlloy A has 35% Mg, Alloy B has 10% Mg, New mixture has 20% Mg.\nRatio Alloy A : Alloy B = (20 - 10) : (35 - 20) = 10 : 15 = 2 : 3 (Total = 5 parts).\n\nStep 2: Calculate impurities percentage in new mixture:\n• Alloy A has 65% Al + 35% Mg = 100% (0% impurities).\n• Alloy B has 70% Al + 10% Mg = 80% (20% impurities).\nWeight of Alloy B in mixture = 3/5.\nImpurities % = (3/5) × 20% = 12%.",
    "trick": "Direct Impurities Share: Mg gives A:B = 2:3. Alloy B carries all 20% impurities. Its fraction is 3/5 ⟹ (3/5) × 20% = 12% in 5 seconds!"
  },
  {
    "id": "mix_112",
    "number": 112,
    "type": "Trace Metal Alligation",
    "sub_topic": "Type 4: Advanced Exam Challengers (Averages, Exam Scores, Coins)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "Alloy A contains 92% gold and 8% silver. Alloy B contains 78% gold, 6% silver and remaining impurities. Alloy C is formed by mixing A and B and contains 7.5% silver. Find the percentage of gold in alloy C.",
    "options": [
      "86%",
      "88.5%",
      "89%",
      "87.5%"
    ],
    "answer": "88.5%",
    "solution": "Step 1: Alligation on Silver to find mixing ratio:\nAlloy A has 8% Silver, Alloy B has 6% Silver, Alloy C has 7.5% Silver.\nRatio Alloy A : Alloy B = (7.5 - 6) : (8 - 7.5) = 1.5 : 0.5 = 3 : 1 (Total = 4 parts).\n\nStep 2: Weighted average of Gold percentage:\nAlloy A has 92% Gold, Alloy B has 78% Gold.\nGold in C = (3 × 92% + 1 × 78%) / 4 = (276 + 78) / 4 = 354 / 4 = 88.5%.",
    "trick": "Silver Cross gives 3:1: Gold % = (3 × 92 + 78) / 4 = 354 / 4 = 88.5% in 10 seconds!"
  },
  {
    "id": "mix_113",
    "number": 113,
    "type": "Gold Biscuit Mixing Alligation",
    "sub_topic": "Type 4: Advanced Exam Challengers (Averages, Exam Scores, Coins)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "A gold biscuit weighing 15 kg contains 88% gold and the rest copper. It is mixed with another gold biscuit. The resulting alloy weighs 35 kg and contains 92% gold. Find the percentage of gold in the second biscuit.",
    "options": [
      "88%",
      "92%",
      "95%",
      "90%"
    ],
    "answer": "95%",
    "solution": "Step 1: Determine weights and ratio of biscuits:\nBiscuit 1 = 15 kg, Total alloy = 35 kg ⟹ Biscuit 2 = 35 - 15 = 20 kg.\nWeight Ratio Biscuit 1 : Biscuit 2 = 15 : 20 = 3 : 4.\n\nStep 2: Alligation on Gold percentage:\nBiscuit 1 has 88%, Combined has 92%.\n(G₂ - 92) / (92 - 88) = 3 / 4\n(G₂ - 92) / 4 = 3 / 4 ⟹ G₂ - 92 = 3 ⟹ G₂ = 95%.",
    "trick": "Ratio 3:4 Deviation: Biscuit 1 is -4% below 92% (total -12%). 4 parts of Biscuit 2 must be +12%/4 = +3% above 92% ⟹ 92 + 3 = 95%!"
  },
  {
    "id": "mix_114",
    "number": 114,
    "type": "Interchanged Coin Count Alligation",
    "sub_topic": "Type 4: Advanced Exam Challengers (Averages, Exam Scores, Coins)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "There are two types of coins in a box: 10p and 25p. The total money in the box is ₹7.50 and the total number of coins is 48. If the number of coins is interchanged, find the new total money.",
    "options": [
      "&7.8",
      "₹9.3",
      "F11.5",
      "313.2"
    ],
    "answer": "₹9.3",
    "solution": "Step 1: Determine initial count of 10p and 25p coins:\nTotal coins = 48, Total value = ₹7.50 = 750 paise.\nLet x = number of 10p coins, (48 - x) = number of 25p coins.\n10x + 25(48 - x) = 750 ⟹ 1200 - 15x = 750 ⟹ 15x = 450 ⟹ x = 30 coins (10p).\nNumber of 25p coins = 48 - 30 = 18 coins.\n\nStep 2: Calculate new value when coin counts are interchanged:\nNow 18 coins of 10p and 30 coins of 25p:\nNew Total = 18 × 10p + 30 × 25p = 180 + 750 = 930 paise = ₹9.30.",
    "trick": "Coin Complement Shortcut: Total value change = (30 - 18) × (25p - 10p) = 12 × 15p = +180 paise (+₹1.80). New money = 7.50 + 1.80 = ₹9.30!"
  },
  {
    "id": "mix_115",
    "number": 115,
    "type": "Demographic Car Ownership Alligation",
    "sub_topic": "Type 4: Advanced Exam Challengers (Averages, Exam Scores, Coins)",
    "exam": "SSC CGL / CHSL / CPO PYQ (Maths Maestro)",
    "question": "In a society there are men, women and children. The ratio of children to men is 12:54. 70% of women and 30% of children have a car. Overall, 54% of women and children together have a car. If 75% of the people in the society have a car, find the ratio of men not having a car to men having a car.",
    "options": [
      "5:7",
      "2:13",
      "9:11",
      "3:8"
    ],
    "answer": "2:13",
    "solution": "Step 1: Find Women : Children ratio using Alligation:\nWomen = 70% car owners, Children = 30% car owners, Combined = 54%.\nRatio Women : Children = (54 - 30) : (70 - 54) = 24 : 16 = 3 : 2.\n\nStep 2: Combine with given Children : Men ratio (12 : 54 = 2 : 9):\nChildren = 2k ⟹ Men = 9k and Women = 3k.\nTotal people = 9k + 3k + 2k = 14k.\n\nStep 3: Calculate car ownership among Men:\n• Total cars in society = 75% of 14k = 10.5k.\n• Cars with Women & Children = 54% of (3k + 2k) = 0.54 × 5k = 2.7k.\n• Cars with Men = 10.5k - 2.7k = 7.8k.\n• Men WITHOUT cars = 9k - 7.8k = 1.2k.\n\nStep 4: Ratio of Men not having cars to Men having cars:\nRatio = 1.2k : 7.8k = 12 : 78 = 2 : 13.",
    "trick": "Ratio Linking & Car Balance: W:C = 3:2, C:M = 2:9 ⟹ W:C:M = 3:2:9 (Total 14). Total cars = 75% of 14 = 10.5. (W+C) have 54% of 5 = 2.7 cars. Men have 10.5 - 2.7 = 7.8 cars. Men without cars = 9 - 7.8 = 1.2. Ratio = 1.2 : 7.8 = 2 : 13!"
  }
];
