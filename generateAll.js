import generateName from './generateName.js';
import {
    races,
    generateWeightedStats,
    generateUnweightedStats,
    calcModFromScore,
    calcArmorClass,
    calcHitpoints
} from './generateStats.js'

console.log(generateName())
console.log(generateUnweightedStats(races[Math.floor(Math.random()*races.length)]));