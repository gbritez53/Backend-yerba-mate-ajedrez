const express = require('express');
const fileupload = require('express-fileupload');

const productRoutes = require('./routes/product.routes');
const imagesRoutes = require('./routes/images.routes');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  fileupload({
    tempFileDir: '/temp'
  })
);

//Routes
app.use('/v1', productRoutes);
app.use('/api/v1', imagesRoutes);

module.exports = app;
