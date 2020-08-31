import mongoose = require('mongoose');
import mongodb = require('mongodb');

const Board = new mongoose.Schema({
    boardId: mongodb.ObjectID,
    title: String,
    tasks: [mongodb.ObjectID]
});

module.exports = Board;
