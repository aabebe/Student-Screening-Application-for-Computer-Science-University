const express = require("express");
const router = express.Router();
const Staff = require("../models/staff.model");

router.post("/", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  Staff.findOne({ email: email, status: true }, function(err, staff) {
    console.log(staff);
    if (!staff)
      return res.json({
        status: 404,
        error: "Invalid Username"
      });
    if (staff.password !== password) {
      return res.json({ status: 404, error: " Invalid Password" });
    }
    // res.status(200).json(staff);
    const token = staff.generateAuthToken();
    res.json({ status: 200, message: token, staff: staff });
  });
});

module.exports = router;
