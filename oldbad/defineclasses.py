import random

# stat roller for each class
def roll_artificer():
    stats = [
    random.randint(7,15), # strength
    random.randint(11,16), # dexterity
    random.randint(13,17), # constitution
    random.randint(14,18), # intelligence
    random.randint(6,15), # wisdom
    random.randint(7,16) # charisma
    ]
    return stats

def roll_barbarian():
    stats = [
    random.randint(14,18), # strength
    random.randint(12,17), # dexterity
    random.randint(13,18), # constitution
    random.randint(5,15), # intelligence
    random.randint(6,16), # wisdom
    random.randint(7,17) # charisma
    ]
    return stats

def roll_bard():
    stats = [
    random.randint(6,15), # strength
    random.randint(13,18), # dexterity
    random.randint(8,16), # constitution
    random.randint(8,16), # intelligence
    random.randint(8,16), # wisdom
    random.randint(14,18) # charisma
    ]
    return stats

def roll_cleric():
    stats = [
    random.randint(12,18), # strength
    random.randint(8,16), # dexterity
    random.randint(12,18), # constitution
    random.randint(7,16), # intelligence
    random.randint(14,18), # wisdom
    random.randint(6,15) # charisma
    ]
    return stats

def roll_druid():
    stats = [
    random.randint(6,15), # strength
    random.randint(7,16), # dexterity
    random.randint(14,18), # constitution
    random.randint(8,16), # intelligence
    random.randint(14,18), # wisdom
    random.randint(7,15) # charisma
    ]
    return stats

def roll_fighter():
    stats = [
    random.randint(14,18), # strength
    random.randint(13,18), # dexterity
    random.randint(12,18), # constitution
    random.randint(9,16), # intelligence
    random.randint(6,15), # wisdom
    random.randint(6,15) # charisma
    ]
    return stats

def roll_monk():
    stats = [
    random.randint(9,16), # strength
    random.randint(14,18), # dexterity
    random.randint(9,18), # constitution
    random.randint(7,16), # intelligence
    random.randint(13,17), # wisdom
    random.randint(6,15) # charisma
    ]
    return stats

def roll_paladin():
    stats = [
    random.randint(14,18), # strength
    random.randint(7,16), # dexterity
    random.randint(8,15), # constitution
    random.randint(8,16), # intelligence
    random.randint(6,16), # wisdom
    random.randint(12,18) # charisma
    ]
    return stats

def roll_ranger():
    stats = [
    random.randint(10,17), # strength
    random.randint(14,18), # dexterity
    random.randint(8,16), # constitution
    random.randint(5,15), # intelligence
    random.randint(13,18), # wisdom
    random.randint(6,16) # charisma
    ]
    return stats

def roll_rogue():
    stats = [
    random.randint(8,16), # strength
    random.randint(14,18), # dexterity
    random.randint(8,16), # constitution
    random.randint(12,18), # intelligence
    random.randint(8,15), # wisdom
    random.randint(12,18) # charism
    ]
    return stats

def roll_sorcerer():
    stats = [
    random.randint(6,16), # strength
    random.randint(7,16), # dexterity
    random.randint(12,18), # constitution
    random.randint(7,16), # intelligence
    random.randint(6,16), # wisdom
    random.randint(14,18) # charisma
    ]
    return stats

def roll_warlock():
    stats = [
    random.randint(7,16), # strength
    random.randint(8,16), # dexterity
    random.randint(12,18), # constitution
    random.randint(7,16), # intelligence
    random.randint(6,15), # wisdom
    random.randint(14,18) # charisma
    ]
    return stats

def roll_wizard():
    stats = [
    random.randint(5,15), # strength
    random.randint(13,18), # dexterity
    random.randint(12,17), # constitution
    random.randint(14,18), # intelligence
    random.randint(6,17), # wisdom
    random.randint(6,16) # charisma
    ]
    return stats
