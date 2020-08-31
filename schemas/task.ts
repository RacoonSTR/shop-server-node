import mongoose = require('mongoose');

const Task = new mongoose.Schema({
    taskId: mongoose.Schema.Types.ObjectId,
    boardId: mongoose.Schema.Types.ObjectId,
    description: String,
    subtasks: [mongoose.Schema.Types.ObjectId]
});

module.exports = Task;
