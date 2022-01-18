import {
    races,
    generateName,
    generateAll,
    generateWeightedStats,
    generateUnweightedStats,
    calcModFromScore,
    calcArmorClass,
    calcHitpoints
} from '../src/generators.js'

test('generates a name as a string', () => {
  expect(typeof generateName() === 'string').toEqual(true);
});