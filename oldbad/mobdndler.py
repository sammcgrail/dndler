import os
import random
from dndler_prep import character, roll_mob_char, backgrounds

os.system('cls')

mob = {}

chosen_bg = ''

while chosen_bg not in backgrounds.keys():
    os.system('cls')
    print('')
    print("Pick one of the following: ")
    print('')
    for key in backgrounds:
        print(key)
    print('')
    chosen_bg =  input("Enter here (case sensitive): ")

print('')
mob_size = int(input('How many characters in this mob? '))
print('')

print("There are " + str(mob_size) + " " + chosen_bg + "(s)")
print('')

num = 0

while num < mob_size:
    char_count = "char_"+str(num+1)
    mob[char_count] = roll_mob_char(chosen_bg)
    print("============================================================")
    print(mob[char_count]['name'] + " | " + mob[char_count]['race'] + " " + mob[char_count]['class'] + " | " + mob[char_count]['background']['title'])
    # print("STR: " + str(mob[char_count]['stats']['STR']) + ", DEX: " + str(mob[char_count]['stats']['DEX']) + ", CON: " + str(mob[char_count]['stats']['CON']) + ", INT: " + str(mob[char_count]['stats']['INT']) + ", WIS: " + str(mob[char_count]['stats']['WIS']) + ", CHA: " + str(mob[char_count]['stats']['CHA']))
    print('')
    if 'Routine' in mob[char_count]['background'].keys():
        print("They like performing routines as a " + mob[char_count]['background']['Routine'] + ".")
    elif 'Specialty' in mob[char_count]['background'].keys():
        print("Their specialty is as a " + mob[char_count]['background']['Specialty'] + ".")
    elif 'Role' in mob[char_count]['background'].keys():
        print("Their primary role is as " + mob[char_count]['background']['Role'] + ".")
    elif 'Field of study' in mob[char_count]['background'].keys():
        print("They contribute to academia as a " + mob[char_count]['background']['Field of study'] + ".")
    elif 'Guild business' in mob[char_count]['background'].keys():
        print("They work hard dealing with " + mob[char_count]['background']['Guild business'] + ".")
    elif 'Origin' in mob[char_count]['background'].keys():
        print("Their origins are as a " + mob[char_count]['background']['Origin'] + ".")
    for key in list(mob[char_count]['background'].keys())[1:]:
        if key in ['Routine', 'Specialty', 'Role', 'Field of study', 'Guild business', 'Origin']:
            print(' ')
        else :
            print(key.capitalize() + ": \"" + mob[char_count]['background'][key] + '\"')
    num += 1
print("============================================================")
print('')
