import os
from dndler_prep import character, reset_character, roll_party_char

os.system('cls')

party = {
    'char_1': {
        'name': '',
        'stats': {},
        'class': '',
        'race': '',
        'background': {},
        'notes': ''
    },
    'char_2': {
        'name': '',
        'stats': {},
        'class': '',
        'race': '',
        'background': {},
        'notes': ''
    },
    'char_3': {
        'name': '',
        'stats': {},
        'class': '',
        'race': '',
        'background': {},
        'notes': ''
    },
    'char_4': {
        'name': '',
        'stats': {},
        'class': '',
        'race': '',
        'background': {},
        'notes': ''
    },
    'char_5': {
        'name': '',
        'stats': {},
        'class': '',
        'race': '',
        'background': {},
        'notes': ''
    }
}

d_to_dndl = ""

while (d_to_dndl != "d"):
    d_to_dndl = input("Enter D to DNDL | X to EXIT: ").lower()
    if (d_to_dndl == "d"):
        reset_character()
        os.system('cls')
        print("=======================")
        print("|         THE         |")
        print("|        DNDLR        |")
        print("=======================")
        print("")
        party['char_1'] = roll_party_char()
        party['char_2'] = roll_party_char()
        party['char_3'] = roll_party_char()
        party['char_4'] = roll_party_char()
        party['char_5'] = roll_party_char()
        print("==================================================================")
        print("| " + party['char_1']['name'] + " | " + party['char_1']['race'] + " " + party['char_1']['class'] + " | " + party['char_1']['background']['title'])
        print("| STR: " + str(party['char_1']['stats']['STR']) + ", DEX: " + str(party['char_1']['stats']['DEX']) + ", CON: " + str(party['char_1']['stats']['CON']) + ", INT: " + str(party['char_1']['stats']['INT']) + ", WIS: " + str(party['char_1']['stats']['WIS']) + ", CHA: " + str(party['char_1']['stats']['CHA']))
        print("==================================================================")
        print("| " + party['char_2']['name'] + " | " + party['char_2']['race'] + " " + party['char_2']['class'] + " | " + party['char_2']['background']['title'])
        print("| STR: " + str(party['char_2']['stats']['STR']) + ", DEX: " + str(party['char_2']['stats']['DEX']) + ", CON: " + str(party['char_2']['stats']['CON']) + ", INT: " + str(party['char_2']['stats']['INT']) + ", WIS: " + str(party['char_2']['stats']['WIS']) + ", CHA: " + str(party['char_2']['stats']['CHA']))
        print("==================================================================")
        print("| " + party['char_3']['name'] + " | " + party['char_3']['race'] + " " + party['char_3']['class'] + " | " + party['char_3']['background']['title'])
        print("| STR: " + str(party['char_3']['stats']['STR']) + ", DEX: " + str(party['char_3']['stats']['DEX']) + ", CON: " + str(party['char_3']['stats']['CON']) + ", INT: " + str(party['char_3']['stats']['INT']) + ", WIS: " + str(party['char_3']['stats']['WIS']) + ", CHA: " + str(party['char_3']['stats']['CHA']))
        print("==================================================================")
        print("| " + party['char_4']['name'] + " | " + party['char_4']['race'] + " " + party['char_4']['class'] + " | " + party['char_4']['background']['title'])
        print("| STR: " + str(party['char_4']['stats']['STR']) + ", DEX: " + str(party['char_4']['stats']['DEX']) + ", CON: " + str(party['char_4']['stats']['CON']) + ", INT: " + str(party['char_4']['stats']['INT']) + ", WIS: " + str(party['char_4']['stats']['WIS']) + ", CHA: " + str(party['char_4']['stats']['CHA']))
        print("==================================================================")
        print("| " + party['char_5']['name'] + " | " + party['char_5']['race'] + " " + party['char_5']['class'] + " | " + party['char_5']['background']['title'])
        print("| STR: " + str(party['char_5']['stats']['STR']) + ", DEX: " + str(party['char_5']['stats']['DEX']) + ", CON: " + str(party['char_5']['stats']['CON']) + ", INT: " + str(party['char_5']['stats']['INT']) + ", WIS: " + str(party['char_5']['stats']['WIS']) + ", CHA: " + str(party['char_5']['stats']['CHA']))
        print("==================================================================")
        print('')
    elif (d_to_dndl == "x"):
        exit()
    d_to_dndl = ""
