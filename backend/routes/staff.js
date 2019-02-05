const express = require("express");
const router = express.Router();
const Staff = require("../models/staff.model");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
//var bcrypt = require('bcrypt-nodejs');

router.get('/', (req, res) => {
    Staff.find({role: "Staff"}, (err, data) => {
        if (err) {
            console.log("erroring...")
        }
        res.json(data);
    })
    //res.send('Testing controller!');
});
router.post('/create', (req, res) => {
    let staff = new Staff(
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            gender: req.body.gender,
            email: req.body.email,
            title: req.body.title,
            role: req.body.role,
            status: req.body.status,
            password: req.body.password
        }
    );

    var new_task = new Staff(staff);


    new_task.save(function (err, staff) {
        console.log("BB")
        if (err)
            res.send(err);
        res.json(staff);
        console.log("Middling...")
    });
});
router.get("/:id", auth, (req, res) => {
    Staff.findById(req.params.id, function (err, staff) {
        if (err) return next(err);
        res.send(staff);
    });
});
router.put("/:id/update", auth, admin, (req, res) => {
    Staff.findByIdAndUpdate(req.params.id, {$set: req.body}, function (
        err,
        staff
    ) {
        console.log(req.body);
        if (err) return next(err);
        res.send("Staff udpated.");
    });
});
module.exports = router;
