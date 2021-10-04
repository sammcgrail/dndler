import PyPDF2

# read in the empty character sheet
charsheet = PyPDF2.PdfFileReader('./charactersheets/charsheet.pdf')
firstpage = charsheet.getPage(0)


# create writer object for printing completed sheet
writer = PyPDF2.PdfFileWriter()
writer.insertPage(firstpage)

writer.updatePageFormFieldValues(0, char_info)

temp_info = {
'ClassLevel':'Fighter 1',
'PlayerName': 'Noob'
}


# create file in directory in which to be written
filledsheet = open('./charactersheets/filledsheet.pdf', 'wb')

# create the sheet
writer.write(filledsheet)

# save the fields as dicts
formfields = charsheet.getFields()
formtextfields = charsheet.getFormTextFields()

# text fields of charsheet pdf
to_be_filled = [
'ClassLevel',
'Background',
'PlayerName',
'CharacterName',
'Race ',
'Alignment',
'XP',
'Inspiration',
'STR',
'ProfBonus',
'AC',
'Initiative',
'Speed',
'PersonalityTraits ',
'STRmod',
'HPMax',
'ST Strength',
'DEX',
'HPCurrent',
'Ideals',
'DEXmod ',
'HPTemp',
'Bonds',
'CON',
'HDTotal',
'CONmod',
'HD',
'Flaws',
'INT',
'ST Dexterity',
'ST Constitution',
'ST Intelligence',
'ST Wisdom',
'ST Charisma',
'Acrobatics',
'Animal',
'Athletics',
'Deception ',
'History ',
'Insight',
'Intimidation',
'Wpn Name',
'Wpn1 AtkBonus',
'Wpn1 Damage',
'INTmod',
'Wpn Name 2',
'Wpn2 AtkBonus ',
'Wpn2 Damage ',
'Investigation ',
'WIS',
'Wpn Name 3',
'Wpn3 AtkBonus  ',
'Arcana',
'Wpn3 Damage ',
'Perception ',
'WISmod',
'CHA',
'Nature',
'Performance',
'Medicine',
'Religion',
'Stealth ',
'Persuasion',
'SleightofHand',
'CHamod',
'Survival',
'AttacksSpellcasting',
'Passive',
'CP',
'ProficienciesLang',
'SP',
'EP',
'GP',
'PP',
'Equipment',
'Features and Traits'
]
