// import lodash library
import lodash from 'lodash';
import {
  sourcebooks,
  names,
  backgrounds,
  races,
  classFeatures
} from './data.js';

// import json data files
/*
const sourcebooks = require('../data/sourcebooks.json');
const names = require('../data/names.json');
const backgrounds = require('../data/backgrounds.json');
const races = require('../data/races.json');
const classFeatures = require('../data/classFeatures.json');
*/

// array of ability score abbreviations
const abilityScores = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];

// (k, v) pairs of (race, bonuses)
/*
const raceBonuses = {
  'Dragonborn': [0, 2, 0, 0, 0, 1],
  'Hill Dwarf': [0, 0, 2, 0, 1, 0],
  'Mountain Dwarf': [2, 0, 2, 0, 0, 0],
  'Drow Elf': [0, 2, 0, 0, 0, 1],
  'High Elf': [0, 2, 0, 1, 0, 0],
  'Wood Elf': [0, 2, 0, 0, 1, 0],
  'Forest Gnome': [0, 1, 0, 2, 0, 0],
  'Rock Gnome': [0, 0, 1, 2, 0, 0],
  'Half-Elf': [0, 0, 0, 0, 0, 2], // two additional +1's
  'Lightfoot Halfling': [0, 2, 0, 0, 0, 1],
  'Stout Halfling': [0, 2, 1 , 0, 0, 0],
  'Half-Orc': [2, 0, 1, 0, 0, 0],
  'Human': [1, 1, 1, 1, 1, 1],
  'Variant Human': [0, 0, 0, 0, 0, 0], // choose two +1's
  'Tiefling': [0, 0, 0, 1, 0, 2],
  'Orc of Exandria': [2, 0, 1, 0, 0, 0],
  'Leonin': [1, 0, 2, 0, 0, 0],
  'Satyr': [0, 1, 0, 0, 0, 2],
  'Fairy': [0, 0, 0, 0, 0, 0],
  'Harengon': [0, 0, 0, 0, 0, 0],
  'Aarakocra': [0, 2, 0, 0, 1, 0],
  'Genasi': [0, 0, 2, 0, 0, 0], // additional +1 based on element
  'Goliath': [2, 0, 1, 0, 0, 0],
  'Aasimar': [0, 0, 0, 0, 0, 2],
  'Bugbear': [2, 1, 0, 0, 0, 0],
  'Firbolg': [1, 0, 0, 0, 2, 0],
  'Goblin': [0, 2, 1, 0, 0, 0],
  'Hobgoblin': [0, 0, 2, 1, 0, 0],
  'Kenku': [0, 2, 0, 0, 1, 0],
  'Kobold': [0, 2, 0, 0, 0, 0],
  'Lizardfolk': [0, 0, 2, 0, 1, 0],
  'Orc': [2, 0, 1, 0, 0, 0],
  'Tabaxi': [0, 2, 0, 0, 0, 1],
  'Triton': [1, 0, 1, 0, 0, 1],
  'Yuan-Ti Pureblood': [0, 0, 0, 1, 0, 2],
  'Feral Tiefling': [0, 2, 0, 1, 0, 0],
  'Changeling': [0, 0, 0, 0, 0, 2], // choose additional +1
  'Kalashtar': [0, 0, 0, 0, 2, 1],
  'Orc of Eberron': [2, 0, 1, 0, 0, 0],
  'Shifter': [0, 0, 0, 0, 0, 0],
  'Warforged': [0, 0, 2, 0, 0, 0], // choose additional +1
  'Centaur': [2, 0, 0, 0, 1, 0],
  'Loxodon': [0, 0, 2, 0, 1, 0],
  'Minotaur': [2, 0, 1, 0, 0, 0],
  'Simic Hybrid': [0, 0, 2, 0, 0, 0], // choose additional +1
  'Vedalken': [0, 0, 0, 2, 1, 0]
}

// get array of race names
const races = Object.keys(raceBonuses);
*/

// function to calculate mod based on total score
const calcModFromScore = (abilityScore) => {
  let abilityMod = Math.floor((abilityScore-10)/2);
  return abilityMod;
};

// simulated dicerolls for base stats
const roll4DropLowest = () => {
  let dicerolls = [
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1
  ];
  dicerolls.sort().reverse();
  return lodash.sum(dicerolls.slice(0,3));
};

// zip together ability score names and stats
const zipStats = (statArray) => {
  let zippedArray = statArray.reduce((result, stat, index) => {
    result[abilityScores[index]] = stat;
    return result;
  }, {})
  return zippedArray;
};

// generate stats, assigned randomly to ability scores
const generateUnweightedStats = (raceChoice) => {
  baseStats = [roll4DropLowest(), roll4DropLowest(), roll4DropLowest(), roll4DropLowest(), roll4DropLowest(), roll4DropLowest()];
  let totalStats = lodash.zipWith(baseStats, raceBonuses[raceChoice], lodash.add);
  let totalModifiers = totalStats.map(i => calcModFromScore(i));
  let statsObject = {'Base Stats': zipStats(baseStats), 'Total Stats': zipStats(totalStats), 'Total Modifiers': zipStats(totalModifiers)};
  return statsObject;
};

// stat generator helper function
const prioritizeStats = (sortedStats, priorityStats) => {
  let baseStats = [0, 0, 0, 0, 0, 0];
  let remainingStats = [0, 1, 2, 3, 4, 5];
  priorityStats.forEach(stat => baseStats[stat] = sortedStats.shift());
  remainingStats = remainingStats.filter(x => !priorityStats.includes(x));
  sortedStats = lodash.shuffle(sortedStats);
  remainingStats.forEach(stat => baseStats[stat] = sortedStats.shift());
  return baseStats;
};

// generate stats, assign with priority to certain scores, assign rest randomly
const generateWeightedStats = (raceChoice, classChoice) => {
  let baseStats = []
  let sortedStats = [
    roll4DropLowest(),
    roll4DropLowest(),
    roll4DropLowest(),
    roll4DropLowest(),
    roll4DropLowest(),
    roll4DropLowest()
  ];
  sortedStats.sort(function(a,b){
    return a-b;
  }).reverse();
  switch (classChoice) {
    case 'Artificer':
      baseStats = prioritizeStats(sortedStats, [3, 1]);
      break;
    case 'Barbarian':
      baseStats = prioritizeStats(sortedStats, [0, 2, 1]);
      break; 
    case 'Bard':
      baseStats = prioritizeStats(sortedStats, [5, 1]);
      break; 
    case 'Cleric':
      baseStats = prioritizeStats(sortedStats, [4, 2]);
      break;
    case 'Druid':
      baseStats = prioritizeStats(sortedStats, [4, 2]);
      break; 
    case 'Fighter':
      baseStats = prioritizeStats(sortedStats, [0, 1, 2]);
      break;
    case 'Monk':
      baseStats = prioritizeStats(sortedStats, [1, 4, 2]);
      break; 
    case 'Paladin':
      baseStats = prioritizeStats(sortedStats, [5, 0, 3]);
      break; 
    case 'Ranger':
      baseStats = prioritizeStats(sortedStats, [1, 4]);
      break; 
    case 'Rogue':
      baseStats = prioritizeStats(sortedStats, [1]);
      break; 
    case 'Sorcerer':
      baseStats = prioritizeStats(sortedStats, [5, 2]);
      break;
    case 'Warlock':
      baseStats = prioritizeStats(sortedStats, [5, 1]);
      break; 
    case 'Wizard':
      baseStats = prioritizeStats(sortedStats, [3]);
      break; 
    default:
      break;
  }
  let totalStats = lodash.zipWith(baseStats, races[raceChoice]['bonuses'], lodash.add);
  let totalModifiers = totalStats.map(i => calcModFromScore(i));
  let statsObject = {
    'Base Stats': zipStats(baseStats), 
    'Total Stats': zipStats(totalStats), 
    'Total Modifiers': zipStats(totalModifiers)
  };
  return statsObject;
};

// calculate hitpoints based on con mod, class, and char level
const calcHitpoints = (conMod, classChoice, charLevel) => {
  let hitpoints = 0;
  switch (classChoice){
    case 'Artificer':
    case 'Bard':
    case 'Cleric':
    case 'Druid':
    case 'Monk':
    case 'Rogue':
    case 'Warlock':
      hitpoints = (8 + conMod) + (5 + conMod) * (charLevel - 1);
      break;
    case 'Barbarian':
      hitpoints = (12 + conMod) + (8 + conMod) * (charLevel - 1);
      break;
    case 'Fighter':
    case 'Paladin':
    case 'Ranger':
      hitpoints = (10 + conMod) + (6 + conMod) * (charLevel - 1);
      break;
    case 'Sorcerer':
    case 'Wizard':
      hitpoints = (6 + conMod) + (4 + conMod) * (charLevel - 1);
      break;
    default:
      break;
  }
  return hitpoints;
};

// calculate armor class based on available gear and proficiencies
const calcArmorClass = (modifiers, classChoice, equipmentList) => {
  modSTR = modifiers['STR'];
  modDEX = modifiers['DEX'];
  modCON = modifiers['CON'];
  modINT = modifiers['INT'];
  modWIS = modifiers['WIS'];
  modCHA = modifiers['CHA'];
  armorClass = 10 + modDEX
  // special cases of Barbarian and Monk
  if (classChoice === 'Barbarian') {
    armorClass = 10 + modDEX + modSTR 
  } else if (classChoice === 'Monk') {
    armorClass = 10 + modDEX + modWIS
  }
  // normal cases of armor in inventory
  if (equipmentList.includes('Chain Mail')) {
    armorClass = 16
  } else if (equipmentList.includes('Scale Mail')) {
    if (modDEX >= 2) {
      armorClass = 16
    } else {
      armorClass = 14 + modDEX
    }
  } else if (equipmentList.includes('Studded Leather Armor')) {
    armorClass = 12 + modDEX
  } else if (equipmentList.includes('Leather Armor')) {
    armorClass = 11 + modDEX
  }
  if (equipmentList.includes('Shield')) {
    armorClass = armorClass + 2
  }
  return armorClass
};

//generates name
const generateName = () => {
  let firstname = lodash.sample(names['First']);
  let lastname = lodash.sample(names['Last']);
  return firstname + ' ' + lastname;
};

// generates race
const generateRace = () => {
  let race = lodash.sample(Object.keys(races));
  return race;
};

// generates class
const generateClass = () => {
  let classchoice = lodash.sample(Object.keys(classFeatures));
  return classchoice;
};

// generates background
const generateBackground = () => {
  let background = lodash.sample(Object.keys(backgrounds));
  let bgObject = {
    "Name": background
  };
  Object.keys(backgrounds[background]).forEach(k => bgObject[k] = lodash.sample(backgrounds[background][k]));
  bgObject['Gear'] = backgrounds[background]['Gear'];
  return bgObject;
};

//generates a full character sheet
const generateAll = (weighted = false, charLevel = 1, charBackground = 'any', charClass = 'any') => {
  let race = races[Math.floor(Math.random()*races.length)]

  characterJSON = {
    race: race,
    name: generateName(),
    class: '',
    level: charLevel,
    hitpoints: 0,
    armorclass: 0,
    background: {},
    stats: {},
    features: [],
    proficiency: {},
    equipment: [],
    spells: {},
    weapons: {},
    sources: {}
  };
  // other initializations
  class_source = ''
  race_source = ''
  background_source = ''
  base_stats = {}
  race_bonuses = {}
  total_stats = {}
  total_modifiers = {}
};

export {
  generateAll,
  generateName,
  generateRace,
  generateBackground,
  generateClass,
  generateWeightedStats,
  generateUnweightedStats,
  calcModFromScore,
  calcArmorClass,
  calcHitpoints
};