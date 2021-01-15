import pandas as pd
import numpy as np

# dict of names by race

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
