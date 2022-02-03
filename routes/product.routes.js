const express = require('express');
const {
  addProduct,
  getProduct,
  getProductByPath,
  getProducts,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

const router = express.Router();

router
  .post('/products', addProduct)
  .get('/products', getProducts)
  .get('/products/id/:id', getProduct)
  .get('/products/:path', getProductByPath)
  .delete('/products/:id', deleteProduct)
  .put('/products/:id', updateProduct);

module.exports = router;
