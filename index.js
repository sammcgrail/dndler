const path = require('path');
const express = require('express');
const {spawn} = require('child_process');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    let characterData = [];
    const python = spawn('python', ['to_json.py']);
    python.stdout.on('data', function(data) {
        console.log(data);
        characterData.push(data);
    });
    python.on('close', (code) => {
        res.sendFile(path.join(__dirname, 'public/index.html'));
    });
})

app.listen(port, () => console.log(`DINDLER listening on port ${port}!`));