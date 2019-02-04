const express = require("express");
const router = express.Router();
const Staff = require("../models/staff.model");

router.post("/", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const staff = await Staff.findOne({ email: email, status: true });
  if (!staff) return res.status(404).json({ error: "Invalid Username" });
  if (staff.password !== password) {
    res.json({ error: " Invalid Password" });
  }
  // res.status(200).json(staff);
  const token = staff.generateAuthToken();
  res.json({ status: 200, message: token, staff: staff });
});

module.exports = router;
