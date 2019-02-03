const mongoose = require('mongoose');
const dev_db_url = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`
const mongoDB = process.env.MONGODB_URI || dev_db_url;


let dbConnection;

const dbName = `student_screening`;
const collectionQuestion = "questions";
const collectionStaff = "staff";
const collectionStudent = "students";

let db;

class DBConnection {
    constructor() {

    }

    createConnection() {
       mongoose.connect(mongoDB,  () => {

            console.log("DB is connected")

        });

        return mongoose;
    }// end of connection


 

}

module.exports = DBConnection;
