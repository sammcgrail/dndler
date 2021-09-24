import os
from dndler_prep import roll_new_char

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
        roll_new_char()
    elif (d_to_dndl == "x"):
        exit()
    d_to_dndl = ""
