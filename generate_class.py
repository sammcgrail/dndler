import random

# (k, v) of sourcebooks, classes
classes = {
    'Player\'s Handbook':
        ['Artificer', 'Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk',
        'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard']#,
    #'Tasha\'s Cauldron of Everything':
        #['Artificer']
    }

# randomly select sourcebook, then class within it, and return
def generate_class():
    class_source = random.choice(list(classes.keys()))
    char_class = random.choice(classes[class_source])
    if char_class == 'Artificer':
        class_source = 'Tasha\'s Cauldron of Everything'
    return char_class, class_source
