// NCERT Study Notes for SSC CGL
const NCERT_NOTES = {
  science_physics: [
    {
      id: 'phy01',
      title: 'Motion & Rest',
      cls: 'Class 9',
      chapter: 'Ch 8 — Motion',
      topic_tag: 'physics',
      facts: [
        'An object is in **motion** if its position changes with respect to its surroundings in a given time.',
        '**Distance** is the actual path length covered by an object and is a **scalar** quantity.',
        '**Displacement** is the shortest straight line distance between initial and final positions and is a **vector** quantity.',
        '**Speed** is distance travelled per unit time (m/s); **Velocity** is displacement per unit time.',
        '**Acceleration** is the rate of change of velocity, denoted by **a = (v - u) / t**.',
        'The first equation of motion is **v = u + at**.',
        'The second equation of motion is **s = ut + ½at²**.',
        'The third equation of motion is **v² = u² + 2as**.',
        'In **uniform motion**, an object covers equal distances in equal intervals of time.',
        'In **non-uniform motion**, unequal distances are covered in equal intervals of time.',
        'An object in **uniform circular motion** experiences continuous change in velocity due to change in direction.',
        '**Odometer** in vehicles measures distance, whereas a **speedometer** measures instantaneous speed.'
      ]
    },
    {
      id: 'phy02',
      title: 'Force & Laws of Motion',
      cls: 'Class 9',
      chapter: 'Ch 9 — Force and Laws of Motion',
      topic_tag: 'physics',
      facts: [
        'A **force** can change the state of rest, motion, shape, or size of a body.',
        '**Balanced forces** do not change the state of rest or motion of an object.',
        '**Unbalanced forces** are required to accelerate or decelerate an object.',
        '**Newton\'s First Law** (Law of **Inertia**): An object remains in its state of rest or uniform motion unless acted upon by an external unbalanced force.',
        '**Inertia** is the natural tendency of an object to resist a change in its state of motion. Mass is a measure of inertia.',
        '**Momentum** (**p**) is the product of mass and velocity (**p = mv**). It is a vector quantity.',
        '**Newton\'s Second Law**: The rate of change of momentum is directly proportional to the applied unbalanced force.',
        'The mathematical formulation of the second law gives **F = ma** (Force = mass × acceleration).',
        '**Newton\'s Third Law**: For every action, there is an equal and opposite reaction.',
        '**Impulse** is a large force acting for a short time, equal to change in momentum (**F × t = Δp**).',
        '**Law of Conservation of Momentum**: Total momentum of an isolated system remains constant.',
        '**Friction** opposes relative motion between two surfaces in contact; types include static, sliding, and rolling friction.'
      ]
    },
    {
      id: 'phy03',
      title: 'Gravitation',
      cls: 'Class 9',
      chapter: 'Ch 10 — Gravitation',
      topic_tag: 'physics',
      facts: [
        '**Universal Law of Gravitation**: Force between two objects is directly proportional to the product of their masses and inversely proportional to the square of the distance between them.',
        'The formula is **F = G(m1×m2)/r²**.',
        'The Universal Gravitational Constant (**G**) has a value of **6.67 × 10⁻¹¹ N·m²/kg²**.',
        '**Gravity** is the phenomenon of attraction between the earth and any object.',
        'Acceleration due to gravity (**g**) on earth is approximately **9.8 m/s²**.',
        '**Free fall** is the motion of a body falling solely under the influence of earth\'s gravity.',
        '**Mass** is the quantity of matter and remains constant everywhere.',
        '**Weight** is the force of gravity acting on an object (**W = mg**) and varies with location.',
        'Weight of an object on the **Moon** is **1/6th** of its weight on Earth.',
        '**Kepler\'s First Law** (Law of Orbits): Planets move in elliptical orbits with the sun at one focus.',
        '**Kepler\'s Second Law** (Law of Areas): A line joining a planet and the sun sweeps equal areas in equal intervals of time.',
        '**Kepler\'s Third Law** (Law of Periods): The square of the time period is proportional to the cube of the semi-major axis (**T² ∝ r³**).'
      ]
    },
    {
      id: 'phy04',
      title: 'Work Energy Power',
      cls: 'Class 9',
      chapter: 'Ch 11 — Work and Energy',
      topic_tag: 'physics',
      facts: [
        '**Work** is done when a force produces displacement. Formula: **W = F × s × cosθ**.',
        'The SI unit of work is **Joule** (J).',
        'Work can be positive, negative, or zero depending on the angle (**θ**) between force and displacement.',
        '**Energy** is the capacity to do work. Its SI unit is also the Joule.',
        '**Kinetic Energy (KE)** is energy possessed by an object due to its motion: **KE = ½mv²**.',
        '**Potential Energy (PE)** is energy possessed due to position or configuration: **PE = mgh**.',
        '**Law of Conservation of Energy**: Energy can neither be created nor destroyed; it can only transform from one form to another.',
        'The sum of kinetic and potential energies is called **Mechanical Energy**.',
        '**Power** is the rate of doing work or rate of transfer of energy: **P = W/t**.',
        'The SI unit of power is **Watt** (W). 1 Watt = 1 Joule/second.',
        'Commercial unit of energy is the **kilowatt-hour (kWh)**. 1 kWh = **3.6 × 10⁶ Joules**.',
        '1 **Horsepower (hp)** is approximately equal to **746 Watts**.'
      ]
    },
    {
      id: 'phy05',
      title: 'Sound',
      cls: 'Class 9',
      chapter: 'Ch 12 — Sound',
      topic_tag: 'physics',
      facts: [
        '**Sound** is a mechanical wave that requires a material medium (solid, liquid, or gas) to travel.',
        'Sound waves are **longitudinal waves**, characterized by compressions and rarefactions.',
        '**Wavelength (λ)** is the distance between two consecutive compressions or rarefactions.',
        '**Frequency (ν)** is the number of oscillations per second. Its SI unit is **Hertz (Hz)**.',
        '**Time period (T)** is the time taken for one complete oscillation. **ν = 1/T**.',
        'Speed of sound (**v**) = Wavelength × Frequency (**v = λν**).',
        'Speed of sound in air at normal temperature is roughly **343 m/s** to 344 m/s.',
        'Human audible range is **20 Hz to 20,000 Hz**.',
        'Sounds below 20 Hz are called **infrasound** (e.g., produced by elephants, earthquakes).',
        'Sounds above 20,000 Hz are called **ultrasound** (used in medical imaging).',
        '**Echo** is the reflection of sound. For a distinct echo, minimum distance to the obstacle should be approx **17.2 m**.',
        '**SONAR** (Sound Navigation and Ranging) uses ultrasonic waves to measure distance, direction, and speed of underwater objects.'
      ]
    },
    {
      id: 'phy06',
      title: 'Light Reflection',
      cls: 'Class 10',
      chapter: 'Ch 10 — Light – Reflection and Refraction',
      topic_tag: 'physics',
      facts: [
        'Light travels in straight lines, a property known as **rectilinear propagation**.',
        '**First Law of Reflection**: Angle of incidence (**∠i**) is equal to the angle of reflection (**∠r**).',
        '**Second Law of Reflection**: Incident ray, reflected ray, and normal at the point of incidence all lie in the same plane.',
        'A **plane mirror** forms a virtual, erect, and laterally inverted image of the same size as the object.',
        '**Concave mirrors** (converging) can form real/inverted and virtual/erect images depending on object position.',
        '**Convex mirrors** (diverging) always form virtual, erect, and diminished images.',
        'Convex mirrors are commonly used as **rear-view mirrors** in vehicles due to their wider field of view.',
        'Concave mirrors are used in **torches**, searchlights, and by dentists.',
        '**Pole (P)** is the center of the reflecting surface of a spherical mirror.',
        '**Focal length (f)** is half the radius of curvature (**R**), i.e., **f = R/2**.',
        '**Mirror Formula**: **1/v + 1/u = 1/f** (where u=object distance, v=image distance).',
        '**Magnification (m)** = Height of image / Height of object = **-v/u**.'
      ]
    },
    {
      id: 'phy07',
      title: 'Light Refraction',
      cls: 'Class 10',
      chapter: 'Ch 10 — Light – Reflection and Refraction',
      topic_tag: 'physics',
      facts: [
        '**Refraction** is the bending of light when it passes obliquely from one medium to another due to change in speed.',
        '**Snell\'s Law**: The ratio of sine of angle of incidence to the sine of angle of refraction is a constant (**sin i / sin r = constant**).',
        'This constant is the **Refractive Index** (**n**) of the second medium with respect to the first.',
        'Absolute refractive index of a medium is **c / v** (speed of light in vacuum / speed in medium).',
        'When light goes from rarer to denser medium, it bends **towards** the normal.',
        '**Total Internal Reflection (TIR)** occurs when light goes from denser to rarer medium and the angle of incidence exceeds the **critical angle**.',
        'Optical fibres and diamond sparkle are based on **TIR**.',
        '**Convex lenses** are converging and mostly form real images; **Concave lenses** are diverging and form virtual images.',
        '**Lens Formula**: **1/v - 1/u = 1/f**.',
        '**Power of a Lens (P)** is the reciprocal of its focal length in meters: **P = 1/f**.',
        'SI unit of lens power is **Dioptre (D)**. Power of convex lens is positive, concave is negative.',
        'A **prism** causes **dispersion** of white light into 7 colors (VIBGYOR). Red bends the least, Violet bends the most.'
      ]
    },
    {
      id: 'phy08',
      title: 'Electricity',
      cls: 'Class 10',
      chapter: 'Ch 12 — Electricity',
      topic_tag: 'physics',
      facts: [
        'Electric current (**I**) is the rate of flow of electric charge. SI unit is **Ampere (A)**.',
        'Potential difference (**V**) is the work done to move a unit charge. SI unit is **Volt (V)**.',
        '**Ohm\'s Law**: Current is directly proportional to potential difference, **V = IR**, where **R** is resistance.',
        'Resistance depends on length, cross-sectional area, material, and temperature.',
        'Resistivity (**ρ**) is a characteristic property of the material: **R = ρ(L/A)**.',
        'In a **Series circuit**, current remains constant but voltage divides: **R_eq = R₁ + R₂ + R₃**.',
        'In a **Parallel circuit**, voltage remains constant but current divides: **1/R_eq = 1/R₁ + 1/R₂ + 1/R₃**.',
        'An **ammeter** measures current and is always connected in series.',
        'A **voltmeter** measures potential difference and is connected in parallel.',
        '**Joule\'s Law of Heating**: Heat produced **H = I²Rt**.',
        'Electric power **P = VI = I²R = V²/R**. SI unit is **Watt**.',
        'Tungsten is used for bulb filaments due to its high melting point and resistance.'
      ]
    },
    {
      id: 'phy09',
      title: 'Magnetic Effects',
      cls: 'Class 10',
      chapter: 'Ch 13 — Magnetic Effects of Electric Current',
      topic_tag: 'physics',
      facts: [
        '**Oersted\'s Experiment** showed that a compass needle deflects near a current-carrying wire, linking electricity and magnetism.',
        'Magnetic field lines emerge from the **North pole** and merge at the **South pole** outside the magnet.',
        'The degree of closeness of magnetic field lines indicates the **relative strength** of the magnetic field.',
        'A **solenoid** is a coil of many circular turns of insulated wire. Its magnetic field resembles that of a bar magnet.',
        '**Electromagnet**: A temporary magnet made by passing current through a solenoid with a soft iron core.',
        '**Fleming\'s Left-Hand Rule** gives the direction of magnetic force on a current-carrying conductor (used in motors).',
        'An **Electric Motor** converts electrical energy into mechanical energy.',
        '**Electromagnetic Induction (EMI)**: The production of induced current in a coil due to changing magnetic field, discovered by Faraday.',
        '**Fleming\'s Right-Hand Rule** gives the direction of induced current (used in generators).',
        'An **Electric Generator** converts mechanical energy into electrical energy based on EMI.',
        '**Direct Current (DC)** flows in one direction, while **Alternating Current (AC)** reverses direction periodically.',
        'Domestic circuits in India use AC with a frequency of **50 Hz**. The earth wire provides a low resistance path for safety.'
      ]
    },
    {
      id: 'phy10',
      title: 'Natural Phenomena',
      cls: 'Class 8',
      chapter: 'Ch 15 — Some Natural Phenomena',
      topic_tag: 'physics',
      facts: [
        'Static electricity is produced by rubbing objects together, transferring **electrons**.',
        'Like charges repel each other, while unlike charges **attract** each other.',
        'An **electroscope** is a device used to detect the presence and nature of electric charge on a body.',
        '**Lightning** is an electric discharge between clouds or between a cloud and the earth.',
        'A **lightning conductor** protects tall buildings by providing a direct path for the electric charge to the ground.',
        'Earthquakes are sudden tremors caused by disturbances deep inside the earth\'s **crust**.',
        'The power of an earthquake is expressed on the **Richter scale**.',
        'Destructive earthquakes generally have a magnitude higher than **7** on the Richter scale.',
        'The instrument used to record seismic waves is called a **seismograph**.',
        '**Cyclones** are violent storms characterized by high-speed winds rotating around a low-pressure center.',
        'Cyclones are known as **Hurricanes** in the Americas and **Typhoons** in Japan and the Philippines.',
        'High-speed winds are accompanied by reduced air **pressure**.'
      ]
    }
  ],
  science_chemistry: [
    {
      id: 'chem01',
      title: 'Chemical Reactions & Equations',
      cls: 'Class 10',
      chapter: 'Ch 1 — Chemical Reactions and Equations',
      topic_tag: 'chemistry',
      facts: [
        'A chemical equation is balanced to satisfy the **Law of Conservation of Mass**.',
        '**Combination Reaction**: Two or more substances combine to form a single product (e.g., burning of coal, formation of water).',
        '**Decomposition Reaction**: A single reactant breaks down into simpler products (e.g., heating of limestone).',
        '**Displacement Reaction**: A more reactive element displaces a less reactive element from its compound (e.g., Fe + CuSO₄).',
        '**Double Displacement Reaction**: Exchange of ions between two reactants occurs (e.g., precipitation reactions).',
        '**Exothermic Reactions** release heat along with products (e.g., respiration).',
        '**Endothermic Reactions** absorb energy (heat, light, or electricity) to proceed.',
        '**Oxidation** is the gain of oxygen or loss of hydrogen.',
        '**Reduction** is the loss of oxygen or gain of hydrogen.',
        'A reaction where oxidation and reduction occur simultaneously is a **Redox** reaction.',
        '**Corrosion**: Degradation of metals by air, moisture, or chemicals (e.g., rusting of iron).',
        '**Rancidity**: Oxidation of fats and oils in food, leading to bad smell and taste, prevented by antioxidants.'
      ]
    },
    {
      id: 'chem02',
      title: 'Acids Bases Salts',
      cls: 'Class 10',
      chapter: 'Ch 2 — Acids, Bases and Salts',
      topic_tag: 'chemistry',
      facts: [
        '**Acids** are sour in taste, turn blue litmus red, and release **H⁺ ions** in aqueous solution.',
        '**Bases** are bitter, soapy to touch, turn red litmus blue, and release **OH⁻ ions** in water.',
        'Water-soluble bases are called **alkalis** (e.g., NaOH, KOH).',
        '**Indicators** change color in acids and bases (e.g., Litmus, Phenolphthalein, Methyl orange).',
        '**Neutralisation Reaction**: Acid + Base → Salt + Water (e.g., HCl + NaOH → NaCl + H₂O).',
        '**pH Scale** ranges from 0-14. pH < 7 is acidic, pH = 7 is neutral, pH > 7 is basic.',
        'Stomach acid is **Hydrochloric acid (HCl)**. Antacids (mild bases like milk of magnesia) neutralize excess acid.',
        'Tooth decay starts when mouth pH is below **5.5**.',
        '**Baking Soda** is Sodium Bicarbonate (**NaHCO₃**).',
        '**Washing Soda** is Sodium Carbonate Decahydrate (**Na₂CO₃·10H₂O**).',
        '**Bleaching Powder** is Calcium Oxychloride (**CaOCl₂**).',
        '**Plaster of Paris** (CaSO₄·½H₂O) is obtained by heating Gypsum (CaSO₄·2H₂O) at 373 K.'
      ]
    },
    {
      id: 'chem03',
      title: 'Metals & Non-metals',
      cls: 'Class 10',
      chapter: 'Ch 3 — Metals and Non-metals',
      topic_tag: 'chemistry',
      facts: [
        '**Metals** are generally solid, lustrous, malleable, ductile, and good conductors of heat and electricity.',
        '**Mercury (Hg)** is the only metal that is liquid at room temperature.',
        '**Non-metals** can be solids, liquids (Bromine), or gases. They are poor conductors, except **Graphite**.',
        '**Reactivity Series**: Potassium (**K**) is most reactive, followed by Na > Ca > Mg > Al > Zn > Fe > Pb > Cu > Hg > Ag > **Au** (least).',
        'Metals react with oxygen to form **basic oxides**; non-metals form **acidic or neutral oxides**.',
        '**Amphoteric oxides** (e.g., Al₂O₃, ZnO) show both acidic and basic behavior.',
        'Ionic compounds are formed by the transfer of electrons from a metal to a non-metal. They have high melting points.',
        '**Metallurgy** involves concentration of ore, reduction to metal, and refining.',
        '**Roasting** is heating sulfide ores in excess air; **Calcination** is heating carbonate ores in limited air.',
        '**Alloy**: A homogeneous mixture of two or more metals (or metal and non-metal).',
        '**Brass** is an alloy of Cu and Zn; **Bronze** is Cu and Sn; **Solder** is Pb and Sn.',
        'Rusting of iron requires both air (oxygen) and **moisture**.'
      ]
    },
    {
      id: 'chem04',
      title: 'Carbon Compounds',
      cls: 'Class 10',
      chapter: 'Ch 4 — Carbon and its Compounds',
      topic_tag: 'chemistry',
      facts: [
        'Carbon forms **covalent bonds** by sharing valence electrons to achieve inert gas configuration.',
        'Carbon shows **Catenation**: the unique ability to form long chains and rings by bonding with other carbon atoms.',
        'Carbon has a valency of 4, known as **tetravalency**.',
        '**Hydrocarbons** contain only carbon and hydrogen.',
        '**Alkanes** are saturated hydrocarbons with single bonds (General formula: **CnH2n+2**).',
        '**Alkenes** (double bond, **CnH2n**) and **Alkynes** (triple bond, **CnH2n-2**) are unsaturated hydrocarbons.',
        '**Homologous Series**: A series of compounds with the same functional group and a difference of **-CH₂** between successive members.',
        'Important functional groups: Alcohol (-OH), Aldehyde (-CHO), Ketone (-CO-), Carboxylic Acid (-COOH).',
        '**Ethanol** (C₂H₅OH) is an active ingredient in alcoholic drinks and a good solvent.',
        '**Ethanoic acid** (CH₃COOH), or acetic acid, in a 5-8% solution in water is called **vinegar**.',
        '**Esterification**: Reaction of an alcohol and a carboxylic acid to form a sweet-smelling ester.',
        '**Soaps** are sodium or potassium salts of long-chain carboxylic acids. They clean via **micelle** formation.'
      ]
    },
    {
      id: 'chem05',
      title: 'Periodic Table',
      cls: 'Class 10',
      chapter: 'Ch 5 — Periodic Classification of Elements',
      topic_tag: 'chemistry',
      facts: [
        '**Dobereiner\'s Triads**: Elements arranged in groups of three with similar properties, middle element\'s mass being roughly the average of the other two.',
        '**Newlands\' Law of Octaves**: When arranged by increasing atomic mass, every eighth element has properties similar to the first.',
        '**Mendeleev\'s Periodic Law**: Properties of elements are periodic functions of their **atomic masses**.',
        'Mendeleev left gaps in his table for undiscovered elements like Scandium, Gallium, and Germanium.',
        '**Modern Periodic Law** (Moseley): Properties of elements are a periodic function of their **atomic numbers**.',
        'The Modern Periodic Table has **18 vertical columns (Groups)** and **7 horizontal rows (Periods)**.',
        'Elements in the same group have the same number of **valence electrons**.',
        '**Atomic Radius** generally decreases across a period (left to right) and increases down a group.',
        '**Metallic character** decreases across a period and increases down a group.',
        '**Non-metallic character** increases across a period and decreases down a group.',
        'Group 1 elements are **Alkali metals**; Group 17 are **Halogens**.',
        'Group 18 elements are **Noble gases** with complete outer shells, making them highly unreactive.'
      ]
    },
    {
      id: 'chem06',
      title: 'Atoms Molecules',
      cls: 'Class 9',
      chapter: 'Ch 3 — Atoms and Molecules',
      topic_tag: 'chemistry',
      facts: [
        '**Law of Conservation of Mass** (Lavoisier): Mass can neither be created nor destroyed in a chemical reaction.',
        '**Law of Constant Proportions** (Proust): In a chemical substance, elements are always present in definite proportions by mass.',
        '**Dalton\'s Atomic Theory** proposed that matter is made of indivisible particles called atoms.',
        'An **atom** is the smallest particle of an element that can take part in a chemical reaction.',
        'A **molecule** is the smallest particle of an element or compound capable of independent existence.',
        '**Atomic Mass Unit (u)** is defined as exactly 1/12th the mass of a Carbon-12 atom.',
        '**Atomicity** is the number of atoms constituting a molecule (e.g., O₂ is diatomic, O₃ is triatomic).',
        'An **ion** is a charged atom or group of atoms (Cation is positive, Anion is negative).',
        '**Valency** is the combining capacity of an element.',
        'The **chemical formula** of a compound represents its composition using symbols and valencies.',
        '**Molecular Mass** is the sum of atomic masses of all atoms in a molecule.',
        '**Mole Concept**: One mole of any substance contains **6.022 × 10²³** particles (Avogadro constant).'
      ]
    },
    {
      id: 'chem07',
      title: 'Structure of Atom',
      cls: 'Class 9',
      chapter: 'Ch 4 — Structure of the Atom',
      topic_tag: 'chemistry',
      facts: [
        'J.J. Thomson discovered the **electron** and proposed the "plum pudding" model of the atom.',
        'Rutherford\'s alpha-particle scattering experiment led to the discovery of the dense, positively charged **nucleus**.',
        'James Chadwick discovered the **neutron**, a neutral particle present in the nucleus.',
        '**Protons** (positive) and **neutrons** (neutral) reside in the nucleus and are collectively called nucleons.',
        '**Bohr\'s Model**: Electrons revolve around the nucleus in discrete energy levels or **shells** (K, L, M, N).',
        'The maximum number of electrons in a shell is given by **2n²**.',
        'The outermost shell of an atom is the **valence shell**, and its electrons dictate chemical properties.',
        'Atoms strive for an **octet** (8 electrons) in their valence shell to achieve stability.',
        '**Atomic Number (Z)** is the number of protons in the nucleus of an atom.',
        '**Mass Number (A)** is the sum of protons and neutrons in the nucleus.',
        '**Isotopes** are atoms of the same element with the same atomic number but different mass numbers (e.g., C-12, C-14).',
        '**Isobars** are atoms of different elements with the same mass number but different atomic numbers (e.g., Ar-40, Ca-40).'
      ]
    },
    {
      id: 'chem08',
      title: 'Materials',
      cls: 'Class 8',
      chapter: 'Ch 3 & 4 — Synthetic Fibres and Plastics / Materials',
      topic_tag: 'chemistry',
      facts: [
        'Synthetic fibres are polymers made of many small repeating chemical units called **monomers**.',
        '**Rayon** is known as artificial silk and is synthesized from natural wood pulp.',
        '**Nylon** is the first fully synthetic fibre, strong, elastic, and light, used for ropes and parachutes.',
        '**Polyester** is a synthetic fibre that does not wrinkle easily and is easy to wash (e.g., Terylene).',
        '**Acrylic** is used as a synthetic alternative to wool.',
        '**Thermoplastics** (e.g., PVC, Polythene) can be bent and deformed easily upon heating.',
        '**Thermosetting plastics** (e.g., Bakelite, Melamine) cannot be softened again by heating once moulded.',
        'Bakelite is a poor conductor of heat and electricity, used for electrical switches and handles.',
        'Melamine is fire resistant and tolerates heat better than other plastics, used in kitchenware.',
        'Plastics are generally **non-biodegradable** and cause environmental pollution.',
        'Metals are **malleable** (can be beaten into sheets) and **ductile** (drawn into wires).',
        'Non-metals do not possess these properties and are brittle in solid state.'
      ]
    },
    {
      id: 'chem09',
      title: 'Combustion & Flame',
      cls: 'Class 8',
      chapter: 'Ch 6 — Combustion and Flame',
      topic_tag: 'chemistry',
      facts: [
        '**Combustion** is a chemical process in which a substance reacts with oxygen to give off heat.',
        'Substances that undergo combustion are called **combustible** fuels (solid, liquid, or gas).',
        'The lowest temperature at which a substance catches fire is its **ignition temperature**.',
        '**Inflammable substances** (e.g., petrol, LPG) have very low ignition temperatures and catch fire easily.',
        'The **Fire Triangle** requires three conditions: Fuel, Oxygen (air), and Heat (to reach ignition temp).',
        '**Rapid combustion** occurs rapidly producing heat and light (e.g., burning matchstick).',
        '**Spontaneous combustion** occurs suddenly without external heat (e.g., white phosphorus).',
        '**Explosion** involves sudden reaction with evolution of heat, light, sound, and large amounts of gas.',
        'A candle flame has three main zones: **outer** (complete combustion, blue, hottest), **middle** (partial, yellow), and **inner** (unburnt wax, black, coolest).',
        '**Calorific value** is the amount of heat energy produced on complete combustion of 1 kg of a fuel.',
        'The unit of calorific value is **kilojoule per kg (kJ/kg)**.',
        'Incomplete combustion produces toxic **carbon monoxide** gas.'
      ]
    },
    {
      id: 'chem10',
      title: 'Coal & Petroleum',
      cls: 'Class 8',
      chapter: 'Ch 5 — Coal and Petroleum',
      topic_tag: 'chemistry',
      facts: [
        'Natural resources are classified into **inexhaustible** (sunlight, air) and **exhaustible** (fossil fuels, minerals).',
        '**Fossil fuels** like coal, petroleum, and natural gas were formed from the dead remains of living organisms over millions of years.',
        '**Carbonisation** is the slow process of conversion of dead vegetation into coal.',
        'Different varieties of coal based on carbon content: **Peat** (lowest), **Lignite**, **Bituminous**, and **Anthracite** (highest).',
        'Useful products obtained from processing coal include **coke**, **coal tar**, and **coal gas**.',
        '**Coke** is a tough, porous, almost pure form of carbon used in steel manufacturing and metal extraction.',
        '**Petroleum** (crude oil) is formed from organisms living in the sea.',
        '**Refining** is the process of separating petroleum into useful fractions (petrol, diesel, kerosene, paraffin wax).',
        'Fractions of petroleum are separated based on their different boiling points using **fractional distillation**.',
        '**Petrochemicals** are useful substances obtained from petroleum and natural gas, used to manufacture detergents, synthetic fibres, etc.',
        '**CNG** (Compressed Natural Gas) is a cleaner fuel used for transport vehicles and power generation.',
        'Burning fossil fuels is a major cause of **air pollution** and **global warming**.'
      ]
    }
  ],
  science_biology: [
    {
      id: 'bio01',
      title: 'Cell Structure',
      cls: 'Class 8/9',
      chapter: 'Ch 5 — The Fundamental Unit of Life',
      topic_tag: 'biology',
      facts: [
        'The **Cell** is the structural and functional unit of life, discovered by Robert Hooke in 1665.',
        '**Prokaryotic cells** (e.g., bacteria) lack a well-defined nuclear region and membrane-bound organelles.',
        '**Eukaryotic cells** have a true nucleus and membrane-bound organelles.',
        'The **Plasma Membrane** is selectively permeable and regulates entry/exit of substances.',
        'Plant cells have a rigid outer **Cell Wall** made of cellulose, which provides structural strength.',
        'The **Nucleus** contains chromosomes (made of DNA and proteins) and controls cell activities.',
        '**Mitochondria** are the "powerhouses" of the cell, generating ATP energy.',
        '**Chloroplasts** (Plastids) contain chlorophyll and perform photosynthesis in plant cells.',
        '**Ribosomes** are the sites of protein synthesis.',
        '**Endoplasmic Reticulum (ER)** exists as Rough ER (with ribosomes) and Smooth ER (lipid synthesis).',
        '**Golgi Apparatus** modifies, sorts, and packages materials synthesized in the cell.',
        '**Lysosomes** are "suicide bags" containing digestive enzymes to break down waste.',
        'Plant cells generally have a large central **vacuole** for storage and turgidity.'
      ]
    },
    {
      id: 'bio02',
      title: 'Tissues',
      cls: 'Class 9',
      chapter: 'Ch 6 — Tissues',
      topic_tag: 'biology',
      facts: [
        'A **Tissue** is a group of cells similar in structure and function.',
        'Plant tissues are categorized into **Meristematic** (dividing) and **Permanent** (non-dividing) tissues.',
        'Meristems are found in growing regions: **apical** (tips), **lateral** (girth), and **intercalary** (nodes).',
        'Permanent plant tissues are **Simple** (Parenchyma, Collenchyma, Sclerenchyma) or **Complex** (Xylem, Phloem).',
        '**Xylem** conducts water and minerals from roots to leaves.',
        '**Phloem** transports food (sugars) from leaves to other plant parts.',
        'Animal tissues are divided into four main types: **Epithelial, Connective, Muscular, Nervous**.',
        '**Epithelial tissue** forms protective coverings and linings of organs.',
        '**Connective tissue** includes blood, bone, cartilage, ligaments, and tendons, supporting and binding organs.',
        'Blood is a fluid connective tissue containing plasma, RBCs, WBCs, and platelets.',
        '**Muscular tissue** is responsible for movement and is of three types: Striated (voluntary), Smooth, and Cardiac (involuntary).',
        '**Nervous tissue** is made of **neurons** and conducts electrical impulses for control and coordination.'
      ]
    },
    {
      id: 'bio03',
      title: 'Life Processes',
      cls: 'Class 10',
      chapter: 'Ch 6 — Life Processes',
      topic_tag: 'biology',
      facts: [
        '**Autotrophic nutrition**: Organisms (plants) make their own food using CO₂, H₂O, and sunlight via photosynthesis.',
        'Photosynthesis equation: **6CO₂ + 12H₂O + light → C₆H₁₂O₆ + 6O₂ + 6H₂O**.',
        '**Stomata** are tiny pores on leaves for gas exchange, guarded by guard cells.',
        '**Heterotrophic nutrition**: Organisms depend on others for food (holozoic, saprophytic, parasitic).',
        'Human digestion involves enzymes: Salivary **amylase** (starch), **Pepsin** (proteins in stomach), **Lipase** (fats).',
        '**Respiration** breaks down glucose to release energy (ATP).',
        '**Aerobic respiration** occurs in presence of oxygen yielding 38 ATP; **Anaerobic** yields lactic acid/ethanol and 2 ATP.',
        'Human respiratory system: Air travels through trachea (cartilage rings) to **alveoli** in lungs for gas exchange.',
        '**Transpiration** creates a suction pull aiding upward movement of water in tall trees.',
        'Human circulatory system relies on the **heart**, blood vessels, and blood. Arteries carry oxygenated blood away from the heart.',
        '**Excretion** removes nitrogenous waste. The functional unit of the kidney is the **nephron**.',
        'Plants excrete waste by shedding leaves, storing in vacuoles, or releasing resins and gums.'
      ]
    },
    {
      id: 'bio04',
      title: 'Control & Coordination',
      cls: 'Class 10',
      chapter: 'Ch 7 — Control and Coordination',
      topic_tag: 'biology',
      facts: [
        'Nervous system consists of Central Nervous System (**CNS**: brain and spinal cord) and Peripheral Nervous System (**PNS**).',
        'A **neuron** consists of dendrites, cell body, and an axon. Impulses travel chemically across the **synapse**.',
        '**Reflex action** is a rapid, automatic response to a stimulus, controlled primarily by the spinal cord.',
        'The **Cerebrum** (forebrain) controls voluntary actions, learning, and memory.',
        'The **Cerebellum** (hindbrain) controls posture, balance, and precision of voluntary movements.',
        'The **Medulla** controls involuntary actions like heartbeat, breathing, and blood pressure.',
        'Plant hormones (phytohormones) include **Auxins** (growth/phototropism), **Gibberellins** (stem growth), and **Cytokinins** (cell division).',
        '**Abscisic acid** is a plant hormone that inhibits growth and causes wilting of leaves.',
        'Endocrine glands secrete **hormones** directly into the blood.',
        '**Thyroxine** (thyroid) regulates metabolism; iodine deficiency causes goitre.',
        '**Growth Hormone** (pituitary) regulates growth; **Adrenaline** (adrenal) prepares the body for fight or flight.',
        '**Insulin** (pancreas) regulates blood sugar levels; its deficiency causes diabetes.'
      ]
    },
    {
      id: 'bio05',
      title: 'Reproduction',
      cls: 'Class 10',
      chapter: 'Ch 8 — How do Organisms Reproduce?',
      topic_tag: 'biology',
      facts: [
        '**Asexual reproduction** involves a single parent and produces genetically identical offspring.',
        'Types of asexual reproduction: **Binary fission** (Amoeba), **Budding** (Hydra, Yeast), **Spore formation** (Rhizopus/fungi).',
        '**Fragmentation** occurs in Spirogyra, while **Regeneration** is seen in Planaria.',
        '**Vegetative propagation** produces new plants from roots, stems, or leaves (e.g., Bryophyllum, Potato).',
        '**Sexual reproduction** requires fusion of male and female gametes, leading to genetic variation.',
        'A flower has male parts (**Stamen**: anther, filament) and female parts (**Carpel/Pistil**: stigma, style, ovary).',
        '**Pollination** is the transfer of pollen from anther to stigma. Can be self or cross-pollination.',
        '**Fertilisation** is the fusion of gametes to form a zygote, which develops into an embryo.',
        'Post-fertilisation, the ovule becomes the **seed** and the ovary ripens into the **fruit**.',
        'In humans, testes produce **sperms** and testosterone; ovaries produce **ova** (eggs) and estrogen/progesterone.',
        'Fertilisation occurs in the **Fallopian tubes**, and the embryo implants in the **uterus**.',
        'The **Placenta** provides nutrition to the developing fetus from the mother\'s blood.'
      ]
    },
    {
      id: 'bio06',
      title: 'Heredity & Evolution',
      cls: 'Class 10',
      chapter: 'Ch 9 — Heredity and Evolution',
      topic_tag: 'biology',
      facts: [
        '**Genetics** is the study of heredity and variations.',
        'Gregor Mendel is the "Father of Genetics", using **garden peas (Pisum sativum)** for his experiments.',
        '**Traits** are characteristics inherited from parents. **Genes** are units of inheritance located on DNA.',
        'A **Dominant** trait expresses itself in the presence of a contrasting allele; a **Recessive** trait is hidden.',
        '**Genotype** is the genetic makeup, while **Phenotype** is the observable physical appearance.',
        'Mendel\'s **Law of Segregation**: Alleles segregate randomly into gametes.',
        'Human cells have **23 pairs** of chromosomes (22 pairs of autosomes, 1 pair of sex chromosomes).',
        'Females have **XX** sex chromosomes, males have **XY**. Sex of the child is determined by the father\'s sperm.',
        '**Evolution** is the gradual change in inherited characteristics over successive generations.',
        'Charles Darwin proposed the theory of evolution by **Natural Selection** ("Survival of the Fittest").',
        '**Homologous organs** have same basic structure but different functions (e.g., forelimbs of frog, bird, human), indicating common ancestry.',
        '**Analogous organs** have different structures but similar functions (e.g., wings of insects and birds).',
        '**Fossils** are preserved traces of ancient organisms, providing evidence of evolution.'
      ]
    },
    {
      id: 'bio07',
      title: 'Our Environment',
      cls: 'Class 10',
      chapter: 'Ch 15 — Our Environment',
      topic_tag: 'biology',
      facts: [
        'An **Ecosystem** includes all living organisms (biotic) interacting with non-living (abiotic) components.',
        'Organisms are grouped as **Producers** (autotrophs), **Consumers** (heterotrophs), and **Decomposers** (microorganisms).',
        'A **Food Chain** shows the linear flow of energy from one organism to another.',
        'A network of interconnected food chains is a **Food Web**.',
        'Each step in a food chain is a **Trophic Level**. Producers form the first level.',
        '**10% Law of Energy**: Only about 10% of energy is transferred from one trophic level to the next; the rest is lost as heat.',
        'Food chains usually have only 3-4 steps due to this significant energy loss.',
        '**Biological Magnification**: The increasing concentration of toxic chemicals (like pesticides) at higher trophic levels.',
        'The **Ozone layer (O₃)** in the stratosphere protects earth from harmful UV radiation.',
        'Ozone depletion is primarily caused by **Chlorofluorocarbons (CFCs)** used in refrigerants.',
        '**Biodegradable** wastes are broken down by biological processes (e.g., vegetable peels).',
        '**Non-biodegradable** wastes persist in the environment for long periods (e.g., plastics).'
      ]
    },
    {
      id: 'bio08',
      title: 'Microorganisms',
      cls: 'Class 8',
      chapter: 'Ch 2 — Microorganisms: Friend and Foe',
      topic_tag: 'biology',
      facts: [
        'Microorganisms are classified into four major groups: **Bacteria, Fungi, Protozoa, and Algae**.',
        '**Viruses** are microscopic but differ as they reproduce only inside the cells of a host organism.',
        'Useful microbes: Yeast is used in baking and producing alcohol via **fermentation**.',
        '**Lactobacillus** bacteria promote the conversion of milk into curd.',
        '**Antibiotics** (e.g., Penicillin) are medicines produced by fungi and bacteria to kill disease-causing microbes.',
        '**Vaccines** contain dead or weakened microbes to trigger production of antibodies for immunity.',
        '**Nitrogen Fixation**: Bacteria like *Rhizobium* (in legume nodules) and blue-green algae fix atmospheric nitrogen to enrich soil fertility.',
        'Harmful microbes cause diseases called **pathogens**.',
        '**Malaria** is caused by a protozoan (*Plasmodium*) and transmitted by the female Anopheles mosquito.',
        '**Dengue** is caused by a virus and transmitted by the female Aedes mosquito.',
        'Food poisoning is caused by toxic substances produced by microorganisms growing on food.',
        '**Pasteurization** involves heating milk to 70°C for 15-30 seconds to kill microbes, discovered by Louis Pasteur.'
      ]
    },
    {
      id: 'bio09',
      title: 'Human Body',
      cls: 'Class 8/9',
      chapter: 'General Human Anatomy (Integrated)',
      topic_tag: 'biology',
      facts: [
        'The human skeletal system comprises **206 bones** in an adult.',
        'The **Digestive System** includes the alimentary canal (mouth, esophagus, stomach, small intestine, large intestine) and associated glands.',
        'Most digestion and absorption of nutrients occur in the **Small Intestine**.',
        'The **Respiratory System** involves breathing in O₂ and exhaling CO₂, with gas exchange occurring in the **Alveoli** of lungs.',
        'The **Heart** is a four-chambered muscular organ pumping blood throughout the body.',
        '**Arteries** carry oxygenated blood away from the heart (except pulmonary artery).',
        '**Veins** carry deoxygenated blood to the heart (except pulmonary vein) and have valves to prevent backflow.',
        'Karl Landsteiner discovered the ABO **Blood Group** system. Blood types are A, B, AB, and O.',
        'Type **O** is the universal donor, and type **AB** is the universal recipient.',
        'The **Excretory System** includes a pair of kidneys, ureters, urinary bladder, and urethra.',
        '**Kidneys** filter blood to remove urea and excess water as urine. Functional units are nephrons.',
        'The largest organ is the **Skin**; the largest internal organ is the **Liver**.'
      ]
    },
    {
      id: 'bio10',
      title: 'Plant Kingdom',
      cls: 'Class 9',
      chapter: 'Ch 7 — Diversity in Living Organisms (Plant/Animal Kingdom focus)',
      topic_tag: 'biology',
      facts: [
        'Organisms are classified hierarchically: Kingdom, Phylum, Class, Order, Family, Genus, Species.',
        '**Thallophyta** (Algae): Undifferentiated body design, mostly aquatic (e.g., Spirogyra, Ulothrix).',
        '**Bryophyta**: Called "amphibians of the plant kingdom", lack true roots/vascular tissue (e.g., Moss, Marchantia).',
        '**Pteridophyta**: Have roots, stems, leaves, and vascular tissue but do not produce seeds (e.g., Ferns).',
        'The above three groups have hidden reproductive organs and are called **Cryptogamae**.',
        'Plants with well-differentiated reproductive tissues that make seeds are **Phanerogams**.',
        '**Gymnosperms**: Bear naked seeds, typically perennial and woody (e.g., Pine, Deodar).',
        '**Angiosperms**: Flowering plants with enclosed seeds inside fruits.',
        'Angiosperms are divided into **Monocots** (one cotyledon) and **Dicots** (two cotyledons).',
        'Animal Kingdom ranges from **Porifera** (sponges) to **Chordata**.',
        '**Arthropoda** is the largest phylum, characterized by jointed legs and an exoskeleton (insects, spiders).',
        '**Vertebrates** (subphylum of Chordata) have a true vertebral column and internal skeleton (Fish, Amphibians, Reptiles, Birds, Mammals).'
      ]
    }
  ],
  history: [
    {
      id: 'hist01',
      title: 'Indus Valley Civilisation',
      cls: 'Ancient',
      chapter: 'Indus Valley',
      topic_tag: 'history',
      facts: [
        'Flourished around **2500 BCE**, belonging to the Bronze Age.',
        'Major sites: **Harappa** (Ravi river), **Mohenjo-daro** (Indus river), **Lothal** (Gujarat), **Dholavira**, and **Kalibangan**.',
        'Renowned for advanced **urban planning**, grid system streets, and excellent drainage systems.',
        '**Mohenjo-daro** features the **Great Bath** and the Great Granary.',
        'Lothal was a prominent **dockyard** and trade center.',
        'Steatite **seals** were widely used, often featuring animal motifs like the unicorn bull and the "Pashupati" seal.',
        'The script was **pictographic** and is yet to be fully deciphered. It was written right to left.',
        'Cultivated wheat, barley, and were among the first to grow **cotton**.',
        'Worshipped the Mother Goddess and a male deity resembling Lord Shiva (Pashupati).',
        'Extensive trade networks existed with **Mesopotamia** (Sumeria).',
        'Use of standard weights and measures made of chert.',
        'Decline theories include climate change, tectonic shifts, Aryan invasion, or drying up of the Saraswati river.'
      ]
    },
    {
      id: 'hist02',
      title: 'Vedic Age',
      cls: 'Ancient',
      chapter: 'Vedic Culture',
      topic_tag: 'history',
      facts: [
        'The **Rigveda** is the oldest Veda, containing 1028 hymns dedicated to deities like Indra, Agni, and Soma.',
        'The Four Vedas are Rigveda, **Samaveda** (music), **Yajurveda** (rituals), and **Atharvaveda** (spells/charms).',
        '**Upanishads** are philosophical texts dealing with Atman and Brahman.',
        'Society was initially egalitarian but later developed the rigid **Varna system** (Brahmin, Kshatriya, Vaishya, Shudra).',
        'Tribal assemblies called **Sabha** (elders) and **Samiti** (general assembly) held political power.',
        'The most sacred river mentioned is the **Saraswati**, while the most frequently mentioned is the **Sindhu** (Indus).',
        'The main wealth was cattle (Gau), and wars were fought for cows.',
        'Iron was discovered later in this period, termed as "Shyama Ayas".',
        'The staple crop was barley (Yava), later wheat and rice became common.',
        'The battle of the **Ten Kings** (Dasarajna) is a famous event mentioned in the Rigveda.',
        'Polygamy was prevalent among royals, but monogamy was general practice.',
        'The concept of Ashramas (stages of life: Brahmacharya, Grihastha, Vanaprastha, Sannyasa) evolved later.'
      ]
    },
    {
      id: 'hist03',
      title: 'Maurya Empire',
      cls: 'Ancient',
      chapter: 'Mauryan Period',
      topic_tag: 'history',
      facts: [
        'Founded by **Chandragupta Maurya** in 321 BCE after overthrowing the Nanda dynasty.',
        '**Kautilya** (Chanakya) was his mentor and wrote the **Arthashastra**, a treatise on statecraft and economics.',
        'Megasthenes, a Greek ambassador, visited his court and wrote **Indica**.',
        'Chandragupta was succeeded by his son **Bindusara** (known to Greeks as Amitrochates).',
        '**Ashoka**, the greatest Mauryan ruler, fought the devastating **Kalinga War** in 261 BCE.',
        'Following Kalinga, Ashoka embraced Buddhism and propagated **Dhamma** (moral code of conduct).',
        'Ashoka spread his messages through **Rock Edicts** and Pillar Edicts using Brahmi and Kharoshthi scripts.',
        'Sent his children, Mahendra and Sanghamitra, to Sri Lanka to spread Buddhism.',
        'The capital was **Pataliputra** with highly centralized administration.',
        'A vast espionage system and standing army maintained order.',
        'The **Sanchi Stupa** and the Lion Capital at Sarnath (India\'s national emblem) were built by Ashoka.',
        'The empire declined after Ashoka due to weak successors and the vastness of the empire, ending with Brihadratha.'
      ]
    },
    {
      id: 'hist04',
      title: 'Gupta Empire',
      cls: 'Ancient',
      chapter: 'Gupta Age',
      topic_tag: 'history',
      facts: [
        'Founded by Sri Gupta, but the first great ruler was **Chandragupta I** (started Gupta Era in 320 CE).',
        '**Samudragupta** is known as the "Napoleon of India" due to his military conquests, detailed on the **Allahabad Pillar**.',
        '**Chandragupta II** (Vikramaditya) defeated the Shakas and expanded the empire.',
        'His court in Ujjain was adorned by the **Navaratnas** (Nine Gems), including the poet **Kalidasa**.',
        'Kalidasa wrote famous works like *Abhijnanasakuntalam* and *Meghaduta*.',
        'The Chinese pilgrim **Fa-Hien** visited India during Chandragupta II\'s reign.',
        'The Gupta period is widely regarded as the **Golden Age** of ancient Indian history due to cultural/scientific leaps.',
        '**Aryabhatta** wrote *Aryabhatiya*, proposing Earth\'s rotation and explaining eclipses.',
        'Sushruta and Charaka advanced medicine and surgery during this broad era.',
        'Hinduism saw a revival with the building of early structural temples (e.g., Dashavatara temple).',
        'Standardized gold coins known as **Dinaras** were issued in large numbers.',
        'The empire declined due to repeated invasions by the **Hunas** (White Huns) in the 5th/6th century.'
      ]
    },
    {
      id: 'hist05',
      title: 'Delhi Sultanate',
      cls: 'Medieval',
      chapter: 'Delhi Sultanate',
      topic_tag: 'history',
      facts: [
        'Began in 1206 with **Qutb-ud-din Aibak** founding the **Slave Dynasty** (Mamluk).',
        'Aibak started construction of the **Qutb Minar**, which was completed by Iltutmish.',
        'Razia Sultana was the first and only female Muslim ruler of Delhi.',
        '**Alauddin Khalji** of the Khalji Dynasty was known for his stringent **market control reforms** and large standing army.',
        'Alauddin introduced branding of horses (Dagh) and descriptive rolls for soldiers (Chehra).',
        '**Muhammad bin Tughlaq** is known for his controversial decisions like shifting capital to Daulatabad and introducing token currency.',
        '**Firoz Shah Tughlaq** built canals, hospitals, and established new cities like Firozabad and Hisar.',
        'The Sayyid dynasty ruled briefly, followed by the Afghan **Lodi Dynasty**.',
        'Bahlul Lodi founded the Lodi dynasty, Sikandar Lodi moved the capital to Agra.',
        'The architecture saw the introduction of true arches, domes, and minarets.',
        'The Sultanate period saw the growth of **Sufi** and **Bhakti** movements.',
        'The Sultanate ended when **Ibrahim Lodi** was defeated by Babur at the **First Battle of Panipat** in 1526.'
      ]
    },
    {
      id: 'hist06',
      title: 'Mughal Empire',
      cls: 'Medieval',
      chapter: 'Mughal Period',
      topic_tag: 'history',
      facts: [
        'Founded by **Babur** after winning the First Battle of Panipat in 1526.',
        '**Humayun** was defeated by Sher Shah Suri but later regained Delhi.',
        '**Akbar** (1556-1605) expanded the empire, abolished Jizya, and started the syncretic religion **Din-i-Ilahi**.',
        'Akbar introduced the **Mansabdari** system (military-civil administration) and had Navratnas in his court.',
        'Raja **Todar Mal** was Akbar\'s finance minister who introduced a new revenue system (Zabt).',
        '**Jahangir** was known for his "Chain of Justice" and permitted the British EIC to establish a factory at Surat.',
        '**Shah Jahan** is famous for monumental architecture, notably the **Taj Mahal**, Jama Masjid, and Red Fort.',
        '**Aurangzeb** expanded the empire to its maximum territorial extent but his prolonged **Deccan campaigns** drained resources.',
        'Aurangzeb reimposed Jizya and faced rebellions from Marathas (Shivaji), Sikhs, and Rajputs.',
        'The empire rapidly declined after Aurangzeb\'s death in 1707 due to weak successors.',
        'Persian was the official court language of the Mughals.',
        'Mughal painting peaked under Jahangir, blending Persian and Indian styles.'
      ]
    },
    {
      id: 'hist07',
      title: 'Advent of Europeans',
      cls: 'Modern',
      chapter: 'European Arrival',
      topic_tag: 'history',
      facts: [
        'The **Portuguese** were the first Europeans to reach India via sea route.',
        '**Vasco da Gama** arrived at Calicut in 1498, welcomed by King Zamorin.',
        'Portuguese established bases in Goa, Daman, and Diu, introducing tobacco cultivation and printing press.',
        'The **Dutch** established their first factory in Masulipatnam but focused more on Indonesia.',
        'The British **East India Company (EIC)** was formed in 1600 by a Royal Charter from Queen Elizabeth I.',
        'British built Fort St. George in Madras and Fort William in Calcutta.',
        'The **French** East India Company was the last major European power to arrive, establishing a base in Pondicherry.',
        'Anglo-French rivalry culminated in the Carnatic Wars, establishing British supremacy.',
        'The **Battle of Plassey (1757)** was a decisive EIC victory led by Robert Clive over Siraj-ud-Daulah, Nawab of Bengal.',
        'The **Battle of Buxar (1764)** firmly established British power in Bengal, Bihar, and Odisha.',
        'The Treaty of Allahabad (1765) granted Diwani rights (revenue collection) to the EIC.',
        'Economic exploitation and deindustrialization of India began under EIC policies.'
      ]
    },
    {
      id: 'hist08',
      title: 'British Rule & 1857 Revolt',
      cls: 'Modern',
      chapter: 'Revolt of 1857',
      topic_tag: 'history',
      facts: [
        'Lord Wellesley introduced the **Subsidiary Alliance**, forcing Indian rulers to pay for British troops and surrender foreign policy.',
        'Lord Dalhousie applied the **Doctrine of Lapse**, annexing states like Satara, Jhansi, and Awadh without natural heirs.',
        'The **Revolt of 1857** is often called the First War of Indian Independence.',
        'Immediate cause was the rumor of cartridges greased with cow and pig fat, sparking mutiny by **Mangal Pandey** in Barrackpore.',
        'The sepoys marched to Delhi and proclaimed Bahadur Shah Zafar as the Emperor of India.',
        'Major centers and leaders: **Kanpur** (Nana Sahib), **Jhansi** (Rani Lakshmibai), **Lucknow** (Begum Hazrat Mahal).',
        '**Tantia Tope** and Kunwar Singh (Bihar) also led significant rebel forces.',
        'The revolt failed due to lack of unified leadership, limited spread (mainly North/Central India), and superior British resources.',
        'Consequence: The **Government of India Act 1858** ended EIC rule, transferring power directly to the British Crown.',
        'The Governor-General was given the title of **Viceroy** (Lord Canning was the first).',
        'British reorganized the army, increasing the ratio of European soldiers.',
        'The Queen\'s Proclamation promised non-interference in religious matters and treaties with native princes.'
      ]
    },
    {
      id: 'hist09',
      title: 'Social Reform Movements',
      cls: 'Modern',
      chapter: 'Socio-Religious Reforms',
      topic_tag: 'history',
      facts: [
        '**Raja Ram Mohan Roy** is called the "Father of Indian Renaissance".',
        'He founded the **Brahmo Samaj** in 1828 to promote monotheism and fight social evils.',
        'His efforts led Lord William Bentinck to abolish **Sati in 1829**.',
        '**Dayanand Saraswati** founded the **Arya Samaj** in 1875 with the motto "Go back to the Vedas".',
        'Arya Samaj started the Shuddhi movement and opposed idol worship and caste system.',
        '**Swami Vivekananda** founded the **Ramakrishna Mission** in 1897 to promote humanitarian relief and Vedanta.',
        'Vivekananda famously addressed the World Parliament of Religions in Chicago in 1893.',
        '**Jyotiba Phule** founded the **Satyashodhak Samaj** (1873) in Maharashtra to fight caste discrimination and promote women\'s education.',
        'Phule wrote the influential book *Gulamgiri*.',
        '**Ishwar Chandra Vidyasagar** played a crucial role in passing the Hindu Widows\' Remarriage Act of 1856.',
        'Sir Syed Ahmed Khan started the Aligarh Movement and founded the MAO College (now Aligarh Muslim University).',
        'These movements helped foster a modern, rational outlook and a sense of early nationalism.'
      ]
    },
    {
      id: 'hist10',
      title: 'Early Nationalist Movement',
      cls: 'Modern',
      chapter: 'Indian National Congress',
      topic_tag: 'history',
      facts: [
        'The **Indian National Congress (INC)** was founded in 1885 by retired British official **A.O. Hume**.',
        'The first INC session was held in Bombay, presided over by **W.C. Bonnerjee**.',
        'Early leaders (Moderates) like Dadabhai Naoroji believed in constitutional methods and prayer/petitions.',
        'Naoroji proposed the **"Drain of Wealth"** theory highlighting British economic exploitation.',
        'Lord Curzon announced the **Partition of Bengal in 1905** to divide Hindus and Muslims.',
        'This triggered the **Swadeshi Movement**, boycotting foreign goods and promoting Indian industries.',
        'The Extremist faction emerged, led by **Lal-Bal-Pal** (Lala Lajpat Rai, Bal Gangadhar Tilak, Bipin Chandra Pal).',
        'Tilak declared: "Swaraj is my birthright and I shall have it."',
        'The ideological differences led to the **Surat Split** in 1907 between Moderates and Extremists.',
        'The Muslim League was founded in 1906 in Dhaka.',
        'Morley-Minto Reforms (1909) introduced **separate electorates** for Muslims, deepening the communal divide.',
        'The capital was shifted from Calcutta to Delhi in 1911, and Bengal partition was annulled.'
      ]
    },
    {
      id: 'hist11',
      title: 'Gandhi & Freedom Struggle',
      cls: 'Modern',
      chapter: 'Gandhian Era',
      topic_tag: 'history',
      facts: [
        'Mahatma Gandhi returned to India from South Africa in **1915**.',
        'Early Satyagrahas: **Champaran** (1917, indigo farmers), **Kheda** (1918), and **Ahmedabad** mill strike (1918).',
        'The **Rowlatt Act** (1919) allowed detention without trial, leading to nationwide protests.',
        '**Jallianwala Bagh Massacre** occurred on April 13, 1919, in Amritsar under General Dyer.',
        'Gandhi launched the **Non-Cooperation Movement** in 1920, combined with the **Khilafat** movement.',
        'Called off in 1922 due to violence at **Chauri Chaura**.',
        '**Simon Commission** (1928) faced "Simon Go Back" protests because it had no Indian members.',
        '**Civil Disobedience Movement** began with the **Dandi March** (Salt Satyagraha) in 1930.',
        'Gandhi-Irwin Pact (1931) led to INC participation in the Second Round Table Conference.',
        '**Quit India Movement** (1942) was launched with the slogan "Do or Die".',
        'Subhas Chandra Bose formed the **Indian National Army (INA)** to fight the British militarily.',
        'The **RIN Mutiny** (1946) by Indian sailors further weakened British naval authority.'
      ]
    },
    {
      id: 'hist12',
      title: 'India Post-Independence',
      cls: 'Modern',
      chapter: 'Post Independence',
      topic_tag: 'history',
      facts: [
        'India gained independence on **August 15, 1947**, accompanied by the tragic Partition into India and Pakistan.',
        'Sardar Vallabhbhai Patel, the "Iron Man of India", successfully integrated over 500 **princely states**.',
        'The Constitution was drafted under the chairmanship of **Dr. B.R. Ambedkar** and adopted on Jan 26, 1950.',
        'India held its **first general elections** in 1951-52, utilizing universal adult franchise.',
        'Jawaharlal Nehru, the first PM, initiated the **Five Year Plans** focusing on agriculture and then heavy industry.',
        'The Planning Commission was established in 1950 to formulate these plans.',
        'The **Green Revolution** in the 1960s, led by M.S. Swaminathan, drastically increased wheat and rice yields.',
        'Non-Aligned Movement (NAM) was a key foreign policy pillar during the Cold War.',
        'States Reorganization Act (1956) reorganized states based on linguistic lines (Andhra was the first).',
        'The Indo-Pak war of 1971 resulted in the creation of **Bangladesh**.',
        'A national **Emergency** was declared by Indira Gandhi from 1975 to 1977.',
        'Economic liberalization in 1991 opened the Indian economy to global trade.'
      ]
    }
  ],
  geography: [
    {
      id: 'geo01',
      title: 'Earth & Solar System',
      cls: 'Physical',
      chapter: 'Solar System',
      topic_tag: 'geography',
      facts: [
        'The Solar System consists of the Sun and **8 planets**: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.',
        '**Earth** is the 3rd planet from the Sun and the 5th largest planet overall.',
        'Earth is called the "Blue Planet" due to 71% water coverage.',
        'The **Moon** is Earth\'s only natural satellite.',
        'Earth\'s **rotation** on its axis takes approximately **23 hours 56 minutes**, causing day and night.',
        'Earth\'s **revolution** around the Sun takes **365.25 days**, causing seasons due to the axial tilt.',
        'Earth is tilted at an angle of **23.5°** from the perpendicular to its orbital plane.',
        'Earth\'s interior has three main layers: **Crust**, **Mantle**, and **Core**.',
        'The **Crust** is the outermost thin solid shell; continental crust is mostly silica/alumina (sial).',
        'The **Mantle** contains viscous rock; the asthenosphere here drives tectonic plate movement.',
        'The **Outer Core** is liquid iron and nickel, creating Earth\'s magnetic field.',
        'The **Inner Core** is solid iron and nickel due to immense pressure.'
      ]
    },
    {
      id: 'geo02',
      title: 'Latitudes & Longitudes',
      cls: 'Physical',
      chapter: 'Coordinates',
      topic_tag: 'geography',
      facts: [
        '**Latitudes** are parallel horizontal lines measuring distance north or south of the Equator.',
        'The **Equator** is 0° latitude, dividing Earth into Northern and Southern Hemispheres.',
        'Tropic of **Cancer** is 23.5°N, and Tropic of **Capricorn** is 23.5°S.',
        'Arctic Circle is 66.5°N, and Antarctic Circle is 66.5°S.',
        '**Longitudes** (meridians) are vertical lines measuring distance east or west.',
        'The **Prime Meridian** (0° longitude) passes through Greenwich, London.',
        'The **International Date Line** roughly follows 180° longitude; crossing it changes the date.',
        'There are 360 degrees of longitude, translating to **15° per hour** (Earth rotates 360° in 24 hours).',
        'Indian Standard Time (**IST**) is based on longitude **82.5° E** (passing through Mirzapur, UP).',
        'IST is **5 hours 30 minutes** ahead of Greenwich Mean Time (GMT).',
        'The distance between two longitudes is maximum at the Equator and zero at the poles.',
        'Latitudes determine climate zones (Torrid, Temperate, Frigid).'
      ]
    },
    {
      id: 'geo03',
      title: 'Atmosphere & Climate',
      cls: 'Physical',
      chapter: 'Climatology',
      topic_tag: 'geography',
      facts: [
        'The atmosphere is composed mostly of **Nitrogen (78%)** and **Oxygen (21%)**.',
        'The **Troposphere** (0-12km) contains most weather events and 80% of atmospheric mass.',
        'The **Stratosphere** (12-50km) contains the protective **Ozone layer** and is ideal for flying jets.',
        'The **Mesosphere** (50-85km) is where most meteors burn up upon entering Earth.',
        'The **Thermosphere** contains the ionosphere, which reflects radio waves and hosts auroras.',
        'The **Exosphere** is the outermost layer merging into space.',
        '**Weather** is the short-term state of the atmosphere; **Climate** is the long-term average over decades.',
        'The **Coriolis effect** deflects winds to the right in the Northern Hemisphere and left in the Southern.',
        '**Trade winds** blow from subtropical high-pressure belts toward the Equator.',
        '**Westerlies** blow from the subtropics toward the poles.',
        '**Albedo** is the measure of reflectivity of Earth\'s surface (ice has high albedo).',
        'Greenhouse gases (CO₂, CH₄, water vapor) trap heat, causing the **Greenhouse Effect**.'
      ]
    },
    {
      id: 'geo04',
      title: 'Oceans & Water Bodies',
      cls: 'Physical',
      chapter: 'Oceanography',
      topic_tag: 'geography',
      facts: [
        'The five oceans, from largest to smallest, are: **Pacific, Atlantic, Indian, Southern, Arctic**.',
        'The **Pacific Ocean** is the largest and deepest, containing the Mariana Trench.',
        'The **Atlantic Ocean** has an S-shape and features the Mid-Atlantic Ridge.',
        'The **Indian Ocean** is the only ocean named after a country.',
        '**Ocean currents** are continuous, directed movements of seawater generated by wind, temperature, and salinity differences.',
        '**Warm currents** (e.g., Gulf Stream) flow from equator to poles; **Cold currents** (e.g., Labrador) flow poles to equator.',
        'The meeting of warm and cold currents creates ideal conditions for **fishing grounds**.',
        '**Tides** are rhythmic rise and fall of ocean water twice a day, caused by gravitational pull of Moon and Sun.',
        '**Spring tides** (highest) occur when Sun, Moon, and Earth align (full/new moon).',
        '**Neap tides** (lowest) occur when Sun and Moon are at right angles.',
        'A **Strait** is a narrow passage of water connecting two larger areas (e.g., Palk Strait between India and Sri Lanka).',
        '**Coral reefs** are diverse marine ecosystems; the Great Barrier Reef in Australia is the largest.'
      ]
    },
    {
      id: 'geo05',
      title: 'Natural Vegetation',
      cls: 'Physical',
      chapter: 'Biosphere',
      topic_tag: 'geography',
      facts: [
        'Vegetation is primarily determined by **temperature and rainfall**.',
        '**Tropical Rainforests** (Evergreen) occur in heavy rainfall areas near the equator; they possess dense canopies and high biodiversity.',
        '**Tropical Deciduous Forests** (Monsoon forests) shed leaves in the dry season to conserve water (common in India).',
        '**Tropical Grasslands** (Savanna) have tall grasses and scattered trees (e.g., Africa).',
        '**Temperate Grasslands** (e.g., Prairies, Steppes) are found in mid-latitudes and are ideal for wheat cultivation.',
        '**Coniferous Forests** (Taiga) are found in higher latitudes; trees have needle-like leaves (Pine, Cedar).',
        '**Tundra vegetation** consists of mosses and lichens in extreme cold polar regions.',
        '**Desert vegetation** includes cacti and thorny bushes adapted to low rainfall.',
        'A **Biome** is a large geographical area characterized by its vegetation, soil, climate, and wildlife.',
        '**Mangrove forests** survive in both fresh and salt water, common in river deltas (e.g., Sundarbans).',
        'Deforestation leads to soil erosion, loss of biodiversity, and increased atmospheric CO₂.',
        'Biodiversity hotspots are regions with exceptionally high levels of endemic species facing severe threat.'
      ]
    },
    {
      id: 'geo06',
      title: 'Physical Features of India',
      cls: 'Indian Geo',
      chapter: 'Physiography',
      topic_tag: 'geography',
      facts: [
        'India is divided into major physiographic divisions: Himalayas, Northern Plains, Peninsular Plateau, Desert, Coastal Plains, and Islands.',
        'The **Himalayas** are young, fold mountains forming the northern border.',
        'Himalayan ranges: Himadri (Great Himalayas), Himachal (Middle), and Shiwalik (Outer).',
        '**Mt. K2** (Godwin Austen) in PoK is the highest peak of India; **Kangchenjunga** is the highest undisputed peak in India.',
        'The **Northern Plains** are formed by the interplay of three river systems: Indus, Ganga, and Brahmaputra.',
        'The plains are highly fertile due to **alluvial soil** deposition, making it densely populated.',
        'The **Peninsular Plateau** is a tableland of old crystalline, igneous, and metamorphic rocks (part of ancient Gondwanaland).',
        'The Plateau consists of the Central Highlands and the **Deccan Plateau**.',
        'The **Western Ghats** are continuous and higher than the discontinuous **Eastern Ghats**.',
        'The **Thar Desert** (Great Indian Desert) lies towards the western margins of the Aravalli Hills.',
        '**Lakshadweep Islands** in the Arabian Sea are coral origin.',
        '**Andaman and Nicobar Islands** in the Bay of Bengal are volcanic origin, housing India\'s only active volcano on Barren Island.'
      ]
    },
    {
      id: 'geo07',
      title: 'Climate of India',
      cls: 'Indian Geo',
      chapter: 'Climate',
      topic_tag: 'geography',
      facts: [
        'India has a **Tropical Monsoon** type of climate.',
        'The **South-West Monsoon** (June to September) brings maximum rainfall to India.',
        'The SW Monsoon splits into two branches: Arabian Sea branch and Bay of Bengal branch.',
        'The **North-East Monsoon** (Retreating Monsoon, Oct-Dec) causes rainfall primarily in Tamil Nadu coast.',
        'Four main seasons: Cold weather (Winter), Hot weather (Summer), Advancing Monsoon, and Retreating Monsoon.',
        '**Western Disturbances** are cyclonic storms originating in the Mediterranean that bring winter rain to NW India.',
        '**El Nino** is a warm ocean current in the Pacific that generally weakens the Indian monsoon.',
        '**La Nina** generally leads to a stronger monsoon in India.',
        '**Loo** is a strong, gusty, hot, dry wind blowing over North/NW India in summer.',
        '**Kal Baisakhi** refers to violent thunderstorms in Bengal/Assam in summer.',
        '**Mango Showers** are pre-monsoon showers in Kerala/Karnataka that help mangoes ripen.',
        'Mawsynram in Meghalaya receives the highest average annual rainfall in the world.'
      ]
    },
    {
      id: 'geo08',
      title: 'Rivers of India',
      cls: 'Indian Geo',
      chapter: 'Drainage',
      topic_tag: 'geography',
      facts: [
        'Indian rivers are divided into **Himalayan** (perennial, snow-fed) and **Peninsular** (seasonal, rain-fed).',
        'The **Indus** flows through Ladakh and into Pakistan. Main tributaries: Jhelum, Chenab, Ravi, Beas, Sutlej.',
        'The **Ganga** originates at Gangotri glacier (as Bhagirathi). It is the longest river entirely in India.',
        'Ganga\'s right-bank tributaries: Yamuna, Son. Left-bank: Gomti, Ghaghara, Gandak, Kosi.',
        'The **Brahmaputra** originates in Tibet (Tsangpo) and enters India through Arunachal Pradesh.',
        'Ganga and Brahmaputra form the world\'s largest delta, the **Sundarbans**, before emptying into the Bay of Bengal.',
        '**Godavari** is the longest peninsular river, often called the "Dakshin Ganga".',
        'Other major east-flowing peninsular rivers forming deltas: Mahanadi, Krishna, Kaveri.',
        '**Narmada** and **Tapi** are major west-flowing rivers that flow through rift valleys and form estuaries, not deltas.',
        'Narmada originates at the Amarkantak plateau in Madhya Pradesh.',
        'The **Luni** is an inland river in Rajasthan that drains into the Rann of Kutch.',
        'Peninsular rivers have shorter, shallower courses and largely fixed channels compared to Himalayan rivers.'
      ]
    },
    {
      id: 'geo09',
      title: 'Agriculture & Soils',
      cls: 'Indian Geo',
      chapter: 'Agriculture',
      topic_tag: 'geography',
      facts: [
        '**Alluvial soil** is the most widespread and fertile, found in Northern plains and river deltas (rich in potash, poor in nitrogen).',
        '**Black soil** (Regur) is found in the Deccan trap, highly retentive of moisture, and ideal for **cotton** cultivation.',
        '**Red and Yellow soil** develops on crystalline igneous rocks; looks red due to iron diffusion.',
        '**Laterite soil** is found in areas with high temperature/rainfall, leached of nutrients, good for cashew nuts and tea (with manure).',
        '**Arid soil** is sandy and saline, found in desert regions.',
        'India has three cropping seasons: **Rabi**, **Kharif**, and **Zaid**.',
        '**Kharif crops** are sown in the monsoon (June-July) and harvested in Sep-Oct. Examples: Rice, Maize, Cotton, Jute.',
        '**Rabi crops** are sown in winter (Oct-Dec) and harvested in summer. Examples: Wheat, Barley, Mustard, Gram.',
        '**Zaid crops** are grown between Rabi and Kharif in summer. Examples: Watermelon, Cucumber.',
        'India is the largest producer of milk, pulses, and jute, and second largest in rice and wheat.',
        'Subsistence farming relies on monsoon/natural fertility; Commercial farming uses high-yielding varieties (HYV) and chemicals.',
        'Plantation is a type of commercial farming where a single crop is grown on a large area (e.g., Tea in Assam, Coffee in Karnataka).'
      ]
    },
    {
      id: 'geo10',
      title: 'Minerals & Resources',
      cls: 'Indian Geo',
      chapter: 'Resources',
      topic_tag: 'geography',
      facts: [
        '**Coal** is the most abundantly available fossil fuel in India, mainly used for power generation.',
        'Jharkhand, Odisha, and Chhattisgarh are the leading producers of coal in India.',
        '**Iron ore** is the basic mineral and backbone of industrial development. High-grade hematite is found in Odisha and Jharkhand.',
        '**Manganese** is primarily used in the manufacturing of steel and ferro-manganese alloys.',
        '**Bauxite** is the ore from which aluminium is extracted; Odisha is the largest producer.',
        '**Mica** is indispensable for electrical/electronic industries due to its insulating properties; Jharkhand and Andhra are major producers.',
        '**Petroleum** (Mineral oil) major producing areas are Mumbai High (offshore), Gujarat, and Digboi (Assam - oldest).',
        '**Uranium** for nuclear power is found in Jaduguda (Jharkhand) and parts of Rajasthan.',
        '**Renewable energy**: India is rapidly expanding solar and wind power capacities.',
        'Solar energy potential is highest in Rajasthan and Gujarat.',
        'Wind power farms are prominent in Tamil Nadu (Muandal) and Gujarat.',
        'Sustainable development emphasizes using resources judiciously to meet present needs without compromising future generations.'
      ]
    }
  ],
  polity: [
    {
      id: 'pol01',
      title: 'Constitution',
      cls: 'Civics',
      chapter: 'Making of Constitution',
      topic_tag: 'polity',
      facts: [
        'The **Constituent Assembly** was formed in 1946 based on the Cabinet Mission Plan.',
        '**Dr. Rajendra Prasad** was the permanent Chairman of the Constituent Assembly.',
        '**Dr. B.R. Ambedkar** was the Chairman of the Drafting Committee.',
        'The Constitution was adopted on **26 November 1949** and came into force on **26 January 1950**.',
        '26 January was chosen to commemorate the "Purna Swaraj" declaration of 1930.',
        'The original Constitution had **395 Articles, 22 Parts, and 8 Schedules** (now 12 Schedules).',
        'The **Preamble** is the introduction, based on Nehru\'s "Objective Resolution".',
        'The Preamble declares India a **Sovereign, Socialist, Secular, Democratic Republic**.',
        'The words "Socialist", "Secular", and "Integrity" were added by the **42nd Amendment** (1976).',
        'The Constitution is the longest written national constitution in the world.',
        'It draws heavily from the Government of India Act 1935, and borrows features from the UK, USA, Ireland, and others.',
        'The Constitution is both rigid (requires special majority for some parts) and flexible (simple majority for others).'
      ]
    },
    {
      id: 'pol02',
      title: 'Fundamental Rights',
      cls: 'Civics',
      chapter: 'Part III',
      topic_tag: 'polity',
      facts: [
        'Fundamental Rights (FRs) are enshrined in **Part III** (Articles 12 to 35) of the Constitution.',
        'They are borrowed from the **US Bill of Rights** and are justiciable in court.',
        'Originally there were 7 rights, but Right to Property was removed by the **44th Amendment** (now a legal right under Art 300A).',
        'There are currently **6 Fundamental Rights**.',
        '**Right to Equality** (Art 14-18): Equality before law, abolition of untouchability (Art 17) and titles.',
        '**Right to Freedom** (Art 19-22): Includes freedom of speech, expression, assembly, and protection of life/personal liberty (Art 21).',
        '**Right against Exploitation** (Art 23-24): Prohibits human trafficking, forced labor, and child labor.',
        '**Right to Freedom of Religion** (Art 25-28): Freedom of conscience and free profession of religion.',
        '**Cultural and Educational Rights** (Art 29-30): Protects interests of minorities.',
        '**Right to Constitutional Remedies** (Art 32): Allows citizens to approach the Supreme Court for enforcement of rights.',
        'Dr. Ambedkar called Article 32 the **"Heart and Soul of the Constitution"**.',
        '**Article 21A** (added by 86th Amendment, 2002) guarantees free and compulsory education for children aged 6-14.'
      ]
    },
    {
      id: 'pol03',
      title: 'Directive Principles & Duties',
      cls: 'Civics',
      chapter: 'Part IV & IVA',
      topic_tag: 'polity',
      facts: [
        'Directive Principles of State Policy (DPSP) are in **Part IV** (Articles 36-51).',
        'They are borrowed from the **Irish Constitution**.',
        'DPSPs are **non-justiciable**, meaning they cannot be enforced by courts.',
        'They aim to establish social and economic democracy, forming a "Welfare State".',
        'Key DPSPs: Equal pay for equal work, organization of village panchayats (Art 40), Uniform Civil Code (Art 44).',
        'Fundamental Duties were added in **Part IVA, Article 51A**.',
        'They were added by the **42nd Amendment (1976)** on the recommendation of the Swaran Singh Committee.',
        'Originally 10 duties; the **11th duty** (provide opportunities for education to children) was added by the **86th Amendment (2002)**.',
        'Duties are borrowed from the constitution of the former **USSR**.',
        'They are also non-justiciable and serve as a moral obligation for citizens.',
        'Examples include respecting the National Flag and Anthem, protecting the environment, and safeguarding public property.',
        'FRs, DPSPs, and Fundamental Duties together form the philosophical core of the Constitution.'
      ]
    },
    {
      id: 'pol04',
      title: 'Parliament',
      cls: 'Civics',
      chapter: 'Union Legislature',
      topic_tag: 'polity',
      facts: [
        'The Parliament of India consists of the **President, Rajya Sabha, and Lok Sabha**.',
        '**Rajya Sabha** (Council of States/Upper House) has a max strength of **250**.',
        '12 members of Rajya Sabha are **nominated** by the President for expertise in art, literature, science, or social service.',
        'It is a permanent body and **cannot be dissolved**; 1/3rd of members retire every 2 years (6-year term).',
        'The **Vice-President** of India is the ex-officio Chairman of the Rajya Sabha.',
        '**Lok Sabha** (House of the People/Lower House) has a max strength of **552** (currently 543 elected).',
        'Members are directly elected by the public for a **5-year term**, but the house can be dissolved earlier.',
        'The **Speaker** presides over the Lok Sabha and decides whether a bill is a Money Bill.',
        'A **Money Bill** can only be introduced in the Lok Sabha with prior recommendation of the President.',
        'Rajya Sabha can only delay a Money Bill by 14 days.',
        'In case of a deadlock over ordinary bills, the President can summon a **Joint Sitting**, presided over by the LS Speaker.',
        'A minister must be a member of either house; if not, they must become one within 6 months.'
      ]
    },
    {
      id: 'pol05',
      title: 'President',
      cls: 'Civics',
      chapter: 'Union Executive',
      topic_tag: 'polity',
      facts: [
        'The President (Art 52-62) is the **Head of the State** and First Citizen of India.',
        'Elected indirectly by an electoral college consisting of **elected members** of both Houses of Parliament and State Legislative Assemblies.',
        'Term of office is **5 years**, and the President is eligible for re-election.',
        'Qualifications: Must be an Indian citizen, at least **35 years old**, and qualified for Lok Sabha election.',
        'Impeachment (Art 61) requires a 2/3rd majority of total membership in both houses, solely for "violation of the Constitution".',
        'All executive actions of the Govt of India are formally taken in the President\'s name.',
        '**Article 74**: The President must act on the aid and advice of the Council of Ministers.',
        'Can promulgate **Ordinances** (Art 123) when Parliament is not in session.',
        'Can declare three types of emergencies: National (Art 352), State/President\'s Rule (**Art 356**), and Financial (Art 360).',
        'Appoints the PM, CJI, Governors, CEC, and other constitutional functionaries.',
        'Supreme Commander of the Indian Armed Forces.',
        'Possesses pardoning powers (Art 72) including reprieves and commutations.'
      ]
    },
    {
      id: 'pol06',
      title: 'Prime Minister & Cabinet',
      cls: 'Civics',
      chapter: 'Union Executive',
      topic_tag: 'polity',
      facts: [
        'The Prime Minister is the **Head of Government** and real executive authority.',
        'Appointed by the President; usually the leader of the majority party/coalition in the Lok Sabha.',
        'The President appoints other ministers on the advice of the PM (Art 75).',
        'The Council of Ministers consists of **Cabinet Ministers, Ministers of State, and Deputy Ministers**.',
        'Total number of ministers cannot exceed **15%** of the total strength of the Lok Sabha (91st Amendment).',
        'The Council of Ministers is **collectively responsible** to the Lok Sabha.',
        'If a no-confidence motion is passed in the Lok Sabha, the entire ministry must resign.',
        'The PM communicates all decisions of the Council of Ministers to the President (Art 78).',
        'The PM is the ex-officio chairman of NITI Aayog, National Development Council, and Inter-State Council.',
        'The **Attorney General** (Art 76) is the highest law officer in the country, appointed by the President.',
        'The Attorney General has the right to speak and take part in Parliament proceedings without the right to vote.',
        'Individual ministers hold office during the pleasure of the President.'
      ]
    },
    {
      id: 'pol07',
      title: 'Supreme Court',
      cls: 'Civics',
      chapter: 'Union Judiciary',
      topic_tag: 'polity',
      facts: [
        'The Supreme Court of India was established on **26 January 1950**.',
        'Articles **124 to 147** in Part V deal with the Supreme Court.',
        'Currently consists of a Chief Justice of India (CJI) and a maximum of **33 other judges**.',
        'Judges are appointed by the President using the collegium system.',
        'A judge holds office until attaining the age of **65 years**.',
        'Can be removed only by an order of the President passed by a special majority in Parliament (proven misbehavior/incapacity).',
        '**Original Jurisdiction**: Disputes between Govt of India and states, or between two or more states.',
        '**Appellate Jurisdiction**: Highest court of appeal in constitutional, civil, and criminal matters.',
        '**Advisory Jurisdiction** (Art 143): The President can seek the SC\'s opinion on matters of law/fact.',
        '**Article 137**: SC has the power to review its own judgments.',
        'It is the guardian of Fundamental Rights, issuing writs under Article 32.',
        '**Kesavananda Bharati case (1973)** established the **Basic Structure** doctrine, restricting Parliament\'s amendment power.'
      ]
    },
    {
      id: 'pol08',
      title: 'Election Commission',
      cls: 'Civics',
      chapter: 'Constitutional Bodies',
      topic_tag: 'polity',
      facts: [
        'The Election Commission of India (ECI) is an independent constitutional body established under **Article 324**.',
        'Responsible for conducting elections to Parliament, State Legislatures, and offices of President and VP.',
        'Does not conduct local body elections (Panchayats/Municipalities are handled by State Election Commissions).',
        'Consists of a Chief Election Commissioner (CEC) and **two Election Commissioners (ECs)**.',
        'Appointed by the President; term is 6 years or up to the age of 65, whichever is earlier.',
        'The CEC can be removed only in the same manner as a judge of the Supreme Court.',
        'First CEC of India was **Sukumar Sen**.',
        'Introduced Electronic Voting Machines (**EVMs**) to improve the voting process.',
        '**NOTA** (None of the Above) option was introduced in EVMs in 2013 following an SC directive.',
        'Enforces the **Model Code of Conduct** immediately after election dates are announced.',
        'Recognizes national and state political parties and allots election symbols.',
        'Voting age was lowered from 21 to 18 years by the **61st Amendment (1988)**.'
      ]
    },
    {
      id: 'pol09',
      title: 'Federalism & Centre-State',
      cls: 'Civics',
      chapter: 'Federal Structure',
      topic_tag: 'polity',
      facts: [
        'India is a "Union of States" with a federal system possessing strong unitary features.',
        'Legislative powers are divided via three lists in the **7th Schedule**.',
        '**Union List** (originally 97 items) includes Defense, Foreign Affairs, Currency.',
        '**State List** (originally 66, now 61) includes Police, Public Health, Agriculture.',
        '**Concurrent List** (52 items) includes Education, Forests, Marriage. Both can legislate, but Union law prevails in conflicts.',
        'Residuary powers (matters not in any list) rest with the Union Parliament.',
        'The **Governor** acts as the President\'s representative in a state, creating a unitary link.',
        '**Article 370**, which granted special status to Jammu & Kashmir, was abrogated in 2019.',
        'The **Inter-State Council** (Art 263) is established by the President for coordinating between states.',
        'Zonal Councils are statutory bodies (not constitutional) established by the States Reorganisation Act, 1956.',
        'Finance Commission (Art 280) recommends the distribution of tax revenues between Centre and States.',
        'All India Services (IAS, IPS) violate pure federalism as they are recruited by the Centre but serve the states.'
      ]
    },
    {
      id: 'pol10',
      title: 'Amendment Procedure',
      cls: 'Civics',
      chapter: 'Amendments',
      topic_tag: 'polity',
      facts: [
        '**Article 368** in Part XX deals with the powers of Parliament to amend the Constitution.',
        'An amendment bill can be introduced in either house, not in state legislatures.',
        'Some provisions can be amended by a **Simple Majority** (e.g., forming new states under Art 3/4).',
        'Most provisions require a **Special Majority** (majority of total membership AND 2/3rd of members present and voting).',
        'Provisions affecting federal structure require Special Majority PLUS **ratification by half of the states**.',
        'The **42nd Amendment (1976)** is known as the "Mini-Constitution" due to its extensive changes.',
        'The **44th Amendment (1978)** rolled back many distortions of the 42nd Amendment and restored rights.',
        'The **73rd and 74th Amendments (1992)** granted constitutional status to Panchayati Raj and Municipalities.',
        'The **101st Amendment (2016)** introduced the Goods and Services Tax (GST).',
        'The **103rd Amendment (2019)** provided a 10% reservation for Economically Weaker Sections (EWS).',
        'The President must give assent to a constitutional amendment bill (cannot withhold or return).',
        'The Basic Structure doctrine prevents Parliament from altering fundamental constitutional features.'
      ]
    }
  ],
  economics: [
    {
      id: 'eco01',
      title: 'Indian Economy Overview',
      cls: 'Economy',
      chapter: 'Introduction',
      topic_tag: 'economics',
      facts: [
        'India operates as a **Mixed Economy**, where both public (government) and private sectors co-exist.',
        'As of 2024, India\'s GDP is approximately **$3.7 trillion**, making it the **5th largest economy** globally.',
        'In terms of Purchasing Power Parity (PPP), India is the 3rd largest economy.',
        'India is classified as a **developing economy** due to lower per capita income compared to developed nations.',
        'Agriculture contributes about **15% to the GDP** but employs nearly half of the workforce.',
        'The Services sector is the largest contributor, accounting for roughly **55% of the GDP**.',
        'The Industry/Manufacturing sector contributes about **30% to the GDP**.',
        'India\'s per capita income is approximately **$2,400**, reflecting unequal wealth distribution.',
        'Demographic dividend: A significant portion of India\'s population is in the working-age group (15-59 years).',
        'Capitalist economies rely on market forces (supply and demand), while socialist economies rely on state planning.',
        'Macroeconomics deals with the economy as a whole (inflation, GDP), while microeconomics deals with individual agents.',
        'The base year currently used for GDP calculation in India is 2011-12.'
      ]
    },
    {
      id: 'eco02',
      title: 'Sectors of Economy',
      cls: 'Economy',
      chapter: 'Sectors',
      topic_tag: 'economics',
      facts: [
        '**Primary Sector**: Involves extraction of natural resources (e.g., agriculture, mining, forestry, fishing).',
        '**Secondary Sector**: Covers manufacturing and construction, where raw materials are converted to finished goods.',
        '**Tertiary Sector**: The service sector, providing support to primary and secondary (e.g., transport, banking, IT, trade).',
        'Gross Domestic Product (**GDP**) is the total value of all final goods and services produced within a country in a year.',
        'Intermediate goods are not counted in GDP to avoid the problem of double counting.',
        '**Organised Sector**: Enterprises registered with the government and following formal rules and regulations.',
        '**Unorganised Sector**: Small and scattered units largely outside government control, lacking job security.',
        '**Formal Employment**: Workers have contracts, fixed hours, and social security benefits.',
        '**Informal Employment**: Daily wage laborers, self-employed without social security, forming the bulk of India\'s workforce.',
        'Underemployment (Disguised unemployment) is rampant in Indian agriculture, where more people work than necessary.',
        'Structural unemployment occurs due to a mismatch between workers\' skills and available jobs.',
        'Frictional unemployment is the temporary joblessness when people are transitioning between jobs.'
      ]
    },
    {
      id: 'eco03',
      title: 'Money & Banking',
      cls: 'Economy',
      chapter: 'Money and Credit',
      topic_tag: 'economics',
      facts: [
        'Money solves the problem of "double coincidence of wants" in a barter system.',
        'Functions of money: Medium of exchange, measure of value, store of value, and standard of deferred payment.',
        'The Reserve Bank of India (**RBI**) was established in **1935** and nationalised in **1949**.',
        'RBI functions as the "Bankers\' Bank", currency issuer, and regulator of the banking system.',
        'RBI controls the money supply through its **Monetary Policy** to manage inflation and growth.',
        '**Repo Rate**: The rate at which RBI lends short-term money to commercial banks.',
        '**Reverse Repo Rate**: The rate at which RBI borrows from commercial banks (absorbs liquidity).',
        'Cash Reserve Ratio (**CRR**): The percentage of deposits banks must keep as cash with the RBI.',
        'Statutory Liquidity Ratio (**SLR**): The percentage of deposits banks must maintain in liquid assets (gold, govt bonds).',
        'Major nationalisation of 14 commercial banks occurred in **1969** under Indira Gandhi.',
        'Fiat money is currency declared by a government to be legal tender but not backed by a physical commodity.',
        'Self Help Groups (SHGs) help the rural poor, especially women, access informal credit and escape debt traps.'
      ]
    },
    {
      id: 'eco04',
      title: 'Five Year Plans',
      cls: 'Economy',
      chapter: 'Planning',
      topic_tag: 'economics',
      facts: [
        'Economic planning in India was managed by the **Planning Commission**, established in 1950.',
        'The **1st Five Year Plan** (1951-1956) was based on the Harrod-Domar model, focusing on **agriculture**.',
        'The 2nd Plan (1956-61), based on the Mahalanobis model, focused on heavy industries.',
        'The **Green Revolution** occurred during the 3rd and 4th plan periods to achieve self-sufficiency in food grains.',
        'Norman Borlaug is the global father of the Green Revolution; M.S. Swaminathan in India.',
        'Plan Holiday (1966-1969) was declared due to wars and severe drought.',
        'The 1991 crisis led to massive economic reforms: Liberalisation, Privatisation, and Globalisation (LPG).',
        'Dr. Manmohan Singh was the Finance Minister during the 1991 reforms.',
        'The **12th Five Year Plan** (2012-2017) was the last five-year plan.',
        'The Planning Commission was replaced by **NITI Aayog** (National Institution for Transforming India) in 2015.',
        'NITI Aayog serves as a policy "think tank" fostering cooperative federalism.',
        'Planning now focuses on achieving the UN\'s Sustainable Development Goals (SDGs).'
      ]
    },
    {
      id: 'eco05',
      title: 'Poverty & Development',
      cls: 'Economy',
      chapter: 'Development',
      topic_tag: 'economics',
      facts: [
        'Poverty is estimated using a Below Poverty Line (**BPL**) defined by consumption expenditure or calorie intake.',
        'Absolute poverty refers to lacking basic necessities, while relative poverty compares income inequality.',
        'Human Development Index (**HDI**) is published by the UNDP.',
        'HDI measures three dimensions: **Life expectancy** (health), **Education** (years of schooling), and **Per capita income**.',
        'The **Gini Coefficient** is a statistical measure of economic inequality (0 = perfect equality, 1 = maximum inequality).',
        '**MGNREGA** (2005) guarantees 100 days of wage employment per rural household to enhance livelihood security.',
        '**PM-KISAN** provides direct income support of ₹6000/year to landholding farmer families.',
        '**Pradhan Mantri Awas Yojana** aims to provide affordable housing for all.',
        '**Pradhan Mantri Jan Dhan Yojana** successfully promoted financial inclusion by opening zero-balance bank accounts.',
        'Antyodaya Anna Yojana aims to provide highly subsidized food grains to the poorest of the poor.',
        'Economic growth measures only GDP increase, whereas Economic Development includes qualitative improvements in life.',
        'Infant Mortality Rate (IMR) is the number of deaths of infants under one year per 1000 live births.'
      ]
    },
    {
      id: 'eco06',
      title: 'Taxation & Budget',
      cls: 'Economy',
      chapter: 'Public Finance',
      topic_tag: 'economics',
      facts: [
        'Taxes are classified into **Direct Taxes** and **Indirect Taxes**.',
        'Direct taxes (e.g., Income Tax, Corporate Tax) are levied directly on an entity\'s income/wealth; burden cannot be shifted.',
        'Indirect taxes (e.g., GST, Customs duty) are levied on goods and services; the burden is shifted to the final consumer.',
        'Goods and Services Tax (**GST**) was implemented in 2017 via the **101st Amendment**.',
        'GST subsumed multiple indirect taxes to create a single national market ("One Nation, One Tax").',
        'The Union Budget is a statement of estimated receipts and expenditures, presented annually on **1st February**.',
        '**Revenue Expenditure** relates to normal running of govt (salaries, subsidies) and does not create assets.',
        '**Capital Expenditure** creates physical or financial assets or reduces liabilities (infrastructure, repayment of loans).',
        '**Fiscal Deficit** is the total borrowing required by the government (Total Expenditure minus Total Receipts excluding borrowings).',
        '**Revenue Deficit** occurs when revenue expenditure exceeds revenue receipts.',
        '**Primary Deficit** is Fiscal Deficit minus interest payments on previous borrowings.',
        'Progressive taxation implies a higher tax rate as the income increases, promoting equity.'
      ]
    },
    {
      id: 'eco07',
      title: 'International Trade & Globalisation',
      cls: 'Economy',
      chapter: 'Globalisation',
      topic_tag: 'economics',
      facts: [
        'Globalisation is the process of rapid integration or interconnection between countries through trade and investment.',
        'Multinational Corporations (**MNCs**) are major drivers of globalisation, setting up production globally to cut costs.',
        'Foreign Direct Investment (**FDI**) involves direct business interests and lasting control in a foreign enterprise.',
        'Foreign Institutional Investment (FII) involves short-term investment in financial markets (stocks/bonds).',
        'The World Trade Organization (**WTO**) was established in 1995, replacing GATT, to regulate international trade.',
        'The **IMF** and **World Bank** were created at the 1944 Bretton Woods conference.',
        'The IMF provides short-term loans to manage balance of payments crises.',
        'The World Bank provides long-term loans for development and infrastructure projects.',
        '**Balance of Trade** is the difference between the value of a country\'s exports and imports of goods.',
        '**Balance of Payments** is a broader record of all economic transactions between a country and the rest of the world.',
        '**Make in India** initiative aims to boost domestic manufacturing and attract FDI.',
        '**Atmanirbhar Bharat** emphasizes self-reliance and reducing dependence on imports.'
      ]
    },
    {
      id: 'eco08',
      title: 'Agriculture Economy',
      cls: 'Economy',
      chapter: 'Agriculture',
      topic_tag: 'economics',
      facts: [
        'Agriculture is the primary source of livelihood for over 50% of the Indian population.',
        'The **Green Revolution** massively increased wheat production (Punjab, Haryana) and later rice (AP, Tamil Nadu).',
        'The **White Revolution** (Operation Flood) made India the largest milk producer.',
        '**Verghese Kurien** is the father of the White Revolution; AMUL is its most famous cooperative success.',
        'The **Blue Revolution** refers to the significant increase in fish and aquaculture production.',
        '**NABARD** (National Bank for Agriculture and Rural Development) was established in 1982 as the apex agricultural credit institution.',
        'Minimum Support Price (**MSP**) is the guaranteed price at which the government buys crops from farmers, announced before sowing.',
        'Commission for Agricultural Costs and Prices (CACP) recommends the MSPs.',
        '**APMC** (Agricultural Produce Market Committee) mandis are state-regulated markets to protect farmers from exploitation.',
        'Kisan Credit Card (KCC) scheme provides farmers with timely and adequate credit support.',
        'Food Corporation of India (FCI) procures grains at MSP and distributes them via the Public Distribution System (PDS).',
        'Buffer stocks are maintained by the FCI to ensure food security during shortages.'
      ]
    }
  ]
};
