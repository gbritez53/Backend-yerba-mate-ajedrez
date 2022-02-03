const express = require('express');
const {
  addCategory,
  getCategory,
  getCategories,
  getProducts,
  deleteCategory,
  updateCategory
} = require('../controllers/categoryController');

const router = express.Router();

router
  .post('/categories', addCategory)
  .get('/categories/', getCategories)
  .get('/categories/:path', getProducts)
  .delete('/categories/:id', deleteCategory)
  .put('/categories/:id', updateCategory);

module.exports = router;
