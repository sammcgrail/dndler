# import other generators
from generate_proficiency import *
from generate_background import *
from generate_equipment import *
from generate_spells import *
from generate_stats import *
from generate_class import *
from generate_race import *
from generate_name import *
from generate_pdf import *
import pandas as pd
import datetime
import os

# master generator
def generate_all(char_level=1, background_choice='any', class_choice='any', weighted=False):
    # empty character dict that gets filled in by individual generators
    char_dict = {'race':'',
                 'name':'',
                 'class':'',
                 'level':char_level,
                 'hitpoints': 0,
                 'armorclass': 0,
                 'background':{},
                 'stats':{},
                 'features':[],
                 'proficiency':{},
                 'equipment':[],
                 'spells':{},
                 'weapons':{},
                 'sources':{}}
    # other initializations
    class_source = ''
    race_source = ''
    background_source = ''
    base_stats = {}
    race_bonuses = {}
    total_stats = {}
    total_modifiers = {}
    # assignments begin here
    char_dict['race'], race_source = generate_race(toggle_array=[1,1,1,1,1,1,1,1,1])
    char_dict['name'] = generate_name()
    char_dict['class'], class_source = generate_class(class_choice)
    char_dict['background'], background_source = generate_background(background_choice)
    char_dict['equipment'] = generate_equipment(char_dict['class'], char_dict['background']['Title'])
    char_dict['features'] = get_features(char_dict['class'], char_dict['level'])
    if weighted==False:
        base_stats, race_bonuses, total_stats, total_modifiers = generate_unweighted_stats(char_dict['race'])
    elif weighted==True:
        base_stats, race_bonuses, total_stats, total_modifiers = generate_weighted_stats(char_dict['race'], char_dict['class'])
    char_dict['stats'] = {'Base Stats':base_stats, 'Race Bonuses':race_bonuses, 'Total Stats':total_stats, 'Modifiers':total_modifiers}
    char_dict['hitpoints'] = calc_hitpoints(total_modifiers['CON'], char_dict['class'], char_dict['level'])
    char_dict['proficiency'] = generate_proficiency(total_modifiers, char_dict['class'], char_dict['level'])
    char_dict['armorclass'] = calc_armorclass(total_modifiers, char_dict['class'], char_dict['proficiency']['Armor'], char_dict['equipment'])
    char_dict['weapons'] = fill_weapon_slots(total_modifiers, char_dict['equipment'], char_dict['level'])
    char_dict['sources'] = {'Race':race_source, 'Class':class_source, 'Background':background_source}
    if char_dict['class'] in ['Artificer', 'Bard', 'Cleric', 'Druid', 'Paladin', 'Ranger', 'Sorcerer', 'Warlock', 'Wizard']:
        char_dict['spells'] = generate_spells(total_modifiers, char_dict['class'], char_dict['level'])
    # return filled character dict
    return char_dict

# columns to use when saving character
# 18 values
char_cols = ['Name', 'Race', 'Class', 'Level', 'Background', 'Specialty',
             'Trait', 'Ideal', 'Bond', 'Flaw', 'Base Stats', 'Total Stats', 'Features',
             'Spells Known', 'Equipment', 'Race Source', 'Class Source', 'Background Source']

# save a character while using dndler
# 18 values
def save_char(char_dict):
    new_row = [char_dict['name'],
               char_dict['race'],
               char_dict['class'],
               char_dict['level'],
               char_dict['background']['Title'],
               char_dict['background'][list(char_dict['background'].keys())[1]],
               char_dict['background']['Trait'],
               char_dict['background']['Ideal'],
               char_dict['background']['Bond'],
               char_dict['background']['Flaw'],
               list(char_dict['stats']['Base Stats'].values()),
               list(char_dict['stats']['Total Stats'].values()),
               char_dict['features'],
               list(flatten(char_dict['spells'].values())),
               char_dict['equipment'],
               char_dict['sources']['Race'],
               char_dict['sources']['Class'],
               char_dict['sources']['Background']
               ]
    return new_row

# export all saved characters while using dndler
def export_chars(all_chars):
    dt = datetime.datetime.now()
    dt_str = dt.strftime("%b.%d.%y_%H.%M.%S")
    df = pd.DataFrame(all_chars)
    df.columns = char_cols
    df.to_csv('all_chars/all_chars_'+dt_str+'.csv', index=False)

# pdf generator
def print_pdf(extended=True):
    if extended == True:
        char_dict_to_pdf_ext(generate_all(random.randint(1,5), weighted=True))
        print('Character Sheet Created')
    else:
        char_dict_to_pdf(generate_all(random.randint(1,5), weighted=True))
        print('Character Sheet Created')


# display the details of a character
def print_char(char_dict):
    os.system('cls')
    print('========================')
    print('|         THE          |')
    print('|        DNDLER        |')
    print('========================')
    print('')
    print('Hello, ' + str(char_dict['name']) + '.')
    print('')
    print('You are a(n) ' + str(char_dict['race']) + ' ' + str(char_dict['class']) + '.')
    print('')
    print('Current Level: ' + str(char_dict['level']))
    print(str(char_dict['hitpoints']) + ' HP')
    print(str(char_dict['armorclass']) + ' AC')
    print('========================')
    print('                STR DEX CON INT WIS CHA')
    print('Your Stats are: ' + str(list(char_dict['stats']['Total Stats'].values())))
    print('')
    print('Your Modifiers are: ' + str(list(char_dict['stats']['Modifiers'].values())))
    print('========================')
    print('Your Class Features:')
    for feature in char_dict['features']:
        print(feature)
    print('========================')
    print('You Are Proficient With:')
    print('Armor: ' + str(char_dict['proficiency']['Armor']))
    print('Weapons: ' + str(char_dict['proficiency']['Weapons']))
    print('Tools: ' + str(char_dict['proficiency']['Tools']))
    print('Skills: ' + str(char_dict['proficiency']['Proficient Skills']))
    print('========================')
    print('Your Story So Far:')
    print('Your Background is as a(n) ' + char_dict['background']['Title'])
    print('')
    if list(char_dict['background'])[1] != '':
        extra = list(char_dict['background'])[1]
        desc = char_dict['background'][extra]
        print(extra + ': ' + desc)
    print('Trait: ' + '\"' + char_dict['background']['Trait'] + '\"')
    print('Ideal: ' + '\"' + char_dict['background']['Ideal'] + '\"')
    print('Bond: ' + '\"' + char_dict['background']['Bond'] + '\"')
    print('Flaw: ' + '\"' + char_dict['background']['Flaw'] + '\"')
    print('========================')
    print('Your Gear Contains:')
    for item in char_dict['equipment']:
        print(item)
    print('========================')
    print('Your Weapons:')
    print('Weapon 1: ' + char_dict['weapons']['Weapon 1']['Name'] + ' | ' + char_dict['weapons']['Weapon 1']['AtkBonus'] + ' | ' + char_dict['weapons']['Weapon 1']['Damage'])
    print('Weapon 2: ' + char_dict['weapons']['Weapon 2']['Name'] + ' | ' + char_dict['weapons']['Weapon 2']['AtkBonus'] + ' | ' + char_dict['weapons']['Weapon 2']['Damage'])
    print('Weapon 3: ' + char_dict['weapons']['Weapon 3']['Name'] + ' | ' + char_dict['weapons']['Weapon 3']['AtkBonus'] + ' | ' + char_dict['weapons']['Weapon 3']['Damage'])
    print('========================')
    if char_dict['spells'] != {}:
        print('Your Spell List:')
        print('')
        for spell_levels in list(char_dict['spells'].keys()):
            if char_dict['spells'][spell_levels] != []:
                print(spell_levels + ': ')
                for magicks in char_dict['spells'][spell_levels]:
                    print(magicks)
                print('')
        print('========================')
    print('Sourcebooks: ')
    print('Race: ' + char_dict['sources']['Race'])
    print('Class: ' + char_dict['sources']['Class'])
    print('Background: ' + char_dict['sources']['Background'])
    print('========================')

# generate character with weighted stats and level 1 - 5
# print_char(generate_all(random.randint(1,10), weighted=True))
