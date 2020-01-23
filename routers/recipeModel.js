const db = require('../data/dbConfig');

module.exports = {
  getRecipes,
  getRecipeById,
  getShoppingList
}

function getRecipes() {
  return db('recipes');
  // db.select('*').from('schemes') // does the same thing
}

function getRecipeById(recipe_id) {
  return db('recipes')
    .where({ id: recipe_id })
    .first();
}

function getShoppingList(recipe_id) {
  return db
  .select(
    'recipes.recipe_name',
    'recipe_ingredients.ingredient_quantity',
    'recipe_ingredients.quantity_units',
    'ingredients.ingredient_name'
  )
  .from('recipes')
  .join('recipe_ingredients', 'recipes.id', 'recipe_ingredients.recipe_id')
  .join('ingredients', 'ingredients.id', 'recipe_ingredients.ingredient_id')
  .where('recipes.id', '=', recipe_id)
}