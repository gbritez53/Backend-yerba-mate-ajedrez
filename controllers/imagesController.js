const Product = require('../models/Product');

const uploadImage = async (req, res) => {
  console.log(req.files);
  const { file } = req.files;
  return res.send('Received');
};

module.exports = {
  uploadImage
};
