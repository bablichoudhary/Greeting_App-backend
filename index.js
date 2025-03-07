const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable CORS to allow frontend requests

// API route to return a personalized greeting
app.get("/api/greet", (req, res) => {
  const name = req.query.name?.trim(); // Trim spaces if any
  if (!name) {
    return res.status(400).json({ error: "Name is required." });
  }
  res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
});

// Start server on port 8000
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
