const mongoose = require("mongoose");
const schema = mongoose.Schema;

let questionSchema = new schema({
    question: {
        type: String,
        required: true
    },
    status: {
        type: Boolean
    },
    questionId: {
        type: Number
    }
});

module.exports = mongoose.model("questions", questionSchema);
