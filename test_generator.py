from generate_all import *

x = 0

while x != 1:
    char_dict = generate_all()
    print(char_dict['class'] + ' ' + char_dict['background']['Title'])
