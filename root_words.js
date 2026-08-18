const ROOT_WORDS = [
    {
        "root": "Amphi",
        "meaning": "Both sides, around, about",
        "examples": [
            {
                "word": "Amphibian",
                "definition": "An animal able to live both on land and in water."
            },
            {
                "word": "Amphitheater",
                "definition": "An oval or round building with tiers of seats around an open central space."
            },
            {
                "word": "Amphibolgical",
                "definition": "Ambiguous in meaning, having more than one interpretation."
            }
        ]
    },
    {
        "root": "Anthrop",
        "meaning": "Man, human",
        "examples": [
            {
                "word": "Anthropology",
                "definition": "The study of human societies and cultures and their development."
            },
            {
                "word": "Misanthrope",
                "definition": "A person who dislikes humankind and avoids human society."
            },
            {
                "word": "Philanthropy",
                "definition": "The desire to promote the welfare of others, expressed especially by the generous donation of money to good causes."
            }
        ]
    },
    {
        "root": "Arch",
        "meaning": "Chief, ruler, first",
        "examples": [
            {
                "word": "Anarchy",
                "definition": "A state of disorder due to absence or nonrecognition of authority."
            },
            {
                "word": "Hierarchy",
                "definition": "A system in which members of an organization or society are ranked according to status or authority."
            },
            {
                "word": "Monarch",
                "definition": "A sovereign head of state, especially a king, queen, or emperor."
            }
        ]
    },
    {
        "root": "Aud",
        "meaning": "Hear",
        "examples": [
            {
                "word": "Audible",
                "definition": "Able to be heard."
            },
            {
                "word": "Auditorium",
                "definition": "The part of a theatre, concert hall, or other public building in which the audience sits."
            },
            {
                "word": "Audacious",
                "definition": "Showing a willingness to take surprisingly bold risks (historically linked to listening/boldness, though etymologically distinct, kept for SSC high-frequency list)."
            }
        ]
    },
    {
        "root": "Auto",
        "meaning": "Self",
        "examples": [
            {
                "word": "Autocrat",
                "definition": "A ruler who has absolute power."
            },
            {
                "word": "Autonomy",
                "definition": "The right or condition of self-government."
            },
            {
                "word": "Autobiography",
                "definition": "An account of a person's life written by that person."
            }
        ]
    },
    {
        "root": "Bene",
        "meaning": "Good, well",
        "examples": [
            {
                "word": "Benevolent",
                "definition": "Well meaning and kindly."
            },
            {
                "word": "Benefactor",
                "definition": "A person who gives money or other help to a person or cause."
            },
            {
                "word": "Benign",
                "definition": "Gentle; kindly; (of a disease) not harmful in effect."
            }
        ]
    },
    {
        "root": "Bi",
        "meaning": "Two",
        "examples": [
            {
                "word": "Bilateral",
                "definition": "Having or relating to two sides; affecting both sides."
            },
            {
                "word": "Biannual",
                "definition": "Occurring twice a year."
            },
            {
                "word": "Bigamy",
                "definition": "The offense of marrying someone while already married to another person."
            }
        ]
    },
    {
        "root": "Bio",
        "meaning": "Life",
        "examples": [
            {
                "word": "Biography",
                "definition": "An account of someone's life written by someone else."
            },
            {
                "word": "Biology",
                "definition": "The study of living organisms."
            },
            {
                "word": "Biopsy",
                "definition": "An examination of tissue removed from a living body to discover the presence, cause, or extent of a disease."
            }
        ]
    },
    {
        "root": "Cata",
        "meaning": "Down, against, completely",
        "examples": [
            {
                "word": "Catastrophe",
                "definition": "An event causing great and often sudden damage or suffering; a disaster."
            },
            {
                "word": "Catacomb",
                "definition": "An underground cemetery."
            },
            {
                "word": "Catalog",
                "definition": "A complete list of items, typically one in alphabetical or other systematic order."
            }
        ]
    },
    {
        "root": "Cent",
        "meaning": "Hundred",
        "examples": [
            {
                "word": "Centenary",
                "definition": "Of or relating to a hundredth anniversary."
            },
            {
                "word": "Centurion",
                "definition": "The commander of a century in the ancient Roman army."
            },
            {
                "word": "Centipede",
                "definition": "A predatory arthropod with a flattened elongated body composed of many segments."
            }
        ]
    },
    {
        "root": "Chron",
        "meaning": "Time",
        "examples": [
            {
                "word": "Anachronism",
                "definition": "Something out of its proper time."
            },
            {
                "word": "Chronological",
                "definition": "Arranged in order of time."
            },
            {
                "word": "Synchronize",
                "definition": "To occur at the same time."
            }
        ]
    },
    {
        "root": "Cide",
        "meaning": "Kill, killer",
        "examples": [
            {
                "word": "Homicide",
                "definition": "The deliberate and unlawful killing of one person by another; murder."
            },
            {
                "word": "Genocide",
                "definition": "The deliberate killing of a large group of people, especially those of a particular ethnic group or nation."
            },
            {
                "word": "Patricide",
                "definition": "The killing of one's father."
            }
        ]
    },
    {
        "root": "Circum",
        "meaning": "Around",
        "examples": [
            {
                "word": "Circumvent",
                "definition": "Find a way around (an obstacle)."
            },
            {
                "word": "Circumlocution",
                "definition": "The use of many words where fewer would do, especially in a deliberate attempt to be vague or evasive."
            },
            {
                "word": "Circumspect",
                "definition": "Wary and unwilling to take risks."
            }
        ]
    },
    {
        "root": "Claim, Clam",
        "meaning": "Shout, call out",
        "examples": [
            {
                "word": "Acclaim",
                "definition": "Praise enthusiastically and publicly."
            },
            {
                "word": "Clamor",
                "definition": "A loud and confused noise, especially that of people shouting vehemently."
            },
            {
                "word": "Proclaim",
                "definition": "Announce officially or publicly."
            }
        ]
    },
    {
        "root": "Cracy",
        "meaning": "Rule, government",
        "examples": [
            {
                "word": "Democracy",
                "definition": "A system of government by the whole population or all the eligible members of a state."
            },
            {
                "word": "Aristocracy",
                "definition": "The highest class in certain societies, typically comprising people of noble birth."
            },
            {
                "word": "Plutocracy",
                "definition": "Government by the wealthy."
            }
        ]
    },
    {
        "root": "Cred",
        "meaning": "Believe",
        "examples": [
            {
                "word": "Credulous",
                "definition": "Having or showing too great a readiness to believe things."
            },
            {
                "word": "Incredible",
                "definition": "Impossible or difficult to believe."
            },
            {
                "word": "Credentials",
                "definition": "A qualification, achievement, personal quality, or aspect of a person's background."
            }
        ]
    },
    {
        "root": "Crypto",
        "meaning": "Hidden, secret",
        "examples": [
            {
                "word": "Cryptic",
                "definition": "Having a meaning that is mysterious or obscure."
            },
            {
                "word": "Cryptogram",
                "definition": "A text written in cipher or code."
            },
            {
                "word": "Cryptonym",
                "definition": "A secret name or code name."
            }
        ]
    },
    {
        "root": "Demo",
        "meaning": "People",
        "examples": [
            {
                "word": "Demography",
                "definition": "The study of statistics such as births, deaths, income, or the incidence of disease, which illustrate the changing structure of human populations."
            },
            {
                "word": "Demagogue",
                "definition": "A political leader who seeks support by appealing to the desires and prejudices of ordinary people rather than by using rational argument."
            },
            {
                "word": "Pandemic",
                "definition": "An outbreak of a disease that occurs over a wide geographic area and affects an exceptionally high proportion of the population."
            }
        ]
    },
    {
        "root": "Dict",
        "meaning": "Say, speak",
        "examples": [
            {
                "word": "Malediction",
                "definition": "A magical word or phrase uttered with the intention of bringing about evil; a curse."
            },
            {
                "word": "Contradict",
                "definition": "Deny the truth of a statement, especially by asserting the opposite."
            },
            {
                "word": "Jurisdiction",
                "definition": "The official power to make legal decisions and judgments."
            }
        ]
    },
    {
        "root": "Dox",
        "meaning": "Opinion, belief",
        "examples": [
            {
                "word": "Orthodox",
                "definition": "Conforming to what is generally or traditionally accepted as right or true."
            },
            {
                "word": "Paradox",
                "definition": "A seemingly absurd or self-contradictory statement or proposition that when investigated or explained may prove to be well-founded or true."
            },
            {
                "word": "Heterodox",
                "definition": "Not conforming with accepted or orthodox standards or beliefs."
            }
        ]
    },
    {
        "root": "Duc, Duct",
        "meaning": "Lead",
        "examples": [
            {
                "word": "Abduct",
                "definition": "Take (someone) away illegally by force or deception; kidnap."
            },
            {
                "word": "Induct",
                "definition": "Admit (someone) formally to a post or organization."
            },
            {
                "word": "Aqueduct",
                "definition": "An artificial channel for conveying water, typically in the form of a bridge across a valley."
            }
        ]
    },
    {
        "root": "Dyn",
        "meaning": "Power",
        "examples": [
            {
                "word": "Dynamic",
                "definition": "(Of a process or system) characterized by constant change, activity, or progress."
            },
            {
                "word": "Dynamite",
                "definition": "A high explosive consisting of nitroglycerin mixed with an absorbent material."
            },
            {
                "word": "Dynasty",
                "definition": "A line of hereditary rulers of a country."
            }
        ]
    },
    {
        "root": "Dys",
        "meaning": "Bad, abnormal, difficult",
        "examples": [
            {
                "word": "Dysfunctional",
                "definition": "Not operating normally or properly."
            },
            {
                "word": "Dyslexia",
                "definition": "A general term for disorders that involve difficulty in learning to read or interpret words."
            },
            {
                "word": "Dyspepsia",
                "definition": "Indigestion."
            }
        ]
    },
    {
        "root": "Ego",
        "meaning": "I, self",
        "examples": [
            {
                "word": "Egotist",
                "definition": "A person who is excessively conceited or absorbed in themselves."
            },
            {
                "word": "Egocentric",
                "definition": "Thinking only of oneself, without regard for the feelings or desires of others."
            },
            {
                "word": "Egomaniac",
                "definition": "A person who is obsessively egotistical."
            }
        ]
    },
    {
        "root": "Eu",
        "meaning": "Good, well",
        "examples": [
            {
                "word": "Eulogy",
                "definition": "A speech or piece of writing that praises someone or something highly."
            },
            {
                "word": "Euphony",
                "definition": "The quality of being pleasing to the ear, especially through a harmonious combination of words."
            },
            {
                "word": "Euphemism",
                "definition": "A mild or indirect word substituted for one considered to be too harsh or blunt."
            }
        ]
    },
    {
        "root": "Fac, Fact",
        "meaning": "Make, do",
        "examples": [
            {
                "word": "Facsimile",
                "definition": "An exact copy, especially of written or printed material."
            },
            {
                "word": "Benefactor",
                "definition": "A person who gives money or other help to a person or cause."
            },
            {
                "word": "Factotum",
                "definition": "An employee who does all kinds of work."
            }
        ]
    },
    {
        "root": "Gamy",
        "meaning": "Marriage",
        "examples": [
            {
                "word": "Bigamy",
                "definition": "The offense of marrying someone while already married to another person."
            },
            {
                "word": "Monogamy",
                "definition": "The practice or state of being married to one person at a time."
            },
            {
                "word": "Polygamy",
                "definition": "The practice or custom of having more than one wife or husband at the same time."
            }
        ]
    },
    {
        "root": "Geo",
        "meaning": "Earth",
        "examples": [
            {
                "word": "Geocentric",
                "definition": "Having or representing the earth as the center."
            },
            {
                "word": "Geology",
                "definition": "The science which deals with the physical structure and substance of the earth."
            },
            {
                "word": "Geopolitics",
                "definition": "Politics, especially international relations, as influenced by geographical factors."
            }
        ]
    },
    {
        "root": "Gno",
        "meaning": "Know",
        "examples": [
            {
                "word": "Agnostic",
                "definition": "A person who believes that nothing is known or can be known of the existence or nature of God."
            },
            {
                "word": "Diagnosis",
                "definition": "The identification of the nature of an illness or other problem by examination."
            },
            {
                "word": "Prognosis",
                "definition": "A forecast of the likely outcome of a situation."
            }
        ]
    },
    {
        "root": "Graph",
        "meaning": "Write, draw",
        "examples": [
            {
                "word": "Calligraphy",
                "definition": "Decorative handwriting or handwritten lettering."
            },
            {
                "word": "Demography",
                "definition": "The study of statistics relating to human populations."
            },
            {
                "word": "Lexicography",
                "definition": "The-writing, editing, or compiling of dictionaries."
            }
        ]
    },
    {
        "root": "Gyn",
        "meaning": "Woman, female",
        "examples": [
            {
                "word": "Gynecology",
                "definition": "The branch of physiology and medicine which deals with the functions and diseases specific to women."
            },
            {
                "word": "Misogynist",
                "definition": "A person who dislikes, despises, or is strongly prejudiced against women."
            },
            {
                "word": "Androgynous",
                "definition": "Having both male and female characteristics."
            }
        ]
    },
    {
        "root": "Hetero",
        "meaning": "Other, different",
        "examples": [
            {
                "word": "Heterogeneous",
                "definition": "Diverse in character or content."
            },
            {
                "word": "Heterodox",
                "definition": "Not conforming with accepted or orthodox standards or beliefs."
            },
            {
                "word": "Heteronym",
                "definition": "Each of two or more words that have the same spelling but different meanings and pronunciations."
            }
        ]
    },
    {
        "root": "Homo",
        "meaning": "Same",
        "examples": [
            {
                "word": "Homogeneous",
                "definition": "Of the same kind; alike."
            },
            {
                "word": "Homonym",
                "definition": "Each of two or more words having the same spelling or pronunciation but different meanings and origins."
            },
            {
                "word": "Homogenize",
                "definition": "To make uniform or similar."
            }
        ]
    },
    {
        "root": "Hydr",
        "meaning": "Water",
        "examples": [
            {
                "word": "Anhydrous",
                "definition": "Containing no water."
            },
            {
                "word": "Hydroelectric",
                "definition": "Generating electricity by the conversion of energy of running water."
            },
            {
                "word": "Hydraulic",
                "definition": "Denoting, relating to, or operated by a liquid moving in confinement under pressure."
            }
        ]
    },
    {
        "root": "Hyper",
        "meaning": "Over, above, excessive",
        "examples": [
            {
                "word": "Hyperbole",
                "definition": "Exaggerated statements or claims not meant to be taken literally."
            },
            {
                "word": "Hypercritical",
                "definition": "Excessively and unreasonably critical."
            },
            {
                "word": "Hypertension",
                "definition": "Abnormally high blood pressure."
            }
        ]
    },
    {
        "root": "Hypo",
        "meaning": "Under, beneath, less",
        "examples": [
            {
                "word": "Hypodermic",
                "definition": "Referred to the region immediately beneath the skin."
            },
            {
                "word": "Hypocrisy",
                "definition": "The practice of claiming to have moral standards or beliefs to which one's own behavior does not conform."
            },
            {
                "word": "Hypothetical",
                "definition": "Based on or resting on an unproven theory or a tentative guess."
            }
        ]
    },
    {
        "root": "Lith",
        "meaning": "Stone",
        "examples": [
            {
                "word": "Monolith",
                "definition": "A large single upright block of stone."
            },
            {
                "word": "Paleolithic",
                "definition": "Relating to the early phase of the Stone Age."
            },
            {
                "word": "Lithograph",
                "definition": "A print produced by the method of printing from a stone or metal plate."
            }
        ]
    },
    {
        "root": "Loc",
        "meaning": "Place",
        "examples": [
            {
                "word": "Localize",
                "definition": "Restrict (something) to a particular place."
            },
            {
                "word": "Dislocate",
                "definition": "Disturb the normal arrangement or position of (something, typically a joint)."
            },
            {
                "word": "Allocution",
                "definition": "A formal speech giving advice or a warning."
            }
        ]
    },
    {
        "root": "Log",
        "meaning": "Word, study, speech",
        "examples": [
            {
                "word": "Neologism",
                "definition": "A newly coined word or expression."
            },
            {
                "word": "Prologue",
                "definition": "A separate introductory section of a literary or musical work."
            },
            {
                "word": "Apology",
                "definition": "A regretful acknowledgement of an offense or failure."
            }
        ]
    },
    {
        "root": "Luc, Lum",
        "meaning": "Light",
        "examples": [
            {
                "word": "Lucid",
                "definition": "Expressed clearly; easy to understand."
            },
            {
                "word": "Bioluminescence",
                "definition": "The production and emission of light by a living organism."
            },
            {
                "word": "Illuminate",
                "definition": "Light up."
            }
        ]
    },
    {
        "root": "Mal",
        "meaning": "Bad, evil",
        "examples": [
            {
                "word": "Malcontent",
                "definition": "A dissatisfied and rebellious person."
            },
            {
                "word": "Malediction",
                "definition": "A curse."
            },
            {
                "word": "Malfeasance",
                "definition": "Wrongdoing, especially by a public official."
            }
        ]
    },
    {
        "root": "Mania",
        "meaning": "Madness, obsession",
        "examples": [
            {
                "word": "Kleptomania",
                "definition": "A recurrent urge to steal, typically without regard for need or profit."
            },
            {
                "word": "Megalomania",
                "definition": "Obsession with the exercise of power, especially in the domination of others."
            },
            {
                "word": "Dipsomania",
                "definition": "An abnormal craving for alcohol."
            }
        ]
    },
    {
        "root": "Mega",
        "meaning": "Great, large",
        "examples": [
            {
                "word": "Megalopolis",
                "definition": "A very large, heavily populated city or urban complex."
            },
            {
                "word": "Megalomaniac",
                "definition": "A person who is obsessed with their own power."
            },
            {
                "word": "Megahertz",
                "definition": "A unit of frequency equal to one million hertz."
            }
        ]
    },
    {
        "root": "Mis",
        "meaning": "Hate",
        "examples": [
            {
                "word": "Misogyny",
                "definition": "Dislike of, contempt for, or ingrained prejudice against women."
            },
            {
                "word": "Misanthrope",
                "definition": "A person who dislikes humankind."
            },
            {
                "word": "Misogamy",
                "definition": "Hatred of marriage."
            }
        ]
    },
    {
        "root": "Mono",
        "meaning": "One, single",
        "examples": [
            {
                "word": "Monotonous",
                "definition": "Dull, tedious, and repetitious; lacking in variety and interest."
            },
            {
                "word": "Monolithic",
                "definition": "Forming a single large block; rigidly uniform."
            },
            {
                "word": "Monopolize",
                "definition": "To get or keep exclusively to oneself."
            }
        ]
    },
    {
        "root": "Morph",
        "meaning": "Form, shape",
        "examples": [
            {
                "word": "Metamorphosis",
                "definition": "A change of the form or nature of a thing or person into a completely different one."
            },
            {
                "word": "Amorphous",
                "definition": "Without a clearly defined shape or form."
            },
            {
                "word": "Morpheme",
                "definition": "A meaningful morphological unit of a language that can further be divided."
            }
        ]
    },
    {
        "root": "Mort",
        "meaning": "Death",
        "examples": [
            {
                "word": "Moribund",
                "definition": "(Of a thing) at an end; failing; (of a person) at the point of death."
            },
            {
                "word": "Mortician",
                "definition": "An undertaker."
            },
            {
                "word": "Immortal",
                "definition": "Living forever; never dying."
            }
        ]
    },
    {
        "root": "Multi",
        "meaning": "Many",
        "examples": [
            {
                "word": "Multifarious",
                "definition": "Many and of various types."
            },
            {
                "word": "Multitude",
                "definition": "A large number of people or things."
            },
            {
                "word": "Multilateral",
                "definition": "Agreed upon or participated in by three or more parties, especially the governments of different countries."
            }
        ]
    },
    {
        "root": "Neo",
        "meaning": "New",
        "examples": [
            {
                "word": "Neologism",
                "definition": "A newly coined word or expression."
            },
            {
                "word": "Neophyte",
                "definition": "A person who is new to a subject, skill, or belief."
            },
            {
                "word": "Neonatal",
                "definition": "Relating to newborn children."
            }
        ]
    },
    {
        "root": "Omni",
        "meaning": "All",
        "examples": [
            {
                "word": "Omnipotent",
                "definition": "Having unlimited power; able to do anything."
            },
            {
                "word": "Omniscient",
                "definition": "Knowing everything."
            },
            {
                "word": "Omnivorous",
                "definition": "Feeding on food of both plant and animal origin."
            }
        ]
    },
    {
        "root": "Acri",
        "meaning": "Bitter, sharp, sour",
        "examples": [
            {
                "word": "Acrimony",
                "definition": "Bitterness or ill feeling."
            },
            {
                "word": "Acerbic",
                "definition": "Sharp and forthright in taste or style."
            },
            {
                "word": "Acrid",
                "definition": "Unpleasantly bitter or pungent."
            }
        ]
    },
    {
        "root": "Ali",
        "meaning": "Other",
        "examples": [
            {
                "word": "Alienate",
                "definition": "Cause someone to feel isolated or estranged."
            },
            {
                "word": "Alias",
                "definition": "A false or alternate identity."
            },
            {
                "word": "Alibi",
                "definition": "A claim that one was elsewhere when an act took place."
            }
        ]
    },
    {
        "root": "Alt",
        "meaning": "High, deep",
        "examples": [
            {
                "word": "Altitude",
                "definition": "The height of an object or point in relation to sea level."
            },
            {
                "word": "Exalt",
                "definition": "Raise to a higher rank or a state of greater power."
            },
            {
                "word": "Altimeter",
                "definition": "An instrument for measuring altitude."
            }
        ]
    },
    {
        "root": "Amo",
        "meaning": "Love",
        "examples": [
            {
                "word": "Amiable",
                "definition": "Having or displaying a friendly and pleasant manner."
            },
            {
                "word": "Amorous",
                "definition": "Showing, feeling, or relating to sexual desire."
            },
            {
                "word": "Enamored",
                "definition": "Filled with a feeling of love for."
            }
        ]
    },
    {
        "root": "Anim",
        "meaning": "Mind, life, spirit",
        "examples": [
            {
                "word": "Animosity",
                "definition": "Strong hostility or antagonism."
            },
            {
                "word": "Magnanimous",
                "definition": "Very generous or forgiving, especially toward a rival."
            },
            {
                "word": "Unanimous",
                "definition": "Fully in agreement."
            }
        ]
    },
    {
        "root": "Aqua",
        "meaning": "Water",
        "examples": [
            {
                "word": "Aqueduct",
                "definition": "An artificial channel for conveying water."
            },
            {
                "word": "Aquatic",
                "definition": "Growing or living in or frequenting water."
            },
            {
                "word": "Aquiferous",
                "definition": "Bearing or containing water."
            }
        ]
    },
    {
        "root": "Audac",
        "meaning": "Bold, daring",
        "examples": [
            {
                "word": "Audacity",
                "definition": "A willingness to take bold risks."
            },
            {
                "word": "Audacious",
                "definition": "Showing a willingness to take surprisingly bold risks."
            },
            {
                "word": "Audaciously",
                "definition": "In a bold, daring, or reckless manner."
            }
        ]
    },
    {
        "root": "Bell",
        "meaning": "War",
        "examples": [
            {
                "word": "Belligerent",
                "definition": "Hostile and aggressive."
            },
            {
                "word": "Bellicose",
                "definition": "Demonstrating aggression and willingness to fight."
            },
            {
                "word": "Antebellum",
                "definition": "Occurring or existing before a particular war, notably the American Civil War."
            }
        ]
    },
    {
        "root": "Brevi",
        "meaning": "Short",
        "examples": [
            {
                "word": "Brevity",
                "definition": "Concise and exact use of words in writing or speech."
            },
            {
                "word": "Abbreviate",
                "definition": "Shorten a word, phrase, or text."
            },
            {
                "word": "Breviary",
                "definition": "A book containing the service for each day."
            }
        ]
    },
    {
        "root": "Cadu",
        "meaning": "To fall",
        "examples": [
            {
                "word": "Cadence",
                "definition": "A fall or rise in the voice; a rhythmic flow."
            },
            {
                "word": "Decadence",
                "definition": "Moral or cultural decline."
            },
            {
                "word": "Caducous",
                "definition": "Dropping off early, as leaves or petals."
            }
        ]
    },
    {
        "root": "Cap",
        "meaning": "Head",
        "examples": [
            {
                "word": "Capital",
                "definition": "The most important city or town of a country or region."
            },
            {
                "word": "Capitulate",
                "definition": "Cease to resist an opponent or an unwelcome demand."
            },
            {
                "word": "Decapitate",
                "definition": "Cut off the head of."
            }
        ]
    },
    {
        "root": "Carn",
        "meaning": "Flesh",
        "examples": [
            {
                "word": "Carnivorous",
                "definition": "Feeding on other animals."
            },
            {
                "word": "Carnival",
                "definition": "A period of public revelry."
            },
            {
                "word": "Reincarnation",
                "definition": "The rebirth of a soul in a new body."
            }
        ]
    },
    {
        "root": "Caus",
        "meaning": "Cause, motive",
        "examples": [
            {
                "word": "Causality",
                "definition": "The relationship between cause and effect."
            },
            {
                "word": "Accusation",
                "definition": "A charge or claim that someone has done something illegal."
            },
            {
                "word": "Excusable",
                "definition": "Admitting of being excused or justified."
            }
        ]
    },
    {
        "root": "Ced",
        "meaning": "To go, yield",
        "examples": [
            {
                "word": "Concede",
                "definition": "Admit that something is true after first denying it."
            },
            {
                "word": "Precede",
                "definition": "Come before something in time."
            },
            {
                "word": "Secession",
                "definition": "The action of withdrawing formally from membership."
            }
        ]
    },
    {
        "root": "Celer",
        "meaning": "Fast, speed",
        "examples": [
            {
                "word": "Celerity",
                "definition": "Swiftness of movement."
            },
            {
                "word": "Accelerate",
                "definition": "Begin to move more quickly."
            },
            {
                "word": "Decelerate",
                "definition": "Reduce speed."
            }
        ]
    },
    {
        "root": "Clud",
        "meaning": "To close, shut",
        "examples": [
            {
                "word": "Seclude",
                "definition": "Keep away from other people."
            },
            {
                "word": "Preclude",
                "definition": "Prevent from happening; make impossible."
            },
            {
                "word": "Recluse",
                "definition": "A person who lives a solitary life."
            }
        ]
    },
    {
        "root": "Cogn",
        "meaning": "To know",
        "examples": [
            {
                "word": "Cognitive",
                "definition": "Relating to mental action or process of acquiring knowledge."
            },
            {
                "word": "Recognize",
                "definition": "Identify someone or something from previous encounters."
            },
            {
                "word": "Incognito",
                "definition": "Having one's true identity concealed."
            }
        ]
    },
    {
        "root": "Corp",
        "meaning": "Body",
        "examples": [
            {
                "word": "Corpus",
                "definition": "A collection of written texts."
            },
            {
                "word": "Corpulent",
                "definition": "Fat; having a large bulky body."
            },
            {
                "word": "Incorporate",
                "definition": "Take in or contain as part of a whole."
            }
        ]
    },
    {
        "root": "Cred",
        "meaning": "Trust, believe",
        "examples": [
            {
                "word": "Credence",
                "definition": "Belief as to the truth of something."
            },
            {
                "word": "Credulous",
                "definition": "Showing too great a readiness to believe things."
            },
            {
                "word": "Incredible",
                "definition": "Impossible or difficult to believe."
            }
        ]
    },
    {
        "root": "Culp",
        "meaning": "Fault, blame",
        "examples": [
            {
                "word": "Culpable",
                "definition": "Deserving blame."
            },
            {
                "word": "Culprit",
                "definition": "A person who is responsible for a crime or other misdeed."
            },
            {
                "word": "Exculpate",
                "definition": "Show or declare that someone is not guilty of wrongdoing."
            }
        ]
    },
    {
        "root": "Derm",
        "meaning": "Skin",
        "examples": [
            {
                "word": "Dermatology",
                "definition": "The branch of medicine concerned with the skin."
            },
            {
                "word": "Epidermis",
                "definition": "The outer layer of cells covering an organism."
            },
            {
                "word": "Hypodermic",
                "definition": "Referred to the region immediately beneath the skin."
            }
        ]
    },
    {
        "root": "Dox",
        "meaning": "Opinion, praise",
        "examples": [
            {
                "word": "Orthodox",
                "definition": "Conforming to what is generally or traditionally accepted."
            },
            {
                "word": "Paradox",
                "definition": "A seemingly absurd or self-contradictory statement."
            },
            {
                "word": "Heterodox",
                "definition": "Not conforming with accepted or orthodox standards."
            }
        ]
    },
    {
        "root": "Dorm",
        "meaning": "Sleep",
        "examples": [
            {
                "word": "Dormant",
                "definition": "Temporarily inactive or asleep."
            },
            {
                "word": "Dormitory",
                "definition": "A large bedroom for a number of people in a school."
            },
            {
                "word": "Dormancy",
                "definition": "A state of normal suspension of active operations."
            }
        ]
    },
    {
        "root": "Equ",
        "meaning": "Equal, fair",
        "examples": [
            {
                "word": "Equanimity",
                "definition": "Mental calmness and composure, especially in a difficult situation."
            },
            {
                "word": "Equivocal",
                "definition": "Open to more than one interpretation; ambiguous."
            },
            {
                "word": "Egalitarian",
                "definition": "Believing in the principle that all people are equal."
            }
        ]
    },
    {
        "root": "Err",
        "meaning": "To wander, stray",
        "examples": [
            {
                "word": "Erratic",
                "definition": "Not even or regular in pattern; unpredictable."
            },
            {
                "word": "Aberration",
                "definition": "A departure from what is normal, usual, or expected."
            },
            {
                "word": "Erroneous",
                "definition": "Wrong; incorrect."
            }
        ]
    },
    {
        "root": "Ferv",
        "meaning": "Boil, heat",
        "examples": [
            {
                "word": "Fervent",
                "definition": "Having or displaying a passionate intensity."
            },
            {
                "word": "Fervor",
                "definition": "Intense and passionate feeling."
            },
            {
                "word": "Effervescent",
                "definition": "Vivacious and enthusiastic; bubbly."
            }
        ]
    },
    {
        "root": "Fid",
        "meaning": "Faith, trust",
        "examples": [
            {
                "word": "Fidelity",
                "definition": "Faithfulness to a person, cause, or belief."
            },
            {
                "word": "Perfidy",
                "definition": "Deceitfulness; untrustworthiness."
            },
            {
                "word": "Confidant",
                "definition": "A person with whom one shares a secret or private matter."
            }
        ]
    },
    {
        "root": "Frag",
        "meaning": "Break",
        "examples": [
            {
                "word": "Fragile",
                "definition": "Easily broken or damaged."
            },
            {
                "word": "Fractious",
                "definition": "Irritable and quarrelsome."
            },
            {
                "word": "Refract",
                "definition": "Make a ray of light bend when it enters a substance."
            }
        ]
    },
    {
        "root": "Fug",
        "meaning": "Flee",
        "examples": [
            {
                "word": "Fugitive",
                "definition": "A person who has escaped from a place or is in hiding."
            },
            {
                "word": "Refuge",
                "definition": "The condition of being safe or sheltered from pursuit."
            },
            {
                "word": "Subterfuge",
                "definition": "Deceit used in order to achieve one's goal."
            }
        ]
    },
    {
        "root": "Gen",
        "meaning": "Birth, race, produce",
        "examples": [
            {
                "word": "Indigenous",
                "definition": "Originating or occurring naturally in a particular place."
            },
            {
                "word": "Progeny",
                "definition": "A descendant or the descendants of a person, animal, or plant."
            },
            {
                "word": "Genocide",
                "definition": "The deliberate killing of a large group of people."
            }
        ]
    },
    {
        "root": "Grad",
        "meaning": "Step, degree",
        "examples": [
            {
                "word": "Gradient",
                "definition": "An inclined part of a road or railway; a slope."
            },
            {
                "word": "Retrograde",
                "definition": "Directed or moving backward."
            },
            {
                "word": "Degrade",
                "definition": "Treat or regard with contempt or disrespect."
            }
        ]
    },
    {
        "root": "Greg",
        "meaning": "Flock, herd",
        "examples": [
            {
                "word": "Gregarious",
                "definition": "Fond of company; sociable."
            },
            {
                "word": "Congregate",
                "definition": "Gather into a crowd or mass."
            },
            {
                "word": "Egregious",
                "definition": "Outstandingly bad; shocking."
            }
        ]
    },
    {
        "root": "Hemo",
        "meaning": "Blood",
        "examples": [
            {
                "word": "Hemorrhage",
                "definition": "An escape of blood from a ruptured blood vessel."
            },
            {
                "word": "Hemoglobin",
                "definition": "A red protein responsible for transporting oxygen in the blood."
            },
            {
                "word": "Hemophilia",
                "definition": "A medical condition in which the ability of the blood to clot is severely impaired."
            }
        ]
    },
    {
        "root": "Itiner",
        "meaning": "Journey, path",
        "examples": [
            {
                "word": "Itinerary",
                "definition": "A planned route or journey."
            },
            {
                "word": "Itinerant",
                "definition": "Traveling from place to place."
            },
            {
                "word": "Transient",
                "definition": "Lasting for only a short time; impermanent."
            }
        ]
    },
    {
        "root": "Ject",
        "meaning": "To throw",
        "examples": [
            {
                "word": "Interject",
                "definition": "Say something abruptly, especially as an aside."
            },
            {
                "word": "Projectile",
                "definition": "A missile designed to be fired from a rocket or gun."
            },
            {
                "word": "Abject",
                "definition": "Extremely bad, unpleasant, and degrading."
            }
        ]
    },
    {
        "root": "Jud",
        "meaning": "Judge",
        "examples": [
            {
                "word": "Judicious",
                "definition": "Having, showing, or done with good judgment or sense."
            },
            {
                "word": "Adjudicate",
                "definition": "Make a formal judgment or decision about a problem."
            },
            {
                "word": "Prejudice",
                "definition": "Preconceived opinion that is not based on reason or actual experience."
            }
        ]
    },
    {
        "root": "Loc",
        "meaning": "Place",
        "examples": [
            {
                "word": "Locate",
                "definition": "Discover the exact place or position of."
            },
            {
                "word": "Dislocate",
                "definition": "Disturb normal arrangement or connectivity."
            },
            {
                "word": "Collocate",
                "definition": "Occur together with another word with a high frequency."
            }
        ]
    },
    {
        "root": "Loqu",
        "meaning": "To speak",
        "examples": [
            {
                "word": "Loquacious",
                "definition": "Tending to talk a great deal; talkative."
            },
            {
                "word": "Soliloquy",
                "definition": "An act of speaking one's thoughts aloud when by oneself."
            },
            {
                "word": "Grandiloquent",
                "definition": "Pompous or extravagant in language, style, or manner."
            }
        ]
    },
    {
        "root": "Luc",
        "meaning": "Light",
        "examples": [
            {
                "word": "Lucid",
                "definition": "Expressed clearly; easy to understand."
            },
            {
                "word": "Elucidate",
                "definition": "Make something clear; explain."
            },
            {
                "word": "Translucent",
                "definition": "Allowing light, but not detailed images, to pass through."
            }
        ]
    },
    {
        "root": "Magn",
        "meaning": "Large, great",
        "examples": [
            {
                "word": "Magnificent",
                "definition": "Extremely beautiful, elaborate, or impressive."
            },
            {
                "word": "Magnitude",
                "definition": "The great size or extent of something."
            },
            {
                "word": "Magnate",
                "definition": "A wealthy and influential businessman or businesswoman."
            }
        ]
    },
    {
        "root": "Mal",
        "meaning": "Bad, evil",
        "examples": [
            {
                "word": "Malevolent",
                "definition": "Having or showing a wish to do evil to others."
            },
            {
                "word": "Malady",
                "definition": "A disease or ailment."
            },
            {
                "word": "Malapropism",
                "definition": "The mistaken use of a word in place of a similar-sounding one."
            }
        ]
    },
    {
        "root": "Manu",
        "meaning": "Hand",
        "examples": [
            {
                "word": "Manifold",
                "definition": "Many and various."
            },
            {
                "word": "Emancipate",
                "definition": "Set free, especially from legal, social, or political restrictions."
            },
            {
                "word": "Manoeuvre",
                "definition": "A movement or series of moves requiring skill and care."
            }
        ]
    },
    {
        "root": "Mater",
        "meaning": "Mother",
        "examples": [
            {
                "word": "Maternal",
                "definition": "Relating to or characteristic of a mother."
            },
            {
                "word": "Matriarch",
                "definition": "A woman who is the head of a family or tribe."
            },
            {
                "word": "Matriculate",
                "definition": "Be enrolled at a college or university."
            }
        ]
    },
    {
        "root": "Medi",
        "meaning": "Middle",
        "examples": [
            {
                "word": "Mediocre",
                "definition": "Of only moderate quality; not very good."
            },
            {
                "word": "Medieval",
                "definition": "Relating to the Middle Ages."
            },
            {
                "word": "Immediate",
                "definition": "Occurring at once; instant."
            }
        ]
    },
    {
        "root": "Mega",
        "meaning": "Great, large",
        "examples": [
            {
                "word": "Megalomania",
                "definition": "Obsession with the exercise of power, especially in the domination of others."
            },
            {
                "word": "Megalith",
                "definition": "A large stone that forms a prehistoric monument."
            },
            {
                "word": "Megaphone",
                "definition": "A large cone-shaped device for amplifying the voice."
            }
        ]
    },
    {
        "root": "Mem",
        "meaning": "Mindful, recall",
        "examples": [
            {
                "word": "Memento",
                "definition": "An object kept as a reminder or souvenir of a person or event."
            },
            {
                "word": "Commemorate",
                "definition": "Recall and show respect for in a ceremony."
            },
            {
                "word": "Memoir",
                "definition": "A historical account or biography written from personal knowledge."
            }
        ]
    },
    {
        "root": "Merc",
        "meaning": "Pay, reward",
        "examples": [
            {
                "word": "Mercenary",
                "definition": "Primary concerned with making money at the expense of ethics."
            },
            {
                "word": "Merciful",
                "definition": "Showing or exercising mercy."
            },
            {
                "word": "Amerce",
                "definition": "Punish with a fine."
            }
        ]
    },
    {
        "root": "Migr",
        "meaning": "Move",
        "examples": [
            {
                "word": "Migrate",
                "definition": "Move from one area or country to settle in another."
            },
            {
                "word": "Immigrant",
                "definition": "A person who comes to live permanently in a foreign country."
            },
            {
                "word": "Transmigration",
                "definition": "The movement of one person or thing to another place."
            }
        ]
    },
    {
        "root": "Min",
        "meaning": "Small,less",
        "examples": [
            {
                "word": "Minuscule",
                "definition": "Extremely small; tiny."
            },
            {
                "word": "Diminish",
                "definition": "Make or become less."
            },
            {
                "word": "Minutiae",
                "definition": "The small, precise, or trivial details of something."
            }
        ]
    },
    {
        "root": "Mit",
        "meaning": "To send",
        "examples": [
            {
                "word": "Transmit",
                "definition": "Cause something to pass on from one place to another."
            },
            {
                "word": "Emit",
                "definition": "Produce and discharge something, especially gas or radiation."
            },
            {
                "word": "Manumit",
                "definition": "Release from slavery; set free."
            }
        ]
    },
    {
        "root": "Ac, Acid",
        "meaning": "Sharp, bitter, sour",
        "examples": [
            {
                "word": "Acerbic",
                "definition": "Sharp and forthright in taste, manner, or style."
            },
            {
                "word": "Acrimony",
                "definition": "Biterness or ill feeling."
            },
            {
                "word": "Exacerbate",
                "definition": "Make a problem, bad situation, or negative feeling worse."
            }
        ]
    },
    {
        "root": "Agon",
        "meaning": "Contest, struggle",
        "examples": [
            {
                "word": "Protagonist",
                "definition": "The leading character or one of the major characters in a drama, movie, novel, or other fictional text."
            },
            {
                "word": "Antagonist",
                "definition": "A person who actively opposes or is hostile to someone or something."
            },
            {
                "word": "Agony",
                "definition": "Extreme physical or mental suffering."
            }
        ]
    },
    {
        "root": "Alt",
        "meaning": "High, deep",
        "examples": [
            {
                "word": "Altitude",
                "definition": "The height of an object or point in relation to sea level or ground level."
            },
            {
                "word": "Altiplano",
                "definition": "High plateau region."
            },
            {
                "word": "Exalt",
                "definition": "Raise to a higher rank or a state of greater power and dignity."
            }
        ]
    },
    {
        "root": "Ambul",
        "meaning": "To walk, move around",
        "examples": [
            {
                "word": "Somnambulism",
                "definition": "Sleepwalking."
            },
            {
                "word": "Perambulate",
                "definition": "Walk or travel through or around a place, especially for pleasure."
            },
            {
                "word": "Ambulatory",
                "definition": "Relating to or adapted for walking."
            }
        ]
    },
    {
        "root": "Amo, Amat",
        "meaning": "Love, friend",
        "examples": [
            {
                "word": "Amiable",
                "definition": "Having or displaying a friendly and pleasant manner."
            },
            {
                "word": "Amorous",
                "definition": "Showingly, feeling, or relating to sexual desire."
            },
            {
                "word": "Amity",
                "definition": "Friendly relations."
            }
        ]
    },
    {
        "root": "Andr",
        "meaning": "Man, male",
        "examples": [
            {
                "word": "Androgen",
                "definition": "A male sex hormone."
            },
            {
                "word": "Polyandry",
                "definition": "Polygamy in which a woman has more than one husband."
            },
            {
                "word": "Androcentric",
                "definition": "Focused or centered on men."
            }
        ]
    },
    {
        "root": "Anim",
        "meaning": "Mind, life, spirit",
        "examples": [
            {
                "word": "Magnanimous",
                "definition": "Very generous or forgiving, especially toward a rival or someone less powerful."
            },
            {
                "word": "Pusillanimous",
                "definition": "Showing a lack of courage or determination; timid."
            },
            {
                "word": "Equanimity",
                "definition": "Mental calmness, composure, and evenness of temper, especially in a difficult situation."
            }
        ]
    },
    {
        "root": "Aud",
        "meaning": "Bold, daring",
        "examples": [
            {
                "word": "Audacious",
                "definition": "Showing a willingness to take surprisingly bold risks."
            },
            {
                "word": "Audacity",
                "definition": "A willingness to take bold risks."
            },
            {
                "word": "Audacite",
                "definition": "Reckless boldness."
            }
        ]
    },
    {
        "root": "Bel, Bell",
        "meaning": "War, fight",
        "examples": [
            {
                "word": "Belligerent",
                "definition": "Hostile and aggressive."
            },
            {
                "word": "Bellicose",
                "definition": "Demonstrating willingness to fight."
            },
            {
                "word": "Antebellum",
                "definition": "Occurring or existing before a particular war, notably the American Civil War."
            }
        ]
    },
    {
        "root": "Brev",
        "meaning": "Short",
        "examples": [
            {
                "word": "Brevity",
                "definition": "Concise and exact use of words in writing or speech."
            },
            {
                "word": "Abbreviate",
                "definition": "Shorten a word, phrase, or text."
            },
            {
                "word": "Brief",
                "definition": "Of short duration."
            }
        ]
    },
    {
        "root": "Cad, Cas, Cid",
        "meaning": "To fall",
        "examples": [
            {
                "word": "Cadence",
                "definition": "A modulation or inflection of the voice."
            },
            {
                "word": "Decadence",
                "definition": "Moral or cultural decline as characterized by excessive indulgence in pleasure or luxury."
            },
            {
                "word": "Casualty",
                "definition": "A person killed or injured in a war or accident."
            }
        ]
    },
    {
        "root": "Cap, Capt, Cept",
        "meaning": "To take, hold, seize",
        "examples": [
            {
                "word": "Captivate",
                "definition": "Attract and hold the interest and attention of; charm."
            },
            {
                "word": "Precept",
                "definition": "A general rule intended to regulate behavior or thought."
            },
            {
                "word": "Incipient",
                "definition": "In an initial stage; beginning to happen or develop."
            }
        ]
    },
    {
        "root": "Carn",
        "meaning": "Flesh",
        "examples": [
            {
                "word": "Carnivorous",
                "definition": "Feeding on other animals."
            },
            {
                "word": "Carnival",
                "definition": "A festive period; merrymaking."
            },
            {
                "word": "Reincarnation",
                "definition": "The rebirth of a soul in a new body."
            }
        ]
    },
    {
        "root": "Caus, Caus",
        "meaning": "Cause, motive",
        "examples": [
            {
                "word": "Causality",
                "definition": "The relationship between cause and effect."
            },
            {
                "word": "Accusation",
                "definition": "A charge or claim that someone has done something illegal or wrong."
            },
            {
                "word": "Excuse",
                "definition": "Attempt to lessen the blame of."
            }
        ]
    },
    {
        "root": "Ced, Cess",
        "meaning": "To go, yield, surrender",
        "examples": [
            {
                "word": "Concede",
                "definition": "Admit that something is true after first denying or resisting it."
            },
            {
                "word": "Recede",
                "definition": "Go or move back or further away from a previous position."
            },
            {
                "word": "Incessant",
                "definition": "(Of something regarded as unpleasant) continuing without pause or interruption."
            }
        ]
    },
    {
        "root": "Celer",
        "meaning": "Swift, speed",
        "examples": [
            {
                "word": "Celerity",
                "definition": "Swiftness of movement."
            },
            {
                "word": "Accelerate",
                "definition": "Begin to move more quickly."
            },
            {
                "word": "Decelerate",
                "definition": "Reduce speed."
            }
        ]
    },
    {
        "root": "Clud, Clus",
        "meaning": "To close, shut",
        "examples": [
            {
                "word": "Seclude",
                "definition": "Keep (someone) away from other people."
            },
            {
                "word": "Recluse",
                "definition": "A person who lives a solitary life and tends to avoid other people."
            },
            {
                "word": "Preclude",
                "definition": "Prevent from happening; make impossible."
            }
        ]
    },
    {
        "root": "Cogn, Gnos",
        "meaning": "To know",
        "examples": [
            {
                "word": "Cognitive",
                "definition": "Relating to mental action or process of acquiring knowledge."
            },
            {
                "word": "Incognito",
                "definition": "Having one's true identity concealed."
            },
            {
                "word": "Diagnosis",
                "definition": "The identification of the nature of an illness or other problem by examination."
            }
        ]
    },
    {
        "root": "Corp",
        "meaning": "Body",
        "examples": [
            {
                "word": "Corpulent",
                "definition": "(Of a person) fat."
            },
            {
                "word": "Corpuscle",
                "definition": "A minute body or cell in an organism."
            },
            {
                "word": "Incorporate",
                "definition": "Take in or contain as part of a whole."
            }
        ]
    },
    {
        "root": "Cred",
        "meaning": "Believe, trust",
        "examples": [
            {
                "word": "Credulous",
                "definition": "Showing too much readiness to believe things."
            },
            {
                "word": "Incredulous",
                "definition": "Unwilling or unable to believe something."
            },
            {
                "word": "Accredited",
                "definition": "Officially recognized or authorized."
            }
        ]
    },
    {
        "root": "Culp",
        "meaning": "Guilt, blame",
        "examples": [
            {
                "word": "Culpable",
                "definition": "Deserving blame."
            },
            {
                "word": "Exculpate",
                "definition": "Show or declare that someone is not guilty of wrongdoing."
            },
            {
                "word": "Culprit",
                "definition": "A person who is responsible for a crime or other misdeed."
            }
        ]
    },
    {
        "root": "Derm",
        "meaning": "Skin",
        "examples": [
            {
                "word": "Dermatology",
                "definition": "The branch of medicine concerned with the skin."
            },
            {
                "word": "Epidermis",
                "definition": "The outer layer of cells covering an organism."
            },
            {
                "word": "Hypodermic",
                "definition": "Referred to the region directly beneath the skin."
            }
        ]
    },
    {
        "root": "Dorm",
        "meaning": "Sleep",
        "examples": [
            {
                "word": "Dormant",
                "definition": "Temporarily inactive or inoperative."
            },
            {
                "word": "Dormitory",
                "definition": "A large bedroom for a number of people in an institution."
            },
            {
                "word": "Dormancy",
                "definition": "A period of suspended activity."
            }
        ]
    },
    {
        "root": "Equ",
        "meaning": "Equal, fair",
        "examples": [
            {
                "word": "Equivocal",
                "definition": "Open to more than one interpretation; ambiguous."
            },
            {
                "word": "Egalitarian",
                "definition": "Believing in or based on the principle that all people are equal."
            },
            {
                "word": "Equilibrium",
                "definition": "A state of physical balance."
            }
        ]
    },
    {
        "root": "Err",
        "meaning": "To wander, stray",
        "examples": [
            {
                "word": "Erratic",
                "definition": "Not even or regular in pattern or movement; unpredictable."
            },
            {
                "word": "Aberration",
                "definition": "A departure from what is normal, usual, or expected, typically one that is unwelcome."
            },
            {
                "word": "Erroneous",
                "definition": "Wrong; incorrect."
            }
        ]
    },
    {
        "root": "Ferv",
        "meaning": "Boil, heat",
        "examples": [
            {
                "word": "Fervent",
                "definition": "Having or displaying a passionate intensity."
            },
            {
                "word": "Fervor",
                "definition": "Intense and passionate feeling."
            },
            {
                "word": "Effervescent",
                "definition": "Vivacious and enthusiastic; giving off bubbles."
            }
        ]
    },
    {
        "root": "Fid",
        "meaning": "Faith, trust",
        "examples": [
            {
                "word": "Fidelity",
                "definition": "Faithfulness to a person, cause, or belief."
            },
            {
                "word": "Perfidy",
                "definition": "Deceitfulness; untrustworthiness."
            },
            {
                "word": "Confidant",
                "definition": "A person with whom one shares a secret or private matter."
            }
        ]
    },
    {
        "root": "Frag, Fract",
        "meaning": "Break",
        "examples": [
            {
                "word": "Fractious",
                "definition": "Irritable and quarrelsome."
            },
            {
                "word": "Refract",
                "definition": "(Of water, air, or glass) make (a ray of light) change direction when it enters at an angle."
            },
            {
                "word": "Fragmentary",
                "definition": "Consisting of small disconnected parts."
            }
        ]
    },
    {
        "root": "Fug",
        "meaning": "Flee, escape",
        "examples": [
            {
                "word": "Fugitive",
                "definition": "A person who has escaped from a place or is in hiding to avoid arrest."
            },
            {
                "word": "Subterfuge",
                "definition": "Deceit used in order to achieve one's goal."
            },
            {
                "word": "Centrifugal",
                "definition": "Moving or tending to move outward from a center."
            }
        ]
    },
    {
        "root": "Gen",
        "meaning": "Birth, race, kind",
        "examples": [
            {
                "word": "Genteel",
                "definition": "Polite, refined, or respectable, often in an affected or ostentatious way."
            },
            {
                "word": "Indigenous",
                "definition": "Originating or occurring naturally in a particular place."
            },
            {
                "word": "Progenitor",
                "definition": "A person or thing from which a person, animal, or plant is descended or originates."
            }
        ]
    },
    {
        "root": "Grad, Gress",
        "meaning": "Step, go",
        "examples": [
            {
                "word": "Digress",
                "definition": "Leave the main subject temporarily in speech or writing."
            },
            {
                "word": "Retrograde",
                "definition": "Directed or moving backward."
            },
            {
                "word": "Transgress",
                "definition": "Infringe or go beyond the bounds of a moral principle or other established standard."
            }
        ]
    },
    {
        "root": "Greg",
        "meaning": "Flock, herd",
        "examples": [
            {
                "word": "Gregarious",
                "definition": "(Of a person) fond of company; sociable."
            },
            {
                "word": "Congregate",
                "definition": "Gather into a crowd or mass."
            },
            {
                "word": "Egregious",
                "definition": "Outstandingly bad; shocking."
            }
        ]
    },
    {
        "root": "Hemo, Hem",
        "meaning": "Blood",
        "examples": [
            {
                "word": "Hemorrhage",
                "definition": "An escape of blood from a ruptured blood vessel."
            },
            {
                "word": "Hemoglobin",
                "definition": "A red protein responsible for transporting oxygen in the blood."
            },
            {
                "word": "Hematology",
                "definition": "The study of the physiology of blood."
            }
        ]
    },
    {
        "root": "Itiner",
        "meaning": "Journey, route",
        "examples": [
            {
                "word": "Itinerary",
                "definition": "A planned route or journey."
            },
            {
                "word": "Itinerant",
                "definition": "Traveling from place to place."
            },
            {
                "word": "Itinerancy",
                "definition": "The habit of traveling from place to place."
            }
        ]
    },
    {
        "root": "Ject",
        "meaning": "Throw",
        "examples": [
            {
                "word": "Abject",
                "definition": "(Of something bad) experienced or present to the maximum degree."
            },
            {
                "word": "Conjecture",
                "definition": "An opinion or conclusion formed on the basis of incomplete information."
            },
            {
                "word": "Interject",
                "definition": "Say something abruptly, especially as an aside or interruption."
            }
        ]
    },
    {
        "root": "Jud",
        "meaning": "Judge",
        "examples": [
            {
                "word": "Judicious",
                "definition": "Having, showing, or done with good judgment or sense."
            },
            {
                "word": "Adjudicate",
                "definition": "Make a formal judgment or decision about a problem or disputed matter."
            },
            {
                "word": "Prejudice",
                "definition": "Preconceived opinion that is not based on reason or actual experience."
            }
        ]
    },
    {
        "root": "Loqu, Locut",
        "meaning": "Speak",
        "examples": [
            {
                "word": "Loquacious",
                "definition": "Tending to talk a great deal; talkative."
            },
            {
                "word": "Soliloquy",
                "definition": "An act of speaking one's thoughts aloud when by oneself or regardless of any hearers."
            },
            {
                "word": "Circumlocution",
                "definition": "The use of many words where fewer would do, especially in a deliberate attempt to be vague or evasive."
            }
        ]
    },
    {
        "root": "Magn",
        "meaning": "Large, great",
        "examples": [
            {
                "word": "Magnate",
                "definition": "A wealthy and influential businessman or businesswoman."
            },
            {
                "word": "Magniloquent",
                "definition": "Using high-flown or bombastic language."
            },
            {
                "word": "Magnum opus",
                "definition": "A large and important work of art, music, or literature."
            }
        ]
    },
    {
        "root": "Mal",
        "meaning": "Bad, evil",
        "examples": [
            {
                "word": "Malediction",
                "definition": "A magical word or phrase uttered with the intention of bringing about evil or destruction; a curse."
            },
            {
                "word": "Malapropism",
                "definition": "The mistaken use of a word in place of a similar-sounding one."
            },
            {
                "word": "Malefactor",
                "definition": "A person who commits a crime or some other wrong."
            }
        ]
    },
    {
        "root": "Manu",
        "meaning": "Hand",
        "examples": [
            {
                "word": "Manumit",
                "definition": "Release from slavery; set free."
            },
            {
                "word": "Manacle",
                "definition": "A metal band, chain, or shackle for fastening someone's hands or ankles."
            },
            {
                "word": "Manifest",
                "definition": "Clear or obvious to the eye or mind."
            }
        ]
    },
    {
        "root": "Mater, Matr",
        "meaning": "Mother",
        "examples": [
            {
                "word": "Matriarch",
                "definition": "A woman who is the head of a family or tribe."
            },
            {
                "word": "Matriculate",
                "definition": "Be enrolled at a college or university."
            },
            {
                "word": "Maternity",
                "definition": "Motherhood."
            }
        ]
    },
    {
        "root": "Medi",
        "meaning": "Middle",
        "examples": [
            {
                "word": "Mediocre",
                "definition": "Of only moderate quality; not very good."
            },
            {
                "word": "Mediate",
                "definition": "Intervene between people in a dispute in order to bring about an agreement."
            },
            {
                "word": "Mediterranean",
                "definition": "Relating to the Mediterranean Sea or the countries surrounding it."
            }
        ]
    },
    {
        "root": "Mem",
        "meaning": "Mindful, remember",
        "examples": [
            {
                "word": "Memento",
                "definition": "An object kept as a reminder or souvenir of a person or event."
            },
            {
                "word": "Memoir",
                "definition": "A historical account or biography written from personal knowledge."
            },
            {
                "word": "Commemorate",
                "definition": "Recall and show respect for (someone or something) in a ceremony."
            }
        ]
    },
    {
        "root": "Merc",
        "meaning": "Pay, trade",
        "examples": [
            {
                "word": "Mercenary",
                "definition": "Primary concerned with making money at the expense of ethics."
            },
            {
                "word": "Mercantile",
                "definition": "Relating to trade or commerce."
            },
            {
                "word": "Amerce",
                "definition": "Punish with a fine."
            }
        ]
    },
    {
        "root": "Migr",
        "meaning": "Move",
        "examples": [
            {
                "word": "Migratory",
                "definition": "Tending to migrate or having characteristics of a migrant."
            },
            {
                "word": "Emigrate",
                "definition": "Leave one's own country in order to settle permanently in another."
            },
            {
                "word": "Immigrate",
                "definition": "Come to live permanently in a foreign country."
            }
        ]
    },
    {
        "root": "Min",
        "meaning": "Small, less",
        "examples": [
            {
                "word": "Minutiae",
                "definition": "The small, precise, or trivial details of something."
            },
            {
                "word": "Diminish",
                "definition": "Make or become less."
            },
            {
                "word": "Minuscule",
                "definition": "Extremely small; tiny."
            }
        ]
    },
    {
        "root": "Mit, Miss",
        "meaning": "Send",
        "examples": [
            {
                "word": "Transmit",
                "definition": "Pass on from one place or person to another."
            },
            {
                "word": "Emissary",
                "definition": "A person sent on a special mission, usually as a diplomatic representative."
            },
            {
                "word": "Manumission",
                "definition": "The act of a slave owner freeing his or her slaves."
            }
        ]
    },
    {
        "root": "Morph",
        "meaning": "Form, shape",
        "examples": [
            {
                "word": "Metamorphosis",
                "definition": "A change of the form or nature of a thing or person into a completely different one."
            },
            {
                "word": "Amorphous",
                "definition": "Without a clearly defined shape or form."
            },
            {
                "word": "Anthropomorphic",
                "definition": "Having human characteristics."
            }
        ]
    },
    {
        "root": "Pater, Patr",
        "meaning": "Father",
        "examples": [
            {
                "word": "Patrician",
                "definition": "An aristocrat or nobleman."
            },
            {
                "word": "Patronymic",
                "definition": "A name derived from the name of a father or ancestor."
            },
            {
                "word": "Expatriate",
                "definition": "A person who lives outside their native country."
            }
        ]
    },
    {
        "root": "Ped, Pod",
        "meaning": "Foot",
        "examples": [
            {
                "word": "Pedestrian",
                "definition": "A person walking rather than traveling in a vehicle."
            },
            {
                "word": "Expedite",
                "definition": "Make an action or process easy or quicker."
            },
            {
                "word": "Antipodes",
                "definition": "The direct opposite of something."
            }
        ]
    }
];
