const express = require('express');
const {
  addCategory,
  getCategoryPath,
  getCategoryId,
  getCategories,
  deleteCategory,
  updateCategory
} = require('../controllers/categoryController');

const router = express.Router();

router
  .post('/categories', addCategory)
  .get('/categories/', getCategories)
  .get('/categories/:id', getCategoryId)
  .get('/categories/path', getCategoryPath)
  .delete('/categories/:id', deleteCategory)
  .put('/categories/:id', updateCategory);

module.exports = router;
