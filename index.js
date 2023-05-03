const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const chefs = require('./data/chefData.json');

app.get('/', (req, res) => {
    res.send('Food Fiesta is Running');
});

app.get('/chefs', (req, res) => {
    res.send(chefs);
})

app.listen(port, () => {
    console.log(`Food Fiesta API is Running on port:${port}`);
})