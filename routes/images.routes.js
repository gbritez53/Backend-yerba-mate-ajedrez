const express = require('express');
const { uploadImage } = require('../controllers/imagesController');

const router = express.Router();

router
  .post('/images/upload', uploadImage)
  .get('/images/')
  .get('/images/:id')
  .delete('/images/:id');

module.exports = router;
