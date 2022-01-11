var csv = require('jquery-csv');

namesObject = jquerycsv.csv.toArray('./data/names.csv');

firstNames = ['Greg', 'Robert', 'Baernaldus', 'Joe'];
lastNames = ['Roberts', 'the Brown', 'Smith', 'the Noob'];

function generateName() {
    firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
    return firstName + ' ' + lastName
}