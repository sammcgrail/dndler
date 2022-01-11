import pandas as pd
import random

# roll 1 damage die, double it
def roll_one_and_double():
    damage = random.randint(1,6) + random.randint(1,6)
    return damage*2

# roll 2 damage dice, take sum
def roll_two_take_sum():
    damage = random.randint(1,6) + random.randint(1,6) + random.randint(1,6) + random.randint(1,6)
    return damage

# get one guaranteed max die, roll the other
def max_plus_roll():
    damage = 6 + random.randint(1,6) + random.randint(1,6) + random.randint(1,6)
    return damage

# one row
def data_row():
    return [roll_one_and_double(), roll_two_take_sum(), max_plus_roll()]

# repeat three types of rolls n times
def spam_rolls(n_repeats):
    i = 0
    table = []
    while i<n_repeats:
        table.append(data_row())
        i+=1
    return table

# make dataframe
crits_df = pd.DataFrame(table, columns=['one doubled', 'two', 'max plus roll'])
