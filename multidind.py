import random
import numpy as np
import pandas as pd
from defineclasses import * # roll_artificer, roll_barbarian, roll_bard, roll_cleric, roll_druid, roll_fighter, roll_monk, roll_paladin, roll_ranger, roll_rogue, roll_sorcerer, roll_warlock, roll_wizard
from names import import_names
from backgrounds import import_backgrounds
import datetime

# iterator and path
x = 0
path = r'C:\Users\themi\Documents\Python Scripts'

# empty dataframe to be filled
all_chars = pd.DataFrame(columns = [
    'Name', 'Class',
    'Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma',
    'Race', 'Background', 'Unique', 'Trait', 'Ideal', 'Bond', 'Flaw', 'Notes'
])

# empty character skeleton to be filled
character = {
    'name': '',
    'stats': {},
    'class': '',
    'race': '',
    'background': {},
    'notes': ''
}

# initialize some stuff
# abbreviated ability scores
ability_scores = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA']

# where base stats are stored
temp = []

# list of 5e classes
classes = [
    'Artificer', 'Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter',
    'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'
]

# list of 5e races
races = ['Dragonborn',
         'Hill Dwarf', 'Mountain Dwarf',
         'Drow Elf', 'High Elf', 'Wood Elf',
         'Forest Gnome', 'Rock Gnome',
         'Half-Elf',
         'Lightfoot Halfling', 'Stout Halfling',
         'Half-Orc',
         'Human', 'Variant Human',
         'Tiefling']

# race bonuses as np arrays
race_bonuses = {
    'Dragonborn': np.array([0, 2, 0, 0, 0, 1]),
    'Hill Dwarf': np.array([0, 0, 2, 0, 1, 0]),
    'Mountain Dwarf': np.array([2, 0, 2, 0, 0, 0]),
    'Drow Elf': np.array([0, 2, 0, 0, 0, 1]),
    'High Elf': np.array([0, 2, 0, 1, 0, 0]),
    'Wood Elf': np.array([0, 2, 0, 0, 1, 0]),
    'Forest Gnome': np.array([0, 1, 0, 2, 0, 0]),
    'Rock Gnome': np.array([0, 0, 1, 2, 0, 0]),
    'Half-Elf': np.array([0, 0, 0, 0, 0, 2]), # two additional +1's
    'Lightfoot Halfling': np.array([0, 2, 0, 0, 0, 1]),
    'Stout Halfling': np.array([0, 2, 1, 0, 0, 0]),
    'Half-Orc': np.array([2, 0, 1, 0, 0, 0]),
    'Human': np.array([1, 1, 1, 1, 1, 1]),
    'Variant Human': np.array([0, 0, 0, 0, 0, 0]), # choose two +1's
    'Tiefling': np.array([0, 0, 0, 1, 0, 2])
}

# import dict of backgrounds from csv
backgrounds = import_backgrounds()

# dict of names by race
male_first_names, female_first_names, last_names = import_names()

# clear character object
def reset_character():
    global character
    character = {
        'name': 'Buttnoob the Pro',
        'stats': {},
        'class': '',
        'race': '',
        'background': {
            'title': '',
            'trait': '',
            'ideal': '',
            'bond': '',
            'flaw': '',
        },
        'notes': ''
}

# here begins the randomization/customization

def roll_class():
    character['class'] = random.choice(classes)

def calculate_stats():
    global temp
    base_stats = np.array(temp)
    if character['race'] != '':
        buffed_stats = base_stats + race_bonuses[character['race']]
    else :
        buffed_stats = base_stats
    character['stats'] = dict(zip(ability_scores, buffed_stats))

def calculate_bonuses():
    bonuses = dict(zip(ability_scores, list(race_bonuses[character['race']])))
    for k,v in list(bonuses.items()):
        if v == 0:
            del bonuses[k]
    print("Race bonus provides:")
    for stat in bonuses:
        if character['race'] == 'Human':
            print("All stats +1 (included)")
            return
        else :
            print(str(stat) + " +" + str(bonuses[stat]) + " (included)")

def roll_class_stats():
    global temp
    if character['class'] == 'Artificer':
        temp = roll_artificer()
        calculate_stats()
    elif character['class'] == 'Barbarian':
        temp = roll_barbarian()
        calculate_stats()
    elif character['class'] == 'Bard':
        temp = roll_bard()
        calculate_stats()
    elif character['class'] == 'Cleric':
        temp = roll_cleric()
        calculate_stats()
    elif character['class'] == 'Druid':
        temp = roll_druid()
        calculate_stats()
    elif character['class'] == 'Fighter':
        temp = roll_fighter()
        calculate_stats()
    elif character['class'] == 'Monk':
        temp = roll_monk()
        calculate_stats()
    elif character['class'] == 'Paladin':
        temp = roll_paladin()
        calculate_stats()
    elif character['class'] == 'Ranger':
        temp = roll_ranger()
        calculate_stats()
    elif character['class'] == 'Rogue':
        temp = roll_rogue()
        calculate_stats()
    elif character['class'] == 'Sorcerer':
        temp = roll_sorcerer()
        calculate_stats()
    elif character['class'] == 'Warlock':
        temp = roll_warlock()
        calculate_stats()
    elif character['class'] == 'Wizard':
        temp = roll_wizard()
        calculate_stats()

def roll_class_and_stats():
    roll_class()
    roll_class_stats()

def roll_race():
    character['race'] = random.choice(races)
    if character['race'] == 'Half-Elf':
        character['notes'] = '+1 to two ability scores other than CHA'
    elif character['race'] == 'Variant Human':
        character['notes'] = '+1 to any two ability scores'
    else :
        character['notes'] = ''
    calculate_stats()

def roll_background():
    character['background'] = {}
    choice = random.choice(list(backgrounds.keys()))
    character['background']['title'] = choice
    for key in backgrounds[choice]:
        character['background'][key] = random.choice(backgrounds[choice][key])

def roll_name_male():
    firstname = ''
    lastname = ''
    if character['race'] == 'Dragonborn':
        firstname = random.choice(list(male_first_names['Dragonborn']))
        rand_race = random.choice(list(male_first_names.keys()))
        lastname = random.choice(list(last_names[rand_race]))
    elif character['race'] in ['Hill Dwarf', 'Mountain Dwarf']:
        firstname = random.choice(list(male_first_names['Dwarf']))
        lastname = random.choice(list(last_names['Dwarf']))
    elif character['race'] in ['Drow Elf', 'High Elf', 'Wood Elf']:
        firstname = random.choice(list(male_first_names['Elf']))
        lastname = random.choice(list(last_names['Elf']))
    elif character['race'] in ['Forest Gnome', 'Rock Gnome']:
        rand_race = random.choice(['Dwarf', 'Human', 'Halfling'])
        firstname = random.choice(list(male_first_names[rand_race]))
        rand_race = random.choice(['Dwarf', 'Human', 'Halfling'])
        lastname = random.choice(list(last_names[rand_race]))
    elif character['race'] == 'Half-Elf':
        rand_race = random.choice(['Elf', 'Human'])
        firstname = random.choice(list(male_first_names[rand_race]))
        rand_race = random.choice(['Elf', 'Human'])
        lastname = random.choice(list(last_names[rand_race]))
    elif character['race'] in ['Lightfoot Halfling', 'Stout Halfling']:
        firstname = random.choice(list(male_first_names['Halfling']))
        lastname = random.choice(list(last_names['Halfling']))
    elif character['race'] == 'Half-Orc':
        rand_race = random.choice(['Tiefling', 'Dragonborn', 'Human'])
        firstname = random.choice(list(male_first_names[rand_race]))
        rand_race = random.choice(['Tiefling', 'Human'])
        lastname = random.choice(list(last_names[rand_race]))
    elif character['race'] in ['Human', 'Variant Human']:
        firstname = random.choice(list(male_first_names['Human']))
        lastname = random.choice(list(last_names['Human']))
    elif character['race'] == 'Tiefling':
        firstname = random.choice(list(male_first_names['Tiefling']))
        lastname = random.choice(list(last_names['Tiefling']))

    if isinstance(firstname, str) and isinstance(lastname, str):
        character['name'] = firstname + " " + lastname
    else :
        character['name'] = firstname

def roll_name_female():
    firstname = ''
    lastname = ''
    if character['race'] == 'Dragonborn':
        firstname = random.choice(list(female_first_names['Dragonborn']))
        rand_race = random.choice(list(female_first_names.keys()))
        lastname = random.choice(list(last_names[rand_race]))
    elif character['race'] in ['Hill Dwarf', 'Mountain Dwarf']:
        firstname = random.choice(list(female_first_names['Dwarf']))
        lastname = random.choice(list(last_names['Dwarf']))
    elif character['race'] in ['Drow Elf', 'High Elf', 'Wood Elf']:
        firstname = random.choice(list(female_first_names['Elf']))
        lastname = random.choice(list(last_names['Elf']))
    elif character['race'] in ['Forest Gnome', 'Rock Gnome']:
        rand_race = random.choice(['Dwarf', 'Human', 'Halfling'])
        firstname = random.choice(list(female_first_names[rand_race]))
        rand_race = random.choice(['Dwarf', 'Human', 'Halfling'])
        lastname = random.choice(list(last_names[rand_race]))
    elif character['race'] == 'Half-Elf':
        rand_race = random.choice(['Elf', 'Human'])
        firstname = random.choice(list(female_first_names[rand_race]))
        rand_race = random.choice(['Elf', 'Human'])
        lastname = random.choice(list(last_names[rand_race]))
    elif character['race'] in ['Lightfoot Halfling', 'Stout Halfling']:
        firstname = random.choice(list(female_first_names['Halfling']))
        lastname = random.choice(list(last_names['Halfling']))
    elif character['race'] == 'Half-Orc':
        rand_race = random.choice(['Tiefling', 'Dragonborn', 'Human'])
        firstname = random.choice(list(female_first_names[rand_race]))
        rand_race = random.choice(['Tiefling', 'Human'])
        lastname = random.choice(list(female_first_names[rand_race]))
    elif character['race'] in ['Human', 'Variant Human']:
        firstname = random.choice(list(female_first_names['Human']))
        lastname = random.choice(list(female_first_names['Human']))
    elif character['race'] == 'Tiefling':
        firstname = random.choice(list(female_first_names['Tiefling']))
        lastname = random.choice(list(female_first_names['Tiefling']))

    if isinstance(firstname, str) and isinstance(lastname, str):
        character['name'] = firstname + " " + lastname
    else :
        character['name'] = firstname

def roll_name():
    gender = random.choice(['M', 'F'])
    if gender == 'M':
        roll_name_male()
    elif gender == 'F':
        roll_name_female()

def roll_new_char():
    roll_class_and_stats()
    roll_race()
    roll_background()
    roll_name()

while x < 1000:
    roll_new_char()
    nextrow = [
        character['name'], character['class'],
        character['stats']['STR'], character['stats']['DEX'], character['stats']['CON'], character['stats']['INT'], character['stats']['WIS'], character['stats']['CHA'],
        character['race'], character['background']['title'], '', character['background']['Trait'], character['background']['Ideal'], character['background']['Bond'], character['background']['Flaw'],
        character['notes']
    ]
    if 'Routine' in character['background'].keys():
        nextrow[10] = character['background']['Routine']
    elif 'Specialty' in character['background'].keys():
        nextrow[10] = character['background']['Specialty']
    elif 'Role' in character['background'].keys():
        nextrow[10] = character['background']['Role']
    elif 'Field of study' in character['background'].keys():
        nextrow[10] = character['background']['Field of study']
    elif 'Guild business' in character['background'].keys():
        nextrow[10] = character['background']['Guild business']
    elif 'Origin' in character['background'].keys():
        nextrow[10] = character['background']['Origin']
    all_chars.loc[len(all_chars)] = nextrow
    x += 1

# export csv
dt = datetime.datetime.now()
dt_str = dt.strftime("%b.%d.%y_%H.%M.%S")
all_chars.to_csv(path+'\\all_chars_'+dt_str+".csv", index=False)
