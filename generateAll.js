import generateName from './generateName.js';
import { 
    generateWeightedStats,
    generateUnweightedStats,
    calcModFromScore,
    calcArmorClass,
    calcHitpoints
} from './generateStats.js'

  // array of ability score abbreviations
  const abilityScores = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA']

  // (k, v) pairs of (race, bonuses)
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

console.log(generateName())
console.log(generateUnweightedStats(races[Math.floor(Math.random()*races.length)]));