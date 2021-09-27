import random

# list of 5e races
races = ['Dragonborn',
         'Hill Dwarf', 'Mountain Dwarf',
         'Drow Elf', 'High Elf', 'Wood Elf',
         'Forest Gnome', 'Rock Gnome',
         'Half-Elf',
         'Lightfoot Halfling', 'Stout Halfling',
         'Half-Orc',
         'Human', 'Variant Human',
         'Tiefling']

# randomly select race and return
def generate_race():
    char_race = random.choice(races)
    return char_race
