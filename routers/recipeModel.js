const db = require('../data/dbConfig');

module.exports = {
  getRecipes,
  getRecipeById,
  getShoppingList,
  getInstructions
}

// *****************************************
// gets a list of recipes
// *****************************************
function getRecipes() {
  return db('recipes');
  // db.select('*').from('schemes') // does the same thing
}

// *****************************************
// get a specific recipe
// *****************************************
function getRecipeById(recipe_id) {
  return db('recipes')
    .where({ id: recipe_id })
    .first();
}

// *****************************************
// get a list of all ingredients and quantities for a single recipe
// *****************************************
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
    .where('recipes.id', '=', recipe_id);
}

// *****************************************
// get a correctly ordered list of instructions for preparing a single recipe
// *****************************************
function getInstructions(recipe_id) {
  return db
    .select(
      'recipes.recipe_name',
      'steps.step_number',
      'steps.step_description'
    )
    .from('recipes')
    .join('steps', 'recipes.id', 'steps.recipe_id')
    .where('recipes.id', '=', recipe_id)
    .orderBy('steps.step_number');
}