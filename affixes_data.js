const AFFIXES_DATA = [
    {
        "category": "Negative & Opposite Prefixes",
        "affixes": [
            {
                "affix": "a-, an-",
                "meaning": "Not, without",
                "examples": "Apathy (without feeling), Anomaly (irregularity)",
                "usage": "Often attaches to Greek roots to denote absence."
            },
            {
                "affix": "anti-",
                "meaning": "Against, opposite",
                "examples": "Antidote (remedy against poison), Antipathy (strong dislike)",
                "usage": "Reverses or opposes the base meaning."
            },
            {
                "affix": "contra-, contro-",
                "meaning": "Against, opposing",
                "examples": "Contradict (to speak against), Controversy (disputed debate)",
                "usage": "Denotes direct conflict or opposition."
            },
            {
                "affix": "counter-",
                "meaning": "In opposition to, complementary",
                "examples": "Counteract (act against), Counterfeit (fake, imitation)",
                "usage": "Used to denote a neutralizing or retaliatory action."
            },
            {
                "affix": "de-",
                "meaning": "Down, away, reversal, removal",
                "examples": "Dethrone (remove from throne), Degrade (reduce in rank)",
                "usage": "Signals deterioration, removal, or descent."
            },
            {
                "affix": "dis-",
                "meaning": "Apart, away, not, reversal",
                "examples": "Disagree (not agree), Dismantle (take apart)",
                "usage": "Induces negation or the undoing of an action."
            },
            {
                "affix": "dys-",
                "meaning": "Bad, abnormal, difficult",
                "examples": "Dysfunctional (not operating normally), Dyslexia (reading difficulty)",
                "usage": "Denotes impairment or abnormality."
            },
            {
                "affix": "ex-",
                "meaning": "Out of, former",
                "examples": "Examine (inspect closely), Ex-minister (former minister)",
                "usage": "Can mean movement outward or a previous status."
            },
            {
                "affix": "in-, im-, il-, ir-",
                "meaning": "Not, into",
                "examples": "Incapable (not capable), Impossible (not possible)",
                "usage": "Changes based on the initial letter (assimilation). Often means 'not'."
            },
            {
                "affix": "mis-",
                "meaning": "Bad, wrong, wrongly",
                "examples": "Misbehave (behave badly), Misinterpret (interpret wrongly)",
                "usage": "Attaches to verbs and nouns to indicate error or fault."
            },
            {
                "affix": "non-",
                "meaning": "Not, absence of",
                "examples": "Nonsense (no sense), Nonchalant (not concerned)",
                "usage": "Neutral negation, often less harsh than un-."
            },
            {
                "affix": "ob-",
                "meaning": "Against, toward, facing",
                "examples": "Obstacle (standing in the way), Oppose (set against)",
                "usage": "Often assimilates to oc-, of-, op- before certain consonants."
            },
            {
                "affix": "un-",
                "meaning": "Not, reversal of an action",
                "examples": "Unhappy (not happy), Untie (reverse tying)",
                "usage": "Extremely common Germanic prefix for negation and reversal."
            },
            {
                "affix": "mal-",
                "meaning": "Bad, ill, wrongful",
                "examples": "Malfunction (bad working order), Malice (ill will)",
                "usage": "Signals harmfulness or poor quality."
            },
            {
                "affix": "pseudo-",
                "meaning": "False, deceptive",
                "examples": "Pseudonym (false name), Pseudoscience (fake science)",
                "usage": "Indicates an imitation or falsehood."
            }
        ]
    },
    {
        "category": "Quantity, Size & Degree Prefixes",
        "affixes": [
            {
                "affix": "bi-",
                "meaning": "Two, twice, double",
                "examples": "Bilingual (speaking two languages), Biennial (every two years)",
                "usage": "Indicates numerical duplication."
            },
            {
                "affix": "centi-",
                "meaning": "Hundred, hundredth",
                "examples": "Centimeter (one-hundredth of a meter), Century (one hundred years)",
                "usage": "Used in metric and numerical contexts."
            },
            {
                "affix": "demi-",
                "meaning": "Half, partly",
                "examples": "Demigod (half-god), Demitasse (small coffee cup)",
                "usage": "Denotes a partial state or lesser degree."
            },
            {
                "affix": "hemi-, semi-",
                "meaning": "Half, partial",
                "examples": "Hemisphere (half of a sphere), Semicircle (half a circle)",
                "usage": "Indicates a 50 percent division."
            },
            {
                "affix": "hyper-",
                "meaning": "Over, excessive, beyond normal",
                "examples": "Hypertension (excessive blood pressure), Hyperactive (overly active)",
                "usage": "Denotes extreme intensity or excess."
            },
            {
                "affix": "hypo-",
                "meaning": "Under, beneath, deficient",
                "examples": "Hypodermic (under the skin), Hypoglycemia (low blood sugar)",
                "usage": "Opposite of hyper-; indicates insufficiency or placement below."
            },
            {
                "affix": "macro-",
                "meaning": "Large, great, long",
                "examples": "Macroeconomics (study of large-scale economy), Macrocosm (the great world)",
                "usage": "Denotes large scale."
            },
            {
                "affix": "mega-, megalo-",
                "meaning": "Great, large, million",
                "examples": "Megaphone (large sound amplifier), Megalopolis (very large city)",
                "usage": "Implies massive scale or importance."
            },
            {
                "affix": "micro-",
                "meaning": "Small, minute",
                "examples": "Microscope (instrument for viewing small things), Microchip (tiny chip)",
                "usage": "Denotes extreme smallness."
            },
            {
                "affix": "multi-",
                "meaning": "Many, multiple",
                "examples": "Multifaceted (having many facets), Multilingual (speaking many languages)",
                "usage": "Indicates abundance or plurality."
            },
            {
                "affix": "omni-",
                "meaning": "All, everywhere",
                "examples": "Omnipotent (all-powerful), Omnivorous (eating all types of food)",
                "usage": "Denotes totality or universality."
            },
            {
                "affix": "poly-",
                "meaning": "Many, much",
                "examples": "Polygon (figure with many angles), Polyglot (knowing many languages)",
                "usage": "Greek equivalent of multi-."
            },
            {
                "affix": "semi-",
                "meaning": "Half, partly",
                "examples": "Semiconscious (half conscious), Semifinal (halfway through finals)",
                "usage": "Denotes partial completion or status."
            },
            {
                "affix": "tele-",
                "meaning": "Far, distant",
                "examples": "Telephone (sound from afar), Telescope (viewing distant objects)",
                "usage": "Indicates operation across a distance."
            },
            {
                "affix": "uni-",
                "meaning": "One, single",
                "examples": "Unicycle (one-wheeled cycle), Uniform (having one form)",
                "usage": "Denotes singleness or uniformity."
            }
        ]
    },
    {
        "category": "Noun & Adjective Suffixes",
        "affixes": [
            {
                "affix": "-able, -ible",
                "meaning": "Capable of being, able to",
                "examples": "Readable (capable of being read), Flexible (able to bend)",
                "usage": "Transforms verbs into adjectives denoting capability."
            },
            {
                "affix": "-al, -ial",
                "meaning": "Relating to, pertaining to",
                "examples": "Musical (relating to music), Presidential (pertaining to a president)",
                "usage": "Forms adjectives from nouns."
            },
            {
                "affix": "-ance, -ence",
                "meaning": "State of, quality of, action",
                "examples": "Brilliance (state of being brilliant), Resistance (act of resisting)",
                "usage": "Forms abstract nouns from verbs or adjectives."
            },
            {
                "affix": "-ant, -ent",
                "meaning": "Person who, performing an action (noun/adj)",
                "examples": "Assistant (helper), Dependent (relying on others)",
                "usage": "Can function as both nouns (doer) and adjectives."
            },
            {
                "affix": "-ate",
                "meaning": "To become, having the quality of",
                "examples": "Validate (to make valid), Passionate (having passion)",
                "usage": "Versatile suffix forming verbs, adjectives, and nouns."
            },
            {
                "affix": "-ful",
                "meaning": "Full of, characterized by",
                "examples": "Beautiful (full of beauty), Grateful (full of gratitude)",
                "usage": "Forms adjectives indicating abundance of a quality."
            },
            {
                "affix": "-ic, -ical",
                "meaning": "Relating to, characteristic of",
                "examples": "Historic (relating to history), Magical (characteristic of magic)",
                "usage": "Creates adjectives denoting connection to a field or quality."
            },
            {
                "affix": "-ion, -tion, -ation",
                "meaning": "Action, state, process, result",
                "examples": "Action (process of acting), Creation (result of creating)",
                "usage": "Primary suffix for forming abstract nouns from verbs."
            },
            {
                "affix": "-ism",
                "meaning": "Belief, system, doctrine, condition",
                "examples": "Patriotism (love of country), Heroism (state of being a hero)",
                "usage": "Forms nouns indicating ideologies, conditions, or practices."
            },
            {
                "affix": "-ist",
                "meaning": "One who practices or believes in",
                "examples": "Scientist (one who does science), Optimist (one who looks on the bright side)",
                "usage": "Forms agent nouns denoting professions or adherents."
            },
            {
                "affix": "-ity, -ty",
                "meaning": "State of, quality of",
                "examples": "Activity (state of being active), Loyalty (quality of being loyal)",
                "usage": "Forms abstract nouns indicating a state or condition."
            },
            {
                "affix": "-ive",
                "meaning": "Having the nature of, tending to",
                "examples": "Active (tending to act), Creative (tending to create)",
                "usage": "Forms adjectives indicating inclination or function."
            },
            {
                "affix": "-less",
                "meaning": "Without, lacking",
                "examples": "Hopeless (without hope), Fearless (without fear)",
                "usage": "Creates adjectives denoting absence; antonym of -ful."
            },
            {
                "affix": "-ment",
                "meaning": "Action, result, or state of",
                "examples": "Excitement (state of being excited), Government (body that governs)",
                "usage": "Forms nouns from verbs, indicating process or product."
            },
            {
                "affix": "-ous, -eous, -ious",
                "meaning": "Full of, possessing quality",
                "examples": "Courageous (full of courage), Delicious (full of delight)",
                "usage": "Forms adjectives indicating possession of a specific trait."
            }
        ]
    }
];
