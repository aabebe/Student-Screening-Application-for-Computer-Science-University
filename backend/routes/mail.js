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
      subject: "Programming Exam Pre-Test",
        html: `
      <h>Maharishi Universt of Management</h>
        <p>click on the link to take the pre test</p>
        <p style ="border-radius :2px" bgcolor="red" >
        <a href="http://localhost:4200/mail" target="_blank"  
        style="padding: 8px 12px; border: 1px solid #ED2939;
        border-radius: 2px;font-family: Helvetica, Arial, sans-serif;" 
        >
        Click Here to Begin
        </a>
        </p>
      `
              
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
