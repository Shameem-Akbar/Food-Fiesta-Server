const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const chefs = require('./data/chefData.json');
const recipe = require('./data/recipeData.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Food Fiesta is Running');
});

app.get('/chefs', (req, res) => {
    res.send(chefs);
})

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    const selectedChefs = chefs.find(n => n.id == id);
    res.send(selectedChefs)
})

app.get('/recipe', (req, res) => {
    res.send(recipe);
})

app.get('/recipe/:id', (req, res) => {
    const id = req.params.id;
    const selectedRecipe = recipe.find(n => n._id == id);
    res.send(selectedRecipe);
})



app.listen(port, () => {
    console.log(`Food Fiesta API is Running on port:${port}`);
})