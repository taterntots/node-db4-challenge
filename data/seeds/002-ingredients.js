exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient_name: ''},
        {id: 2, ingredient_name: ''},
        {id: 3, ingredient_name: ''}
      ]);
    });
};