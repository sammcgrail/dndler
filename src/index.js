const path = require('path');
const express = require('express');
const app = express();
const { body, validationResult } = require('express-validator');
const generator = require('./js/generators.js');
const interpreter = require('./js/interpreter.js');
const prettify = require('./js/prettify.js');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.use(require('body-parser').urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '/index.html'));
})

app.get('/custom', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '/custom.html'));
});

app.post('/', (req, res) => {
    res.status(200).send(prettify(generator.generateAll()));
});

app.post('/custom', (req, res) => {
    res.status(200).send(interpreter(req.body));
});

app.get('/characters/:name', (req, res) => {
    const character = characters.find(c => c.name === req.params.name);
    if(!character) res.status(404).send('The character with the given name was not found.');
    else res.send(character);
});

app.listen(port, () => console.log(`DINDLER listening on port ${port}!`));