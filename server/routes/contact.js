const express = require("express");
const router = express.Router();

// POST request for contact form
router.post("/", (req, res) => {

  // Extract data from request body
  const { name, email, message } = req.body;

  console.log("New message received:");
  console.log(name, email, message);

  // Send response
  res.json({
    success: true,
    message: "Message received successfully"
  });

});

module.exports = router;