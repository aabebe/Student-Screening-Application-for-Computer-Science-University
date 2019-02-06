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
router.post('/', async (req, res) => {
    let question;
    console.log(req.body);
    question = await Staff.create(req.body);
    res.status(200).json(question);
});
router.get("/:id", auth, (req, res) => {
    Staff.findById(req.params.id, function (err, staff) {
        if (err) return next(err);
        res.send(staff);
    });
});
router.put("/status", auth, admin, async (req, res) => {

    const staff = await Staff.update(
        {_id: req.body._id},
        {status: req.body.status},
        {upsert: true, new: true}
    );
    if (!staff)
        return res.json({
            status: 404,
            error: "The question with the given id was not found"
        });
    res.status(200);
});
module.exports = router;
