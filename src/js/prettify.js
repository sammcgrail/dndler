const prettify = (characterData) =>
{
    var numbers = /^[0-9]+$/;
    let retVal = "<form class='generate' id='generateForm' action='/' method='POST'><div class='submit-container'><button type='submit' class='' id='submitBtn' name='submit'>GIMME ANUDDER MIN!</button></div></form><h1>" + characterData['name'] + "</h1><p>";
    for(prop in characterData)
    {
        if(prop === 'name')
            continue;
        if(typeof characterData[prop] === 'object')
        {
            retVal += '<h2>' + prop + '</h2>' + "<p style='margin-left: 25px;'>";
            for(subprop in characterData[prop])
            {
                if(typeof characterData[prop][subprop] === 'object')
                {
                    retVal += '<h3>' + subprop + '</h3>' + "<p style='margin-left: 25px;'>";
                    for(subsubprop in characterData[prop][subprop])
                    {
                        if(subsubprop.match(numbers))
                        {
                            retVal += ('<br>' + characterData[prop][subprop][subsubprop]);
                        }
                        else
                        {
                            retVal += ('<br><strong>' + subsubprop + ':</strong> ' + characterData[prop][subprop][subsubprop]);
                        }
                    }
                    retVal += '</p>';
                }
                else
                {
                    retVal += ('<br><strong>' + subprop + ':</strong> ' + characterData[prop][subprop]);

                }
            }
            retVal += '</p>';
        }
        else
        {
            retVal += ('<br><strong>' + prop + ':</strong> ' + characterData[prop]);
        }
    }
    retVal += '</p>';
    return retVal;
}

module.exports = prettify;