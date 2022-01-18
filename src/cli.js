import {
    races,
    generateName,
    generateAll,
    generateWeightedStats,
    generateUnweightedStats,
    calcModFromScore,
    calcArmorClass,
    calcHitpoints
} from './generators.js'

console.log(generateName())
console.log(generateUnweightedStats(races[Math.floor(Math.random()*races.length)]));