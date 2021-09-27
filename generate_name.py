import pandas as pd
import numpy as np
import random

# yeah this one needs to be completely redone lol

# import names csv to create dict of names by race
def import_names():
    names_df = pd.read_csv('names.csv')
    male_first_names = {}
    female_first_names = {}
    last_names = {}

    for thing in names_df['Race'].unique():
        request = np.logical_and(names_df['Race']==thing, np.logical_and(names_df['First/Last']=='First', names_df['M/F']=='M'))
        male_first_names[thing] = list(names_df[request]['Name'])

    for thing in names_df['Race'].unique():
        request = np.logical_and(names_df['Race']==thing, np.logical_and(names_df['First/Last']=='First', names_df['M/F']=='F'))
        female_first_names[thing] = list(names_df[request]['Name'])

    for thing in names_df['Race'].unique():
        request = np.logical_and(names_df['Race']==thing, names_df['First/Last']=='Last')
        last_names[thing] = list(names_df[request]['Name'])
    return male_first_names, female_first_names, last_names

# assign dict of names by race
male_first_names, female_first_names, last_names = import_names()

def roll_name_male():
    firstname = ''
    lastname = ''
    if character['race'] == 'Dragonborn':
        firstname = random.choice(list(male_first_names['Dragonborn']))
        rand_race = random.choice(['Dragonborn', 'Human', 'Tiefling'])
        lastname = random.choice(list(last_names[rand_race]))
    elif character['race'] in ['Hill Dwarf', 'Mountain Dwarf']:
        firstname = random.choice(list(male_first_names['Dwarf']))
        lastname = random.choice(list(last_names['Dwarf']))
    elif character['race'] in ['Drow Elf', 'High Elf', 'Wood Elf']:
        firstname = random.choice(list(male_first_names['Elf']))
        lastname = random.choice(list(last_names['Elf']))
    elif character['race'] in ['Forest Gnome', 'Rock Gnome']:
        rand_race = random.choice(['Dwarf', 'Halfling', 'Gnome'])
        firstname = random.choice(list(male_first_names[rand_race]))
        rand_race = random.choice(['Dwarf', 'Halfling', 'Gnome'])
        lastname = random.choice(list(last_names[rand_race]))
    elif character['race'] == 'Half-Elf':
        rand_race = random.choice(['Elf', 'Human'])
        firstname = random.choice(list(male_first_names[rand_race]))
        rand_race = random.choice(['Elf', 'Human'])
        lastname = random.choice(list(last_names[rand_race]))
    elif character['race'] in ['Lightfoot Halfling', 'Stout Halfling']:
        firstname = random.choice(list(male_first_names['Halfling']))
        lastname = random.choice(list(last_names['Halfling']))
    elif character['race'] == 'Half-Orc':
        rand_race = random.choice(['Tiefling', 'Dragonborn', 'Human', 'Orc'])
        firstname = random.choice(list(male_first_names[rand_race]))
        rand_race = random.choice(['Tiefling', 'Human'])
        lastname = random.choice(list(last_names[rand_race]))
    elif character['race'] in ['Human', 'Variant Human']:
        firstname = random.choice(list(male_first_names['Human']))
        lastname = random.choice(list(last_names['Human']))
    elif character['race'] == 'Tiefling':
        firstname = random.choice(list(male_first_names['Tiefling']))
        lastname = random.choice(list(last_names['Tiefling']))

    if isinstance(firstname, str) and isinstance(lastname, str):
        return firstname + " " + lastname
    else :
        return firstname

def roll_name_female():
    firstname = ''
    lastname = ''
    if character['race'] == 'Dragonborn':
        firstname = random.choice(list(female_first_names['Dragonborn']))
        rand_race = random.choice(['Dragonborn', 'Human', 'Tiefling'])
        lastname = random.choice(list(last_names[rand_race]))
    elif character['race'] in ['Hill Dwarf', 'Mountain Dwarf']:
        firstname = random.choice(list(female_first_names['Dwarf']))
        lastname = random.choice(list(last_names['Dwarf']))
    elif character['race'] in ['Drow Elf', 'High Elf', 'Wood Elf']:
        firstname = random.choice(list(female_first_names['Elf']))
        lastname = random.choice(list(last_names['Elf']))
    elif character['race'] in ['Forest Gnome', 'Rock Gnome']:
        rand_race = random.choice(['Dwarf', 'Halfling', 'Gnome'])
        firstname = random.choice(list(female_first_names[rand_race]))
        rand_race = random.choice(['Dwarf', 'Halfling', 'Gnome'])
        lastname = random.choice(list(last_names[rand_race]))
    elif character['race'] == 'Half-Elf':
        rand_race = random.choice(['Elf', 'Human'])
        firstname = random.choice(list(female_first_names[rand_race]))
        rand_race = random.choice(['Elf', 'Human'])
        lastname = random.choice(list(last_names[rand_race]))
    elif character['race'] in ['Lightfoot Halfling', 'Stout Halfling']:
        firstname = random.choice(list(female_first_names['Halfling']))
        lastname = random.choice(list(last_names['Halfling']))
    elif character['race'] == 'Half-Orc':
        rand_race = random.choice(['Tiefling', 'Dragonborn', 'Human', 'Orc'])
        firstname = random.choice(list(female_first_names[rand_race]))
        rand_race = random.choice(['Tiefling', 'Human'])
        lastname = random.choice(list(last_names[rand_race]))
    elif character['race'] in ['Human', 'Variant Human']:
        firstname = random.choice(list(female_first_names['Human']))
        lastname = random.choice(list(last_names['Human']))
    elif character['race'] == 'Tiefling':
        firstname = random.choice(list(female_first_names['Tiefling']))
        lastname = random.choice(list(last_names['Tiefling']))

    if isinstance(firstname, str) and isinstance(lastname, str):
        return firstname + " " + lastname
    else :
        return firstname

def generate_name(race=any):
