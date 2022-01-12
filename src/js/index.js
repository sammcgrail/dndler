const express = require('express');
const app = express();
const { body, validationResult } = require('express-validator');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/..'));
app.use(require('body-parser').urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + '../index.html');
});

app.post('/', (req, res) => {
    Character.create({

    })
    let dataToSend;
});

app.get('/characters/:name', (req, res) => {
    const character = characters.find(c => c.name === req.params.name);
    if(!character) res.status(404).send('The character with the given name was not found.');
    else res.send(character);
});

app.listen(port, () => console.log(`DINDLER listening on port ${port}!`));