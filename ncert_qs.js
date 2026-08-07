// ═══════════════════════════════════════════════════════════
// NCERT General Awareness Question Bank for SSC CGL Tier-I
// 50+ High-Yield MCQs: Class 6-10 | Science, History, Polity, Geography
// ═══════════════════════════════════════════════════════════
const NCERT_QS = [

  // ── PHYSICS ──────────────────────────────────────────────
  { id:"ph01", subject:"Physics", cls:"Class 9", topic:"Motion",
    q:"A body is said to be in uniform motion when it covers:",
    opts:["Equal distances in equal intervals of time","Unequal distances in equal intervals of time","Equal distances in unequal intervals of time","Variable speed in equal intervals"],
    ans:0, exp:"Uniform motion means the body covers equal distances in equal time intervals — speed is constant." },

  { id:"ph02", subject:"Physics", cls:"Class 9", topic:"Force & Laws of Motion",
    q:"Newton's Second Law of Motion gives the definition of:",
    opts:["Inertia","Force","Momentum","Velocity"],
    ans:1, exp:"F = ma. Newton's 2nd Law states Force = mass × acceleration, thereby defining the concept of Force." },

  { id:"ph03", subject:"Physics", cls:"Class 9", topic:"Work & Energy",
    q:"What happens to the kinetic energy of an object if its speed is doubled?",
    opts:["Doubles","Triples","Quadruples","Remains same"],
    ans:2, exp:"KE = ½mv². Doubling speed (v → 2v) makes KE = ½m(2v)² = 4 × (½mv²). So KE quadruples." },

  { id:"ph04", subject:"Physics", cls:"Class 9", topic:"Gravitation",
    q:"The value of acceleration due to gravity (g) on Earth's surface is approximately:",
    opts:["6.67 × 10⁻¹¹ m/s²","9.8 m/s²","8.9 m/s²","10.8 m/s²"],
    ans:1, exp:"g ≈ 9.8 m/s² on Earth's surface. G (gravitational constant) = 6.67 × 10⁻¹¹ N m²/kg²." },

  { id:"ph05", subject:"Physics", cls:"Class 10", topic:"Light",
    q:"The phenomenon responsible for the formation of a rainbow is:",
    opts:["Reflection","Refraction","Dispersion","Diffraction"],
    ans:2, exp:"Dispersion — white sunlight splits into 7 colours (VIBGYOR) when passing through water droplets, forming a rainbow." },

  { id:"ph06", subject:"Physics", cls:"Class 10", topic:"Electricity",
    q:"Which device converts electrical energy into mechanical energy?",
    opts:["Generator","Transformer","Electric Motor","Resistor"],
    ans:2, exp:"An Electric Motor converts electrical energy into mechanical (rotational) energy. A Generator does the reverse." },

  { id:"ph07", subject:"Physics", cls:"Class 8", topic:"Sound",
    q:"The speed of sound is maximum in:",
    opts:["Air","Water","Vacuum","Steel"],
    ans:3, exp:"Sound travels fastest in solids. Speed in steel ≈ 5,100 m/s, in water ≈ 1,500 m/s, and in air ≈ 340 m/s." },

  { id:"ph08", subject:"Physics", cls:"Class 10", topic:"Magnetic Effects",
    q:"Fleming's Left Hand Rule is used to find the direction of:",
    opts:["Induced current","Magnetic field","Force on current-carrying conductor","EMF"],
    ans:2, exp:"Fleming's Left Hand Rule gives the direction of force on a current-carrying conductor placed in a magnetic field (used in motors)." },

  // ── CHEMISTRY ─────────────────────────────────────────────
  { id:"ch01", subject:"Chemistry", cls:"Class 8", topic:"Metals & Non-Metals",
    q:"Which of the following is a non-metal that conducts electricity?",
    opts:["Sulphur","Carbon (Graphite)","Phosphorus","Iodine"],
    ans:1, exp:"Graphite (a form of carbon) is the only non-metal that conducts electricity. It is used as electrode material." },

  { id:"ch02", subject:"Chemistry", cls:"Class 9", topic:"Matter",
    q:"Which state of matter has a definite volume but no definite shape?",
    opts:["Solid","Liquid","Gas","Plasma"],
    ans:1, exp:"Liquids have definite volume (particles close together) but no definite shape (they take the shape of the container)." },

  { id:"ch03", subject:"Chemistry", cls:"Class 10", topic:"Chemical Reactions",
    q:"Rusting of iron is an example of which type of chemical reaction?",
    opts:["Decomposition","Displacement","Oxidation","Combination"],
    ans:2, exp:"Rusting (4Fe + 3O₂ + xH₂O → 2Fe₂O₃.xH₂O) is an oxidation reaction where iron combines with oxygen in presence of moisture." },

  { id:"ch04", subject:"Chemistry", cls:"Class 10", topic:"Acids Bases Salts",
    q:"The pH value of pure water at 25°C is:",
    opts:["0","7","14","8"],
    ans:1, exp:"Pure water is neutral with pH = 7. pH < 7 is acidic; pH > 7 is basic/alkaline." },

  { id:"ch05", subject:"Chemistry", cls:"Class 10", topic:"Carbon Compounds",
    q:"Which gas is produced when ethanol undergoes complete combustion?",
    opts:["CO","CO₂ and H₂O","CH₄","H₂"],
    ans:1, exp:"Complete combustion: C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O. Products are carbon dioxide and water." },

  { id:"ch06", subject:"Chemistry", cls:"Class 9", topic:"Atoms & Molecules",
    q:"The atomic number of an element is defined as the number of:",
    opts:["Neutrons in nucleus","Protons in nucleus","Electrons in outer shell","Nucleons in nucleus"],
    ans:1, exp:"Atomic number = number of protons in the nucleus. It uniquely identifies each element in the periodic table." },

  { id:"ch07", subject:"Chemistry", cls:"Class 8", topic:"Coal & Petroleum",
    q:"Which is called 'Black Gold'?",
    opts:["Coal","Petroleum","Natural Gas","Tar"],
    ans:1, exp:"Petroleum is called 'Black Gold' because it is black in colour and extremely valuable as a source of fuel and raw material." },

  { id:"ch08", subject:"Chemistry", cls:"Class 10", topic:"Periodic Table",
    q:"Elements in the same group of the periodic table have the same:",
    opts:["Atomic mass","Number of neutrons","Valence electrons","Atomic number"],
    ans:2, exp:"Elements in the same group have the same number of valence electrons and thus exhibit similar chemical properties." },

  // ── BIOLOGY ──────────────────────────────────────────────
  { id:"bi01", subject:"Biology", cls:"Class 9", topic:"Cell",
    q:"The powerhouse of the cell is:",
    opts:["Nucleus","Ribosome","Mitochondria","Golgi body"],
    ans:2, exp:"Mitochondria produces ATP (energy) through cellular respiration and is hence called the powerhouse of the cell." },

  { id:"bi02", subject:"Biology", cls:"Class 10", topic:"Life Processes",
    q:"In which part of the human body does digestion of fats mainly occur?",
    opts:["Stomach","Small Intestine","Large Intestine","Mouth"],
    ans:1, exp:"Most fat digestion occurs in the small intestine with the help of bile from the liver and lipase from the pancreas." },

  { id:"bi03", subject:"Biology", cls:"Class 10", topic:"Control & Coordination",
    q:"The hormone responsible for the 'Fight or Flight' response is:",
    opts:["Insulin","Thyroxine","Adrenaline","Oestrogen"],
    ans:2, exp:"Adrenaline (Epinephrine) from the adrenal glands triggers the fight-or-flight response — increases heart rate, dilates pupils." },

  { id:"bi04", subject:"Biology", cls:"Class 10", topic:"Heredity & Evolution",
    q:"Who proposed the theory of 'Natural Selection'?",
    opts:["Gregor Mendel","Charles Darwin","Louis Pasteur","Jean-Baptiste Lamarck"],
    ans:1, exp:"Charles Darwin proposed the Theory of Natural Selection in his book 'On the Origin of Species' (1859)." },

  { id:"bi05", subject:"Biology", cls:"Class 8", topic:"Microorganisms",
    q:"Which type of microorganism is responsible for the disease Malaria?",
    opts:["Bacteria","Fungi","Protozoa","Virus"],
    ans:2, exp:"Malaria is caused by Plasmodium (a protozoan), transmitted by the female Anopheles mosquito." },

  { id:"bi06", subject:"Biology", cls:"Class 10", topic:"Reproduction",
    q:"In human females, the fusion of egg and sperm normally takes place in the:",
    opts:["Uterus","Ovary","Fallopian Tube","Vagina"],
    ans:2, exp:"Fertilization (fusion of egg and sperm) normally occurs in the Fallopian tube (oviduct). The fertilized egg then implants in the uterus." },

  { id:"bi07", subject:"Biology", cls:"Class 9", topic:"Tissues",
    q:"Which tissue is responsible for the transport of water and minerals in plants?",
    opts:["Phloem","Xylem","Parenchyma","Collenchyma"],
    ans:1, exp:"Xylem transports water and minerals from roots upward. Phloem transports food (sugars) from leaves to other parts." },

  { id:"bi08", subject:"Biology", cls:"Class 10", topic:"Our Environment",
    q:"Which gas is mainly responsible for the Greenhouse Effect?",
    opts:["Oxygen","Nitrogen","Carbon Dioxide","Hydrogen"],
    ans:2, exp:"CO₂ (Carbon Dioxide) is the primary greenhouse gas responsible for global warming and the greenhouse effect." },

  // ── HISTORY ──────────────────────────────────────────────
  { id:"hi01", subject:"History", cls:"Class 6", topic:"Ancient India",
    q:"The Harappan civilization flourished along which river?",
    opts:["Ganga","Yamuna","Indus","Brahmaputra"],
    ans:2, exp:"The Harappan (Indus Valley) Civilization (2600–1900 BCE) flourished along the Indus river and its tributaries." },

  { id:"hi02", subject:"History", cls:"Class 7", topic:"Medieval India",
    q:"Who was the founder of the Mughal Empire in India?",
    opts:["Akbar","Humayun","Babur","Shah Jahan"],
    ans:2, exp:"Babur founded the Mughal Empire after defeating Ibrahim Lodi at the First Battle of Panipat in 1526." },

  { id:"hi03", subject:"History", cls:"Class 8", topic:"Modern India",
    q:"The Revolt of 1857 began at:",
    opts:["Delhi","Lucknow","Meerut","Kanpur"],
    ans:2, exp:"The Revolt of 1857 (First War of Independence) began at Meerut on May 10, 1857, when Indian sepoys revolted against British rule." },

  { id:"hi04", subject:"History", cls:"Class 8", topic:"Modern India",
    q:"The Indian National Congress was founded in which year?",
    opts:["1857","1885","1905","1920"],
    ans:1, exp:"The Indian National Congress (INC) was founded in 1885 by A.O. Hume, Dadabhai Naoroji, and Dinshaw Wacha." },

  { id:"hi05", subject:"History", cls:"Class 8", topic:"Modern India",
    q:"The Partition of Bengal (1905) was done by which Viceroy?",
    opts:["Lord Curzon","Lord Dalhousie","Lord Mountbatten","Lord Wellesley"],
    ans:0, exp:"Lord Curzon partitioned Bengal in 1905 into East and West Bengal, which led to the Swadeshi Movement." },

  { id:"hi06", subject:"History", cls:"Class 8", topic:"Nationalism",
    q:"The Non-Cooperation Movement was launched by Mahatma Gandhi in:",
    opts:["1919","1920","1922","1930"],
    ans:1, exp:"Gandhi launched the Non-Cooperation Movement in 1920. It was withdrawn in 1922 after the Chauri Chaura violence." },

  { id:"hi07", subject:"History", cls:"Class 8", topic:"Nationalism",
    q:"The Dandi March (Salt March) was associated with which movement?",
    opts:["Non-Cooperation Movement","Civil Disobedience Movement","Quit India Movement","Swadeshi Movement"],
    ans:1, exp:"The Dandi March (March 1930) was part of the Civil Disobedience Movement launched by Gandhi against the British salt tax." },

  { id:"hi08", subject:"History", cls:"Class 6", topic:"Ancient Rulers",
    q:"The Ashoka pillar at Sarnath has the emblem that India adopted as its National Emblem. Ashoka was a ruler of which dynasty?",
    opts:["Gupta","Maurya","Chola","Kushan"],
    ans:1, exp:"Ashoka was the third ruler of the Maurya Empire. The Lion Capital of Sarnath (made by Ashoka) is India's National Emblem." },

  // ── POLITY ───────────────────────────────────────────────
  { id:"po01", subject:"Polity", cls:"Class 8", topic:"Constitution",
    q:"The Indian Constitution came into effect on:",
    opts:["15 August 1947","26 November 1949","26 January 1950","2 October 1950"],
    ans:2, exp:"India's Constitution came into force on 26 January 1950. This date is celebrated as Republic Day." },

  { id:"po02", subject:"Polity", cls:"Class 8", topic:"Parliament",
    q:"The Upper House of the Indian Parliament is called:",
    opts:["Lok Sabha","Rajya Sabha","Vidhan Sabha","Vidhan Parishad"],
    ans:1, exp:"Rajya Sabha is the Upper House (Council of States). Lok Sabha is the Lower House (House of the People)." },

  { id:"po03", subject:"Polity", cls:"Class 8", topic:"Fundamental Rights",
    q:"Right to Education for children (6-14 years) is guaranteed under which Article?",
    opts:["Article 14","Article 19","Article 21A","Article 32"],
    ans:2, exp:"Article 21A (added by 86th Amendment, 2002) guarantees free and compulsory education for children aged 6-14 years." },

  { id:"po04", subject:"Polity", cls:"Class 8", topic:"Judiciary",
    q:"Who is the head of the Supreme Court of India?",
    opts:["President","Prime Minister","Chief Justice of India","Attorney General"],
    ans:2, exp:"The Chief Justice of India (CJI) heads the Supreme Court of India, which is the apex judicial body." },

  { id:"po05", subject:"Polity", cls:"Class 9", topic:"Democratic Politics",
    q:"Which system of government does India follow?",
    opts:["Presidential","Parliamentary","Federal with unitary bias","Confederal"],
    ans:1, exp:"India follows a Parliamentary system of government where the executive (Council of Ministers) is responsible to the legislature (Parliament)." },

  { id:"po06", subject:"Polity", cls:"Class 8", topic:"Preamble",
    q:"The word 'Secular' was added to the Indian Constitution's Preamble by which Amendment?",
    opts:["42nd Amendment","44th Amendment","52nd Amendment","74th Amendment"],
    ans:0, exp:"The 42nd Constitutional Amendment (1976) added the words 'Socialist', 'Secular', and 'Integrity' to the Preamble." },

  { id:"po07", subject:"Polity", cls:"Class 9", topic:"Elections",
    q:"The minimum age to vote in Indian general elections is:",
    opts:["16 years","18 years","21 years","25 years"],
    ans:1, exp:"The voting age in India was lowered from 21 to 18 years by the 61st Constitutional Amendment Act, 1988." },

  { id:"po08", subject:"Polity", cls:"Class 8", topic:"Local Government",
    q:"The 73rd Constitutional Amendment (1992) relates to:",
    opts:["Urban Local Bodies","Panchayati Raj","Fundamental Duties","Directive Principles"],
    ans:1, exp:"The 73rd Amendment gave constitutional status to Panchayati Raj institutions (rural local government). The 74th covers Urban Local Bodies." },

  // ── GEOGRAPHY ────────────────────────────────────────────
  { id:"ge01", subject:"Geography", cls:"Class 6", topic:"Solar System",
    q:"Which is the largest planet in our Solar System?",
    opts:["Saturn","Earth","Jupiter","Neptune"],
    ans:2, exp:"Jupiter is the largest planet in the Solar System. It has the Great Red Spot — a storm that has lasted for centuries." },

  { id:"ge02", subject:"Geography", cls:"Class 9", topic:"India — Physical Features",
    q:"The Himalayan river Ganga originates from:",
    opts:["Yamunotri","Gangotri","Kedarnath","Badrinath"],
    ans:1, exp:"River Ganga originates from Gangotri glacier in Uttarkashi, Uttarakhand. The Yamuna originates from Yamunotri." },

  { id:"ge03", subject:"Geography", cls:"Class 9", topic:"Climate",
    q:"The 'Monsoon' in India arrives first at:",
    opts:["Mumbai","Delhi","Kerala","Chennai"],
    ans:2, exp:"The Southwest Monsoon first arrives at Kerala (Thiruvananthapuram) around June 1st and then progresses northward." },

  { id:"ge04", subject:"Geography", cls:"Class 8", topic:"Resources",
    q:"Which state is the largest producer of coal in India?",
    opts:["West Bengal","Odisha","Jharkhand","Madhya Pradesh"],
    ans:2, exp:"Jharkhand is the largest producer of coal in India. Damodar Valley region (Jharia, Bokaro) contains the richest coal deposits." },

  { id:"ge05", subject:"Geography", cls:"Class 9", topic:"Drainage System",
    q:"The river Brahmaputra is called 'Tsangpo' in which country?",
    opts:["Nepal","Bhutan","China (Tibet)","Bangladesh"],
    ans:2, exp:"The Brahmaputra originates in Tibet (China) as Tsangpo, flows through Arunachal Pradesh (as Dihang), and then through Assam." },

  { id:"ge06", subject:"Geography", cls:"Class 7", topic:"Atmosphere",
    q:"The layer of atmosphere that contains the ozone layer is:",
    opts:["Troposphere","Stratosphere","Mesosphere","Thermosphere"],
    ans:1, exp:"The ozone layer is found in the Stratosphere (15-35 km above Earth's surface). It absorbs harmful UV radiation from the Sun." },

  { id:"ge07", subject:"Geography", cls:"Class 9", topic:"India — Location",
    q:"The Tropic of Cancer (23.5°N) passes through how many Indian states?",
    opts:["6","7","8","9"],
    ans:2, exp:"The Tropic of Cancer passes through 8 Indian states: Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, WB, Tripura, and Mizoram." },

  { id:"ge08", subject:"Geography", cls:"Class 10", topic:"Minerals",
    q:"Which mineral is known as 'Iron Ore of Commerce'?",
    opts:["Magnetite","Haematite","Limonite","Siderite"],
    ans:1, exp:"Haematite (Fe₂O₃) is called Iron Ore of Commerce because it has 60-70% iron content and is the most widely used iron ore." },

  { id:"ge09", subject:"Geography", cls:"Class 10", topic:"Manufacturing Industries",
    q:"Jamshedpur is famous for which industry?",
    opts:["Textile","Iron & Steel","Petrochemical","Sugar"],
    ans:1, exp:"Jamshedpur (Jharkhand) is home to Tata Iron & Steel Company (TISCO), India's first integrated iron and steel plant (est. 1907)." },

  { id:"ge10", subject:"Geography", cls:"Class 9", topic:"Natural Vegetation",
    q:"Sundarbans — the world's largest mangrove forest — is located in:",
    opts:["West Bengal & Odisha","West Bengal & Bangladesh","Andaman Islands","Gujarat"],
    ans:1, exp:"The Sundarbans mangrove forest spans the delta of the Ganga-Brahmaputra and lies across West Bengal (India) and Bangladesh." }
];
