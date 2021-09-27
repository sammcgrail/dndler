import random

# list of 5e classes
classes = ['Artificer', 'Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter',
    'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard']

# randomly select class and return
def generate_class():
    char_class = random.choice(classes)
    return char_class
