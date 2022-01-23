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
 
test('function \'generateName\' generates a name as a string', () => {
    expect(generateName()).toBeDefined()
    expect(typeof generateName() === 'string').toEqual(true);
    expect(generateName().length).toBeGreaterThan(1)
});