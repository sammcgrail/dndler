import pandas as pd
import numpy as np
import random

# import names csv
def import_names():
    names_df = pd.read_csv('names.csv')
    first_names = list(names_df[names_df['First/Last']=='First']['Name'])
    last_names = list(names_df[names_df['First/Last']=='Last']['Name'])
    return first_names, last_names

# split first names and last names into lists
first_names, last_names = import_names()

# randomly append a first name and last name together
def generate_name():
    firstname = random.choice(first_names)
    lastname = random.choice(last_names)
    return firstname + ' ' + lastname
