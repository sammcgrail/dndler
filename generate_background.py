import pandas as pd
import random

# import backgrounds csv to create dict
def import_backgrounds():
    bg_df = pd.read_csv('backgrounds.csv')
    backgrounds = {}
    for thing in bg_df['Background'].unique():
        backgrounds[thing] = {}
        items = bg_df[bg_df['Background']==thing]
        for item in items['Item'].unique():
            descriptions = items[items['Item']==item]
            raw_desc = list(descriptions['Description'])
            backgrounds[thing][item] = raw_desc
    return backgrounds

# create dict
backgrounds = import_backgrounds()

# list of background titles only
titles = list(backgrounds.keys())

# pick a trait, choice of background optional
def roll_trait(choice='any'):
    title = ''
    if choice == 'any':
        title = random.choice(titles)
    else:
        title = choice
    return random.choice(backgrounds[title]['Trait'])

# pick an ideal, choice of background optional
def roll_ideal(choice='any'):
    title = ''
    if choice == 'any':
        title = random.choice(titles)
    else:
        title = choice
    return random.choice(backgrounds[title]['Ideal'])

# pick a bond, choice of background optional
def roll_bond(choice='any'):
    title = ''
    if choice == 'any':
        title = random.choice(titles)
    else:
        title = choice
    return random.choice(backgrounds[title]['Bond'])

# pick a flaw, choice of background optional
def roll_flaw(choice='any'):
    title = ''
    if choice == 'any':
        title = random.choice(titles)
    else:
        title = choice
    return random.choice(backgrounds[title]['Flaw'])

# some backgrounds have unique specialties
common = ['Trait', 'Ideal', 'Bond', 'Flaw']
extra = []

for bg in backgrounds.keys():
    if len(backgrounds[bg].keys())>4:
        print(bg)
        print(backgrounds[bg].keys())

for bg in backgrounds.keys():
    for item in backgrounds[bg].keys():
        if item not in common:
            print(bg)
            print(item)
            print('')

# create full background, choice optional
def generate_background(choice='any'):
    title = ''
    if choice == 'any':
        title = random.choice(titles)
    else:
        title = choice
    background_full = {
    'title':title,
    'trait':roll_trait(title),
    'ideal':roll_ideal(title),
    'bond':roll_bond(title),
    'flaw':roll_flaw(title)
    }
    return background_full
