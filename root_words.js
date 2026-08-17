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
    }
];
