exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([

        //Tom Yum Soup
        {id: 1, recipe_id: 1, step_number: 1, step_description: ''},
        {id: 2, recipe_id: 1, step_number: 2, step_description: ''},
        {id: 3, recipe_id: 1, step_number: 3, step_description: ''},

        //Bacon Cheeseburgers
        {id: 4, recipe_id: 2, step_number: 1, step_description: ''},
        {id: 5, recipe_id: 2, step_number: 2, step_description: ''},
        {id: 6, recipe_id: 2, step_number: 3, step_description: ''},

        //Hot Ham Water
        {id: 7, recipe_id: 3, step_number: 1, step_description: ''},
        {id: 8, recipe_id: 3, step_number: 2, step_description: ''},
        {id: 9, recipe_id: 3, step_number: 3, step_description: ''}

      ]);
    });
};