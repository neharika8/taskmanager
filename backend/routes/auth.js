const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ================= TEST ROUTES (optional but helpful) =================

// This prevents "Cannot GET /api/auth/login" confusion
router.get("/login", (req, res) => {
  res.send("Login API is working. Please use POST method.");
});

router.get("/signup", (req, res) => {
  res.send("Signup API is working. Please use POST method.");
});


// ================= SIGNUP =================
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // hash password
    const hashed = await bcrypt.hash(password, 10);

    // create user
    const user = new User({
      name,
      email,
      password: hashed
    });

    await user.save();

    res.json({ message: "User created successfully" });

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


// ================= LOGIN =================
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // check user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // check password
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(400).json({ message: "Wrong password" });
    }

    // create token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" } // added expiry
    );

    res.json({
      token,
      name: user.name
    });

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;