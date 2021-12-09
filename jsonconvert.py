import json
from generate_all import *

def stringify(dict):
    for k in dict:
        dict[k] = str(dict[k])

def stringify_character(char_dict):
    stringify(char_dict['stats']['Base Stats'])
    stringify(char_dict['stats']['Race Bonuses'])
    stringify(char_dict['stats']['Total Stats'])
    stringify(char_dict['stats']['Modifiers'])
    stringify(char_dict['proficiency']['Saving Throws'])
    stringify(char_dict['proficiency']['Skills'])

char_dict = generate_all(5, weighted=True)

stringify_character(char_dict)

json_char = json.dumps(char_dict)

print(json_char)
