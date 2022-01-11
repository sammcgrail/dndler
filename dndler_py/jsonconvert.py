import json
import copy
from generate_all import *

def stringify(dict):
    for k in dict:
        dict[k] = str(dict[k])

def stringify_character(dict):
    dict['hitpoints'] = str(dict['hitpoints'])
    dict['armorclass'] = str(dict['armorclass'])
    stringify(dict['stats']['Base Stats'])
    stringify(dict['stats']['Race Bonuses'])
    stringify(dict['stats']['Total Stats'])
    stringify(dict['stats']['Modifiers'])
    stringify(dict['proficiency']['Saving Throws'])
    stringify(dict['proficiency']['Skills'])

def dict_to_json(dict):
    copy_char = copy.deepcopy(dict)
    stringify_character(copy_char)
    json_char = json.dumps(copy_char)
    return json_char
