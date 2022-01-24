const express = require('express');
const {
  addProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

const router = express.Router();

router
  .post('/products', addProduct)
  .get('/products', getProducts)
  .get('/products/:id', getProduct)
  .delete('/products/:id', deleteProduct)
  .put('/products/:id', updateProduct);

module.exports = router;
