# import other generators
import generate_race
import generate_name
import generate_class
import generate_background
import generate_stats

# master generator
def generate_all():
    # empty character dict that gets filled in by individual generators
    char_dict = {"race":"",
                 "name":"",
                 "class":"",
                 "background":{},
                 "stats":{}}
    char_dict["race"] = generate_race()
    #char_dict["name"] = generate_name()
    char_dict["class"] = generate_class()
    char_dict["background"] = generate_background()
    char_dict['stats'] = generate_stats(char_dict["race"])
    # return filled character dict
    return char_dict
