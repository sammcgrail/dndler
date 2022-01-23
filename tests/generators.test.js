import lodash from 'lodash';
import {
  sourcebooks,
  names,
  backgrounds,
  races,
  classFeatures
} from '../src/data.js';
import {
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
} from '../src/generators.js'
 
test('function \'generateName\' generates a name as a string', () => {
    expect(generateName()).toBeDefined()
    expect(typeof generateName() === 'string').toEqual(true);
    expect(generateName().length).toBeGreaterThan(1)
});

test('function \'generateRace\' generates a race as a string', () => {
    expect(generateRace()).toBeDefined()
    expect(typeof generateRace() === 'string').toEqual(true);
    expect(generateRace().length).toBeGreaterThan(1)
});

test('function \'calcHitPoints\' generates correct hp', () => {
    expect(calcHitpoints()).toBeDefined()
    expect(typeof calcHitpoints() === 'number').toEqual(true);
    expect(calcHitpoints(2, 'Druid', 1)).toEqual(10)
})

// test('function \'generateUnweightedStats\' generates appropriate stats', () => {
//     expect(generateUnweightedStats()).toBeDefined()
//     expect(typeof generateUnweightedStats() === 'object').toEqual(true);
// })

// test('function \'generateWeightedStats\' weighs stats accordingly', () => {

// })
