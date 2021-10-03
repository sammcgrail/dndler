import pandas as pd
import numpy as np
import random

# define spell import function
def import_spells():
    spells_df = pd.read_csv('spells.csv')
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

# Artificer Lvl 1   : 2 Cantrips, Spells Equal to Intelligence Modifier + Half Artificer Level Rounded Down (min of 1)
# Bard Lvl 1        : 2 Cantrips, 4 Spells Known
# Cleric Lvl 1      : 3 Cantrips, Spells Equal to Wisdom Modifier + Cleric Level (min of 1)
# Druid Lvl 1       : 2 Cantrips, Spells Equal to Wisdom Modifier + Druid Level (min of 1)
# Paladin Lvl 1     : No Cantrips, No Spells
# Ranger Lvl 1      : No Cantrips, No Spells
# Sorcerer Lvl 1    : 4 Cantrips, 2 Spells Known
# Warlock Lvl 1     : 2 Cantrips, 2 Spells Known
# Wizard Lvl 1      : 3 Cantrips, 6 Spells in Spellbook

def generate_spells(modifiers, classchoice, char_level):
    str_mod, dex_mod, con_mod = modifiers['STR'], modifiers['DEX'], modifiers['CON']
    int_mod, wis_mod, cha_mod = modifiers['INT'], modifiers['WIS'], modifiers['CHA']
    spells = {}
    if (classchoice not in ['Artificer', 'Bard', 'Cleric', 'Druid', 'Sorcerer', 'Warlock', 'Wizard']) & (char_level == 1):
        return spells
    elif classchoice == 'Artificer':
        spells_known = char_level//2
        if spells_known == 0:
            spells_known = 1
        spells = {
            'Cantrip': pick_spells_of_level(2, 'Cantrip', 'Artificer'),
            '1st Level': pick_spells_of_level(int_mod+spells_known, '1st Level', 'Artificer')
            }
    elif classchoice == 'Bard':
        spells = {
            'Cantrip': pick_spells_of_level(2, 'Cantrip', 'Bard'),
            '1st Level': pick_spells_of_level(4, '1st Level', 'Bard')
            }
    elif classchoice == 'Cleric':
        spells = {
            'Cantrip': pick_spells_of_level(3, 'Cantrip', 'Cleric'),
            '1st Level': pick_spells_of_level(wis_mod+char_level, '1st Level', 'Cleric')
            }
    elif classchoice == 'Druid':
        spells = {
            'Cantrip': pick_spells_of_level(2, 'Cantrip', 'Druid'),
            '1st Level': pick_spells_of_level(wis_mod+char_level, '1st Level', 'Druid')
            }
    elif classchoice == 'Sorcerer':
        spells = {
            'Cantrip': pick_spells_of_level(4, 'Cantrip', 'Sorcerer'),
            '1st Level': pick_spells_of_level(2, '1st Level', 'Sorcerer')
            }
    elif classchoice == 'Warlock':
        spells = {
            'Cantrip': pick_spells_of_level(2, 'Cantrip', 'Warlock'),
            '1st Level': pick_spells_of_level(2, '1st Level', 'Warlock')
            }
    elif classchoice == 'Wizard':
        spells = {
            'Cantrip': pick_spells_of_level(3, 'Cantrip', 'Wizard'),
            '1st Level': pick_spells_of_level(6, '1st Level', 'Wizard')
            }
    elif (classchoice == 'Paladin') & (char_level >= 2):
        spells = {
            '1st Level': pick_spells_of_level(cha_mod+char_level//2, '1st Level', 'Paladin')
            }
    elif (classchoice == 'Ranger') & (char_level >= 2):
        spells = {
            '1st Level': pick_spells_of_level(2, '1st Level', 'Ranger')
            }
    return spells
