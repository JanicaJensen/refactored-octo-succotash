/// DOESN'T WORK!!!!///

// controllers/api/recipes.js
const router = require('express').Router();
const express = require('express');
const { Op } = require('sequelize');
const Recipes = require('../../models/Recipes'); // Import your Recipe model


// Route to handle /api/recipes/:cuisineType
router.get('/:cuisineType', async (req, res) => {
  try {
    const cuisineType = req.params.cuisineType;

    // Query the database to retrieve recipes based on the cuisineType
    const recipes = await Recipes.findAll({
      where: {
        cuisine: {
          [Op.iLike]: `%${cuisineType}%`, // Assuming cuisineType is a column in the Recipe model/table
        },
      },
    });
    console.log("recipes: " + recipes);
    // Send the retrieved recipes as the response
    res.json({ recipes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      error: 'An error occurred while fetching recipes.',
      message: error

   });
  }
});

module.exports = router;
