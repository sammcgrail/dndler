import random

# armor types by weight class
armor = {
'Light':['Padded', 'Leather', 'Studded Leather'],
'Medium':['Hide', 'Chain shirt', 'Scale Mail', 'Spiked Armor', 'Breastplate', 'Halfplate'],
'Heavy':['Ring Mail', 'Chain Mail', 'Splint', 'Plate']
}


# import weapons csv, return df and unique weapon class
def import_weapons():
    weapons_df = pd.read_csv('weapons.csv')
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


adventuring_packs = {
'Burglar\'s Pack':
    ['Backpack', '1000 ball bearings', '10 ft. String', 'Bell', '5 Candles',
    'Crowbar', 'Hammer', '10 Pitons', 'Hooded Lantern', '2 Flasks of Oil',
    '5 days of Rations',  'Tinderbox', 'Waterskin', '50 ft. Hempen Rope'],
'Diplomat\'s Pack':
    ['Chest', '2 cases for maps and Scrolls', 'Set of Fine Clothes',
    'Bottle of Ink', 'Ink Pen', 'Lamp', '2 Flasks of Oil', '5 Sheets of Paper',
    'Vial of Perfume', 'Sealing Wax', 'Soap'],
'Dungeoneer\'s Pack':
    ['Backpack', 'Crowbar', 'Hammer', '10 Pitons', '10 Torches', 'Tinderbox',
    '10 days of Rations', 'Waterskin', '50 ft. Hempen Rope'],
'Entertainer\'s Pack':
    ['Backpack', 'Bedroll', '2 Costumes', '5 Candles', '5 days of Rations',
    'Waterskin', 'Disguise Kit'],
'Explorer\'s Pack':
    ['Backpack', 'Bedroll', 'Mess Kit', 'Tinderbox', '10 Torches', '10 days of Rations',
    'Waterskin', '50 ft. Hempen Rope'],
'Priest\'s Pack':
    ['Backpack', 'Blanket', '10 Candles', 'Tinderbox', 'Alms Box', '2 Blocks of Incense',
    'Censer', 'Vestments', '2 days of Rations', 'Waterskin'],
'Scholar\'s Pack':
    ['Backpack', 'Book of Lore', 'Bottle of Ink', 'Ink Pen', '10 Sheets of Parchment',
    'Little Bag of Sand', 'Small Knife']
}


musical_instruments = ['Bagpipes', 'Drum', 'Dulcimer', 'Flute', 'Lute', 'Lyre',
                        'Horn', 'Pan Flute', 'Shawm', 'Viol']
