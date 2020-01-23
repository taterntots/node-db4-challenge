exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, recipe_name: 'Tom Yum Soup'},
        {id: 2, recipe_name: 'Bacon Cheeseburgers'},
        {id: 3, recipe_name: 'Hot Ham Water'}
      ]);
    });
};