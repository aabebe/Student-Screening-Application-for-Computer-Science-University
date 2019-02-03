const mongoose = require("mongoose");

const schema = mongoose.Schema; 

let ScreeningSchema = new schema({
    question : {type: String},
    status : {type: String}
});

module.exports = mongoose.model('Question', ScreeningSchema);