# import other generators
from generate_race import *
from generate_name import *
from generate_class import *
from generate_background import *
from generate_stats import *
from generate_equipment import *
import os

# master generator
def generate_all(background_choice='any', weighted=False):
    # empty character dict that gets filled in by individual generators
    char_dict = {'race':'',
                 'name':'',
                 'class':'',
                 'background':{},
                 'stats':{},
                 'equipment':[],
                 'sources':{}}
    # other initializations
    class_source = ''
    race_source = ''
    background_source = ''
    base_stats = {}
    race_bonuses = {}
    total_stats = {}
    # assignments begin here
    char_dict['race'], race_source = generate_race()
    char_dict['name'] = generate_name()
    char_dict['class'], class_source = generate_class()
    char_dict['background'], background_source = generate_background(background_choice)
    char_dict['equipment'] = generate_equipment(char_dict['class'], char_dict['background']['Title'])
    if weighted==False:
        base_stats, race_bonuses, total_stats = generate_unweighted_stats(char_dict['race'])
    elif weighted==True:
        base_stats, race_bonuses, total_stats = generate_weighted_stats(char_dict['race'], char_dict['class'])
    char_dict['stats'] = {'Base Stats':base_stats, 'Race Bonuses':race_bonuses, 'Total Stats':total_stats}
    char_dict['sources'] = {'Race':race_source, 'Class':class_source, 'Background':background_source}
    # return filled character dict
    return char_dict

def print_char(char_dict):
    os.system('cls')
    print('========================')
    print('|         THE          |')
    print('|        DNDLER        |')
    print('========================')
    print('')
    print('Hello, ' + str(char_dict['name']) + '.')
    print('')
    print('You are a(n) ' + str(char_dict['race']) + ' ' + str(char_dict['class']) + '.')
    print('')
    print('Your stats are: ' + str(char_dict['stats']['Total Stats']))
    print('')
    print('Your Story So Far:')
    print('Your Background is as a(n) ' + char_dict['background']['Title'])
    print('')
    if list(char_dict['background'])[1] != '':
        extra = list(char_dict['background'])[1]
        desc = char_dict['background'][extra]
        print(extra + ': ' + desc)
    print('Trait: ' + '\"' + char_dict['background']['Trait'] + '\"')
    print('Ideal: ' + '\"' + char_dict['background']['Ideal'] + '\"')
    print('Bond: ' + '\"' + char_dict['background']['Bond'] + '\"')
    print('Flaw: ' + '\"' + char_dict['background']['Flaw'] + '\"')
    print('')
    print('Your Gear Contains:')
    for item in char_dict['equipment']:
        print(item)
    print('')
    print('Sourcebooks: ')
    print('Race: ' + char_dict['sources']['Race'])
    print('Class: ' + char_dict['sources']['Class'])
    print('Background: ' + char_dict['sources']['Background'])
    print('')
