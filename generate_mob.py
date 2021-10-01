import random
import generate_all

# 'Acolyte', 'Charlatan', 'Criminal', 'Entertainer', 'Folk Hero', 'Gladiator',
# 'Guild Artisan', 'Guild Merchant', 'Hermit', 'Knight', 'Noble', 'Outlander',
# 'Pirate', 'Sage', 'Sailor', 'Soldier', 'Spy', 'Urchin'

def randomize_mob_list(num, background):
    x = 0
    mob_list = []
    while x < num:
        mob_list.append(random.choice(background))
        x+=1
    return mob_list

def generate_mob(num, background):
    mob_list = randomize_mob_list(num, background)
    all_chars = []
    x = 0
    while x < num:
        all_chars.append(generate_all(mob_list[x]))
        x+=1
    return all_chars

def print_char(char_dict):
    print('')
    print('Hello, ' + str(char_dict['name']) + '.')
    print('')
    print('You are a(n) ' + str(char_dict['race']) + ' ' + str(char_dict['class']) + '.')
    print('')
    print('Your stats are: ' + str(char_dict['stats']['Total Stats']))
    print('')
    print('Your Story So Far:')
    print('Your Background is as a(n) ' + char_dict['background']['title'])
    print('')
    print('Ideal: ' + '\"' + char_dict['background']['ideal'] + '\"')
    print('Trait: ' + '\"' + char_dict['background']['trait'] + '\"')
    print('Bond: ' + '\"' + char_dict['background']['bond'] + '\"')
    print('Flaw: ' + '\"' + char_dict['background']['flaw'] + '\"')
    print('')

def print_mob(full_mob):
    os.system('cls')
    print('============================================================================')
    for each in full_mob:
        print_char(each)
        print('---------------------------------------------------------------------------')


# common mobs:
pirate_mob = generate_mob(10, ['Sailor', 'Pirate', 'Criminal'])
military_mob = generate_mob(10, ['Soldier', 'Knight', 'Noble'])
streetrat_mob = generate_mob(10, ['Urchin', 'Charlatan', 'Spy'])
