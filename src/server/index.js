import path from 'path';
import express from 'express';
import { body, validationResult } from 'express-validator';
import * as generator from './generators.js';

//dev requires
import interpreter from '../client/js/interpreter.js';
import prettify from '../client/js/characterpage.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.use(require('body-parser').urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../client', '/index.html'));
})

app.get('/custom', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../client', '/custom.html'));
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

app.listen(port, () => console.log(`DNDLER listening on port ${port}!`));