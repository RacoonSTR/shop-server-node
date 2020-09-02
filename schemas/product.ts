import mongoose = require('mongoose');

const Product = new mongoose.Schema({
  productId: mongoose.Schema.Types.ObjectId,
  categoryId: mongoose.Schema.Types.ObjectId,
  title: String,
  specs: [String] // TODO: Add specs
});

module.exports = Product;