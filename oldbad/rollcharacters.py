# initialize stuff
all_chars = list()
averages = list()
x = 0

# roll each class, loop 1000
while x < 1000:
    all_chars.append(roll_barbarian())
    all_chars.append(roll_bard())
    all_chars.append(roll_cleric())
    all_chars.append(roll_druid())
    all_chars.append(roll_fighter())
    all_chars.append(roll_monk())
    all_chars.append(roll_paladin())
    all_chars.append(roll_ranger())
    all_chars.append(roll_rogue())
    all_chars.append(roll_sorcerer())
    all_chars.append(roll_warlock())
    all_chars.append(roll_wizard())
    x += 1

# calculate averages
averages.append(['Barbarian'] + list(np.mean(df[df['Class']=='Barbarian']).values))
averages.append(['Bard'] + list(np.mean(df[df['Class']=='Bard']).values))
averages.append(['Cleric'] + list(np.mean(df[df['Class']=='Cleric']).values))
averages.append(['Druid'] + list(np.mean(df[df['Class']=='Druid']).values))
averages.append(['Fighter'] + list(np.mean(df[df['Class']=='Fighter']).values))
averages.append(['Monk'] + list(np.mean(df[df['Class']=='Monk']).values))
averages.append(['Paladin'] + list(np.mean(df[df['Class']=='Paladin']).values))
averages.append(['Ranger'] + list(np.mean(df[df['Class']=='Ranger']).values))
averages.append(['Rogue'] + list(np.mean(df[df['Class']=='Rogue']).values))
averages.append(['Sorcerer'] + list(np.mean(df[df['Class']=='Sorcerer']).values))
averages.append(['Warlock'] + list(np.mean(df[df['Class']=='Warlock']).values))
averages.append(['Wizard'] + list(np.mean(df[df['Class']=='Wizard']).values))
