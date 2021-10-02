import pandas as pd
import random

# import backgrounds csv to create df
def import_backgrounds():
    bg_df = pd.read_csv('backgrounds.csv', sep=',', engine='python')
    titles = bg_df['Background'].unique()
    return bg_df, titles

# save df and unique background names
bg_df, titles = import_backgrounds()
common = ['Trait', 'Ideal', 'Bond', 'Flaw']

# pick a trait, choice of background optional
def roll_trait(choice='any'):
    title = ''
    if choice == 'any':
        title = random.choice(titles)
    else:
        title = choice
    sub_df = bg_df[bg_df['Background']==title]
    return random.choice(list(sub_df[sub_df['Item']=='Trait']['Description']))

# pick an ideal, choice of background optional
def roll_ideal(choice='any'):
    title = ''
    if choice == 'any':
        title = random.choice(titles)
    else:
        title = choice
    sub_df = bg_df[bg_df['Background']==title]
    return random.choice(list(sub_df[sub_df['Item']=='Ideal']['Description']))

# pick a bond, choice of background optional
def roll_bond(choice='any'):
    title = ''
    if choice == 'any':
        title = random.choice(titles)
    else:
        title = choice
    sub_df = bg_df[bg_df['Background']==title]
    return random.choice(list(sub_df[sub_df['Item']=='Bond']['Description']))

# pick a flaw, choice of background optional
def roll_flaw(choice='any'):
    title = ''
    if choice == 'any':
        title = random.choice(titles)
    else:
        title = choice
    sub_df = bg_df[bg_df['Background']==title]
    return random.choice(list(sub_df[sub_df['Item']=='Flaw']['Description']))


# check if the background has any unique specialty
def identify_extras(choice):
    title = choice
    extra = ''
    desc = ''
    sub_df = bg_df[bg_df['Background']==title]
    if sub_df['Item'].unique().any() not in ['Trait', 'Ideal', 'Bond', 'Flaw']:
        extra = sub_df[~sub_df['Item'].isin(common)]['Item'].unique()[0]
        desc = random.choice(list(sub_df[sub_df['Item']==extra]['Description']))
    return extra, desc


# create full background, choice optional
def generate_background(choice='any'):
    title = ''
    if choice == 'any':
        title = random.choice(titles)
    else:
        title = choice
    extra, desc = identify_extras(title)
    source = bg_df[bg_df['Background']==title]['Source'].unique()[0]
    background_full = {
    'Title':title,
    extra:desc,
    'Trait':roll_trait(title),
    'Ideal':roll_ideal(title),
    'Bond':roll_bond(title),
    'Flaw':roll_flaw(title),
    }
    return background_full, source
