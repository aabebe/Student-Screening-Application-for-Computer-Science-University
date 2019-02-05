const express = require("express");
const nodemailer = require("nodemailer");
const auth = require("../middleware/auth");
let constPASS = require("../keys/ConstDB");
const router = express.Router();

router.post("/", auth, async (req, res) => {
  try {
      const student = req.body;
      
    let transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      auth: {
        user: "andualemhailu@gmail.com",
        pass: constPASS.MAIL_PASS
      }
    });
    let mailOptions = {
      from: "andualemhailu@gmail.com",
      to: student.email,
      subject: "Invitation",
      html: "<h1>Welcome</h1><p>That was easy!</p>"
    };
    console.log(constPASS.MAIL_PASS);
    let info = await transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      } else {
          console.log(`Email sent : ${info.response}`);
          res.json(info);
      }
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
