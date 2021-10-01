import random

# list of 5e races
races = {
    'Player\'s Handbook':
        ['Dragonborn','Hill Dwarf', 'Mountain Dwarf', 'Drow Elf', 'High Elf', 'Wood Elf',
         'Forest Gnome', 'Rock Gnome', 'Half-Elf', 'Lightfoot Halfling', 'Stout Halfling',
         'Half-Orc', 'Human', 'Variant Human', 'Tiefling'],
    'Explorer\'s Guide to Wildemount':
        ['Orc of Exandria'],
    'Mythic Odysseys of Theros':
        ['Leonin', 'Satyr'],
    'The Wild Beyond the Witchlight':
        ['Fairy', 'Harengon'],
    'Elemental Evil Player\'s Companion':
        ['Aarakocra', 'Genasi', 'Goliath'],
    'Volo\'s Guide to Monsters':
        ['Aasimar', 'Bugbear', 'Firbolg', 'Goblin', 'Hobgoblin', 'Kenku',
         'Kobold', 'Lizardfolk', 'Orc', 'Tabaxi', 'Triton', 'Yuan-Ti Pureblood'],
    'Sword Coast Adventurer\'s Guide':
        ['Feral Tiefling'],
    'Eberron: Rising from the Last War':
        ['Changeling', 'Kalashtar', 'Orc of Eberron', 'Shifter', 'Warforged'],
    'Guildmaster\'s Guide to Ravnica':
        ['Centaur', 'Loxodon', 'Minotaur', 'Simic Hybrid', 'Vedalken']
    }

# randomly select race and return
def generate_race():
    race_source = random.choice(list(races.keys()))
    char_race = random.choice(races[race_source])
    return char_race, race_source
