const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Ingredient = require('./Ingredients');
const CuisineCategory = require('./CuisineCategory');


const Recipes = sequelize.define('Recipes', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

Recipes.belongsToMany(Ingredient, { through: 'RecipeIngredient' });

Ingredient.belongsToMany(Recipes, { through: 'RecipeIngredient' });

Recipes.belongsToMany(CuisineCategory, { through: 'Cuisine' });

module.exports = Recipes;