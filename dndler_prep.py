import random
import numpy as np
import pandas as pd
from defineclasses import *
from names import import_names
from backgrounds import import_backgrounds

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
        'name': '',
        'stats': {},
        'class': '',
        'race': '',
        'background': {},
        'notes': ''
}

# here begins the randomization/customization

def roll_class():
    char_class = random.choice(classes)
    return char_class

def calculate_stats():
    global temp
    base_stats = np.array(temp)
    if character['race'] != '':
        buffed_stats = base_stats + race_bonuses[character['race']]
    else :
        buffed_stats = base_stats
    return dict(zip(ability_scores, buffed_stats))

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
        character['stats'] = calculate_stats()
    elif character['class'] == 'Barbarian':
        temp = roll_barbarian()
        character['stats'] = calculate_stats()
    elif character['class'] == 'Bard':
        temp = roll_bard()
        character['stats'] = calculate_stats()
    elif character['class'] == 'Cleric':
        temp = roll_cleric()
        character['stats'] = calculate_stats()
    elif character['class'] == 'Druid':
        temp = roll_druid()
        character['stats'] = calculate_stats()
    elif character['class'] == 'Fighter':
        temp = roll_fighter()
        character['stats'] = calculate_stats()
    elif character['class'] == 'Monk':
        temp = roll_monk()
        character['stats'] = calculate_stats()
    elif character['class'] == 'Paladin':
        temp = roll_paladin()
        character['stats'] = calculate_stats()
    elif character['class'] == 'Ranger':
        temp = roll_ranger()
        character['stats'] = calculate_stats()
    elif character['class'] == 'Rogue':
        temp = roll_rogue()
        character['stats'] = calculate_stats()
    elif character['class'] == 'Sorcerer':
        temp = roll_sorcerer()
        character['stats'] = calculate_stats()
    elif character['class'] == 'Warlock':
        temp = roll_warlock()
        character['stats'] = calculate_stats()
    elif character['class'] == 'Wizard':
        temp = roll_wizard()
        character['stats'] = calculate_stats()

def roll_class_and_stats():
    character['class'] = roll_class()
    roll_class_stats()

def roll_race():
    char_race = random.choice(races)
    char_notes = ''
    if char_race == 'Half-Elf':
         char_notes = '+1 to two ability scores other than CHA'
    elif char_race == 'Variant Human':
        char_notes = '+1 to any two ability scores'
    calculate_stats()
    return char_race, char_notes

def roll_background():
    char_bg = {}
    choice = random.choice(list(backgrounds.keys()))
    char_bg['title'] = choice
    for key in backgrounds[choice]:
        char_bg[key] = random.choice(backgrounds[choice][key])
    return char_bg

def roll_background_details(bg):
    char_bg = {}
    char_bg['title'] = bg
    for key in backgrounds[bg]:
        char_bg[key] = random.choice(backgrounds[bg][key])
    return char_bg

def roll_name_male():
    firstname = ''
    lastname = ''
    if character['race'] == 'Dragonborn':
        firstname = random.choice(list(male_first_names['Dragonborn']))
        rand_race = random.choice(['Dragonborn', 'Human', 'Tiefling'])
        lastname = random.choice(list(last_names[rand_race]))
    elif character['race'] in ['Hill Dwarf', 'Mountain Dwarf']:
        firstname = random.choice(list(male_first_names['Dwarf']))
        lastname = random.choice(list(last_names['Dwarf']))
    elif character['race'] in ['Drow Elf', 'High Elf', 'Wood Elf']:
        firstname = random.choice(list(male_first_names['Elf']))
        lastname = random.choice(list(last_names['Elf']))
    elif character['race'] in ['Forest Gnome', 'Rock Gnome']:
        rand_race = random.choice(['Dwarf', 'Halfling', 'Gnome'])
        firstname = random.choice(list(male_first_names[rand_race]))
        rand_race = random.choice(['Dwarf', 'Halfling', 'Gnome'])
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
        rand_race = random.choice(['Tiefling', 'Dragonborn', 'Human', 'Orc'])
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
        return firstname + " " + lastname
    else :
        return firstname

def roll_name_female():
    firstname = ''
    lastname = ''
    if character['race'] == 'Dragonborn':
        firstname = random.choice(list(female_first_names['Dragonborn']))
        rand_race = random.choice(['Dragonborn', 'Human', 'Tiefling'])
        lastname = random.choice(list(last_names[rand_race]))
    elif character['race'] in ['Hill Dwarf', 'Mountain Dwarf']:
        firstname = random.choice(list(female_first_names['Dwarf']))
        lastname = random.choice(list(last_names['Dwarf']))
    elif character['race'] in ['Drow Elf', 'High Elf', 'Wood Elf']:
        firstname = random.choice(list(female_first_names['Elf']))
        lastname = random.choice(list(last_names['Elf']))
    elif character['race'] in ['Forest Gnome', 'Rock Gnome']:
        rand_race = random.choice(['Dwarf', 'Halfling', 'Gnome'])
        firstname = random.choice(list(female_first_names[rand_race]))
        rand_race = random.choice(['Dwarf', 'Halfling', 'Gnome'])
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
        rand_race = random.choice(['Tiefling', 'Dragonborn', 'Human', 'Orc'])
        firstname = random.choice(list(female_first_names[rand_race]))
        rand_race = random.choice(['Tiefling', 'Human'])
        lastname = random.choice(list(last_names[rand_race]))
    elif character['race'] in ['Human', 'Variant Human']:
        firstname = random.choice(list(female_first_names['Human']))
        lastname = random.choice(list(last_names['Human']))
    elif character['race'] == 'Tiefling':
        firstname = random.choice(list(female_first_names['Tiefling']))
        lastname = random.choice(list(last_names['Tiefling']))

    if isinstance(firstname, str) and isinstance(lastname, str):
        return firstname + " " + lastname
    else :
        return firstname

def roll_name():
    gender = random.choice(['M', 'F'])
    if gender == 'M':
        character['name'] = roll_name_male()
    elif gender == 'F':
        character['name'] = roll_name_female()

def roll_new_char():
    roll_class_and_stats()
    character['race'], character['notes'] = roll_race()
    character['background'] = roll_background()
    roll_name()
    introduce_character()

def roll_party_char():
    global character
    character = {
        'name': '',
        'stats': {},
        'class': '',
        'race': '',
        'background': {},
        'notes': ''
    }
    roll_class_and_stats()
    character['race'], character['notes'] = roll_race()
    character['background'] =roll_background()
    roll_name()
    return character

def roll_mob_char(bg_choice):
    global character
    character = {
        'name': '',
        'stats': {},
        'class': '',
        'race': '',
        'background': {},
        'notes': ''
    }
    roll_class_and_stats()
    character['race'], character['notes'] = roll_race()
    character['background'] = roll_background_details(bg_choice)
    roll_name()
    return character

def introduce_character():
    print('')
    print("Hello, " + character['name'] + ".")
    print('')
    print("You are a " + character['race'] + " " + character['class'] + ".")
    print('')
    print("Your stats are: ")
    print(character['stats'])
    print('')
    if character['race'] != '':
        calculate_bonuses()
    if character['notes'] != '':
        print(character['notes'])
    print('')
    print("Your Story So Far: ")
    print('')
    if 'Routine' in character['background'].keys():
        print("You are a " + character['background']['title'] + " who performs routines as a " + character['background']['Routine'] + ".")
    elif 'Specialty' in character['background'].keys():
        print("You are a " + character['background']['title'] + " whose specialty is as a " + character['background']['Specialty'] + ".")
    elif 'Role' in character['background'].keys():
        print("You are a " + character['background']['title'] + " whose primary role is as " + character['background']['Role'] + ".")
    elif 'Field of study' in character['background'].keys():
        print("You are a " + character['background']['title'] + " who contributes to academia as a " + character['background']['Field of study'] + ".")
    elif 'Guild business' in character['background'].keys():
        print("You are a " + character['background']['title'] + " who works hard dealing with " + character['background']['Guild business'] + ".")
    elif 'Origin' in character['background'].keys():
        print("You are an " + character['background']['title'] + " whose origins are as a " + character['background']['Origin'] + ".")
    else :
        print("You are a " + character['background']['title'] + ".")
        print('')
    for key in list(character['background'].keys())[1:]:
        if key in ['Routine', 'Specialty', 'Role', 'Field of study', 'Guild business', 'Origin']:
            print(' ')
        else :
            print(key.capitalize() + ": \"" + character['background'][key] + '\"')
    print('')
