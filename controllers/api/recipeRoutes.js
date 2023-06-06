// controllers/api/recipes.js
const router = require('express').Router();
const express = require('express');
const { Op } = require('sequelize');
const Recipes = require('../../models/Recipes');
const CuisineCategory = require('../../models/CuisineCategory');


// Route to handle /api/recipes/:cuisineType
router.get('/:RequestCategory', async (req, res) => {
 
  let reqCat = req.params.RequestCategory;

  try {
    if (reqCat == "All")
    {
      // Get all recipies
      
    }
    else{
    const [foundCategory] = await CuisineCategory.findAll({
      where: {
        name: {
          [Op.eq]: reqCat, // exact match
        }
      }
    });
    if( !foundCategory )
    {
      throw("We found no matching Categories!!");
    }

       const recipes = await Recipes.findAll({
      where: {
        cuisineCategoryId: {
          [Op.eq]: foundCategory.id, //column in the recipe table
        },
      },
    });
    res.json({ recipes });
  }
  
    
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'An error occurred while fetching recipes.',
      message: error

    });
  }
});

module.exports = router;
