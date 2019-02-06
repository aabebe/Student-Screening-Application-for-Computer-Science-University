const express = require("express");
const router = express.Router();
const Question = require("../models/question");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

router.get("/:id", auth, admin, async (req, res, next) => {
    const count = parseInt(req.params.id);
    console.log(count);
    const question = await Question.find({status: true}).limit(3);
    console.log(question);
    if (!question)
        res.json({
            status: 404,
            error: "The question with the given id was not found"
        });

    res.status(200).json(question);
});
router.put("/status", auth, admin, async (req, res, next) => {
    console.log("Server Side", req.body);
    const question = await Question.update(
        {_id: req.body._id},
        {status: req.body.status},
        {upsert: true, new: true}
    );
    if (!question)
        return res.json({
            status: 404,
            error: "The question with the given id was not found"
        });
    res.status(200);
});
router.get("/", auth, admin, async (req, res, next) => {
    try {
        const question = await Question.find({}).sort("questionId");
        res.status(200).json(question);
    } catch (error) {
        next(error);
    }
});
router.post("/", auth, admin, async (req, res, next) => {
    let question;
    console.log(req.body);
    question = await Question.create(req.body);
    res.status(200).json(question);
});

module.exports = router;
