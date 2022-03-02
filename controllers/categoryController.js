const Category = require('../models/Category');
const Products = require('../models/Product');

const addCategory = async (req, res) => {
  try {
    const { name, path } = req.body;
    const category = new Category({
      name,
      path
    });
    const newCategory = await category.save();
    res.status(201).send({ newCategory });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const getCategories = async (req, res) => {
  const categories = await Category.find({});
  res.status(200).send({ categories });
};

const getProducts = async (req, res) => {
  const { path } = req.params;
  await Category.aggregate([
    {
      $match: {
        path: path
      }
    },
    {
      $lookup: {
        from: 'products',
        localField: '_id',
        foreignField: 'category',
        as: 'products'
      }
    },
    {
      $project: {
        name: 1,
        path: 1,
        products: {
          _id: 1,
          name: 1,
          path: 1,
          size: 1,
          imgURL: 1,
          contentImg: 1,
          content: 1
        }
      }
    }
  ]).exec((err, result) => {
    if (err) {
      console.log(err);
      return res.send(err.message);
    }
    return res.json(result);
  });
};

const getCategory = async (req, res) => {
  const { id } = req.params;
  const category = await Category.findOne({ _id: id });

  try {
    if (!category) {
      res.status(404).send({ message: 'Category not found' });
    } else {
      res.status(200).send({ category });
    }
  } catch (err) {
    console.error(err);
  }
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  const category = await Category.findOne({ _id: id });

  try {
    if (!category) {
      res.status(404).send({ message: 'Category not found' });
    } else {
      await Category.findOneAndDelete({ _id: id });
      res.status(200).send({ message: 'Category deleted' });
    }
  } catch (err) {
    console.error(err);
  }
};

const updateCategory = async (req, res) => {
  const { id } = req.params;
  const category = await Category.findOne({ _id: id });

  try {
    if (!category) {
      res.status(404).send({ message: 'Category not found' });
    } else {
      await Category.findOneAndUpdate({ _id: id }, req.body);
      res.status(200).send({ message: 'Category updated' });
    }
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  addCategory,
  getCategory,
  getCategories,
  getProducts,
  deleteCategory,
  updateCategory
};
