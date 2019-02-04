const mongoose = require('mongoose');
let ConstDB = require('../keys/ConstDB');
const mongoUrl = `mongodb://${ConstDB.DB_USER}:${ConstDB.DB_PASS}@${ConstDB.DB_HOST}`;

class DBConnection {
    constructor() {
        this.createConnection();
    }
    
    createConnection() {
        console.log(mongoUrl);
        mongoose.connect(mongoUrl).then(() => {
            console.log("DB connected")
        }).catch(err => {
            console.log("Error : " + err)

        });

    }// end of connection


}

module.exports = DBConnection;
