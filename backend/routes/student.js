const express = require('express');
const route = express.Router();
let Students = require('../models/Students');

route.get('/', getStudents);


async function getStudents(req, res) {
    var query = Students.find({}, function (err, docs) {
        console.log("Callback");
        console.log(docs)
    });
    res.send("Yes")
}

module.exports = route;
