import pandas as pd

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
