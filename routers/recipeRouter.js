const express = require('express');
const Recipes = require('./recipeModel');
const router = express.Router();

//gets a list of recipes
router.get('/', (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(error => {
      res.status(500).json({ errorMessage: 'There was an error retrieving the list of recipes' })
    })
})

module.exports = router;