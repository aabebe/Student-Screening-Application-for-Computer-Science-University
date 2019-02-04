const express = require("express");
const router = express.Router();
const Question = require("../models/question");

router.get("/:id", async (req, res, next) => {
  const question = await Question.find({ questionId: req.params.id });
  console.log(question);
  if (!question)
    res
      .status(404)
      .json({ error: "The question with the given id was not found" });

  res.status(200).json(question);
});
router.put("/:id", async (req, res, next) => {
  const question = await Question.update(
    { questionId: req.params.id },
    { status: "activated" },
    { upsert: true, new: true }
  );
  if (!question)
    return res
      .status(404)
      .json({ error: "The question with the given id was not found" });
  res.status(200);
});
router.get("/", async (req, res, next) => {
  try {
    const question = await Question.find().sort("questionId");
    res.status(200).json(question);
  } catch (error) {
    next(error);
  }
});
router.post("/", async (req, res, next) => {
  let question = new Question({
    question: req.body.question,
    isActivated: req.body.isActivated,
    questionId: req.body.questionId
  });

  question = await question.save(question);
  res.status(200).json(question);
});

module.exports = router;
