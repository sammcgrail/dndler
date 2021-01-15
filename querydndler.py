import os
import random
from dndler_prep import *

def roll_min(charclass='random', race='random', background='random'):
    if charclass=='random':
        roll_class_and_stats()
    else :
        character['class'] = charclass
        roll_class_stats()

    if race=='random':
        roll_race()
    else :
        character['race'] = race
        calculate_stats()

    if background=='random':
        character['background'] = roll_background()
    else :
        character['background']['title'] = background
        character['background'] = roll_background_details(background)

    roll_name()

    return character


d_to_dndl = ""

os.system('cls')

while (d_to_dndl != "d"):
    d_to_dndl = input("Enter D to DNDL | X to EXIT: ").lower()
    if (d_to_dndl == "d"):
        os.system('cls')
        print("=======================")
        print("|         THE         |")
        print("|        DNDLR        |")
        print("=======================")
        print("")
        roll_min(charclass='Fighter', race='Variant Human', background='Folk Hero')
        introduce_character()
    elif (d_to_dndl == "x"):
        os.system('cls')
        print("=byebye=")
        os.system('cls')
        print("=byebye=")
        os.system('cls')
        print("=byebye=")
        os.system('cls')
        exit()
    d_to_dndl = ""
