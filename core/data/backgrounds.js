const backgrounds = {
    "Acolyte": {
        "Trait": [
            "I idolize a particular hero of my faith, and constantly refer to that person's deeds and example.",
            "I can find common ground between the fiercest enemies, empathizing with them and always working toward peace.",
            "I see omens in every event and action. The gods try to speak to us, we just need to listen.",
            "Nothing can shake my optimistic attitude.",
            "I quote (or misquote) sacred texts and proverbs in almost every situation.",
            "I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods.",
            "I've enjoyed fine food, drink, and high society among my temple's elite. Rough living grates on me.",
            "I've spent so long in the temple that I have little practical experience dealing with people in the outside world."
        ],
        "Ideal": [
            "Tradition. The ancient traditions of worship and sacrifice must be preserved and upheld. (Lawful)",
            "Charity. I always try to help those in need, no matter what the personal cost. (Good)",
            "Change. We must help bring about the changes the gods are constantly working in the world. (Chaotic)",
            "Power. I hope to one day rise to the top of my faith's religious hierarchy. (Lawful)",
            "Faith. I trust that my deity will guide my actions. I have faith that if I work hard, things will go well. (Lawful)",
            "Aspiration. I seek to prove myself worthy of my god's favor by matching my actions against his or her teachings. (Any)"
        ],
        "Bond": [
            "I would die to recover an ancient relic of my faith that was lost long ago.",
            "I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.",
            "I owe my life to the priest who took me in when my parents died.",
            "Everything I do is for the common people.",
            "I will do anything to protect the temple where I served.",
            "I seek to preserve a sacred text that my enemies consider heretical and seek to destroy."
        ],
        "Flaw": [
            "I judge others harshly, and myself even more severely.",
            "I put too much trust in those who wield power within my temple's hierarchy.",
            "My piety sometimes leads me to blindly trust those that profess faith in my god.",
            "I am inflexible in my thinking.",
            "I am suspicious of strangers and expect the worst of them.",
            "Once I pick a goal, I become obsessed with it to the detriment of everything else in my life."
        ],
        "Gear": [
            "Holy Symbol",
            "Prayer Book or Prayer Wheel",
            "5 Sticks of Incense",
            "Vestments",
            "Set of Common Clothes",
            "15 GP"
        ]
    },
    "Charlatan": {
        "Scam": [
            "I cheat at games of chance.",
            "I shave coins or forge documents.",
            "I insinuate myself into people's lives to prey on their weakness and secure their fortunes.",
            "I put on new identities like clothes.",
            "I run sleight-of-hand cons on street corners.",
            "I convince people that worthless junk is worth their hard-earned money."
        ],
        "Trait": [
            "I fall in and out of love easily, and am always pursuing someone.",
            "I have a joke for every occasion, especially occasions where humor is inappropriate.",
            "Flattery is my preferred trick for getting what I want.",
            "I'm a born gambler who can't resist taking a risk for a potential payoff.",
            "I lie about almost everything, even when there's no reason to.",
            "Sarcasm and insults are my weapons of choice.",
            "I keep multiple holy symbols on me and invoke whatever deity might come in useful at any given moment.",
            "I pocket anything I see that might have some value."
        ],
        "Ideal": [
            "Independence. I am a free spirit-no one tells me what to do. (Chaotic)",
            "Fairness. I never target people who can't afford to lose a few coins. (Lawful)",
            "Charity. I distribute the money I acquire to the people who really need it. (Good)",
            "Creativity. I never run the same con twice. (Chaotic)",
            "Friendship. Material goods come and go. bond of friendship last forever. (Good)",
            "Aspiration. I'm determined to make something of myself. (Any)"
        ],
        "Bond": [
            "I fleeced the wrong person and must work to ensure that this individual never crosses paths with me or those I care about.",
            "I owe everything to my mentor-a horrible person who's probably rotting in jail somewhere.",
            "Somewhere out there, I have a child who doesn't know me. I'm making the world better for him or her.",
            "I come from a noble family, and one day I'll reclaim my lands and title from those who stole them from me.",
            "A powerful person killed someone I love. Some day soon, I'll have my revenge.",
            "I swindled and ruined a person who didn't deserve it. I seek to atone for my misdeeds but might never be able to forgive myself."
        ],
        "Flaw": [
            "I can't resist a pretty face.",
            "I'm always in debt. I spend my ill-gotten gains on decadent luxuries faster than I bring them in.",
            "I'm convinced that no one could ever fool me the way I fool others.",
            "I'm too greedy for my own good. I can't resist taking a risk if there's money involved.",
            "I can't resist swindling people who are more powerful than me.",
            "I hate to admit it and will hate myself for it, but I'll run and preserve my own hide if the going gets tough."
        ],
        "Gear": [
            "Set of Fine Clothes",
            "Disguise Kit",
            "Tools of your Preferred Con",
            "15 GP"
        ]
    },
    "Criminal": {
        "Specialty": [
            "Blackmailer",
            "Burglar",
            "Enforcer",
            "Fence",
            "Highway robber",
            "Hired killer",
            "Pickpocket",
            "Smuggler"
        ],
        "Trait": [
            "I always have a plan for when things go wrong.",
            "I am always calm, no matter what the situation. I never raise my voice or let my emotions control me.",
            "The first thing I do in a new place is note the locations of everything valuable-or where such things could be hidden.",
            "I would rather make a new friend than a new enemy.",
            "I am incredibly slow to trust. Those who seem the fairest often have the most to hide.",
            "I don't pay attention to the risks in a situation. Never tell me the odds.",
            "The best way to get me to do something is to tell me I can't do it.",
            "I blow up at the slightest insult."
        ],
        "Ideal": [
            "Honor. I don't steal from others in the trade. (Lawful)",
            "Freedom. Chains are meant to be broken, as are those who would forge them. (Chaotic)",
            "Charity. I steal from the wealthy so that I can help people in need. (Good)",
            "Greed. I will do whatever it takes to become wealthy. (Evil)",
            "People. I'm loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)",
            "Redemption. There's a spark of good in everyone. (Good)"
        ],
        "Bond": [
            "I'm trying to pay off an old debt I owe to a generous benefactor.",
            "My ill-gotten gains go to support my family.",
            "Something important was taken from me, and I aim to steal it back.",
            "I will become the greatest thief that ever lived.",
            "I'm guilty of a terrible crime. I hope I can redeem myself for it.",
            "Someone I loved died because of a mistake I made. That will never happen again."
        ],
        "Flaw": [
            "When I see something valuable, I can't think about anything but how to steal it.",
            "When faced with a choice between money and my friends, I usually choose the money.",
            "If there's a plan, I'll forget it. If I don't forget it, I'll ignore it.",
            "I have a 'tell' that reveals when I'm lying.",
            "I turn tail and run when things look bad.",
            "An innocent person is in prison for a crime that I committed. I'm okay with that."
        ],
        "Gear": [
            "Crowbar",
            "Set of Dark Common Clothes with a Hood",
            "15 GP"
        ]
    },
    "Entertainer": {
        "Routine": [
            "Actor",
            "Dancer",
            "Fire-eater",
            "Jester",
            "Juggler",
            "Instrumentalist",
            "Poet",
            "Singer",
            "Storyteller",
            "Tumbler"
        ],
        "Trait": [
            "I know a story relevant to almost every situation.",
            "Whenever I come to a new place, I collect local rumors and spread gossip.",
            "I'm a hopeless romantic, always searching for that \"special someone\".",
            "Nobody stays angry at me or around me for long, since I can defuse any amount of tension.",
            "I love a good insult, even one directed at me.",
            "I get bitter if I'm not the center of attention.",
            "I'll settle for nothing less than perfection.",
            "I change my mood or my mind as quickly as I change key in a song."
        ],
        "Ideal": [
            "Beauty. When I perform, I make the world better than it was. (Good)",
            "Tradition. The stories, legends, and songs of the past must never be forgotten, for they teach us who we are. (Lawful)",
            "Creativity. The world is in need of new ideas and bold action. (Chaotic)",
            "Greed. I'm only in it for the money and fame. (Evil)",
            "People. I like seeing the smiles on people's faces when I perform. That's all that matters. (Neutral)",
            "Honesty. Art should reflect the soul; it should come from within and reveal who we really are. (Any)"
        ],
        "Bond": [
            "My instrument is my most treasured possession, and it reminds me of someone I love.",
            "Someone stole my precious instrument, and someday I'll get it back.",
            "I want to be famous, whatever it takes.",
            "I idolize a hero of the old tales and measure my deeds against that person's.",
            "I will do anything to prove myself superior to my hated rival.",
            "I would do anything for the other members of my old troupe."
        ],
        "Flaw": [
            "I'll do anything to win fame and renown.",
            "I'm a sucker for a pretty face.",
            "A scandal prevents me from ever going home again. That kind of trouble seems to follow me around.",
            "I once satirized a noble who still wants my head. It was a mistake that I will likely repeat.",
            "I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.",
            "Despite my best efforts, I am unreliable to my friends."
        ],
        "Gear": [
            "Musical Instrument",
            "Favor of an Admirer",
            "Costume",
            "15 GP"
        ]
    },
    "Folk Hero": {
        "Defining event": [
            "I stood up to a tyrant's agents.",
            "I saved people during a natural disaster.",
            "I stood alone against a terrible monster.",
            "I stole from a corrupt merchant to help the poor.",
            "I led a militia to fight of an invading army.",
            "I broke into a tyrant's castle and stole weapons to arm the people.",
            "I trained the peasantry to use farming implements as weapons against a tyrant's soldiers.",
            "A lord rescinded an unpopular decree after I led a symbolic act of protest against it.",
            "A celestial, fey, or similar creature gave me a blessing or revealed my secret origin.",
            "Recruited into a lord's army, I rose to leadership and was commended for my heroism."
        ],
        "Trait": [
            "I judge people by their actions, not their words.",
            "If someone is in trouble, I'm always ready to lend help.",
            "When I set my mind to something, I follow through no matter what gets in my way.",
            "I have a strong sense of fair play and always try to find the most equitable solution to arguments.",
            "I'm confident in my own abilities and do what I can to instill confidence in others.",
            "Thinking is for other people. I prefer action.",
            "I misuse long words in an attempt to sound smarter.",
            "I get bored easily. When am I going to get on with my destiny?"
        ],
        "Ideal": [
            "Respect. People deserve to be treated with dignity and respect. (Good)",
            "Fairness. No one should get preferential treatment before the law, and no one is above the law. (Lawful)",
            "Freedom. Tyrants must not be allowed to oppress the people. (Chaotic)",
            "Might. If I become strong, I can take what I want-what I deserve. (Evil)",
            "Sincerity. There's no good in pretending to be something I'm not. (Neutral)",
            "Destiny. Nothing and no one can steer me away from my higher calling. (Any)"
        ],
        "Bond": [
            "I have a family, but I have no idea where they are. One day, I hope to see them again.",
            "I worked the land, I love the land, and I will protect the land.",
            "A proud noble once gave me a horrible beating, and I will take my revenge on any bully I encounter.",
            "My tools are symbols of my past life, and I carry them so that I will never forget my roots.",
            "I protect those who cannot protect themselves.",
            "I wish my childhood sweetheart had come with me to pursue my destiny."
        ],
        "Flaw": [
            "The tyrant who rules my land will stop at nothing to see me killed.",
            "I'm convinced of the significance of my destiny, and blind to my shortcomings and the risk of failure.",
            "The people who knew me when I was young know my shameful secret, so I can never go home again.",
            "I have a weakness for the vices of the city, especially hard drink.",
            "Secretly, I believe that things would be better if I were a tyrant lording over the land.",
            "I have trouble trusting in my allies."
        ],
        "Gear": [
            "Set of Artisan's Tools",
            "Shovel",
            "Iron Pot",
            "Set of Common Clothes",
            "10 GP"
        ]
    },
    "Gladiator": {
        "Routine": [
            "Actor",
            "Dancer",
            "Fire-eater",
            "Jester",
            "Juggler",
            "Instrumentalist",
            "Poet",
            "Singer",
            "Storyteller",
            "Tumbler"
        ],
        "Trait": [
            "I know a story relevant to almost every situation.",
            "Whenever I come to a new place, I collect local rumors and spread gossip.",
            "I'm a hopeless romantic, always searching for that \"special someone\".",
            "Nobody stays angry at me or around me for long, since I can defuse any amount of tension.",
            "I love a good insult, even one directed at me.",
            "I get bitter if I'm not the center of attention.",
            "I'll settle for nothing less than perfection.",
            "I change my mood or my mind as quickly as I change key in a song."
        ],
        "Ideal": [
            "Beauty. When I perform, I make the world better than it was. (Good)",
            "Tradition. The stories, legends, and songs of the past must never be forgotten, for they teach us who we are. (Lawful)",
            "Creativity. The world is in need of new ideas and bold action. (Chaotic)",
            "Greed. I'm only in it for the money and fame. (Evil)",
            "People. I like seeing the smiles on people's faces when I perform. That's all that matters. (Neutral)",
            "Honesty. Art should reflect the soul; it should come from within and reveal who we really are. (Any)"
        ],
        "Bond": [
            "My instrument is my most treasured possession, and it reminds me of someone I love.",
            "Someone stole my precious instrument, and someday I'll get it back.",
            "I want to be famous, whatever it takes.",
            "I idolize a hero of the old tales and measure my deeds against that person's.",
            "I will do anything to prove myself superior to my hated rival.",
            "I would do anything for the other members of my old troupe."
        ],
        "Flaw": [
            "I'll do anything to win fame and renown.",
            "I'm a sucker for a pretty face.",
            "A scandal prevents me from ever going home again. That kind of trouble seems to follow me around.",
            "I once satirized a noble who still wants my head. It was a mistake that I will likely repeat.",
            "I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.",
            "Despite my best efforts, I am unreliable to my friends."
        ],
        "Gear": [
            "Inexpensive but Unusual Weapon",
            "Favor of an Admirer",
            "Costume",
            "15 GP"
        ]
    },
    "Guild Artisan": {
        "Guild business": [
            "Alchemists and apothecaries",
            "Armorers, locksmiths, and finesmiths",
            "Brewers, distillers, and vintners",
            "Calligraphers, scribes, and scriveners",
            "Carpenters, roofers, and plasterers",
            "Cartographers, surveyors, and chart-makers",
            "Cobblers and shoemakers",
            "Cooks and bakers",
            "Glassblowers and glaziers",
            "Jewelers and gemcutters",
            "Leatherworkers, skinners, and tanners",
            "Masons and stonecutters",
            "Painters, limners, and sign-makers",
            "Potters and tile-makers",
            "Shipwrights and sail-makers",
            "Smiths and metal-forgers",
            "Tinkers, pewterers, and casters",
            "Wagon-makers and wheelwrights",
            "Weavers and dyers",
            "Woodcarvers, coopers, and bowyers"
        ],
        "Trait": [
            "I believe that anything worth doing is worth doing right. I can't help it-I'm a perfectionist.",
            "I'm a snob who looks down on those who can't appreciate fine art.",
            "I always want to know how things work and what makes people tick.",
            "I'm full of witty aphorisms and have a proverb for every occasion.",
            "I'm rude to people who lack my commitment to hard work and fair play.",
            "I like to talk at length about my profession.",
            "I don't part with my money easily and will haggle tirelessly to get the best deal possible.",
            "I'm well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven't heard of me."
        ],
        "Ideal": [
            "Community. It is the duty of all civilized people to strengthen the bonds of community and the security of civilization. (Lawful)",
            "Generosity. My talents were given to me so that I could use them to benefit the world. (Good)",
            "Freedom. Everyone should be free to pursue his or her own livelihood. (Chaotic)",
            "Greed. I'm only in it for the money. (Evil)",
            "People. I'm committed to the people I care about, not to ideals. (Neutral)",
            "Aspiration. I work hard to be the best there is at my craft. (Any)"
        ],
        "Bond": [
            "The workshop where I learned my trade is the most important place in the world to me.",
            "I created a great work for someone, and then found them unworthy to receive it. I'm still looking for someone worthy.",
            "I owe my guild a great debt for forging me into the person I am today.",
            "I pursue wealth to secure someone's love.",
            "One day I will return to my guild and prove that I am the greatest artisan of them all.",
            "I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood."
        ],
        "Flaw": [
            "I'll do anything to get my hands on something rare or priceless.",
            "I'm quick to assume that someone is trying to cheat me.",
            "No one must ever learn that I once stole money from guild coffers.",
            "I'm never satisfied with what I have-I always want more.",
            "I would kill to acquire a noble title.",
            "I'm horribly jealous of anyone who can outshine my handiwork. Everywhere I go, I'm surrounded by rivals."
        ],
        "Gear": [
            "Set of Artisan's Tools",
            "Letter of Introduction from Guild",
            "Set of Traveler's Clothes",
            "15 GP"
        ]
    },
    "Guild Merchant": {
        "Guild business": [
            "Alchemists and apothecaries",
            "Armorers, locksmiths, and finesmiths",
            "Brewers, distillers, and vintners",
            "Calligraphers, scribes, and scriveners",
            "Carpenters, roofers, and plasterers",
            "Cartographers, surveyors, and chart-makers",
            "Cobblers and shoemakers",
            "Cooks and bakers",
            "Glassblowers and glaziers",
            "Jewelers and gemcutters",
            "Leatherworkers, skinners, and tanners",
            "Masons and stonecutters",
            "Painters, limners, and sign-makers",
            "Potters and tile-makers",
            "Shipwrights and sail-makers",
            "Smiths and metal-forgers",
            "Tinkers, pewterers, and casters",
            "Wagon-makers and wheelwrights",
            "Weavers and dyers",
            "Woodcarvers, coopers, and bowyers"
        ],
        "Trait": [
            "I believe that anything worth doing is worth doing right. I can't help it-I'm a perfectionist.",
            "I'm a snob who looks down on those who can't appreciate fine art.",
            "I always want to know how things work and what makes people tick.",
            "I'm full of witty aphorisms and have a proverb for every occasion.",
            "I'm rude to people who lack my commitment to hard work and fair play.",
            "I like to talk at length about my profession.",
            "I don't part with my money easily and will haggle tirelessly to get the best deal possible.",
            "I'm well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven't heard of me."
        ],
        "Ideal": [
            "Community. It is the duty of all civilized people to strengthen the bonds of community and the security of civilization. (Lawful)",
            "Generosity. My talents were given to me so that I could use them to benefit the world. (Good)",
            "Freedom. Everyone should be free to pursue his or her own livelihood. (Chaotic)",
            "Greed. I'm only in it for the money. (Evil)",
            "People. I'm committed to the people I care about, not to ideals. (Neutral)",
            "Aspiration. I work hard to be the best there is at my craft. (Any)"
        ],
        "Bond": [
            "The workshop where I learned my trade is the most important place in the world to me.",
            "I created a great work for someone, and then found them unworthy to receive it. I'm still looking for someone worthy.",
            "I owe my guild a great debt for forging me into the person I am today.",
            "I pursue wealth to secure someone's love.",
            "One day I will return to my guild and prove that I am the greatest artisan of them all.",
            "I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood."
        ],
        "Flaw": [
            "I'll do anything to get my hands on something rare or priceless.",
            "I'm quick to assume that someone is trying to cheat me.",
            "No one must ever learn that I once stole money from guild coffers.",
            "I'm never satisfied with what I have-I always want more.",
            "I would kill to acquire a noble title.",
            "I'm horribly jealous of anyone who can outshine my handiwork. Everywhere I go, I'm surrounded by rivals."
        ],
        "Gear": [
            "Mule and Cart",
            "Letter of Introduction from Guild",
            "Set of Traveler's Clothes",
            "15 GP"
        ]
    },
    "Hermit": {
        "Life of seclusion": [
            "I was searching for spiritual enlightenment.",
            "I was partaking of communal living in accordance with the dictates of a religious order.",
            "I was exiled for a crime I didn't commit.",
            "I retreated from society after a life-altering event.",
            "I needed a quiet place to work on my art, literature, music, or manifesto.",
            "I needed to commune with nature, far from civilization.",
            "I was the caretaker of an ancient ruin or relic.",
            "I was a pilgrim in search of a person, place, or relic of spiritual significance."
        ],
        "Trait": [
            "I've been isolated for so long that I rarely speak, preferring gestures and the occasional grunt.",
            "I am utterly serene, even in the face of disaster.",
            "The leader of my community had something wise to say on every topic, and I am eager to share that wisdom.",
            "I feel tremendous empathy for all who suffer.",
            "I'm oblivious to etiquette and social expectations.",
            "I connect everything that happens to me to a grand, cosmic plan.",
            "I often get lost in my own thoughts and contemplation, becoming oblivious to my surroundings.",
            "I am working on a grand philosophical theory and love sharing my ideas."
        ],
        "Ideal": [
            "Greater Good. My gifts are meant to be shared with all, not used for my own benefit. (Good)",
            "Logic. Emotions must not cloud our sense of what is right and true, or our logical thinking. (Lawful)",
            "Free Thinking. Inquiry and curiosity are the pillars of progress. (Chaotic)",
            "Power. Solitude and contemplation are paths toward mystical or magical power. (Evil)",
            "Live and Let Live. Meddling in the affairs of others only causes trouble. (Neutral)",
            "Self-Knowledge. If you know yourself, there's nothing left to know. (Any)"
        ],
        "Bond": [
            "Nothing is more important than the other members of my hermitage, order, or association.",
            "I entered seclusion to hide from the ones who might still be hunting me. I must someday confront them.",
            "I'm still seeking the enlightenment I pursued in my seclusion, and it still eludes me.",
            "I entered seclusion because I loved someone I could not have.",
            "Should my discovery come to light, it could bring ruin to the world.",
            "My isolation gave me great insight into a great evil that only I can destroy."
        ],
        "Flaw": [
            "Now that I've returned to the world, I enjoy its delights a little too much.",
            "I harbor dark, bloodthirsty thoughts that my isolation and meditation failed to quell.",
            "I am dogmatic in my thoughts and philosophy.",
            "I let my need to win arguments overshadow friendships and harmony.",
            "I'd risk too much to uncover a lost bit of knowledge.",
            "I like keeping secrets and won't share them with anyone."
        ],
        "Gear": [
            "Scroll Case of Notes or Prayers",
            "Winter Blanket",
            "Set of Common Clothes",
            "Herbalism Kit",
            "5 GP"
        ]
    },
    "Knight": {
        "Trait": [
            "My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.",
            "The common folk love me for my kindness and generosity.",
            "No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.",
            "I take great pains to always look my best and follow the latest fashions.",
            "I don't like to get my hands dirty, and I won't be caught dead in unsuitable accommodations.",
            "Despite my noble birth, I do not place myself above other folk. We all have the same blood.",
            "My favor, once lost, is lost forever.",
            "If you do me an injury, I will crush you, ruin your name, and salt your fields."
        ],
        "Ideal": [
            "Respect. Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity. (Good)",
            "Responsibility. It is my duty to respect the authority of those above me, just as those below me must respect mine. (Lawful)",
            "Independence. I must prove that I can handle myself without coddling from my family. (Chaotic)",
            "Power. If I can attain more power, no one will tell me what to do. (Evil)",
            "Family. Blood runs thicker than water. (Any)",
            "Noble Obligation. It is my duty to protect and care for the people beneath me. (Good)"
        ],
        "Bond": [
            "I will face any challenge to win the approval of my family.",
            "My house's alliance with another noble family must be sustained at all costs.",
            "Nothing is more important than the other members of my family.",
            "I am in love with the heir of a family that my family despises.",
            "My loyalty to my sovereign is unwavering.",
            "The common folk must see me as a hero of the people."
        ],
        "Flaw": [
            "I secretly believe that everyone is beneath me.",
            "I hide a truly scandalous secret that could ruin my family forever.",
            "I too often hear veiled insults and threats in every word addressed to me, and I'm quick to anger.",
            "I have an insatiable desire for carnal pleasures.",
            "In fact, the world does revolve around me.",
            "By my words and actions, I often bring shame to my family."
        ],
        "Gear": [
            "Set of Fine Clothes",
            "Signet Ring",
            "Scroll of Pedigree",
            "25 GP"
        ]
    },
    "Noble": {
        "Trait": [
            "My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.",
            "The common folk love me for my kindness and generosity.",
            "No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.",
            "I take great pains to always look my best and follow the latest fashions.",
            "I don't like to get my hands dirty, and I won't be caught dead in unsuitable accommodations.",
            "Despite my noble birth, I do not place myself above other folk. We all have the same blood.",
            "My favor, once lost, is lost forever.",
            "If you do me an injury, I will crush you, ruin your name, and salt your fields."
        ],
        "Ideal": [
            "Respect. Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity. (Good)",
            "Responsibility. It is my duty to respect the authority of those above me, just as those below me must respect mine. (Lawful)",
            "Independence. I must prove that I can handle myself without coddling from my family. (Chaotic)",
            "Power. If I can attain more power, no one will tell me what to do. (Evil)",
            "Family. Blood runs thicker than water. (Any)",
            "Noble Obligation. It is my duty to protect and care for the people beneath me. (Good)"
        ],
        "Bond": [
            "I will face any challenge to win the approval of my family.",
            "My house's alliance with another noble family must be sustained at all costs.",
            "Nothing is more important than the other members of my family.",
            "I am in love with the heir of a family that my family despises.",
            "My loyalty to my sovereign is unwavering.",
            "The common folk must see me as a hero of the people."
        ],
        "Flaw": [
            "I secretly believe that everyone is beneath me.",
            "I hide a truly scandalous secret that could ruin my family forever.",
            "I too often hear veiled insults and threats in every word addressed to me, and I'm quick to anger.",
            "I have an insatiable desire for carnal pleasures.",
            "In fact, the world does revolve around me.",
            "By my words and actions, I often bring shame to my family."
        ],
        "Gear": [
            "Set of Fine Clothes",
            "Signet Ring",
            "Scroll of Pedigree",
            "25 GP"
        ]
    },
    "Outlander": {
        "Origin": [
            "Forester",
            "Trapper",
            "Homesteader",
            "Guide",
            "Exile or outcast",
            "Bounty hunter",
            "Pilgrim",
            "Tribal nomad",
            "Hunter-gatherer",
            "Tribal marauder"
        ],
        "Trait": [
            "I'm driven by a wanderlust that led me away from home.",
            "I watch over my friends as if they were a litter of newborn pups.",
            "I once ran twenty-five miles without stopping to warn to my clan of an approaching orc horde. I'd do it again if I had to.",
            "I have a lesson for every situation, drawn from observing nature.",
            "I place no stock in wealthy or well-mannered folk. Money and manners won't save you from a hungry owlbear.",
            "I'm always picking things up, absently fiddling with them, and sometimes accidentally breaking them.",
            "I feel far more comfortable around animals than people.",
            "I was, in fact, raised by wolves."
        ],
        "Ideal": [
            "Change. Life is like the seasons, in constant change, and we must change with it. (Chaotic)",
            "Greater Good. It is each person's responsibility to make the most happiness for the whole tribe. (Good)",
            "Honor. If I dishonor myself, I dishonor my whole clan. (Lawful)",
            "Might. The strongest are meant to rule. (Evil)",
            "Nature. The natural world is more important than all the constructs of civilization. (Neutral)",
            "Glory. I must earn glory in battle, for myself and my clan. (Any)"
        ],
        "Bond": [
            "My family, clan, or tribe is the most important thing in my life, even when they are far from me.",
            "An injury to the unspoiled wilderness of my home is an injury to me.",
            "I will bring terrible wrath down on the evildoers who destroyed my homeland.",
            "I am the last of my tribe, and it is up to me to ensure their names enter legend.",
            "I suffer awful visions of a coming disaster and will do anything to prevent it.",
            "It is my duty to provide children to sustain my tribe."
        ],
        "Flaw": [
            "I am too enamored of ale, wine, and other intoxicants.",
            "There's no room for caution in a life lived to the fullest.",
            "I remember every insult I've received and nurse a silent resentment toward anyone who's ever wronged me.",
            "I am slow to trust members of other races, tribes, and societies.",
            "Violence is my answer to almost any challenge.",
            "Don't expect me to save those who can't save themselves. It is nature's way that the strong thrive and the weak perish."
        ],
        "Gear": [
            "Staff",
            "Hunting Trap",
            "Trophy of a Slain Animal",
            "Set of Traveler's Clothes",
            "10 GP"
        ]
    },
    "Pirate": {
        "Trait": [
            "My friends know they can rely on me, no matter what.",
            "I work hard so that I can play hard when the work is done.",
            "I enjoy sailing into new ports and making new friends over a flagon of ale.",
            "I stretch the truth for the sake of a good story.",
            "To me, a tavern brawl is a nice way to get to know a new city.",
            "I never pass up a friendly wager.",
            "My language is as foul as an otyugh nest.",
            "I like a job well done, especially if I can convince someone else to do it."
        ],
        "Ideal": [
            "Respect. The thing that keeps a ship together is mutual respect between captain and crew. (Good)",
            "Fairness. We all do the work, so we all share in the rewards. (Lawful)",
            "Freedom. The sea is freedom-the freedom to go anywhere and do anything. (Chaotic)",
            "Mastery. I'm a predator, and the other ships on the sea are my prey. (Evil)",
            "People. I'm committed to my crewmates, not to ideals. (Neutral)",
            "Aspiration. Someday, I'll own my own ship and chart my own destiny. (Any)"
        ],
        "Bond": [
            "I'm loyal to my captain first, everything else second.",
            "The ship is most important-crewmates and captains come and go.",
            "I'll always remember my first ship.",
            "In a harbor town, I have a paramour whose eyes nearly stole me from the sea.",
            "I was cheated out of my fair share of the profits, and I want to get my due.",
            "Ruthless pirates murdered my captain and crewmates, plundered our ship, and left me to die. Vengeance will be mine."
        ],
        "Flaw": [
            "I follow orders, even if I think they're wrong.",
            "I'll say anything to avoid having to do extra work.",
            "Once someone questions my courage, I never back down no matter how dangerous the situation.",
            "Once I start drinking, it's hard for me to stop.",
            "I can't help but pocket loose coins and other trinkets I come across.",
            "My pride will probably lead to my destruction."
        ],
        "Gear": [
            "Belaying Pin",
            "50 ft. Silk Rope",
            "Lucky Charm",
            "Set of Common Clothes",
            "10 GP"
        ]
    },
    "Sage": {
        "Field of study": [
            "Alchemist",
            "Astronomer",
            "Discredited academic",
            "Librarian",
            "Professor",
            "Researcher",
            "Wizard's apprentice",
            "Scribe"
        ],
        "Trait": [
            "I use polysyllabic words that convey the impression of great erudition.",
            "I've read every book in the world's greatest libraries-or I like to boast that I have.",
            "I'm used to helping out those who aren't as smart as I am, and I patiently explain anything and everything to others.",
            "There's nothing I like more than a good mystery.",
            "I'm willing to listen to every side of an argument before I make my own judgment.",
            "I... speak... slowly... when talking... to idiots,... which... almost... everyone... is... compared... to me.",
            "I am horribly, horribly awkward in social situations.",
            "I'm convinced that people are always trying to steal my secrets."
        ],
        "Ideal": [
            "Knowledge. The path to power and self-improvement is through knowledge. (Neutral)",
            "Beauty. What is beautiful points us beyond itself toward what is true. (Good)",
            "Logic. Emotions must not cloud our logical thinking. (Lawful)",
            "No Limits. Nothing should fetter the infinite possibility inherent in all existence. (Chaotic)",
            "Power. Knowledge is the path to power and domination. (Evil)",
            "Self-Improvement. The goal of a life of study is the betterment of oneself. (Any)"
        ],
        "Bond": [
            "It is my duty to protect my students.",
            "I have an ancient text that holds terrible secrets that must not fall into the wrong hands.",
            "I work to preserve a library, university, scriptorium, or monastery.",
            "My life's work is a series of tomes related to a specific field of lore.",
            "I've been searching my whole life for the answer to a certain question.",
            "I sold my soul for knowledge. I hope to do great deeds and win it back."
        ],
        "Flaw": [
            "I am easily distracted by the promise of information.",
            "Most people scream and run when they see a demon. I stop and take notes on its anatomy.",
            "Unlocking an ancient mystery is worth the price of a civilization.",
            "I overlook obvious solutions in favor of complicated ones.",
            "I speak without really thinking through my words, invariably insulting others.",
            "I can't keep a secret to save my life, or anyone else's."
        ],
        "Gear": [
            "Bottle of Ink",
            "Quill",
            "Small Knife",
            "Letter from a Dead Colleague with an Unanswered Question",
            "Set of Common Clothes",
            "10 GP"
        ]
    },
    "Sailor": {
        "Trait": [
            "My friends know they can rely on me, no matter what.",
            "I work hard so that I can play hard when the work is done.",
            "I enjoy sailing into new ports and making new friends over a flagon of ale.",
            "I stretch the truth for the sake of a good story.",
            "To me, a tavern brawl is a nice way to get to know a new city.",
            "I never pass up a friendly wager.",
            "My language is as foul as an otyugh nest.",
            "I like a job well done, especially if I can convince someone else to do it."
        ],
        "Ideal": [
            "Respect. The thing that keeps a ship together is mutual respect between captain and crew. (Good)",
            "Fairness. We all do the work, so we all share in the rewards. (Lawful)",
            "Freedom. The sea is freedom-the freedom to go anywhere and do anything. (Chaotic)",
            "Mastery. I'm a predator, and the other ships on the sea are my prey. (Evil)",
            "People. I'm committed to my crewmates, not to ideals. (Neutral)",
            "Aspiration. Someday, I'll own my own ship and chart my own destiny. (Any)"
        ],
        "Bond": [
            "I'm loyal to my captain first, everything else second.",
            "The ship is most important-crewmates and captains come and go.",
            "I'll always remember my first ship.",
            "In a harbor town, I have a paramour whose eyes nearly stole me from the sea.",
            "I was cheated out of my fair share of the profits, and I want to get my due.",
            "Ruthless pirates murdered my captain and crewmates, plundered our ship, and left me to die. Vengeance will be mine."
        ],
        "Flaw": [
            "I follow orders, even if I think they're wrong.",
            "I'll say anything to avoid having to do extra work.",
            "Once someone questions my courage, I never back down no matter how dangerous the situation.",
            "Once I start drinking, it's hard for me to stop.",
            "I can't help but pocket loose coins and other trinkets I come across.",
            "My pride will probably lead to my destruction."
        ],
        "Gear": [
            "Belaying Pin",
            "50 ft. Silk Rope",
            "Lucky Charm",
            "Set of Common Clothes",
            "10 GP"
        ]
    },
    "Soldier": {
        "Role": [
            "Officer",
            "Scout",
            "Infantry",
            "Cavalry",
            "Healer",
            "Quartermaster",
            "Standard-bearer",
            "Support staff (cook, blacksmith, or the like)"
        ],
        "Trait": [
            "I'm always polite and respectful.",
            "I'm haunted by memories of war. I can't get the images of violence out of my mind.",
            "I've lost too many friends, and I'm slow to make new ones.",
            "I'm full of inspiring and cautionary tales from my military experience relevant to almost every combat situation.",
            "I can stare down a hell hound without flinching.",
            "I enjoy being strong and like breaking things.",
            "I have a crude sense of humor.",
            "I face problems head-on. A simple, direct solution is the best path to success."
        ],
        "Ideal": [
            "Greater Good. Our lot is to lay down our lives in defense of others. (Good)",
            "Responsibility. I do what I must and obey just authority. (Lawful)",
            "Independence. When people follow orders blindly, they embrace a kind of tyranny. (Chaotic)",
            "Might. In life as in war, the stronger force wins. (Evil)",
            "Live and Let Live. Ideals aren't worth killing over or going to war for. (Neutral)",
            "Nation. My city, nation, or people are all that matter. (Any)"
        ],
        "Bond": [
            "I would still lay down my life for the people I served with.",
            "Someone saved my life on the battlefield. To this day, I will never leave a friend behind.",
            "My honor is my life.",
            "I'll never forget the crushing defeat my company suffered or the enemies who dealt it.",
            "Those who fight beside me are those worth dying for.",
            "I fight for those who cannot fight for themselves."
        ],
        "Flaw": [
            "The monstrous enemy we faced in battle still leaves me quivering with fear.",
            "I have little respect for anyone who is not a proven warrior.",
            "I made a terrible mistake in battle that cost many lives-and I would do anything to keep that mistake secret.",
            "My hatred of my enemies is blinding and unreasoning.",
            "I obey the law, even if the law causes misery.",
            "I'd rather eat my armor than admit when I'm wrong."
        ],
        "Gear": [
            "Insignia of Rank",
            "Trophy from a Fallen Enemy",
            "Set of Bone Dice or Deck of Cards",
            "Set of Common Clothes",
            "10 GP"
        ]
    },
    "Spy": {
        "Specialty": [
            "Blackmailer",
            "Burglar",
            "Enforcer",
            "Fence",
            "Highway robber",
            "Hired killer",
            "Pickpocket",
            "Smuggler"
        ],
        "Trait": [
            "I always have a plan for when things go wrong.",
            "I am always calm, no matter what the situation. I never raise my voice or let my emotions control me.",
            "The first thing I do in a new place is note the locations of everything valuable-or where such things could be hidden.",
            "I would rather make a new friend than a new enemy.",
            "I am incredibly slow to trust. Those who seem the fairest often have the most to hide.",
            "I don't pay attention to the risks in a situation. Never tell me the odds.",
            "The best way to get me to do something is to tell me I can't do it.",
            "I blow up at the slightest insult."
        ],
        "Ideal": [
            "Honor. I don't steal from others in the trade. (Lawful)",
            "Freedom. Chains are meant to be broken, as are those who would forge them. (Chaotic)",
            "Charity. I steal from the wealthy so that I can help people in need. (Good)",
            "Greed. I will do whatever it takes to become wealthy. (Evil)",
            "People. I'm loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)",
            "Redemption. There's a spark of good in everyone. (Good)"
        ],
        "Bond": [
            "I'm trying to pay off an old debt I owe to a generous benefactor.",
            "My ill-gotten gains go to support my family.",
            "Something important was taken from me, and I aim to steal it back.",
            "I will become the greatest thief that ever lived.",
            "I'm guilty of a terrible crime. I hope I can redeem myself for it.",
            "Someone I loved died because of a mistake I made. That will never happen again."
        ],
        "Flaw": [
            "When I see something valuable, I can't think about anything but how to steal it.",
            "When faced with a choice between money and my friends, I usually choose the money.",
            "If there's a plan, I'll forget it. If I don't forget it, I'll ignore it.",
            "I have a 'tell' that reveals when I'm lying.",
            "I turn tail and run when things look bad.",
            "An innocent person is in prison for a crime that I committed. I'm okay with that."
        ],
        "Gear": [
            "Crowbar",
            "Set of Dark Common Clothes with a Hood",
            "15 GP"
        ]
    },
    "Urchin": {
        "Trait": [
            "I hide scraps of food and trinkets away in my pockets.",
            "I ask a lot of questions.",
            "I like to squeeze into small places where no one else can get to me.",
            "I sleep with my back to a wall or tree, with everything I own wrapped in a bundle in my arms.",
            "I eat like a pig and have bad manners.",
            "I think anyone who's nice to me is hiding evil intent.",
            "I don't like to bathe.",
            "I bluntly say what others are hinting at or hiding."
        ],
        "Ideal": [
            "Respect. All people, rich or poor, deserve respect. (Good)",
            "Community. We have to take care of each other, because no one else is going to do it. (Lawful)",
            "Change. The low are lifted up, and the high and mighty are brought down. Change is the nature of things. (Chaotic)",
            "Retribution. The rich need to be shown what life and death are like in the gutters. (Evil)",
            "People. I help the people who help me-that's what keeps us alive. (Neutral)",
            "Aspiration. I'm going to prove that I'm worthy of a better life. (Any)"
        ],
        "Bond": [
            "My town or city is my home, and I'll fight to defend it.",
            "I sponsor an orphanage to keep others from enduring what I was forced to endure.",
            "I owe my survival to another urchin who taught me to live on the streets.",
            "I owe a debt I can never repay to the person who took pity on me.",
            "I escaped my life of poverty by robbing an important person, and I'm wanted for it.",
            "No one else should have to endure the hardships I've been through."
        ],
        "Flaw": [
            "If I'm outnumbered, I will run away from a fight.",
            "Gold seems like a lot of money to me, and I'll do just about anything for more of it.",
            "I will never fully trust anyone other than myself.",
            "I'd rather kill someone in their sleep than fight fair.",
            "It's not stealing if I need it more than someone else.",
            "People who can't take care of themselves get what they deserve."
        ],
        "Gear": [
            "Small Knife",
            "Map of Home City",
            "Token to Remember Parents",
            "Set of Common Clothes",
            "10 GP"
        ]
    },
    "Anthropologist": {
        "Trait": [
            "I prefer the company of those who aren't like me, including people of other races.",
            "I'm a stickler when it comes to observing proper etiquette and local customs.",
            "I would rather observe than meddle.",
            "By living among violent people, I have become desensitized to violence.",
            "I would risk life and limb to discover a new culture or unravel the secrets of a dead one.",
            "When I arrive at a new settlement for the first time, I must learn all its customs."
        ],
        "Ideal": [
            "Discovery. I want to be the first person to discover a lost culture. (Any)",
            "Distance. One must not interfere with the affairs of another culture - even one in need of aid. (Lawful)",
            "Knowledge. By understanding other races and cultures, we learn to understand ourselves. (Any)",
            "Power. Common people crave strong leadership, and I do my utmost to provide it. (Lawful)",
            "Protection. I must do everything possible to save a society facing extinction. (Good)",
            "Indifferent. Life is cruel. What's the point in saving people if they're going to die anyway? (Chaotic)"
        ],
        "Bond": [
            "My mentor gave me a journal filled with lore and wisdom. Losing it would devastate me.",
            "Having lived among the people of a primeval tribe or clan, I long to return and see how they are faring.",
            "Years ago, tragedy struck the members of an isolated society I befriended, and I will honor them.",
            "I want to learn more about a particular humanoid culture that fascinates me.",
            "I seek to avenge a clan, tribe, kingdom, or empire that was wiped out.",
            "I have a trinket that I believe is the key to finding a long-lost society."
        ],
        "Flaw": [
            "Boats make me seasick.",
            "I talk to myself, and I don't make friends easily.",
            "I believe that I'm intellectually superior to people from other cultures and have much to teach them.",
            "I've picked up some unpleasant habits living among races such as goblins, lizardfolk, or orcs.",
            "I complain about everything.",
            "I wear a tribal mask and never take it off."
        ],
        "Gear": [
            "Leather-bound Diary",
            "Bottle of Ink",
            "Ink Pen",
            "Set of Traveler's Clothes",
            "Trinket of Special Significance",
            "10 GP"
        ]
    },
    "Archaeologist": {
        "Signature Item": [
            "10-foot pole",
            "Medallion",
            "Crowbar",
            "Shovel",
            "Hat",
            "Sledgehammer",
            "Hooded lantern",
            "Whip"
        ],
        "Trait": [
            "I love a good puzzle or mystery.",
            "I'm a pack rat who never throws anything away.",
            "Fame is more important to me than money.",
            "I have no qualms about stealing from the dead.",
            "I'm happier in a dusty old tomb than I am in the centers of civilization.",
            "Traps don't make me nervous. Idiots who trigger traps make me nervous.",
            "I might fail, but I will never give up.",
            "You might think I'm a scholar, but I love a good brawl. These fists were made for punching."
        ],
        "Ideal": [
            "Preservation. That artifact belongs in a museum. (Good)",
            "Greed. I won't risk my life for nothing. I expect some kind of payment. (Any)",
            "Death Wish. Nothing is more exhilarating than a narrow escape from the jaws of death. (Chaotic)",
            "Dignity. The dead and their belongings deserve to be treated with respect. (Lawful)",
            "Immortality. All my exploring is part of a plan to find the secret of everlasting life. (Any)",
            "Danger. With every great discovery comes grave danger. The two walk hand in hand. (Any)"
        ],
        "Bond": [
            "Ever since I was a child, I've heard stories about a lost city. I aim to find it, learn its secrets, and earn my place in the history books.",
            "I want to find my mentor, who disappeared on an expedition some time ago.",
            "I have a friendly rival. Only one of us can be the best, and I aim to prove it's me.",
            "I won't sell an art object or other treasure that has historical significance or is one of a kind.",
            "I'm secretly in love with the wealthy patron who sponsors my archaeological exploits.",
            "I hope to bring prestige to a library, a museum, or a university."
        ],
        "Flaw": [
            "I have a secret fear of some common wild animal - and in my work, I see them everywhere.",
            "I can't leave a room without searching it for secret doors.",
            "When I'm not exploring dungeons or ruins, I get jittery and impatient.",
            "I have no time for friends or family. I spend every waking moment thinking about and preparing for my next expedition.",
            "When given the choice of going left or right, I always go left.",
            "I can't sleep except in total darkness."
        ],
        "Gear": [
            "Wooden Case with a Map to a Ruin or Dungeon",
            "Bullseye Lantern",
            "Miner's Pick",
            "Set of Traveler's Clothes",
            "Shovel",
            "Two-Person Tent",
            "Trinket from a Dig Site",
            "25 GP"
        ]
    },
    "Athlete": {
        "Favored Event": [
            "Marathon",
            "Long-distance running",
            "Wrestling",
            "Boxing",
            "Chariot or horse race",
            "Pankration (mixed unarmed combat)",
            "Hoplite race (racing in full armor with a unit)",
            "Pentathlon (running, long jump, discus, javelin, wrestling)"
        ],
        "Trait": [
            "I feel most at peace during physical exertion, whether exercise or battle.",
            "I don't like to sit idle.",
            "I have a daily exercise routine I refuse to break.",
            "Obstacles exist to be overcome.",
            "When I see others struggling, I offer to help.",
            "I love to trade banter and gibes.",
            "Anything worth doing is worth doing best.",
            "I get irritated if people praise someone else and not me."
        ],
        "Ideal": [
            "Competition. I strive to test myself in all things. (Chaotic)",
            "Triumph. The best part of winning is seeing my rivals brought low. (Evil)",
            "Camaraderie. The strongest bonds are forged through struggle. (Good)",
            "People. I strive to inspire my spectators. (Neutral)",
            "Tradition. Every game has rules, and the playing field must be level. (Lawful)",
            "Growth. Lessons hide in victory and defeat. (Any)"
        ],
        "Bond": [
            "My teammates are my family.",
            "I will overcome a rival and prove myself their better.",
            "My mistake got someone hurt. Ill never make that mistake again.",
            "I will be the best for the honor and glory of my home.",
            "The person who trained me is the most important person in my world.",
            "I strive to live up to a specific hero's example."
        ],
        "Flaw": [
            "I indulge in a habit that threatens my reputation or health.",
            "I'll do absolutely anything to win.",
            "I ignore anyone who doesn't compete and anyone who loses to me.",
            "I have lingering pain of old injuries.",
            "Any defeat or failure on my part is because my opponents cheated.",
            "I must be the captain of any group I join."
        ],
        "Gear": [
            "Bronze Discus or Leather Ball",
            "Lucky Charm or Past Trophy",
            "Set of Traveler's Clothes",
            "10 GP"
        ]
    },
    "City Watch": {
        "Role": [
            "Officer",
            "Scout",
            "Infantry",
            "Cavalry",
            "Healer",
            "Quartermaster",
            "Standard-bearer",
            "Support staff (cook, blacksmith, or the like)"
        ],
        "Trait": [
            "I'm always polite and respectful.",
            "I'm haunted by memories of war. I can't get the images of violence out of my mind.",
            "I've lost too many friends, and I'm slow to make new ones.",
            "I'm full of inspiring and cautionary tales from my military experience relevant to almost every combat situation.",
            "I can stare down a hell hound without flinching.",
            "I enjoy being strong and like breaking things.",
            "I have a crude sense of humor.",
            "I face problems head-on. A simple, direct solution is the best path to success."
        ],
        "Ideal": [
            "Greater Good. Our lot is to lay down our lives in defense of others. (Good)",
            "Responsibility. I do what I must and obey just authority. (Lawful)",
            "Independence. When people follow orders blindly, they embrace a kind of tyranny. (Chaotic)",
            "Might. In life as in war, the stronger force wins. (Evil)",
            "Live and Let Live. Ideals aren't worth killing over or going to war for. (Neutral)",
            "Nation. My city, nation, or people are all that matter. (Any)"
        ],
        "Bond": [
            "I would still lay down my life for the people I served with.",
            "Someone saved my life on the battlefield. To this day, I will never leave a friend behind.",
            "My honor is my life.",
            "I'll never forget the crushing defeat my company suffered or the enemies who dealt it.",
            "Those who fight beside me are those worth dying for.",
            "I fight for those who cannot fight for themselves."
        ],
        "Flaw": [
            "The monstrous enemy we faced in battle still leaves me quivering with fear.",
            "I have little respect for anyone who is not a proven warrior.",
            "I made a terrible mistake in battle that cost many lives-and I would do anything to keep that mistake secret.",
            "My hatred of my enemies is blinding and unreasoning.",
            "I obey the law, even if the law causes misery.",
            "I'd rather eat my armor than admit when I'm wrong."
        ],
        "Gear": [
            "Uniform of your Unit Indicating your Rank",
            "Horn with which to Summon Help",
            "Set of Manacles",
            "10 GP"
        ]
    },
    "Clan Crafter": {
        "Clan business": [
            "Alchemists and apothecaries",
            "Armorers, locksmiths, and finesmiths",
            "Brewers, distillers, and vintners",
            "Calligraphers, scribes, and scriveners",
            "Carpenters, roofers, and plasterers",
            "Cartographers, surveyors, and chart-makers",
            "Cobblers and shoemakers",
            "Cooks and bakers",
            "Glassblowers and glaziers",
            "Jewelers and gemcutters",
            "Leatherworkers, skinners, and tanners",
            "Masons and stonecutters",
            "Painters, limners, and sign-makers",
            "Potters and tile-makers",
            "Shipwrights and sail-makers",
            "Smiths and metal-forgers",
            "Tinkers, pewterers, and casters",
            "Wagon-makers and wheelwrights",
            "Weavers and dyers",
            "Woodcarvers, coopers, and bowyers"
        ],
        "Trait": [
            "I believe that anything worth doing is worth doing right. I can't help it-I'm a perfectionist.",
            "I'm a snob who looks down on those who can't appreciate fine art.",
            "I always want to know how things work and what makes people tick.",
            "I'm full of witty aphorisms and have a proverb for every occasion.",
            "I'm rude to people who lack my commitment to hard work and fair play.",
            "I like to talk at length about my profession.",
            "I don't part with my money easily and will haggle tirelessly to get the best deal possible.",
            "I'm well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven't heard of me."
        ],
        "Ideal": [
            "Community. It is the duty of all civilized people to strengthen the bonds of community and the security of civilization. (Lawful)",
            "Generosity. My talents were given to me so that I could use them to benefit the world. (Good)",
            "Freedom. Everyone should be free to pursue his or her own livelihood. (Chaotic)",
            "Greed. I'm only in it for the money. (Evil)",
            "People. I'm committed to the people I care about, not to ideals. (Neutral)",
            "Aspiration. I work hard to be the best there is at my craft. (Any)"
        ],
        "Bond": [
            "The workshop where I learned my trade is the most important place in the world to me.",
            "I created a great work for someone, and then found them unworthy to receive it. I'm still looking for someone worthy.",
            "I owe my clan a great debt for forging me into the person I am today.",
            "I pursue wealth to secure someone's love.",
            "One day I will return to my clan and prove that I am the greatest artisan of them all.",
            "I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood."
        ],
        "Flaw": [
            "I'll do anything to get my hands on something rare or priceless.",
            "I'm quick to assume that someone is trying to cheat me.",
            "No one must ever learn that I once stole money from clan coffers.",
            "I'm never satisfied with what I have-I always want more.",
            "I would kill to acquire a noble title.",
            "I'm horribly jealous of anyone who can outshine my handiwork. Everywhere I go, I'm surrounded by rivals."
        ],
        "Gear": [
            "Set of Artisan's Tools",
            "Chisel to Mark your Handiwork",
            "Set of Traveler's Clothes",
            "Gem worth 10 GP",
            "5 GP"
        ]
    },
    "Cloistered Scholar": {
        "Field of study": [
            "Alchemist",
            "Astronomer",
            "Discredited academic",
            "Librarian",
            "Professor",
            "Researcher",
            "Wizard's apprentice",
            "Scribe"
        ],
        "Trait": [
            "I use polysyllabic words that convey the impression of great erudition.",
            "I've read every book in the world's greatest libraries-or I like to boast that I have.",
            "I'm used to helping out those who aren't as smart as I am, and I patiently explain anything and everything to others.",
            "There's nothing I like more than a good mystery.",
            "I'm willing to listen to every side of an argument before I make my own judgment.",
            "I... speak... slowly... when talking... to idiots,... which... almost... everyone... is... compared... to me.",
            "I am horribly, horribly awkward in social situations.",
            "I'm convinced that people are always trying to steal my secrets."
        ],
        "Ideal": [
            "Knowledge. The path to power and self-improvement is through knowledge. (Neutral)",
            "Beauty. What is beautiful points us beyond itself toward what is true. (Good)",
            "Logic. Emotions must not cloud our logical thinking. (Lawful)",
            "No Limits. Nothing should fetter the infinite possibility inherent in all existence. (Chaotic)",
            "Power. Knowledge is the path to power and domination. (Evil)",
            "Self-Improvement. The goal of a life of study is the betterment of oneself. (Any)"
        ],
        "Bond": [
            "It is my duty to protect my students.",
            "I have an ancient text that holds terrible secrets that must not fall into the wrong hands.",
            "I work to preserve a library, university, scriptorium, or monastery.",
            "My life's work is a series of tomes related to a specific field of lore.",
            "I've been searching my whole life for the answer to a certain question.",
            "I sold my soul for knowledge. I hope to do great deeds and win it back."
        ],
        "Flaw": [
            "I am easily distracted by the promise of information.",
            "Most people scream and run when they see a demon. I stop and take notes on its anatomy.",
            "Unlocking an ancient mystery is worth the price of a civilization.",
            "I overlook obvious solutions in favor of complicated ones.",
            "I speak without really thinking through my words, invariably insulting others.",
            "I can't keep a secret to save my life, or anyone else's."
        ],
        "Gear": [
            "Scholar's Robes of your Cloister",
            "Writing Kit",
            "Borrowed Book of your Current Study",
            "10 GP"
        ]
    },
    "Courtier": {
        "Guild business": [
            "Alchemists and apothecaries",
            "Armorers, locksmiths, and finesmiths",
            "Brewers, distillers, and vintners",
            "Calligraphers, scribes, and scriveners",
            "Carpenters, roofers, and plasterers",
            "Cartographers, surveyors, and chart-makers",
            "Cobblers and shoemakers",
            "Cooks and bakers",
            "Glassblowers and glaziers",
            "Jewelers and gemcutters",
            "Leatherworkers, skinners, and tanners",
            "Masons and stonecutters",
            "Painters, limners, and sign-makers",
            "Potters and tile-makers",
            "Shipwrights and sail-makers",
            "Smiths and metal-forgers",
            "Tinkers, pewterers, and casters",
            "Wagon-makers and wheelwrights",
            "Weavers and dyers",
            "Woodcarvers, coopers, and bowyers"
        ],
        "Trait": [
            "I believe that anything worth doing is worth doing right. I can't help it-I'm a perfectionist.",
            "I'm a snob who looks down on those who can't appreciate fine art.",
            "I always want to know how things work and what makes people tick.",
            "I'm full of witty aphorisms and have a proverb for every occasion.",
            "I'm rude to people who lack my commitment to hard work and fair play.",
            "I like to talk at length about my profession.",
            "I don't part with my money easily and will haggle tirelessly to get the best deal possible.",
            "I'm well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven't heard of me."
        ],
        "Ideal": [
            "Community. It is the duty of all civilized people to strengthen the bonds of community and the security of civilization. (Lawful)",
            "Generosity. My talents were given to me so that I could use them to benefit the world. (Good)",
            "Freedom. Everyone should be free to pursue his or her own livelihood. (Chaotic)",
            "Greed. I'm only in it for the money. (Evil)",
            "People. I'm committed to the people I care about, not to ideals. (Neutral)",
            "Aspiration. I work hard to be the best there is at my craft. (Any)"
        ],
        "Bond": [
            "The workshop where I learned my trade is the most important place in the world to me.",
            "I created a great work for someone, and then found them unworthy to receive it. I'm still looking for someone worthy.",
            "I owe my guild a great debt for forging me into the person I am today.",
            "I pursue wealth to secure someone's love.",
            "One day I will return to my guild and prove that I am the greatest artisan of them all.",
            "I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood."
        ],
        "Flaw": [
            "I'll do anything to get my hands on something rare or priceless.",
            "I'm quick to assume that someone is trying to cheat me.",
            "No one must ever learn that I once stole money from guild coffers.",
            "I'm never satisfied with what I have-I always want more.",
            "I would kill to acquire a noble title.",
            "I'm horribly jealous of anyone who can outshine my handiwork. Everywhere I go, I'm surrounded by rivals."
        ],
        "Gear": [
            "Set of Fine Clothes",
            "5 GP"
        ]
    },
    "Faceless": {
        "Faceless Persona": [
            "A flamboyant spy or brigand",
            "The incarnation of a nation or people",
            "A scoundrel with a masked guise",
            "A vengeful spirit",
            "The manifestation of a deity or your faith",
            "One whose beauty is greatly accented using makeup",
            "An impersonation of another hero",
            "The embodiment of a school of magic",
            "A warrior with distinctive armor",
            "A disguise with animalistic or monstrous characteristics, meant to inspire fear"
        ],
        "Trait": [
            "I'm earnest and uncommonly direct.",
            "I strive to have no personality; it's easier to forget what's hardly there.",
            "I treasure a memento of a person or instance that set me upon my path.",
            "I sleep just as much as I need to and on an unusual schedule.",
            "I think far ahead, a detachedness often mistaken for daydreaming.",
            "I cultivate a single obscure hobby or study and eagerly discuss it at length.",
            "I am ever learning how to be among others; when to stay quiet, when to laugh.",
            "I behave like an extreme opposite of my persona."
        ],
        "Ideal": [
            "Justice. Place in society shouldn't determine one's access to what is right. (Good)",
            "Security. Doing what must be done can't bring the innocent to harm. (Lawful)",
            "Confusion. Deception is a weapon. Strike from where your foes won't expect. (Chaotic)",
            "Infamy. My name will be a malediction, a curse that fulfills my will. (Evil)",
            "Incorruptibility. Be a symbol, and leave your flawed being behind. (Any)",
            "Anonymity. It's my deeds that should be remembered, not their instrument. (Any)"
        ],
        "Bond": [
            "I do everything for my family. My first thought is keeping them safe.",
            "What I do, I do for the world. The people don't realize how much they need me.",
            "I've seen too many in need. I must not fail them as everyone else has.",
            "I stand in opposition, lest the wicked go unopposed.",
            "I am exceptional. I do this because no one else can, and no one can stop me.",
            "I do everything for those who were taken from me."
        ],
        "Flaw": [
            "I an callous about death. It comes to us all eventually.",
            "I never make eye contact or hold it unflinchingly.",
            "I have no sense of humor. Laughing is uncomfortable and embarrassing.",
            "I overexert myself, sometimes needing to recuperate for a day or more.",
            "I think far ahead, a detachedness often mistaken for daydreaming.",
            "I see morality entirely in black and white."
        ],
        "Gear": [
            "Disguise Kit",
            "Costume",
            "10 GP"
        ]
    },
    "Faction Agent": {
        "Trait": [
            "I idolize a particular hero of my faction, and constantly refer to that person's deeds and example.",
            "I can find common ground between the fiercest enemies, empathizing with them and always working toward peace.",
            "I see omens in every event and action. The gods try to speak to us, we just need to listen.",
            "Nothing can shake my optimistic attitude.",
            "I quote (or misquote) sacred texts and proverbs in almost every situation.",
            "I am tolerant (or intolerant) of other factions and respect (or condemn) the worship of other gods.",
            "I've enjoyed fine food, drink, and high society among my temple's elite. Rough living grates on me.",
            "I've spent so long in the temple that I have little practical experience dealing with people in the outside world."
        ],
        "Ideal": [
            "Tradition. The ancient traditions of worship and sacrifice must be preserved and upheld. (Lawful)",
            "Charity. I always try to help those in need, no matter what the personal cost. (Good)",
            "Change. We must help bring about the changes the gods are constantly working in the world. (Chaotic)",
            "Power. I hope to one day rise to the top of my faction's religious hierarchy. (Lawful)",
            "Faith. I trust that my deity will guide my actions. I have faith that if I work hard, things will go well. (Lawful)",
            "Aspiration. I seek to prove myself worthy of my god's favor by matching my actions against his or her teachings. (Any)"
        ],
        "Bond": [
            "I would die to recover an ancient relic of my faction that was lost long ago.",
            "I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.",
            "I owe my life to the priest who took me in when my parents died.",
            "Everything I do is for the common people.",
            "I will do anything to protect the temple where I served.",
            "I seek to preserve a sacred text that my enemies consider heretical and seek to destroy."
        ],
        "Flaw": [
            "I judge others harshly, and myself even more severely.",
            "I put too much trust in those who wield power within my temple's hierarchy.",
            "My piety sometimes leads me to blindly trust those that profess faith in my god.",
            "I am inflexible in my thinking.",
            "I am suspicious of strangers and expect the worst of them.",
            "Once I pick a goal, I become obsessed with it to the detriment of everything else in my life."
        ],
        "Gear": [
            "Badge or Emblem of Faction",
            "Copy of a Seminal Faction Text or Code-Book",
            "Set of Common Clothes",
            "15 GP"
        ]
    },
    "Far Traveler": {
        "Reason for coming": [
            "Emissary",
            "Exile",
            "Fugitive",
            "Pilgrim",
            "Sightseer",
            "Wanderer"
        ],
        "Trait": [
            "I have different assumptions from those around me concerning personal space, blithely invading others' space in innocence, or reacting to ignorant invasion of my own.",
            "I have my own ideas about what is and is not food, and I find the eating habits of those around me fascinating, confusing, or revolting.",
            "I have a strong code of honor or sense of propriety that others don't comprehend.",
            "I express affection or contempt in ways that are unfamiliar to others.",
            "I honor my deities through practices that are foreign to this land.",
            "I begin or end my day with small traditional rituals that are unfamiliar to those around me."
        ],
        "Ideal": [
            "Open. I have much to learn from the kindly folk I meet along my way. (Good)",
            "Reserved. As someone new to these strange lands, I am cautious and respectful in my dealings. (Lawful)",
            "Adventure. I'm far from home, and everything is strange and wonderful! (Chaotic)",
            "Cunning. Though I may not know their ways, neither do they know mine, which can be to my advantage. (Evil)",
            "Inquisitive. Everything is new, but I have a thirst to learn. (Neutral)",
            "Suspicious. I must be careful, for I have no way of telling friend from foe here. (Any)"
        ],
        "Bond": [
            "So long as I have this token from my homeland, I can face any adversity in this strange land.",
            "The gods of my people are a comfort to me so far from home.",
            "I hold no greater cause than my service to my people.",
            "My freedom is my most precious possession. I'll never let anyone take it from me again.",
            "I'm fascinated by the beauty and wonder of this new land.",
            "Though I had no choice, I lament having to leave my loved ones behind. I hope to see them again one day."
        ],
        "Flaw": [
            "I am secretly (or not so secretly) convinced of the superiority of my own culture over that of this foreign land.",
            "I pretend not to understand the local language in order to avoid interactions I would rather not have.",
            "I have a weakness for the new intoxicants and other pleasures of this land.",
            "I don't take kindly to some of the actions and motivations of the people of this land, because these folk are different from me.",
            "I consider the adherents of other gods to be deluded innocents at best, or ignorant fools at worst.",
            "I have a weakness for the exotic beauty of the people of these lands."
        ],
        "Gear": [
            "Set of Traveler's Clothes",
            "Musical Instrument or Gaming Set",
            "Poorly Wrought Maps from Hometown",
            "Small Jewelery from your Hometown worth 10 GP",
            "5 GP"
        ]
    },
    "Fisher": {
        "Fisher Tale": [
            "Lobster Wrestling. You fought in hand-to-hand combat with an immense lobster.",
            "It Dragged the Boat. You nearly caught a fish of monstrous size that pulled your boat for miles.",
            "Fins of Pure Gold. You caught a sea animal whose fins were made of pure gold, but another fisher stole it.",
            "Ghost Fish. You are haunted by a ghostly fish that only you can see.",
            "Nemesis Clam. A large clam containing a pearl the size of your head claimed one of your fingers before jetting away; one day, you'll find that clam.",
            "It Swallowed the Sun. You once saw a fish leap from the water and turn day into night.",
            "Dive into the Abyss. You found yourself in an underwater cave leading to the Abyss, and your luck has been sour ever since.",
            "Love Story. You fell in love with a creature of pure water, but your brief romance ended tragically."
        ],
        "Trait": [
            "I am unmoved by the wrath of nature.",
            "My friends are my crew; we sink or float together.",
            "I need long stretches of quiet to clear my head.",
            "Rich folk don't know the satisfaction of hard work.",
            "I laugh heartily, feel deeply, and fear nothing.",
            "I work hard; nature offers no handouts.",
            "I dislike bargaining; state your price and mean it.",
            "Luck favors me, and I take risks others might not."
        ],
        "Ideal": [
            "Camaraderie. Good people make even the longest voyage bearable. (Good)",
            "Luck. Our luck depends on respecting its rules; now throw this salt over your shoulder. (Lawful)",
            "Daring. The richest bounty goes to those who risk everything. (Chaotic)",
            "Plunder. Take all that you can and leave nothing for the scavengers. (Evil)",
            "Balance. Do not fish the same spot twice in a row; suppress your greed, and nature will reward you. (Neutral)",
            "Hard Work. No wave can move a soul hard at work. (Any)"
        ],
        "Bond": [
            "I lost something important in the deep sea, and I intend to find it.",
            "Someone else's greed destroyed my livelihood, and I will be compensated.",
            "I will fish the many famous waters of this land.",
            "The gods saved me during a terrible storm, and I will honor their gift.",
            "My destiny awaits me at the bottom of a particular pond in the Feywild.",
            "I must repay my village's debt."
        ],
        "Flaw": [
            "I am judgmental, especially of those I deem homebodies or otherwise lazy.",
            "I become depressed and anxious if I'm away from the sea too long.",
            "I have lived a hard life and find it difficult to empathize with others.",
            "I am inclined to tell long-winded stories at inopportune times.",
            "I work hard, but I play harder.",
            "I am obsessed with catching an elusive aquatic beast, often to the detriment of other pursuits."
        ],
        "Gear": [
            "Fishing Tackle",
            "Net",
            "Favorite Fishing Lure or Oiled Leather Wading Boots",
            "Set of Traveler's Clothes",
            "10 GP"
        ]
    },
    "Haunted One": {
        "Harrowing Event": [
            "A monster that slaughtered dozens of innocent people spared your life, and you don't know why.",
            "You were born under a dark star. You can feel it watching you, coldly and distantly. Sometimes it beckons you in the dead of night.",
            "An apparition that has haunted your family for generations now haunts you. You don't know what it wants, and it won't leave you alone.",
            "Your family has a history of practicing the dark arts. You dabbled once and felt something horrible clutch at your soul, whereupon you fled in terror.",
            "An oni took your sibling one cold, dark night, and you were unable to stop it.",
            "You were cursed with lycanthropy and later cured. You are now haunted by the innocents you slaughtered.",
            "A hag kidnapped and raised you. You escaped, but the hag still has a magical hold over you and fills your mind with evil thoughts.",
            "You opened an eldritch tome and saw things unfit for a sane mind. You burned the book, but its words and images are burned into your psyche.",
            "A fiend possessed you as a child. You were locked away but escaped. The fiend is still inside you, but now you try to keep it locked away.",
            "You did terrible things to avenge the murder of someone you loved. You became a monster, and it haunts your waking dreams."
        ],
        "Trait": [
            "I don't run from evil. Evil runs from me.",
            "I like to read and memorize poetry. It keeps me calm and brings me fleeting moments of happiness.",
            "I spend money freely and live life to the fullest, knowing that tomorrow I might die.",
            "I live for the thrill of the hunt.",
            "I don't talk about the thing that torments me. I'd rather not burden others with my curse.",
            "I expect danger around every corner.",
            "I refuse to become a victim, and I will not allow others to be victimized.",
            "I put no trust in divine beings."
        ],
        "Ideal": [
            "Selflessness. I try to help those in need, no matter what the personal cost. (Good)",
            "Determination. I'll stop the spirits that haunt me or die trying. (Any)",
            "Greater Good. I kill monsters to make the world a safer place, and to exorcise my own demons. (Good)",
            "Freedom. I have a dark calling that puts me above the law. (Chaotic)",
            "Logic. I like to know my enemy's capabilities and weaknesses before rushing into battle. (Lawful)",
            "Destruction. I'm a monster that destroys other monsters, and anything else that gets in my way. (Evil)"
        ],
        "Bond": [
            "I keep my thoughts and discoveries in a journal. My journal is my legacy.",
            "I would sacrifice my life and my soul to protect the innocent.",
            "My torment drove away the person I love. I strive to win back the love I've lost.",
            "A terrible guilt consumes me. I hope that I can find redemption through my actions.",
            "There's evil in me, I can feel it. It must never be set free.",
            "I have a child to protect. I must make the world a safer place for them."
        ],
        "Flaw": [
            "I have certain rituals that I must follow every day. I can never break them.",
            "I assume the worst in people.",
            "I feel no compassion for the dead. They're the lucky ones.",
            "I have an addiction.",
            "I am a purveyor of doom and gloom who lives in a world without hope.",
            "I talk to spirits that no one else can see."
        ],
        "Gear": [
            "Monster Hunter's Pack",
            "Trinket of Special Significance",
            "Set of Common Clothes",
            "1 SP"
        ]
    },
    "House Agent": {
        "Role": [
            "Acquisition",
            "Investigation",
            "Research & Development",
            "Security",
            "Intimidation",
            "Exploration",
            "Negotiation",
            "Covert Operations"
        ],
        "Trait": [
            "I'm always looking to improve efficiency.",
            "I love to share trivia about my house's business.",
            "I never forget an insult against me or my house.",
            "I'm enthusiastic about everything my house does.",
            "I represent my house and take pride in my looks.",
            "I'm critical of monarchies and limits on the houses."
        ],
        "Ideal": [
            "Common Good. My house serves a vital function, and its prosperity will help everyone. (Good)",
            "Tradition. I uphold traditions of my house and bring honor to my family. (Lawful)",
            "Innovation Abandon old traditions and find better ways to do things. (Chaotic)",
            "Power. I want to ensure the prosperity of my house and wield its power myself. (Evil)",
            "Discovery. I want to learn all I can, both for my house and for my own curiosity. (Any)",
            "Comfort. I want to ensure that me and mine enjoy the best things in life. (Any)"
        ],
        "Bond": [
            "My house is my family. I would do anything for it.",
            "I love someone from another house, but the relationship is forbidden.",
            "Someone I love was killed by a rival faction within my house, and I wil l have revenge.",
            "I don't care about the house as a whole, but I would do anything for my old mentor.",
            "My house must evolve, and I'll lead the evolution.",
            "I'm determined to impress the leaders of my house, and to become a leader myself."
        ],
        "Flaw": [
            "I'm fixated on following official protocols.",
            "I'm obsessed with conspiracy theories and worried about secret societies and hidden demons.",
            "My house and blood line make me the best!",
            "My secret could get me expelled from my house.",
            "My religious beliefs aren't widespread in my house.",
            "I'm working for a hidden faction in my house that gives me secret assignments."
        ],
        "Gear": [
            "Set of Fine Clothes",
            "Signet Ring of your House",
            "Identification Papers",
            "20 GP"
        ]
    },
    "Inheritor": {
        "Inheritance Clue": [
            "A document such as a map, a letter, or a journal",
            "A trinket",
            "An article of clothing",
            "A piece of jewelry",
            "An arcane book or formulary",
            "A written story, song, poem, or secret",
            "A tattoo or other body marking"
        ],
        "Trait": [
            "I judge people by their actions, not their words.",
            "If someone is in trouble, I'm always ready to lend help.",
            "When I set my mind to something, I follow through no matter what gets in my way.",
            "I have a strong sense of fair play and always try to find the most equitable solution to arguments.",
            "I'm confident in my own abilities and do what I can to instill confidence in others.",
            "Thinking is for other people. I prefer action.",
            "I misuse long words in an attempt to sound smarter.",
            "I get bored easily. When am I going to get on with my destiny?"
        ],
        "Ideal": [
            "Respect. People deserve to be treated with dignity and respect. (Good)",
            "Fairness. No one should get preferential treatment before the law, and no one is above the law. (Lawful)",
            "Freedom. Tyrants must not be allowed to oppress the people. (Chaotic)",
            "Might. If I become strong, I can take what I want - what I deserve. (Evil)",
            "Sincerity. There's no good in pretending to be something I'm not. (Neutral)",
            "Destiny. Nothing and no one can steer me away from my higher calling. (Any)"
        ],
        "Bond": [
            "I have a family, but I have no idea where they are. One day, I hope to see them again.",
            "I worked the land, I love the land, and I will protect the land.",
            "A proud noble once gave me a horrible beating, and I will take my revenge on any bully I encounter.",
            "My tools are symbols of my past life, and I carry them so that I will never forget my roots.",
            "I protect those who cannot protect themselves.",
            "I wish my childhood sweetheart had come with me to pursue my destiny."
        ],
        "Flaw": [
            "The tyrant who rules my land will stop at nothing to see me killed.",
            "I'm convinced of the significance of my destiny, and blind to my shortcomings and the risk of failure.",
            "The people who knew me when I was young know my shameful secret, so I can never go home again.",
            "I have a weakness for the vices of the city, especially hard drink.",
            "Secretly, I believe that things would be better if I were a tyrant lording over the land.",
            "I have trouble trusting in my allies."
        ],
        "Gear": [
            "Set of Traveler's Clothes",
            "15 GP"
        ]
    },
    "Knight of the Order": {
        "Specialty": [
            "Officer",
            "Scout",
            "Infantry",
            "Cavalry",
            "Healer",
            "Quartermaster",
            "Standard-bearer",
            "Support staff (cook, blacksmith, or the like)"
        ],
        "Trait": [
            "I'm always polite and respectful.",
            "I'm haunted by memories of war. I can't get the images of violence out of my mind.",
            "I've lost too many friends, and I'm slow to make new ones.",
            "I'm full of inspiring and cautionary tales from my military experience relevant to almost every combat situation.",
            "I can stare down a hell hound without flinching.",
            "I enjoy being strong and like breaking things.",
            "I have a crude sense of humor.",
            "I face problems head-on. A simple, direct solution is the best path to success."
        ],
        "Ideal": [
            "Greater Good. Our lot is to lay down our lives in defense of others. (Good)",
            "Responsibility. I do what I must and obey just authority. (Lawful)",
            "Independence. When people follow orders blindly, they embrace a kind of tyranny. (Chaotic)",
            "Might. In life as in war, the stronger force wins. (Evil)",
            "Live and Let Live. Ideals aren't worth killing over or going to war for. (Neutral)",
            "Nation. My city, nation, or people are all that matter. (Any)"
        ],
        "Bond": [
            "I would still lay down my life for the people I served with.",
            "Someone saved my life on the battlefield. To this day, I will never leave a friend behind.",
            "My honor is my life.",
            "I'll never forget the crushing defeat my company suffered or the enemies who dealt it.",
            "Those who fight beside me are those worth dying for.",
            "I fight for those who cannot fight for themselves."
        ],
        "Flaw": [
            "The monstrous enemy we faced in battle still leaves me quivering with fear.",
            "I have little respect for anyone who is not a proven warrior.",
            "I made a terrible mistake in battle that cost many lives-and I would do anything to keep that mistake secret.",
            "My hatred of my enemies is blinding and unreasoning.",
            "I obey the law, even if the law causes misery.",
            "I'd rather eat my armor than admit when I'm wrong."
        ],
        "Gear": [
            "Set of Traveler's Clothes",
            "Signet",
            "Banner",
            "Seal Representing Place or Rank",
            "10 GP"
        ]
    },
    "Marine": {
        "Hardship Endured": [
            "You hid underwater to avoid detection by enemies and held your breath for an extremely long time. Just before you would have died, you had a revelation about your existence.",
            "You spent months enduring thirst, starvation, and torture at the hands of your enemy, but you never broke.",
            "You enabled the escape of your fellow soldiers, but at great cost to yourself. Some of your past comrades may think you're dead.",
            "No reasonable explanation can explain how you survived a particular battle. Every arrow and bolt missed you. You slew scores of enemies single-handedly and led your comrades to victory.",
            "For days, you hid in the bilge of an enemy ship, surviving on brackish water and foolhardy rats. At the right moment, you crept up to the deck and took over the ship on your own.",
            "You carried an injured marine for miles to avoid capture and death."
        ],
        "Trait": [
            "I speak rarely but mean every word I say.",
            "I laugh loudly and see the humor in stressful situations.",
            "I prefer to solve problems without violence, but I finish fights decisively.",
            "I enjoy being out in nature; poor weather never sours my mood.",
            "I am dependable.",
            "I am always working on some project or other.",
            "I become cantankerous and quiet in the rain.",
            "When the sea is within my sight, my mood is jovial and optimistic."
        ],
        "Ideal": [
            "Teamwork. Success depends on cooperation and communication. (Good)",
            "Code. The marines' code provides a solution for every problem, and following it is imperative. (Lawful)",
            "Embracing. Life is messy. Throwing yourself into the worst of it is necessary to get the job done. (Chaotic)",
            "Might. The strong train so that they might rule those who are weak. (Evil)",
            "Bravery. To act when others quake in fear- this is the essence of the warrior. (Any)",
            "Perseverance. No injury or obstacle can turn me from my goal. (Any)"
        ],
        "Bond": [
            "I face danger and evil to offset an unredeemable act in my past.",
            "I. Will. Finish. The. Job.",
            "I must set an example of hope for those who have given up.",
            "I'm searching for a fellow marine captured by an elusive enemy.",
            "Fear leads to tyranny, and both must be eradicated.",
            "My commander betrayed my unit, and I will have revenge."
        ],
        "Flaw": [
            "I grow combative and unpredictable when I drink.",
            "I find civilian life difficult and struggle to say the right thing in social situations.",
            "My intensity can drive others away.",
            "I hold grudges and have difficulty forgiving others.",
            "I become irrational when innocent people are hurt.",
            "I sometimes stay up all night listening to the ghosts of my fallen enemies."
        ],
        "Gear": [
            "Dagger of a Fallen Comrade",
            "Folded Rag with Symbol of Ship or Company",
            "Set of Traveler's Clothes",
            "10 GP"
        ]
    },
    "Mercenary Veteran": {
        "Specialty": [
            "Officer",
            "Scout",
            "Infantry",
            "Cavalry",
            "Healer",
            "Quartermaster",
            "Standard-bearer",
            "Support staff (cook, blacksmith, or the like)"
        ],
        "Trait": [
            "I'm always polite and respectful.",
            "I'm haunted by memories of war. I can't get the images of violence out of my mind.",
            "I've lost too many friends, and I'm slow to make new ones.",
            "I'm full of inspiring and cautionary tales from my military experience relevant to almost every combat situation.",
            "I can stare down a hell hound without flinching.",
            "I enjoy being strong and like breaking things.",
            "I have a crude sense of humor.",
            "I face problems head-on. A simple, direct solution is the best path to success."
        ],
        "Ideal": [
            "Greater Good. Our lot is to lay down our lives in defense of others. (Good)",
            "Responsibility. I do what I must and obey just authority. (Lawful)",
            "Independence. When people follow orders blindly, they embrace a kind of tyranny. (Chaotic)",
            "Might. In life as in war, the stronger force wins. (Evil)",
            "Live and Let Live. Ideals aren't worth killing over or going to war for. (Neutral)",
            "Nation. My city, nation, or people are all that matter. (Any)"
        ],
        "Bond": [
            "I would still lay down my life for the people I served with.",
            "Someone saved my life on the battlefield. To this day, I will never leave a friend behind.",
            "My honor is my life.",
            "I'll never forget the crushing defeat my company suffered or the enemies who dealt it.",
            "Those who fight beside me are those worth dying for.",
            "I fight for those who cannot fight for themselves."
        ],
        "Flaw": [
            "The monstrous enemy we faced in battle still leaves me quivering with fear.",
            "I have little respect for anyone who is not a proven warrior.",
            "I made a terrible mistake in battle that cost many lives-and I would do anything to keep that mistake secret.",
            "My hatred of my enemies is blinding and unreasoning.",
            "I obey the law, even if the law causes misery.",
            "I'd rather eat my armor than admit when I'm wrong."
        ],
        "Gear": [
            "Uniform of your Company",
            "Insignia of Rank",
            "Gaming Set",
            "10 GP"
        ]
    },
    "Shipwright": {
        "Seas Influence": [
            "Grand Designs. You are working on plans and schematics for a new, very fast ship. You must examine as many different kinds of vessels as possible to help ensure the success of your design.",
            "Solid and Sound. You patched up a war galley and prevented it from sinking. The local navy regards you as a friend.",
            "Favored. You insisted on thicker planking for a merchant vessel's hull, which saved it from sinking when it smashed against a reef. You have a standing invitation to visit the merchant's distant mansion.",
            "Master of Armaments. You specialized in designing and mounting defenses for the navy. You easily recognize and determine the quality of such items.",
            "Low Places. You have contacts in the smuggling outfits along the coast; you occasionally repair the criminals' ships in exchange for coin and favors.",
            "Mysteries of the Deep. You experienced an encounter with a possibly divine being while sailing alone. Work with your DM to determine the secret about the deep waters of the sea that this entity revealed to you."
        ],
        "Trait": [
            "I love talking and being heard more than I like to listen.",
            "I'm extremely fond of puzzles.",
            "I thrive under pressure.",
            "I love sketching and designing objects, especially boats.",
            "I'm not afraid of hard work; in fact, I prefer it.",
            "A pipe, an ale, and the smell of the sea: paradise.",
            "I have an endless supply of cautionary tales related to the sea.",
            "I don't mind getting my hands dirty."
        ],
        "Ideal": [
            "Crew. If everyone on deck pitches in, we'll never sink. (Good)",
            "Careful Lines. A ship must be balanced according to the laws of the universe. (Lawful)",
            "Invention. Make what you need out of whatever is at hand. (Chaotic)",
            "Perfection. To measure a being and find it lacking is the greatest disappointment. (Evil)",
            "Reflection. Muddied water always clears in time. (Any)",
            "Hope. The horizon at sea holds the greatest promise. (Any)"
        ],
        "Bond": [
            "I must visit all the oceans of the world and behold the ships that sail there.",
            "Much of the treasure I claim will be used to enrich my community.",
            "I must find a kind of wood rumored to possess magical qualities.",
            "I repair broken things to redeem what's broken in myself.",
            "I will craft a boat capable of sailing through the most dangerous of storms."
        ],
        "Flaw": [
            "I don't know when to throw something away. You never know when it might be useful again.",
            "I get frustrated to the point of distraction by shoddy craftsmanship.",
            "Though I am an excellent crafter, my work tends to look as though it belongs on a ship.",
            "I am so obsessed with sketching my ideas for elaborate inventions that I sometimes forget little thing like eating and sleeping.",
            "I'm judgmental of those who are not skilled with tools of some kind.",
            "I sometimes take things that don't belong to me, especially if they are very well made."
        ],
        "Gear": [
            "Set of Well-Loved Carpenter's Tools",
            "Blank Book",
            "1 ounce of Ink",
            "Ink Pen",
            "Set of Traveler's Clothes",
            "10 GP"
        ]
    },
    "Smuggler": {
        "Claim to Fame": [
            "Spirit of the Whale. You smuggled stolen dwarven spirits in the body of a dead whale being pulled behind a fishing boat. When you delivered the goods, the corpse suddenly exploded, sending whale meat and whiskey bottles for half a mile.",
            "Cart and Sword. You drove a cart filled with stolen art through the middle of a battlefield while singing sea shanties to confuse the combatants.",
            "The Recruit. You enlisted in another nation's navy for the purpose of smuggling stolen jewels to a distant port. You attained a minor rank before disappearing from the navy and making your way here.",
            "River of Shadows. Your riverboat accidentally slipped through the veil into the Shadowfell for several hours. While you were there, you sold some stolen dragonborn artifacts before returning to this plane and paddling home.",
            "Gold-Hearted. You agreed to transport a family escaping a war. The baby began to cry at a checkpoint, and you gave the guards all your gold to let you pass. The family never found out about this gesture.",
            "Playing Both Sides. You once smuggled crates of crossbow bolts and bundles of arrows, each destined for an opposing side in a regional war, at the same time. The buyers arrived within moments of each other but did not discover your trickery."
        ],
        "Trait": [
            "I love being on the water but hate fishing.",
            "I think of everything in terms of monetary value.",
            "I never stop smiling.",
            "Nothing rattles me; I have a lie for every occasion.",
            "I love gold but won't cheat a friend.",
            "I enjoy doing things others believe to be impossible.",
            "I become wistful when I see the sun rise over the ocean.",
            "I am no common criminal; I am a mastermind."
        ],
        "Ideal": [
            "Wealth Heaps of coins in a secure vault is all I dream of. (Any)",
            "Smuggler's Code I uphold the unwritten rules of the smugglers, who do not cheat one another or directly harm innocents. (Lawful)",
            "All for a Coin I'll do nearly anything if it means I turn a profit. (Evil)",
            "Peace and Prosperity I smuggle only to achieve a greater goal that benefits my community. (Good)",
            "People For all my many lies, I place a high value on friendship. (Any)",
            "Daring I am most happy when risking everything. (Any)"
        ],
        "Bond": [
            "My vessel was stolen from me, and I burn with the desire to recover it.",
            "I intend to become the leader of the network of smugglers that I belong to.",
            "I owe a debt that cannot be repaid in gold.",
            "After one last job, I will retire from the business.",
            "I was tricked by a fellow smuggler who stole something precious from me. I will find that thief.",
            "I give most of my profits to a charitable cause, and I don't like to brag about it."
        ],
        "Flaw": [
            "Lying is reflexive, and I sometimes engage in it without realizing.",
            "I tend to assess my relationships in terms of profit and loss.",
            "I believe everyone has a price and am cynical toward those who present themselves as virtuous.",
            "I struggle to trust the words of others.",
            "Few people know the real me.",
            "Though I act charming, I feel nothing for others and don't know what friendship is."
        ],
        "Gear": [
            "Fancy Leather Vest or Leather Boots",
            "Set of Common Clothes",
            "15 GP"
        ]
    },
    "Urban Bounty Hunter": {
        "Specialty": [
            "Blackmailer",
            "Burglar",
            "Enforcer",
            "Fence",
            "Highway robber",
            "Hired killer",
            "Pickpocket",
            "Smuggler"
        ],
        "Trait": [
            "I always have a plan for when things go wrong.",
            "I am always calm, no matter what the situation. I never raise my voice or let my emotions control me.",
            "The first thing I do in a new place is note the locations of everything valuable-or where such things could be hidden.",
            "I would rather make a new friend than a new enemy.",
            "I am incredibly slow to trust. Those who seem the fairest often have the most to hide.",
            "I don't pay attention to the risks in a situation. Never tell me the odds.",
            "The best way to get me to do something is to tell me I can't do it.",
            "I blow up at the slightest insult."
        ],
        "Ideal": [
            "Honor. I don't steal from others in the trade. (Lawful)",
            "Freedom. Chains are meant to be broken, as are those who would forge them. (Chaotic)",
            "Charity. I steal from the wealthy so that I can help people in need. (Good)",
            "Greed. I will do whatever it takes to become wealthy. (Evil)",
            "People. I'm loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)",
            "Redemption. There's a spark of good in everyone. (Good)"
        ],
        "Bond": [
            "I'm trying to pay off an old debt I owe to a generous benefactor.",
            "My ill-gotten gains go to support my family.",
            "Something important was taken from me, and I aim to steal it back.",
            "I will become the greatest thief that ever lived.",
            "I'm guilty of a terrible crime. I hope I can redeem myself for it.",
            "Someone I loved died because of a mistake I made. That will never happen again."
        ],
        "Flaw": [
            "When I see something valuable, I can't think about anything but how to steal it.",
            "When faced with a choice between money and my friends, I usually choose the money.",
            "If there's a plan, I'll forget it. If I don't forget it, I'll ignore it.",
            "I have a 'tell' that reveals when I'm lying.",
            "I turn tail and run when things look bad.",
            "An innocent person is in prison for a crime that I committed. I'm okay with that."
        ],
        "Gear": [
            "Set of Clothes Based on your Duties",
            "20 GP"
        ]
    },
    "Uthgardt Tribe Member": {
        "Origin": [
            "Forester",
            "Trapper",
            "Homesteader",
            "Guide",
            "Exile or outcast",
            "Bounty hunter",
            "Pilgrim",
            "Tribal nomad",
            "Hunter-gatherer",
            "Tribal marauder"
        ],
        "Trait": [
            "I'm driven by a wanderlust that led me away from home.",
            "I watch over my friends as if they were a litter of newborn pups.",
            "I once ran twenty-five miles without stopping to warn to my clan of an approaching orc horde. I'd do it again if I had to.",
            "I have a lesson for every situation, drawn from observing nature.",
            "I place no stock in wealthy or well-mannered folk. Money and manners won't save you from a hungry owlbear.",
            "I'm always picking things up, absently fiddling with them, and sometimes accidentally breaking them.",
            "I feel far more comfortable around animals than people.",
            "I was, in fact, raised by wolves."
        ],
        "Ideal": [
            "Change. Life is like the seasons, in constant change, and we must change with it. (Chaotic)",
            "Greater Good. It is each person's responsibility to make the most happiness for the whole tribe. (Good)",
            "Honor. If I dishonor myself, I dishonor my whole clan. (Lawful)",
            "Might. The strongest are meant to rule. (Evil)",
            "Nature. The natural world is more important than all the constructs of civilization. (Neutral)",
            "Glory. I must earn glory in battle, for myself and my clan. (Any)"
        ],
        "Bond": [
            "My family, clan, or tribe is the most important thing in my life, even when they are far from me.",
            "An injury to the unspoiled wilderness of my home is an injury to me.",
            "I will bring terrible wrath down on the evildoers who destroyed my homeland.",
            "I am the last of my tribe, and it is up to me to ensure their names enter legend.",
            "I suffer awful visions of a coming disaster and will do anything to prevent it.",
            "It is my duty to provide children to sustain my tribe."
        ],
        "Flaw": [
            "I am too enamored of ale, wine, and other intoxicants.",
            "There's no room for caution in a life lived to the fullest.",
            "I remember every insult I've received and nurse a silent resentment toward anyone who's ever wronged me.",
            "I am slow to trust members of other races, tribes, and societies.",
            "Violence is my answer to almost any challenge.",
            "Don't expect me to save those who can't save themselves. It is nature's way that the strong thrive and the weak perish."
        ],
        "Gear": [
            "Hunting Trap",
            "Totemic Token or Set of Tattoos Marking Loyalty",
            "Set of Traveler's Clothes",
            "10 GP"
        ]
    },
    "Waterdhavian Noble": {
        "Trait": [
            "My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.",
            "The common folk love me for my kindness and generosity.",
            "No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.",
            "I take great pains to always look my best and follow the latest fashions.",
            "I don't like to get my hands dirty, and I won't be caught dead in unsuitable accommodations.",
            "Despite my noble birth, I do not place myself above other folk. We all have the same blood.",
            "My favor, once lost, is lost forever.",
            "If you do me an injury, I will crush you, ruin your name, and salt your fields."
        ],
        "Ideal": [
            "Respect. Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity. (Good)",
            "Responsibility. It is my duty to respect the authority of those above me, just as those below me must respect mine. (Lawful)",
            "Independence. I must prove that I can handle myself without coddling from my family. (Chaotic)",
            "Power. If I can attain more power, no one will tell me what to do. (Evil)",
            "Family. Blood runs thicker than water. (Any)",
            "Noble Obligation. It is my duty to protect and care for the people beneath me. (Good)"
        ],
        "Bond": [
            "I will face any challenge to win the approval of my family.",
            "My house's alliance with another noble family must be sustained at all costs.",
            "Nothing is more important than the other members of my family.",
            "I am in love with the heir of a family that my family despises.",
            "My loyalty to my sovereign is unwavering.",
            "The common folk must see me as a hero of the people."
        ],
        "Flaw": [
            "I secretly believe that everyone is beneath me.",
            "I hide a truly scandalous secret that could ruin my family forever.",
            "I too often hear veiled insults and threats in every word addressed to me, and I'm quick to anger.",
            "I have an insatiable desire for carnal pleasures.",
            "In fact, the world does revolve around me.",
            "By my words and actions, I often bring shame to my family."
        ],
        "Gear": [
            "Set of Fine Clothes",
            "Signet Ring or Brooch",
            "Scroll of Pedigree",
            "Skin of Fine zzar or Wine",
            "20 GP"
        ]
    },
    "Black Fist Double Agent": {
        "Trait": [
            "People are only as trustworthy as you are valuable to them. Always strive to be the most valuable person around.",
            "My eloquence and sophistication are tools I use to avoid arousing suspicion myself.",
            "I am a thrill-seeker, excited by covert and dangerous missions.",
            "I live by my wits and always check every lock twice, just to be certain.",
            "I never admit to my mistakes lest they be used against me.",
            "I take every effort to be unnoticeable and blend into the crowd. Passersby rarely give me a second look.",
            "I am prepared for any eventuality; including the day my usefulness as a spy comes to an end.",
            "I always make certain to know my enemy before acting, lest I bite off more than I can chew."
        ],
        "Ideal": [
            "Suspicious. In my experience, everybody has something to hide, and what they hide can usually hurt me. (Any)",
            "Secretive. I trade in secrets, and am not about to let any of mine slip. (Any)",
            "Hedonist. Life is short. I live my life to the fullest, as I know any day could be my last. (Chaotic)",
            "Selfless. I use my position to help the downtrodden avoid persecution from the authorities. (Good)",
            "Patriotic. I am a loyal supporter of Phlan and its leaders, and see my role as a solemn duty and necessary evil to prevent anarchy. (Lawful)",
            "Manipulative. I use my knowledge to blackmail and manipulate others to my own benefit. (Evil)"
        ],
        "Bond": [
            "I was framed for a crime I did not commit, and seek to bring the true culprit to justice.",
            "I am a part of an underground network that smuggles innocent civilians out of the city prior to being raided by the authorities.",
            "I miss the glory days of Phlan, before the coming of the dragon.",
            "I seek to prove myself worthy of joining the Black Fist as a member of their order.",
            "My sibling was killed by a Tear of Virulence, and now I feed them false information whenever possible.",
            "My family was wrongly imprisoned, and I act as an informant in order to secure their release."
        ],
        "Flaw": [
            "I think too highly of myself, and have an exaggerated sense of self-importance.",
            "I have difficulty trusting strangers. I see spies and informants everywhere.",
            "Years of getting away with minor crimes has left me believing that I am above the law, and have diplomatic immunity above my station.",
            "Years of seeing innocent people suffer have left me despondent and pessimistic for the future.",
            "My desire for vengeance often gets me into trouble.",
            "I am a spendthrift, and share my wealth with the patrons of my favorite tavern."
        ],
        "Gear": [
            "Disguise Kit",
            "Set of Common Clothes",
            "Tears of Virulence Emblem",
            "Writ of Free Agency signed by Lord Regent",
            "Set of Artisan's Tools or Gaming Set",
            "15 GP"
        ]
    },
    "Dragon Casualty": {
        "Disfigurement": [
            "Small non-functional wing(s) or alternately-misshapen, wing-like membranes along one or both arms",
            "Elongated, claw-like hand(s) and/or feet",
            "Painful green scales randomly embedded in skin",
            "Bulbous, reptilian eye(s)",
            "Enlarged dorsal spines",
            "Hair replaced with small irregular spines"
        ],
        "Trait": [
            "I am driven to escape my past, and rarely stay in one place long.",
            "I know secrets of the Maimed Virulence, but fear the harm that may befall me should others learn them.",
            "Speaking of my ordeal helps soothe the still open wounds in my soul.",
            "My former life is meaningless, and was ripped to shreds by the claws of Vorgansharax. All that matters now is what I do with the future.",
            "I have faced the worst a dragon can deliver and survived. I am fearless, and my resolve unshakable.",
            "I am haunted by my tortured past, and wake at night screaming at half-remembered horrors.",
            "I sleep with my back to a wall or tree, and a weapon within arm's reach.",
            "I am slow to trust, but incredibly loyal to those who have earned it."
        ],
        "Ideal": [
            "Survivor. No matter the cost, I will take any action necessary to survive. (Any)",
            "Independence. When in trouble, the only person I can rely on is myself. (Chaotic)",
            "Compassionate. I have suffered long at the hands of a Dragon, and take pity and compassion on the suffering of others. (Good)",
            "Secretive. I am withdrawn, and hide my monstrous appearance for fear of drawing unwanted attention. (Chaotic)",
            "Justice. I have been wronged, and will not allow the same fate to befall others. (Lawful)",
            "Sycophant. During my ordeal, I became a willing servant of the Maimed Virulence, and spy on his behalf. (Evil)"
        ],
        "Bond": [
            "I have sworn vengeance on the Maimed Virulence and those that follow him.",
            "I long to reunite with friends and family who may dwell among the Phlan Refugees, and protect them.",
            "While a prisoner of the Maimed Virulence, I overheard rumors of an item or treasure the Dragon seeks. I will have that treasure for myself!",
            "I seek to reclaim and rebuild my former life to the best of my ability.",
            "I have been reborn as a child of Vorgansharax. I will claim my birthright as his chosen heir and successor.",
            "I attribute my survival to the work of the divine, and seek to prove myself worthy of the honor."
        ],
        "Flaw": [
            "I have been touched with dragon-greed, and have a lust for wealth which can never be satisfied.",
            "I secretly believe others are plotting to harm me.",
            "I no longer enjoy the simple pleasures in life. Food is but ashes and bile in my throat.",
            "Anyone who refuses to celebrate my celebrity does not deserve my company.",
            "I am paranoid and overly suspicious of others. Anyone may be an agent of the Maimed Virulence.",
            "Once I make up my mind, I follow my chosen course of action regardless of the consequences."
        ],
        "Gear": [
            "Dagger",
            "Tattered Rags",
            "Loaf of Moldy Bread",
            "Small Cast-off Scale of a Dragon",
            "5 GP"
        ]
    },
    "Iron Route Bandit": {
        "Trait": [
            "If people leave their gear unsecured, they must not want it very much.",
            "I feel more comfortable sleeping under the open sky.",
            "I always pre-plan my escape should things go bad; I always like to have an exit strategy.",
            "I tend to give animal owners breeding and care advice whether or not they want it.",
            "I lost a pet as a child and sadly reflect on it to this day.",
            "I always form a powerful, emotional bond with my mount.",
            "I recoil at the thought of killing someone else's pet or mount.",
            "I prefer to hang to the back of a scuffle or discussion. Better to have my enemies in front of me."
        ],
        "Ideal": [
            "Loyalty. Never bite the hand that feeds. (Good)",
            "Unpredictability. Keep your enemy guessing and off-balance like a confused deer. (Chaotic)",
            "Power. I strive to become leader of the pack at all costs. (Lawful)",
            "Freedom. I bow to no one I don't respect. (Chaotic)",
            "Resourcefulness. Our wits are our most valuable resource in troubled times. (Any)",
            "Unity. Lone wolves fail where the pack succeeds. (Any)"
        ],
        "Bond": [
            "I cannot leave a harmed animal behind; I must save it or put it out of its misery.",
            "I leave behind my own personal calling cards when I do a job.",
            "I do not trust people who do not have a pet, mount, or furry companion.",
            "The pelt I wear on my back was from an animal that died saving my life. I will always cherish it.",
            "If my pet does not like you, I do not like you!",
            "Once you've ridden with me and fought by my side, I'll be there for you odds be damned."
        ],
        "Flaw": [
            "I talk to animals; I believe they understand me, even if they do not.",
            "I growl at and bite anyone who gets too close to my food while I am eating.",
            "I strongly dislike enclosed spaces and require intoxication or firm encouragement to enter them.",
            "I robbed the wrong caravan once. The owner is a powerful merchant who holds a grudge.",
            "I'm an inveterate gambler.",
            "I judge people based on how well they stand their ground in a fight. I got no time for cowards "
        ],
        "Gear": [
            "Set of Dark Common Clothes",
            "Pack Saddle",
            "Burglar's Pack",
            "5 GP"
        ]
    },
    "Phlan Insurgent": {
        "Origin": [
            "Fisher",
            "Hunter",
            "Craftsperson",
            "Priest/Priestess",
            "Cook",
            "City Watch",
            "Servant",
            "Unskilled Laborer"
        ],
        "Trait": [
            "My patience knows no bounds, so long as my goal is in sight.",
            "In life and in struggle, the ends justify my actions.",
            "If you aren't helping me, you'd best at least stay out of my way.",
            "I long for the life that was taken away from me.",
            "Friends and family perished, tragically, before my eyes. I hope never to undergo that again.",
            "Making the right choices in life is important to me. The choices I make might save not just my life, but the lives of others as well.",
            "I can never allow my foes to get the drop on me.",
            "Time is a precious resource that I must spend wisely."
        ],
        "Ideal": [
            "Leadership. The oppressed need someone to inspire them to courageous acts. (Good)",
            "Unpredictability. Keeping the enemy guessing and off-balance is my tactical strength. (Chaos)",
            "Determination. Threats to my home must be eliminated at all costs. (Any)",
            "Freedom. Those who are enslaved and unjustly imprisoned deserve my aid. (Good)",
            "Resourcefulness. Our wits are our most valuable resource in troubled times. (Any)",
            "Unity. Working together, we can overcome all obstacles, even the most seemingly insurmountable ones. (Any)"
        ],
        "Bond": [
            "I'll never let my fellow insurgents down. They are my only remaining friends.",
            "I was separated from a loved one during my escape from town. I will find them.",
            "One of the Tears of the Virulence was a trusted friend, until the day they betrayed the city. They will pay harshly for their transgressions.",
            "An item I hold close is my last remaining connection to the family I lost during the fall.",
            "The dragon who took my past life away from me will feel the full extent of my vengeance.",
            "The knowledge in Mantor's Library is an irreplaceable treasure that must be protected."
        ],
        "Flaw": [
            "I have no respect for those who flee. I harbor a deep grudge against the citizens who abandoned Phlan.",
            "Ale is the only way I can escape the desperation of my circumstances.",
            "It doesn't take much to get me into a fight.",
            "Being an insurgent means doing things that aren't always ethical. I'm still learning to live with that.",
            "My desire to liberate Phlan oftentimes clouds my judgment, despite my best efforts.",
            "I relentlessly despise the Maimed Virulence and his allies. I'd abandon other goals in order to strike out at them."
        ],
        "Gear": [
            "20 Caltrops",
            "Small Trinket of a Previous Life",
            "Healer's Kit",
            "Set of Dark Common Clothes with a Cloak and Hood",
            "5 GP"
        ]
    },
    "Stojanow Prisoner": {
        "Trait": [
            "I am a bully; others will suffer as I have.",
            "I always say yes even when I mean no; it's just easier.",
            "I aim to misbehave.",
            "I go out of my way to frustrate or anger those in power.",
            "I strive to obey the law. I will never again make the mistake of going against authority.",
            "I always plan everything out. The one time I let others plan things it did not end well for me.",
            "I take blame to protect others from pain.",
            "I horde information, you never know what may come in handy."
        ],
        "Ideal": [
            "Loss. I freely give those who offend me what was so brutally denied me, death. (Chaos)",
            "Dedication. I never betray those who trust me. (Law)",
            "Vengeance. I use any means to get information I need; I have been well taught. (Evil)",
            "Redemption. Everyone deserves a second chance. (Good)",
            "Resilience. I can survive any challenge. (Any)",
            "Leadership. The best teams are made up of those that society has discarded."
        ],
        "Bond": [
            "I take up arms to help establish a free Phlan.",
            "The horrors of my time in Stojanow haunt my dreams, only after a day of hard work can I find sleep.",
            "I am indebted to those who freed me from prison, I will repay this debt.",
            "My torturer survived the attack that set me free, I will find them.",
            "I will not rest while others suffer fates similar to mine.",
            "I am searching for a way to heal the scars of Stojanow, both physical and emotional."
        ],
        "Flaw": [
            "During stressful times, I find myself crying for no reason.",
            "My nerve endings are shot from the interrogations; I am numb to all but the harshest touch.",
            "I am incapable of standing up for myself.",
            "I folded under the torture, and gave information that I promised would be kept secret. My life would be in jeopardy if others found out.",
            "Survival is worth more than friendship.",
            "The ghosts from my past hinder my actions."
        ],
        "Gear": [
            "Small Knife",
            "Set of Common Clothes",
            "Trinket of a Previous Life",
            "10 GP"
        ]
    },
    "Ticklebelly Nomad": {
        "Trait": [
            "I eagerly inject myself into the unknown.",
            "Villages, towns, and cities do not suit me. I'd rather be out in the wilderness any day.",
            "I accomplish my tasks efficiently, using as few resources as possible.",
            "It's difficult for me to remain in one place for long.",
            "I loudly brag about my tribe every chance I get.",
            "Having walked among giants, I am fearless in the face of bigger creatures.",
            "I am quiet and reserved, but observant. Nothing escapes my attention.",
            "My word is my bond. I see a promise to completion, even if it conflicts with my beliefs."
        ],
        "Ideal": [
            "Kinship. Family is most important in life. Though I may be far from my own, the bonds of family must be protected in others' lives as well. (Good)",
            "Preservation. Nature must not be despoiled by encroaching civilization. (Any)",
            "Wanderlust. One must expand their horizons by seeing the world and exploring. (Chaos)",
            "Isolation. My tribe and its ways must be protected and shielded from outside influence.(Neutral)",
            "Protection. Threats to the land and to the people must be dealt with at any and all costs. (Law)",
            "Belonging. All creatures have a place in the world, so I strive to help others find theirs. (Good)"
        ],
        "Bond": [
            "I ache to return to my tribe and the family I left, but cannot until my obligations are fulfilled.",
            "The dragon cultists that invaded my homeland stole away one of my tribe's people. I will not know rest until I've found them.",
            "The dragon's presence in the hills destroyed valuable territory and resulted in deaths within my tribe. The creature must pay for what it has done.",
            "I carry a trinket that spiritually and emotionally ties me to my people and my home.",
            "I discovered a strange relic in the hills during my tribe's wanderings. I must discover what it is.",
            "One of the stone giant clans from the Giant's Cairn has graced me with a mark of kinship."
        ],
        "Flaw": [
            "I throw myself and my friends into situations, rarely ever thinking about consequences.",
            "Unfamiliar people and surroundings put me on edge.",
            "I have absolutely no patience for slowpokes and those who prove indecisive.",
            "My desire to experience new things causes me to make unsafe choices.",
            "I am overly protective of nature, sometimes to the detriment of my companions and myself.",
            "My lack of worldliness often proves my undoing in social, commercial, and hostile situations."
        ],
        "Gear": [
            "Herbalism Kit",
            "Small Article of Jewelery Distinct to Tribe",
            "Set of Common Clothes",
            "5 GP"
        ]
    },
    "Caravan Specialist": {
        "Trait": [
            "Any group is only as strong as its weakest link. Everyone has to pull their own weight.",
            "There's always someone out there trying to take what I've got. Always be vigilant.",
            "Anything can be learned if you have the right teacher. Most folks just need a chance.",
            "Early to bed and early to rise; this much at least is under my control.",
            "You can listen to me or don't and wish you had. Everyone ends up on one side of that fence.",
            "Eventually my hard work will be rewarded. Maybe that time has finally come.",
            "A strong ox or horse is more reliable than most people I've met.",
            "I never had time for books, but wish I had. I admire folks who have taken the time to learn."
        ],
        "Ideal": [
            "Service. Using my talents to help others is the best way of helping myself. (Good)",
            "Selfish. What people don't know WILL hurt them, but why is that my problem? (Evil)",
            "Wanderer. I go where the road takes me. Sometimes that's a good thing  (Chaotic)",
            "Fittest. On the open road, the law of nature wins. Victims are the unprepared. (Lawful)",
            "Focused. I simply have a job to do, and I'm going to do it. (Neutral)",
            "Motivated. There's a reason I'm good at what I do, I pay attention to the details. (Any)"
        ],
        "Bond": [
            "My brother has a farm in Elmwood and I've helped him and his neighbors move their goods to Mulmaster and other surrounding towns. Those are good people.",
            "A caravan I led was attacked by bandits and many innocents died. I swear that I will avenge them by killing any bandits I encounter.",
            "The Soldiery are mostly good guys who understand the importance of protecting the roads. The City Watch is who you have to look out for. If they are inspecting your goods, get ready to pay a fine.",
            "The new commander of Southroad Tower, Capt. Holke, understands the importance of safe roads. He's hired me for several jobs and I'm grateful.",
            "There's always a road I haven't traveled before. I'm always looking for new places to explore.",
            "Wealth and power mean little without the freedom to go where and when you want."
        ],
        "Flaw": [
            "I have trouble trusting people I've just met.",
            "I enjoy the open road. Underground and tight spaces make me very nervous.",
            "I expect others to heed my orders and have little respect or sympathy if they don't.",
            "I am very prideful and have trouble admitting when I'm wrong.",
            "Once I decide on a course of action, I do not waiver.",
            "I like to explore, and my curiosity will sometimes get me into trouble."
        ],
        "Gear": [
            "Whip",
            "Tent",
            "Regional Map",
            "Set of Traveler's Clothes",
            "10 GP"
        ]
    },
    "Earthspur Miner": {
        "Trait": [
            "Nothing bothers me for long.",
            "I hate the horrors of the Underdark with a passion. They took my friends and family and almost got me.",
            "Anything worth doing takes time and patience. I have learned to plan and wait for the things I want and to be patient to achieve my goals.",
            "I can party with everyone. Whether with dwarves, or goliaths, or deep gnomes, I can find a way to have a good time.",
            "I'd rather be mining. This is okay; mining is better.",
            "I think that I will stumble upon great riches if I just keep looking.",
            "People who don't work with their hands and who live in houses are soft and weak.",
            "I wish I were more educated. I look up to people who are."
        ],
        "Ideal": [
            "Generosity. The riches of the earth are to be shared by all. (Good)",
            "Greed. Gems and precious metals, I want them all for myself. (Evil)",
            "Mooch. Property, schmoperty. If I need it, I take and use it. If I don't, I leave it for someone else. (Chaotic)",
            "Boundaries. Everything and everyone has its prescribed place; I respect that and expect others to do the same. (Lawful)",
            "Let it Be. I don't meddle in the affairs of others if I can avoid it. They're none of my business. (Neutral)",
            "Materialist. I want riches to improve my life. (Any)"
        ],
        "Bond": [
            "The people of the Earthspur mines are my family. I will do anything to protect them.",
            "A deep gnome saved my life when I was injured and alone. I owe his people a great debt.",
            "I must behold and preserve the natural beauty of places below the earth.",
            "Gems hold a special fascination for me, more than gold, land, magic, or power.",
            "I want to explore new depths and scale new heights.",
            "Someday I'm going to find the motherlode, then I'll spend the rest of my life in luxury."
        ],
        "Flaw": [
            "I'm uncomfortable spending time under the open sky. I'd rather be indoors or underground.",
            "I'm not used to being around other people much and sometimes get grouchy about it.",
            "Good tools are more reliable than people. In a cave-in, I would save a sturdy pick before a stranger.",
            "I jealously guard my secrets, because I think others will take advantage of me if they learn what I know.",
            "I am obsessed with getting rich. I always have a scheme brewing for making it big.",
            "I'm afraid of the dark."
        ],
        "Gear": [
            "Shovel or Miner's Pick",
            "Block and Tackle",
            "Climber's Kit",
            "Set of Common Clothes",
            "5 GP"
        ]
    },
    "Harborfolk": {
        "Trait": [
            "I am curious. I want to know why things are the way they are and why people do the things that they do.",
            "I can't sing, but that never stops me from doing it, loudly. Everyone loves a good sea shanty!",
            "I think the High Blade is doing a terrific job, don't you?",
            "I'm very excited that the House Built on Gold is being restored. I am a zealous worshipper of Waukeen.",
            "I am quite superstitious. I see portents in everyday occurrences.",
            "I resent the rich and enjoy thwarting their plans and spoiling their fun in small ways.",
            "I have a sea story to fit every occasion.",
            "I'm a fisher, but I secretly detest eating fish. I will do anything to avoid it."
        ],
        "Ideal": [
            "Calm. For all things, there is a tide. I set sail when it is right, and mend my nets when it is not. (Lawful)",
            "Windblown. I go where the winds blow. No man or woman tells me where or when to sail. (Chaotic)",
            "Aspiring. I will gain the favor of a Zor or Zora patron, maybe even one of the Blades! (Any)",
            "Salty. I want people to look to me as an expert on plying Mulmaster Harbor. (Any)",
            "Selfless. We are all children of the sea. I help everyone in peril afloat and ashore. (Good)",
            "Let them Drown. I refuse to risk my hide to help others. They wouldn't help me if roles were reversed. (Evil)"
        ],
        "Bond": [
            "I once lost everything but my rowboat. I'll do anything to protect it.",
            "My brother was in the Soldiery, but he was killed. I really look up to the men and women who serve.",
            "The Cloaks killed my friend for spellcasting. I'll get them back somehow, someday.",
            "The High House of Hurting helped me when I was hurt and asked nothing in return. I owe them my life.",
            "I was robbed in the Zhent ghetto once. It will not happen again.",
            "I would do anything to protect the other harborfolk. They are my family."
        ],
        "Flaw": [
            "I drink too much, which causes me to miss the tide.",
            "I killed a drunk member of the City Watch in a brawl. I am terrified that they might find out.",
            "I oversell myself and make promises I can't keep when I want to impress someone.",
            "Book learning is a waste of time. I have no patience for people who don't speak from experience.",
            "I almost always cheat. I can't help myself.",
            "I am a secret informant for the Hawks. I send them reports about everything I see and hear, even what my friends and allies are up to."
        ],
        "Gear": [
            "Fishing Tackle",
            "Dice Set",
            "Playing Cards",
            "Set of Common Clothes",
            "Rowboat",
            "5 GP"
        ]
    },
    "Mulmaster Aristocrat": {
        "Trait": [
            "My ambitions are boundless. I will be a Zor or Zora one day!",
            "I must always look my best.",
            "Beauty is everywhere. I can find it in even the homeliest person and the most horrible tragedy.",
            "Decorum must be preserved at all costs.",
            "I will not admit I am wrong if I can avoid it.",
            "I am extremely well-educated and frequently remind others of that fact.",
            "I take what I can today, because I do not know what tomorrow holds.",
            "My life is full of dance, song, drink, and love."
        ],
        "Ideal": [
            "Generous. I have a responsibility to help and protect the less fortunate. (Good)",
            "Loyal. My word, once given, is my bond. (Lawful)",
            "Callous. I am unconcerned with any negative effects my actions may have on the lives and fortunes of others. (Evil)",
            "Impulsive. I follow my heart. (Chaotic)",
            "Ignorant. Explanations bore me. (Neutral)",
            "Isolationist. I am concerned with the fortunes of my friends and family. Others must see to themselves. (Any)"
        ],
        "Bond": [
            "I have dedicated my wealth and my talents to the service of one of the city's many temples.",
            "My family and I are loyal supporters of High Blade Jaseen Drakehorn. Our fortunes are inexorably tied to hers. I would do anything to support her.",
            "Like many families who were close to High Blade Selfaril Uoumdolphin, mine has suffered greatly since his fall. We honor his memory in secret.",
            "My family plotted with Rassendyll Uoumdolphin's brother. Betrayal is the quickest route to power.",
            "Wealth and power are nothing. Fulfillment can only be found in artistic expression.",
            "It's not how you feel, who you know, or what you can do - it's how you look, and I look fabulous."
        ],
        "Flaw": [
            "I have difficulty caring about anyone or anything other than myself.",
            "Having grown up with wealth, I am careless with my finances. I overspend and am overly generous.",
            "The ends (my advancement) justify any means.",
            "I must have what I want and will brook no delay.",
            "My family has lost everything. I must keep up appearances, lest we become a laughingstock.",
            "I have no artistic sense. I hide that fact behind extreme opinions and have become a trendsetter."
        ],
        "Gear": [
            "Set of Artisan's Tools or Musical Instrument",
            "Set of Fine Clothes",
            "10 GP"
        ]
    },
    "Phlan Refugee": {
        "Trait": [
            "I may have lost everything I worked for most of my life, but there's work to be done. No time to linger on the past.",
            "I worked hard to get where I am and I refuse to let a little hardship stop me from succeeding.",
            "I protect those around me: You never know when one of them will be useful.",
            "I have always gotten ahead by giving, why change now?",
            "I prepare for everything. It paid off in Phlan and it will pay off again.",
            "I will reclaim my home. Though the path may be long, I will never give up hope.",
            "I never cared for personal hygiene, and am amazed that it bothers others.",
            "I am always willing to volunteer my services, just as long as I don't have to do anything."
        ],
        "Ideal": [
            "Justice. Corruption brought Phlan down. I will not tolerate that any longer. (Lawful)",
            "Acceptance. Stability is a myth. To think you can control your future is futile. (Chaotic)",
            "Hope. I am guided by a higher power and I trust that everything will be right in the end. (Good)",
            "Restraint. I hate those who caused my loss. It is all I can do not to lash out at them. (Any)",
            "Strength. As shown in Phlan, the strong survive. If you are weak you deserve what you get. (Evil)",
            "Openness. I am always willing to share my life story with anyone who will listen. (Any)"
        ],
        "Bond": [
            "I have the chance at a new life and this time I am going to do things right.",
            "The Lord Regent brought this suffering upon his people. I will see him brought to justice.",
            "I await the day I will be able to return to my home in Phlan.",
            "I will never forget the debt owed to Glevith of the Welcomers. I will be ready to repay that debt when called upon.",
            "There was someone I cared about in Phlan. I will find out what happened to them.",
            "Some say my life wasn't worth saving. I will prove them wrong."
        ],
        "Flaw": [
            "I used the lives of children to facilitate my escape from Phlan.",
            "I am a sucker for the underdog, and always bet on the losing team.",
            "I am incapable of standing up for myself.",
            "I will borrow money from friends with no intention to repay it.",
            "I am unable to keep secrets. A secret is just an untold story.",
            "When something goes wrong, it's never my fault."
        ],
        "Gear": [
            "Set of Artisan's Tools",
            "Token of Previous Life",
            "Set of Traveler's Clothes",
            "15 GP"
        ]
    },
    "Cormanthor Refugee": {
        "Trait": [
            "I long for a home that never really existed, whether in the camps, Hillsfar, or Myth Drannor.",
            "Though I am not an elf, I am a fervent, radical worshipper of the elven gods.",
            "I live in the moment, knowing my life could be turned upside down any day.",
            "I appreciate beauty in all of its forms.",
            "I hate the dark elves and the Netherese for each driving the elves out of Cormanthyr in the past.",
            "I am a forest bumpkin who grew up in a tent in the woods and is wholly ignorant of city life.",
            "I was raised alongside children of many other races. I harbor no racial prejudices at all.",
            "The elves have just the right word for so many things that cannot be expressed as well in other languages. I pepper my speech with elven words, phrases, and sayings."
        ],
        "Ideal": [
            "Patient. The elves have taught me to think and plan for the long-term. (Lawful)",
            "Rebellious. Governments and politicians drove my family to the camps. I subtly defy authority whenever I think I can get away with it. (Chaotic)",
            "Self-Absorbed. I've had to look out for number one so long that it has become second nature. (Any)",
            "Wanderlust. I want to see as much of the world beyond the camps as I can. (Any)",
            "Generous. I give everything I can to help those in need, regardless of who they are. (Good)",
            "To the Abyss with Them. The people of Hillsfar cast me out. I won't risk my hide to help them. (Evil)"
        ],
        "Bond": [
            "The elves took me in when I had nowhere else to go. In return, I do what I can to help elves in need.",
            "I seek revenge against the people of Hillsfar for driving my family into the forest.",
            "My family lost everything when they were driven from Hillsfar. I strive to rebuild that fortune.",
            "The forest has provided me with food and shelter. In return, I protect forests and those who dwell within.",
            "I am deeply, tragically in love with someone whose racial lifespan is far longer or shorter than mine.",
            "Members of my extended family did not make it to the camps or have been kidnapped to fight in the Arena. I search for them tirelessly."
        ],
        "Flaw": [
            "I am very uncomfortable indoors and underground.",
            "I am haughty. I grew up among the elves and emulate them. Other races are crude in comparison.",
            "Elf this, elf that. I am sick and tired of the elves.",
            "I am a miser. Having lost everything once before, I clutch my possessions and wealth very tightly.",
            "I am a moocher. I am so used to others providing for me that I have come to expect everyone to do it.",
            "I believe the gods have cursed me, my family, and all of the Cormanthor refugees. We are all doomed, doomed I tell you!"
        ],
        "Gear": [
            "Two-Person Tent",
            "Set of Artisan's Tools",
            "Holy Symbol",
            "Set of Traveler's Clothes",
            "5 GP"
        ]
    },
    "Gate Urchin": {
        "Trait": [
            "I appreciate the simple things in life: a song, a warm meal, a sunny day. I don't need any more.",
            "My problems are always caused by others. I'm never to blame.",
            "I am afraid I could wind up back on the streets any day.",
            "I get along with everyone.",
            "I see people as marks for a con and have difficulty feeling true empathy for them.",
            "I have a real flair for matchmaking. I can find anyone a spouse!",
            "I think money is the true measure of appreciation and affection. Everything else is talk or an act.",
            "I don't like having a lot of stuff, just a few simple things I need. I don't like being tied down and tend to leave things behind when I don't need them anymore."
        ],
        "Ideal": [
            "Loyal. I never rat out any of my friends, even when the Red Plumes or the Rogues' Guild ask. (Lawful)",
            "Adventurous. I don't like doing the same thing every day. I crave variety. (Chaotic)",
            "Strong. Only the strong survive. I respect those who are strong and powerful. (Any)",
            "Witty. Brains are better than brawn. I rely on my wits and respect others who do the same. (Any)",
            "Honest. Others can do what they want, but I won't lie or steal, even to feed my family. (Good)",
            "Ungrateful. Those who give only do it to make themselves feel better. I steal from them. (Evil)"
        ],
        "Bond": [
            "The Joydancers of Lliira gave me my instrument when I really needed food. I hate them for that.",
            "Busking has taught me to love music above all else.",
            "The Rogues' Guild spared me when I did a job without cutting them in. I owe them a great debt.",
            "I know people hate the Red Plumes, but some of them were really good to me. I help Red Plumes whenever I can, and I respect them. They're just doing what they have to do to get by in this world.",
            "I will be wealthy some day. My descendants will live in comfort and style.",
            "I know how hard life on the streets is. I do everything I can for those who have less than me."
        ],
        "Flaw": [
            "Though I no longer live at the Gate, I am still always concerned about where I will get my next meal.",
            "Years of thieving have become habit. I sometimes steal from strangers without thinking about it.",
            "I am ashamed of my origins. I pretend I am higher-born and fear others will find out the truth.",
            "I think people who grew up in houses are soft, spoiled, and ungrateful. I frequently tell them so.",
            "I am still very uncomfortable wearing nice clothes, sleeping in a warm bed, and eating fine food.",
            "I do not trust anyone who has not had a hard life."
        ],
        "Gear": [
            "Battered Alms Box",
            "Musical Instrument",
            "Cast-off Military Jacket",
            "Cap or Scarf",
            "Set of Common Clothes",
            "10 GP"
        ]
    },
    "Hillsfar Merchant": {
        "Trait": [
            "I fill my evenings with wine or mead and song.",
            "I greatly admire gladiators and enjoy the Arena.",
            "I take my wealth for granted. It seldom occurs to me that others aren't rich themselves.",
            "I leave broken hearts all around the Moonsea region and up and down the Sword Coast.",
            "I work hard and seldom make time for fun.",
            "I am particularly devout and pray often.",
            "The Red Plumes caught me once. I hate them.",
            "I ask a lot of questions to get information about those with whom I am working and dealing."
        ],
        "Ideal": [
            "Frugal. I spend my money very carefully. (Lawful)",
            "Profligate. I tend to spend extravagantly. (Chaotic)",
            "Honest. I deal with others above board. (Any)",
            "Sharp. I seek to make the best deal possible. (Any)",
            "Charitable. I give generously to others. (Good)",
            "Greedy. I do not share my wealth with others. (Evil)"
        ],
        "Bond": [
            "I am fiercely loyal to those with whom I work.",
            "I must uphold the good name of my family.",
            "I will prove myself to my family as an adventurer.",
            "Deals are sacrosanct. I never go back on my word.",
            "I love making deals and negotiating agreements.",
            "I guard my wealth jealously."
        ],
        "Flaw": [
            "I am a braggart. I promote myself shamelessly.",
            "I am vain. I always wear the latest fashions.",
            "I am a glutton. I eat and drink to excess.",
            "I am a snob. I want only the finest things in life.",
            "I am lazy. I want others to take care of everything.",
            "I am overconfident. I overestimate my abilities."
        ],
        "Gear": [
            "Set of Fine Clothes",
            "Signet Ring",
            "Letter of Introduction from Family's Trading House",
            "25 GP"
        ]
    },
    "Hillsfar Smuggler": {
        "Trait": [
            "When I'm not smuggling, I gamble.",
            "I just love halfling cooking and baking!",
            "I party with dwarves whenever I can.",
            "I'm a terrible singer, but I love to do it.",
            "I was raised to honor Chauntea and still do.",
            "The blood sports of the Arena sicken me.",
            "I think non-humans are really interesting.",
            "I exaggerate the tales of my exploits."
        ],
        "Ideal": [
            "Fair. I think everyone deserves to be treated fairly. I don't play favorites. (Lawful)",
            "Impulsive. Planning is often a waste of time. No plan survives contact with reality. It's easier to dive in and deal with the consequences. (Chaotic)",
            "Curious. I want to learn as much as I can about the people and places I encounter. (Any)",
            "Prepared. I think success depends on preparing as much as possible in advance. (Any)",
            "Respectful. I think everyone deserves to be treated with respect and dignity, regardless of their race, creed, color, or origin. (Good)",
            "Corrupt. I will break the law or act dishonestly if the money is right. (Evil)"
        ],
        "Bond": [
            "I am loyal to the Rogues' Guild and would do anything for them.",
            "I love the city of Hillsfar and my fellow Hillsfarians, despite the recent problems.",
            "I admire the elves. I help them whenever I can.",
            "A gnome helped me once. I pay the favor forward.",
            "I enjoy tricking the Red Plumes at every opportunity.",
            "I smuggled agricultural goods for non-human farmers. I try to help them when I can."
        ],
        "Flaw": [
            "My hatred for the Red Plumes burns so brightly that I have difficulty suppressing it around them.",
            "The Red Plumes caught me once before, and I was branded for my crime. If they catch me again, for any offense, the punishment will be dire.",
            "I treat all Hillsfarians poorly. I am disgusted with their failure to revolt against the Great Law of Humanity.",
            "I have difficulty trusting strangers. Anyone could be a spy for the authorities.",
            "I am greedy. There isn't much I won't do for money.",
            "I'm an informant for the Red Plumes. They let me continue my activities, so long as I pass them information about illegal activity in Hillsfar."
        ],
        "Gear": [
            "Forgery Kit",
            "Set of Common Clothes",
            "5 GP"
        ]
    },
    "Initiate": {
        "Trait": [
            "I always have a joke on hand when the mood gets too serious.",
            "I use sarcasm and insults to keep a distance between myself and my crop-mates, because I don't want to get attached to them.",
            "I'll settle for nothing less than perfection; in myself, in my cropmates, in everything.",
            "I'm so focused on the glorious afterlife that nothing in this life can shake my calm resolve.",
            "I enjoy using my skills to help those who lack those same skills.",
            "I train hard so that I can play hard at the end of the day. I fully expect to play even harder in the glorious afterlife, but I'm not in a hurry to get there.",
            "I'm perfectly happy letting others pick up the slack for me while I take it easy.",
            "I'm constantly sizing up everyone around me, thinking about what kind of opponent they'll be in the final trial."
        ],
        "Ideal": [
            "Solidarity. The thing that matters most of all is that we're there for each other. (Lawful)",
            "Knowledge. The world is a puzzle ;  a mystery waiting to be solved. (Neutral)",
            "Strength. All that matters to me is my own perfection. Let everyone else seek that perfection in their own way. (Any)",
            "Ambition. I'm going to prove that I deserve only the best ;  of everything. (Evil)",
            "Zeal. Anything worth doing is worth throwing my whole self into. (Any)",
            "Redemption. I will train all the harder to make up for the doubt I entertained when I was younger. (Any)"
        ],
        "Bond": [
            "One of my crop-mates is my dearest friend, and I hope we will face each other in the final trial.",
            "I am in love with a vizier.",
            "I am particularly drawn to one of the five gods, and I want nothing more than to win that god's particular favor.",
            "I am more devoted to Naktamun and its people than I am to any of the ideals of the gods.",
            "My weapon was a gift from a beloved trainer who died in an accident.",
            "I carry a memento of my time as an acolyte, and I treasure it above all other things."
        ],
        "Flaw": [
            "I'm easily distracted by an attractive person, which could be the death of me in the trials.",
            "I really wanted to be a vizier, and I'm angry at the god who didn't choose me.",
            "Training for a lifetime to die in the end seems like a big waste of energy.",
            "I'm not at all sure I'll be able to grant a glorified death to any of my crop-mates.",
            "I have a lasting grudge against one of my crop-mates, and each of us wants to see the other fail.",
            "I think I've figured out that this world is not what it seems. Something dark is going on here."
        ],
        "Gear": [
            "Simple Puzzle Box",
            "Scroll of Basic Teachings of the Five Gods",
            "Gaming Set",
            "Set of Common Clothes",
            "15 GP"
        ]
    },
    "Vizier": {
        "Trait": [
            "Everything I do, I do gracefully and deliberately, and with complete confidence. (Oketra)",
            "Nothing can shake my rock-hard focus. (Oketra)",
            "When I am at peace, I am an oasis of perfect calm in the world. When I am roused to anger, I am an embodiment of terror. (Kefnet)",
            "I enjoy teasing acolytes and initiates with juicy tidbits of knowledge wrapped up in fiendishly difficult puzzles. (Kefnet)",
            "I have the utmost faith in myself and my abilities. (Rhonas)",
            "I get restless when life in the city feels too tame, too safe. (Rhonas)",
            "I enjoy solitude as an opportunity to plan my victory. (Bontu)",
            "I use satire as a way to undermine the teachings of the other gods. (Bontu)",
            "I love, fight, and feast with equal zeal. (Hazoret)",
            "I think of those in my care as my family, in a way that most people have trouble understanding. (Hazoret)"
        ],
        "Ideal": [
            "Solidarity. The worthy must respect the worthy. In the afterlife, all will be united in goal and action. (Oketra)",
            "Knowledge. The worthy shall cultivate a nimble mind, so as to perceive the wonders beyond imagination that wait in the afterlife. (Kefnet)",
            "Strength. The worthy shall hone a strong body that can withstand the boundless energies of the afterlife. (Rhonas)",
            "Ambition. The worthy shall strive for greatness, for supremacy in life leads to supremacy in the afterlife. (Bontu)",
            "Zeal. The worthy shall rush to the God-Pharaoh's side with relentless passion, rising to overcome every obstacle in their way. (Hazoret)",
            "Naktamun. The life of the city is ordered according to the plan of the God-Pharaoh, and that order must be preserved at all costs."
        ],
        "Bond": [
            "My loyalty to my companions embodies the ideal of loyalty to my god. (Oketra)",
            "The teachings of my god are more precious to me than any possession. (Kefnet)",
            "I would do anything to defend the temple of my god from any harm or desecration. (Rhonas)",
            "I am committed to the service of my god; because it's my sure ticket into the afterlife. (Bontu)",
            "I love my god and never want my service to end. (Hazoret)",
            "I have a close friend or lover who is also a vizier."
        ],
        "Flaw": [
            "I am in love with an initiate, and I want to shield this person from death in the trials.",
            "I secretly wish I had not been chosen as a vizier, so I could participate in the trials as an initiate.",
            "I secretly question whether the gods care at all about us or what we do.",
            "A vizier of another god seeks my death in retribution for a past insult.",
            "I am terrified of what lies beyond the Gate to the Afterlife.",
            "I secretly believe the God-Pharaoh's return will not bring blessing to this world."
        ],
        "Gear": [
            "Set of Artisan's Tools or Musical Instrument",
            "Scroll of your God's Teachings",
            "Vizier's Cartouche",
            "Set of Fine Clothes",
            "25 GP"
        ]
    },
    "Inquisitor": {
        "Trait": [
            "It will all go smoothly if everyone just does as I say.",
            "Despair is an extravagance we can ill afford.",
            "I know the writings of Saint Raban backward and forward.",
            "I try to see the bright side in the very worst situations.",
            "It helps me feel better when others show sympathy or appreciation for the horrors I've endured.",
            "I prefer to face evil with a strong group of friends in front of me.",
            "I want to see the wicked burn for the evil they've brought on us.",
            "I feel the sin being purged from me as I help cleanse the world."
        ],
        "Ideal": [
            "Honesty. The smallest deception paves the way to grievous sin. (Lawful)",
            "Piety. Devotion to the angels and the rites of the church is all that keeps the world from destruction. (Good)",
            "Order. The laws of Avacyn are meant to preserve the social order ;  everything in its proper place. (Lawful)",
            "Humanity. Human life is to be cherished and preserved against the horrors of the night. (Good)",
            "Knowledge. The path to holiness comes through understanding of the world. (Any)",
            "Punishment. It is better for the innocent to suffer than for the guilty to escape their due. (Evil)"
        ],
        "Bond": [
            "Thraben is the heart of the world. The cathedral must stand even if the hinterlands are lost.",
            "One day, I will claim vengeance against the monster that took my family from me.",
            "My weapon is all I have to remember my beloved mentor by.",
            "The geist of my beloved speaks to me sometimes.",
            "My dear sibling is now a werewolf.",
            "A small crossways chapel is my spiritual home."
        ],
        "Flaw": [
            "I am troubled by the wild rage and bloodlust that lurks in my own heart.",
            "I have come to believe that I executed an innocent person.",
            "I enjoy the prestige of my position more than service to the angels.",
            "I drink to forget the horrors I've seen.",
            "I might have made a promise to a demon that I can't keep.",
            "I'll do whatever grim task must be done, for my soul is already lost."
        ],
        "Gear": [
            "Holy Symbol",
            "Set of Traveler's Clothes",
            "15 GP"
        ]
    },
    "Azorious Functionary": {
        "Trait": [
            "I try never to let my judgement become clouded by emotion.",
            "I have infinite patience with the dolts and boors I'm forced to deal with every day.",
            "When I give an order, I expect it to be obeyed.",
            "I just want things the way I like them: neat, orderly, and clean.",
            "No wrongdoing can escape my watchful gaze.",
            "I always say exactly what I mean, no matter how many words it takes to communicate the particular nuance I am attempting to convey.",
            "I'm very literal and don't appreciate metaphor or sarcasm.",
            "I never change my mind once it's made up."
        ],
        "Ideal": [
            "Guild. My guild is all that really matters. (Any)",
            "Order. The law is meant to ensure that the gears of society turn smoothly and quietly. (Lawful)",
            "Peace. The ultimate object of the law is to remove violence from society. (Good)",
            "Compliance. Coercion is a fine way of ensuring that the laws are obeyed. (Lawful)",
            "Legislation. The law embodies excellence in its precision and detail. (Lawful)",
            "Punishment. A public display of consequences is an excellent deterrent for other criminals. (Evil)"
        ],
        "Bond": [
            "I am beholden to an Azorius arrester who captured the criminal who killed my parents, saving me from the same fate.",
            "I hope one day to write the laws, not just enforce them.",
            "I tried and failed to prevent murder, and I have sworn to find and arrest the perpetrator.",
            "I successfully prevented a murder, and the would-be perpetrator wants me dead.",
            "One of my parents was prominent in the guild, and I resent constantly being compared to that standard.",
            "I've modeled my career after a highly respected law-mage or arrester, but I fear that my role model might be involved in something illegal."
        ],
        "Flaw": [
            "I'm unable to distinguish between the letter and the spirit of the law.",
            "I seem like a harsh judge to others, but I judge myself most harshly of all.",
            "I have a secret, illegal vice.",
            "I was traumatized by witnessing a crime as a child.",
            "I'm incapable of deception.",
            "I wish I had joined the Boros, but I fear they'd never accept me."
        ],
        "Gear": [
            "Azorious Insignia",
            "Scroll of a Law you find Important",
            "Bottle of Blue Ink",
            "Ink Pen",
            "Set of Fine Clothes",
            "10 GP"
        ]
    },
    "Boros Legionnaire": {
        "Trait": [
            "I approach every task with the same high degree of military precision.",
            "I am always the first into the fray.",
            "I bear any injury or indignity with stoic discipline.",
            "My righteous wrath is easily inflamed by the slightest iniquity.",
            "My honor is more important to me than my life.",
            "Dangerous work is best accomplished by an orderly group working with common purpose.",
            "I treat my weapon, uniform, and insignia with reverence, for they are gifts of the angels.",
            "I pace when standing and fidget incessantly when forced to sit."
        ],
        "Ideal": [
            "Guild. My guild is all that really matters. (Any)",
            "Justice. Achieving justice requires establishing fair, equitable, and compassionate relationships within a community. (Good)",
            "Protection. It isn't right for innocents to suffer because of the arrogance of the powerful. (Good)",
            "Solidarity. It is most crucial to act with a single will, marching side by side in perfect accord. (Lawful)",
            "Order. Society functions only if people do their duty and respect the chain of command. (Lawful)",
            "Conviction. Anything worth doing is worth doing with your whole heart. (Lawful)"
        ],
        "Bond": [
            "I would lay down my life for Aurelia and the angels.",
            "I owe my life to the Boros captain who took me in when I was living on the streets.",
            "My fellow legionnaires are my family.",
            "I wield the same Boros weapon my grandparent did, for the honor of our family.",
            "I ran with the Rakdos in my youth, and I'm striving to atone for my past misdeeds.",
            "I do what I can to help out the spouse of a comrade who died in battle."
        ],
        "Flaw": [
            "I act bravely when I'm in a group, but I'm a coward when I'm alone.",
            "I see everything in clear-cut black and white.",
            "I'm just a little fascinated by the ways of the Gruul.",
            "I trust the chain of command more than anything - more even than my closest friends.",
            "I'm slow to trust members of other guilds.",
            "I've been known to turn a blind eye to injustice, with the help of a modest bribe."
        ],
        "Gear": [
            "Boros Insignia",
            "Feather from an Angel's Wing",
            "Tattered Piece of Boros Banner",
            "Set of Common Clothes",
            "2 GP"
        ]
    },
    "Dimir Operative": {
        "Reason for Infiltration": [
            "My parents belong to this guild, and I let them think I'm following in their footsteps.",
            "I've been assigned to track this guild's activities.",
            "I've been assigned to get close to an individual in this guild and learn their secrets.",
            "I've been assigned to recruit a new Dimir spy from the ranks of this guild.",
            "I was a member of this guild before the Dimir recruited me.",
            "I don't like what this guild stands for and want to destroy it from within.",
            "I secretly wish I could leave the Dimir and join this guild, but there is no escaping the Dimir.",
            "I chose this guild at random or on a lark."
        ],
        "Trait": [
            "I'm good at hiding my true thoughts and feelings.",
            "When I'm in doubt about revealing something, I assume it's a secret, and I don't share it.",
            "I like to sound mysterious, because wisdom hidden grows deeper with time.",
            "I have no patience with people who get in my way.",
            "I love hearing about other people's nightmares.",
            "Combat is meant to be quick, clean, and one-sided.",
            "I like to stick to the shadows.",
            "I never show my anger. I just plot my revenge."
        ],
        "Ideal": [
            "Guild. My guild is all that really matters. (Any)",
            "Control. I like pulling the strings. (Lawful)",
            "Secrets. I collect secrets and never reveal them. (Any)",
            "Knowledge. I want to know as much as I can about this city and how it works. (Any)",
            "Independence. I value the freedom to pursue my own goals without interference. (Chaotic)",
            "Nihilism. I don't believe in anything, and anyone who does is a fool. (Neutral)"
        ],
        "Bond": [
            "I discovered a secret I can't let anyone else uncover - including my guild superiors.",
            "I formed a close friendship or romance with someone in the guild I'm infiltrating.",
            "The Dimir agent who recruited me was unmasked and killed. My revenge on the killers will be thorough and painful.",
            "I spend as much time as I can in the Ismeri Library because I'm certain an information hub operates behind its facade. I want its secrets!",
            "I'm utterly loyal to my superior in the guild, more than to the guild or its guildmaster.",
            "Someone has discovered my true identity."
        ],
        "Flaw": [
            "I like secrets so much that I'm reluctant to share details of a plan even with those who need to know.",
            "I would let my friends die rather than reveal my true identity.",
            "I have trouble trusting anyone but myself.",
            "I have a particular vice that puts all my secrets at risk if I'm not careful.",
            "I'm pretty sure I've done something horrible that I can't remember because of the guild's mind magic.",
            "I put too much trust in the people who give me orders."
        ],
        "Gear": [
            "Dimir Insignia",
            "3 Small Knives",
            "Set of Dark Common Clothes"
        ]
    },
    "Golgari Agent": {
        "Trait": [
            "Remember, I could kill you in your sleep. Or put centipedes in your bedroll.",
            "I like to remind people of their inevitable demise.",
            "Sometimes I give voice to the whispers of the rot, which I hear but no one else does.",
            "I do my best to discourage anyone from approaching or talking to me.",
            "I have accepted my death. Hence, I don't fear it.",
            "Like roots growing through stone, I am relentless and determined in my action.",
            "I put my knowledge of anatomy to use by narrating the injuries my enemies suffer in grisly detail.",
            "Like a wild animal, I lash out viciously when I'm provoked - and I'm easily provoked."
        ],
        "Ideal": [
            "Guild. My guild is all that really matters. (Any)",
            "Stoicism. All of us are part of the cyclical march of nature, which will continue with or without us. (Neutral)",
            "Nature. The natural world is more important than the edifices of the city and civilization. (Neutral)",
            "Interdependence. We are all part of nature's web. (Lawful)",
            "Ambition. The time of Golgari ascendance is at hand, and I intend to have a prominent place in the new world order. (Evil)",
            "Live and Let Live. Meddling in the affairs of other guilds is a great way to get squashed like a bug. (Neutral)"
        ],
        "Bond": [
            "I cherish the finger of a family member who was petrified by a medusa.",
            "I have an identical twin who is as different from me as any person could be.",
            "I want to lead one faction of the guild to a new position of dominance.",
            "I love spending time in the moss-covered building where I took part in my first reclamation mission.",
            "I found something in the sewer that must never come to light.",
            "I am forever grateful to the reclaimer who found me floating facedown in the sewer, moments from death."
        ],
        "Flaw": [
            "Death comes for us all, so you can't expect me to take care of someone who can't fight it off.",
            "I assume that anyone outside the Golgari looks down on me.",
            "I feel a need for revenge against those who enjoy the privilege of living above ground.",
            "I don't bother to couch my opinions in flattering words.",
            "I can't help but pocket any trinket or coin I come across, no matter how worthless.",
            "I'm convinced that I'm better and stronger than members of other guilds, isolated as they are from the realities of life and death."
        ],
        "Gear": [
            "Poisoner's Kit",
            "Pet Beetle or Spider",
            "Set of Common Clothes",
            "10 GP"
        ]
    },
    "Gruul Anarch": {
        "Trait": [
            "Unlike people, the beasts of the wild are friends who won't stab me in the back.",
            "Go ahead and insult me - I dare you.",
            "I scorn those who can't survive away from the comforts of the city.",
            "Don't tell me I'm not allowed to do something.",
            "Laws are for people who are afraid to face their inner beasts.",
            "I smear the blood of my enemies over my skin.",
            "I was, in fact, raised by maaka.",
            "HarrRRAAGGHH! [I rarely form a coherent sentence and prefer to express myself by breaking things.]"
        ],
        "Ideal": [
            "Clan. My clan is all that really matters. (Any)",
            "Anarchy. No person or law or custom can tell another what to do. (Chaotic)",
            "Nature. We weren't born tame or domesticated, so we shouldn't have to live that way. (Neutral)",
            "Might. The strongest are meant to dominate the weak. (Evil)",
            "Rage. AAAAAARRRRggggh! [To live is to feel and express the rage burning in your belly.] (Chaotic)",
            "Tradition. The Old Ways must be preserved and upheld. (Any)"
        ],
        "Bond": [
            "I am determined that one day I will lead my clan - or a new one.",
            "I would give my life for my clan chieftain.",
            "The chieftain of another clan has a grudge against me.",
            "I am devoted to a sacred site in the midst of the rubblebelt.",
            "My weapon is made from the first raktusk I ever hunted.",
            "GrrrRRAAAAGGHH! [I will do anything to prove myself greater than my siblings or ancestors.]"
        ],
        "Flaw": [
            "If you question my courage, I will never back down.",
            "HrrrGGGAAAARRuuuh! [My anger in battle led to the death of a loved one.]",
            "I'm as stubborn as a batterboar.",
            "I'm so convinced of my superiority over soft, civilized people that I'll take great risks to prove it.",
            "I'm easily manipulated by people I find attractive.",
            "I'm not actually all that angry."
        ],
        "Gear": [
            "Gruul Insignia",
            "Hunting Trap",
            "Herbalism Kit",
            "Skull of a Boar",
            "Beast-hide Cloak",
            "Set of Traveler's Clothes",
            "10 GP"
        ]
    },
    "Izzet Engineer": {
        "Trait": [
            "I have a hard time staying focused on - oh, and my brain tends to jump from one - did I mention focus?",
            "I get really excited about my ideas and I can't wait to talk about them and start putting them into practice and tinkering with them and I want to tell you about how exciting it all is!",
            "It's not magic - or anything, really - if you do it only halfway. Whatever I do, I give it all I've got.",
            "I do what my gut tells me.",
            "Life's an experiment, and I can't wait to see what happens.",
            "I pepper my speech with the incomprehensible jargon of my trade, like mizzium droplets inserted into a weird-field suspension.",
            "Great ideas are fine, but great results are what counts.",
            "If you can guess what I'm about to do, that means I've run out of imagination."
        ],
        "Ideal": [
            "Guild. My guild is all that really matters. (Any)",
            "Creativity. Half the world's troubles come from stodgy thinking, stuck in the past. We need innovative solutions. (Chaotic)",
            "Discovery. Every experiment has the potential to reveal more secrets of the multiverse. (Any)",
            "Science. A rigorous application of logical principles and protocols will lead us toward progress more surely than any belief system. (Lawful)",
            "Fun. I love my job! Despite the dangerous working conditions, there's nothing I'd rather do. (Chaotic)",
            "Power. Someday I'll find or create the magic that will make me the most powerful being in Ravnica. (Evil)"
        ],
        "Bond": [
            "I have dedicated my life to finding a solution to a scientific problem.",
            "I'll never forget the laboratory where I learned my skills, or the other attendants who learned alongside me.",
            "I'm convinced it was sabotage that destroyed my first laboratory and killed many of my friends, and I seek revenge against whoever did it.",
            "I have the schematics for an invention that I hope to build one day, once I have the necessary resources.",
            "A fellow student and I are racing to solve the same scientific puzzle.",
            "I would do anything the guildmaster told me to do."
        ],
        "Flaw": [
            "If there's a plan, I'll probably forget it. If I don't forget it, I'll probably ignore it.",
            "I get bored easily, and if nothing is happening I'll make something happen.",
            "Nothing is ever simple, and if it seems simple, I'll find a way to make it complicated.",
            "I tend to ignore sleep for days when I'm conducting research, often at the expense of my own health and safety.",
            "I'm convinced there's not a soul in Ravnica, except maybe the great Niv-Mizzet, who can match my boundless intellect.",
            "I'm incapable of admitting a flaw in my logic."
        ],
        "Gear": [
            "Izzet Insignia",
            "Set of Artisan's Tools",
            "Charred and Twisted Remains of a Failed Experiment",
            "Hammer",
            "Block and Tackle",
            "Set of Common Clothes",
            "5 GP"
        ]
    },
    "Orzhov Representative": {
        "Trait": [
            "I am always willing to act in accordance with the financial incentive offered.",
            "Debts are never meant to be forgiven.",
            "I am accustomed to enjoying the finest pleasures money can buy.",
            "No one could doubt that I am a cut above the masses of pitiful peasants that infest the city.",
            "I can't stand to spend a zib more than necessary to purchase what I need.",
            "I hate it when people try to make light of a serious situation.",
            "I want to make sure everyone is aware of how wealthy, powerful, and important I am.",
            "I can't think of anything to look forward to."
        ],
        "Ideal": [
            "Guild. My guild is all that really matters. (Any)",
            "Wealth. I will do whatever it takes to become as rich as the oligarchs. (Evil)",
            "Power. One day, I will be the one giving orders. (Evil)",
            "Prestige. I want to be admired, respected, feared, or even hated for my position and wealth. (Evil)",
            "Stability. The economy functions best when chaos is kept under control and everyone knows their place. (Lawful)",
            "Eternity. I want to live forever - in the flesh as long as possible, and as a spirit afterward. (Any)"
        ],
        "Bond": [
            "The unbearable weight of my debt has driven me to desperation.",
            "I'm duty-bound to obey the dictates of an ancestor on the Ghost Council.",
            "I value my worldly goods more highly than my mortal life.",
            "An oligarch publicly humiliated me, and I will exact revenge on that whole family.",
            "My faith in the Obzedat never wavers.",
            "I want to prove myself more worthy than an older sibling and thereby ensure that I inherit a greater share of my parents' wealth."
        ],
        "Flaw": [
            "I hold a scandalous secret that could ruin my family forever - but could also earn me the favor of the Ghost Council.",
            "I'm convinced that everyone I know is plotting against me.",
            "I'll brave any risk if the monetary reward is great enough.",
            "I am convinced that I am far more important than anyone else is willing to acknowledge.",
            "I have little respect for anyone who isn't wealthy.",
            "I'll take any opportunity to steal from wealthier people, even for worthless trinkets."
        ],
        "Gear": [
            "Orzhov Insignia",
            "Foot-Long Chain of 10 Gold Coins",
            "Set of Fine Clothes",
            "1 PP"
        ]
    },
    "Rakdos Cultist": {
        "Type of Performer": [
            "Spikewheel acrobat",
            "Lampooning satirist",
            "Fire juggler",
            "Marionette puppeteer",
            "Pain artist",
            "Noise musician",
            "Nightmare clown",
            "Master of ceremonies"
        ],
        "Trait": [
            "I revel in mayhem, the more destructive the better.",
            "When violence breaks out, I lose myself in rage, and it's sometimes hard to stop.",
            "Everything is funny to me, and the most hilarious and bloodiest things leave me cackling with sadistic glee.",
            "I derive genuine pleasure from the pain of others.",
            "I enjoy testing other people's patience.",
            "I can't stand it when things are predictable, so I like to add a little chaos to every situation.",
            "I throw my weight around to make sure I get my way.",
            "I enjoy breaking delicate works of art. And fingers, which are sort of the same."
        ],
        "Ideal": [
            "Guild. My guild is all that really matters. (Any)",
            "Hedonism. Death comes for everyone, so take as much pleasure as you can from every moment of life. (Neutral)",
            "Creativity. I strive to find more ways to express my art through pain - my own as well as others'. (Chaotic)",
            "Freedom. No one tells me what to do. (Chaotic)",
            "Equality. I want to see Ravnica remade, with no guilds and no hierarchies. (Chaotic)",
            "Spectacle. People are inspired by the greatness they see in art. (Any)"
        ],
        "Bond": [
            "I have belonged to the same performance troupe for years, and these people mean everything to me.",
            "A blood witch told me I have a special destiny to fulfill, and I'm trying to figure out what it is.",
            "I'm secretly hoping that I can change the cult from the inside, using my influence to help rein in the wanton violence.",
            "I own something that Rakdos once touched (it's seared black at the spot), and I cherish it.",
            "I want to be better at my chosen form of performance than any other member of my troupe.",
            "I am devoted to Rakdos and live to impress him."
        ],
        "Flaw": [
            "My family is prominent in another guild. I enjoy my wild life, but I don't want to embarrass them.",
            "I couldn't hide my emotions and opinions even if I wanted to.",
            "I throw caution to the wind.",
            "I resent the rich and powerful.",
            "When I'm angry, I lash out in violence.",
            "There's no such thing as too much pleasure."
        ],
        "Gear": [
            "Rakdos Insignia",
            "Musical Instrument",
            "Costume",
            "Hooded Lantern",
            "10-foot long Chain with Spiked Links",
            "Tinderbox",
            "10 Torches",
            "Set of Common Clothes",
            "10 GP"
        ]
    },
    "Selesnya Initiate": {
        "Trait": [
            "I never raise my voice or lose my temper.",
            "I feel the pains and joys of everyone around me, friend or foe.",
            "I would rather make a friend than thwart an enemy.",
            "I'm always straining to peer into another reality that seems to be just beyond my senses.",
            "I'm uneasy if I can't see plants growing or feel soil beneath my feet.",
            "Seeing illness or injury in any creature saddens me.",
            "I have much to be proud of, but I am still just one strand in the grand, interwoven tapestry of life.",
            "Nature offers rich and abundant metaphors for understanding the complexities of life."
        ],
        "Ideal": [
            "Guild. My guild is all that really matters. (Any)",
            "Harmony. Nothing is more beautiful than voices and actions aligned in common purpose. (Good)",
            "Order. Like a well-pruned tree, society thrives when everything is kept in good order. (Lawful)",
            "Life. Preserving life and nature is always a worthwhile endeavor. (Good)",
            "Humility. Ambition and pride are the roots of strife. (Good)",
            "Evangelism. When all have joined the Selesnya Conclave, Ravnica will finally know peace. (Any)"
        ],
        "Bond": [
            "I would give my life in the defense of the small enclave where I first encountered Mat'Selesnya.",
            "I love beasts and plants of all kinds, and am loath to harm them.",
            "A healer nursed me to recovery from a mortal illness.",
            "I'll sing the invitation of Mat'Selesnya with my dying breath.",
            "I cherish a leaf from Vitu-Ghazi that changes color with the seasons, even though it is no longer attached to the tree.",
            "Every member of the conclave is my kin, and I would fight for any one of them."
        ],
        "Flaw": [
            "I'm terrified of getting into a fight where my side is outnumbered.",
            "I assume that people mean well until they prove otherwise.",
            "I enjoy comfort and quiet, and prefer to avoid extra effort.",
            "I have a fierce temper that doesn't reflect the inner calm I seek.",
            "I'm convinced that everyone else in the conclave has a deeper connection to the Worldsoul than I do.",
            "I'm trying to atone for the life of crime I led before I joined the Selesnya, but I find it hard to give up my bad habits."
        ],
        "Gear": [
            "Selesnya Insignia",
            "Healer's Kit",
            "Robes",
            "Set of Common Clothes",
            "5 GP"
        ]
    },
    "Simic Scientist": {
        "Clade/Project": [
            "Hull Clade, focused on protection and durability",
            "Fin Clade, focused on movement",
            "Gyre Clade, focused on cyclical patterns and metamagic",
            "Guardian Project, focused on creating guard monsters and super soldiers",
            "Crypsis Project, focused on intelligence and counterintelligence",
            "Independent research in a new area"
        ],
        "Trait": [
            "I can't wait to see what I become next!",
            "I am convinced that everything inclines toward constant improvement.",
            "I'm eager to explain every detail of my most intricate experiments and theories to anyone who shows the least bit of interest.",
            "I assume that everyone needs even the most basic concepts explained to them.",
            "I describe everything that happens as if it were going into my research notes (and it often is).",
            "I am insatiably curious about the seemingly infinite forms and adaptations of life.",
            "I can't resist prying into anything forbidden, since it must be terribly interesting.",
            "I employ a highly technical vocabulary to avoid imprecision and ambiguity in my communication."
        ],
        "Ideal": [
            "Guild. My guild is all that really matters. (Any)",
            "Change. All life is meant to progress toward perfection, and our work is to hurry it along - no matter what must be upended along the way. (Chaotic)",
            "Knowledge. Understanding the world is more important than what you do with your knowledge. (Neutral)",
            "Greater Good. I want to reshape the world into higher forms of life so that all can enjoy evolution. (Good)",
            "Logic. It's foolish to let emotions and principles interfere with the conclusions of logic. (Lawful)",
            "Superiority. My vast intellect and strength are directed toward increasing my sway over others. (Evil)"
        ],
        "Bond": [
            "I helped create a krasis that I love like a pet and would carry with me everywhere   except it's the size of a building, and it might eat me.",
            "In my laboratory, I discovered something that I think could eliminate half the life on Ravnica.",
            "The other researchers in my clade are my family - a big, eccentric family including members and parts of many species.",
            "The laboratory where I did my research contains everything that is precious to me.",
            "I will get revenge on the shortsighted fool who killed my precious krasis creation.",
            "Everything I do is an attempt to impress someone I love."
        ],
        "Flaw": [
            "I have a rather embarrassing mutation that I do everything I can to keep hidden.",
            "I'm more interested in taking notes on monstrous anatomy than in fighting monsters.",
            "Every social situation I'm in seems to lead to my asking rude personal questions.",
            "I'm supremely confident in my ability to adapt to any situation and handle any danger.",
            "I'll take any risk to earn recognition for my scientific brilliance.",
            "I have a tendency to take shortcuts in my research and any other tasks I have to complete."
        ],
        "Gear": [
            "Simic Insignia",
            "Set of Common Clothes",
            "Book of Research Notes",
            "Ink Pen",
            "Bottle of Squid Ink",
            "Flask of Oil",
            "Vial of Acid",
            "Vial of Fish Scales",
            "Vial of Seaweed",
            "Vial of Jellyfish Stingers",
            "Glass Bottle of Unidentified Slime",
            "10 GP"
        ]
    },
    "Grinner": {
        "Favorite Code-Song": [
            "Zan's Comin' Back. This hopeful Tal'Dorei folk song declares the inevitable return of a just ruler. Use it to seek out potential allies.",
            "Blow Fire Down the Coast. A rowdy fighting song from the Clovis Concord, this ditty talks of blasting up pirate ships. Use it to encourage battle.",
            "Hush! Onward Come the Dragons. This Tal'Dorei folk song recounts the terror in the days after the invasion of the red dragon called the Cinder King. Use it to encourage caution in speech and deed.",
            "Let the Sword Grow Rust. An antiwar anthem from Marquet, this song has uncertain origins. Use it to help quell violent encounters.",
            "Drink Deep, Li'l Hummingbird. A drinking rondo from the Menagerie Coast, this song tells the tale of a young person who drinks so heavily that they awaken to find they've stowed away on a ship. Use it to encourage alertness in social situations.",
            "Dirge for the Emerald Fire. This elven song supposedly has thousands of obscure verses. Use the first two verses to spread news of death or defeat."
        ],
        "Trait": [
            "I love the spotlight. Everyone, look at me!",
            "Give me a drink and I'm your friend.",
            "Talk to me about yourself. I'm a hell of a listener.",
            "I hate to start fights, but I love to finish them.",
            "I can't sit still.",
            "I'm always humming an old tune from my past.",
            "When I don't have a reason to smile, I'm miserable.",
            "I'm lucky like you wouldn't believe."
        ],
        "Ideal": [
            "Revolution. Tyrants must fall, no matter the cost. (Chaotic)",
            "Compassion. The only way to make a better world is to perform small kindnesses. (Good)",
            "Justice. A nation built upon just foundations will uphold freedom for all. (Law)",
            "Expression. Music, joy, and laughter are the keys to freedom. (Good)",
            "Self-Determination. People should be free to do as they please. (Chaotic)",
            "Vigilance. A free people must be carefully taught, lest they be misled. (Neutral)"
        ],
        "Bond": [
            "I lost someone important to an agent of the Dwendalian Empire. That regime will fall.",
            "The first people to be hurt by this war will be the common folk. I need to protect them.",
            "Music helped me through a dark time in my life. Now, I'll use music to change the world.",
            "I will be known as the greatest spy who ever lived.",
            "All life is precious to me. I know I can change the world without taking a humanoid life.",
            "The elite in their ivory towers don't understand how we suffer. I intend to show them."
        ],
        "Flaw": [
            "I've never lied once in my life. What? No, I'm not crossing my fingers!",
            "I do everything big! Subtlety? I don't know the meaning of subtlety! Oh, that's a problem?",
            "Being a spy in wartime is painful. I've seen so much suffering, I think I'm losing my mind.",
            "I can't focus on my mission. I just want to carouse and sing and play!",
            "Yeah, that's my name. Yeah, I'm a Grinner spy. Who cares about staying undercover?",
            "I can't afford to trust anyone. Not. Anyone."
        ],
        "Gear": [
            "Set of Fine Clothes",
            "Disguise Kit",
            "Musical Instrument",
            "Gold-Plated Ring of a Smiling Face",
            "15 GP"
        ]
    },
    "Volstrucker Agent": {
        "Tragedy": [
            "Familicide. Through deceit or manipulation, the Volstrucker convinced you to slaughter your own family.",
            "Amnesia. You were forced to study magic so potent that it strained your mind beyond mortal limits, stealing away the memories of your past.",
            "Capture. You were captured and tortured by agents of the Kryn Dynasty and barely escaped.",
            "Starvation. A terrible blight afflicted your rural village, and many of your friends and family members starved to death. You survived, but only barely.",
            "Disfigurement. One of your arcane experiments went wrong and scarred or dismembered you so gravely that others now shun you. Only the Volstrucker showed you kindness after that day.",
            "Vicissitude. You were once the scion of a wealthy family who lost their entire fortune in the blink of an eye."
        ],
        "Trait": [
            "I prefer to keep my thoughts to myself.",
            "I indulge vice in excess to quiet my conscience.",
            "I've left emotion behind me, I'm now perfectly placid.",
            "Some event from the past keeps worming its way into my mind, making me restless.",
            "I always keep my word - except when I'm commanded to break it.",
            "I laugh off insults and never take them personally."
        ],
        "Ideal": [
            "Order. The will of the crown is absolute. (Law)",
            "True Loyalty. The Cerberus Assembly is greater than any power, even the crown. (Any)",
            "Death. The penalty for disloyalty is death. (Evil)",
            "Determination. I cannot fail. Not ever. (Neutral)",
            "Fear. People should not respect power. They should fear it. (Evil)",
            "Escape. The Volstrucker are pure evil! I can't atone for what I've done for them, but I can escape with my life. (Any)"
        ],
        "Bond": [
            "The job is all that matters. I will see it through.",
            "My orders are important, but my comrades are worth more than anything. I would die for them.",
            "Everything I've done, I've done to protect someone close to me.",
            "If the empire falls, all of civilization falls with it. I will hold back the chaos and barbarism at any cost."
        ],
        "Flaw": [
            "I drink to dull the pain in the back of my head.",
            "I go a bit mad when I see blood.",
            "I can hear the voices of everyone I've killed. I see their faces. I can't be free of these ghosts.",
            "Fear is a powerful motivator. I will do whatever it takes to prevent those who know what I am from seeing me fail, and those I care about from knowing what I am."
        ],
        "Gear": [
            "Set of Common Clothes",
            "Black Cloak with Hood",
            "Poisoner's Kit",
            "10 GP"
        ]
    }
};

export default backgrounds;