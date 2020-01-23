exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([

        //Tom Yum Soup
        {id: 1, recipe_id: 1, ingredient_id: 0, ingredient_quantity: 0, quantity_units: ''},
        {id: 1, recipe_id: 2, ingredient_id: 0, ingredient_quantity: 0, quantity_units: ''},
        {id: 1, recipe_id: 3, ingredient_id: 0, ingredient_quantity: 0, quantity_units: ''},

        //Bacon Cheeseburgers
        {id: 2, recipe_id: 1, ingredient_id: 0, ingredient_quantity: 0, quantity_units: ''},
        {id: 2, recipe_id: 2, ingredient_id: 0, ingredient_quantity: 0, quantity_units: ''},
        {id: 2, recipe_id: 3, ingredient_id: 0, ingredient_quantity: 0, quantity_units: ''},

        //Hot Ham Water
        {id: 3, recipe_id: 1, ingredient_id: 0, ingredient_quantity: 0, quantity_units: ''},
        {id: 3, recipe_id: 2, ingredient_id: 0, ingredient_quantity: 0, quantity_units: ''},
        {id: 3, recipe_id: 3, ingredient_id: 0, ingredient_quantity: 0, quantity_units: ''}

      ]);
    });
};