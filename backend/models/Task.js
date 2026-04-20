const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  text: String,
  completed: { type: Boolean, default: false },
  dueDate: Date,
  user: String
});

module.exports = mongoose.model("Task", taskSchema);