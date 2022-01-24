const generator = require('./generators.js');
const sourcebooks = require('../../data/sourcebooks.js');

const formParse = (formData) =>
{
    let retVal = "";
    for(const book in sourcebooks)
    {
        if(formData[book])
        {
            retVal += ("<br>" + sourcebooks[book]["Name"] + " is active.");
        }
    }
    return retVal;
}

module.exports = formParse;