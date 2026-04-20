const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ================= MIDDLEWARE =================
app.use(express.json());
app.use(cors());

// ================= ROOT ROUTE (IMPORTANT) =================
app.get("/", (req, res) => {
  res.send("Task Manager API is running 🚀");
});

// ================= DATABASE =================
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ DB Connected"))
  .catch(err => console.log("❌ DB Error:", err));

// ================= ROUTES =================
app.use("/api/auth", require("./routes/auth"));
app.use("/api/tasks", require("./routes/task"));

// ================= PORT (VERY IMPORTANT FOR RENDER) =================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});