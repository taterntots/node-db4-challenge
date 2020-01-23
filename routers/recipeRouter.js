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
      res.status(500).json({ errorMessage: 'There was an error retrieving the list of recipes' });
    })
})

//get a specific recipe
router.get('/:id/', (req, res) => {
  const { id } = req.params;

  Recipes.getRecipeById(id)
    .then(recipe => {
      if (recipe) {
        res.json(recipe);
      } else {
        res.status(404).json({ message: 'Could not find scheme with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get specified recipe' });
    })
})

//
router.get('/:id/shoppinglist', (req, res) => {
  Recipes.getShoppingList(req.params.id)
    .then(recipe => {
        res.status(200).json(recipe);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get specified ingredients for shopping list' });
    })
})

module.exports = router;