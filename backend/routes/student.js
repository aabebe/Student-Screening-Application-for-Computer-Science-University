const express = require('express');
const route = express.Router();
let Students = require('../models/Students');

route.get('/', getStudents);
route.put('/status', updateStatus);
route.get('/exam/:id', getExam);
route.put('/exam/screenshot', updateExamScreenShot);


async function getStudents(req, res) {
    var docs = await Students.find({});
    console.log(docs);
    res.json(docs);
}// end of getStudents

function updateStatus(req, res) {
    console.log(req.body);
    var conditions = {_id: req.body.id}
        , update = {status: req.body.status}
        , options = {multi: true};

    Students.update(conditions, update, updateCallBack);

    function updateCallBack(err, response) {
        if (!err) {
            res.send(response);
        } else {
            res.send(err);

        }
    }// end of updateCallBack

}//end of updateStatus

function getExam(req, res) {

    let questions = [{"id": "2", "question": "B", "answer": []}, {"id": "1", "question": "A", "answer": []}];

    let id = req.params.id;
    console.log(id);
    var conditions = {
        _id: id
    }
        , update = {$set: {exam: questions}}
        , options = {multi: true};

    Students.updateOne(conditions, update, updateCallBack);

    async function updateCallBack(err, response) {
        if (!err) {
            let data = await getExamQuestions(id);
            res.json(data);
        } else {
            res.json(err);

        }
    }// end of updateCallBack

}// end of getExam

async function getExamQuestions(id) {
    try {
        return await Students.find({_id: id});
    } catch (e) {
        console.log(e);
        return null;
    }
}


function updateExamScreenShot(req, res) {
    console.log(req.body.id);
    console.log(req.body.questionId);
    console.log(req.body.answer);

    var conditions = {
        _id: req.body.id,
        'exam.id': req.body.questionId
    }
        , update = {$push: {'exam.$.answer': req.body.answer}}
        , options = {multi: true};

    Students.updateOne(conditions, update, updateCallBack);

    function updateCallBack(err, response) {
        if (!err) {
            res.send(response);
        } else {
            res.send(err);

        }
    }// end of updateCallBack
}//end of updateExam

module.exports = route;