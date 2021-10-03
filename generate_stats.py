import random
import numpy as np

# formula for ability score --> ability mod
def calc_mod_from_score(ability_score):
    ability_mod = (ability_score-10)//2
    return ability_mod

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
    if dicerolls.count(1) >= 2:
        dicerolls = [random.randint(1,6), random.randint(1,6), random.randint(1,6), random.randint(1,6)]
    dicerolls = sorted(dicerolls, reverse=True)
    dicerolls = dicerolls[0:3]
    return sum(dicerolls)

# generate stats, assigned randomly to ability scores
def generate_unweighted_stats(race_choice):
    base_stats = [roll_4_drop_lowest(), roll_4_drop_lowest(), roll_4_drop_lowest(), roll_4_drop_lowest(), roll_4_drop_lowest(), roll_4_drop_lowest()]
    total_stats = base_stats + race_bonuses[race_choice]
    total_modifiers = calc_mod_from_score(total_stats)
    return dict(zip(ability_scores, base_stats)), dict(zip(ability_scores, race_bonuses[race_choice])), dict(zip(ability_scores, total_stats)), dict(zip(ability_scores, total_modifiers))

# generate stats, assign with priority to certain scores, assign rest randomly
def generate_weighted_stats(race_choice, class_choice):
    base_stats = [0, 0, 0, 0, 0, 0]
    sorted_stats = sorted([roll_4_drop_lowest(), roll_4_drop_lowest(), roll_4_drop_lowest(), roll_4_drop_lowest(), roll_4_drop_lowest(), roll_4_drop_lowest()], reverse=True)
    if class_choice == 'Artificer':
        base_stats[3] = sorted_stats.pop(0)
        base_stats[1] = sorted_stats.pop(0)
        random.shuffle(sorted_stats)
        base_stats[0], base_stats[2], base_stats[4], base_stats[5] = sorted_stats.pop(0), sorted_stats.pop(0), sorted_stats.pop(0), sorted_stats.pop(0)
    elif class_choice == 'Barbarian':
        base_stats[0] = sorted_stats.pop(0)
        base_stats[2] = sorted_stats.pop(0)
        base_stats[1] = sorted_stats.pop(0)
        random.shuffle(sorted_stats)
        base_stats[3], base_stats[4], base_stats[5] = sorted_stats.pop(0), sorted_stats.pop(0), sorted_stats.pop(0)
    elif class_choice == 'Bard':
        base_stats[5] = sorted_stats.pop(0)
        base_stats[1] = sorted_stats.pop(0)
        random.shuffle(sorted_stats)
        base_stats[0], base_stats[2], base_stats[3], base_stats[4] = sorted_stats.pop(0), sorted_stats.pop(0), sorted_stats.pop(0), sorted_stats.pop(0)
    elif class_choice == 'Cleric':
        base_stats[4] = sorted_stats.pop(0)
        base_stats[2] = sorted_stats.pop(0)
        random.shuffle(sorted_stats)
        base_stats[0], base_stats[1], base_stats[3], base_stats[5] = sorted_stats.pop(0), sorted_stats.pop(0), sorted_stats.pop(0), sorted_stats.pop(0)
    elif class_choice == 'Druid':
        base_stats[4] = sorted_stats.pop(0)
        base_stats[2] = sorted_stats.pop(0)
        random.shuffle(sorted_stats)
        base_stats[0], base_stats[1], base_stats[3], base_stats[5] = sorted_stats.pop(0), sorted_stats.pop(0), sorted_stats.pop(0), sorted_stats.pop(0)
    elif class_choice == 'Fighter':
        base_stats[0] = sorted_stats.pop(0)
        base_stats[1] = sorted_stats.pop(0)
        base_stats[2] = sorted_stats.pop(0)
        random.shuffle(sorted_stats)
        base_stats[3], base_stats[4], base_stats[5] = sorted_stats.pop(0), sorted_stats.pop(0), sorted_stats.pop(0)
    elif class_choice == 'Monk':
        base_stats[1] = sorted_stats.pop(0)
        base_stats[4] = sorted_stats.pop(0)
        base_stats[2] = sorted_stats.pop(0)
        random.shuffle(sorted_stats)
        base_stats[0], base_stats[3], base_stats[5] = sorted_stats.pop(0), sorted_stats.pop(0), sorted_stats.pop(0)
    elif class_choice == 'Paladin':
        base_stats[5] = sorted_stats.pop(0)
        base_stats[0] = sorted_stats.pop(0)
        base_stats[3] = sorted_stats.pop(0)
        random.shuffle(sorted_stats)
        base_stats[1], base_stats[2], base_stats[4] = sorted_stats.pop(0), sorted_stats.pop(0), sorted_stats.pop(0)
    elif class_choice == 'Ranger':
        base_stats[1] = sorted_stats.pop(0)
        base_stats[4] = sorted_stats.pop(0)
        random.shuffle(sorted_stats)
        base_stats[0], base_stats[2], base_stats[3], base_stats[5] = sorted_stats.pop(0), sorted_stats.pop(0), sorted_stats.pop(0), sorted_stats.pop(0)
    elif class_choice == 'Rogue':
        base_stats[1] = sorted_stats.pop(0)
        random.shuffle(sorted_stats)
        base_stats[0], base_stats[2], base_stats[3], base_stats[4], base_stats[5] = sorted_stats.pop(0), sorted_stats.pop(0), sorted_stats.pop(0), sorted_stats.pop(0), sorted_stats.pop(0)
    elif class_choice == 'Sorcerer':
        base_stats[5] = sorted_stats.pop(0)
        base_stats[2] = sorted_stats.pop(0)
        random.shuffle(sorted_stats)
        base_stats[0], base_stats[1], base_stats[3], base_stats[4] = sorted_stats.pop(0), sorted_stats.pop(0), sorted_stats.pop(0), sorted_stats.pop(0)
    elif class_choice == 'Warlock':
        base_stats[5] = sorted_stats.pop(0)
        base_stats[1] = sorted_stats.pop(0)
        random.shuffle(sorted_stats)
        base_stats[0], base_stats[2], base_stats[3], base_stats[4] = sorted_stats.pop(0), sorted_stats.pop(0), sorted_stats.pop(0), sorted_stats.pop(0)
    elif class_choice == 'Wizard':
        base_stats[3] = sorted_stats.pop(0)
        random.shuffle(sorted_stats)
        base_stats[0], base_stats[1], base_stats[2], base_stats[4], base_stats[5] = sorted_stats.pop(0), sorted_stats.pop(0), sorted_stats.pop(0), sorted_stats.pop(0), sorted_stats.pop(0)
    total_stats = base_stats + race_bonuses[race_choice]
    total_modifiers = calc_mod_from_score(total_stats)
    return dict(zip(ability_scores, base_stats)), dict(zip(ability_scores, race_bonuses[race_choice])), dict(zip(ability_scores, total_stats)), dict(zip(ability_scores, total_modifiers))
