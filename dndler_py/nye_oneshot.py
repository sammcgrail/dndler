from generate_all import *
import random

# for flattening lists, remove nested lists
def flatten(lis):
     for item in lis:
         if isinstance(item, Iterable) and not isinstance(item, str):
             for x in flatten(item):
                 yield x
         else:
             yield item

# list of stones and qualities by month
birthstones = {1: ('Garnet', ['seed', 'new beginnings']),
               2: ('Amethyst', ['intoxication', 'antidote']),
               3: ('Aquamarine', ['water', 'sea']),
               4: ('Diamond', ['superiority', 'luster']),
               5: ('Emerald', ['earth', 'nature']),
               6: ('Pearl', ['metamorphosis', 'change']),
               7: ('Ruby', ['royalty', 'blood']),
               8: ('Peridot', ['fortune', 'prosperity']),
               9: ('Sapphire', ['loyalty', 'sincerity']),
               10: ('Opal', ['spectrum', 'chaos']),
               11: ('Topaz', ['adaptive']),
               12: ('Tanzanite', ['uniqueness', 'grandness'])}

# list of namesakes and qualities bv month
etymology = {1: ('Janus', ['new beginnings', 'transitions', 'time']),
               2: ('Februum', ['purification']),
               3: ('Mars', ['war']),
               4: ('Aprilis', ['to open', 'bloom']),
               5: ('Maia', ['fertility', 'earth']),
               6: ('Juno', ['marriage', 'youth']),
               7: ('Julius', ['contentment', 'security']),
               8: ('Augustus', ['beauty', 'strength of character', 'love']),
               9: ('Septem', ['7', 'harvest']),
               10: ('Octus', ['8']),
               11: ('Novem', ['9']),
               12: ('Decem', ['solstice', 'end', 'celebration'])}

def calendar_roll_table():
    dice_one = random.randint(1,12)
    dice_two = random.randint(1,12)
    qualities = []
    qualities.append(birthstones[dice_one][1])
    qualities.append(etymology[dice_two][1])
    qualities = list(flatten(qualities))
    print('')
    print(birthstones[dice_one][0] + ' + ' + etymology[dice_two][0])
    print(qualities)
    print('')

def generate_npc():
    # empty character dict that gets filled in by individual generators
    name = generate_name()
