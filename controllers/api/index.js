const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipeRoutes = require('./recipeRoutes');
const ingredientsRoutes = require('./ingredientsRoutes');

router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes);
router.use('/ingredients', ingredientsRoutes);

module.exports = router;
