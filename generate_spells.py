from features_and_spellcasting import *
import pandas as pd
import numpy as np
import random

# define spell import function
def import_spells():
    spells_df = pd.read_csv('data/spells.csv')
    spells_dict = {}
    for key_level in spells_df['Level'].unique():
        spells_dict[key_level] = {}
        spellcasters = list(spells_df[spells_df['Level']==key_level]['Class'].unique())
        for key_class in spellcasters:
            spells = list(spells_df[(spells_df['Level']==key_level) & (spells_df['Class']==key_class)]['Name'])
            spells_dict[key_level][key_class] = spells
    return spells_df, spells_dict

# import spells df and create dict of spell names by class and level
spells_df, spells_dict = import_spells()

# calculate proficiency bonus
def calc_proficiency_bonus(char_level):
    proficiency_bonus = 2
    if char_level >= 5:
        proficiency_bonus = 3
        if char_level >= 9:
            proficiency_bonus = 4
            if char_level >= 13:
                proficiency_bonus = 5
                if char_level >= 17:
                    proficiency_bonus = 6
    return proficiency_bonus

# pick num_spells of a given spell level available to given class
def pick_spells_of_level(num_spells, spell_level, classchoice):
    x = 0
    spells = []
    spell_options = list(spells_df[(spells_df['Level']==spell_level) & (spells_df['Class']==classchoice)]['Name'])
    while x < num_spells:
        next_choice = random.choice(spell_options)
        while next_choice in spells:
            next_choice = random.choice(spell_options)
        spells.append(next_choice)
        x+=1
    return spells

# calculating spell distribution based on number of known spells and slots available
def calculate_spell_distribution(modifiers, classchoice, char_level):
    str_mod, dex_mod, con_mod = modifiers['STR'], modifiers['DEX'], modifiers['CON']
    int_mod, wis_mod, cha_mod = modifiers['INT'], modifiers['WIS'], modifiers['CHA']
    spell_assignment_dict = {
    '1st Level':0,
    '2nd Level':0,
    '3rd Level':0,
    '4th Level':0,
    '5th Level':0,
    '6th Level':0,
    '7th Level':0,
    '8th Level':0,
    '9th Level':0
    }
    spells_already_assigned = 0
    if classchoice in ['Paladin','Ranger']:
        x = 1
    else:
        x = 0
    # mimic spell selection process during leveling, only pick spells of a level that has spell slots
    while x < char_level:
        spells_prepared, spells_known = calc_spells_known(modifiers, classchoice, x+1)
        spell_slots_table = spell_slots_available(classchoice, x+1)
        if classchoice == 'Warlock':
            highest_available = spell_slots_table[spell_slots_table['Level']==x+1].iloc[0]['Slot Level']
        else:
            highest_available = str(spell_slots_table.loc[spell_slots_table['Level']==x+1].replace('-', float('NaN')).dropna(axis=1)[0:1].iloc[:,-1:].columns[0])
        spell_assignment_dict[highest_available] = spell_assignment_dict[highest_available] + (spells_known - spells_already_assigned)
        #print('')
        #print('At Level ' + str(x+1))
        #print('Spells Prepared: ' + str(spells_prepared) + ' | ' + 'Spells Known: ' + str(spells_known))
        #print('Spells Already Assigned: ' + str(spells_already_assigned) + ' | '+ 'Spells Assigned Now: ' + str(spells_known - spells_already_assigned))
        #print('Highest Spell Slots Available: ' + highest_available)
        #print('')
        spells_already_assigned = sum(spell_assignment_dict.values())
        x+=1
    return spell_assignment_dict

# generate spell dictionary, requires modifiers, class, and level
def generate_spells(modifiers, classchoice, char_level):
    str_mod, dex_mod, con_mod = modifiers['STR'], modifiers['DEX'], modifiers['CON']
    int_mod, wis_mod, cha_mod = modifiers['INT'], modifiers['WIS'], modifiers['CHA']
    spells = {}
    spell_assignment_dict = calculate_spell_distribution(modifiers, classchoice, char_level)
    if classchoice in ['Barbarian', 'Fighter', 'Monk', 'Rogue']:
        spells = {}
    elif (classchoice in ['Paladin', 'Ranger']) & (char_level >= 2):
        spells = {
            '1st Level': pick_spells_of_level(spell_assignment_dict['1st Level'], '1st Level', classchoice),
            '2nd Level': pick_spells_of_level(spell_assignment_dict['2nd Level'], '2nd Level', classchoice),
            '3rd Level': pick_spells_of_level(spell_assignment_dict['3rd Level'], '3rd Level', classchoice),
            '4th Level': pick_spells_of_level(spell_assignment_dict['4th Level'], '4th Level', classchoice),
            '5th Level': pick_spells_of_level(spell_assignment_dict['5th Level'], '5th Level', classchoice)
        }
    elif classchoice in ['Artificer', 'Warlock']:
        spells = {
            'Cantrip': pick_spells_of_level(calc_cantrips_known(classchoice, char_level), 'Cantrip', classchoice),
            '1st Level': pick_spells_of_level(spell_assignment_dict['1st Level'], '1st Level', classchoice),
            '2nd Level': pick_spells_of_level(spell_assignment_dict['2nd Level'], '2nd Level', classchoice),
            '3rd Level': pick_spells_of_level(spell_assignment_dict['3rd Level'], '3rd Level', classchoice),
            '4th Level': pick_spells_of_level(spell_assignment_dict['4th Level'], '4th Level', classchoice),
            '5th Level': pick_spells_of_level(spell_assignment_dict['5th Level'], '5th Level', classchoice)
        }
    else:
        spells = {
            'Cantrip': pick_spells_of_level(calc_cantrips_known(classchoice, char_level), 'Cantrip', classchoice),
            '1st Level': pick_spells_of_level(spell_assignment_dict['1st Level'], '1st Level', classchoice),
            '2nd Level': pick_spells_of_level(spell_assignment_dict['2nd Level'], '2nd Level', classchoice),
            '3rd Level': pick_spells_of_level(spell_assignment_dict['3rd Level'], '3rd Level', classchoice),
            '4th Level': pick_spells_of_level(spell_assignment_dict['4th Level'], '4th Level', classchoice),
            '5th Level': pick_spells_of_level(spell_assignment_dict['5th Level'], '5th Level', classchoice),
            '6th Level': pick_spells_of_level(spell_assignment_dict['6th Level'], '6th Level', classchoice),
            '7th Level': pick_spells_of_level(spell_assignment_dict['7th Level'], '7th Level', classchoice),
            '8th Level': pick_spells_of_level(spell_assignment_dict['8th Level'], '8th Level', classchoice),
            '9th Level': pick_spells_of_level(spell_assignment_dict['9th Level'], '9th Level', classchoice)
        }
    return spells

# get spellcaster details for character sheet
def get_spellcaster_details(char_dict):
    spellcasting_class = ''
    spellcasting_ability = ''
    spell_save_dc = 0
    spell_atk_bonus = 0
    proficiency_bonus = calc_proficiency_bonus(char_dict['level'])
    if char_dict['class'] in ['Artificer', 'Wizard']:
        spellcasting_class = char_dict['class']
        spellcasting_ability = 'INT'
        spell_save_dc = 8+char_dict['stats']['Modifiers']['INT']+proficiency_bonus
        spell_atk_bonus = char_dict['stats']['Modifiers']['INT']+proficiency_bonus
    elif char_dict['class'] in ['Bard', 'Paladin', 'Sorcerer', 'Warlock']:
        spellcasting_class = char_dict['class']
        spellcasting_ability = 'CHA'
        spell_save_dc = 8+char_dict['stats']['Modifiers']['CHA']+proficiency_bonus
        spell_atk_bonus = char_dict['stats']['Modifiers']['CHA']+proficiency_bonus
    elif char_dict['class'] in ['Cleric', 'Druid', 'Ranger']:
        spellcasting_class = char_dict['class']
        spellcasting_ability = 'WIS'
        spell_save_dc = 8+char_dict['stats']['Modifiers']['WIS']+proficiency_bonus
        spell_atk_bonus = char_dict['stats']['Modifiers']['WIS']+proficiency_bonus
    return spellcasting_class, spellcasting_ability, spell_save_dc, spell_atk_bonus


# preparation for filling spell slots on pdf
def char_sheet_format_spells(char_dict):
    spell_slots_dict = {
    '1st Level': 0,
    '2nd Level': 0,
    '3rd Level': 0,
    '4th Level': 0,
    '5th Level': 0,
    '6th Level': 0,
    '7th Level': 0,
    '8th Level': 0,
    '9th Level': 0
    }
    spells_dict = {
    'Cantrip': ['', '', '', '', '', '', '', '', ''],
    '1st Level': ['', '', '', '', '', '', '', '', '', '', '', ''],
    '2nd Level': ['', '', '', '', '', '', '', '', '', '', '', '', ''],
    '3rd Level': ['', '', '', '', '', '', '', '', '', '', '', '', ''],
    '4th Level': ['', '', '', '', '', '', '', '', '', '', '', '', ''],
    '5th Level': ['', '', '', '', '', '', '', '', ''],
    '6th Level': ['', '', '', '', '', '', '', '', ''],
    '7th Level': ['', '', '', '', '', '', '', '', ''],
    '8th Level': ['', '', '', '', '', '', '', '', ''],
    '9th Level': ['', '', '', '', '', '', '', '', '']
    }
    if char_dict['class'] in ['Bard', 'Cleric', 'Druid', 'Sorcerer', 'Wizard']:
        for key in spell_slots_dict.keys():
            spell_slots_dict[key] = spell_slots_available(char_dict['class'], char_dict['level']).iloc[-1].replace('-', 0)[key]
        for key in char_dict['spells'].keys():
            x = 0
            for spell in char_dict['spells'][key]:
                spells_dict[key][x] = spell
                x+=1
    elif char_dict['class'] == 'Artificer':
        for key in list(spell_slots_dict.keys())[0:5]:
            spell_slots_dict[key] = spell_slots_available(char_dict['class'], char_dict['level']).iloc[-1].replace('-', 0)[key]
        for key in char_dict['spells'].keys():
            x = 0
            for spell in char_dict['spells'][key]:
                spells_dict[key][x] = spell
                x+=1
    elif (char_dict['class'] in ['Paladin', 'Ranger']) & (char_dict['level'] >= 2):
        for key in list(spell_slots_dict.keys())[0:5]:
            spell_slots_dict[key] = spell_slots_available(char_dict['class'], char_dict['level']).iloc[-1].replace('-', 0)[key]
        for key in char_dict['spells'].keys():
            x = 0
            for spell in char_dict['spells'][key]:
                spells_dict[key][x] = spell
                x+=1
    elif char_dict['class'] == 'Warlock':
        spell_slots_dict[spell_slots_available('Warlock', char_dict['level']).iloc[-1]['Slot Level']] = spell_slots_available('Warlock', char_dict['level']).iloc[-1]['Spell Slots']
        for key in char_dict['spells'].keys():
            x = 0
            for spell in char_dict['spells'][key]:
                spells_dict[key][x] = spell
                x+=1
    return spell_slots_dict, spells_dict
