const express = require("express");
const { sports, events, testimonials } = require("../data/mockData");

const router = express.Router();

router.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "sports-academy-backend" });
});

router.get("/sports", (_req, res) => {
  res.json({ success: true, data: sports });
});

router.get("/events", (_req, res) => {
  res.json({ success: true, data: events });
});

router.get("/testimonials", (_req, res) => {
  res.json({ success: true, data: testimonials });
});

router.post("/contact", (req, res) => {
  const { name, email, phone, sport, message } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({
      success: false,
      error: "Name, email, and phone are required.",
    });
  }

  console.log("[Contact]", { name, email, phone, sport, message });

  res.status(201).json({
    success: true,
    message: "Thank you! We will contact you shortly.",
  });
});

router.post("/register", (req, res) => {
  const { name, email, phone, sport, age, batch } = req.body;

  if (!name || !email || !phone || !sport) {
    return res.status(400).json({
      success: false,
      error: "Name, email, phone, and sport are required.",
    });
  }

  console.log("[Register]", { name, email, phone, sport, age, batch });

  res.status(201).json({
    success: true,
    message: "Registration received! Trial class details will be sent to your email.",
  });
});

module.exports = router;
