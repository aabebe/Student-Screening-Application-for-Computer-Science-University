const mongoose = require("mongoose");
const config = require("config");
const jwt = require("jsonwebtoken");

const schemaa = mongoose.Schema;

const StaffSchema = new schemaa({
  firstName: { type: String },
  lastName: { type: String },
  gender: { type: String },
  email: { type: String },
  title: { type: String },
  role: { type: String },
  status: { type: Boolean },
  password: { type: String }
});
StaffSchema.methods.generateAuthToken = function() {
  const token = jwt.sign(
    { _id: this._id, role: this.role, email: this.email },
    "jwtPrivateKey"
  );
  return token;
};

module.exports = mongoose.model("Staff", StaffSchema);
