import os
import generate_all

def introduce_character(char_dict):
    print('')
    print('Hello, ' + char_dict['name'] + '.')
    print('')
    print("You are a " + character['race'] + " " + character['class'] + ".")
    print('')
    print("Your stats are: ")
    print(character['stats']['Total Stats'])
    print('')
    print("Your Story So Far: ")
    print('')
    print("You are a " + character['background']['title'] + ".")
    print('')
    for key in list(character['background'].keys())[1:]:
        print(key.capitalize() + ": \"" + character['background'][key] + '\"')

os.system('cls')

d_to_dndl = ""

while (d_to_dndl != "d"):
    d_to_dndl = input("Enter D to DNDL | X to EXIT: ").lower()
    if (d_to_dndl == "d"):
        os.system('cls')
        print("=======================")
        print("|         THE         |")
        print("|        DNDLR        |")
        print("=======================")
        print("")
        char_dict = generate_all()
        introduce_character(char_dict)
    elif (d_to_dndl == "x"):
        exit()
    d_to_dndl = ""
