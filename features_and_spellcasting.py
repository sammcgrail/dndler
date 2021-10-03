import pandas as pd

# import features table merged for all classes
def import_class_features_table():
    class_features_df = pd.read_csv('data/features_and_spellcasting.csv')
    return class_features_df

# subset features table, showing only relevant columns for given class
def class_features_table(classchoice):
    featurestable = class_features_df[class_features_df['Class']==classchoice].dropna(axis=1, how='all')
    return featurestable

# spells known dictionaries
bard_spells_known = {1:2, 2:5, 3:6, 4:7, 5:8, 6:9, 7:10, 8:11, 9:12, 10:14, 11:15, 12:15, 13:16, 14:18, 15:19, 16:19, 17:20, 18:22, 19:22, 20:22}
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
    spells_known = 0
    spells_prepared = 0
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
