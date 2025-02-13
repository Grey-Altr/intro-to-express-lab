const express = require('express');
const app = express();

const collectibles = [
    { name: "shiny ball", price: 5.95 },
    { name: "autographed picture of a dog", price: 10 },
    { name: "vintage 1970s yogurt SOLD AS-IS", price: 0.99 },
];

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" },
];



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

// 3.

app.get('/collectibles/:index', (req, res) => {
    if (!collectibles[req.params.index]) {
        res.send('This item is not yet in stock. Check back soon!');
    } else {
        res.send(`So, you want the ${collectibles[req.params.index].name}? For $${collectibles[req.params.index].price}, it can be yours!`);
    };
});

// 4.

app.get('/shoes', (req, res) => {
    if (req.query['min-price']) {
        const expensiveShoes = shoes.filter(shoe => shoe.price > req.query['min-price']);
        res.send(expensiveShoes);
    } else if (req.query['max-price']) {
        const cheapShoes = shoes.filter(shoe => shoe.price < req.query['max-price']);
        res.send(cheapShoes);
    } else if (req.query.type) {
        const shoesOfAType = shoes.filter(shoe => shoe.type === req.query.type);
        res.send(shoesOfAType);
    } else {
        res.send(shoes);
    };
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});