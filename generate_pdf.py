import PyPDF2

# read in the empty character sheet
charsheet = PyPDF2.PdfFileReader('./charactersheets/charsheet.pdf')
firstpage = charsheet.getPage(0)


# create writer object for printing completed sheet

writer = PyPDF2.PdfFileWriter()
writer.insertPage(firstpage)

temp_info = {
'ClassLevel': 'Fighter 1',
'Background': 'Charlatan',
'PlayerName': 'Noob',
'CharacterName': 'Hugus Nubus',
'Race': 'Human',
'Alignment': 'lol',
'XP': '69',
'Inspiration': 'x',
'STR': '19'
}

writer.updatePageFormFieldValues(writer.getPage(0), temp_info)

# create file in directory in which to be written
filledsheet = open('./charactersheets/filledsheet.pdf', 'wb')

# create the sheet
writer.write(filledsheet)

# save the fields as dicts
formfields = charsheet.getFields()
formtextfields = charsheet.getFormTextFields()

def calc_proficiency(char_level):
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

# text fields of charsheet pdf
def char_dict_to_pdf(char_dict):
    emptysheet = PyPDF2.PdfFileReader('./charactersheets/charsheet.pdf')
    writer = PyPDF2.PdfFileWriter()
    writer.insertPage(emptysheet.getPage(0))
    proficiency_bonus = calc_proficiency(char_dict['level'])
    to_be_filled = {
    'ClassLevel': char_dict['class'] + ' ' + str(char_dict['level']),
    'Background': char_dict['background']['Title'],
    'PlayerName': '',
    'CharacterName': char_dict['name'],
    'Race ': char_dict['race'],
    'Alignment': '',
    'XP': '',
    'Inspiration': 'x',
    'STR': str(char_dict['stats']['Total Stats']['STR']),
    'ProfBonus': '+' + str(proficiency_bonus),
    'AC': '',
    'Initiative': str(10+char_dict['stats']['Modifiers']['DEX']),
    'Speed': '30',
    'PersonalityTraits ': char_dict['background']['Trait'],
    'STRmod': str(char_dict['stats']['Modifiers']['STR']),
    'HPMax': '',
    'ST Strength': '+' + str(char_dict['stats']['Modifiers']['STR']),
    'DEX': str(char_dict['stats']['Total Stats']['DEX']),
    'HPCurrent': '',
    'Ideals': char_dict['background']['Ideal'],
    'DEXmod ': str(char_dict['stats']['Modifiers']['DEX']),
    'HPTemp': '',
    'Bonds': char_dict['background']['Bond'],
    'CON': str(char_dict['stats']['Total Stats']['CON']),
    'HDTotal': str(char_dict['level']),
    'CONmod': str(char_dict['stats']['Modifiers']['CON']),
    'HD': str(char_dict['level']),
    'Flaws': char_dict['background']['Flaw'],
    'INT': str(char_dict['stats']['Total Stats']['INT']),
    'ST Dexterity': '+' + str(char_dict['stats']['Modifiers']['DEX']),
    'ST Constitution': '+' + str(char_dict['stats']['Modifiers']['CON']),
    'ST Intelligence': '+' + str(char_dict['stats']['Modifiers']['INT']),
    'ST Wisdom': '+' + str(char_dict['stats']['Modifiers']['WIS']),
    'ST Charisma': '+' + str(char_dict['stats']['Modifiers']['CHA']),
    'Acrobatics': '+' + str(char_dict['stats']['Modifiers']['DEX']),
    'Animal': '+' + str(char_dict['stats']['Modifiers']['WIS']),
    'Athletics': '+' + str(char_dict['stats']['Modifiers']['STR']),
    'Deception ': '+' + str(char_dict['stats']['Modifiers']['CHA']),
    'History ': '+' + str(char_dict['stats']['Modifiers']['INT']),
    'Insight': '+' + str(char_dict['stats']['Modifiers']['WIS']),
    'Intimidation': '+' + str(char_dict['stats']['Modifiers']['CHA']),
    'Wpn Name': '',
    'Wpn1 AtkBonus': '',
    'Wpn1 Damage': '',
    'INTmod': str(char_dict['stats']['Modifiers']['INT']),
    'Wpn Name 2': '',
    'Wpn2 AtkBonus ': '',
    'Wpn2 Damage ': '',
    'Investigation ': '+' + str(char_dict['stats']['Modifiers']['INT']),
    'WIS': str(char_dict['stats']['Total Stats']['INT']),
    'Wpn Name 3': '',
    'Wpn3 AtkBonus  ': '',
    'Arcana': '+' + str(char_dict['stats']['Modifiers']['INT']),
    'Wpn3 Damage ': '',
    'Perception ': '+' + str(char_dict['stats']['Modifiers']['WIS']),
    'WISmod': str(char_dict['stats']['Modifiers']['INT']),
    'CHA': str(char_dict['stats']['Total Stats']['CHA']),
    'Nature': '+' + str(char_dict['stats']['Modifiers']['WIS']),
    'Performance': '+' + str(char_dict['stats']['Modifiers']['CHA']),
    'Medicine': '+' + str(char_dict['stats']['Modifiers']['WIS']),
    'Religion': '+' + str(char_dict['stats']['Modifiers']['INT']),
    'Stealth ': '+' + str(char_dict['stats']['Modifiers']['DEX']),
    'Persuasion': '+' + str(char_dict['stats']['Modifiers']['CHA']),
    'SleightofHand': '+' + str(char_dict['stats']['Modifiers']['DEX']),
    'CHamod': str(char_dict['stats']['Modifiers']['CHA']),
    'Survival': '+' + str(char_dict['stats']['Modifiers']['WIS']),
    'AttacksSpellcasting': char_dict['spells'],
    'Passive': str(char_dict['stats']['Modifiers']['WIS']),
    'CP': '',
    'ProficienciesLang': '',
    'SP': '',
    'EP': '',
    'GP': '',
    'PP': '',
    'Equipment': char_dict['equipment'],
    'Features and Traits': char_dict['features']
    }
    writer.updatePageFormFieldValues(writer.getPage(0), to_be_filled)
    filename = char_dict['name']
    filledsheet = open('./charactersheets/'+filename+'.pdf', 'wb')
    writer.write(filledsheet)
    return 'Character Sheet Created'
