const Keys = require("../keys/Keys");
const jwt = require("jsonwebtoken");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const studentSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  gender: { type: String },
  status: { type: String },
  email: {
    type: String
  },
  exam: {
    type: Array,
    id: { type: String },
    question: {
      type: String,
      answer: { type: Array }
    }
  }
});

studentSchema.methods.generateAuthToken = function() {
  const token = jwt.sign(
    { _id: this._id, firstName: this.firstName, email: this.email },
    "jwtPrivateKey"
  );
  return token;
};

const Students = mongoose.model("students", studentSchema);

module.exports = Students;
