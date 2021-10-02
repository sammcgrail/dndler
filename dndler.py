from generate_all import *

os.system('cls')
print('========================')
print('|         THE          |')
print('|        DNDLER        |')
print('========================')
print('')

d_to_dndl = ''
char_dict = {}
last_char = {}
all_chars = []

while (d_to_dndl != 'd'):
    d_to_dndl = input('Enter D to DNDL | B to BACK | S to SAVE | X to EXPORT | Q to QUIT: ').lower()
    if (d_to_dndl == 'd'):
        last_char = char_dict
        char_dict = generate_all(weighted=True)
        print_char(char_dict)
    elif (d_to_dndl == 'b'):
        if last_char == {}:
            print('')
            print('Nothing to Go Back to...')
            print('')
        else:
            print_char(last_char)
            char_dict = last_char
    elif (d_to_dndl == 's'):
        if char_dict == {}:
            print('')
            print('Nothing to Save...')
            print('')
        else:
            new_row = save_char(char_dict)
            all_chars.append(new_row)
            print('')
            print('Current Characted Saved!')
            print('')
    elif (d_to_dndl == "x"):
        if all_chars == []:
            print('')
            print('Nothing to Export...')
            print('')
        else:
            export_chars(all_chars)
            print('')
            print('All Saved Characters Exported!')
            print('')
    elif (d_to_dndl == 'q'):
        print('')
        print('Thanks for Dindlin\'!')
        print('')
        exit()
    d_to_dndl = ''
