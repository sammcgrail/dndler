import pandas as pd
import random

# import races csv
def import_races():
    races_df = pd.read_csv('data/races.csv')
    return races_df

# create races df
races_df = import_races()

# PHB, Eberron, Sword Coast, Volo's
# [1,0,0,0,0,1,1,0,1]

# apply filter
def apply_sourcebook_filter(toggle_array=[1,1,1,1,1,1,1,1,1]):
    active_sourcebooks = []
    # 9 sourcebooks
    race_sourcebooks = ['Eberron: Rising from the Last War',
                        'Elemental Evil Player\'s Companion',
                        'Explorer\'s Guide to Wildemount',
                        'Guildmaster\'s Guide to Ravnica',
                        'Mythic Odysseys of Theros',
                        'Player\'s Handbook',
                        'Sword Coast Adventurer\'s Guide',
                        'The Wild Beyond the Witchlight',
                        'Volo\'s Guide to Monsters']
    sourcebook_toggle = dict(zip(race_sourcebooks, toggle_array))
    for sbook in list(sourcebook_toggle.keys()):
        if sourcebook_toggle[sbook] == 1:
            active_sourcebooks.append(sbook)
    return active_sourcebooks

# (k, v) of sourcebooks, races
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

# randomly select sourcebook, then race within it, and return
def generate_race(toggle_array=[1,1,1,1,1,1,1,1,1]):
    active_sourcebooks = apply_sourcebook_filter(toggle_array)
    race_source = random.choice(active_sourcebooks)
    char_race = random.choice(races[race_source])
    return char_race, race_source
