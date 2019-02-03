const MongoClient = require("mongodb").MongoClient;
const client = new MongoClient('mongodb://user:user123@ds221155.mlab.com:21155/student_screening', {useNewUrlParser: true});

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
        client.connect((err) => {
            if (err) {
                throw err
            } else {
                console.log('Successfully connected to MongoDB')
                const db = client.db('student_screening');
                //    const collection = db.collection('homework07');
                client.close;
                return db;
            }
        })
    }// end of connection


    getAndy() {

        if (!db) {
            client.connect((err) => {
                if (err) throw err;
                const db = client.db('student_screening');
                req.result = db;
                return next();
            });
        }
        return db;

    }

}

module.exports = DBConnection;
