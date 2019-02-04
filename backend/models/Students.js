const Keys = require('../keys/Keys');

var db = require('mongoose');
var Schema = db.Schema;

const Students = db.model('students', new Schema({
    firstName: {type: String},
    lastName: {type: String},
    gender: {type: String},
    status: {type: String},
    exam: {
        type: Array,
        id: {type: String},
        question: {
            type: String,
            answer: {type: Array}
        }
    }
}));


module.exports = Students;
