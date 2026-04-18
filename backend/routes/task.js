const router = require("express").Router();
const Task = require("../models/Task");
const jwt = require("jsonwebtoken");

// Middleware
function auth(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).send("No token");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(400).send("Invalid token");
  }
}

// Add task
router.post("/", auth, async (req, res) => {
  const task = new Task({
    userId: req.user.id,
    text: req.body.text
  });
  await task.save();
  res.json(task);
});

// Get tasks
router.get("/", auth, async (req, res) => {
  const tasks = await Task.find({ userId: req.user.id });
  res.json(tasks);
});

// Delete task
router.delete("/:id", auth, async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.send("Deleted");
});

// Toggle complete
router.put("/:id", auth, async (req, res) => {
  const task = await Task.findById(req.params.id);
  task.completed = !task.completed;
  await task.save();
  res.json(task);
});

module.exports = router;