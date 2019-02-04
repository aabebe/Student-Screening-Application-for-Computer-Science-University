const mongoose = require("mongoose");
const schema = mongoose.Schema;

let questionSchema = new schema({
  question: {
    type: String,
    required: true
  },
  status: {
    type: String
  },
  questionId: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("questions", questionSchema);
