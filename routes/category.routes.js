const express = require('express');
const {
  addCategory,
  getCategory,
  getCategories,
  deleteCategory,
  updateCategory
} = require('../controllers/categoryController');

const router = express.Router();

router
  .post('/categories', addCategory)
  .get('/categories/', getCategories)
  .get('/categories/:id', getCategory)
  .delete('/categories/:id', deleteCategory)
  .put('/categories/:id', updateCategory);

module.exports = router;
