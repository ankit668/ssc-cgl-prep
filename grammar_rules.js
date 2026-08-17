const GRAMMAR_RULES = [
    {
        "rule_name": "Rule 1: Use of Each vs Every",
        "explanation": "Each is used for an individual sense (two or more than two people/things). Every is used for a group sense (only for more than two people/things). Each can act as both a pronoun and an adjective, whereas Every acts only as an adjective and cannot be used as a pronoun. Each cannot be used with abstract nouns, while Every can. Both Each and Every are followed by singular verbs and singular adjectives.",
        "incorrect_example": "I have a book in every hand.",
        "correct_example": "I have a book in each hand."
    },
    {
        "rule_name": "Rule 2: Conjunctions with Both",
        "explanation": "The conjunction 'both' must always be followed by 'and', never by 'as well as'. Additionally, 'both' should not be used with 'not' in the same clause (use 'neither...nor' instead). Possessive adjectives (like my, your, his) must always be placed *after* 'both', never before.",
        "incorrect_example": "Both Ram as well as Shyam are coming.",
        "correct_example": "Both Ram and Shyam are coming."
    },
    {
        "rule_name": "Rule 3: Use of Who vs Whom",
        "explanation": "'Who' is a subjective pronoun used before a verb (subject case), while 'Whom' is an objective pronoun used after a verb (object case). They are used for humans and domestic animals.",
        "incorrect_example": "She met the person whom says that he is god.",
        "correct_example": "She met the person who says that he is god."
    },
    {
        "rule_name": "Rule 4: Relative Pronoun 'That' with Special Words",
        "explanation": "After words like 'the same', 'all', 'none', 'any', 'the only', 'much', 'no', 'superlative degree', etc., we must always use the relative pronoun 'that' instead of 'who', 'whom', or 'which'.",
        "incorrect_example": "This is the same book which you were reading.",
        "correct_example": "This is the same book that you were reading."
    },
    {
        "rule_name": "Rule 5: Conditional Sentences (Golden Rules)",
        "explanation": "In conditional sentences: 1) If the condition is in Simple Present, the result clause takes 'will/can/may/shall + V1'. 2) If the condition is in Simple Past (V2), the result takes 'would + V1'. 3) If the condition is in Past Perfect (had + V3), the result takes 'would + have + V3'. (Universal truths are an exception and take Simple Present in both clauses).",
        "incorrect_example": "If I studied, I will pass the exam.",
        "correct_example": "If I studied, I would pass the exam."
    },
    {
        "rule_name": "Rule 6: One of the / Each of the Structure",
        "explanation": "The phrases 'One of the' or 'Each of the' are followed by a plural noun. If a relative pronoun (who/which/that) follows this noun, the verb is plural. If no relative pronoun follows, the verb is singular. However, if 'Only one of the' is used, the verb is always singular regardless of the relative pronoun.",
        "incorrect_example": "He is one of the students who thinks he can do it.",
        "correct_example": "He is one of the students who think they can do it."
    },
    {
        "rule_name": "Rule 7: Units of Measurement and Nouns",
        "explanation": "In the combination 'Number + Unit + Noun/Adjective', the unit must always be singular (e.g., 'a 5-rupee note'). If the unit stands alone and is self-explanatory/sufficient, it takes a plural form (e.g., '10 rupees'), but if it is not self-explanatory (like 'dozen'), it remains singular.",
        "incorrect_example": "He gave me two 5-rupees notes.",
        "correct_example": "He gave me two 5-rupee notes."
    },
    {
        "rule_name": "Rule 8: Use of Since vs For",
        "explanation": "'For' is used for a duration/period of time (e.g., 5 years, 2 hours). 'Since' is used to denote a specific point of start (e.g., 2011, Monday). When 'since' or 'for' denotes time in a clause, the main clause takes a Perfect or Perfect Continuous tense, and the 'since' clause takes the Simple Past tense.",
        "incorrect_example": "I have been working here since 5 years.",
        "correct_example": "I have been working here for 5 years."
    },
    {
        "rule_name": "Rule 9: Past Actions Sequence (Past Perfect vs Simple Past)",
        "explanation": "When two actions occur in the past, the action that happened first takes the Past Perfect tense (had + V3), and the action that happened later takes the Simple Past tense (V2).",
        "incorrect_example": "The patient died before the doctor arrived.",
        "correct_example": "The patient had died before the doctor arrived."
    },
    {
        "rule_name": "Rule 10: Gerunds and Possessive Adjectives",
        "explanation": "A gerund (V1 + ing acting as a noun) must always be preceded by a possessive adjective (my, your, his, her, our, their), not by objective or subjective pronouns.",
        "incorrect_example": "My father doesn't like me waking up late.",
        "correct_example": "My father doesn't like my waking up late."
    },
    {
        "rule_name": "Rule 11: Inversion of Sentences",
        "explanation": "When a sentence begins with a negative or restricting adverb (e.g., Never, Seldom, Rarely), inversion takes place\u2014meaning the helping verb is placed before the subject (Partial Inversion).",
        "incorrect_example": "Never I have seen such a beautiful place.",
        "correct_example": "Never have I seen such a beautiful place."
    },
    {
        "rule_name": "Rule 12: Primary vs Secondary Purpose (Articles)",
        "explanation": "When places like school, church, bed, hospital, or temple are visited for their primary (original) purpose, no article ('the') is used. If visited for a secondary purpose, 'the' must be used.",
        "incorrect_example": "He went to the temple to pray.",
        "correct_example": "He went to temple to pray."
    },
    {
        "rule_name": "Rule 13: Correlative Conjunctions (No Sooner vs Hardly/Scarcely)",
        "explanation": "'No sooner' is always followed by 'than'. Words like 'Hardly', 'Scarcely', 'Barely', and 'Rarely' are always followed by 'when' (or 'before').",
        "incorrect_example": "Hardly had I entered the room than it started raining.",
        "correct_example": "Hardly had I entered the room when it started raining."
    },
    {
        "rule_name": "Rule 14: Verbs requiring Reflexive Pronouns",
        "explanation": "Certain verbs like 'enjoy', 'avail', 'absent', 'pride', 'introduce', etc., must be followed by an object. If no direct object is given in the sentence, a reflexive pronoun (myself, himself, herself, etc.) must be used.",
        "incorrect_example": "He enjoyed at the party.",
        "correct_example": "He enjoyed himself at the party."
    },
    {
        "rule_name": "Rule 15: Subjects joined by Conjunctions like As well as",
        "explanation": "When two subjects are connected by 'as well as', 'along with', 'together with', 'in addition to', 'not', etc., the verb agrees with the first subject.",
        "incorrect_example": "Ram as well as his friends are coming.",
        "correct_example": "Ram as well as his friends is coming."
    },
    {
        "rule_name": "Rule 16: Confusing Word Pairs (Advice vs Advise)",
        "explanation": "'Advice' (with C) is a noun meaning a suggestion, while 'Advise' (with S) is a verb meaning to give a suggestion. Similarly, Practice/Practise and Belief/Believe follow the noun/verb rule.",
        "incorrect_example": "I will give you a good advise.",
        "correct_example": "I will give you a good advice."
    },
    {
        "rule_name": "Rule 17: Comparison of Cases",
        "explanation": "In comparisons using 'as...as' or 'than', the case of the pronoun must remain parallel. A subjective case is compared with another subjective case, and an objective case with an objective case.",
        "incorrect_example": "He is taller than me.",
        "correct_example": "He is taller than I."
    },
    {
        "rule_name": "Rule 18: Reciprocal Pronouns",
        "explanation": "'Each other' is used for two people or things, whereas 'One another' is used for more than two people or things.",
        "incorrect_example": "The two brothers fought with one another.",
        "correct_example": "The two brothers fought with each other."
    },
    {
        "rule_name": "Rule 23: Partial Inversion with Negative Adverbs",
        "explanation": "When negative or semi-negative adverbs like seldom, little, hardly, scarcely are placed at the beginning of a sentence for emphasis, partial inversion is followed (Auxiliary verb comes before the subject). Also, 'seldom or never' takes the correct matching structure.",
        "incorrect_example": "Seldom he comes to my house.",
        "correct_example": "Seldom does he come to my house."
    },
    {
        "rule_name": "Rule 24: Use of Much with Comparative Degrees and Past Participles",
        "explanation": "Much can be used with comparative degrees of adjectives and past participles (V3 functioning as adjectives). Very is generally used with present participles (V1+ing).",
        "incorrect_example": "He is very smarter than his brother.",
        "correct_example": "He is much smarter than his brother."
    },
    {
        "rule_name": "Rule 25: Position of 'Enough'",
        "explanation": "'Enough' acts as an adjective when modifying a noun and must be placed before the noun. It acts as an adverb when modifying an adjective or adverb and must be placed after them.",
        "incorrect_example": "She is enough smart to handle it.",
        "correct_example": "She is smart enough to handle it."
    },
    {
        "rule_name": "Rule 26: Omission of 'As' with Certain Verbs",
        "explanation": "Certain verbs like elect, name, think, consider, call, make, choose, and appoint do not take 'as' after them.",
        "incorrect_example": "The teacher called him as stupid.",
        "correct_example": "The teacher called him stupid."
    },
    {
        "rule_name": "Rule 27: Usage of 'Although'",
        "explanation": "In traditional English, 'although' is followed by 'yet', never by 'but'. In modern English, 'although' is simply followed by a comma.",
        "incorrect_example": "Although he is rich, but he is honest.",
        "correct_example": "Although he is rich, he is honest."
    },
    {
        "rule_name": "Rule 28: Verbs Not Used in Continuous Tenses",
        "explanation": "Verbs of perception, possession, and feeling (like see, own, love, hate, belong) are generally not used in continuous (progress) tenses.",
        "incorrect_example": "I am owning a car.",
        "correct_example": "I own a car."
    },
    {
        "rule_name": "Rule 29: Adverbs of Completed Action requiring Perfect Tense",
        "explanation": "Words like already, so far, yet, just, ever, never, recently, when used to indicate a completed action, require the Present Perfect or Past Perfect tense.",
        "incorrect_example": "Did you ever see the Taj Mahal?",
        "correct_example": "Have you ever seen the Taj Mahal?"
    },
    {
        "rule_name": "Rule 30: Collective Nouns and Verb Agreement",
        "explanation": "A collective noun takes a singular verb when the group acts as a single unit, and a plural verb when the members of the group act individually or are divided.",
        "incorrect_example": "The jury are unanimous in its decision.",
        "correct_example": "The jury is unanimous in its decision."
    },
    {
        "rule_name": "Rule 31: Preposition 'To' with Specific Adjectives and Verbs",
        "explanation": "Adjectives ending in '-ior' (junior, senior, superior, inferior), and words like prefer, known, and married (in passive voice) are followed by the preposition 'to', not 'than' or 'by'.",
        "incorrect_example": "He is senior than me.",
        "correct_example": "He is senior to me."
    },
    {
        "rule_name": "Rule 32: 'As...as' vs 'So...as'",
        "explanation": "'As...as' can be used in both affirmative and negative sentences, whereas 'so...as' is used only in negative sentences.",
        "incorrect_example": "He is so good as his brother.",
        "correct_example": "He is as good as his brother."
    },
    {
        "rule_name": "Rule 33: 'Times' Followed by Positive Degree",
        "explanation": "When 'times' is used for multiplication or comparison, it is followed by the positive degree of the adjective, not the comparative degree.",
        "incorrect_example": "This box is three times heavier than that one.",
        "correct_example": "This box is three times as heavy as that one."
    },
    {
        "rule_name": "Rule 34: Indirect Speech is Always a Statement",
        "explanation": "In indirect speech, the clause following the reporting verb must be in the form of a statement (Subject + Verb), even if it asks a question.",
        "incorrect_example": "He asked me what was my name.",
        "correct_example": "He asked me what my name was."
    },
    {
        "rule_name": "Rule 35: Subject-Verb Agreement with Correlative Conjunctions",
        "explanation": "When subjects are joined by 'either...or', 'neither...nor', 'not only...but also', or 'or', the verb agrees with the nearest subject.",
        "incorrect_example": "Either you or he are to blame.",
        "correct_example": "Either you or he is to blame."
    },
    {
        "rule_name": "Rule 36: Comparing Two Qualities of the Same Object",
        "explanation": "When comparing two different qualities of the same person or thing, 'more' is used with the positive degree of the first adjective, followed by 'than', rather than using the comparative degree (-er).",
        "incorrect_example": "He is wiser than clever.",
        "correct_example": "He is more wise than clever."
    },
    {
        "rule_name": "Rule 37: 'More than one' and 'Many a'",
        "explanation": "'More than one' and 'Many a' are followed by a singular countable noun and take a singular verb.",
        "incorrect_example": "More than one students were absent.",
        "correct_example": "More than one student was absent."
    },
    {
        "rule_name": "Rule 38: Use of 'If/Whether' vs 'That' with Doubt",
        "explanation": "In sentences expressing doubt or negation with doubt, 'if' or 'whether' is used. In affirmative sentences expressing no doubt, 'that' is used.",
        "incorrect_example": "I have no doubt if he will come.",
        "correct_example": "I have no doubt that he will come."
    },
    {
        "rule_name": "Rule 39: Exceptions to Sequence of Tenses (Universal Truths)",
        "explanation": "Universal truths, scientific facts, and habitual actions remain in the Simple Present tense even if the main clause is in the past tense.",
        "incorrect_example": "The teacher said that the earth revolved around the sun.",
        "correct_example": "The teacher said that the earth revolves around the sun."
    },
    {
        "rule_name": "Rule 40: Little, A Little, The Little",
        "explanation": "'Little' means almost none (negative), 'a little' means some (positive), and 'the little' means all that is available, used with uncountable nouns.",
        "incorrect_example": "A little knowledge are a dangerous thing.",
        "correct_example": "A little knowledge is a dangerous thing."
    },
    {
        "rule_name": "Rule 41: Pronoun Case after Prepositions",
        "explanation": "A pronoun following a preposition must always be in its objective case.",
        "incorrect_example": "Let you and I do this work.",
        "correct_example": "Let you and me do this work."
    },
    {
        "rule_name": "Rule 42: Order of Personal Pronouns in Normal and Confession Sentences",
        "explanation": "Normally, personal pronouns are arranged in the order of Second, Third, and First person (231). However, when confessing a fault or expressing a negative/guilty act, the order is First, Second, and Third person (123).",
        "incorrect_example": "I, you and he committed the crime.",
        "correct_example": "You, he and I completed the task successfully. (For negative: I, you and he committed the crime.)"
    },
    {
        "rule_name": "Rule 43: Avoidance of Superfluous Expressions",
        "explanation": "Redundant or unnecessary words that repeat the same meaning (e.g., 'return back', 'enter into' for physical entry, 'passing marks') should be avoided.",
        "incorrect_example": "Please return back my book.",
        "correct_example": "Please return my book."
    },
    {
        "rule_name": "Rule 44: Apostrophe S with Living and Non-Living Things",
        "explanation": "Apostrophe 's' is generally used with living nouns to show possession. For non-living things, possession is shown using 'of'.",
        "incorrect_example": "The table's leg is broken.",
        "correct_example": "The leg of the table is broken."
    },
    {
        "rule_name": "Rule 45: Past Point of Time Requires Simple Past Tense",
        "explanation": "When a sentence contains a specific past time marker (yesterday, last week, in 1947), the Simple Past tense must be used, not the Present Perfect or Past Perfect.",
        "incorrect_example": "I have gone to Agra yesterday.",
        "correct_example": "I went to Agra yesterday."
    },
    {
        "rule_name": "Rule 46: Absolute Adjectives Do Not Take Degrees",
        "explanation": "Adjectives that express absolute qualities (like unique, perfect, universal, dead, extreme) do not take comparative or superlative forms (more, most).",
        "incorrect_example": "This is the most unique piece of art.",
        "correct_example": "This is a unique piece of art."
    },
    {
        "rule_name": "Rule 47: 'Quite' and 'All' Cannot Be Used Together",
        "explanation": "The adverbs 'quite' and 'all' create redundancy and should not be used consecutively to modify the same adjective or adverb.",
        "incorrect_example": "He is quite all right.",
        "correct_example": "He is quite right / He is all right."
    },
    {
        "rule_name": "Rule 48: Ago vs Before",
        "explanation": "'Ago' is used with a single past time point (Simple Past), whereas 'before' is used to show the earlier of two past actions (Past Perfect).",
        "incorrect_example": "He had come here two days ago.",
        "correct_example": "He came here two days ago."
    },
    {
        "rule_name": "Rule 49: Common vs Split Possession",
        "explanation": "When two nouns share joint possession, the apostrophe 's' is added to the last noun. When they have separate possession, apostrophe 's' is added to both nouns, followed by a plural noun.",
        "incorrect_example": "Rohan's and Sohan's car is parked outside (joint ownership).",
        "correct_example": "Rohan and Sohan's car is parked outside (joint ownership)."
    },
    {
        "rule_name": "Rule 50: Its vs It's",
        "explanation": "'It's' is the contracted form of 'it is' or 'it has', whereas 'its' is the possessive adjective indicating ownership.",
        "incorrect_example": "The dog chased it's tail.",
        "correct_example": "The dog chased its tail."
    },
    {
        "rule_name": "Rule 51: 'A number of' vs 'The number of'",
        "explanation": "'A number of' takes a plural noun and a plural verb, whereas 'the number of' takes a plural noun but a singular verb.",
        "incorrect_example": "A number of students is absent.",
        "correct_example": "A number of students are absent."
    },
    {
        "rule_name": "Rule 52: 'It is high time' followed by Past Subjunctive",
        "explanation": "Phrases like 'It is time', 'It is high time', 'It is about time' when followed by a subject, take the Simple Past tense (V2).",
        "incorrect_example": "It is high time you start studying.",
        "correct_example": "It is high time you started studying."
    },
    {
        "rule_name": "Rule 53: Prepositions with 'Angry' and 'Annoyed'",
        "explanation": "Use 'with' when angry/annoyed with a person, and 'at' when angry/annoyed at a thing, behavior, or situation.",
        "incorrect_example": "I am angry at him.",
        "correct_example": "I am angry with him."
    },
    {
        "rule_name": "Rule 54: 'Know' Followed by Interrogative Words",
        "explanation": "The verb 'know' when used in contexts requiring a method or time must be followed by a question word (how, where, when, why) before an infinitive.",
        "incorrect_example": "I know to swim.",
        "correct_example": "I know how to swim."
    },
    {
        "rule_name": "Rule 55: Conjunctions Following 'Else', 'Other', 'Rather'",
        "explanation": "'Else' is followed by 'but', whereas 'other' and 'rather' are followed by 'than'.",
        "incorrect_example": "He has no one else to turn to than his friend.",
        "correct_example": "He has no one else to turn to but his friend."
    },
    {
        "rule_name": "Rule 56: Subject-Verb Agreement with 'Sort/Type/Kind'",
        "explanation": "Singular nouns like 'this kind of', 'that sort of' take a singular verb, while their plural counterparts ('these kinds of') take a plural verb.",
        "incorrect_example": "This kind of books are interesting.",
        "correct_example": "This kind of book is interesting."
    },
    {
        "rule_name": "Rule 57: In vs Inside vs Into",
        "explanation": "'In' denotes position inside a space, 'inside' emphasizes interiority, and 'into' indicates motion toward the inside of a space or transformation of form.",
        "incorrect_example": "He jumped in the river.",
        "correct_example": "He jumped into the river."
    },
    {
        "rule_name": "Rule 58: Prepositions 'By' vs 'With'",
        "explanation": "'By' is used for the doer (agent) in passive voice, and 'with' is used for the instrument or tool used to perform an action.",
        "incorrect_example": "The snake was killed by a stick.",
        "correct_example": "The snake was killed with a stick."
    },
    {
        "rule_name": "Rule 59: Prepositions with Beginning Actions",
        "explanation": "Verbs denoting a starting point like 'start', 'begin', or 'commence' are followed by the preposition 'on' (for specific days), not 'from'.",
        "incorrect_example": "The session starts from Monday.",
        "correct_example": "The session starts on Monday."
    },
    {
        "rule_name": "Rule 60: Gerunds after Specific 'To' Phrases",
        "explanation": "Phrases ending in 'to' such as 'accustomed to', 'addicted to', 'look forward to', 'with a view to' are followed by a gerund (V1+ing), not a base verb.",
        "incorrect_example": "I look forward to meet you.",
        "correct_example": "I look forward to meeting you."
    },
    {
        "rule_name": "Rule 61: Choice of Article 'A' vs 'An' Based on Sound",
        "explanation": "The choice between 'a' and 'an' depends on the phonetic sound of the word's first letter, not the spelling (vowel or consonant).",
        "incorrect_example": "He is an university student.",
        "correct_example": "He is a university student."
    },
    {
        "rule_name": "Rule 62: Use of Definite Article 'The'",
        "explanation": "The definite article 'the' is used before unique objects, rivers, mountain ranges, holy books, newspapers, and superlatives.",
        "incorrect_example": "Sun rises in east.",
        "correct_example": "The sun rises in the east."
    },
    {
        "rule_name": "Rule 1: Use of Definite Article 'The' with Proper Nouns, Rivers, Oceans, and Unique Things",
        "explanation": "We use the definite article 'the' before the names of rivers, oceans, seas, mountain ranges, newspapers, unique geographical landmarks, and specific groups of countries formed by union/states.",
        "incorrect_example": "Sahara desert is the largest desert.",
        "correct_example": "The Sahara Desert is the largest desert."
    },
    {
        "rule_name": "Rule 2: Omission of 'The' before Mountain Peaks",
        "explanation": "While 'the' is used before mountain ranges (e.g., the Himalayas), it must never be used before specific mountain peaks (e.g., Mount Everest, Mount Kilimanjaro).",
        "incorrect_example": "We are planning to climb the Mount Everest.",
        "correct_example": "We are planning to climb Mount Everest."
    },
    {
        "rule_name": "Rule 3: Use of 'The' with Superlative Degrees",
        "explanation": "The definite article 'the' must be used before superlative degree adjectives when comparing things and indicating the highest degree.",
        "incorrect_example": "She is best student in our class.",
        "correct_example": "She is the best student in our class."
    },
    {
        "rule_name": "Rule 4: Use of 'The' in Comparative Degrees (Parallel Increase)",
        "explanation": "We use 'the' with comparative degrees in both clauses of a sentence when showing a parallel increase or decrease (e.g., The more you work, the better results you get).",
        "incorrect_example": "Harder you work, better results you get.",
        "correct_example": "The harder you work, the better results you get."
    },
    {
        "rule_name": "Rule 5: Use of 'The' in Comparative Degrees for Selection",
        "explanation": "When selecting one option out of two options (selection case), we use the definite article 'the' before the comparative degree.",
        "incorrect_example": "He is better of the two candidates.",
        "correct_example": "He is the better of the two candidates."
    },
    {
        "rule_name": "Rule 6: Use of 'The' in Metaphors",
        "explanation": "When comparing two different things or equating a person to a famous personality metaphorically, we use the article 'the' before the standard of comparison.",
        "incorrect_example": "She is Mother Teresa of our class.",
        "correct_example": "She is the Mother Teresa of our class."
    },
    {
        "rule_name": "Rule 7: Omission of 'The' before Cities, Continents, and Languages",
        "explanation": "Do not use the definite article 'the' before the names of cities, continents, single lakes, single islands, or languages (unless referring to the people of that country).",
        "incorrect_example": "I live in the New Delhi.",
        "correct_example": "I live in New Delhi."
    },
    {
        "rule_name": "Rule 8: Use of 'The' with Adjectives to Represent a Community",
        "explanation": "When 'the' is placed before certain adjectives without a following noun, it represents an entire class or community of people, taking a plural verb.",
        "incorrect_example": "The poor is suffering.",
        "correct_example": "The poor are suffering."
    },
    {
        "rule_name": "Rule 9: Nouns Connected by Prepositions Remain Singular",
        "explanation": "When two identical nouns are connected by a preposition, both nouns must remain in their singular form and take a singular verb.",
        "incorrect_example": "Villages after villages were destroyed.",
        "correct_example": "Village after village was destroyed."
    },
    {
        "rule_name": "Rule 10: Gender Specificity of 'Man/Woman' vs 'Male/Female'",
        "explanation": "Use 'man' or 'woman' before a profession to indicate the gender of the person, while 'male' or 'female' indicates the target user/use of the object or service.",
        "incorrect_example": "She is a female doctor (meaning she is a woman by gender).",
        "correct_example": "She is a woman doctor (meaning her gender is female). Alternatively, a female doctor treats female patients."
    },
    {
        "rule_name": "Rule 11: Use of 'Ever' with Relative Pronouns (Who/Whom)",
        "explanation": "When 'who' or 'whom' is not preceded by any noun or pronoun, we must add 'ever' to form 'whoever' or 'whomever'.",
        "incorrect_example": "Meet who helps you.",
        "correct_example": "Meet whoever helps you."
    },
    {
        "rule_name": "Rule 12: Question Tag Inversion Rule",
        "explanation": "The question tag must always be opposite in polarity to the main statement (positive statement takes a negative tag, and negative statement takes a positive tag).",
        "incorrect_example": "He is coming, is he?",
        "correct_example": "He is coming, isn't he?"
    },
    {
        "rule_name": "Rule 13: Question Tag with 'I am'",
        "explanation": "There is no form like 'amn't I' in English; therefore, the question tag for 'I am' must always be 'aren't I'.",
        "incorrect_example": "I am working hard, amn't I?",
        "correct_example": "I am working hard, aren't I?"
    },
    {
        "rule_name": "Rule 14: Question Tags with Negative Adverbs",
        "explanation": "If a statement contains negative adverbs like seldom, hardly, barely, scarcely, or rarely, the corresponding question tag must be positive.",
        "incorrect_example": "He seldom comes here, doesn't he?",
        "correct_example": "He seldom comes here, does he?"
    },
    {
        "rule_name": "Rule 15: Plural Treatment of 'Each' and 'Every' in Question Tags",
        "explanation": "Although 'each' and 'every' take singular verbs in statements, they are treated as plural in question tags.",
        "incorrect_example": "Every girl is ready, isn't she?",
        "correct_example": "Every girl is ready, aren't they?"
    },
    {
        "rule_name": "Rule 16: Question Tag for Imperative Sentences (Proposals)",
        "explanation": "When an imperative sentence expresses a proposal starting with 'Let us', the question tag must always be 'shall we'.",
        "incorrect_example": "Let us go for a walk, will we?",
        "correct_example": "Let us go for a walk, shall we?"
    },
    {
        "rule_name": "Rule 17: Preposition of Place (In, On, At Hierarchy)",
        "explanation": "'At' denotes a specific point (smallest), 'on' denotes a surface (medium), and 'in' denotes an area or volume (largest).",
        "incorrect_example": "I live in Laxmi Nagar at Delhi.",
        "correct_example": "I live at Laxmi Nagar in Delhi."
    },
    {
        "rule_name": "Rule 18: Omission of Prepositions with Time Expressions",
        "explanation": "Never use prepositions before words like yesterday, tomorrow, last Monday, or coming Sunday.",
        "incorrect_example": "I will meet you on tomorrow.",
        "correct_example": "I will meet you tomorrow."
    },
    {
        "rule_name": "Rule 19: Conjunction Pair with 'Both'",
        "explanation": "The correlative conjunction 'both' must always be followed by 'and', never by 'as well as' or other connectors.",
        "incorrect_example": "Both Ram as well as Shyam came.",
        "correct_example": "Both Ram and Shyam came."
    },
    {
        "rule_name": "Rule 20: Preposition after 'Good'",
        "explanation": "The adjective 'good' is always followed by the preposition 'at', never 'in'.",
        "incorrect_example": "He is good in English.",
        "correct_example": "He is good at English."
    },
    {
        "rule_name": "Rule 21: Subjunctive/Modal Requirement after 'Lest'",
        "explanation": "The conjunction 'lest' means 'otherwise' and is exclusively followed by the modal 'should' or no modal verb at all; never use words like will, would, or can.",
        "incorrect_example": "Walk fast lest you will miss the train.",
        "correct_example": "Walk fast lest you should miss the train."
    },
    {
        "rule_name": "Rule 22: Difference between 'Until' and 'Unless'",
        "explanation": "'Until' is time-oriented (referring to a point in time), whereas 'unless' is action-oriented (referring to a condition or action).",
        "incorrect_example": "Wait here unless I return (time-based).",
        "correct_example": "Wait here until I return (time-based)."
    },
    {
        "rule_name": "Rule 23: Principle of Parallelism",
        "explanation": "Coordinating conjunctions (and, but, or) and correlative conjunctions (either...or, neither...nor, not only...but also) must join parallel grammatical units (same parts of speech/tense).",
        "incorrect_example": "He likes reading and to swim.",
        "correct_example": "He likes reading and swimming."
    },
    {
        "rule_name": "Rule 24: Difference between 'Too Much' and 'Much Too'",
        "explanation": "'Too much' acts as an adjective and is followed by a noun, whereas 'much too' acts as an adverb and is followed by an adjective.",
        "incorrect_example": "He is too much smart.",
        "correct_example": "He is much too smart."
    },
    {
        "rule_name": "Rule 25: Politics, Mathematics, and Statistics Subject Rule",
        "explanation": "Words ending in '-ics' (like mathematics, physics, politics) take singular verbs when treated as a academic field or subject, but take plural verbs when referring to personal views, calculations, or data.",
        "incorrect_example": "Politics are a dirty game.",
        "correct_example": "Politics is a dirty game."
    },
    {
        "rule_name": "Rule 26: Article 'A' vs 'The' with Pronouns in Phrases",
        "explanation": "In phrases like 'a [noun] of [pronoun]', the indefinite article 'a' requires a possessive pronoun (e.g., a friend of mine), while 'the' requires an objective pronoun (e.g., the friend of me - wait, the brother of me).",
        "incorrect_example": "He is a brother of me.",
        "correct_example": "He is a brother of mine."
    },
    {
        "rule_name": "Rule 27: Position of 'Also'",
        "explanation": "The adverb 'also' can be placed at the beginning or middle of a sentence, but it can never be placed at the very end of a sentence.",
        "incorrect_example": "I want to go there, also.",
        "correct_example": "I also want to go there."
    },
    {
        "rule_name": "Rule 28: Verb Form in Optative Sentences",
        "explanation": "In optative sentences expressing a wish, blessing, or curse, use the base form of the verb (V1) without adding '-s' or '-es', even with singular subjects.",
        "incorrect_example": "God blesses you with success.",
        "correct_example": "God bless you with success."
    },
    {
        "rule_name": "Rule 29: Use of Pseudo-Subjects ('It' and 'There')",
        "explanation": "When a sentence lacks a clear natural subject, use the pseudo-subjects 'it' or 'there' to complete the grammatical structure.",
        "incorrect_example": "Is raining outside.",
        "correct_example": "It is raining outside."
    },
    {
        "rule_name": "Rule 30: Prepositions with Nouns followed by Infinitives",
        "explanation": "When a noun is followed by 'to + V1' (infinitive), the appropriate complementary preposition must be included at the end.",
        "incorrect_example": "I have no paper to write.",
        "correct_example": "I have no paper to write on."
    },
    {
        "rule_name": "Rule 31: Plural-Only Nouns",
        "explanation": "Certain nouns like trousers, scissors, spectacles, and binoculars exist only in plural form and always take plural verbs.",
        "incorrect_example": "My scissors is missing.",
        "correct_example": "My scissors are missing."
    },
    {
        "rule_name": "Rule 32: Uncountable Nouns with no Plural Form",
        "explanation": "Uncountable nouns like furniture, luggage, information, scenery, and advice do not take plural markers ('-s' or '-es') and cannot be preceded by 'a/an'.",
        "incorrect_example": "He gave me many useful informations.",
        "correct_example": "He gave me much useful information."
    },
    {
        "rule_name": "Rule 33: Conditional Sentence Golden Rules",
        "explanation": "In type 1 conditionals (Simple Present -> Will + V1), type 2 (Simple Past -> Would + V1), and type 3 (Past Perfect -> Would have + V3), maintain proper tense harmony.",
        "incorrect_example": "If he will come, I will help him.",
        "correct_example": "If he comes, I will help him."
    },
    {
        "rule_name": "Rule 34: Position of Possessive Case with 'All' and 'Both'",
        "explanation": "Possessive adjectives (my, your, his, etc.) must always be placed after the words 'all' and 'both', never before them.",
        "incorrect_example": "My both friends are arriving today.",
        "correct_example": "Both my friends are arriving today."
    },
    {
        "rule_name": "Rule 35: Correlative Pair for 'No Sooner'",
        "explanation": "The correlative correlative conjunction 'no sooner' must always be followed by 'than', never by 'when' or 'then'.",
        "incorrect_example": "No sooner did I reach home when it started raining.",
        "correct_example": "No sooner did I reach home than it started raining."
    },
    {
        "rule_name": "Rule 36: Difference between 'Flow' and 'Fly'",
        "explanation": "'Fly' is used for birds or objects moving through the air (flown), whereas 'flow' is used for liquids moving or running (flowed).",
        "incorrect_example": "The river has overflown its banks.",
        "correct_example": "The river has overflowed its banks."
    },
    {
        "rule_name": "Rule 37: Difference between 'Lie' and 'Lay'",
        "explanation": "'Lie' means to recline or rest (lie, lay, lain), while 'lay' means to put or place an object down (lay, laid, laid).",
        "incorrect_example": "He laid on the bed for an hour.",
        "correct_example": "He lay on the bed for an hour."
    },
    {
        "rule_name": "Rule 38: Prepositions with 'Die'",
        "explanation": "We use 'die of' for diseases and specific internal causes, and 'die from' for external causes like hunger, overwork, or thirst.",
        "incorrect_example": "He died from cancer.",
        "correct_example": "He died of cancer."
    },
    {
        "rule_name": "Rule 39: Difference between 'Beside' and 'Besides'",
        "explanation": "'Beside' means next to or at the side of, whereas 'besides' means in addition to or apart from.",
        "incorrect_example": "Beside English, she speaks French.",
        "correct_example": "Besides English, she speaks French."
    },
    {
        "rule_name": "Rule 40: Adjectival vs. Adverbial '-ly' Words",
        "explanation": "Words ending in '-ly' formed from nouns (like friendly, cowardly, monthly) are adjectives, not adverbs, and must be phrased with 'in a... manner' to act adverbially.",
        "incorrect_example": "He behaved cowardly.",
        "correct_example": "He behaved in a cowardly manner."
    },
    {
        "rule_name": "Rule 41: Adverb Sequence Rule (MPFT)",
        "explanation": "When multiple adverbs appear in a sentence, their standard order of precedence is Manner (M), Place (P), Frequency (F), and Time (T).",
        "incorrect_example": "He sang yesterday sweetly at the hall.",
        "correct_example": "He sang sweetly (M) at the hall (P) yesterday (T)."
    },
    {
        "rule_name": "Rule 42: Difference between 'Very' and 'Much'",
        "explanation": "'Very' is used with positive degree adjectives and present participles (-ing), while 'much' is used with comparative degrees and past participles (-ed/V3).",
        "incorrect_example": "He is much tall.",
        "correct_example": "He is very tall."
    },
    {
        "rule_name": "Rule 43: Prepositions with 'Between' and 'From'",
        "explanation": "The preposition 'between' must be paired with 'and', while the preposition 'from' must be paired with 'to'.",
        "incorrect_example": "The office is open from 9 AM and 5 PM.",
        "correct_example": "The office is open from 9 AM to 5 PM."
    },
    {
        "rule_name": "Rule 44: Meaning Change of Nouns with Plural Markers",
        "explanation": "Certain uncountable or singular nouns change their meaning entirely when given a plural '-s' suffix (e.g., wood means material, woods means forest).",
        "incorrect_example": "He cut down a large woods.",
        "correct_example": "He cut down a large wood."
    },
    {
        "rule_name": "Rule 45: Avoidance of Redundant Titles (Superfluous Expressions)",
        "explanation": "Do not combine redundant terms like 'cousin brother', 'returning back', or 'cheating cheat', as the base word already contains the full meaning.",
        "incorrect_example": "She is my cousin sister.",
        "correct_example": "She is my cousin."
    },
    {
        "rule_name": "Rule 46: Pronoun Preference with 'Each' and 'Every'",
        "explanation": "Pronouns referring back to 'each' or 'every' must be singular (his/her), never plural (their) or 'one's'.",
        "incorrect_example": "Every student must bring their book.",
        "correct_example": "Every student must bring his or her book."
    },
    {
        "rule_name": "Rule 47: Difference between 'Less' and 'Fewer'",
        "explanation": "'Less' is used for uncountable quantities (mass nouns), whereas 'fewer' is used for countable quantities (plural count nouns).",
        "incorrect_example": "There are less students in the class today.",
        "correct_example": "There are fewer students in the class today."
    },
    {
        "rule_name": "Rule 48: Difference between 'Ender' and 'Older'",
        "explanation": "'Ender' is not a standard word, but 'elder' is used exclusively for family members and blood relations, whereas 'older' is used for general comparisons among people or things.",
        "incorrect_example": "He is elder than his office colleagues.",
        "correct_example": "He is older than his office colleagues."
    },
    {
        "rule_name": "Rule 49: Principle of Proper Comparison",
        "explanation": "Comparisons must be made between similar and comparable entities (e.g., comparing a city's climate to another city's climate, not the city itself).",
        "incorrect_example": "The climate of Delhi is better than Mumbai.",
        "correct_example": "The climate of Delhi is better than that of Mumbai."
    },
    {
        "rule_name": "Rule 50: Objective Case after Prepositions",
        "explanation": "Any pronoun following a preposition must be in its objective case (me, him, her, us, them), never in its subjective case.",
        "incorrect_example": "This secret is between you and I.",
        "correct_example": "This secret is between you and me."
    }
];
