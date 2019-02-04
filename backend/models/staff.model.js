const mongoose = require("mongoose");

const schemaa = mongoose.Schema; 

const StaffSchema = new schemaa({
    firstName : {type: String},
    lastName : {type: String},
    gender: {type: String},
    email: {type: String},
    title:{type: String},
    role:{type: String},
    status:{type:Boolean},
    password:{type:String}
});

module.exports = mongoose.model('Staff', StaffSchema);