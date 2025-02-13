const express = require('express');
const app = express();

// 1.

app.get('/greetings/:username', (req, res) => {
    res.send(`Hello there, ${req.params.username}`);
});

// 2.

app.get('/roll/:number', (req, res) => {
    if (isNaN(req.params.number)) {
        res.send('You must specify a number!');
    } else {
        let randomNumber = Math.floor(Math.random() * req.params.number);
        res.send(`You rolled a ${randomNumber}!`);
    };
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});