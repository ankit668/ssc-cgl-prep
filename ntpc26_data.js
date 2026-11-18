// RRB NTPC CEN 06/2026 Master Hub (180 Pure-English MCQs & 24 Cheat-Sheet Rules)
window.NTPC26_DATA = [
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC CEN 06/2026 Focus",
    "question": "If the Mean of a distribution is 20 and its Median is 24, find the Mode using the empirical relationship.",
    "options": {
      "a": "30",
      "b": "32",
      "c": "26",
      "d": "28"
    },
    "answer": "b",
    "correct_text": "32",
    "formula": "Mode = 3 × Median − 2 × Mean",
    "steps": [
      "Given: Mean = 20, Median = 24.",
      "Apply Karl Pearson's empirical formula: Mode = 3(Median) − 2(Mean).",
      "Mode = 3(24) − 2(20) = 72 − 40 = 32."
    ],
    "trick": "Direct 3-second formula: 3×24 − 2×20 = 72 − 40 = 32.",
    "id": 1
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "Find the Median of the following observations: 17, 8, 25, 12, 31, 19, 14, 22, 9.",
    "options": {
      "a": "18",
      "b": "14",
      "c": "19",
      "d": "17"
    },
    "answer": "d",
    "correct_text": "17",
    "formula": "For odd n, Median = ((n + 1) / 2)th term in ascending order",
    "steps": [
      "First, arrange the 9 observations in ascending order: 8, 9, 12, 14, 17, 19, 22, 25, 31.",
      "Here n = 9 (odd). Median position = (9 + 1) / 2 = 5th observation.",
      "The 5th term in the sorted list is 17."
    ],
    "trick": "Never pick the middle term without sorting! Count 4 smallest (8, 9, 12, 14) → the very next smallest is 17.",
    "id": 2
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "Find the Median of the data set: 14, 21, 9, 18, 26, 12, 15, 30.",
    "options": {
      "a": "17",
      "b": "16",
      "c": "16.5",
      "d": "15.5"
    },
    "answer": "c",
    "correct_text": "16.5",
    "formula": "For even n, Median = Average of (n/2)th and (n/2 + 1)th terms",
    "steps": [
      "Arrange the 8 terms in ascending order: 9, 12, 14, 15, 18, 21, 26, 30.",
      "Since n = 8 (even), Median = average of 4th and 5th terms.",
      "4th term = 15, 5th term = 18 ⇒ Median = (15 + 18) / 2 = 33 / 2 = 16.5."
    ],
    "trick": "For 8 numbers, strike off 3 smallest (9, 12, 14) and 3 largest (21, 26, 30). Average the remaining two: (15 + 18)/2 = 16.5.",
    "id": 3
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC CBT-2 Special",
    "question": "Calculate the Variance of the data set: 2, 4, 6, 8, 10.",
    "options": {
      "a": "8",
      "b": "2√2",
      "c": "10",
      "d": "4"
    },
    "answer": "a",
    "correct_text": "8",
    "formula": "Variance (σ²) = Σ(xᵢ − x̄)² / N",
    "steps": [
      "Find the Mean: x̄ = (2 + 4 + 6 + 8 + 10) / 5 = 30 / 5 = 6.",
      "Find deviations from Mean (xᵢ − 6): −4, −2, 0, +2, +4.",
      "Square each deviation: 16, 4, 0, 4, 16. Sum = 40.",
      "Variance σ² = 40 / 5 = 8."
    ],
    "trick": "For AP {2,4,6,8,10} with n=5, d=2: Variance = d²(n² − 1)/12 = 4 × (25 − 1)/12 = 4 × 2 = 8 in 3 seconds!",
    "id": 4
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC CBT-2 Special",
    "question": "If the Variance of a dataset is 169, what is its Standard Deviation?",
    "options": {
      "a": "±13",
      "b": "16.9",
      "c": "26",
      "d": "13"
    },
    "answer": "d",
    "correct_text": "13",
    "formula": "Standard Deviation (σ) = +√Variance (always non-negative)",
    "steps": [
      "Given Variance σ² = 169.",
      "Standard Deviation σ = √169 = 13.",
      "Note: Standard Deviation is a measure of distance/spread, so it can NEVER be negative (eliminate ±13)."
    ],
    "trick": "Classic NTPC trap: always pick positive 13, NEVER ±13! SD ≥ 0 always.",
    "id": 5
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC CBT-2 High-Yield",
    "question": "The Mean of a distribution is 25 and its Standard Deviation is 5. What is its Coefficient of Variation (CV)?",
    "options": {
      "a": "5%",
      "b": "25%",
      "c": "12.5%",
      "d": "20%"
    },
    "answer": "d",
    "correct_text": "20%",
    "formula": "CV = (Standard Deviation / Mean) × 100%",
    "steps": [
      "Given: Mean (x̄) = 25, Standard Deviation (σ) = 5.",
      "CV = (5 / 25) × 100% = (1 / 5) × 100% = 20%."
    ],
    "trick": "CV = (SD / Mean) × 100 = 5/25 × 100 = 20%.",
    "id": 6
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC CBT-2 High-Yield",
    "question": "The Standard Deviation of a set of 15 observations is 6. If every observation is increased by 10, what will be the new Standard Deviation?",
    "options": {
      "a": "10",
      "b": "60",
      "c": "16",
      "d": "6"
    },
    "answer": "d",
    "correct_text": "6",
    "formula": "SD is independent of change of origin (addition/subtraction)",
    "steps": [
      "Adding a constant (+10) to every observation shifts the entire distribution right by 10 units.",
      "The Mean also increases by 10, so every deviation (xᵢ − x̄) remains completely unchanged.",
      "Therefore, the new Standard Deviation remains 6."
    ],
    "trick": "Golden Rule: Addition/Subtraction NEVER changes SD, Variance, Mean Deviation, or Range! Answer = 6 instantly.",
    "id": 7
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC CBT-2 High-Yield",
    "question": "The Variance of 20 observations is 9. If every observation is multiplied by 4, find the new Variance.",
    "options": {
      "a": "12",
      "b": "81",
      "c": "36",
      "d": "144"
    },
    "answer": "d",
    "correct_text": "144",
    "formula": "New Variance = k² × Old Variance",
    "steps": [
      "When each observation is multiplied by k = 4, Standard Deviation becomes k × σ.",
      "Since Variance = σ², New Variance = k² × Old Variance = 4² × 9.",
      "New Variance = 16 × 9 = 144."
    ],
    "trick": "Multiply data by k ⇒ SD multiplies by k, Variance multiplies by k². Here 9 × 4² = 144!",
    "id": 8
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "Find the Range of the following numbers: −8, 14, −3, 21, 0, −12, 9.",
    "options": {
      "a": "9",
      "b": "21",
      "c": "33",
      "d": "29"
    },
    "answer": "c",
    "correct_text": "33",
    "formula": "Range = Maximum Value − Minimum Value",
    "steps": [
      "Identify the maximum value in the set: Max = 21.",
      "Identify the minimum value in the set: Min = −12.",
      "Range = 21 − (−12) = 21 + 12 = 33."
    ],
    "trick": "Watch negative signs! 21 − (−12) = 21 + 12 = 33.",
    "id": 9
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "Find the Standard Deviation of the first 7 natural numbers (1, 2, 3, 4, 5, 6, 7).",
    "options": {
      "a": "4",
      "b": "2",
      "c": "2.5",
      "d": "√6"
    },
    "answer": "b",
    "correct_text": "2",
    "formula": "SD of first n natural numbers = √[(n² − 1) / 12]",
    "steps": [
      "Here n = 7.",
      "Variance = (n² − 1) / 12 = (49 − 1) / 12 = 48 / 12 = 4.",
      "Standard Deviation = √4 = 2."
    ],
    "trick": "Memorize √[(n² − 1)/12]: for n = 7, √(48/12) = √4 = 2 in 2 seconds!",
    "id": 10
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC CBT-2 Special",
    "question": "If the difference between Mean and Mode of a distribution is 48, find the difference between Mean and Median.",
    "options": {
      "a": "12",
      "b": "32",
      "c": "24",
      "d": "16"
    },
    "answer": "d",
    "correct_text": "16",
    "formula": "Mean − Mode = 3 × (Mean − Median)",
    "steps": [
      "From Mode = 3 Median − 2 Mean, rearrange as: Mean − Mode = 3(Mean − Median).",
      "Given: Mean − Mode = 48.",
      "48 = 3 × (Mean − Median) ⇒ Mean − Median = 48 / 3 = 16."
    ],
    "trick": "Always divide (Mean − Mode) by 3 to get (Mean − Median): 48 / 3 = 16!",
    "id": 11
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "The observations 11, 14, 17, x + 2, x + 6, 30, 34, 39 are arranged in ascending order. If their Median is 24, find the value of x.",
    "options": {
      "a": "22",
      "b": "24",
      "c": "20",
      "d": "18"
    },
    "answer": "c",
    "correct_text": "20",
    "formula": "Median (even n=8) = (4th term + 5th term) / 2",
    "steps": [
      "There are n = 8 observations already in ascending order.",
      "The two middle terms are the 4th term (x + 2) and 5th term (x + 6).",
      "Median = [(x + 2) + (x + 6)] / 2 = (2x + 8) / 2 = x + 4.",
      "Given Median = 24 ⇒ x + 4 = 24 ⇒ x = 20."
    ],
    "trick": "Average of (x+2) and (x+6) is simply x + 4. Set x + 4 = 24 ⇒ x = 20.",
    "id": 12
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "Find the Mode of the data: 7, 11, 9, 11, 13, 7, 11, 15, 9, 11, 13.",
    "options": {
      "a": "7",
      "b": "13",
      "c": "11",
      "d": "9"
    },
    "answer": "c",
    "correct_text": "11",
    "formula": "Mode = Observation with the highest frequency",
    "steps": [
      "Count frequencies: 7 appears 2 times, 9 appears 2 times, 11 appears 4 times, 13 appears 2 times, 15 appears 1 time.",
      "Since 11 occurs most frequently (4 times), Mode = 11."
    ],
    "trick": "Scan for the most repeated number: 11 appears four times → Mode = 11.",
    "id": 13
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC CBT-2 High-Yield",
    "question": "Calculate the Mean Deviation about the Mean for the observations: 3, 6, 9, 12, 15.",
    "options": {
      "a": "3.6",
      "b": "3.0",
      "c": "4.0",
      "d": "4.5"
    },
    "answer": "a",
    "correct_text": "3.6",
    "formula": "Mean Deviation = Σ|xᵢ − x̄| / N",
    "steps": [
      "Mean x̄ = (3 + 6 + 9 + 12 + 15) / 5 = 9.",
      "Absolute deviations |xᵢ − 9|: |3−9|=6, |6−9|=3, |9−9|=0, |12−9|=3, |15−9|=6.",
      "Sum of absolute deviations = 6 + 3 + 0 + 3 + 6 = 18.",
      "Mean Deviation = 18 / 5 = 3.6."
    ],
    "trick": "Symmetric around 9: deviations are 6, 3, 0, 3, 6 → Sum = 18 → 18 / 5 = 3.6.",
    "id": 14
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC CBT-2 High-Yield",
    "question": "In a grouped frequency distribution, the modal class is 40–50 with frequency f₁ = 28. The frequency of the preceding class is f₀ = 16 and the succeeding class is f₂ = 20. Find the Mode.",
    "options": {
      "a": "46",
      "b": "47.5",
      "c": "44",
      "d": "45"
    },
    "answer": "a",
    "correct_text": "46",
    "formula": "Mode = L + [(f₁ − f₀) / (2f₁ − f₀ − f₂)] × h",
    "steps": [
      "Given: L = 40, h = 50 − 40 = 10, f₁ = 28, f₀ = 16, f₂ = 20.",
      "Numerator: f₁ − f₀ = 28 − 16 = 12.",
      "Denominator: 2f₁ − f₀ − f₂ = 2(28) − 16 − 20 = 56 − 36 = 20.",
      "Mode = 40 + (12 / 20) × 10 = 40 + 6 = 46."
    ],
    "trick": "Δ₁ = 28−16 = 12, Δ₂ = 28−20 = 8 ⇒ Mode = 40 + [12/(12+8)]×10 = 40 + 6 = 46!",
    "id": 15
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC CBT-2 High-Yield",
    "question": "In a grouped distribution with total frequency N = 60, the median class is 20–30, its frequency is f = 15, and cumulative frequency of the preceding class is cf = 24. Find the Median.",
    "options": {
      "a": "26",
      "b": "23.5",
      "c": "25",
      "d": "24"
    },
    "answer": "d",
    "correct_text": "24",
    "formula": "Median = L + [((N/2) − cf) / f] × h",
    "steps": [
      "Given: N = 60 ⇒ N/2 = 30. L = 20, h = 10, cf = 24, f = 15.",
      "Median = 20 + [(30 − 24) / 15] × 10.",
      "Median = 20 + (6 / 15) × 10 = 20 + 4 = 24."
    ],
    "trick": "N/2 − cf = 30 − 24 = 6. Then (6/15)×10 = 4 → 20 + 4 = 24.",
    "id": 16
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "The Mean of 12 numbers is 18. If one number is excluded, the Mean becomes 17. What is the excluded number?",
    "options": {
      "a": "28",
      "b": "30",
      "c": "29",
      "d": "27"
    },
    "answer": "c",
    "correct_text": "29",
    "formula": "Excluded Value = Old Sum − New Sum",
    "steps": [
      "Sum of 12 numbers = 12 × 18 = 216.",
      "Sum of remaining 11 numbers = 11 × 17 = 187.",
      "Excluded number = 216 − 187 = 29."
    ],
    "trick": "Deviation Shortcut: Excluded number took its own 18 PLUS 1 from each of the other 11 numbers = 18 + 11 = 29!",
    "id": 17
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC CBT-2 Special",
    "question": "Two datasets A and B have equal Means of 50. Dataset A has SD = 4 and Dataset B has SD = 7. Which statement is correct?",
    "options": {
      "a": "Both datasets are equally consistent",
      "b": "Dataset A is more consistent than Dataset B",
      "c": "Dataset A has higher variance than Dataset B",
      "d": "Dataset B is more consistent than Dataset A"
    },
    "answer": "b",
    "correct_text": "Dataset A is more consistent than Dataset B",
    "formula": "Lower CV (or lower SD for equal means) ⇒ Greater consistency",
    "steps": [
      "CV(A) = (4 / 50) × 100% = 8%.",
      "CV(B) = (7 / 50) × 100% = 14%.",
      "A smaller Coefficient of Variation indicates less dispersion and higher consistency. Hence Dataset A is more consistent."
    ],
    "trick": "Lower CV = More Consistent / Uniform. 8% < 14% ⇒ A wins!",
    "id": 18
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "If the Coefficient of Variation of a distribution is 40% and its Standard Deviation is 12, what is its Mean?",
    "options": {
      "a": "36",
      "b": "30",
      "c": "48",
      "d": "25"
    },
    "answer": "b",
    "correct_text": "30",
    "formula": "Mean = (SD / CV) × 100",
    "steps": [
      "CV = (SD / Mean) × 100.",
      "40 = (12 / Mean) × 100 ⇒ Mean = 1200 / 40 = 30."
    ],
    "trick": "40% of Mean = 12 ⇒ 10% = 3 ⇒ 100% (Mean) = 30!",
    "id": 19
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC CBT-2 Special",
    "question": "What is the Variance of the constant dataset: 7, 7, 7, 7, 7, 7?",
    "options": {
      "a": "7",
      "b": "1",
      "c": "49",
      "d": "0"
    },
    "answer": "d",
    "correct_text": "0",
    "formula": "Variance of identical observations = 0",
    "steps": [
      "Mean = 7. Every deviation (7 − 7) = 0.",
      "Variance = (0 + 0 + 0 + 0 + 0 + 0) / 6 = 0."
    ],
    "trick": "No variation in data ⇒ Range = MD = SD = Variance = 0!",
    "id": 20
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "The Mean of 5 observations x, x+3, x+6, x+9, x+12 is 18. Find the Mean of the last three observations.",
    "options": {
      "a": "19",
      "b": "21",
      "c": "24",
      "d": "20"
    },
    "answer": "b",
    "correct_text": "21",
    "formula": "In an Arithmetic Progression, Mean = Middle Term",
    "steps": [
      "The 5 observations form an AP with common difference 3. Their Mean is the middle (3rd) term: x + 6.",
      "Given x + 6 = 18 ⇒ x = 12.",
      "The last 3 observations are (x+6), (x+9), (x+12), whose middle term is x + 9 = 12 + 9 = 21."
    ],
    "trick": "Middle of all 5 is x+6 = 18; middle of last 3 is just one step ahead (+3) = 18 + 3 = 21!",
    "id": 21
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC CBT-2 High-Yield",
    "question": "Find the sum of the Mean, Median, and Mode of the dataset: 4, 6, 8, 6, 10, 6, 12, 8, 12.",
    "options": {
      "a": "21",
      "b": "24",
      "c": "22",
      "d": "20"
    },
    "answer": "c",
    "correct_text": "22",
    "formula": "Mean = Σx/N, Median = Middle term, Mode = Most frequent",
    "steps": [
      "Sort the 9 values: 4, 6, 6, 6, 8, 8, 10, 12, 12.",
      "Mean = (4+6+6+6+8+8+10+12+12) / 9 = 72 / 9 = 8.",
      "Median = 5th value = 8.",
      "Mode = 6 (occurs 3 times).",
      "Sum = Mean + Median + Mode = 8 + 8 + 6 = 22."
    ],
    "trick": "Sorted list immediately shows 5th term = 8, Mode = 6, Sum = 72 ⇒ Mean = 8. Total = 8 + 8 + 6 = 22.",
    "id": 22
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC CBT-2 Special",
    "question": "If the Median of a data set is 15 and the Mode is 21, find the Mean.",
    "options": {
      "a": "12",
      "b": "14",
      "c": "18",
      "d": "13.5"
    },
    "answer": "a",
    "correct_text": "12",
    "formula": "Mean = (3 × Median − Mode) / 2",
    "steps": [
      "Use Mode = 3 Median − 2 Mean ⇒ 2 Mean = 3 Median − Mode.",
      "2 Mean = 3(15) − 21 = 45 − 21 = 24.",
      "Mean = 24 / 2 = 12."
    ],
    "trick": "(3×15 − 21)/2 = (45 − 21)/2 = 12.",
    "id": 23
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "The class mark (midpoint) of a class interval is 25 and its class width is 10. Find the class interval.",
    "options": {
      "a": "25 − 35",
      "b": "15 − 25",
      "c": "15 − 35",
      "d": "20 − 30"
    },
    "answer": "d",
    "correct_text": "20 − 30",
    "formula": "Lower Limit = Class Mark − h/2, Upper Limit = Class Mark + h/2",
    "steps": [
      "Given Class Mark = 25, Class Width h = 10 ⇒ h/2 = 5.",
      "Lower Limit = 25 − 5 = 20.",
      "Upper Limit = 25 + 5 = 30.",
      "Class interval = 20 − 30."
    ],
    "trick": "Add and subtract half the width (5) from 25 → 20 to 30!",
    "id": 24
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC CBT-2 High-Yield",
    "question": "The arithmetic mean of the marks scored by 40 boys is 65 and by 60 girls is 75. Find the combined mean of all 100 students.",
    "options": {
      "a": "70",
      "b": "72",
      "c": "69",
      "d": "71"
    },
    "answer": "d",
    "correct_text": "71",
    "formula": "Combined Mean = (n₁x̄₁ + n₂x̄₂) / (n₁ + n₂)",
    "steps": [
      "Ratio of counts n₁ : n₂ = 40 : 60 = 2 : 3.",
      "Combined Mean = (2 × 65 + 3 × 75) / (2 + 3) = (130 + 225) / 5 = 355 / 5 = 71."
    ],
    "trick": "Deviation method: Base 65 + (3/5) × (75 − 65) = 65 + 6 = 71 in 3 seconds!",
    "id": 25
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC CBT-2 Special",
    "question": "In a dataset of 10 observations, Σxᵢ = 50 and Σxᵢ² = 340. Find the Standard Deviation.",
    "options": {
      "a": "4",
      "b": "√14",
      "c": "9",
      "d": "3"
    },
    "answer": "d",
    "correct_text": "3",
    "formula": "σ = √[ (Σxᵢ² / N) − (Σxᵢ / N)² ]",
    "steps": [
      "Mean x̄ = Σxᵢ / N = 50 / 10 = 5.",
      "Mean of squares = Σxᵢ² / N = 340 / 10 = 34.",
      "Variance σ² = 34 − 5² = 34 − 25 = 9.",
      "Standard Deviation σ = √9 = 3."
    ],
    "trick": "Shortcut: √(Mean of Squares − Square of Mean) = √(34 − 25) = √9 = 3!",
    "id": 26
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "The point of intersection of the 'less than' ogive and the 'more than' ogive gives which measure of central tendency on the x-axis?",
    "options": {
      "a": "Mean",
      "b": "Range",
      "c": "Median",
      "d": "Mode"
    },
    "answer": "c",
    "correct_text": "Median",
    "formula": "Intersection of Less-than & More-than Ogives = Median",
    "steps": [
      "An ogive is a cumulative frequency curve.",
      "The 'less than' ogive rises from 0 to N, while the 'more than' ogive falls from N to 0.",
      "They intersect precisely at cumulative frequency N/2, whose x-coordinate is the Median."
    ],
    "trick": "Remember pair: Ogive → Median | Histogram → Mode!",
    "id": 27
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "Which graphical representation is used to determine the Mode of a continuous grouped frequency distribution?",
    "options": {
      "a": "Pie Chart",
      "b": "Histogram",
      "c": "Ogive",
      "d": "Scatter Plot"
    },
    "answer": "b",
    "correct_text": "Histogram",
    "formula": "Mode is determined graphically using a Histogram",
    "steps": [
      "In a Histogram, the tallest rectangle represents the modal class.",
      "Joining its top corners diagonally to the adjacent rectangles' top corners locates the Mode on the x-axis."
    ],
    "trick": "Histogram = Mode | Ogive = Median — standard 1-second RRB theory question!",
    "id": 28
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC CBT-2 Special",
    "question": "Find the Interquartile Range (IQR) of the sorted data: 5, 8, 12, 15, 19, 24, 30.",
    "options": {
      "a": "25",
      "b": "16",
      "c": "14",
      "d": "12"
    },
    "answer": "b",
    "correct_text": "16",
    "formula": "Q₁ = ((n+1)/4)th term, Q₃ = (3(n+1)/4)th term, IQR = Q₃ − Q₁",
    "steps": [
      "Here n = 7 (already sorted). (n + 1) / 4 = 8 / 4 = 2.",
      "First Quartile Q₁ = 2nd term = 8.",
      "Third Quartile Q₃ = 3 × 2 = 6th term = 24.",
      "Interquartile Range (IQR) = Q₃ − Q₁ = 24 − 8 = 16."
    ],
    "trick": "For 7 sorted items, Q₁ is 2nd (8), Median is 4th (15), Q₃ is 6th (24). IQR = 24 − 8 = 16!",
    "id": 29
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC CBT-2 High-Yield",
    "question": "What is the Semi-Interquartile Range (Quartile Deviation) if Q₁ = 18 and Q₃ = 42?",
    "options": {
      "a": "12",
      "b": "15",
      "c": "24",
      "d": "30"
    },
    "answer": "a",
    "correct_text": "12",
    "formula": "Quartile Deviation = (Q₃ − Q₁) / 2",
    "steps": [
      "Given Q₁ = 18 and Q₃ = 42.",
      "Quartile Deviation (QD) = (42 − 18) / 2 = 24 / 2 = 12."
    ],
    "trick": "QD = Half of (Q₃ − Q₁) = 24 / 2 = 12.",
    "id": 30
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "If the Mean of 8, 12, k, 16, 20 is 15, find the value of k.",
    "options": {
      "a": "17",
      "b": "21",
      "c": "15",
      "d": "19"
    },
    "answer": "d",
    "correct_text": "19",
    "formula": "Sum = Mean × N",
    "steps": [
      "Total sum of 5 numbers = 15 × 5 = 75.",
      "Sum of known numbers = 8 + 12 + 16 + 20 = 56.",
      "k = 75 − 56 = 19."
    ],
    "trick": "Deviations from 15: −7, −3, +1, +5 → Net = −4. So k must supply +4 → 15 + 4 = 19!",
    "id": 31
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC CBT-2 Special",
    "question": "The Mean of 10 observations was calculated as 45. Later it was found that one observation 32 was misread as 23. Find the correct Mean.",
    "options": {
      "a": "45.5",
      "b": "44.1",
      "c": "46.0",
      "d": "45.9"
    },
    "answer": "d",
    "correct_text": "45.9",
    "formula": "Correct Mean = Wrong Mean + (Correct Value − Wrong Value) / N",
    "steps": [
      "Error in sum = Correct − Wrong = 32 − 23 = +9.",
      "Correction to Mean = +9 / 10 = +0.9.",
      "Correct Mean = 45 + 0.9 = 45.9."
    ],
    "trick": "True value is 9 higher → distribute +9 across 10 items = +0.9 → 45.9!",
    "id": 32
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC CBT-2 Special",
    "question": "What is the algebraic sum of the deviations of a set of observations from their Arithmetic Mean?",
    "options": {
      "a": "Always 0",
      "b": "Always positive",
      "c": "Equal to Variance",
      "d": "Equal to N"
    },
    "answer": "a",
    "correct_text": "Always 0",
    "formula": "Σ(xᵢ − x̄) = 0",
    "steps": [
      "Σ(xᵢ − x̄) = Σxᵢ − N·x̄.",
      "Since x̄ = Σxᵢ / N, we have Σxᵢ = N·x̄.",
      "Hence Σ(xᵢ − x̄) = N·x̄ − N·x̄ = 0 always."
    ],
    "trick": "Fundamental property of Arithmetic Mean: sum of signed deviations is ALWAYS zero.",
    "id": 33
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "The sum of absolute deviations Σ|xᵢ − A| is minimum when A is equal to which measure?",
    "options": {
      "a": "Standard Deviation",
      "b": "Mode",
      "c": "Median",
      "d": "Mean"
    },
    "answer": "c",
    "correct_text": "Median",
    "formula": "Σ|xᵢ − A| is minimum at A = Median; Σ(xᵢ − A)² is minimum at A = Mean",
    "steps": [
      "The sum of absolute deviations Σ|xᵢ − A| is minimized when A = Median.",
      "By contrast, the sum of SQUARED deviations Σ(xᵢ − A)² is minimized when A = Mean."
    ],
    "trick": "Absolute |x−A| → Median | Squared (x−A)² → Mean. High-frequency NTPC theory question!",
    "id": 34
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "Find the Mean of the following discrete frequency distribution: x = [2, 4, 6, 8] with frequencies f = [3, 5, 2, 2].",
    "options": {
      "a": "5.0",
      "b": "4.8",
      "c": "4.5",
      "d": "4.2"
    },
    "answer": "c",
    "correct_text": "4.5",
    "formula": "Mean = Σ(fᵢxᵢ) / Σfᵢ",
    "steps": [
      "Compute fᵢxᵢ: 2×3 = 6, 4×5 = 20, 6×2 = 12, 8×2 = 16.",
      "Σ(fᵢxᵢ) = 6 + 20 + 12 + 16 = 54.",
      "Total frequency Σfᵢ = 3 + 5 + 2 + 2 = 12.",
      "Mean = 54 / 12 = 4.5."
    ],
    "trick": "54 / 12 = 9 / 2 = 4.5.",
    "id": 35
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "In a pie chart representing a family's monthly budget, 35% is spent on food. What is the central angle of the sector representing food?",
    "options": {
      "a": "116°",
      "b": "126°",
      "c": "108°",
      "d": "135°"
    },
    "answer": "b",
    "correct_text": "126°",
    "formula": "Central Angle = (% / 100) × 360° = % × 3.6°",
    "steps": [
      "100% corresponds to 360°, so 1% = 3.6°.",
      "For 35%: Angle = 35 × 3.6° = 126°."
    ],
    "trick": "Multiply % by 3.6: 35 × 3.6 = 70 × 1.8 = 126° in 3 seconds!",
    "id": 36
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC CBT-2 Special",
    "question": "Find the Variance of the first 5 odd natural numbers: 1, 3, 5, 7, 9.",
    "options": {
      "a": "4",
      "b": "10",
      "c": "8",
      "d": "6"
    },
    "answer": "c",
    "correct_text": "8",
    "formula": "Variance of AP with common diff d = d²(n² − 1) / 12",
    "steps": [
      "Mean x̄ = 5.",
      "Deviations from 5: −4, −2, 0, +2, +4.",
      "Squared deviations: 16, 4, 0, 4, 16 → Sum = 40.",
      "Variance = 40 / 5 = 8."
    ],
    "trick": "AP formula: d²(n² − 1)/12 = 2²(25 − 1)/12 = 4 × 2 = 8!",
    "id": 37
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC CBT-2 High-Yield",
    "question": "The Standard Deviation of a dataset is 8. If each observation is divided by 2 and then 5 is subtracted from each, what is the new Standard Deviation?",
    "options": {
      "a": "−1",
      "b": "4",
      "c": "16",
      "d": "1"
    },
    "answer": "b",
    "correct_text": "4",
    "formula": "For y = (x / k) − c, New SD = Old SD / |k|",
    "steps": [
      "Dividing every observation by 2 divides the Standard Deviation by 2: 8 / 2 = 4.",
      "Subtracting 5 is a change of origin and has ZERO effect on Standard Deviation.",
      "Hence, New SD = 4."
    ],
    "trick": "Ignore the −5 completely! Just divide SD by 2 → 8 / 2 = 4.",
    "id": 38
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "For a perfectly symmetrical (normal) distribution, which of the following relations holds true?",
    "options": {
      "a": "Mean > Median > Mode",
      "b": "Mean + Mode = Median",
      "c": "Mean < Median < Mode",
      "d": "Mean = Median = Mode"
    },
    "answer": "d",
    "correct_text": "Mean = Median = Mode",
    "formula": "Symmetric distribution: Mean = Median = Mode (Skewness = 0)",
    "steps": [
      "In a symmetric bell-shaped distribution, the peak (Mode), middle value (Median), and balance point (Mean) all coincide.",
      "Positively skewed: Mean > Median > Mode. Negatively skewed: Mean < Median < Mode."
    ],
    "trick": "Symmetry = all three equal! Right-skewed = Mean > Median > Mode.",
    "id": 39
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC CBT-2 Special",
    "question": "Find the Mean of the first 10 prime numbers.",
    "options": {
      "a": "12.9",
      "b": "13.1",
      "c": "12.5",
      "d": "11.9"
    },
    "answer": "a",
    "correct_text": "12.9",
    "formula": "Sum of first 10 primes = 129",
    "steps": [
      "First 10 prime numbers: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.",
      "Sum = 2+3+5+7+11+13+17+19+23+29 = 129.",
      "Mean = 129 / 10 = 12.9."
    ],
    "trick": "Memorize: Sum of first 10 primes = 129 ⇒ Mean = 12.9! (Remember 1 is NOT prime!)",
    "id": 40
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "What is the Geometric Mean of 4, 8, and 16?",
    "options": {
      "a": "10",
      "b": "6",
      "c": "8",
      "d": "9.33"
    },
    "answer": "c",
    "correct_text": "8",
    "formula": "GM of n numbers = (x₁ · x₂ · ... · xₙ)^(1/n)",
    "steps": [
      "Product = 4 × 8 × 16 = 2² × 2³ × 2⁴ = 2⁹.",
      "Geometric Mean = (2⁹)^(1/3) = 2³ = 8."
    ],
    "trick": "In a GP (4, 8, 16), the Geometric Mean is simply the middle term = 8!",
    "id": 41
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "What is the Harmonic Mean of 6 and 12?",
    "options": {
      "a": "7.5",
      "b": "9",
      "c": "8.5",
      "d": "8"
    },
    "answer": "d",
    "correct_text": "8",
    "formula": "HM of two numbers a and b = 2ab / (a + b)",
    "steps": [
      "HM = (2 × 6 × 12) / (6 + 12) = 144 / 18 = 8.",
      "Note: Average speed for equal distances at 6 km/h and 12 km/h is also this exact Harmonic Mean!"
    ],
    "trick": "2×6×12 / 18 = 144 / 18 = 8. Also check AM × HM = GM² ⇒ 9 × 8 = 72 = 6×12!",
    "id": 42
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC CBT-2 High-Yield",
    "question": "If the Arithmetic Mean of two positive numbers is 10 and their Geometric Mean is 8, find their Harmonic Mean.",
    "options": {
      "a": "7.2",
      "b": "6.0",
      "c": "8.0",
      "d": "6.4"
    },
    "answer": "d",
    "correct_text": "6.4",
    "formula": "GM² = AM × HM",
    "steps": [
      "Given AM = 10, GM = 8.",
      "Using GM² = AM × HM ⇒ 8² = 10 × HM ⇒ 64 = 10 × HM.",
      "HM = 64 / 10 = 6.4."
    ],
    "trick": "Direct relation: HM = GM² / AM = 64 / 10 = 6.4 in 2 seconds!",
    "id": 43
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC CBT-2 Special",
    "question": "Which measure of central tendency is MOST affected by extreme outliers (very large or very small values)?",
    "options": {
      "a": "Median",
      "b": "Arithmetic Mean",
      "c": "Quartile",
      "d": "Mode"
    },
    "answer": "b",
    "correct_text": "Arithmetic Mean",
    "formula": "Mean uses every value; Median depends only on middle position",
    "steps": [
      "Arithmetic Mean sums every observation, so a single huge outlier pulls the Mean dramatically.",
      "Median and Mode are positional/frequency measures and remain unaffected by extreme values."
    ],
    "trick": "Outlier magnet = Arithmetic Mean! Outlier resistant = Median.",
    "id": 44
  },
  {
    "category": "statistics",
    "category_name": "Elementary Statistics",
    "exam": "RRB NTPC CBT-2 High-Yield",
    "question": "Find the Mean Deviation about the Median for the data: 4, 7, 10, 13, 18.",
    "options": {
      "a": "4",
      "b": "5",
      "c": "4.4",
      "d": "3.6"
    },
    "answer": "a",
    "correct_text": "4",
    "formula": "MD (Median) = Σ|xᵢ − Median| / N",
    "steps": [
      "The 5 numbers are sorted: 4, 7, 10, 13, 18 ⇒ Median = 10.",
      "Absolute deviations from 10: |4−10|=6, |7−10|=3, |10−10|=0, |13−10|=3, |18−10|=8.",
      "Sum = 6 + 3 + 0 + 3 + 8 = 20.",
      "Mean Deviation about Median = 20 / 5 = 4."
    ],
    "trick": "Deviations from 10 are 6, 3, 0, 3, 8 → Sum = 20 → 20 / 5 = 4!",
    "id": 45
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Physics Numerical",
    "question": "A train starts from rest and attains a velocity of 72 km/h in 5 minutes with uniform acceleration. Find its acceleration (in m/s²).",
    "options": {
      "a": "1/15 m/s²",
      "b": "1/5 m/s²",
      "c": "2/15 m/s²",
      "d": "1/10 m/s²"
    },
    "answer": "a",
    "correct_text": "1/15 m/s²",
    "formula": "v = u + at (Convert km/h to m/s by multiplying by 5/18)",
    "steps": [
      "Initial velocity u = 0 m/s.",
      "Final velocity v = 72 km/h = 72 × (5/18) = 20 m/s.",
      "Time t = 5 minutes = 5 × 60 = 300 seconds.",
      "Acceleration a = (v − u) / t = (20 − 0) / 300 = 1/15 m/s²."
    ],
    "trick": "72 km/h = 20 m/s, 5 min = 300 s ⇒ a = 20/300 = 1/15 m/s²!",
    "id": 46
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Physics Numerical",
    "question": "An object of mass 15 kg is moving with a uniform velocity of 4 m/s. What is the kinetic energy possessed by the object?",
    "options": {
      "a": "120 J",
      "b": "240 J",
      "c": "30 J",
      "d": "60 J"
    },
    "answer": "a",
    "correct_text": "120 J",
    "formula": "KE = ½ m v²",
    "steps": [
      "Given: m = 15 kg, v = 4 m/s.",
      "KE = ½ × 15 × (4)² = ½ × 15 × 16 = 15 × 8 = 120 Joules."
    ],
    "trick": "½ × 15 × 16 = 15 × 8 = 120 J in 2 seconds.",
    "id": 47
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Physics Numerical",
    "question": "If the velocity of a moving body is doubled, its kinetic energy becomes how many times the original kinetic energy?",
    "options": {
      "a": "Half",
      "b": "4 times",
      "c": "8 times",
      "d": "2 times"
    },
    "answer": "b",
    "correct_text": "4 times",
    "formula": "KE ∝ v²",
    "steps": [
      "KE₁ = ½ m v².",
      "When velocity becomes 2v: KE₂ = ½ m (2v)² = 4 × (½ m v²) = 4 KE₁."
    ],
    "trick": "KE is proportional to v²: double speed → 2² = 4× KE! (Momentum p = mv only doubles.)",
    "id": 48
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Physics Numerical",
    "question": "A 60 W electric bulb is used for 6 hours per day. Calculate the units (kWh) of electrical energy consumed by the bulb in 30 days.",
    "options": {
      "a": "1.08 units",
      "b": "10.8 units",
      "c": "18 units",
      "d": "3.6 units"
    },
    "answer": "b",
    "correct_text": "10.8 units",
    "formula": "Units (kWh) = (Power in Watts × Hours per day × Days) / 1000",
    "steps": [
      "Total energy in Watt-hours = 60 W × 6 hours/day × 30 days = 10,800 Wh.",
      "Convert to kWh (Units): 10,800 / 1000 = 10.8 kWh = 10.8 units."
    ],
    "trick": "(60 × 6 × 30) / 1000 = 10800 / 1000 = 10.8 units! Classic NCERT Class 9 numerical.",
    "id": 49
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Physics Numerical",
    "question": "How many Joules are equal to 1 kilowatt-hour (1 kWh)?",
    "options": {
      "a": "36 × 10⁶ J",
      "b": "3.6 × 10⁶ J",
      "c": "3.6 × 10³ J",
      "d": "3.6 × 10⁵ J"
    },
    "answer": "b",
    "correct_text": "3.6 × 10⁶ J",
    "formula": "1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J",
    "steps": [
      "1 kW = 1000 J/s and 1 hour = 3600 seconds.",
      "1 kWh = 1000 × 3600 = 3,600,000 J = 3.6 × 10⁶ J."
    ],
    "trick": "Memorize: 1 kWh = 3.6 × 10⁶ J (asked in almost every Railway cycle!).",
    "id": 50
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Physics Numerical",
    "question": "Three resistors of 2 Ω, 3 Ω, and 6 Ω are connected in parallel. What is their equivalent resistance?",
    "options": {
      "a": "0.5 Ω",
      "b": "11 Ω",
      "c": "2 Ω",
      "d": "1 Ω"
    },
    "answer": "d",
    "correct_text": "1 Ω",
    "formula": "1/R_eq = 1/R₁ + 1/R₂ + 1/R₃",
    "steps": [
      "1/R_eq = 1/2 + 1/3 + 1/6.",
      "Take LCM = 6: 1/R_eq = (3 + 2 + 1) / 6 = 6 / 6 = 1.",
      "Therefore, R_eq = 1 Ω."
    ],
    "trick": "Classic NCERT triplet (2, 3, 6) in parallel ALWAYS equals 1 Ω! (In series = 11 Ω.)",
    "id": 51
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Physics Numerical",
    "question": "A copper wire of resistance 5 Ω is stretched uniformly so that its length becomes 3 times its original length (volume unchanged). What is its new resistance?",
    "options": {
      "a": "45 Ω",
      "b": "25 Ω",
      "c": "15 Ω",
      "d": "5/9 Ω"
    },
    "answer": "a",
    "correct_text": "45 Ω",
    "formula": "When stretched to n times length, R_new = n² × R_old",
    "steps": [
      "Volume V = A × L stays constant. If L becomes 3L, cross-sectional area A becomes A/3.",
      "R_new = ρ(3L)/(A/3) = 9 × (ρL/A) = 9 × R_old.",
      "R_new = 9 × 5 = 45 Ω."
    ],
    "trick": "Wire stretched n times ⇒ Resistance becomes n²R = 3² × 5 = 45 Ω in 2 seconds!",
    "id": 52
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Physics Numerical",
    "question": "How much heat is generated in a 10 Ω resistor when a current of 2 A flows through it for 5 minutes?",
    "options": {
      "a": "24,000 J",
      "b": "200 J",
      "c": "12,000 J",
      "d": "6,000 J"
    },
    "answer": "c",
    "correct_text": "12,000 J",
    "formula": "Joule's Law of Heating: H = I² R t",
    "steps": [
      "Given: I = 2 A, R = 10 Ω, t = 5 minutes = 5 × 60 = 300 s.",
      "H = (2)² × 10 × 300 = 4 × 10 × 300 = 12,000 Joules (12 kJ)."
    ],
    "trick": "Don't forget minutes → seconds! 4 × 10 × 300 = 12,000 J.",
    "id": 53
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Physics Numerical",
    "question": "A person is prescribed a corrective lens of power −2.5 D. What is the focal length and nature of this lens?",
    "options": {
      "a": "−25 cm, Concave lens (for Myopia)",
      "b": "+40 cm, Convex lens (for Hypermetropia)",
      "c": "+25 cm, Convex lens (for Presbyopia)",
      "d": "−40 cm, Concave lens (for Myopia)"
    },
    "answer": "d",
    "correct_text": "−40 cm, Concave lens (for Myopia)",
    "formula": "f (in cm) = 100 / P (in Dioptres)",
    "steps": [
      "Given Power P = −2.5 D.",
      "f = 100 / (−2.5) = −40 cm (or −0.4 m).",
      "Negative focal length/power indicates a Concave (diverging) lens, used to correct Myopia (near-sightedness)."
    ],
    "trick": "Negative Power = Concave = Myopia! f = 100 / −2.5 = −40 cm.",
    "id": 54
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Physics Numerical",
    "question": "An object is placed 30 cm in front of a concave mirror of focal length 15 cm. Where is the image formed?",
    "options": {
      "a": "At infinity",
      "b": "30 cm behind the mirror (virtual, erect)",
      "c": "15 cm in front of the mirror (real, diminished)",
      "d": "30 cm in front of the mirror (real, inverted, same size)"
    },
    "answer": "d",
    "correct_text": "30 cm in front of the mirror (real, inverted, same size)",
    "formula": "1/v + 1/u = 1/f (Radius of curvature R = 2f)",
    "steps": [
      "Here f = −15 cm, so center of curvature C is at 2f = −30 cm.",
      "The object is placed right at C (u = −30 cm).",
      "1/v = 1/f − 1/u = 1/(−15) − 1/(−30) = −2/30 + 1/30 = −1/30 ⇒ v = −30 cm.",
      "Image forms at C (30 cm in front), real, inverted, and exact same size (m = −1)."
    ],
    "trick": "u = 2f means object is AT Center of Curvature C → image ALWAYS forms at C (30 cm in front), same size!",
    "id": 55
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Physics Numerical",
    "question": "Light enters from air into glass having a refractive index of 1.50. What is the speed of light in glass? (Speed of light in vacuum c = 3 × 10⁸ m/s)",
    "options": {
      "a": "1.5 × 10⁸ m/s",
      "b": "2.25 × 10⁸ m/s",
      "c": "4.5 × 10⁸ m/s",
      "d": "2 × 10⁸ m/s"
    },
    "answer": "d",
    "correct_text": "2 × 10⁸ m/s",
    "formula": "Refractive Index n = c / v ⇒ v = c / n",
    "steps": [
      "Given c = 3 × 10⁸ m/s and n = 1.50.",
      "v = (3 × 10⁸) / 1.50 = 2 × 10⁸ m/s."
    ],
    "trick": "Divide 3 × 10⁸ by 1.5 → 2 × 10⁸ m/s instantly! (Direct NCERT Class 10 Example.)",
    "id": 56
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Physics Numerical",
    "question": "If the mass of an object on Earth is 60 kg, what will be its mass and weight on the Moon? (Take g_earth = 10 m/s²)",
    "options": {
      "a": "Mass = 60 kg, Weight = 100 N",
      "b": "Mass = 10 kg, Weight = 60 N",
      "c": "Mass = 60 kg, Weight = 600 N",
      "d": "Mass = 10 kg, Weight = 100 N"
    },
    "answer": "a",
    "correct_text": "Mass = 60 kg, Weight = 100 N",
    "formula": "Mass is invariant; Weight on Moon = (1/6) × Weight on Earth",
    "steps": [
      "Mass never changes with location: Mass on Moon = 60 kg.",
      "Weight on Earth = m × g = 60 × 10 = 600 N.",
      "Weight on Moon = 600 / 6 = 100 N."
    ],
    "trick": "Classic RRB trap: Mass stays 60 kg! Only Weight divides by 6 → 600/6 = 100 N.",
    "id": 57
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Physics Numerical",
    "question": "A bullet of mass 20 g is fired horizontally with a velocity of 150 m/s from a pistol of mass 2 kg. What is the recoil velocity of the pistol?",
    "options": {
      "a": "3.0 m/s",
      "b": "1.5 m/s",
      "c": "0.75 m/s",
      "d": "15 m/s"
    },
    "answer": "b",
    "correct_text": "1.5 m/s",
    "formula": "Conservation of Momentum: M × V = m × v",
    "steps": [
      "Convert bullet mass to kg: m = 20 g = 0.02 kg. Pistol mass M = 2 kg.",
      "By conservation of momentum: M × V = m × v.",
      "2 × V = 0.02 × 150 = 3 ⇒ V = 3 / 2 = 1.5 m/s (opposite direction)."
    ],
    "trick": "0.02 × 150 = 3; divide by 2 kg = 1.5 m/s! (Direct NCERT Class 9 example.)",
    "id": 58
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Physics Numerical",
    "question": "A sound wave has a frequency of 2 kHz and a wavelength of 35 cm. How long will it take to travel 1.4 km?",
    "options": {
      "a": "1 second",
      "b": "0.5 seconds",
      "c": "4 seconds",
      "d": "2 seconds"
    },
    "answer": "d",
    "correct_text": "2 seconds",
    "formula": "Wave speed v = f × λ ; Time = Distance / v",
    "steps": [
      "Frequency f = 2 kHz = 2000 Hz; Wavelength λ = 35 cm = 0.35 m.",
      "Wave speed v = 2000 × 0.35 = 700 m/s.",
      "Distance = 1.4 km = 1400 m.",
      "Time = 1400 / 700 = 2 seconds."
    ],
    "trick": "v = 2000 × 0.35 = 700 m/s → 1400 / 700 = 2 s!",
    "id": 59
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Physics Numerical",
    "question": "What is the minimum distance required from a reflecting surface to hear a distinct echo in air (taking speed of sound = 344 m/s)?",
    "options": {
      "a": "8.6 m",
      "b": "15.0 m",
      "c": "17.2 m",
      "d": "34.4 m"
    },
    "answer": "c",
    "correct_text": "17.2 m",
    "formula": "2d = v × t (Persistence of hearing t = 0.1 s)",
    "steps": [
      "Human ear retains a sound sensation for 0.1 s.",
      "Total round-trip distance 2d = 344 × 0.1 = 34.4 m.",
      "Minimum one-way distance d = 34.4 / 2 = 17.2 m."
    ],
    "trick": "344 × 0.1 / 2 = 17.2 m (or 17 m if v = 340 m/s).",
    "id": 60
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Physics Numerical",
    "question": "A porter lifts a luggage of 15 kg from the ground and puts it on his head 1.5 m above the ground. Calculate the work done by him on the luggage (g = 10 m/s²).",
    "options": {
      "a": "150 J",
      "b": "0 J",
      "c": "225 J",
      "d": "22.5 J"
    },
    "answer": "c",
    "correct_text": "225 J",
    "formula": "Work done against gravity W = m g h",
    "steps": [
      "Given: m = 15 kg, g = 10 m/s², h = 1.5 m.",
      "W = 15 × 10 × 1.5 = 225 J.",
      "(Note: Once on his head, walking horizontally does 0 work against gravity since θ = 90° and cos 90° = 0.)"
    ],
    "trick": "Lifting vertically = mgh = 15×10×1.5 = 225 J. Walking horizontally with load = 0 J!",
    "id": 61
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Physics Numerical",
    "question": "How much work is done in moving a charge of 2 Coulombs across two points having a potential difference of 12 V?",
    "options": {
      "a": "24 J",
      "b": "14 J",
      "c": "0.16 J",
      "d": "6 J"
    },
    "answer": "a",
    "correct_text": "24 J",
    "formula": "W = V × Q",
    "steps": [
      "Potential difference V = W / Q ⇒ W = V × Q.",
      "W = 12 V × 2 C = 24 Joules."
    ],
    "trick": "W = VQ = 12 × 2 = 24 J (exact NCERT Class 10 Ch. 12 Example 12.2!).",
    "id": 62
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Physics Numerical",
    "question": "A current of 0.5 A is drawn by a filament of an electric bulb for 10 minutes. Find the amount of electric charge that flows through the circuit.",
    "options": {
      "a": "600 C",
      "b": "150 C",
      "c": "5 C",
      "d": "300 C"
    },
    "answer": "d",
    "correct_text": "300 C",
    "formula": "Q = I × t",
    "steps": [
      "Current I = 0.5 A, Time t = 10 min = 10 × 60 = 600 seconds.",
      "Charge Q = 0.5 × 600 = 300 Coulombs."
    ],
    "trick": "0.5 × 600 = 300 C (Direct NCERT Class 10 Example 12.1!).",
    "id": 63
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Physics Concept",
    "question": "Which rule is used to determine the direction of force acting on a current-carrying conductor placed in a magnetic field (principle of an electric motor)?",
    "options": {
      "a": "Fleming's Right-Hand Rule",
      "b": "Fleming's Left-Hand Rule",
      "c": "Maxwell's Right-Hand Thumb Rule",
      "d": "Lenz's Law"
    },
    "answer": "b",
    "correct_text": "Fleming's Left-Hand Rule",
    "formula": "Left Hand = Motor (Force) | Right Hand = Generator (Induced Current)",
    "steps": [
      "In Fleming's Left-Hand Rule: Thumb = Force/Motion, Forefinger = Magnetic Field, Middle finger = Current.",
      "Fleming's Right-Hand Rule gives the direction of induced current in an electric generator."
    ],
    "trick": "Memory hack: Motor = Left Hand (ML) | Generator = Right Hand (GR)!",
    "id": 64
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Physics Concept",
    "question": "What is the standard frequency of domestic Alternating Current (AC) power supply in India?",
    "options": {
      "a": "220 Hz",
      "b": "60 Hz",
      "c": "50 Hz",
      "d": "100 Hz"
    },
    "answer": "c",
    "correct_text": "50 Hz",
    "formula": "Indian Domestic AC: 220 V, 50 Hz (reverses direction 100 times/sec)",
    "steps": [
      "India uses 220 V AC at 50 Hz frequency (meaning 50 complete cycles per second).",
      "Note: AC changes direction twice per cycle, so at 50 Hz it reverses direction 100 times per second."
    ],
    "trick": "India = 220V, 50 Hz (USA = 110V, 60 Hz). Reversals/sec = 2 × 50 = 100!",
    "id": 65
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Physics Numerical",
    "question": "A stone is dropped from the top of a tower and reaches the ground in 4 seconds. Calculate the height of the tower (take g = 10 m/s²).",
    "options": {
      "a": "20 m",
      "b": "40 m",
      "c": "80 m",
      "d": "160 m"
    },
    "answer": "c",
    "correct_text": "80 m",
    "formula": "h = ut + ½ g t² (u = 0 for dropped body)",
    "steps": [
      "Initial velocity u = 0, t = 4 s, g = 10 m/s².",
      "h = 0 + ½ × 10 × (4)² = 5 × 16 = 80 m."
    ],
    "trick": "For dropped object (g=10): h = 5t² = 5 × 16 = 80 m in 2 seconds!",
    "id": 66
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Physics Concept",
    "question": "Which type of mirror is used as a rear-view mirror in vehicles, and why?",
    "options": {
      "a": "Plane mirror — produces exact size images",
      "b": "Convex mirror — always forms erect, diminished images with a wider field of view",
      "c": "Concave mirror — magnifies distant objects",
      "d": "Convex mirror — forms real and inverted images"
    },
    "answer": "b",
    "correct_text": "Convex mirror — always forms erect, diminished images with a wider field of view",
    "formula": "Convex Mirror: Rear-view & Street lamps | Concave Mirror: Headlights, Shaving, Dentists",
    "steps": [
      "Convex mirrors diverge light outward and always produce virtual, erect, and diminished images regardless of object distance.",
      "This provides drivers with a much wider field of view of traffic behind them."
    ],
    "trick": "Rear-view = Convex (always erect + wide view). Headlights/Dentist/Solar furnace = Concave!",
    "id": 67
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Physics Concept",
    "question": "Why does the sky appear blue during the day and reddish at sunrise/sunset?",
    "options": {
      "a": "Dispersion of light",
      "b": "Total internal reflection",
      "c": "Scattering of light (Rayleigh scattering)",
      "d": "Refraction of light"
    },
    "answer": "c",
    "correct_text": "Scattering of light (Rayleigh scattering)",
    "formula": "Scattering Intensity ∝ 1 / λ⁴",
    "steps": [
      "Shorter wavelengths (blue) scatter much more strongly than longer wavelengths (red).",
      "At sunrise/sunset, sunlight travels a longer atmospheric path so blue scatters away and red reaches our eyes.",
      "Note: Twinkling of stars is due to Atmospheric Refraction; Rainbow is Dispersion + Refraction + Internal Reflection."
    ],
    "trick": "Blue sky / Red sunset / Tyndall effect = Scattering! Twinkling stars = Atmospheric Refraction!",
    "id": 68
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Physics Numerical",
    "question": "What is the equivalent resistance when two 4 Ω resistors are connected in parallel, and this combination is connected in series with a 3 Ω resistor?",
    "options": {
      "a": "11 Ω",
      "b": "7 Ω",
      "c": "5 Ω",
      "d": "2.4 Ω"
    },
    "answer": "c",
    "correct_text": "5 Ω",
    "formula": "R_parallel (two equal R) = R/2 ; R_total = R_p + R_series",
    "steps": [
      "Two 4 Ω resistors in parallel: R_p = 4 / 2 = 2 Ω.",
      "In series with 3 Ω: R_total = 2 Ω + 3 Ω = 5 Ω."
    ],
    "trick": "Two identical R in parallel = half (4/2 = 2 Ω). Plus 3 Ω in series = 5 Ω!",
    "id": 69
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Physics Concept",
    "question": "Which instrument is used to measure electric current in a circuit, and how is it connected?",
    "options": {
      "a": "Galvanometer, connected in parallel",
      "b": "Ammeter, connected in parallel",
      "c": "Ammeter, connected in series",
      "d": "Voltmeter, connected in series"
    },
    "answer": "c",
    "correct_text": "Ammeter, connected in series",
    "formula": "Ammeter = Series (very low resistance) | Voltmeter = Parallel (very high resistance)",
    "steps": [
      "An Ammeter has very low resistance and is connected in SERIES so the full circuit current passes through it.",
      "A Voltmeter has very high resistance and is connected in PARALLEL across the two points."
    ],
    "trick": "AS-VP: Ammeter-Series, Voltmeter-Parallel!",
    "id": 70
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Chemistry",
    "question": "What is the chemical formula of Plaster of Paris (PoP), obtained by heating Gypsum at 373 K?",
    "options": {
      "a": "CaSO₄ · ½H₂O",
      "b": "Na₂CO₃ · 10H₂O",
      "c": "CaOCl₂",
      "d": "CaSO₄ · 2H₂O"
    },
    "answer": "a",
    "correct_text": "CaSO₄ · ½H₂O",
    "formula": "CaSO₄·2H₂O (Gypsum) —[373 K]→ CaSO₄·½H₂O (PoP) + 1½ H₂O",
    "steps": [
      "Gypsum is Calcium Sulphate Dihydrate (CaSO₄·2H₂O).",
      "Heating Gypsum at 373 K (100°C) removes 1.5 water molecules to form Calcium Sulphate Hemihydrate (CaSO₄·½H₂O), known as Plaster of Paris."
    ],
    "trick": "Half water (½H₂O) = PoP | Two waters (2H₂O) = Gypsum!",
    "id": 71
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Chemistry",
    "question": "Bleaching powder (CaOCl₂) is manufactured by the action of chlorine gas on which substance?",
    "options": {
      "a": "Quick lime (CaO)",
      "b": "Washing soda (Na₂CO₃)",
      "c": "Limestone (CaCO₃)",
      "d": "Dry slaked lime [Ca(OH)₂]"
    },
    "answer": "d",
    "correct_text": "Dry slaked lime [Ca(OH)₂]",
    "formula": "Ca(OH)₂ + Cl₂ → CaOCl₂ + H₂O",
    "steps": [
      "Passing Cl₂ gas over dry slaked lime [Ca(OH)₂] produces Calcium Oxychloride (CaOCl₂), commonly called Bleaching Powder."
    ],
    "trick": "Slaked lime + Cl₂ → Bleaching Powder (CaOCl₂) + Water.",
    "id": 72
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Chemistry",
    "question": "Which acid is present in ant stings and nettle leaf stings?",
    "options": {
      "a": "Lactic acid",
      "b": "Oxalic acid",
      "c": "Methanoic acid (Formic acid)",
      "d": "Tartaric acid"
    },
    "answer": "c",
    "correct_text": "Methanoic acid (Formic acid)",
    "formula": "HCOOH (Methanoic / Formic Acid)",
    "steps": [
      "Ant sting / Nettle sting → Methanoic (Formic) acid.",
      "Tomato → Oxalic acid | Tamarind/Grapes → Tartaric acid | Sour milk/Curd → Lactic acid | Vinegar → Acetic acid."
    ],
    "trick": "Ant = Formic (Methanoic), Tomato = Oxalic, Tamarind = Tartaric — NCERT Class 10 Table 2.3!",
    "id": 73
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Chemistry",
    "question": "Aqua Regia, which can dissolve noble metals like Gold and Platinum, is a freshly prepared mixture of:",
    "options": {
      "a": "Concentrated H₂SO₄ and Concentrated HNO₃ in the ratio 1 : 3",
      "b": "Concentrated H₂SO₄ and Concentrated HCl in the ratio 3 : 1",
      "c": "Concentrated HCl and Concentrated HNO₃ in the ratio 3 : 1",
      "d": "Concentrated HNO₃ and Concentrated HCl in the ratio 3 : 1"
    },
    "answer": "c",
    "correct_text": "Concentrated HCl and Concentrated HNO₃ in the ratio 3 : 1",
    "formula": "Aqua Regia = 3 parts Conc. HCl + 1 part Conc. HNO₃",
    "steps": [
      "Aqua Regia ('Royal Water') consists of 3 parts concentrated Hydrochloric acid (HCl) and 1 part concentrated Nitric acid (HNO₃).",
      "Neither acid alone can dissolve gold, but together they generate nascent chlorine which dissolves gold."
    ],
    "trick": "HCl has 3 letters → 3 parts HCl : 1 part HNO₃!",
    "id": 74
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Chemistry",
    "question": "Which of the following pairs consists exclusively of Amphoteric Oxides (oxides that react with both acids and bases)?",
    "options": {
      "a": "Na₂O and K₂O",
      "b": "CaO and MgO",
      "c": "CO₂ and SO₂",
      "d": "Al₂O₃ and ZnO"
    },
    "answer": "d",
    "correct_text": "Al₂O₃ and ZnO",
    "formula": "Amphoteric Oxides: Aluminium oxide (Al₂O₃) & Zinc oxide (ZnO)",
    "steps": [
      "Most metal oxides (Na₂O, CaO) are basic; non-metal oxides (CO₂, SO₂) are acidic.",
      "Aluminium oxide (Al₂O₃) and Zinc oxide (ZnO) show both acidic and basic behavior to produce salt and water."
    ],
    "trick": "NCERT favorite: Al₂O₃ & ZnO = Amphoteric (think 'Al-Zn'!).",
    "id": 75
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Chemistry",
    "question": "The Thermite reaction used to weld cracked railway tracks involves reducing Iron(III) oxide (Fe₂O₃) using which metal?",
    "options": {
      "a": "Zinc (Zn)",
      "b": "Copper (Cu)",
      "c": "Aluminium (Al)",
      "d": "Carbon (C)"
    },
    "answer": "c",
    "correct_text": "Aluminium (Al)",
    "formula": "Fe₂O₃(s) + 2Al(s) → 2Fe(l) + Al₂O₃(s) + Heat",
    "steps": [
      "Aluminium is more reactive than iron and displaces iron from Fe₂O₃ in a highly exothermic reaction.",
      "The molten iron produced directly joins cracked railway tracks and heavy machine parts."
    ],
    "trick": "Railway track welding = Thermite = Fe₂O₃ + Aluminium (Al)!",
    "id": 76
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Chemistry",
    "question": "Which alloy is made by combining Copper (Cu) and Tin (Sn)?",
    "options": {
      "a": "Brass",
      "b": "Nichrome",
      "c": "Bronze",
      "d": "Solder"
    },
    "answer": "c",
    "correct_text": "Bronze",
    "formula": "Bronze = Cu + Sn | Brass = Cu + Zn | Solder = Pb + Sn",
    "steps": [
      "Bronze = Copper (Cu) + Tin (Sn).",
      "Brass = Copper (Cu) + Zinc (Zn).",
      "Solder = Lead (Pb) + Tin (Sn) — low melting point for welding electrical wires."
    ],
    "trick": "Remember the flip: BraSS has NO 'Z' so it gets Zn (Cu+Zn); BronZe has 'Z' so it does NOT get Zn (Cu+Sn)!",
    "id": 77
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Chemistry",
    "question": "Tooth decay begins when the pH of the mouth falls below which value?",
    "options": {
      "a": "4.0",
      "b": "5.5",
      "c": "7.0",
      "d": "6.8"
    },
    "answer": "b",
    "correct_text": "5.5",
    "formula": "Tooth enamel = Calcium hydroxyapatite (corrodes below pH 5.5)",
    "steps": [
      "Bacteria in the mouth produce acids by degrading sugar and food particles.",
      "When mouth pH drops below 5.5, tooth enamel (hardest substance in the body, calcium hydroxyapatite) starts corroding.",
      "Note: Acid rain has pH < 5.6; Human blood pH is 7.35–7.45."
    ],
    "trick": "Tooth decay < 5.5 | Acid rain < 5.6 | Blood ≈ 7.4!",
    "id": 78
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Chemistry",
    "question": "What is the general formula of Alkynes (hydrocarbons containing a carbon–carbon triple bond)?",
    "options": {
      "a": "CₙH₂ₙ",
      "b": "CₙH₂ₙ₊₁",
      "c": "CₙH₂ₙ₋₂",
      "d": "CₙH₂ₙ₊₂"
    },
    "answer": "c",
    "correct_text": "CₙH₂ₙ₋₂",
    "formula": "Alkanes: CₙH₂ₙ₊₂ | Alkenes: CₙH₂ₙ | Alkynes: CₙH₂ₙ₋₂",
    "steps": [
      "Alkanes (single bond, saturated): CₙH₂ₙ₊₂ (e.g., Methane CH₄).",
      "Alkenes (double bond): CₙH₂ₙ (e.g., Ethene C₂H₄).",
      "Alkynes (triple bond): CₙH₂ₙ₋₂ (e.g., Ethyne/Acetylene C₂H₂)."
    ],
    "trick": "+2, 0, −2 as you go from Alkane → Alkene → Alkyne!",
    "id": 79
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Chemistry",
    "question": "Which non-metal is a good conductor of electricity due to free delocalized electrons in its layered hexagonal structure?",
    "options": {
      "a": "Phosphorus",
      "b": "Sulphur",
      "c": "Graphite",
      "d": "Diamond"
    },
    "answer": "c",
    "correct_text": "Graphite",
    "formula": "Carbon allotropes: Graphite (conducts), Diamond (hardest, insulator), Fullerene (C₆₀)",
    "steps": [
      "In Graphite, each carbon atom is bonded to only 3 other carbon atoms in flat hexagonal sheets, leaving 1 free electron per carbon.",
      "This makes Graphite smooth, slippery, and a good conductor of electricity."
    ],
    "trick": "Conducting non-metal = Graphite! Lustrous non-metal = Iodine! Liquid non-metal = Bromine!",
    "id": 80
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Chemistry",
    "question": "According to the Modern Periodic Law (proposed by Henry Moseley), properties of elements are a periodic function of their:",
    "options": {
      "a": "Atomic Mass",
      "b": "Atomic Number",
      "c": "Neutron Number",
      "d": "Valency"
    },
    "answer": "b",
    "correct_text": "Atomic Number",
    "formula": "Modern Periodic Table (18 Groups, 7 Periods) = Increasing Atomic Number (Z)",
    "steps": [
      "Mendeleev arranged elements by Atomic Mass, whereas Henry Moseley (1913) established Atomic Number (number of protons) as the fundamental property.",
      "The Modern Periodic Table has 18 vertical columns (Groups) and 7 horizontal rows (Periods)."
    ],
    "trick": "Mendeleev = Mass | Moseley (Modern) = Atomic Number!",
    "id": 81
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Chemistry",
    "question": "As we move from left to right across a period in the Modern Periodic Table, what happens to the atomic radius?",
    "options": {
      "a": "It first increases then decreases",
      "b": "It remains constant",
      "c": "It increases",
      "d": "It decreases"
    },
    "answer": "d",
    "correct_text": "It decreases",
    "formula": "Across a Period (L → R): Atomic size DECREASES, Electronegativity INCREASES",
    "steps": [
      "Moving left to right in a period adds electrons to the SAME shell while nuclear charge (protons) increases.",
      "Stronger nuclear pull draws the valence shell closer, so atomic radius decreases.",
      "Moving top to bottom down a group adds new shells, so atomic radius INCREASES."
    ],
    "trick": "Left → Right = Size Shrinks (same shell, stronger nucleus). Top → Bottom = Size Grows (new shells)!",
    "id": 82
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Chemistry Numerical",
    "question": "Calculate the number of moles present in 52 grams of Helium (He). (Atomic mass of He = 4 u)",
    "options": {
      "a": "26 moles",
      "b": "10.4 moles",
      "c": "13 moles",
      "d": "4 moles"
    },
    "answer": "c",
    "correct_text": "13 moles",
    "formula": "Number of moles (n) = Given Mass / Molar Mass",
    "steps": [
      "Molar mass of Helium = 4 g/mol.",
      "n = 52 g / 4 g/mol = 13 moles."
    ],
    "trick": "n = m / M = 52 / 4 = 13 moles (Exact NCERT Class 9 Ch. 3 Example!).",
    "id": 83
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Chemistry Numerical",
    "question": "What is the molecular mass of Nitric Acid (HNO₃)? (Atomic masses: H = 1 u, N = 14 u, O = 16 u)",
    "options": {
      "a": "62 u",
      "b": "98 u",
      "c": "63 u",
      "d": "47 u"
    },
    "answer": "c",
    "correct_text": "63 u",
    "formula": "Molecular Mass = Sum of atomic masses of all atoms",
    "steps": [
      "HNO₃ has 1 H, 1 N, and 3 O atoms.",
      "Molecular mass = 1(1) + 1(14) + 3(16) = 1 + 14 + 48 = 63 u.",
      "(Note: H₂SO₄ = 98 u, CaCO₃ = 100 u, Glucose C₆H₁₂O₆ = 180 u.)"
    ],
    "trick": "1 + 14 + 48 = 63 u. Memorize key masses: H₂O=18, CO₂=44, HNO₃=63, H₂SO₄=98, CaCO₃=100!",
    "id": 84
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Chemistry",
    "question": "Which process is used to convert carbonate ores into metal oxides by heating strongly in the ABSENCE or limited supply of air?",
    "options": {
      "a": "Electrolysis",
      "b": "Roasting",
      "c": "Calcination",
      "d": "Smelting"
    },
    "answer": "c",
    "correct_text": "Calcination",
    "formula": "Carbonate ore + Limited/No air = Calcination | Sulphide ore + Excess air = Roasting",
    "steps": [
      "Calcination: Heating carbonate ores (e.g., ZnCO₃ → ZnO + CO₂) in limited or no air.",
      "Roasting: Heating sulphide ores (e.g., 2ZnS + 3O₂ → 2ZnO + 2SO₂) strongly in excess air."
    ],
    "trick": "C for C: Carbonate = Calcination (no air)! Roasting = Sulphide (excess air)!",
    "id": 85
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Chemistry",
    "question": "To prevent rancidity (oxidation of fats and oils), potato chip packets are flushed with which unreactive gas?",
    "options": {
      "a": "Nitrogen (N₂)",
      "b": "Hydrogen (H₂)",
      "c": "Oxygen (O₂)",
      "d": "Chlorine (Cl₂)"
    },
    "answer": "a",
    "correct_text": "Nitrogen (N₂)",
    "formula": "Antioxidant / Inert flushing gas = Nitrogen",
    "steps": [
      "Fats and oils get oxidized by atmospheric oxygen, causing bad smell and taste (rancidity).",
      "Flushing packets with inert Nitrogen gas displaces oxygen and keeps snacks fresh."
    ],
    "trick": "Chips packets = Nitrogen (inert, prevents oxidation/rancidity).",
    "id": 86
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Chemistry",
    "question": "Atoms of different elements having the SAME mass number (A) but DIFFERENT atomic numbers (Z), such as Argon-40 and Calcium-40, are called:",
    "options": {
      "a": "Isobars",
      "b": "Isotopes",
      "c": "Isotones",
      "d": "Isomers"
    },
    "answer": "a",
    "correct_text": "Isobars",
    "formula": "Isotopes = Same Z | Isobars = Same A (Mass) | Isotones = Same Neutrons (A − Z)",
    "steps": [
      "Isotopes: Same atomic number Z, different mass A (e.g., ¹H, ²H, ³H).",
      "Isobars: Same mass number A, different atomic number Z (e.g., ⁴⁰Ar and ⁴⁰Ca).",
      "Isotones: Same number of neutrons."
    ],
    "trick": "isoToPe = same Protons (Z) | isoTonE = same Neutrons | isoBar = same Bhar (Mass)!",
    "id": 87
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Chemistry",
    "question": "Which baking ingredient is chemically Sodium Hydrogen Carbonate (NaHCO₃) and releases CO₂ gas on heating to make cakes fluffy?",
    "options": {
      "a": "Caustic Soda",
      "b": "Epsom Salt",
      "c": "Washing Soda",
      "d": "Baking Soda"
    },
    "answer": "d",
    "correct_text": "Baking Soda",
    "formula": "2NaHCO₃ —[Heat]→ Na₂CO₃ + H₂O + CO₂↑",
    "steps": [
      "Baking soda is NaHCO₃ (Sodium bicarbonate). Baking powder = Baking soda + mild edible acid (tartaric acid).",
      "Washing soda is Na₂CO₃·10H₂O; Caustic soda is NaOH."
    ],
    "trick": "NaHCO₃ has 'H' → 'B'aking = Bicarbonate (Hydrogen carbonate)!",
    "id": 88
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Biology",
    "question": "Which cell organelles possess their own circular DNA and ribosomes, enabling them to synthesize some of their own proteins?",
    "options": {
      "a": "Lysosomes and Golgi Apparatus",
      "b": "Vacuoles and Endoplasmic Reticulum",
      "c": "Ribosomes and Centrosomes",
      "d": "Mitochondria and Plastids (Chloroplasts)"
    },
    "answer": "d",
    "correct_text": "Mitochondria and Plastids (Chloroplasts)",
    "formula": "Semi-autonomous organelles (own DNA + 70S ribosomes) = Mitochondria & Plastids",
    "steps": [
      "Besides the nucleus, only Mitochondria (powerhouse of cell, makes ATP) and Plastids (in plant cells) contain their own DNA and ribosomes."
    ],
    "trick": "Own DNA pair = Mitochondria + Plastids! (Direct NCERT Class 9 Ch. 5 question.)",
    "id": 89
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Biology",
    "question": "Which cell organelle is known as the 'Suicide Bag of the Cell' because it contains powerful digestive enzymes?",
    "options": {
      "a": "Golgi Body",
      "b": "Mitochondria",
      "c": "Ribosome",
      "d": "Lysosome"
    },
    "answer": "d",
    "correct_text": "Lysosome",
    "formula": "Lysosome = Suicide bag | Mitochondria = Powerhouse | Ribosome = Protein factory",
    "steps": [
      "Lysosomes are membrane-bound sacs filled with hydrolytic enzymes made by the Rough ER.",
      "When a cell gets damaged, lysosomes may burst and digest their own cell."
    ],
    "trick": "Lysosome = Suicide bag | Ribosome = Protein synthesis | Golgi = Packaging & dispatch.",
    "id": 90
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Biology",
    "question": "In plants, which vascular tissue transports food (sucrose) bidirectionally from leaves to other parts of the plant?",
    "options": {
      "a": "Xylem",
      "b": "Parenchyma",
      "c": "Sclerenchyma",
      "d": "Phloem"
    },
    "answer": "d",
    "correct_text": "Phloem",
    "formula": "Phloem = Food (Translocation, uses ATP) | Xylem = Water & Minerals (Unidirectional)",
    "steps": [
      "Phloem transports synthesized food from leaves both upward and downward (translocation) using ATP energy.",
      "Xylem transports water and minerals strictly upward from roots to leaves."
    ],
    "trick": "Ph-loem = F-ood! Xy-lem = Water!",
    "id": 91
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Biology",
    "question": "Which plant hormone is a growth INHIBITOR responsible for wilting of leaves and closing of stomata during stress?",
    "options": {
      "a": "Auxin",
      "b": "Abscisic Acid (ABA)",
      "c": "Gibberellin",
      "d": "Cytokinin"
    },
    "answer": "b",
    "correct_text": "Abscisic Acid (ABA)",
    "formula": "Growth Promoters: Auxin, Gibberellin, Cytokinin | Inhibitor: Abscisic Acid | Ripening gas: Ethylene",
    "steps": [
      "Auxin promotes cell elongation/phototropism; Gibberellin promotes stem growth; Cytokinin promotes cell division.",
      "Abscisic Acid (ABA) inhibits growth and causes wilting of leaves.",
      "Ethylene is the only gaseous plant hormone (fruit ripening)."
    ],
    "trick": "ABA = Anti-growth (Stress hormone) | Ethylene = Fruit ripening gas!",
    "id": 92
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Biology",
    "question": "Where is Bile juice produced in the human body, and what is its primary role in digestion?",
    "options": {
      "a": "Produced by the Gallbladder; digests proteins into amino acids",
      "b": "Produced by the Pancreas; breaks down starch into maltose",
      "c": "Produced by the Liver; emulsifies large fat globules and makes food alkaline",
      "d": "Produced by the Stomach; kills bacteria using HCl"
    },
    "answer": "c",
    "correct_text": "Produced by the Liver; emulsifies large fat globules and makes food alkaline",
    "formula": "Liver produces Bile (stored in Gallbladder) → Emulsification of Fats",
    "steps": [
      "Bile is synthesized by the Liver and only STORED/concentrated in the Gallbladder.",
      "Bile contains NO digestive enzymes, but bile salts emulsify large fat droplets into small globules so lipase can act on them."
    ],
    "trick": "Classic NTPC trap: Liver MAKES bile, Gallbladder only STORES it! Function = Fat emulsification.",
    "id": 93
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Biology",
    "question": "Muscle cramps during sudden vigorous physical exercise are caused by the accumulation of which substance due to lack of oxygen?",
    "options": {
      "a": "Acetic acid",
      "b": "Lactic acid",
      "c": "Pyruvate",
      "d": "Ethanol"
    },
    "answer": "b",
    "correct_text": "Lactic acid",
    "formula": "Glucose → Pyruvate —[Lack of O₂ in muscle]→ Lactic Acid (3-carbon) + Energy",
    "steps": [
      "In muscle cells under oxygen shortage, 3-carbon pyruvate converts into 3-carbon Lactic Acid instead of CO₂ + H₂O.",
      "Note: In Yeast fermentation (absence of O₂), pyruvate converts into Ethanol (2-carbon) + CO₂."
    ],
    "trick": "Muscles (low O₂) = Lactic acid (cramps) | Yeast (no O₂) = Ethanol + CO₂!",
    "id": 94
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Biology",
    "question": "Which part of the human brain is responsible for maintaining posture, balance, and precision of voluntary actions (like riding a bicycle)?",
    "options": {
      "a": "Medulla oblongata",
      "b": "Hypothalamus",
      "c": "Cerebellum",
      "d": "Cerebrum"
    },
    "answer": "c",
    "correct_text": "Cerebellum",
    "formula": "Hindbrain: Cerebellum (Balance/Posture) & Medulla (Involuntary: BP, vomiting, salivation)",
    "steps": [
      "Cerebellum (part of hindbrain) controls posture, equilibrium, and fine motor coordination.",
      "Medulla controls involuntary functions (BP, heartbeat, salivation, vomiting).",
      "Cerebrum (forebrain) is the main thinking/memory center."
    ],
    "trick": "Cere-BELLUM = Balance! Medulla = Involuntary! Cerebrum = Thinking/Memory!",
    "id": 95
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Biology",
    "question": "What is the functional filtration unit of the human kidney?",
    "options": {
      "a": "Neuron",
      "b": "Nephron",
      "c": "Villi",
      "d": "Alveoli"
    },
    "answer": "b",
    "correct_text": "Nephron",
    "formula": "Kidney → Nephron | Nervous system → Neuron | Lungs → Alveoli | Small intestine → Villi",
    "steps": [
      "Each kidney contains about 1 million Nephrons (Bowman's capsule + Glomerulus + Tubule) that filter urea from blood."
    ],
    "trick": "Kidney = Nephron (Nephrology) | Brain = Neuron (Neurology)!",
    "id": 96
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Biology",
    "question": "Deficiency of which vitamin causes Pernicious Anaemia, and which metal ion is at the center of this vitamin?",
    "options": {
      "a": "Vitamin B1 (Thiamine) — Iron (Fe)",
      "b": "Vitamin C (Ascorbic acid) — Zinc (Zn)",
      "c": "Vitamin K (Phylloquinone) — Calcium (Ca)",
      "d": "Vitamin B12 (Cyanocobalamin) — Cobalt (Co)"
    },
    "answer": "d",
    "correct_text": "Vitamin B12 (Cyanocobalamin) — Cobalt (Co)",
    "formula": "Vitamin B12 = Cyanocobalamin (contains Cobalt)",
    "steps": [
      "Vitamin B12 contains Cobalt (Co) and is essential for RBC maturation; its deficiency causes Pernicious Anaemia.",
      "Vitamin B1 = Beriberi | Vitamin C = Scurvy | Vitamin D = Rickets | Vitamin K = Non-clotting of blood."
    ],
    "trick": "Cyano-COBAL-amin → Cobalt = Vitamin B12!",
    "id": 97
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Biology",
    "question": "Which hormone secreted by the Pancreas regulates blood sugar levels, and whose deficiency causes Diabetes mellitus?",
    "options": {
      "a": "Thyroxine",
      "b": "Adrenaline",
      "c": "Testosterone",
      "d": "Insulin"
    },
    "answer": "d",
    "correct_text": "Insulin",
    "formula": "Beta cells of Islets of Langerhans (Pancreas) → Insulin",
    "steps": [
      "Pancreas is a mixed (heterocrine) gland. Its beta cells secrete Insulin to lower blood glucose.",
      "Thyroxine (Thyroid) needs Iodine (deficiency → Goitre); Adrenaline (Adrenal) is the 'fight-or-flight' hormone."
    ],
    "trick": "Pancreas → Insulin (Diabetes) | Thyroid → Thyroxine (Iodine/Goitre) | Adrenal → Emergency!",
    "id": 98
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Biology",
    "question": "In Mendel's dihybrid cross (RrYy × RrYy), what is the phenotypic ratio obtained in the F₂ generation?",
    "options": {
      "a": "1 : 1 : 1 : 1",
      "b": "9 : 3 : 3 : 1",
      "c": "1 : 2 : 1",
      "d": "3 : 1"
    },
    "answer": "b",
    "correct_text": "9 : 3 : 3 : 1",
    "formula": "Monohybrid Phenotypic = 3:1 (Genotypic 1:2:1) | Dihybrid Phenotypic = 9:3:3:1",
    "steps": [
      "Crossing round-yellow (RRYY) with wrinkled-green (rryy) pea plants yields all RrYy in F₁.",
      "Self-pollinating F₁ produces 9 Round-Yellow : 3 Round-Green : 3 Wrinkled-Yellow : 1 Wrinkled-Green in F₂."
    ],
    "trick": "Monohybrid = 3:1 | Dihybrid = (3:1)² = 9:3:3:1!",
    "id": 99
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Biology Numerical",
    "question": "According to Lindeman's 10% Law of energy transfer in a food chain (Grass → Deer → Lion), if Grass has 10,000 J of energy, how much energy is available to the Lion?",
    "options": {
      "a": "1 J",
      "b": "10 J",
      "c": "100 J",
      "d": "1,000 J"
    },
    "answer": "c",
    "correct_text": "100 J",
    "formula": "Only 10% of energy passes to the next trophic level",
    "steps": [
      "Trophic Level 1 (Grass / Producer) = 10,000 J.",
      "Trophic Level 2 (Deer / Primary Consumer) = 10% of 10,000 = 1,000 J.",
      "Trophic Level 3 (Lion / Secondary Consumer) = 10% of 1,000 = 100 J."
    ],
    "trick": "Two trophic jumps (Grass → Deer → Lion): drop 2 zeros from 10,000 → 100 J!",
    "id": 100
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Biology",
    "question": "Which blood vessel carries OXYGENATED blood from the lungs back to the left atrium of the human heart?",
    "options": {
      "a": "Pulmonary Artery",
      "b": "Pulmonary Vein",
      "c": "Vena Cava",
      "d": "Aorta"
    },
    "answer": "b",
    "correct_text": "Pulmonary Vein",
    "formula": "Exceptions: Pulmonary Artery = Deoxygenated | Pulmonary Vein = Oxygenated",
    "steps": [
      "Normally arteries carry oxygenated blood and veins carry deoxygenated blood.",
      "The Pulmonary circuit is the exact reverse: Pulmonary Artery takes deoxygenated blood to lungs, and Pulmonary Vein brings oxygenated blood to the left atrium."
    ],
    "trick": "Pulmonary = Opposite! Pulmonary Vein carries O₂-rich blood!",
    "id": 101
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Biology",
    "question": "Which pigment gives red blood cells (RBCs) their color and binds oxygen, and which metal atom is present in it?",
    "options": {
      "a": "Haemoglobin — Iron (Fe)",
      "b": "Bilirubin — Iron (Fe)",
      "c": "Chlorophyll — Magnesium (Mg)",
      "d": "Haemoglobin — Copper (Cu)"
    },
    "answer": "a",
    "correct_text": "Haemoglobin — Iron (Fe)",
    "formula": "Haemoglobin = Iron (Fe) | Chlorophyll = Magnesium (Mg) | Vitamin B12 = Cobalt (Co)",
    "steps": [
      "Haemoglobin contains Iron (Fe²⁺) to transport oxygen as oxyhaemoglobin.",
      "In plants, Chlorophyll contains Magnesium (Mg) at the center of its porphyrin ring."
    ],
    "trick": "Master Bio-Metal Triad: Haemoglobin = Fe | Chlorophyll = Mg | Vit B12 = Co!",
    "id": 102
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Biology",
    "question": "Which organism reproduces asexually by 'Multiple Fission' inside a protective cyst, and causes Malaria in humans?",
    "options": {
      "a": "Amoeba",
      "b": "Plasmodium",
      "c": "Yeast",
      "d": "Planaria"
    },
    "answer": "b",
    "correct_text": "Plasmodium",
    "formula": "Plasmodium = Multiple Fission | Amoeba/Leishmania = Binary Fission | Hydra/Yeast = Budding | Planaria = Regeneration",
    "steps": [
      "Plasmodium (malarial parasite, transmitted by female Anopheles mosquito) divides into many daughter cells simultaneously via Multiple Fission.",
      "Leishmania (causes Kala-azar) reproduces by longitudinal binary fission."
    ],
    "trick": "NCERT Ch. 8 exact match: Plasmodium = Multiple Fission | Planaria = Regeneration!",
    "id": 103
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Biology",
    "question": "What is the normal systolic and diastolic blood pressure of a healthy adult human, and which instrument measures it?",
    "options": {
      "a": "140 / 90 mm Hg — Barometer",
      "b": "80 / 120 mm Hg — Stethoscope",
      "c": "110 / 70 mm Hg — Electrocardiograph",
      "d": "120 / 80 mm Hg — Sphygmomanometer"
    },
    "answer": "d",
    "correct_text": "120 / 80 mm Hg — Sphygmomanometer",
    "formula": "Systolic (contraction) = 120 mm Hg | Diastolic (relaxation) = 80 mm Hg",
    "steps": [
      "Ventricular contraction (systole) produces 120 mm Hg; relaxation (diastole) produces 80 mm Hg.",
      "Measured using a Sphygmomanometer."
    ],
    "trick": "120/80 mm Hg (higher number first = Systolic) measured by Sphygmomanometer!",
    "id": 104
  },
  {
    "category": "science",
    "category_name": "CBSE 9–10 Science & Numericals",
    "exam": "RRB NTPC Biology",
    "question": "Which enzyme present in human saliva begins the chemical digestion of starch into maltose sugar right inside the mouth?",
    "options": {
      "a": "Lipase",
      "b": "Salivary Amylase (Ptyalin)",
      "c": "Pepsin",
      "d": "Trypsin"
    },
    "answer": "b",
    "correct_text": "Salivary Amylase (Ptyalin)",
    "formula": "Mouth: Amylase (Starch) | Stomach: Pepsin (Protein, acidic) | Pancreas: Trypsin & Lipase",
    "steps": [
      "Salivary glands secrete Salivary Amylase (Ptyalin), which breaks complex starch into simple sugar (maltose) in the buccal cavity.",
      "Pepsin acts on proteins in the acidic stomach; Trypsin acts on proteins in the alkaline small intestine."
    ],
    "trick": "Digestion of carbohydrates STARTS IN THE MOUTH via Salivary Amylase!",
    "id": 105
  },
  {
    "category": "computer",
    "category_name": "Computer & Abbreviations",
    "exam": "RRB NTPC CEN 06/2026 Focus",
    "question": "In computer networking, what does the abbreviation 'DNS' stand for?",
    "options": {
      "a": "Data Network Service",
      "b": "Dynamic Naming Standard",
      "c": "Digital Node Server",
      "d": "Domain Name System"
    },
    "answer": "d",
    "correct_text": "Domain Name System",
    "formula": "DNS translates human-readable domain names (e.g., rrbapply.gov.in) into IP addresses",
    "steps": [
      "DNS acts like the phonebook of the Internet.",
      "It maps domain names to numerical IP addresses (IPv4/IPv6) using Port 53."
    ],
    "trick": "DNS = Domain Name System (Internet's phonebook, Port 53).",
    "id": 106
  },
  {
    "category": "computer",
    "category_name": "Computer & Abbreviations",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "What does 'BIOS' stand for in a personal computer?",
    "options": {
      "a": "Binary Integrated Operating Software",
      "b": "Basic Input Output System",
      "c": "Built-In Operating System",
      "d": "Base Internal Output Service"
    },
    "answer": "b",
    "correct_text": "Basic Input Output System",
    "formula": "BIOS (stored in ROM/Flash) runs POST (Power-On Self-Test) during booting",
    "steps": [
      "BIOS is firmware stored on the motherboard ROM chip.",
      "When powered on, BIOS executes POST (Power-On Self-Test) and loads the Operating System into RAM."
    ],
    "trick": "BIOS = Basic Input Output System → stored in ROM → performs POST!",
    "id": 107
  },
  {
    "category": "computer",
    "category_name": "Computer & Abbreviations",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "Which protocol is primarily used for SENDING outgoing emails from a client to a mail server?",
    "options": {
      "a": "IMAP",
      "b": "FTP",
      "c": "POP3",
      "d": "SMTP"
    },
    "answer": "d",
    "correct_text": "SMTP",
    "formula": "Send Mail = SMTP | Receive/Retrieve Mail = POP3 & IMAP",
    "steps": [
      "SMTP (Simple Mail Transfer Protocol) handles sending/pushing outgoing emails.",
      "POP3 (Post Office Protocol v3) and IMAP (Internet Message Access Protocol) are used for retrieving/receiving emails."
    ],
    "trick": "S in SMTP = SEND mail! POP3 & IMAP = Pull/Receive mail!",
    "id": 108
  },
  {
    "category": "computer",
    "category_name": "Computer & Abbreviations",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "How many bits make 1 Nibble, and how many bytes make 1 Kilobyte (KB) in binary computer memory?",
    "options": {
      "a": "8 bits = 1 Nibble ; 1000 bytes = 1 KB",
      "b": "4 bits = 1 Nibble ; 512 bytes = 1 KB",
      "c": "2 bits = 1 Nibble ; 1024 bytes = 1 KB",
      "d": "4 bits = 1 Nibble ; 1024 bytes = 1 KB"
    },
    "answer": "d",
    "correct_text": "4 bits = 1 Nibble ; 1024 bytes = 1 KB",
    "formula": "1 Nibble = 4 bits | 1 Byte = 8 bits | 1 KB = 2¹⁰ = 1024 Bytes",
    "steps": [
      "A Nibble is half a Byte = 4 bits (represents 1 hexadecimal digit).",
      "1 Kilobyte (KB) = 2¹⁰ = 1,024 Bytes."
    ],
    "trick": "Nibble = 4 bits (half-byte) | Byte = 8 bits | Every memory jump = × 1024!",
    "id": 109
  },
  {
    "category": "computer",
    "category_name": "Computer & Abbreviations",
    "exam": "RRB NTPC Numerical",
    "question": "Convert the decimal number 25 into its binary equivalent.",
    "options": {
      "a": "10011",
      "b": "11001",
      "c": "10101",
      "d": "11010"
    },
    "answer": "b",
    "correct_text": "11001",
    "formula": "Sum of powers of 2: 16 + 8 + 4 + 2 + 1",
    "steps": [
      "Express 25 as powers of 2: 25 = 16 + 8 + 0 + 0 + 1 = 1×2⁴ + 1×2³ + 0×2² + 0×2¹ + 1×2⁰.",
      "Reading the coefficients left to right gives 11001₂."
    ],
    "trick": "8-4-2-1 shortcut: 16(1) + 8(1) + 4(0) + 2(0) + 1(1) = 11001 in 3 seconds!",
    "id": 110
  },
  {
    "category": "computer",
    "category_name": "Computer & Abbreviations",
    "exam": "RRB NTPC Numerical",
    "question": "What is the decimal equivalent of the binary number (10110)₂?",
    "options": {
      "a": "22",
      "b": "18",
      "c": "26",
      "d": "20"
    },
    "answer": "a",
    "correct_text": "22",
    "formula": "Multiply each bit by 16, 8, 4, 2, 1 respectively",
    "steps": [
      "Place values for 1 0 1 1 0 are 16, 8, 4, 2, 1.",
      "Sum where bit is 1: 16 + 4 + 2 = 22."
    ],
    "trick": "16 + 0 + 4 + 2 + 0 = 22!",
    "id": 111
  },
  {
    "category": "computer",
    "category_name": "Computer & Abbreviations",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "Which electronic component was the defining hardware technology of Second-Generation computers (1956–1963)?",
    "options": {
      "a": "Transistors",
      "b": "Integrated Circuits (ICs)",
      "c": "Vacuum Tubes",
      "d": "Microprocessors (VLSI)"
    },
    "answer": "a",
    "correct_text": "Transistors",
    "formula": "1st: Vacuum Tubes → 2nd: Transistors → 3rd: ICs → 4th: Microprocessors → 5th: AI/ULSI",
    "steps": [
      "Transistors (invented at Bell Labs) replaced bulky Vacuum Tubes in 2nd generation computers, making them smaller, faster, and cooler."
    ],
    "trick": "V-T-I-M-A: Vacuum, Transistor, IC, Microprocessor, AI!",
    "id": 112
  },
  {
    "category": "computer",
    "category_name": "Computer & Abbreviations",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "In the OSI (Open Systems Interconnection) 7-layer networking model, which layer is responsible for logical addressing (IP) and routing of packets?",
    "options": {
      "a": "Network Layer (Layer 3)",
      "b": "Session Layer (Layer 5)",
      "c": "Transport Layer (Layer 4)",
      "d": "Data Link Layer (Layer 2)"
    },
    "answer": "a",
    "correct_text": "Network Layer (Layer 3)",
    "formula": "Layer 2 = MAC/Switch | Layer 3 = IP/Router | Layer 4 = TCP/UDP",
    "steps": [
      "Layer 3 (Network Layer) handles IP addressing and packet routing via Routers.",
      "Layer 2 (Data Link) handles physical MAC addresses and Switches; Layer 4 (Transport) handles end-to-end delivery via TCP/UDP."
    ],
    "trick": "L1 Hub → L2 Switch (MAC) → L3 Router (IP) → L4 TCP/UDP!",
    "id": 113
  },
  {
    "category": "computer",
    "category_name": "Computer & Abbreviations",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "What does 'EEPROM' stand for in computer memory?",
    "options": {
      "a": "Electrically Erasable Programmable Read-Only Memory",
      "b": "Electronic Extended Processing Read-Only Memory",
      "c": "Enhanced Erasable Primary Read-Only Memory",
      "d": "Electrically Encoded Permanent Random Output Memory"
    },
    "answer": "a",
    "correct_text": "Electrically Erasable Programmable Read-Only Memory",
    "formula": "EPROM = UV light erasable | EEPROM = Electrically erasable (basis of Flash/Pen drives)",
    "steps": [
      "EEPROM is non-volatile ROM whose contents can be erased and reprogrammed electrically without removing the chip.",
      "Modern Flash memory (USB drives, SSDs) evolved from EEPROM."
    ],
    "trick": "Double E = Electrically Erasable + PROM!",
    "id": 114
  },
  {
    "category": "computer",
    "category_name": "Computer & Abbreviations",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "Which type of memory is the FASTEST and located directly inside the CPU?",
    "options": {
      "a": "Cache Memory",
      "b": "CPU Registers",
      "c": "SSD",
      "d": "RAM"
    },
    "answer": "b",
    "correct_text": "CPU Registers",
    "formula": "Speed order: Registers > Cache > RAM > SSD > HDD",
    "steps": [
      "Registers are tiny high-speed storage locations built directly inside the CPU core (e.g., Accumulator, Program Counter).",
      "Next fastest is Cache Memory (made of SRAM), followed by Main Memory (DRAM)."
    ],
    "trick": "Registers sit INSIDE CPU (fastest) → Cache sits BESIDE CPU (2nd fastest)!",
    "id": 115
  },
  {
    "category": "computer",
    "category_name": "Computer & Abbreviations",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "What is the exact difference between HTTP and HTTPS?",
    "options": {
      "a": "HTTP is faster because it uses fiber optics only",
      "b": "HTTPS works only offline without an IP address",
      "c": "HTTPS encrypts data using SSL/TLS security certificates (Port 443)",
      "d": "HTTPS stands for HyperText Transfer Protocol Standard"
    },
    "answer": "c",
    "correct_text": "HTTPS encrypts data using SSL/TLS security certificates (Port 443)",
    "formula": "HTTP = Port 80 (unencrypted) | HTTPS = Port 443 (Secure via SSL/TLS)",
    "steps": [
      "The 'S' in HTTPS stands for Secure.",
      "HTTPS encrypts web traffic between browser and server using TLS/SSL on TCP Port 443."
    ],
    "trick": "S = Secure (SSL/TLS) | HTTP = Port 80, HTTPS = Port 443!",
    "id": 116
  },
  {
    "category": "computer",
    "category_name": "Computer & Abbreviations",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "In Windows, which keyboard shortcut opens the Task Manager directly?",
    "options": {
      "a": "Ctrl + Shift + Esc",
      "b": "Ctrl + Alt + Tab",
      "c": "Windows + R",
      "d": "Alt + F4"
    },
    "answer": "a",
    "correct_text": "Ctrl + Shift + Esc",
    "formula": "Ctrl+Shift+Esc = Task Manager | Win+R = Run | Win+D = Show Desktop | Alt+F4 = Close Window",
    "steps": [
      "Ctrl + Shift + Esc directly launches Windows Task Manager without going through the lock/security screen.",
      "Ctrl + Alt + Del opens the security options screen."
    ],
    "trick": "Direct Task Manager = Ctrl + Shift + Esc (favorite TCS Railway question!).",
    "id": 117
  },
  {
    "category": "computer",
    "category_name": "Computer & Abbreviations",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "In MS Word and MS Excel, which shortcut key is used to insert a Hyperlink?",
    "options": {
      "a": "Ctrl + H",
      "b": "Ctrl + J",
      "c": "Ctrl + K",
      "d": "Ctrl + L"
    },
    "answer": "c",
    "correct_text": "Ctrl + K",
    "formula": "Ctrl+K = Hyperlink | Ctrl+H = Find & Replace | Ctrl+J = Justify | Ctrl+L = Align Left",
    "steps": [
      "Ctrl + K inserts or edits a hyperlink in MS Office applications.",
      "Ctrl + H is reserved for Find & Replace, which is why 'K' (last letter of hyperlinK) is used."
    ],
    "trick": "Hyperlin-K = Ctrl + K! (Ctrl + H = Replace, Ctrl + F = Find.)",
    "id": 118
  },
  {
    "category": "computer",
    "category_name": "Computer & Abbreviations",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "What does 'ASCII' stand for in character encoding?",
    "options": {
      "a": "Advanced Standard Character Integration Interface",
      "b": "Automated System Code for Internal Information",
      "c": "American System Coding for Internet Interchange",
      "d": "American Standard Code for Information Interchange"
    },
    "answer": "d",
    "correct_text": "American Standard Code for Information Interchange",
    "formula": "Standard ASCII = 7-bit code (128 characters); Extended ASCII = 8-bit (256 characters)",
    "steps": [
      "Standard ASCII uses 7 bits to represent 2⁷ = 128 characters (digits, uppercase/lowercase English letters, punctuation).",
      "For global multilingual scripts, Unicode (UTF-8 / UTF-16) is used."
    ],
    "trick": "ASCII = American Standard Code for Information Interchange (7-bit = 128 chars).",
    "id": 119
  },
  {
    "category": "computer",
    "category_name": "Computer & Abbreviations",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "What does 'URL' stand for?",
    "options": {
      "a": "Universal Reference Link",
      "b": "Uniform Resource Locator",
      "c": "User Resource Library",
      "d": "Unified Routing Language"
    },
    "answer": "b",
    "correct_text": "Uniform Resource Locator",
    "formula": "URL = Web address of a specific resource (Protocol + Domain + Path)",
    "steps": [
      "A URL (Uniform Resource Locator) specifies the exact address of a web page or file on the internet (e.g., https://www.rrbkolkata.gov.in)."
    ],
    "trick": "URL = Uniform Resource Locator (never 'Universal'!).",
    "id": 120
  },
  {
    "category": "computer",
    "category_name": "Computer & Abbreviations",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "Which type of malware disguises itself as legitimate useful software to trick users into installing it, without self-replicating like a virus?",
    "options": {
      "a": "Adware",
      "b": "Spyware",
      "c": "Worm",
      "d": "Trojan Horse"
    },
    "answer": "d",
    "correct_text": "Trojan Horse",
    "formula": "Trojan = Disguised as legit software (no self-replication) | Worm = Self-replicates across networks",
    "steps": [
      "A Trojan Horse looks harmless (like a free game or PDF tool) to gain unauthorized backdoor access.",
      "Unlike viruses and worms, Trojans do NOT replicate themselves automatically."
    ],
    "trick": "Fake gift / Disguised app = Trojan Horse | Self-spreading over network = Worm | Locks files for money = Ransomware!",
    "id": 121
  },
  {
    "category": "computer",
    "category_name": "Computer & Abbreviations",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "What is the full form of 'PDF' (the widely used document format developed by Adobe)?",
    "options": {
      "a": "Portable Document Format",
      "b": "Printable Data File",
      "c": "Processed Document File",
      "d": "Personal Digital Format"
    },
    "answer": "a",
    "correct_text": "Portable Document Format",
    "formula": "PDF = Portable Document Format | PNG = Portable Network Graphics",
    "steps": [
      "Adobe developed PDF (Portable Document Format) in 1993 so documents display identically across all operating systems and devices."
    ],
    "trick": "Both PDF and PNG start with 'Portable'!",
    "id": 122
  },
  {
    "category": "computer",
    "category_name": "Computer & Abbreviations",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "Which hardware device converts digital signals from a computer into analog signals for transmission over telephone/cable lines and vice versa?",
    "options": {
      "a": "Bridge",
      "b": "Modem",
      "c": "Hub",
      "d": "Repeater"
    },
    "answer": "b",
    "correct_text": "Modem",
    "formula": "MODEM = MOdulator + DEModulator",
    "steps": [
      "Modulation = Digital → Analog; Demodulation = Analog → Digital.",
      "Hence a Modem acts as both an input and output communication device."
    ],
    "trick": "MO-DEM = Modulator-Demodulator (Digital ↔ Analog)!",
    "id": 123
  },
  {
    "category": "computer",
    "category_name": "Computer & Abbreviations",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "Which of the following is an Open-Source Operating System?",
    "options": {
      "a": "Windows 11",
      "b": "Linux",
      "c": "iOS",
      "d": "macOS"
    },
    "answer": "b",
    "correct_text": "Linux",
    "formula": "Linux kernel created by Linus Torvalds (1991) — Free & Open Source (Ubuntu, Fedora, Android)",
    "steps": [
      "Linux is open-source software released under the GNU GPL license.",
      "Windows (Microsoft) and macOS/iOS (Apple) are proprietary operating systems."
    ],
    "trick": "Open-Source OS = Linux (and Ubuntu/Android based on it)!",
    "id": 124
  },
  {
    "category": "computer",
    "category_name": "Computer & Abbreviations",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "What does 'SQL' stand for in database management?",
    "options": {
      "a": "System Queue Language",
      "b": "Standard Question Library",
      "c": "Structured Query Language",
      "d": "Sequential Query Logic"
    },
    "answer": "c",
    "correct_text": "Structured Query Language",
    "formula": "SQL = Standard language for Relational DBMS (RDBMS)",
    "steps": [
      "SQL (Structured Query Language) is used to create, query, update, and manage relational databases like MySQL, Oracle, and PostgreSQL."
    ],
    "trick": "SQL = Structured Query Language.",
    "id": 125
  },
  {
    "category": "computer",
    "category_name": "Computer & Abbreviations",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "Which language translator converts an entire high-level program into machine code ALL AT ONCE before execution?",
    "options": {
      "a": "Assembler",
      "b": "Compiler",
      "c": "Interpreter",
      "d": "Linker"
    },
    "answer": "b",
    "correct_text": "Compiler",
    "formula": "Compiler = Whole program at once | Interpreter = Line by line | Assembler = Assembly → Machine",
    "steps": [
      "A Compiler scans and translates the complete source code into an executable object file (used in C, C++).",
      "An Interpreter translates and runs one line at a time (used in Python, JavaScript)."
    ],
    "trick": "Compiler = Complete at once | Interpreter = Line-by-line!",
    "id": 126
  },
  {
    "category": "computer",
    "category_name": "Computer & Abbreviations",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "What is the permanent, unique 48-bit hardware address assigned to a Network Interface Card (NIC) by its manufacturer?",
    "options": {
      "a": "MAC Address",
      "b": "Port Number",
      "c": "IPv4 Address",
      "d": "Subnet Mask"
    },
    "answer": "a",
    "correct_text": "MAC Address",
    "formula": "MAC (Media Access Control) = 48-bit (6 bytes, hex) | IPv4 = 32-bit | IPv6 = 128-bit",
    "steps": [
      "A MAC address is a 48-bit physical address burned into the NIC (e.g., 00:1A:2B:3C:4D:5E).",
      "IPv4 is 32 bits (4 octets) and IPv6 is 128 bits."
    ],
    "trick": "Bit sizes to memorize: IPv4 = 32 | MAC = 48 | IPv6 = 128!",
    "id": 127
  },
  {
    "category": "computer",
    "category_name": "Computer & Abbreviations",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "In MS Excel, every formula MUST begin with which symbol?",
    "options": {
      "a": "@",
      "b": "#",
      "c": "=",
      "d": "$"
    },
    "answer": "c",
    "correct_text": "=",
    "formula": "Excel formula starts with '=' | Absolute cell reference uses '$' (e.g., $A$1)",
    "steps": [
      "All Excel formulas and functions must begin with an equals sign (=), such as =SUM(A1:A10).",
      "The dollar sign ($) is used to lock a row or column for absolute referencing."
    ],
    "trick": "Formula starts with '=' | Lock cell reference with '$'!",
    "id": 128
  },
  {
    "category": "computer",
    "category_name": "Computer & Abbreviations",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "What does 'VoIP' stand for in modern internet telecommunications (used by WhatsApp calls, Zoom, Teams)?",
    "options": {
      "a": "Virtual Online Information Portal",
      "b": "Video over Internal Platform",
      "c": "Voice over Internet Protocol",
      "d": "Voice Output Interface Protocol"
    },
    "answer": "c",
    "correct_text": "Voice over Internet Protocol",
    "formula": "VoIP transmits voice/audio calls as data packets over IP networks",
    "steps": [
      "VoIP converts analog voice signals into digital packets transmitted over broadband internet instead of traditional circuit-switched telephone lines."
    ],
    "trick": "VoIP = Voice over Internet Protocol.",
    "id": 129
  },
  {
    "category": "computer",
    "category_name": "Computer & Abbreviations",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "Which of the following is a NON-VOLATILE memory (retains its data even when electrical power is switched off)?",
    "options": {
      "a": "ROM",
      "b": "DRAM",
      "c": "CPU Cache",
      "d": "SRAM"
    },
    "answer": "a",
    "correct_text": "ROM",
    "formula": "Volatile (loses data on power off): RAM (SRAM/DRAM), Cache, Registers | Non-volatile: ROM, SSD, HDD",
    "steps": [
      "ROM (Read-Only Memory) retains firmware permanently without power.",
      "All forms of RAM (SRAM, DRAM) and Cache are volatile."
    ],
    "trick": "RAM = Volatile (erased on power off) | ROM = Non-Volatile (permanent)!",
    "id": 130
  },
  {
    "category": "computer",
    "category_name": "Computer & Abbreviations",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "What is the full form of 'CAPTCHA', commonly seen on online exam and railway booking portals?",
    "options": {
      "a": "Coded Authentication Protocol To Confirm Human Identity",
      "b": "Completely Automated Public Turing test to tell Computers and Humans Apart",
      "c": "Computer Application Program To Check Human Access",
      "d": "Central Automated Portal To Control Hacker Attacks"
    },
    "answer": "b",
    "correct_text": "Completely Automated Public Turing test to tell Computers and Humans Apart",
    "formula": "CAPTCHA = Automated Turing Test to distinguish humans from automated bots",
    "steps": [
      "CAPTCHA blocks automated bots from spamming forms or bulk-booking tickets by requiring human visual/cognitive recognition."
    ],
    "trick": "Look for 'Turing test' + 'Computers and Humans Apart'!",
    "id": 131
  },
  {
    "category": "computer",
    "category_name": "Computer & Abbreviations",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "Which function key in Windows File Explorer is used to RENAME a selected file or folder?",
    "options": {
      "a": "F2",
      "b": "F5",
      "c": "F12",
      "d": "F7"
    },
    "answer": "a",
    "correct_text": "F2",
    "formula": "F1: Help | F2: Rename | F5: Refresh | F7: Spell Check (MS Office) | F12: Save As",
    "steps": [
      "F2 renames files/folders in Windows and edits active cell content in MS Excel.",
      "F5 refreshes a window/browser (or starts a PowerPoint slideshow); F7 runs Spell Check in MS Word; F12 opens Save As."
    ],
    "trick": "F2 = Rename | F5 = Refresh | F7 = Spell Check | F12 = Save As!",
    "id": 132
  },
  {
    "category": "computer",
    "category_name": "Computer & Abbreviations",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "What does 'VPN' stand for in network security?",
    "options": {
      "a": "Virtual Private Network",
      "b": "Verified Public Node",
      "c": "Variable Packet Navigation",
      "d": "Visual Protocol Network"
    },
    "answer": "a",
    "correct_text": "Virtual Private Network",
    "formula": "VPN creates an encrypted private tunnel over a public network (Internet)",
    "steps": [
      "A VPN encrypts a user's internet connection and masks their IP address to protect privacy over public Wi-Fi or connect remotely to corporate networks."
    ],
    "trick": "VPN = Virtual Private Network.",
    "id": 133
  },
  {
    "category": "computer",
    "category_name": "Computer & Abbreviations",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "Which component of the CPU performs all arithmetic calculations (+, −, ×, ÷) and logical comparisons (<, >, =)?",
    "options": {
      "a": "ALU (Arithmetic Logic Unit)",
      "b": "CU (Control Unit)",
      "c": "MAR (Memory Address Register)",
      "d": "PCI Bus"
    },
    "answer": "a",
    "correct_text": "ALU (Arithmetic Logic Unit)",
    "formula": "CPU = ALU + Control Unit (CU) + Registers",
    "steps": [
      "ALU executes arithmetic and logical operations.",
      "CU (Control Unit) directs and coordinates data flow between memory, ALU, and I/O devices."
    ],
    "trick": "ALU = Math & Logic | CU = Traffic Cop (Control & Coordination)!",
    "id": 134
  },
  {
    "category": "computer",
    "category_name": "Computer & Abbreviations",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "What is 'Phishing' in cybersecurity?",
    "options": {
      "a": "Fraudulently sending deceptive emails/SMS pretending to be a trusted entity to steal passwords or bank details",
      "b": "Compressing large files into a ZIP archive",
      "c": "Defragmenting a hard disk drive",
      "d": "Overloading a web server with massive traffic to crash it"
    },
    "answer": "a",
    "correct_text": "Fraudulently sending deceptive emails/SMS pretending to be a trusted entity to steal passwords or bank details",
    "formula": "Phishing = Social engineering credential theft | DDoS = Traffic overload attack",
    "steps": [
      "Phishing lures victims via fake bank/KYC links to steal OTPs, credentials, or card numbers.",
      "Overloading a server with traffic is a DDoS (Distributed Denial of Service) attack."
    ],
    "trick": "Phishing = Fishing for passwords with fake bait links!",
    "id": 135
  },
  {
    "category": "computer",
    "category_name": "Computer & Abbreviations",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "What does 'JPEG' stand for in digital image formats?",
    "options": {
      "a": "Joint Picture Extension Guide",
      "b": "Java Pixel Encoding Graphics",
      "c": "Joint Photographic Experts Group",
      "d": "Justified Photo Exchange Grid"
    },
    "answer": "c",
    "correct_text": "Joint Photographic Experts Group",
    "formula": "JPEG = Lossy image compression | PNG = Lossless with transparency | GIF = Graphics Interchange Format",
    "steps": [
      "JPEG (Joint Photographic Experts Group) uses lossy compression ideal for photographs.",
      "PNG (Portable Network Graphics) uses lossless compression and supports transparent backgrounds."
    ],
    "trick": "JPEG = Joint Photographic Experts Group (Lossy) | PNG = Portable Network Graphics (Lossless).",
    "id": 136
  },
  {
    "category": "computer",
    "category_name": "Computer & Abbreviations",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "Which unit of computer storage is larger than 1 Terabyte (TB) and equals 1,024 Terabytes?",
    "options": {
      "a": "1 Petabyte (PB)",
      "b": "1 Zettabyte (ZB)",
      "c": "1 Exabyte (EB)",
      "d": "1 Gigabyte (GB)"
    },
    "answer": "a",
    "correct_text": "1 Petabyte (PB)",
    "formula": "KB → MB → GB → TB → PB → EB → ZB → YB",
    "steps": [
      "1024 GB = 1 TB; 1024 TB = 1 PB (Petabyte); 1024 PB = 1 EB (Exabyte); 1024 EB = 1 ZB (Zettabyte); 1024 ZB = 1 YB (Yottabyte)."
    ],
    "trick": "Mnemonic for big units: 'Two People Eat Zesty Yogurt' → TB, PB, EB, ZB, YB!",
    "id": 137
  },
  {
    "category": "computer",
    "category_name": "Computer & Abbreviations",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "Who is credited with inventing the World Wide Web (WWW) in 1989 at CERN?",
    "options": {
      "a": "Alan Turing",
      "b": "Dennis Ritchie",
      "c": "Tim Berners-Lee",
      "d": "Vint Cerf"
    },
    "answer": "c",
    "correct_text": "Tim Berners-Lee",
    "formula": "WWW = Tim Berners-Lee | Father of Internet (TCP/IP) = Vint Cerf & Bob Kahn | C Language = Dennis Ritchie",
    "steps": [
      "British scientist Tim Berners-Lee invented WWW, HTML, HTTP, and the first web browser in 1989–1990 at CERN.",
      "Vint Cerf & Bob Kahn co-designed TCP/IP ('Fathers of the Internet')."
    ],
    "trick": "WWW = Tim Berners-Lee | Internet (TCP/IP) = Vint Cerf | Email = Ray Tomlinson!",
    "id": 138
  },
  {
    "category": "computer",
    "category_name": "Computer & Abbreviations",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "What does 'FTP' stand for, and what is its main function?",
    "options": {
      "a": "File Transfer Protocol — transferring files between client and server over a network",
      "b": "Fast Transmission Process — boosting Wi-Fi speed",
      "c": "Formatted Text Program — editing text documents",
      "d": "Fiber Terminal Port — connecting optical cables"
    },
    "answer": "a",
    "correct_text": "File Transfer Protocol — transferring files between client and server over a network",
    "formula": "FTP operates on Ports 20 (Data) & 21 (Control)",
    "steps": [
      "FTP (File Transfer Protocol) is an Application Layer protocol used to upload and download files between computers on a TCP/IP network."
    ],
    "trick": "FTP = File Transfer Protocol (Ports 20 & 21).",
    "id": 139
  },
  {
    "category": "computer",
    "category_name": "Computer & Abbreviations",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "What is the purpose of a 'Firewall' in a computer network?",
    "options": {
      "a": "Increases internet download bandwidth",
      "b": "Monitors and filters incoming/outgoing network traffic based on security rules to block unauthorized access",
      "c": "Cools down the CPU when it overheats",
      "d": "Converts HTML pages into PDFs"
    },
    "answer": "b",
    "correct_text": "Monitors and filters incoming/outgoing network traffic based on security rules to block unauthorized access",
    "formula": "Firewall = Hardware/Software security barrier between trusted internal network & untrusted external network",
    "steps": [
      "A firewall inspects packets entering or leaving a network and allows or blocks them according to predefined security rules."
    ],
    "trick": "Firewall = Security Gatekeeper filtering unauthorized network traffic!",
    "id": 140
  },
  {
    "category": "railway_gk",
    "category_name": "Railway & Transport GK",
    "exam": "RRB Kolkata Special",
    "question": "Which is the ONLY city in India that hosts the headquarters of THREE Indian Railway zones?",
    "options": {
      "a": "Mumbai",
      "b": "New Delhi",
      "c": "Kolkata",
      "d": "Chennai"
    },
    "answer": "c",
    "correct_text": "Kolkata",
    "formula": "Kolkata = Eastern Railway (ER) + South Eastern Railway (SER) + Metro Railway Kolkata",
    "steps": [
      "Kolkata houses 3 Zonal HQs: Eastern Railway (Fairlie Place), South Eastern Railway (Garden Reach), and Metro Railway Kolkata.",
      "Mumbai houses 2 Zonal HQs: Central Railway (CSMT) and Western Railway (Churchgate)."
    ],
    "trick": "Kolkata = 3 Zonal HQs (ER, SER, Metro)! Mumbai = 2 (CR, WR).",
    "id": 141
  },
  {
    "category": "railway_gk",
    "category_name": "Railway & Transport GK",
    "exam": "RRB Kolkata Special",
    "question": "Where is the headquarters of South Eastern Railway (SER) located?",
    "options": {
      "a": "Kharagpur",
      "b": "Bhubaneswar",
      "c": "Garden Reach, Kolkata",
      "d": "Fairlie Place, Kolkata"
    },
    "answer": "c",
    "correct_text": "Garden Reach, Kolkata",
    "formula": "SER HQ = Garden Reach, Kolkata | ER HQ = Fairlie Place, Kolkata",
    "steps": [
      "South Eastern Railway (SER), often called the 'Blue Chip Railway' for its freight earnings, is headquartered at Garden Reach, Kolkata.",
      "Eastern Railway (ER) is headquartered at Fairlie Place, Kolkata."
    ],
    "trick": "SER = Garden Reach | ER = Fairlie Place (crucial for your Preference #1 & #2!).",
    "id": 142
  },
  {
    "category": "railway_gk",
    "category_name": "Railway & Transport GK",
    "exam": "RRB Kolkata Special",
    "question": "Chittaranjan Locomotive Works (CLW), one of the largest electric locomotive manufacturers in the world, is located in which state?",
    "options": {
      "a": "West Bengal",
      "b": "Jharkhand",
      "c": "Bihar",
      "d": "Uttar Pradesh"
    },
    "answer": "a",
    "correct_text": "West Bengal",
    "formula": "CLW = Chittaranjan, Paschim Bardhaman district, West Bengal (established 1950)",
    "steps": [
      "CLW started production on 26 January 1950 in Chittaranjan (West Bengal), named after freedom fighter Deshbandhu Chittaranjan Das.",
      "It manufactures high-horsepower electric locomotives like WAP-7 and WAG-9."
    ],
    "trick": "CLW (Electric Locos) = Chittaranjan, West Bengal!",
    "id": 143
  },
  {
    "category": "railway_gk",
    "category_name": "Railway & Transport GK",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "On which date did India's first passenger train run between Bori Bunder (Bombay) and Thane, covering 34 km?",
    "options": {
      "a": "16 April 1853",
      "b": "16 April 1857",
      "c": "24 October 1853",
      "d": "15 August 1854"
    },
    "answer": "a",
    "correct_text": "16 April 1853",
    "formula": "16 April 1853 | Bori Bunder to Thane (34 km) | Governor-General: Lord Dalhousie",
    "steps": [
      "Hauled by 3 steam locomotives named Sahib, Sindh, and Sultan during Lord Dalhousie's tenure.",
      "Note: Eastern India's first passenger train ran on 15 August 1854 from Howrah to Hooghly (38 km)!"
    ],
    "trick": "India's 1st train: 16 April 1853 (Bombay–Thane) | Bengal's 1st train: 15 Aug 1854 (Howrah–Hooghly)!",
    "id": 144
  },
  {
    "category": "railway_gk",
    "category_name": "Railway & Transport GK",
    "exam": "RRB Kolkata Special",
    "question": "India's FIRST underground Metro Railway began commercial operations in which city on 24 October 1984?",
    "options": {
      "a": "Kolkata",
      "b": "Delhi",
      "c": "Bengaluru",
      "d": "Mumbai"
    },
    "answer": "a",
    "correct_text": "Kolkata",
    "formula": "Kolkata Metro (Esplanade to Bhowanipore, 3.4 km) — 24 October 1984",
    "steps": [
      "Kolkata Metro was India's first metro system (1984) and is the ONLY metro operated as an official zone of Indian Railways (17th Zone, 2010).",
      "Kolkata also became home to India's first underwater metro tunnel (under the Hooghly River, East-West Metro Green Line, 2024)."
    ],
    "trick": "1st Metro (1984) & 1st Underwater Metro (Hooghly, 2024) = BOTH Kolkata!",
    "id": 145
  },
  {
    "category": "railway_gk",
    "category_name": "Railway & Transport GK",
    "exam": "RRB NTPC CEN 06/2026 Focus",
    "question": "What is 'KAVACH', developed indigenously by RDSO (Research Designs and Standards Organisation)?",
    "options": {
      "a": "Automatic Train Protection (ATP) system to prevent train collisions and SPAD",
      "b": "High-speed bullet train bogie design",
      "c": "Automated railway ticket vending kiosk",
      "d": "Solar-powered railway station lighting grid"
    },
    "answer": "a",
    "correct_text": "Automatic Train Protection (ATP) system to prevent train collisions and SPAD",
    "formula": "KAVACH (SIL-4 certified ATP) developed by RDSO (Headquarters: Lucknow)",
    "steps": [
      "KAVACH automatically applies brakes if the loco pilot fails to control speed or passes a red signal (Signal Passed at Danger — SPAD), preventing head-on and rear-end collisions.",
      "Version 4.0 was approved by RDSO for rapid nationwide rollout across high-density Golden Quadrilateral routes."
    ],
    "trick": "KAVACH = Shield/Armour → Automatic Train Protection (ATP) by RDSO Lucknow!",
    "id": 146
  },
  {
    "category": "railway_gk",
    "category_name": "Railway & Transport GK",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "Which is the 18th and newest Railway Zone of Indian Railways, and where is its headquarters?",
    "options": {
      "a": "East Coast Railway (ECoR) — Bhubaneswar",
      "b": "West Central Railway (WCR) — Jabalpur",
      "c": "South Western Railway (SWR) — Hubballi",
      "d": "South Coast Railway (SCoR) — Visakhapatnam"
    },
    "answer": "d",
    "correct_text": "South Coast Railway (SCoR) — Visakhapatnam",
    "formula": "Total Railway Zones = 18 (18th = South Coast Railway, Visakhapatnam, Andhra Pradesh)",
    "steps": [
      "South Coast Railway (SCoR) headquartered in Visakhapatnam was announced as the 18th zone of Indian Railways.",
      "East Coast Railway is headquartered in Bhubaneswar (Odisha)."
    ],
    "trick": "18th Zone = South Coast Railway (Visakhapatnam)! 17th Zone = Kolkata Metro!",
    "id": 147
  },
  {
    "category": "railway_gk",
    "category_name": "Railway & Transport GK",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "What is the standard width (distance between inner faces of the two rails) of Indian Broad Gauge?",
    "options": {
      "a": "1.676 metres (1676 mm / 5 ft 6 in)",
      "b": "0.762 metre (762 mm)",
      "c": "1.435 metres (1435 mm)",
      "d": "1.000 metre (1000 mm)"
    },
    "answer": "a",
    "correct_text": "1.676 metres (1676 mm / 5 ft 6 in)",
    "formula": "Broad Gauge = 1.676 m | Standard Gauge (Metros/Bullet) = 1.435 m | Metre Gauge = 1.000 m",
    "steps": [
      "Indian Broad Gauge is 1.676 m (1,676 mm), wider than International Standard Gauge (1.435 m, used in most modern Metros and High-Speed Rail)."
    ],
    "trick": "Indian Broad = 1.676 m | Standard (Metro/Bullet) = 1.435 m | Metre = 1.0 m!",
    "id": 148
  },
  {
    "category": "railway_gk",
    "category_name": "Railway & Transport GK",
    "exam": "RRB NTPC CEN 06/2026 Focus",
    "question": "Where are Vande Bharat Express (originally Train 18) semi-high-speed trainsets primarily designed and manufactured?",
    "options": {
      "a": "Integral Coach Factory (ICF), Chennai",
      "b": "Rail Wheel Factory (RWF), Bengaluru",
      "c": "Banaras Locomotive Works (BLW), Varanasi",
      "d": "Chittaranjan Locomotive Works (CLW), West Bengal"
    },
    "answer": "a",
    "correct_text": "Integral Coach Factory (ICF), Chennai",
    "formula": "ICF Chennai (Perambur) — India's premier passenger coach factory (est. 1955)",
    "steps": [
      "ICF Chennai designed and manufactured Train 18 (Vande Bharat Express), India's first indigenous self-propelled semi-high-speed trainset.",
      "Other coach factories: RCF Kapurthala (Punjab) and MCF Raebareli (UP)."
    ],
    "trick": "Vande Bharat Coaches = ICF Chennai | Electric Locos = CLW Chittaranjan!",
    "id": 149
  },
  {
    "category": "railway_gk",
    "category_name": "Railway & Transport GK",
    "exam": "RRB NTPC CEN 06/2026 Focus",
    "question": "The Chenab Rail Bridge—the world's highest railway arch bridge at 359 metres above the riverbed—is part of which railway project?",
    "options": {
      "a": "Konkan Railway Project, Maharashtra",
      "b": "Sivok–Rangpo Rail Link, Sikkim",
      "c": "Udhampur–Srinagar–Baramulla Rail Link (USBRL), Jammu & Kashmir",
      "d": "Dedicated Freight Corridor, Gujarat"
    },
    "answer": "c",
    "correct_text": "Udhampur–Srinagar–Baramulla Rail Link (USBRL), Jammu & Kashmir",
    "formula": "Chenab Bridge = 359 m high (35 m taller than Eiffel Tower), Reasi district, J&K",
    "steps": [
      "Located in Reasi district of J&K across the Chenab River, this 1,315 m long steel-and-concrete arch bridge links Katra to Banihal on the USBRL line.",
      "Nearby on the same line is India's first cable-stayed rail bridge: the Anji Khad Bridge!"
    ],
    "trick": "World's highest arch rail bridge = Chenab (359 m) | 1st Cable-stayed rail bridge = Anji Khad (both USBRL, J&K)!",
    "id": 150
  },
  {
    "category": "railway_gk",
    "category_name": "Railway & Transport GK",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "Which railway station currently holds the Guinness World Record for the LONGEST railway platform in the world (1,507 metres)?",
    "options": {
      "a": "Gorakhpur Junction, Uttar Pradesh",
      "b": "Kharagpur Junction, West Bengal",
      "c": "Kollam Junction, Kerala",
      "d": "Shree Siddharoodha Swamiji (SSS) Hubballi Junction, Karnataka"
    },
    "answer": "d",
    "correct_text": "Shree Siddharoodha Swamiji (SSS) Hubballi Junction, Karnataka",
    "formula": "1st: SSS Hubballi (1,507 m, SWR) > 2nd: Gorakhpur (1,366 m, NER) > 3rd: Kollam (1,180 m)",
    "steps": [
      "In March 2023, Platform No. 8 at SSS Hubballi Junction (South Western Railway HQ) surpassed Gorakhpur to become the world's longest railway platform at 1,507 metres."
    ],
    "trick": "Don't mark Gorakhpur (old data)! New #1 Longest Platform = Hubballi (1,507 m)!",
    "id": 151
  },
  {
    "category": "railway_gk",
    "category_name": "Railway & Transport GK",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "The Eastern Dedicated Freight Corridor (EDFC), built by DFCCIL, runs between which two terminal cities?",
    "options": {
      "a": "Delhi and Mumbai",
      "b": "Ludhiana (Punjab) and Dankuni / Sonnagar (West Bengal / Bihar)",
      "c": "Howrah and Chennai",
      "d": "Dadri (UP) and JNPT (Maharashtra)"
    },
    "answer": "b",
    "correct_text": "Ludhiana (Punjab) and Dankuni / Sonnagar (West Bengal / Bihar)",
    "formula": "EDFC = Ludhiana–Dankuni (1,875 km) | WDFC = Dadri (UP)–JNPT (Mumbai, 1,506 km)",
    "steps": [
      "EDFC connects Sahnewal (Ludhiana, Punjab) to Dankuni (near Kolkata, West Bengal) via Sonnagar.",
      "WDFC connects Dadri (Uttar Pradesh) to Jawaharlal Nehru Port Trust (JNPT, Navi Mumbai)."
    ],
    "trick": "EDFC = Ludhiana ↔ Dankuni (Kolkata)! WDFC = Dadri ↔ JNPT (Mumbai)!",
    "id": 152
  },
  {
    "category": "railway_gk",
    "category_name": "Railway & Transport GK",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "In which year was the separate Railway Budget merged with the Union General Budget, and on the recommendation of which committee?",
    "options": {
      "a": "2015 — Sam Pitroda Committee",
      "b": "2017 — Bibek Debroy Committee",
      "c": "1924 — Acworth Committee",
      "d": "2019 — Anil Kakodkar Committee"
    },
    "answer": "b",
    "correct_text": "2017 — Bibek Debroy Committee",
    "formula": "Separated in 1924 (Acworth Committee) | Merged back in 2017 (Bibek Debroy Committee)",
    "steps": [
      "The Railway Budget was separated from the General Budget in 1924 based on the Acworth Committee report.",
      "After 92 years, it was merged back into the Union Budget in 2017 (FY 2017–18) following the NITI Aayog / Bibek Debroy Committee recommendation."
    ],
    "trick": "Split = 1924 (Acworth) | Merged = 2017 (Bibek Debroy)!",
    "id": 153
  },
  {
    "category": "railway_gk",
    "category_name": "Railway & Transport GK",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "By which target year has Indian Railways committed to becoming a 'Net Zero Carbon Emitter'?",
    "options": {
      "a": "2070",
      "b": "2030",
      "c": "2047",
      "d": "2028"
    },
    "answer": "b",
    "correct_text": "2030",
    "formula": "Indian Railways Net Zero = 2030 | India's National Net Zero = 2070",
    "steps": [
      "Indian Railways set an ambitious target of Net Zero Carbon Emissions by 2030 through 100% broad-gauge electrification and renewable solar/wind traction power.",
      "Do not confuse with India's overall national Net Zero target of 2070 (Panchamrit pledge)."
    ],
    "trick": "Indian Railways Net Zero = 2030 | All-India Net Zero = 2070!",
    "id": 154
  },
  {
    "category": "railway_gk",
    "category_name": "Railway & Transport GK",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "Where is India's first railway university—Gati Shakti Vishwavidyalaya (formerly NRTI)—located?",
    "options": {
      "a": "Lucknow, Uttar Pradesh",
      "b": "Vadodara, Gujarat",
      "c": "Kolkata, West Bengal",
      "d": "Secunderabad, Telangana"
    },
    "answer": "b",
    "correct_text": "Vadodara, Gujarat",
    "formula": "Gati Shakti Vishwavidyalaya (Central University under Ministry of Railways) = Vadodara, Gujarat",
    "steps": [
      "Originally established as the National Rail and Transportation Institute (NRTI) in 2018 inside NAIR campus, Vadodara, it was upgraded to a Central University named Gati Shakti Vishwavidyalaya in 2022."
    ],
    "trick": "Railway University (Gati Shakti Vishwavidyalaya) = Vadodara, Gujarat!",
    "id": 155
  },
  {
    "category": "railway_gk",
    "category_name": "Railway & Transport GK",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "Which train runs on the LONGEST train route in India (over 4,150 km across 9 states)?",
    "options": {
      "a": "Himsagar Express (Katra to Kanyakumari)",
      "b": "Vivek Express (Dibrugarh to Kanyakumari)",
      "c": "Rajdhani Express (New Delhi to Howrah)",
      "d": "Vande Bharat Express (New Delhi to Varanasi)"
    },
    "answer": "b",
    "correct_text": "Vivek Express (Dibrugarh to Kanyakumari)",
    "formula": "Longest Route = Vivek Express (Dibrugarh, Assam → Kanyakumari, Tamil Nadu)",
    "steps": [
      "Launched in 2011 to commemorate Swami Vivekananda's 150th birth anniversary, the Dibrugarh–Kanyakumari Vivek Express covers ~4,189 km."
    ],
    "trick": "Longest route = Vivek Express (Assam to Tamil Nadu)!",
    "id": 156
  },
  {
    "category": "railway_gk",
    "category_name": "Railway & Transport GK",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "Which of the following mountain railways is NOT one of the three UNESCO World Heritage 'Mountain Railways of India'?",
    "options": {
      "a": "Kalka–Shimla Railway (Himachal Pradesh)",
      "b": "Matheran Hill Railway (Maharashtra)",
      "c": "Nilgiri Mountain Railway (Tamil Nadu)",
      "d": "Darjeeling Himalayan Railway (West Bengal)"
    },
    "answer": "b",
    "correct_text": "Matheran Hill Railway (Maharashtra)",
    "formula": "UNESCO Rail Sites in India (4 total): Darjeeling (1999), CSMT Mumbai (2004), Nilgiri (2005), Kalka–Shimla (2008)",
    "steps": [
      "The 3 UNESCO Mountain Railways are Darjeeling Himalayan (1999), Nilgiri (2005), and Kalka–Shimla (2008).",
      "Chhatrapati Shivaji Maharaj Terminus (CSMT, Mumbai) is the 4th UNESCO rail heritage site (2004). Matheran is on the tentative list, not yet inscribed."
    ],
    "trick": "UNESCO Mountain 3: Darjeeling (WB) + Nilgiri (TN) + Kalka-Shimla (HP)!",
    "id": 157
  },
  {
    "category": "railway_gk",
    "category_name": "Railway & Transport GK",
    "exam": "RRB NTPC CEN 06/2026 Focus",
    "question": "India's FIRST vertical-lift railway sea bridge, replacing a century-old cantilever bridge, connects Mandapam to Rameswaram Island. What is its name?",
    "options": {
      "a": "Bogibeel Bridge (Assam)",
      "b": "Digha–Sonpur Bridge (Bihar)",
      "c": "Vembanad Rail Bridge (Kerala)",
      "d": "New Pamban Rail Bridge (Tamil Nadu)"
    },
    "answer": "d",
    "correct_text": "New Pamban Rail Bridge (Tamil Nadu)",
    "formula": "New Pamban Bridge = India's 1st vertical-lift rail sea bridge (built by RVNL, Tamil Nadu)",
    "steps": [
      "The 2.08 km New Pamban Rail Bridge features a 72.5 m vertical-lift electro-mechanical span that rises 17 metres to let ships pass beneath."
    ],
    "trick": "Vertical-Lift Sea Rail Bridge = New Pamban Bridge (Rameswaram, TN)! Rail-cum-Road longest = Bogibeel (Assam)!",
    "id": 158
  },
  {
    "category": "railway_gk",
    "category_name": "Railway & Transport GK",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "The Mumbai–Ahmedabad High-Speed Rail (India's first Bullet Train corridor, 508 km) is being built with financial and technical collaboration from which country?",
    "options": {
      "a": "Japan (JICA / Shinkansen)",
      "b": "Germany (ICE)",
      "c": "France (TGV)",
      "d": "South Korea (KTX)"
    },
    "answer": "a",
    "correct_text": "Japan (JICA / Shinkansen)",
    "formula": "NHSRCL (National High Speed Rail Corporation Ltd) | 508 km | Japan Shinkansen technology",
    "steps": [
      "Executed by NHSRCL with soft loan funding from JICA (Japan International Cooperation Agency), featuring India's first 21 km undersea rail tunnel beneath Thane Creek."
    ],
    "trick": "Bullet Train = Mumbai–Ahmedabad (508 km) + Japan (JICA / Shinkansen) + NHSRCL!",
    "id": 159
  },
  {
    "category": "railway_gk",
    "category_name": "Railway & Transport GK",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "Which is the ONLY riverine Major Port in India?",
    "options": {
      "a": "Kandla / Deendayal Port (Gujarat)",
      "b": "Syama Prasad Mookerjee Port (Kolkata, West Bengal)",
      "c": "Visakhapatnam Port (Andhra Pradesh)",
      "d": "Paradip Port (Odisha)"
    },
    "answer": "b",
    "correct_text": "Syama Prasad Mookerjee Port (Kolkata, West Bengal)",
    "formula": "Kolkata Port (on Hooghly River) = Only Riverine Major Port in India (est. 1870, oldest operating major port)",
    "steps": [
      "Renamed Syama Prasad Mookerjee Port in 2020, it sits ~203 km inland along the Hooghly River with two dock systems: Kolkata Dock System (KDS) and Haldia Dock Complex (HDC)."
    ],
    "trick": "Riverine Major Port = Kolkata (Syama Prasad Mookerjee Port, Hooghly River)!",
    "id": 160
  },
  {
    "category": "railway_gk",
    "category_name": "Railway & Transport GK",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "Which is the LONGEST National Highway in India, connecting Srinagar (Jammu & Kashmir) to Kanyakumari (Tamil Nadu)?",
    "options": {
      "a": "NH-48",
      "b": "NH-44",
      "c": "NH-19",
      "d": "NH-27"
    },
    "answer": "b",
    "correct_text": "NH-44",
    "formula": "Longest NH = NH-44 (~3,745 km, North–South Corridor) | 2nd Longest = NH-27 (Porbandar–Silchar, East–West)",
    "steps": [
      "NH-44 runs north-to-south across 11 states/UTs from Srinagar to Kanyakumari.",
      "NH-27 runs east-to-west from Porbandar (Gujarat) to Silchar (Assam). Both corridors intersect at Jhansi (UP)!"
    ],
    "trick": "N-S Corridor = NH-44 | E-W Corridor = NH-27 | Intersection Point = Jhansi (UP)!",
    "id": 161
  },
  {
    "category": "railway_gk",
    "category_name": "Railway & Transport GK",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "National Waterway-1 (NW-1), the longest operational national waterway in India (1,620 km), runs along which river system and endpoints?",
    "options": {
      "a": "Godavari–Krishna canals (Kakinada to Puducherry)",
      "b": "Ganga–Bhagirathi–Hooghly river system (Prayagraj to Haldia)",
      "c": "Brahmaputra river (Sadiya to Dhubri)",
      "d": "West Coast Canal (Kottapuram to Kollam)"
    },
    "answer": "b",
    "correct_text": "Ganga–Bhagirathi–Hooghly river system (Prayagraj to Haldia)",
    "formula": "NW-1: Prayagraj–Haldia (Ganga, 1,620 km) | NW-2: Sadiya–Dhubri (Brahmaputra, 891 km) | NW-3: Kerala",
    "steps": [
      "NW-1 runs 1,620 km across UP, Bihar, Jharkhand, and West Bengal (Prayagraj to Haldia) managed by IWAI (Inland Waterways Authority of India, HQ: Noida)."
    ],
    "trick": "NW-1 = Ganga (Prayagraj–Haldia) | NW-2 = Brahmaputra (Assam) | NW-3 = Kerala!",
    "id": 162
  },
  {
    "category": "railway_gk",
    "category_name": "Railway & Transport GK",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "The Golden Quadrilateral highway network (5,846 km) connects which four metropolitan cities of India?",
    "options": {
      "a": "Delhi, Mumbai, Chennai, and Kolkata",
      "b": "Srinagar, Kanyakumari, Porbandar, and Silchar",
      "c": "Mumbai, Pune, Chennai, and Ahmedabad",
      "d": "Delhi, Bengaluru, Hyderabad, and Kolkata"
    },
    "answer": "a",
    "correct_text": "Delhi, Mumbai, Chennai, and Kolkata",
    "formula": "Golden Quadrilateral = 5,846 km (Launched by PM Atal Bihari Vajpayee in 2001, managed by NHAI)",
    "steps": [
      "The Golden Quadrilateral forms a loop linking India's 4 major metros: Delhi–Mumbai–Chennai–Kolkata.",
      "The Kolkata–Chennai leg (1,684 km, NH-16) is its longest arm."
    ],
    "trick": "GQ = Delhi–Mumbai–Chennai–Kolkata (5,846 km, NHAI)!",
    "id": 163
  },
  {
    "category": "railway_gk",
    "category_name": "Railway & Transport GK",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "Where is the headquarters of East Central Railway (ECR) located?",
    "options": {
      "a": "Patna (Bihar)",
      "b": "Prayagraj (UP)",
      "c": "Bhubaneswar (Odisha)",
      "d": "Hajipur (Bihar)"
    },
    "answer": "d",
    "correct_text": "Hajipur (Bihar)",
    "formula": "ECR = Hajipur | ECoR = Bhubaneswar | NCR = Prayagraj | NER = Gorakhpur",
    "steps": [
      "East Central Railway (ECR) is headquartered at Hajipur (Vaishali district, Bihar), NOT Patna — a favorite RRB trap!"
    ],
    "trick": "Don't pick Patna! ECR HQ = Hajipur!",
    "id": 164
  },
  {
    "category": "railway_gk",
    "category_name": "Railway & Transport GK",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "Where is the headquarters of Northeast Frontier Railway (NFR) located?",
    "options": {
      "a": "Dibrugarh (Assam)",
      "b": "Siliguri (West Bengal)",
      "c": "Maligaon, Guwahati (Assam)",
      "d": "Shillong (Meghalaya)"
    },
    "answer": "c",
    "correct_text": "Maligaon, Guwahati (Assam)",
    "formula": "NFR HQ = Maligaon (Guwahati, Assam) — serves NE states, North Bengal & parts of Bihar",
    "steps": [
      "Northeast Frontier Railway (NFR) is headquartered at Maligaon, Guwahati (Assam), and notably operates the UNESCO Darjeeling Himalayan Railway."
    ],
    "trick": "NFR = Maligaon (Guwahati)!",
    "id": 165
  },
  {
    "category": "railway_gk",
    "category_name": "Railway & Transport GK",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "Where is the headquarters of Konkan Railway Corporation Limited (KRCL) located?",
    "options": {
      "a": "Panaji (Goa)",
      "b": "Ratnagiri (Maharashtra)",
      "c": "Mangaluru (Karnataka)",
      "d": "Navi Mumbai (CBD Belapur, Maharashtra)"
    },
    "answer": "d",
    "correct_text": "Navi Mumbai (CBD Belapur, Maharashtra)",
    "formula": "Konkan Railway = Roha (Maharashtra) to Thokur (Karnataka), 741 km, HQ: Navi Mumbai",
    "steps": [
      "Konkan Railway runs along India's western coast across Maharashtra, Goa, and Karnataka (built under E. Sreedharan's leadership) with HQ at CBD Belapur, Navi Mumbai."
    ],
    "trick": "Konkan Railway HQ = Navi Mumbai (CBD Belapur) | Route = Roha to Thokur!",
    "id": 166
  },
  {
    "category": "railway_gk",
    "category_name": "Railway & Transport GK",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "When was India's FIRST electric train run, and between which two stations?",
    "options": {
      "a": "3 February 1925 — Bombay VT (CSMT) to Kurla Harbour",
      "b": "15 August 1947 — Howrah to Burdwan",
      "c": "26 January 1950 — New Delhi to Agra",
      "d": "16 April 1853 — Bombay to Thane"
    },
    "answer": "a",
    "correct_text": "3 February 1925 — Bombay VT (CSMT) to Kurla Harbour",
    "formula": "1st Electric Train = 3 Feb 1925 (Bombay VT to Kurla, 1500 V DC) | 1st Electric Loco = Deccan Queen (1930)",
    "steps": [
      "India's first electric train ran on 3 February 1925 between Victoria Terminus (now CSMT) and Kurla Harbour on 1,500 V DC traction."
    ],
    "trick": "1st Train = 1853 | 1st Electric Train = 1925 (Bombay VT – Kurla)!",
    "id": 167
  },
  {
    "category": "railway_gk",
    "category_name": "Railway & Transport GK",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "Which Indian port is the DEEPEST natural landlocked port on the East Coast of India?",
    "options": {
      "a": "Paradip Port (Odisha)",
      "b": "Chennai Port (Tamil Nadu)",
      "c": "Tuticorin / V.O. Chidambaranar Port (Tamil Nadu)",
      "d": "Visakhapatnam Port (Andhra Pradesh)"
    },
    "answer": "d",
    "correct_text": "Visakhapatnam Port (Andhra Pradesh)",
    "formula": "Deepest Landlocked = Visakhapatnam | Largest Container Port = JNPT (Nhava Sheva, Mumbai) | Tidal Port = Kandla (Deendayal)",
    "steps": [
      "Visakhapatnam Port is protected naturally by the Dolphin's Nose hill promontory, making it India's deepest landlocked major port.",
      "Kandla (Deendayal Port, Gujarat) is India's premier tidal port; JNPT (Mumbai) is India's largest container port."
    ],
    "trick": "Landlocked/Deepest = Vizag | Tidal = Kandla | Riverine = Kolkata | Container #1 = JNPT!",
    "id": 168
  },
  {
    "category": "railway_gk",
    "category_name": "Railway & Transport GK",
    "exam": "RRB NTPC CEN 06/2026 Focus",
    "question": "What is the flagship 'Amrit Bharat Station Scheme' launched by the Ministry of Railways?",
    "options": {
      "a": "Replacement of broad gauge with narrow gauge in hill states",
      "b": "Privatization of all Zonal Railway Headquarters",
      "c": "Free Wi-Fi deployment exclusively on freight trains",
      "d": "Long-term modernization and redevelopment of over 1,300 railway stations across India"
    },
    "answer": "d",
    "correct_text": "Long-term modernization and redevelopment of over 1,300 railway stations across India",
    "formula": "Amrit Bharat Station Scheme (2023) → 1,300+ stations upgraded with roof plazas, multimodal integration & Divyangjan access",
    "steps": [
      "The scheme redevelops stations as 'City Centres' with modern waiting lounges, escalators, local 'One Station One Product' stalls, and seamless multimodal transport."
    ],
    "trick": "Amrit Bharat Station Scheme = 1,300+ Station Modernization!",
    "id": 169
  },
  {
    "category": "railway_gk",
    "category_name": "Railway & Transport GK",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "Where is the Rail Coach Factory (RCF) of Indian Railways situated?",
    "options": {
      "a": "Chennai, Tamil Nadu",
      "b": "Patiala, Punjab",
      "c": "Raebareli, Uttar Pradesh",
      "d": "Kapurthala, Punjab"
    },
    "answer": "d",
    "correct_text": "Kapurthala, Punjab",
    "formula": "RCF = Kapurthala (Punjab) | MCF = Raebareli (UP) | ICF = Chennai (TN) | PLW = Patiala (Punjab)",
    "steps": [
      "Rail Coach Factory (RCF) was established in 1986 at Kapurthala, Punjab, and is a major producer of LHB (Linke Hofmann Busch) coaches."
    ],
    "trick": "RCF = Kapurthala | MCF (Modern Coach Factory) = Raebareli | ICF = Chennai!",
    "id": 170
  },
  {
    "category": "railway_gk",
    "category_name": "Railway & Transport GK",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "In the context of Indian Railways passenger coaches, what does 'LHB' stand for?",
    "options": {
      "a": "Lightweight Heavy Bogie",
      "b": "Long Haul Braking",
      "c": "Linke Hofmann Busch",
      "d": "Linear Hydraulic Buffer"
    },
    "answer": "c",
    "correct_text": "Linke Hofmann Busch",
    "formula": "LHB coaches (German technology, Alstom) = Anti-climbing, stainless steel, speed up to 160–200 km/h",
    "steps": [
      "LHB coaches replaced older ICF blue coaches because LHB coaches feature anti-climbing couplers (don't pile on top of each other during derailment), disc brakes, and lighter stainless steel bodies."
    ],
    "trick": "LHB = Linke Hofmann Busch (German anti-climbing red/grey coaches)!",
    "id": 171
  },
  {
    "category": "railway_gk",
    "category_name": "Railway & Transport GK",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "In Indian civil aviation, what does the regional connectivity scheme 'UDAN' stand for?",
    "options": {
      "a": "Urban Development of Airport Navigation",
      "b": "Unified Domestic Aviation Network",
      "c": "Ude Desh ka Aam Nagrik",
      "d": "Universal Direct Air Network"
    },
    "answer": "c",
    "correct_text": "Ude Desh ka Aam Nagrik",
    "formula": "UDAN (RCS — Regional Connectivity Scheme, launched 2016) under Ministry of Civil Aviation",
    "steps": [
      "UDAN aims to make air travel affordable for common citizens and revive unserved/underserved regional airports across Tier-2 and Tier-3 cities."
    ],
    "trick": "UDAN = Ude Desh ka Aam Nagrik (Regional Connectivity Scheme, 2016)!",
    "id": 172
  },
  {
    "category": "railway_gk",
    "category_name": "Railway & Transport GK",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "Where is the National Rail Museum located?",
    "options": {
      "a": "Mumbai, Maharashtra",
      "b": "Howrah, West Bengal",
      "c": "Mysuru, Karnataka",
      "d": "Chanakyapuri, New Delhi"
    },
    "answer": "d",
    "correct_text": "Chanakyapuri, New Delhi",
    "formula": "National Rail Museum = New Delhi (est. 1977) | Regional Rail Museums: Howrah, Chennai, Mysuru, Nagpur",
    "steps": [
      "The National Rail Museum in Chanakyapuri, New Delhi (opened 1 Feb 1977) preserves over 100 real-size rail exhibits including the Fairy Queen (1855), world's oldest working steam locomotive."
    ],
    "trick": "National Rail Museum = New Delhi (home of Fairy Queen)! Regional one for ER = Howrah!",
    "id": 173
  },
  {
    "category": "railway_gk",
    "category_name": "Railway & Transport GK",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "The Atal Tunnel (9.02 km), the world's longest highway tunnel above 10,000 feet, connects Manali to Lahaul–Spiti valley beneath which mountain pass?",
    "options": {
      "a": "Nathu La Pass (Sikkim)",
      "b": "Zoji La Pass (Ladakh)",
      "c": "Rohtang Pass (Pir Panjal Range, HP)",
      "d": "Banihal Pass (J&K)"
    },
    "answer": "c",
    "correct_text": "Rohtang Pass (Pir Panjal Range, HP)",
    "formula": "Atal Tunnel = 9.02 km, Rohtang Pass (Himachal Pradesh), built by BRO (Border Roads Organisation)",
    "steps": [
      "Built by BRO in the eastern Pir Panjal range of Himachal Pradesh, Atal Tunnel reduces the Manali–Leh distance by 46 km and ensures year-round connectivity to Lahaul–Spiti."
    ],
    "trick": "Atal Tunnel (9.02 km, BRO) = Rohtang Pass, Himachal Pradesh!",
    "id": 174
  },
  {
    "category": "railway_gk",
    "category_name": "Railway & Transport GK",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "In which year was Indian Railways formally nationalized?",
    "options": {
      "a": "1950",
      "b": "1951",
      "c": "1947",
      "d": "1955"
    },
    "answer": "b",
    "correct_text": "1951",
    "formula": "Nationalization of Indian Railways = 1951 (Railway Board established in 1905 under Lord Curzon)",
    "steps": [
      "Following independence, the 42 separate railway systems were nationalized as one unified network in 1951 and reorganized into zones.",
      "The Indian Railway Board was originally constituted in 1905 during Lord Curzon's viceroyalty."
    ],
    "trick": "Railway Board = 1905 (Curzon) | Nationalization = 1951!",
    "id": 175
  },
  {
    "category": "railway_gk",
    "category_name": "Railway & Transport GK",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "Which Railway Zone has its headquarters at Prayagraj (formerly Allahabad)?",
    "options": {
      "a": "North Eastern Railway (NER)",
      "b": "North Central Railway (NCR)",
      "c": "Central Railway (CR)",
      "d": "Northern Railway (NR)"
    },
    "answer": "b",
    "correct_text": "North Central Railway (NCR)",
    "formula": "NR: New Delhi | NCR: Prayagraj | NER: Gorakhpur | NWR: Jaipur",
    "steps": [
      "All 4 'North' zones: Northern (New Delhi), North Central (Prayagraj), North Eastern (Gorakhpur), North Western (Jaipur)."
    ],
    "trick": "North 4: NR=Delhi, NCR=Prayagraj, NER=Gorakhpur, NWR=Jaipur!",
    "id": 176
  },
  {
    "category": "railway_gk",
    "category_name": "Railway & Transport GK",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "Which is India's longest rail-cum-road bridge (4.94 km), constructed over the Brahmaputra River in Assam?",
    "options": {
      "a": "Bogibeel Bridge",
      "b": "Howrah Bridge (Rabindra Setu)",
      "c": "Mahatma Gandhi Setu",
      "d": "Bhupen Hazarika Setu (Dhola–Sadiya)"
    },
    "answer": "a",
    "correct_text": "Bogibeel Bridge",
    "formula": "Longest Rail-cum-Road = Bogibeel (4.94 km, Brahmaputra) | Longest Sea Road Bridge = Atal Setu / MTHL (21.8 km, Mumbai)",
    "steps": [
      "Bogibeel Bridge (Assam, 4.94 km) has a 2-track rail deck below and a 3-lane highway deck above.",
      "Bhupen Hazarika Setu (9.15 km, Lohit river) is a road-only river bridge; Atal Setu (MTHL, 21.8 km) is India's longest sea bridge."
    ],
    "trick": "Rail-cum-Road = Bogibeel (4.94 km) | Longest Sea Bridge = Atal Setu (21.8 km)!",
    "id": 177
  },
  {
    "category": "railway_gk",
    "category_name": "Railway & Transport GK",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "What does 'IRCTC', the Indian Railways subsidiary handling online ticketing, catering, and tourism, stand for?",
    "options": {
      "a": "Integrated Railway Communication and Ticket Centre",
      "b": "Indian Railway Commercial and Transport Corporation",
      "c": "Indian Railway Catering and Tourism Corporation",
      "d": "Indian Rail Central Ticketing Council"
    },
    "answer": "c",
    "correct_text": "Indian Railway Catering and Tourism Corporation",
    "formula": "IRCTC (est. 1999, HQ: New Delhi) — Navratna PSU under Ministry of Railways",
    "steps": [
      "IRCTC manages online e-ticketing, onboard catering, Rail Neer packaged drinking water, and rail tourism (Maharajas' Express, Bharat Gaurav)."
    ],
    "trick": "IRCTC = Indian Railway Catering and Tourism Corporation (est. 1999)!",
    "id": 178
  },
  {
    "category": "railway_gk",
    "category_name": "Railway & Transport GK",
    "exam": "RRB NTPC PYQ Pattern",
    "question": "In Indian Railways ticket booking, what does the 10-digit code 'PNR' stand for?",
    "options": {
      "a": "Passenger Name Record",
      "b": "Passenger Network Registration",
      "c": "Personal Number of Reservation",
      "d": "Primary National Rail-code"
    },
    "answer": "a",
    "correct_text": "Passenger Name Record",
    "formula": "PNR = 10-digit Passenger Name Record (managed by CRIS — Centre for Railway Information Systems)",
    "steps": [
      "The first 3 digits of a 10-digit PNR indicate the Passenger Reservation System (PRS) zone from which the ticket was booked (e.g., 6xx = Kolkata PRS: ER, SER, NFR, ECR, ECoR!)."
    ],
    "trick": "PNR = Passenger Name Record! Bonus Kolkata fact: PNRs starting with 6 belong to Kolkata PRS!",
    "id": 179
  },
  {
    "category": "railway_gk",
    "category_name": "Railway & Transport GK",
    "exam": "RRB NTPC CEN 06/2026 Focus",
    "question": "Where is the newly approved Vadhavan Port—set to become India's 13th major all-weather deep-draft greenfield port—being developed?",
    "options": {
      "a": "Purba Medinipur, West Bengal",
      "b": "Kutch district, Gujarat",
      "c": "Palghar district, Maharashtra",
      "d": "Ganjam district, Odisha"
    },
    "answer": "c",
    "correct_text": "Palghar district, Maharashtra",
    "formula": "Vadhavan Port (Maharashtra) — Joint Venture of JNPA (74%) & Maharashtra Maritime Board (26%)",
    "steps": [
      "Approved by the Union Cabinet in 2024, Vadhavan Port in Palghar (Maharashtra) is designed as a 20 m deep-draft mega-container port directly linked to the Western Dedicated Freight Corridor."
    ],
    "trick": "New Mega Greenfield Major Port = Vadhavan Port (Palghar, Maharashtra)!",
    "id": 180
  }
];

window.NTPC26_FORMULAS = [
  {
    "cat": "statistics",
    "title": "Empirical Relation (Mean, Median & Mode)",
    "formula": "Mode = 3 × Median − 2 × Mean",
    "note": "Also written as: Mean − Mode = 3 × (Mean − Median). Memorize both forms for 3-second NTPC answers!"
  },
  {
    "cat": "statistics",
    "title": "Variance, Standard Deviation & CV",
    "formula": "σ² = Σ(xᵢ − x̄)² / N  |  SD (σ) = √Variance  |  CV = (σ / x̄) × 100%",
    "note": "Lower CV means more consistent/stable data. Variance is always non-negative (≥ 0)."
  },
  {
    "cat": "statistics",
    "title": "Effect of Shift & Scaling on Statistics",
    "formula": "Add/Sub k: Mean±k, SD & Var UNCHANGED | Multiply k: Mean×k, SD×|k|, Var×k²",
    "note": "Shifting data never changes spread (Range, MD, SD, Variance remain identical)."
  },
  {
    "cat": "statistics",
    "title": "Grouped Data Median Formula",
    "formula": "Median = L + [ ((N/2) − cf) / f ] × h",
    "note": "L = lower limit of median class, cf = cumulative freq before median class, f = freq of median class, h = class width."
  },
  {
    "cat": "statistics",
    "title": "Grouped Data Mode Formula",
    "formula": "Mode = L + [ (f₁ − f₀) / (2f₁ − f₀ − f₂) ] × h",
    "note": "f₁ = modal class frequency (highest), f₀ = preceding class frequency, f₂ = succeeding class frequency."
  },
  {
    "cat": "statistics",
    "title": "First n Natural Numbers & Range/IQR",
    "formula": "Mean = (n+1)/2 | Var = (n²−1)/12 | Range = Max − Min | IQR = Q₃ − Q₁",
    "note": "For odd consecutive integers or AP with common diff d, Mean = Median = (First + Last) / 2."
  },
  {
    "cat": "science",
    "title": "Kinematics & Equations of Motion",
    "formula": "v = u + at  |  s = ut + ½at²  |  v² − u² = 2as",
    "note": "Free fall: u = 0, a = g ≈ 9.8 or 10 m/s². Avg speed for equal distances = 2v₁v₂ / (v₁ + v₂)."
  },
  {
    "cat": "science",
    "title": "Force, Momentum & Gravitation",
    "formula": "F = ma  |  p = mv  |  F = Gm₁m₂/r²  |  W_moon = (1/6) W_earth",
    "note": "G = 6.67 × 10⁻¹¹ N·m²/kg². Mass is constant everywhere; Weight (mg) is max at poles, 0 at Earth's center."
  },
  {
    "cat": "science",
    "title": "Work, Energy, Power & Electricity Bill",
    "formula": "W = Fs cosθ | KE = ½mv² | PE = mgh | 1 kWh = 3.6 × 10⁶ J",
    "note": "1 Unit of electricity = 1 kWh = (Watts × Hours) / 1000. 1 Horsepower (HP) = 746 W."
  },
  {
    "cat": "science",
    "title": "Electricity, Circuits & Joule's Law",
    "formula": "V = IR | R = ρL/A | R_s = R₁+R₂ | 1/R_p = 1/R₁+1/R₂ | H = I²Rt",
    "note": "Stretching a wire to n times length makes new resistance n²R! Power P = VI = I²R = V²/R."
  },
  {
    "cat": "science",
    "title": "Optics: Mirror, Lens & Power",
    "formula": "Mirror: 1/v + 1/u = 1/f | Lens: 1/v − 1/u = 1/f | P = 1/f(m)",
    "note": "Convex lens f > 0 (Hypermetropia); Concave lens f < 0 (Myopia). Mirror m = −v/u; Lens m = +v/u."
  },
  {
    "cat": "science",
    "title": "Important NCERT Chemical Compounds",
    "formula": "Baking Soda: NaHCO₃ | Washing: Na₂CO₃·10H₂O | Bleaching: CaOCl₂",
    "note": "Plaster of Paris: CaSO₄·½H₂O | Gypsum: CaSO₄·2H₂O | Quick Lime: CaO | Slaked Lime: Ca(OH)₂."
  },
  {
    "cat": "science",
    "title": "Alloys, Acids & Reactivity Series",
    "formula": "Brass: Cu+Zn | Bronze: Cu+Sn | Solder: Pb+Sn | Aqua Regia: 3HCl:1HNO₃",
    "note": "Amphoteric oxides: Al₂O₃ & ZnO (react with both acids & bases). Most reactive metal: K > Na > Ca > Mg."
  },
  {
    "cat": "science",
    "title": "Vitamins, Blood & Biology Master Rules",
    "formula": "Fat-soluble: A, D, E, K | Water-soluble: B, C | Normal BP: 120/80 mmHg",
    "note": "Universal Donor: O− | Universal Recipient: AB+ | 10% Energy Law (Lindeman) | Mendel Dihybrid: 9:3:3:1."
  },
  {
    "cat": "computer",
    "title": "Top NTPC Computer Abbreviations",
    "formula": "DNS: Domain Name System | HTTP: HyperText Transfer Protocol | BIOS: Basic Input Output System",
    "note": "SMTP: Simple Mail Transfer Protocol | EEPROM: Electrically Erasable PROM | VoIP: Voice over IP | GUI: Graphical User Interface."
  },
  {
    "cat": "computer",
    "title": "Memory Hierarchy & Unit Conversions",
    "formula": "4 bits = 1 Nibble | 8 bits = 1 Byte | 1024 B = 1 KB → MB → GB → TB → PB → EB → ZB → YB",
    "note": "Fastest to Slowest: Registers > L1/L2 Cache (SRAM) > RAM (DRAM) > SSD > HDD."
  },
  {
    "cat": "computer",
    "title": "5 Generations of Computers",
    "formula": "1st: Vacuum Tubes | 2nd: Transistors | 3rd: ICs | 4th: Microprocessors (VLSI) | 5th: AI (ULSI)",
    "note": "1st Gen example: ENIAC/UNIVAC | Father of Computer: Charles Babbage | Stored Program: John von Neumann."
  },
  {
    "cat": "computer",
    "title": "Essential Shortcuts & OSI 7 Layers",
    "formula": "Task Mgr: Ctrl+Shift+Esc | Hyperlink: Ctrl+K | Rename: F2 | Save As: F12 | Close: Alt+F4",
    "note": "OSI Layers (Bottom→Top): Physical, Data Link, Network (IP), Transport (TCP/UDP), Session, Presentation, Application (HTTP)."
  },
  {
    "cat": "railway_gk",
    "title": "Kolkata's 3 Railway Headquarters (High Priority!)",
    "formula": "ER: Fairlie Place, Kolkata | SER: Garden Reach, Kolkata | Metro Railway: Kolkata",
    "note": "Kolkata is the ONLY city in India housing 3 Zonal Railway Headquarters! CLW is at Chittaranjan (West Bengal)."
  },
  {
    "cat": "railway_gk",
    "title": "All 18 Indian Railway Zones & Key HQs",
    "formula": "NR: New Delhi | CR: Mumbai CSMT | WR: Mumbai Churchgate | SR: Chennai | SCR: Secunderabad",
    "note": "18th Zone: South Coast Railway (SCoR — Visakhapatnam) | ECoR: Bhubaneswar | NCR: Prayagraj | ECR: Hajipur | NFR: Maligaon (Guwahati)."
  },
  {
    "cat": "railway_gk",
    "title": "Indian Railways Production Units",
    "formula": "CLW (Chittaranjan): Electric Locos | ICF (Chennai): Vande Bharat Coaches | BLW (Varanasi): Locos",
    "note": "RCF: Kapurthala (Punjab) | MCF: Raebareli (UP) | RWF: Yelahanka (Bengaluru) | PLW: Patiala."
  },
  {
    "cat": "railway_gk",
    "title": "Track Gauges & Railway Superlatives",
    "formula": "Broad Gauge: 1.676 m (5 ft 6 in) | Metre Gauge: 1.000 m | Narrow Gauge: 0.762 m / 0.610 m",
    "note": "Longest Platform: SSS Hubballi (1,507 m) | Highest Arch Rail Bridge: Chenab Bridge (359 m, J&K) | Longest Route: Vivek Express."
  },
  {
    "cat": "railway_gk",
    "title": "Modern Rail Tech: Kavach, DFC & Milestones",
    "formula": "First Train: 16 Apr 1853 (Bombay–Thane, 34 km) | First Metro: Kolkata (24 Oct 1984)",
    "note": "Kavach: Indigenous ATP by RDSO (Lucknow) | EDFC: Ludhiana–Dankuni | WDFC: Dadri–JNPT | Net Zero Carbon Target: 2030."
  },
  {
    "cat": "railway_gk",
    "title": "Indian Highways, Waterways & Major Ports",
    "formula": "Longest NH: NH-44 (Srinagar–Kanyakumari) | NW-1: Prayagraj–Haldia (Ganga, 1,620 km)",
    "note": "Golden Quadrilateral: 5,846 km (Delhi–Mumbai–Chennai–Kolkata) | Only Riverine Major Port: Syama Prasad Mookerjee Port (Kolkata)."
  }
];
