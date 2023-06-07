// controllers/api/recipes.js
const router = require('express').Router();
const express = require('express');
const { Op } = require('sequelize');
const Ingredients = require('../../models/Ingredients');
const RecipeIngredient = require('../../models/RecipeIngredient');


// Route to handle /api/recipes/:cuisineType
router.get('/:recipeId', async (req, res) => {

  let reqRecipeId = req.params.recipeId;

  try {


    //const users = await sequelize.query("SELECT * FROM Ingredients A   INNER JOIN RecipeIngredient B   ON A.id= B.IngredientId and B.RecipeId = 1;", { type: QueryTypes.SELECT });
    // We didn't need to destructure the result here - the results were returned directly
    // const [ingredients, metadata] = await Op.query("SELECT * FROM Ingredients A   INNER JOIN RecipeIngredient B   ON A.id= B.IngredientId and B.RecipeId = 1;")
    //console.log(users);
    // res.json({ ingredients });



   
    const [ingredients] = await Ingredients.findAll({
      include: [
        {
          model: RecipeIngredient,
          where: { RecipeId: reqRecipeId },
          required: true,         
          all: true
        },
      ],
    });

    res.json({ ingredients });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'An error occurred while fetching ingredients.',
      message: error

    });
  }
});

module.exports = router;
