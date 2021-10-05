import random
import pandas as pd
from collections.abc import Iterable

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

# import gear given by background
bg_gear_df = pd.read_csv('data/backgrounds_gear.csv')

# for choosing based on given weapon class
def choose_from(weaponclass):
    choice = ''
    if weaponclass == 'Simple':
        choice = random.choice(list(weapons_df[weapons_df['Weapon Class'].isin(['Simple Melee', 'Simple Ranged'])]['Name']))
    elif weaponclass == 'Simple Melee':
        choice = random.choice(list(weapons_df[weapons_df['Weapon Class']=='Simple Melee']['Name']))
    elif weaponclass == 'Simple Ranged':
        choice = random.choice(list(weapons_df[weapons_df['Weapon Class']=='Simple Ranged']['Name']))
    elif weaponclass == 'Martial':
        choice = random.choice(list(weapons_df[weapons_df['Weapon Class'].isin(['Martial Melee', 'Martial Ranged'])]['Name']))
    elif weaponclass == 'Martial Melee':
        choice = random.choice(list(weapons_df[weapons_df['Weapon Class']=='Martial Melee']['Name']))
    elif weaponclass == 'Martial Ranged':
        choice = random.choice(list(weapons_df[weapons_df['Weapon Class']=='Martial Ranged']['Name']))
    return choice

# for deciding between options
def decide_between(choice_list):
    return random.choice(choice_list)

# for flattening lists, remove nested lists
def flatten(lis):
     for item in lis:
         if isinstance(item, Iterable) and not isinstance(item, str):
             for x in flatten(item):
                 yield x
         else:
             yield item

# generate starting equipment depending on class
def generate_equipment(classchoice, backgroundchoice):
    equipment_list = []
    if classchoice == 'Artificer':
        equipment_list = [choose_from('Simple'), choose_from('Simple'), 'Light Crossbow', '20 Bolts',
                          decide_between(['Studded Leather Armor', 'Scale Mail']), 'Thieves\' Tools', 'Dungeoneer\'s Pack']
    if classchoice == 'Barbarian':
        equipment_list = [decide_between(['Greataxe', choose_from('Martial Melee')]),
                          decide_between([['Handaxe', 'Handaxe'], choose_from('Simple')]), 'Explorer\'s Pack', 'Javelin', 'Javelin', 'Javelin', 'Javelin']
    if classchoice == 'Bard':
        equipment_list = [decide_between(['Rapier', 'Longsword', choose_from('Simple')]),
                          decide_between(['Diplomat\'s Pack', 'Entertainer\'s Pack']), random.choice(musical_instruments), 'Leather Armor', 'Dagger']
    if classchoice == 'Cleric':
        equipment_list = [decide_between(['Mace', 'Warhammer']), decide_between(['Scale Mail', 'Leather Mail', 'Chain Mail']),
                          decide_between([['Light Crossbow', '20 Bolts'], choose_from('Simple')]), decide_between(['Priest\'s Pack', 'Explorer\'s Pack']), 'Shield', 'Holy Symbol']
    if classchoice == 'Druid':
        equipment_list = [decide_between(['Shield', choose_from('Simple')]), decide_between(['Scimitar', choose_from('Simple Melee')]),
                          'Leather Armor', 'Explorer\'s Pack', 'Druidic Focus']
    if classchoice == 'Fighter':
        equipment_list = [decide_between(['Chain Mail', ['Leather Armor', 'Longbow', '20 Arrows']]),
                          decide_between([[choose_from('Martial'), 'Shield'], [choose_from('Martial'), choose_from('Martial')]]),
                          decide_between([['Light Crossbow', '20 Bolts'], ['Handaxe', 'Handaxe']]), decide_between(['Dungeoneer\'s Pack', 'Explorer\'s Pack'])]
    if classchoice == 'Monk':
        equipment_list = [decide_between(['Shortsword', choose_from('Simple')]), decide_between(['Dungeoneer\'s Pack', 'Explorer\'s Pack']), '10 Darts']
    if classchoice == 'Paladin':
        equipment_list = [decide_between([[choose_from('Martial'), 'Shield'], [choose_from('Martial'), choose_from('Martial')]]), decide_between([['Javelin', 'Javelin', 'Javelin', 'Javelin', 'Javelin'], choose_from('Simple Melee')]),
                          decide_between(['Priest\'s Pack', 'Explorer\'s Pack']), 'Chain Mail', 'Holy Symbol']
    if classchoice == 'Ranger':
        equipment_list = [decide_between(['Scale Mail', 'Leather Armor']), decide_between([['Shortsword', 'Shortsword'], [choose_from('Simple Melee'), choose_from('Simple Melee')]]),
                          decide_between(['Dungeoneer\'s Pack', 'Explorer\'s Pack']), 'Longbow', '20 Arrows', 'Quiver']
    if classchoice == 'Rogue':
        equipment_list = [decide_between(['Rapier', 'Shortsword']), decide_between([['Shortbow', '20 Arrows', 'Quiver'], 'Shortsword']),
                          decide_between(['Burglar\'s Pack', 'Dungeoneer\'s Pack', 'Explorer\'s Pack']), 'Leather Armor', 'Dagger', 'Dagger', 'Thieves\' Tools']
    if classchoice == 'Sorcerer':
        equipment_list = [decide_between([['Light Crossbow', '20 Bolts'], choose_from('Simple')]), decide_between(['Component Pouch', 'Arcane Focus']),
                          decide_between(['Dungeoneer\'s Pack', 'Explorer\'s Pack']), 'Dagger', 'Dagger']
    if classchoice == 'Warlock':
        equipment_list = [decide_between([['Light Crossbow', '20 Bolts'], choose_from('Simple')]), decide_between(['Component Pouch', 'Arcane Focus']),
                          decide_between(['Scholar\'s Pack', 'Dungeoneer\'s Pack']), 'Leather Armor', choose_from('Simple'), 'Dagger', 'Dagger']
    if classchoice == 'Wizard':
        equipment_list = [decide_between(['Quarterstaff', 'Dagger']), decide_between(['Component Pouch', 'Arcane Focus']), decide_between(['Scholar\'s Pack', 'Explorer\'s Pack']), 'Spellbook']
    equipment_list.append(list(bg_gear_df[bg_gear_df['Name']==backgroundchoice]['Gear'])[0].split(','))
    return list(flatten(equipment_list))

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

# assign weapons to weapon slots
def fill_weapon_slots(modifiers, equipment_list, char_level):
    str_mod, dex_mod = modifiers['STR'], modifiers['DEX']
    proficiency_bonus = calc_proficiency_bonus(char_level)
    if str_mod >= dex_mod:
        larger_mod = str_mod
    else:
        larger_mod = dex_mod
    three_weapons_dict = {
    'Weapon 1': {
        'Name': '',
        'AtkBonus': '',
        'Damage': ''
        },
    'Weapon 2': {
        'Name': '',
        'AtkBonus': '',
        'Damage': ''
        },
    'Weapon 3': {
        'Name': '',
        'AtkBonus': '',
        'Damage': ''
        }
    }
    weapons_to_slot = []
    for item in equipment_list:
        if (item in list(weapons_df['Name'])) & (item not in weapons_to_slot):
            weapons_to_slot.append(item)
    for num in range(len(weapons_to_slot[0:3])):
        three_weapons_dict['Weapon '+str(num+1)]['Name'] = weapons_to_slot[num]
        if 'Finesse' in list(weapons_df.loc[weapons_df['Name']==weapons_to_slot[num]]['Properties']):
            three_weapons_dict['Weapon '+str(num+1)]['AtkBonus'] = '+'+str(larger_mod+proficiency_bonus)
            three_weapons_dict['Weapon '+str(num+1)]['Damage'] = str(weapons_df.loc[weapons_df['Name']==weapons_to_slot[num]]['Damage Formula'].item())+'+'+str(larger_mod)
        elif weapons_df.loc[weapons_df['Name']==weapons_to_slot[num]]['Weapon Class'].item() in ['Simple Ranged', 'Martial Ranged']:
            three_weapons_dict['Weapon '+str(num+1)]['AtkBonus'] = '+'+str(dex_mod+proficiency_bonus)
            three_weapons_dict['Weapon '+str(num+1)]['Damage'] = str(weapons_df.loc[weapons_df['Name']==weapons_to_slot[num]]['Damage Formula'].item())+'+'+str(dex_mod)
        else:
            three_weapons_dict['Weapon '+str(num+1)]['AtkBonus'] = '+'+str(str_mod+proficiency_bonus)
            three_weapons_dict['Weapon '+str(num+1)]['Damage'] = str(weapons_df.loc[weapons_df['Name']==weapons_to_slot[num]]['Damage Formula'].item())+'+'+str(str_mod)
    return three_weapons_dict
