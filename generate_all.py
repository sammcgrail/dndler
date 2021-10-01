# import other generators
import generate_race
import generate_name
import generate_class
import generate_background
import generate_stats

import os

# master generator
def generate_all(background_choice='any', weighted=False):
    # empty character dict that gets filled in by individual generators
    char_dict = {'race':'',
                 'name':'',
                 'class':'',
                 'background':{},
                 'stats':{},
                 'sources':{}}
    # other initializations
    class_source = ''
    race_source = ''
    # background_source = ''
    base_stats = {},
    race_bonuses = {},
    total_stats = {},
    # assignments begin here
    char_dict['race'], race_source = generate_race()
    char_dict['name'] = generate_name()
    char_dict['class'], class_source = generate_class()
    char_dict['background'] = generate_background(background_choice)
    if weighted==False:
        base_stats, race_bonuses, total_stats = generate_unweighted_stats(char_dict['race'])
    elif weighted==True:
        base_stats, race_bonuses, total_stats = generate_weighted_stats(char_dict['race'], char_dict['class'])
    char_dict['stats'] = {'Base Stats':base_stats, 'Race Bonuses':race_bonuses, 'Total Stats':total_stats}
    char_dict['sources'] = {'Class':class_source, 'Race':race_source}
    # return filled character dict
    return char_dict

def print_char(char_dict):
    os.system('cls')
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
