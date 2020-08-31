import mongoose = require('mongoose');
import mongodb = require('mongodb');

const Task = new mongoose.Schema({
    taskId: mongodb.ObjectID,
    boardId: mongodb.ObjectID,
    description: String,
    subtasks: [mongodb.ObjectID]
});

module.exports = Task;
