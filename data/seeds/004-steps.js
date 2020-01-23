exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([

        //Tom Yum Soup
        {id: 1, recipe_id: 1, step_number: 1, step_description: 'pour a half gallon of beef broth into a pot and bring to a boil'},
        {id: 2, recipe_id: 1, step_number: 2, step_description: 'add two tablespoons of Tom Yum paste to the broth'},
        {id: 3, recipe_id: 1, step_number: 3, step_description: 'toss diced mushrooms and chicken into the pot'},

        //Bacon Cheeseburgers
        {id: 4, recipe_id: 2, step_number: 1, step_description: 'roll and flatten beef into patties and fry up on the grill'},
        {id: 5, recipe_id: 2, step_number: 2, step_description: 'fry up all the bacon'},
        {id: 6, recipe_id: 2, step_number: 3, step_description: 'assemble bacon, cheese, and patty on a bun'},

        //Hot Ham Water
        {id: 7, recipe_id: 3, step_number: 1, step_description: 'boil a gallon of water'},
        {id: 8, recipe_id: 3, step_number: 2, step_description: 'toss in a hunk of ham'},
        {id: 9, recipe_id: 3, step_number: 3, step_description: 'add two pinches of salt and do Buster proud'}

      ]);
    });
};