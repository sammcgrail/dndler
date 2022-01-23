from generate_spells import get_spell_details
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

# for finding specific spell details
def get_spell_details(spell):
    spell_details = {
    'School': spells_df.loc[spells_df['Name']==spell].iloc[0]['School'],
    'Casting Time': spells_df.loc[spells_df['Name']==spell].iloc[0]['Casting Time'],
    'Range': spells_df.loc[spells_df['Name']==spell].iloc[0]['Range'],
    'Duration': spells_df.loc[spells_df['Name']==spell].iloc[0]['Duration'],
    'Components': spells_df.loc[spells_df['Name']==spell].iloc[0]['Components']
    }
    return spell_details

# armor types by weight class
armor = {
'Light':['Padded Armor', 'Leather Armor', 'Studded Leather Armor'],
'Medium':['Hide Armor', 'Chain Shirt', 'Scale Mail', 'Spiked Armor', 'Breastplate', 'Halfplate'],
'Heavy':['Ring Mail', 'Chain Mail', 'Splint Armor', 'Plate Armor']
}

# musical instruments
musical_instruments = ['Bagpipes', 'Drum', 'Dulcimer', 'Flute', 'Lute', 'Lyre',
                        'Horn', 'Pan Flute', 'Shawm', 'Viol']

# import weapons csv, return df and unique weapon class
def import_weapons():
    weapons_df = pd.read_csv('data/weapons.csv')
    weapons_df = weapons_df.fillna('')
    weaponclass = weapons_df['Weapon Class'].unique()
    return weapons_df, weaponclass

# save df and weapon class
weapons_df, weaponclass = import_weapons()

# weapon features such as light, loading, etc.
weapon_features = {
'Melee':['Finesse', 'Heavy', 'Light', 'Reach', 'Thrown', 'Two-Handed', 'Versatile'],
'Ranged':['Ammunition', 'Heavy', 'Light', 'Loading', 'Two-Handed']
}

def roll_weapon():
    weapon = np.random.choice(weapons_df['Name'].tolist())
    bonus = random.choices(['','+1','+2','+3'], weights=(55,25,15,5))[0]
    completed = bonus + ' ' + weapon
    return completed.strip()

def roll_enchantment():
    enchantment = ''
    spell = ''
    action = ''
    num_uses = ''
    cooldown = ''
    fulltext = ''
    type = random.choices(['Movement', 'Spell'], weights=(67, 33))[0]
    if type == 'Movement':
        enchantment = random.choices(['Dash', 'Disengage', 'Dodge'])[0]
        action = '1 Bonus Action'
        num_uses = random.choices(['2', '3', '4', '5', '6'], weights=(25, 35, 25, 10, 5))[0]
        cooldown = random.choices(['Long Rest', 'Short Rest', 'Day'], weights=(50, 40, 10))[0]
        fulltext = 'The wielder can use ' + enchantment + ' in ' + action + ', ' + num_uses + ' times per ' + cooldown + '.'
    elif type == 'Spell':
        enchantment = random.choices(['Cantrip', '1st Level', '2nd Level', '3rd Level',
        '4th Level', '5th Level', '6th Level', '7th Level', '8th Level', '9th Level'], weights=[24, 18, 17, 16, 10, 5, 4, 3, 2, 1])[0]
        spell = random.choice(spells_df[spells_df['Level']==enchantment]['Name'].unique().tolist())
        action = get_spell_details(spell)['Casting Time']
        num_uses = random.choices(['2', '3', '4', '5', '6'], weights=(25, 35, 25, 10, 5))[0]
        cooldown = random.choices(['Long Rest', 'Short Rest', 'Day'], weights=(50, 40, 10))[0]
        fulltext = 'The wielder can cast ' + spell + ' in ' + action + ', ' + num_uses + ' times per ' + cooldown + '.'
    return fulltext

def roll_magic_weapon():
    weapon = roll_weapon()
    enchantment = roll_enchantment()
    print('')
    print(weapon)
    print(enchantment)
    print('')


def roll_magic_item():;


def roll_magic_armor():;
