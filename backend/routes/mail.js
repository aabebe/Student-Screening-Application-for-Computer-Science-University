const express = require("express");
const nodemailer = require("nodemailer");
const auth = require("../middleware/auth");
let constPASS = require("../keys/ConstDB");
const router = express.Router();
const Student = require("../models/Students");

router.patch("/", auth, async (req, res) => {
  try {
    const student = req.body;
    const email = student.email;

    const data = await Student.findOne({ email: email });
    if (!data) return res.json({ status: 404, error: "Invalid Student" });

    const token = data.generateAuthToken();

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
        <a href="http://localhost:4200/mail/?${token}/${email}" target="_blank"  
        style="background-color: #4CAF50;
  border: none;color: white; padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;margin: 4px 2px;cursor: pointer;" 
        >
        Click Here to Begin
        </a>
        </p>
      `
    };
    console.log(constPASS.MAIL_PASS);
    let info = await transporter.sendMail(mailOptions, async (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Email sent : ${info.response}`);
        const myuser = await Student.findOneAndUpdate(
          { email: email },
          // (err, res) => {

          //   console.log(res);
          // }
          { status: "SENT" },
          { upsert: true }
        );
        console.log("from find");
        console.log(myuser);
        res.json({ status: 200, token: token, data: data });
      }
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
