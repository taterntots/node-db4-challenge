exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient_name: 'Mushroom'},
        {id: 2, ingredient_name: 'Tom Yum Paste'},
        {id: 3, ingredient_name: 'Beef Broth'},
        {id: 4, ingredient_name: 'Diced Chicken'},
        {id: 5, ingredient_name: 'Beef Patty'},
        {id: 6, ingredient_name: 'Potato Bun'},
        {id: 7, ingredient_name: 'Bacon'},
        {id: 8, ingredient_name: 'Pepperjack Cheese'},
        {id: 9, ingredient_name: 'Water'},
        {id: 10, ingredient_name: 'Ham'},
        {id: 11, ingredient_name: 'Salt'}
      ]);
    });
};