import random

artisans_tools = ['Alchemist\'s Supplies', 'Brewer\'s Supplies', 'Calligrapher\'s Supplies',
                  'Carpenter\'s Tools', 'Cartographer\'s Tools', 'Cobbler\'s Tools',
                  'Cook\'s Utensils', 'Glassblower\'s Tools', 'Jeweler\'s Tools',
                  'Leatherworker\'s Tools', 'Mason\'s Tools', 'Painter\'s Supplies',
                  'Potter\'s Tools', 'Smith\'s Tools', 'Tinker\'s Tools', 'Weaver\'s Tools',
                  'Woodcarver\'s Tools', 'Thieves\' Tools', 'Navigator\'s Tools']

musical_instruments = ['Bagpipes', 'Drum', 'Dulcimer', 'Flute', 'Lute', 'Lyre',
                        'Horn', 'Pan Flute', 'Shawm', 'Viol']

all_skills = ['Acrobatics', 'Animal', 'Arcana', 'Athletics', 'Deception', 'History',
              'Insight', 'Intimidation', 'Investigation', 'Medicine', 'Nature',
              'Perception', 'Performance', 'Religion', 'SleightofHand', 'Stealth', 'Survival']

# for deciding among options
def decide_between(choice_list):
    return random.choice(choice_list)

# calculate proficiency bonus
def calc_proficiency_bonus(char_level):
    proficiency_bonus = 2
    if char_level >= 5:
        proficiency_bonus = 3
        if char_level >= 9:
            proficiency_bonus = 4
            if char_level >= 13:
                proficiency_bonus = 5
                if char_level >= 17:
                    proficiency_bonus = 6
    return proficiency_bonus

def generate_proficiency(modifiers, classchoice, char_level):
    str_mod, dex_mod, con_mod = modifiers['STR'], modifiers['DEX'], modifiers['CON']
    int_mod, wis_mod, cha_mod = modifiers['INT'], modifiers['WIS'], modifiers['CHA']
    proficiency_bonus = calc_proficiency_bonus(char_level)
    proficient_skills = []
    proficiency_dict = {
    'Armor': [],
    'Weapons': [],
    'Tools': [],
    'Saving Throws': {
        'STR': str_mod,
        'DEX': dex_mod,
        'CON': con_mod,
        'INT': int_mod,
        'WIS': wis_mod,
        'CHA': cha_mod
        },
    'Languages': [],
    'Skills': {
        'Acrobatics': dex_mod,
        'Animal': wis_mod,
        'Arcana': int_mod,
        'Athletics': str_mod,
        'Deception': cha_mod,
        'History': int_mod,
        'Insight': wis_mod,
        'Intimidation': cha_mod,
        'Investigation': int_mod,
        'Medicine': wis_mod,
        'Nature': int_mod,
        'Perception': wis_mod,
        'Performance': cha_mod,
        'Persuasion': cha_mod,
        'Religion': int_mod,
        'SleightofHand': dex_mod,
        'Stealth': dex_mod,
        'Survival': wis_mod
        },
    'Proficient Skills': []
    }
    if classchoice == 'Artificer':
        proficiency_dict['Armor'] = ['Light Armor', 'Medium Armor', 'Shields']
        proficiency_dict['Weapons'] = ['Simple Weapons']
        proficiency_dict['Tools'] = ['Thieves\' Tools', 'Tinker\'s Tools']
        next_choice = decide_between(artisans_tools)
        while next_choice in proficiency_dict['Tools']:
            next_choice = decide_between(artisans_tools)
        proficiency_dict['Tools'].append(next_choice)
        proficiency_dict['Saving Throws']['CON'] = proficiency_dict['Saving Throws']['CON'] + proficiency_bonus
        proficiency_dict['Saving Throws']['INT'] = proficiency_dict['Saving Throws']['INT'] + proficiency_bonus
        skill_options = ['Arcana', 'History', 'Investigation', 'Medicine', 'Nature', 'Perception', 'SleightofHand']
        proficient_skills = random.sample(skill_options, 2)
        for skill in proficient_skills:
            proficiency_dict['Skills'][skill] = proficiency_dict['Skills'][skill] + proficiency_bonus
    elif classchoice == 'Barbarian':
        proficiency_dict['Armor'] = ['Light Armor', 'Medium Armor', 'Shields']
        proficiency_dict['Weapons'] = ['Simple Weapons']
        proficiency_dict['Saving Throws']['STR'] = proficiency_dict['Saving Throws']['STR'] + proficiency_bonus
        proficiency_dict['Saving Throws']['CON'] = proficiency_dict['Saving Throws']['CON'] + proficiency_bonus
        skill_options = ['Animal', 'Athletics', 'Intimidation', 'Nature', 'Perception', 'Survival']
        proficient_skills = random.sample(skill_options, 2)
        for skill in proficient_skills:
            proficiency_dict['Skills'][skill] = proficiency_dict['Skills'][skill] + proficiency_bonus
    elif classchoice == 'Bard':
        proficiency_dict['Armor'] = ['Light Armor']
        proficiency_dict['Weapons'] = ['Simple Weapons', 'Hand Crossbow', 'Longsword', 'Rapier', 'Shortsword']
        proficiency_dict['Tools'] = random.sample(musical_instruments, 3)
        proficiency_dict['Saving Throws']['STR'] = proficiency_dict['Saving Throws']['STR'] + proficiency_bonus
        proficiency_dict['Saving Throws']['CON'] = proficiency_dict['Saving Throws']['CON'] + proficiency_bonus
        proficient_skills = random.sample(all_skills, 3)
        for skill in proficient_skills:
            proficiency_dict['Skills'][skill] = proficiency_dict['Skills'][skill] + proficiency_bonus
    elif classchoice == 'Cleric':
        proficiency_dict['Armor'] = ['Light Armor', 'Medium Armor', 'Shields']
        proficiency_dict['Weapons'] = ['Club', 'Dagger', 'Darts', 'Javelin', 'Mace', 'Quarterstaff', 'Scimitar', 'Sickle', 'Sling', 'Spear']
        proficiency_dict['Tools'] = ['Herbalism Kit']
        proficiency_dict['Saving Throws']['INT'] = proficiency_dict['Saving Throws']['INT'] + proficiency_bonus
        proficiency_dict['Saving Throws']['WIS'] = proficiency_dict['Saving Throws']['WIS'] + proficiency_bonus
        skill_options = ['Arcana', 'Animal', 'Insight', 'Medicine', 'Nature', 'Perception', 'Religion', 'Survival']
        proficient_skills = random.sample(skill_options, 2)
        for skill in proficient_skills:
            proficiency_dict['Skills'][skill] = proficiency_dict['Skills'][skill] + proficiency_bonus
    elif classchoice == 'Druid':
        proficiency_dict['Armor'] = ['Light Armor', 'Medium Armor', 'Shields']
        proficiency_dict['Weapons'] = ['Simple Weapons']
        proficiency_dict['Saving Throws']['WIS'] = proficiency_dict['Saving Throws']['WIS'] + proficiency_bonus
        proficiency_dict['Saving Throws']['CHA'] = proficiency_dict['Saving Throws']['CHA'] + proficiency_bonus
        skill_options = ['History', 'Insight', 'Medicine', 'Persuasion', 'Religion']
        proficient_skills = random.sample(skill_options, 2)
        for skill in proficient_skills:
            proficiency_dict['Skills'][skill] = proficiency_dict['Skills'][skill] + proficiency_bonus
    elif classchoice == 'Fighter':
        proficiency_dict['Armor'] = ['Light Armor', 'Medium Armor', 'Heavy Armor', 'Shields']
        proficiency_dict['Weapons'] = ['Simple Weapons', 'Martial Weapons']
        proficiency_dict['Saving Throws']['STR'] = proficiency_dict['Saving Throws']['STR'] + proficiency_bonus
        proficiency_dict['Saving Throws']['CON'] = proficiency_dict['Saving Throws']['CON'] + proficiency_bonus
        skill_options = ['Acrobatics', 'Animal', 'Athletics', 'History', 'Insight', 'Intimidation', 'Perception', 'Survival']
        proficient_skills = random.sample(skill_options, 2)
        for skill in proficient_skills:
            proficiency_dict['Skills'][skill] = proficiency_dict['Skills'][skill] + proficiency_bonus
    elif classchoice == 'Monk':
        proficiency_dict['Weapons'] = ['Simple Weapons', 'Shortsword']
        tool_choice = decide_between(['Artisan\'s Tools', 'Musical Instrument'])
        if tool_choice == 'Artisan\'s Tools':
            proficiency_dict['Tools'].append(decide_between(artisans_tools))
        elif tool_choice == 'Musical Instrument':
            proficiency_dict['Tools'].append(decide_between(musical_instruments))
        proficiency_dict['Saving Throws']['STR'] = proficiency_dict['Saving Throws']['STR'] + proficiency_bonus
        proficiency_dict['Saving Throws']['DEX'] = proficiency_dict['Saving Throws']['DEX'] + proficiency_bonus
        skill_options = ['Acrobatics', 'Athletics', 'History', 'Insight', 'Religion', 'Stealth']
        proficient_skills = random.sample(skill_options, 2)
        for skill in proficient_skills:
            proficiency_dict['Skills'][skill] = proficiency_dict['Skills'][skill] + proficiency_bonus
    elif classchoice == 'Paladin':
        proficiency_dict['Armor'] = ['Light Armor', 'Medium Armor', 'Heavy Armor', 'Shields']
        proficiency_dict['Weapons'] = ['Simple Weapons', 'Martial Weapons']
        proficiency_dict['Saving Throws']['WIS'] = proficiency_dict['Saving Throws']['WIS'] + proficiency_bonus
        proficiency_dict['Saving Throws']['CHA'] = proficiency_dict['Saving Throws']['CHA'] + proficiency_bonus
        skill_options = ['Athletics', 'Insight', 'Intimidation', 'Medicine', 'Persuasion', 'Religion']
        proficient_skills = random.sample(skill_options, 2)
        for skill in proficient_skills:
            proficiency_dict['Skills'][skill] = proficiency_dict['Skills'][skill] + proficiency_bonus
    elif classchoice == 'Ranger':
        proficiency_dict['Armor'] = ['Light Armor', 'Medium Armor', 'Shields']
        proficiency_dict['Weapons'] = ['Simple Weapons', 'Martial Weapons']
        proficiency_dict['Saving Throws']['STR'] = proficiency_dict['Saving Throws']['STR'] + proficiency_bonus
        proficiency_dict['Saving Throws']['DEX'] = proficiency_dict['Saving Throws']['DEX'] + proficiency_bonus
        skill_options = ['Animal', 'Athletics', 'Insight', 'Investigation', 'Nature', 'Perception', 'Stealth', 'Survival']
        proficient_skills = random.sample(skill_options, 3)
        for skill in proficient_skills:
            proficiency_dict['Skills'][skill] = proficiency_dict['Skills'][skill] + proficiency_bonus
    elif classchoice == 'Rogue':
        proficiency_dict['Armor'] = ['Light Armor']
        proficiency_dict['Weapons'] = ['Simple Weapons', 'Hand Crossbow', 'Longsword', 'Rapier', 'Shortsword']
        proficiency_dict['Tools'] = ['Thieves\' Tools']
        proficiency_dict['Saving Throws']['DEX'] = proficiency_dict['Saving Throws']['DEX'] + proficiency_bonus
        proficiency_dict['Saving Throws']['INT'] = proficiency_dict['Saving Throws']['INT'] + proficiency_bonus
        skill_options = ['Acrobatics', 'Athletics', 'Deception', 'Insight', 'Intimidation', 'Investigation',
                         'Perception', 'Performance', 'Persuasion', 'SleightofHand', 'Stealth']
        proficient_skills = random.sample(skill_options, 4)
        for skill in proficient_skills:
            proficiency_dict['Skills'][skill] = proficiency_dict['Skills'][skill] + proficiency_bonus
    elif classchoice == 'Sorcerer':
        proficiency_dict['Weapons'] = ['Dagger', 'Darts', 'Sling', 'Quarterstaff', 'Light Crossbow']
        proficiency_dict['Saving Throws']['CON'] = proficiency_dict['Saving Throws']['CON'] + proficiency_bonus
        proficiency_dict['Saving Throws']['CHA'] = proficiency_dict['Saving Throws']['CHA'] + proficiency_bonus
        skill_options = ['Arcana', 'Deception', 'Insight', 'Intimidation', 'Persuasion', 'Religion']
        proficient_skills = random.sample(skill_options, 2)
        for skill in proficient_skills:
            proficiency_dict['Skills'][skill] = proficiency_dict['Skills'][skill] + proficiency_bonus
    elif classchoice == 'Warlock':
        proficiency_dict['Armor'] = ['Light Armor']
        proficiency_dict['Weapons'] = ['Simple Weapons']
        proficiency_dict['Saving Throws']['WIS'] = proficiency_dict['Saving Throws']['WIS'] + proficiency_bonus
        proficiency_dict['Saving Throws']['CHA'] = proficiency_dict['Saving Throws']['CHA'] + proficiency_bonus
        skill_options = ['Arcana', 'Deception', 'History', 'Intimidation', 'Investigation', 'Nature', 'Religion']
        proficient_skills = random.sample(skill_options, 2)
        for skill in proficient_skills:
            proficiency_dict['Skills'][skill] = proficiency_dict['Skills'][skill] + proficiency_bonus
    elif classchoice == 'Wizard':
        proficiency_dict['Weapons'] = ['Dagger', 'Darts', 'Sling', 'Quarterstaff', 'Light Crossbow']
        proficiency_dict['Saving Throws']['INT'] = proficiency_dict['Saving Throws']['INT'] + proficiency_bonus
        proficiency_dict['Saving Throws']['WIS'] = proficiency_dict['Saving Throws']['WIS'] + proficiency_bonus
        skill_options = ['Arcana', 'History', 'Insight', 'Investigation', 'Medicine', 'Religion']
        proficient_skills = random.sample(skill_options, 2)
        for skill in proficient_skills:
            proficiency_dict['Skills'][skill] = proficiency_dict['Skills'][skill] + proficiency_bonus
    proficiency_dict['Proficient Skills'] = proficient_skills
    return proficiency_dict
