// const csv = require('jquery-csv');

// namesObject = jquerycsv.csv.toArray('./data/names.csv');

const firstNames = ['Greg', 'Robert', 'Baernaldus', 'Joe'];
const lastNames = ['Roberts', 'the Brown', 'Smith', 'the Noob'];

const generateName = () => {
    let firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    let lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
    return firstName + ' ' + lastName
}

export default generateName;