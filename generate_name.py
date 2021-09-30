import pandas as pd
import numpy as np
import random

# import names csv to create dict of names by race
def import_names():
    names_df = pd.read_csv('names.csv')
    first_names = list(names_df[names_df['First/Last']=='First']['Name'])
    last_names = list(names_df[names_df['First/Last']=='Last']['Name'])
    return first_names, last_names

# assign dict of names by race
first_names, last_names = import_names()

def generate_name():
    firstname = random.choice(first_names)
    lastname = random.choice(last_names)
    return firstname + ' ' + lastname
