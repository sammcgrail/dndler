import random
import numpy as np


# abbreviated ability scores
ability_scores = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA']

# race bonuses as np arrays, case and spelling must match race generation
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
    'Tiefling': np.array([0, 0, 0, 1, 0, 2]),
    'Orc of Exandria': np.array([2, 0, 1, 0, 0, 0]),
    'Leonin': np.array([1, 0, 2, 0, 0, 0]),
    'Satyr': np.array([0, 1, 0, 0, 0, 2]),
    'Fairy': np.array([0, 0, 0, 0, 0, 0]),
    'Harengon': np.array([0, 0, 0, 0, 0, 0]),
    'Aarakocra': np.array([0, 2, 0, 0, 1, 0]),
    'Genasi': np.array([0, 0, 2, 0, 0, 0]), # additional +1 based on element
    'Goliath': np.array([2, 0, 1, 0, 0, 0]),
    'Aasimar': np.array([0, 0, 0, 0, 0, 2]),
    'Bugbear': np.array([2, 1, 0, 0, 0, 0]),
    'Firbolg': np.array([1, 0, 0, 0, 2, 0]),
    'Goblin': np.array([0, 2, 1, 0, 0, 0]),
    'Hobgoblin': np.array([0, 0, 2, 1, 0, 0]),
    'Kenku': np.array([0, 2, 0, 0, 1, 0]),
    'Kobold': np.array([0, 2, 0, 0, 0, 0]),
    'Lizardfolk': np.array([0, 0, 2, 0, 1, 0]),
    'Orc': np.array([2, 0, 1, 0, 0, 0]),
    'Tabaxi': np.array([0, 2, 0, 0, 0, 1]),
    'Triton': np.array([1, 0, 1, 0, 0, 1]),
    'Yuan-Ti Pureblood': np.array([0, 0, 0, 1, 0, 2]),
    'Feral Tiefling': np.array([0, 2, 0, 1, 0, 0]),
    'Changeling': np.array([0, 0, 0, 0, 0, 2]), # choose additional +1
    'Kalashtar': np.array([0, 0, 0, 0, 2, 1]),
    'Orc of Eberron': np.array([2, 0, 1, 0, 0, 0]),
    'Shifter': np.array([0, 0, 0, 0, 0, 0]),
    'Warforged': np.array([0, 0, 2, 0, 0, 0]), # choose additional +1
    'Centaur': np.array([2, 0, 0, 0, 1, 0]),
    'Loxodon': np.array([0, 0, 2, 0, 1, 0]),
    'Minotaur': np.array([2, 0, 1, 0, 0, 0]),
    'Simic Hybrid': np.array([0, 0, 2, 0, 0, 0]), # choose additional +1
    'Vedalken': np.array([0, 0, 0, 2, 1, 0])
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
    return dict(zip(ability_scores, base_stats)), dict(zip(ability_scores, race_bonuses[race_choice])), dict(zip(ability_scores, total_stats))
