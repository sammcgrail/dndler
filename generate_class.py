import random

# list of 5e classes
# future proofing for handling multiple sourcebooks
classes = {
    'Player\'s Handbook':
        ['Artificer', 'Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk',
        'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard']#,
    #'Tasha\'s Cauldron of Everything':
        #['Artificer']
    }

# randomly select class and return
def generate_class():
    class_source = random.choice(list(classes.keys()))
    char_class = random.choice(classes[class_source])
    return char_class, class_source
