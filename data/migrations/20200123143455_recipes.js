exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();

      tbl.string('recipe_name', 255)
        .notNullable()
        .unique()
        .index();
    })

    .createTable('ingredients', tbl => {
      tbl.increments();

      tbl.string('ingredient_name', 255)
        .notNullable()
        .unique()
        .index();
    })

    .createTable('steps', tbl => {
      tbl.increments();

      //foreign key
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT') // what happens if the recipe with this id is deleted
        .onUpdate("CASCADE"); // what happens if the recipe id changes
        // options include CASCADE, SET NULL, DO NOTHING, RESTRICT

      tbl.integer('step_number')
        .notNullable();

      tbl.string('step_description', 255)
        .notNullable();
    })
    
    .createTable('recipe_ingredients', tbl => {
      tbl.increments();

      //foreign key
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT') // what happens if the recipe with this id is deleted
        .onUpdate("CASCADE"); // what happens if the recipe id changes
        // options include CASCADE, SET NULL, DO NOTHING, RESTRICT

      //foreign key
      tbl.integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onDelete('RESTRICT') // what happens if the recipe with this id is deleted
      .onUpdate("CASCADE"); // what happens if the recipe id changes
      // options include CASCADE, SET NULL, DO NOTHING, RESTRICT

      tbl.float('ingredient_quantity')
        .notNullable();

      tbl.string('quantity_units', 255)
        .notNullable();
    })
}

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipe_ingredients');
}