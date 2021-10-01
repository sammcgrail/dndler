# import other generators
import generate_race
import generate_name
import generate_class
import generate_background
import generate_stats

# master generator
def generate_all(background_choice='any'):
    # empty character dict that gets filled in by individual generators
    char_dict = {'race':'',
                 'name':'',
                 'class':'',
                 'background':{},
                 'stats':{},
                 'sources':{}}
    class_source = ''
    race_source = ''
    # background_source = ''
    base_stats = {},
    race_bonuses = {},
    total_stats = {},
    char_dict['race'], race_source = generate_race()
    char_dict['name'] = generate_name()
    char_dict['class'], class_source = generate_class()
    char_dict['background'] = generate_background(background_choice)
    base_stats, race_bonuses, total_stats = generate_stats(char_dict['race'])
    char_dict['stats'] = {'Base Stats':base_stats, 'Race Bonuses':race_bonuses, 'Total Stats':total_stats}
    char_dict['sources'] = {'Class':class_source, 'Race':race_source}
    # return filled character dict
    return char_dict
