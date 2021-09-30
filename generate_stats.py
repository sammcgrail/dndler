import random
import numpy as np


# abbreviated ability scores
ability_scores = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA']

# race bonuses as np arrays
race_bonuses = {
    'Dragonborn': np.array([0, 2, 0, 0, 0, 1]),
    'Hill Dwarf': np.array([0, 0, 2, 0, 1, 0]),
    'Mountain Dwarf': np.array([2, 0, 2, 0, 0, 0]),
    'Drow Elf': np.array([0, 2, 0, 0, 0, 1]),
    'High Elf': np.array([0, 2, 0, 1, 0, 0]),
    'Wood Elf': np.array([0, 2, 0, 0, 1, 0]),
    'Forest Gnome': np.array([0, 1, 0, 2, 0, 0]),
    'Rock Gnome': np.array([0, 0, 1, 2, 0, 0]),
    'Half-Elf': np.array([0, 0, 0, 0, 0, 2]), # two additional +1's
    'Lightfoot Halfling': np.array([0, 2, 0, 0, 0, 1]),
    'Stout Halfling': np.array([0, 2, 1 , 0, 0, 0]),
    'Half-Orc': np.array([2, 0, 1, 0, 0, 0]),
    'Human': np.array([1, 1, 1, 1, 1, 1]),
    'Variant Human': np.array([0, 0, 0, 0, 0, 0]), # choose two +1's
    'Tiefling': np.array([0, 0, 0, 1, 0, 2])
}

# simulated dicerolls for base stats
def roll_4_drop_lowest():
    dicerolls = [random.randint(1,6), random.randint(1,6), random.randint(1,6), random.randint(1,6)]
    dicerolls = sorted(dicerolls, reverse=True)
    dicerolls = dicerolls[0:3]
    return sum(dicerolls)

# finalize stats, race mandatory for calculating bonuses
def generate_stats(race_choice):
    race = race_choice
    base_stats = [roll_4_drop_lowest(), roll_4_drop_lowest(), roll_4_drop_lowest(),
                  roll_4_drop_lowest(), roll_4_drop_lowest(), roll_4_drop_lowest()]
    total_stats = base_stats + race_bonuses[race_choice]
    return dict(zip(ability_scores, total_stats))
