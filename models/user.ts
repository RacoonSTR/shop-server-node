import mongoose = require('mongoose');
import mongodb = require('mongodb');

const User = new mongoose.Schema({
  userId: mongodb.ObjectID,
  username: String,
  password: String,
});

module.exports = User;
