import pandas as pd
import numpy as np

# exporting backgrounds dictionary as csv
df = pd.DataFrame(columns = ['Background', 'Item', 'Description'])
path = r'C:\Users\themi\Documents\Python Scripts'

for bg in backgrounds:
    for item in backgrounds[bg]:
        for desc in backgrounds[bg][item]:
            row = [bg, item.capitalize(), desc]
            df.loc[len(df)] = row

# save csv
df.to_csv(path+'\\backgrounds.csv', index=False)

# reverse, importing csv as dictionary of backgrounds
bg_df = pd.read_csv('backgrounds.csv')

backgrounds = {}

for thing in bg_df['Background'].unique():
    backgrounds[thing] = {}
    items = bg_df[bg_df['Background']==thing]
    for item in items['Item'].unique():
        descriptions = items[items['Item']==item]
        raw_desc = list(descriptions['Description'])
        backgrounds[thing][item] = raw_desc

# exporting names dictionaries as csv
df_names = pd.DataFrame(columns = ['Race', 'First/Last', 'M/F', 'Name'])

for race in male_first_names:
    for name in male_first_names[race]:
        row = [race, 'First', 'M', name]
        df_names.loc[len(df_names)] = row

for race in female_first_names:
    for name in female_first_names[race]:
        row = [race, 'First', 'F', name]
        df_names.loc[len(df_names)] = row

for race in last_names:
    for name in last_names[race]:
        row = [race, 'Last', 'n/a', name]
        df_names.loc[len(df_names)] = row

# save csv
df_names.to_csv(path+'\\names.csv', index=False)

# reverse, importing csv as dictionary of names
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
