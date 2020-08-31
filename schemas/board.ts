import mongoose = require('mongoose');

const Board = new mongoose.Schema({
    boardId: mongoose.Schema.Types.ObjectId,
    title: String,
    tasks: [mongoose.Schema.Types.ObjectId]
});

module.exports = Board;
