// Import required modules
const express = require("express");
const cors = require("cors");

// Initialize express app
const app = express();

// Middleware
app.use(cors()); // Allow frontend requests
app.use(express.json()); // Parse JSON data

// Import routes
const contactRoutes = require("./routes/contact");

// Use routes
app.use("/api/contact", contactRoutes);

// Server port
const PORT = 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});