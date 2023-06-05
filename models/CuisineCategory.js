const { Model, DataTypes } = require('sequelize');
// bringing in sequelize connection 
const sequelize = require('../config/connection');


// creates the CuisineCategories model
const CuisineCategories = sequelize.define('CuisineCategories', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = CuisineCategories;