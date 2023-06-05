DROP DATABSE IF EXISTS byebyefresh_db;

CREATE DATABASE byebyefresh_db;

-- Uses the byebyefresh_db database
USE byebyefresh_db;

-- Creates the Recipes table
CREATE TABLE Recipes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  cuisine VARCHAR(255) NOT NULL
);

-- Creates the Ingredients table
CREATE TABLE Ingredients (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL
);

-- Creates the RecipeIngredient table with multiple foreign keys to allow for many-to-many relationship
CREATE TABLE RecipeIngredient (
  id INT PRIMARY KEY AUTO_INCREMENT,
  recipeId INT NOT NULL,
  ingredientId INT NOT NULL,
  FOREIGN KEY (recipeId) REFERENCES Recipes(id),
  FOREIGN KEY (ingredientId) REFERENCES Ingredients(id)
);

CREATE TABLE CuisineCategory (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  cuisine VARCHAR(255) NOT NULL
);


-- I believe we need this to handle the user info?
/* CREATE TABLE IF NOT EXISTS `user` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; */
