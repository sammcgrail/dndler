import PyPDF2

# character sheet one-pager
# read in the empty character sheet
charsheet = PyPDF2.PdfFileReader('./charactersheets/charsheet.pdf')
firstpage = charsheet.getPage(0)
# create writer object for printing completed sheet
writer = PyPDF2.PdfFileWriter()
writer.insertPage(firstpage)
writer.updatePageFormFieldValues(writer.getPage(0), temp_info)
# save the fields as dicts
formfields = charsheet.getFields()
formtextfields = charsheet.getFormTextFields()

# character sheet three-pager
charsheet_ext = PyPDF2.PdfFileReader('./charactersheets/charsheet_ext.pdf')
firstpage = charsheet_ext.getPage(0)
secondpage = charsheet_ext.getPage(1)
thirdpage = charsheet_ext.getPage(2)

# create file in directory in which to be written
filledsheet = open('./charactersheets/filledsheet.pdf', 'wb')

# create the sheet
writer.write(filledsheet)

# calculate proficiency
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

# for filling one-pager character sheet
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

# for filling three-pager character sheet
def char_dict_to_pdf_ext(char_dict):
    emptysheet = PyPDF2.PdfFileReader('./charactersheets/charsheet_ext.pdf')
    writer = PyPDF2.PdfFileWriter()
    writer.insertPage(emptysheet.getPage(2))
    writer.insertPage(emptysheet.getPage(1))
    writer.insertPage(emptysheet.getPage(0))
    to_be_filled = {
    'CharacterName 2': 'CharacterName 2',
    'Age': 'Age',
    'Height': 'Height',
    'Weight': 'Weight',
    'Eyes': 'Eyes',
    'Skin': 'Skin',
    'Hair': 'Hair',
    'Allies': 'Allies',
    'FactionName': 'FactionName',
    'Backstory': 'Backstory',
    'Feat+Traits': 'Feat+Traits',
    'Treasure': 'Treasure',
    'ClassLevel': 'ClassLevel',
    'Background': 'Background',
    'PlayerName': 'PlayerName',
    'CharacterName': 'CharacterName',
    'Race ': 'Race',
    'Alignment': 'Alignment',
    'XP': 'XP',
    'Inspiration': 'Inspiration',
    'STR': 'STR',
    'ProfBonus': 'ProfBonus',
    'AC': 'AC',
    'Initiative': 'Initiative',
    'Speed': 'Speed',
    'PersonalityTraits ': 'PersonalityTraits',
    'STRmod': 'STRmod',
    'HPMax': 'HPMax',
    'ST Strength': 'ST Strength',
    'DEX': 'DEX',
    'HPCurrent': 'HPCurrent',
    'Ideals': 'Ideals',
    'DEXmod ': 'DEXmod',
    'HPTemp': 'HPTemp',
    'Bonds': 'Bonds',
    'CON': 'CON',
    'HDTotal': 'HDTotal',
    'CONmod': 'CONmod',
    'HD': 'HD',
    'Flaws': 'Flaws',
    'INT': 'INT',
    'ST Dexterity': 'ST Dexterity',
    'ST Constitution': 'ST Constitution',
    'ST Intelligence': 'ST Intelligence',
    'ST Wisdom': 'ST Wisdom',
    'ST Charisma': 'ST Charisma',
    'Acrobatics': 'Acrobatics',
    'Animal': 'Animal',
    'Athletics': 'Athletics',
    'Deception ': 'Deception',
    'History ': 'History',
    'Insight': 'Insight',
    'Intimidation': 'Intimidation',
    'Wpn Name': 'Wpn Name',
    'Wpn1 AtkBonus': 'Wpn1 AtkBonus',
    'Wpn1 Damage': 'Wpn1 Damage',
    'INTmod': 'INTmod',
    'Wpn Name 2': 'Wpn Name 2',
    'Wpn2 AtkBonus ': 'Wpn2 AtkBonus',
    'Wpn2 Damage ': 'Wpn2 Damage',
    'Investigation ': 'Investigation',
    'WIS': 'WIS',
    'Wpn Name 3': 'Wpn Name 3',
    'Wpn3 AtkBonus  ': 'Wpn3 AtkBonus',
    'Arcana': 'Arcana',
    'Wpn3 Damage ': 'Wpn3 Damage',
    'Perception ': 'Perception',
    'WISmod': 'WISmod',
    'CHA': 'CHA',
    'Nature': 'Nature',
    'Performance': 'Performance',
    'Medicine': 'Medicine',
    'Religion': 'Religion ',
    'Stealth ': 'Stealth',
    'Persuasion': 'Persuasion',
    'SleightofHand': 'SleightofHand',
    'CHamod': 'CHamod',
    'Survival': 'Survival',
    'AttacksSpellcasting': 'AttacksSpellcasting',
    'Passive': 'Passive',
    'CP': 'CP',
    'ProficienciesLang': 'ProficienciesLang',
    'SP': 'SP',
    'EP': 'EP',
    'GP': 'GP',
    'PP': 'PP',
    'Equipment': 'Equipment',
    'Features and Traits': 'Features and Traits',
    'Spellcasting Class 2': 'Spellcasting Class 2',
    'SpellcastingAbility 2': 'SpellcastingAbility 2',
    'SpellSaveDC  2': 'SpellSaveDC  2',
    'SpellAtkBonus 2': 'SpellAtkBonus 2',
    'SlotsTotal 19': 'SlotsTotal 19',
    'SlotsRemaining 19': 'SlotsRemaining 19',
    'Spells 1014': 'Spells 1014',
    'Spells 1015': 'Spells 1015',
    'Spells 1016': 'Spells 1016',
    'Spells 1017': 'Spells 1017',
    'Spells 1018': 'Spells 1018',
    'Spells 1019': 'Spells 1019',
    'Spells 1020': 'Spells 1020',
    'Spells 1021': 'Spells 1021',
    'Spells 1022': 'Spells 1022',
    'Spells 1023': 'Spells 1023',
    'Spells 1024': 'Spells 1024',
    'Spells 1025': 'Spells 1025',
    'Spells 1026': 'Spells 1026',
    'Spells 1027': 'Spells 1027',
    'Spells 1028': 'Spells 1028',
    'Spells 1029': 'Spells 1029',
    'Spells 1030': 'Spells 1030',
    'Spells 1031': 'Spells 1031',
    'Spells 1032': 'Spells 1032',
    'Spells 1033': 'Spells 1033',
    'SlotsTotal 20': 'SlotsTotal 20',
    'SlotsRemaining 20': 'SlotsRemaining 20',
    'Spells 1034': 'Spells 1034',
    'Spells 1035': 'Spells 1035',
    'Spells 1036': 'Spells 1036',
    'Spells 1037': 'Spells 1037',
    'Spells 1038': 'Spells 1038',
    'Spells 1039': 'Spells 1039',
    'Spells 1040': 'Spells 1040',
    'Spells 1041': 'Spells 1041',
    'Spells 1042': 'Spells 1042',
    'Spells 1043': 'Spells 1043',
    'Spells 1044': 'Spells 1044',
    'Spells 1045': 'Spells 1045',
    'Spells 1046': 'Spells 1046',
    'SlotsTotal 21': 'SlotsTotal 21',
    'SlotsRemaining 21': 'SlotsRemaining 21',
    'Spells 1047': 'Spells 1047',
    'Spells 1048': 'Spells 1048',
    'Spells 1049': 'Spells 1049',
    'Spells 1050': 'Spells 1050',
    'Spells 1051': 'Spells 1051',
    'Spells 1052': 'Spells 1052',
    'Spells 1053': 'Spells 1053',
    'Spells 1054': 'Spells 1054',
    'Spells 1055': 'Spells 1055',
    'Spells 1056': 'Spells 1056',
    'Spells 1057': 'Spells 1057',
    'Spells 1058': 'Spells 1058',
    'Spells 1059': 'Spells 1059',
    'SlotsTotal 22': 'SlotsTotal 22',
    'SlotsRemaining 22': 'SlotsRemaining 22',
    'Spells 1060': 'Spells 1060',
    'Spells 1061': 'Spells 1061',
    'Spells 1062': 'Spells 1062',
    'Spells 1063': 'Spells 1063',
    'Spells 1064': 'Spells 1064',
    'Spells 1065': 'Spells 1065',
    'Spells 1066': 'Spells 1066',
    'Spells 1067': 'Spells 1067',
    'Spells 1068': 'Spells 1068',
    'Spells 1069': 'Spells 1069',
    'Spells 1070': 'Spells 1070',
    'Spells 1071': 'Spells 1071',
    'Spells 1072': 'Spells 1072',
    'SlotsTotal 23': 'SlotsTotal 23',
    'SlotsRemaining 23': 'SlotsRemaining 23',
    'Spells 1073': 'Spells 1073',
    'Spells 1074': 'Spells 1074',
    'Spells 1075': 'Spells 1075',
    'Spells 1076': 'Spells 1076',
    'Spells 1077': 'Spells 1077',
    'Spells 1078': 'Spells 1078',
    'Spells 1079': 'Spells 1079',
    'Spells 1080': 'Spells 1080',
    'Spells 1081': 'Spells 1081',
    'SlotsTotal 24': 'SlotsTotal 24',
    'SlotsRemaining 24': 'SlotsRemaining 24',
    'Spells 1082': 'Spells 1082',
    'Spells 1083': 'Spells 1083',
    'Spells 1084': 'Spells 1084',
    'Spells 1085': 'Spells 1085',
    'Spells 1086': 'Spells 1086',
    'Spells 1087': 'Spells 1087',
    'Spells 1088': 'Spells 1088',
    'Spells 1089': 'Spells 1089',
    'Spells 1090': 'Spells 1090',
    'SlotsTotal 25': 'SlotsTotal 25',
    'SlotsRemaining 25': 'SlotsRemaining 25',
    'Spells 1091': 'Spells 1091',
    'Spells 1092': 'Spells 1092',
    'Spells 1093': 'Spells 1093',
    'Spells 1094': 'Spells 1094',
    'Spells 1095': 'Spells 1095',
    'Spells 1096': 'Spells 1096',
    'Spells 1097': 'Spells 1097',
    'Spells 1098': 'Spells 1098',
    'Spells 1099': 'Spells 1099',
    'SlotsTotal 26': 'SlotsTotal 26',
    'SlotsRemaining 26': 'SlotsRemaining 26',
    'Spells 10100': 'Slots 10100',
    'Spells 10101': 'Slots 10101',
    'Spells 10102': 'Spells 10102',
    'Spells 10103': 'Spells 10103',
    'Spells 10104': 'Spells 10104',
    'Spells 10105': 'Spells 10105',
    'Spells 10106': 'Spells 10106',
    'SlotsTotal 27': 'SlotsTotal 27',
    'SlotsRemaining 27': 'SlotsRemaining 27',
    'Spells 10107': 'Spells 10107',
    'Spells 10108': 'Spells 10108',
    'Spells 10109': 'Spells 10109',
    'Spells 101010': 'Spells 101010',
    'Spells 101011': 'Spells 101011',
    'Spells 101012': 'Spells 101012',
    'Spells 101013': 'Spells 101013'
    }
    writer.updatePageFormFieldValues(writer.getPage(0), to_be_filled)
    writer.updatePageFormFieldValues(writer.getPage(1), to_be_filled)
    writer.updatePageFormFieldValues(writer.getPage(2), to_be_filled)
    filename = 'fieldnames'
    filledsheet = open('./charactersheets/'+filename+'.pdf', 'wb')
    writer.write(filledsheet)
    return 'Character Sheet Created'
