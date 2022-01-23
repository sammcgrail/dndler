import pandas as pd
from collections.abc import Iterable

# import features table merged for all classes
def import_class_features_table():
    class_features_df = pd.read_csv('data/features_and_spellcasting.csv')
    return class_features_df

class_features_df = import_class_features_table()

# subset features table, showing only relevant columns for given class
def class_features_table(classchoice):
    featurestable = class_features_df[class_features_df['Class']==classchoice].dropna(axis=1, how='all')
    return featurestable

# create all class features tables and add to dictionary
def create_all_features_tables():
    features_table_dict = {}
    artificer_features_table = class_features_table('Artificer')
    barbarian_features_table = class_features_table('Barbarian')
    bard_features_table = class_features_table('Bard')
    cleric_features_table = class_features_table('Cleric')
    druid_features_table = class_features_table('Druid')
    fighter_features_table = class_features_table('Fighter')
    monk_features_table = class_features_table('Monk')
    paladin_features_table = class_features_table('Paladin')
    ranger_features_table = class_features_table('Ranger')
    rogue_features_table = class_features_table('Rogue')
    sorcerer_features_table = class_features_table('Sorcerer')
    warlock_features_table = class_features_table('Warlock')
    wizard_features_table = class_features_table('Wizard')
    features_table_dict = {
    'Artificer': artificer_features_table,
    'Barbarian': barbarian_features_table,
    'Bard': bard_features_table,
    'Cleric': cleric_features_table,
    'Druid': druid_features_table,
    'Fighter': fighter_features_table,
    'Monk': monk_features_table,
    'Paladin': paladin_features_table,
    'Ranger': ranger_features_table,
    'Rogue': rogue_features_table,
    'Sorcerer': sorcerer_features_table,
    'Warlock': warlock_features_table,
    'Wizard': wizard_features_table
    }
    return features_table_dict

# one dictionary with every class features table
features_table_dict = create_all_features_tables()

# subset features table up to a level
def features_table_up_to_level(char_level, features_table):
    up_to_level = features_table['Level'] <= char_level
    return features_table[up_to_level]

# spells known dictionaries
bard_spells_known = {1:4, 2:5, 3:6, 4:7, 5:8, 6:9, 7:10, 8:11, 9:12, 10:14, 11:15, 12:15, 13:16, 14:18, 15:19, 16:19, 17:20, 18:22, 19:22, 20:22}
ranger_spells_known = {1:0, 2:2, 3:3, 4:3, 5:4, 6:4, 7:5, 8:5, 9:6, 10:6, 11:7, 12:7, 13:8, 14:8, 15:9, 16:9, 17:10, 18:10, 19:11, 20:11}
sorcerer_spells_known = {1:2, 2:3, 3:4, 4:5, 5:6, 6:7, 7:8, 8:9, 9:10, 10:11, 11:12, 12:12, 13:13, 14:13, 15:14, 16:14, 17:15, 18:15, 19:15, 20:15}
warlock_spells_known = {1:2, 2:3, 3:4, 4:5, 5:6, 6:7, 7:8, 8:9, 9:10, 10:10, 11:11, 12:11, 13:12, 14:12, 15:13, 16:13, 17:14, 18:14, 19:15, 20:15}

# for calculating cantrips known based on class Level
def calc_cantrips_known(classchoice, char_level):
    cantrips_known = 0
    if classchoice == 'Artificer':
        cantrips_known = 2
        if char_level >= 10:
            cantrips_known = 3
            if char_level >= 14:
                cantrips_known = 4
    if classchoice == 'Bard':
        cantrips_known = 2
        if char_level >= 4:
            cantrips_known = 3
            if char_level >= 10:
                cantrips_known = 4
    if classchoice == 'Cleric':
        cantrips_known = 3
        if char_level >= 4:
            cantrips_known = 4
            if char_level >= 10:
                cantrips_known = 5
    if classchoice == 'Druid':
        cantrips_known = 2
        if char_level >= 4:
            cantrips_known = 3
            if char_level >= 10:
                cantrips_known = 4
    if classchoice == 'Sorcerer':
        cantrips_known = 4
        if char_level >= 4:
            cantrips_known = 5
            if char_level >= 10:
                cantrips_known = 6
    if classchoice == 'Warlock':
        cantrips_known = 2
        if char_level >= 4:
            cantrips_known = 3
            if char_level >= 10:
                cantrips_known = 4
    if classchoice == 'Wizard':
        cantrips_known = 3
        if char_level >= 4:
            cantrips_known = 4
            if char_level >= 10:
                cantrips_known = 5
    return cantrips_known

# for calculating spells known based on class level
def calc_spells_known(modifiers, classchoice, char_level):
    spells_prepared = 0
    spells_known = 0
    str_mod, dex_mod, con_mod = modifiers['STR'], modifiers['DEX'], modifiers['CON']
    int_mod, wis_mod, cha_mod = modifiers['INT'], modifiers['WIS'], modifiers['CHA']
    if classchoice == 'Artificer':
        # entire spell list available, just need to prepare spells
        if char_level//2 == 0:
            spells_prepared = int_mod + 1
            spells_known = int_mod + 1
        else:
            spells_prepared = int_mod + char_level//2
            spells_known = int_mod + char_level//2
    elif classchoice == 'Bard':
        # don't need to prepare spells, spells are just known
        spells_prepared = bard_spells_known[char_level]
        spells_known = bard_spells_known[char_level]
    elif classchoice == 'Cleric':
        # entire spell list available, just need to prepare spells
        spells_prepared = wis_mod + char_level
        spells_known = wis_mod + char_level
    elif classchoice == 'Druid':
        # entire spell list available, just need to prepare spells
        spells_prepared = wis_mod + char_level
        spells_known = wis_mod + char_level
    elif classchoice == 'Paladin':
        # entire spell list available, just need to prepare spells
        if char_level//2 == 0:
            spells_prepared = cha_mod + 1
            spells_known = cha_mod + 1
        else:
            spells_prepared = cha_mod + char_level//2
            spells_known = cha_mod + char_level//2
    elif classchoice == 'Ranger':
        # don't need to prepare spells, spells are just known
        spells_prepared = ranger_spells_known[char_level]
        spells_known = ranger_spells_known[char_level]
    elif classchoice == 'Sorcerer':
        # don't need to prepare spells, spells are just known
        spells_prepared = sorcerer_spells_known[char_level]
        spells_known = sorcerer_spells_known[char_level]
    elif classchoice == 'Warlock':
        # don't need to prepare spells, spells are just known
        spells_known = warlock_spells_known[char_level]
        spells_known = warlock_spells_known[char_level]
    elif classchoice == 'Wizard':
        # spells known come from a spellbook, need to prepare spells
        spells_prepared = int_mod + char_level
        spells_known = 6+(char_level-1)*2
    return spells_prepared, spells_known

# columns used to subset for spell slots only (except for warlock)
spell_slot_cols = ['Level', '1st Level', '2nd Level', '3rd Level', '4th Level', '5th Level', '6th Level', '7th Level', '8th Level', '9th Level']

# get subset of spell slots table for a given class up to a given level
def spell_slots_available(classchoice, char_level):
    featurestable = features_table_up_to_level(char_level, class_features_table(classchoice))
    spell_slots_table = pd.DataFrame()
    if classchoice not in ['Artificer', 'Paladin', 'Ranger', 'Warlock']:
        spell_slots_table = featurestable[spell_slot_cols]
    elif classchoice == 'Artificer':
        spell_slots_table = featurestable[spell_slot_cols[0:6]]
    elif (classchoice in ['Paladin', 'Ranger']) & (char_level >= 2):
        spell_slots_table = featurestable[spell_slot_cols[0:6]]
    elif classchoice == 'Warlock':
        spell_slots_table = featurestable[['Level', 'Spells Known', 'Spell Slots', 'Slot Level']]
    return spell_slots_table

# for flattening lists, remove nested lists
def flatten(lis):
     for item in lis:
         if isinstance(item, Iterable) and not isinstance(item, str):
             for x in flatten(item):
                 yield x
         else:
             yield item

# get features list up to given level
def get_features(classchoice, char_level):
    features_list = []
    featurestable = features_table_up_to_level(char_level, features_table_dict[classchoice]).replace(float('NaN'), '')
    for item in list(featurestable['Features']):
        if item != '':
            features_list.append(item.split(','))
    return list(flatten(features_list))
