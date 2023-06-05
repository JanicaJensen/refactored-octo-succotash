// controllers/api/recipes.js
const router = require('express').Router();
const express = require('express');
const { Op } = require('sequelize');
const Recipes = require('../../models/Recipes');
const CuisineCategory = require('../../models/CuisineCategory');


// Route to handle /api/recipes/:cuisineType
router.get('/:RequestCategory', async (req, res) => {
  console.log(req.params);
  let reqCat = req.params.RequestCategory;
  console.log(reqCat);
  console.log(reqCat);
  try {
    const [foundCategory] = await CuisineCategory.findAll({
      where: {
        name: {
          [Op.eq]: reqCat, // exact match
        }
      }
    });
    // console.log("found cat " + JSON.stringify(foundCategory));

    // console.log("found cat id" + foundCategory.id);

    // Query the database to retrieve recipes based on the cuisineType
    const recipes = await Recipes.findAll({
      where: {
        cuisineCategoryId: {
          [Op.eq]: foundCategory.id, //column in the recipe table
        },
      },
    });
    // console.log(recipes);
    // console.log("recipes: " + recipes);
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
