from generate_all import *

os.system('cls')

d_to_dndl = ""

while (d_to_dndl != "d"):
    d_to_dndl = input("Enter D to DNDL | X to EXIT: ").lower()
    if (d_to_dndl == "d"):
        char_dict = generate_all()
        print_char(char_dict)
    elif (d_to_dndl == "x"):
        exit()
    d_to_dndl = ""
