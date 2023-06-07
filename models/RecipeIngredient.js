const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class RecipeIngredient extends Model { }

RecipeIngredient.init({}, { sequelize, modelName: 'RecipeIngredient' });

module.exports = RecipeIngredient;