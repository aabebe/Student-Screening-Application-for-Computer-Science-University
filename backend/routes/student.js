const express = require("express");
const route = express.Router();
let Students = require("../models/Students");
const Question = require("../models/question");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

route.get("/", auth, getStudents);
route.put("/status", auth, admin, updateStatus);
route.get("/exam/:id", auth, getExam);
route.put("/exam/screenshot", auth, admin, updateExamScreenShot);

async function getStudents(req, res) {
    var docs = await Students.find({});
    console.log(docs);
    res.json(docs);
} // end of getStudents

function updateStatus(req, res) {
    console.log(req.body);
    var conditions = {_id: req.body.id},
        update = {status: req.body.status},
        options = {multi: true};

    Students.update(conditions, update, updateCallBack);

    function updateCallBack(err, response) {
        if (!err) {
            res.send(response);
        } else {
            res.send(err);
        }
    } // end of updateCallBack
} //end of updateStatus


async function getQuestions() {
    let counter = 0;
    let questionsList = [];
    const dbQuestionsList = await Question.find({}).sort("questionId");

    dbQuestionsList.forEach(singleQuestion => {
        if (counter <= 2) {
            let questions = {
                id: singleQuestion.id,
                question: singleQuestion.question,
                answer: []
            };
            questionsList.push(questions)
            counter++;
        } else {
            return questionsList;
        }
    });
    return questionsList;
}


async function getExam(req, res) {
    let questions = [
        /*   {id: "2", question: "B", answer: []},
           {id: "1", question: "A", answer: []}*/
    ];

    console.log(await getQuestions());
    questions = await getQuestions();
    let email = req.params.id;
    console.log(email);
    var conditions = {
            email: email
        },
        update = {$set: {exam: questions}},
        options = {multi: true};

    Students.updateOne(conditions, update, updateCallBack);

    async function updateCallBack(err, response) {
        if (!err) {
            console.log("Update callback");
            let data = await getExamQuestions(email);
            res.json(data);
        } else {
            res.json(err);
        }
    } // end of updateCallBack
} // end of getExam

async function getExamQuestions(email) {
    try {
        console.log(email);
        return await Students.find({email: email});
    } catch (e) {
        console.log("Error : " + e);
        return null;
    }
}

function updateExamScreenShot(req, res) {
    console.log(req.body.id);
    console.log(req.body.questionId);
    console.log(req.body.answer);

    var conditions = {
            _id: req.body.id,
            "exam.id": req.body.questionId
        },
        update = {$push: {"exam.$.answer": req.body.answer}},
        options = {multi: true};

    Students.updateOne(conditions, update, updateCallBack);

    function updateCallBack(err, response) {
        if (!err) {
            res.send(response);
        } else {
            res.send(err);
        }
    } // end of updateCallBack
} //end of updateExam

module.exports = route;
