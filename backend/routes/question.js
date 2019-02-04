const express = require("express");
const router = express.Router();
const Question = require("../models/question");

router.get("/:id", (req, res, next) => {});
router.get("/", (req, res) => {
  res.status(200).json("get works");
});
router.post("/", async (req, res, next) => {
  let question = new Question({
    question: req.body.question,
    isActivated: req.body.isActivated,
    questionId: req.body.questionId
  });
  console.log("get the inputs");
  question = await question.save(question);
  res.status(200).json(question);
});

module.exports = router;
