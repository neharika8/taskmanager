const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// Get tasks
router.get("/", async (req, res) => {
  const tasks = await Task.find({ user: req.user });
  res.json(tasks);
});

// Add task
router.post("/", async (req, res) => {
  const task = new Task({
    text: req.body.text,
    dueDate: req.body.dueDate,
    user: req.user
  });
  await task.save();
  res.json(task);
});

// Delete
router.delete("/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

// Toggle complete
router.put("/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);
  task.completed = !task.completed;
  await task.save();
  res.json(task);
});

// Edit
router.put("/edit/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);
  task.text = req.body.text;
  task.dueDate = req.body.dueDate;
  await task.save();
  res.json(task);
});

module.exports = router;