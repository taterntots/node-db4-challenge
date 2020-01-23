const express = require('express');
const db = require('../data/dbConfig');
const router = express.Router();

//gets a list of recipes
router.get('/', (req, res) => {
  // db.select('*')
  //   .from('recipes')
  //   .then(recipes => {
  //     res.status(200).json(recipes);
  //   })
  //   .catch(error => {
  //     res.status(500).json({ errorMessage: 'There was an error retrieving the list of recipes' })
  //   })
})

module.exports = router;