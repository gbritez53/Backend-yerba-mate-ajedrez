const Product = require('../models/Product');

const addProduct = async (req, res) => {
  try {
    const { name, size, category, categoryPath, path, imgURL, description } =
      req.body;
    const product = new Product({
      name,
      size,
      category,
      categoryPath,
      path,
      imgURL,
      description
    });
    const newProduct = await product.save();
    res.status(201).send({ newProduct });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const getProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(200).send({ products });
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findOne({ _id: id });

  try {
    if (!product) {
      res.status(404).send({ message: 'Product not found' });
    } else {
      res.status(200).send({ product });
    }
  } catch (err) {
    console.error(err);
  }
};

const getProductByPath = async (req, res) => {
  const { path } = req.params;
  const product = await Product.findOne({ path: path });

  try {
    if (!product) {
      res.status(404).send({ message: 'Product not found' });
    } else {
      res.status(200).send({ product });
    }
  } catch (err) {
    console.error(err);
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findOne({ _id: id });

  try {
    if (!product) {
      res.status(404).send({ message: 'Product not found' });
    } else {
      await Product.findOneAndDelete({ _id: id });
      res.status(200).send({ message: 'Product deleted' });
    }
  } catch (err) {
    console.error(err);
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findOne({ _id: id });

  try {
    if (!product) {
      res.status(404).send({ message: 'Product not found' });
    } else {
      await Product.findOneAndUpdate({ _id: id }, req.body);
      res.status(200).send({ message: 'Product updated' });
    }
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  addProduct,
  getProduct,
  getProductByPath,
  getProducts,
  deleteProduct,
  updateProduct
};
