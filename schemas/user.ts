import mongoose = require('mongoose');

const User = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  username: String,
  password: String,
});

module.exports = User;
