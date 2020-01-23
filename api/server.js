const express = require('express'); //importing a CommonJS module
const helmet = require('helmet'); //yarn add helmet
const recipeRouter = require('../routers/recipeRouter');
const ingredientsRouter = require('../routers/ingredientsRouter');
const server = express(); //creates the server

//global middleware
server.use(express.json()); //middleware needed to parse JSON
server.use(helmet()); //middleware that adds a layer of security to the server

//endpoints
server.get('/', (req, res) => {
  res.send(`Welcome to the Danger Zone!`);
});

//routes
server.use('/api/recipes', recipeRouter);
server.use('/api/ingredients', ingredientsRouter)

module.exports = server