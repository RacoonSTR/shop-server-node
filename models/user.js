const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  userId: Schema.ObjectId,
  username: String,
  password: String,
});

module.exports = User;
