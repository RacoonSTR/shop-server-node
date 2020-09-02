import mongoose = require('mongoose');

const Category = new mongoose.Schema({
    categoryId: mongoose.Schema.Types.ObjectId,
    title: String,
    specs: [String] // TODO: Add specs
});

module.exports = Category;