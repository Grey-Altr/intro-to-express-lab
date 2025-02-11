const express = require('express');
const app = express();

// 1.

app.get('/greetings/:username', (req, res) => {
    res.send(`Hello there, ${req.params.username}`);
});

