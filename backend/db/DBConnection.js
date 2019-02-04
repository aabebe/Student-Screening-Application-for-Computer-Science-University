<<<<<<< HEAD
const mongoose = require("mongoose");
const dev_db_url = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${
  process.env.DB_HOST
}`;
// const mongoDB = process.env.MONGODB_URI || dev_db_url;
const mongoDB = dev_db_url;

class DBConnection {
  constructor() {
    this.createConnection();
  }
  createConnection() {
    mongoose.connect(mongoDB, () => {
      console.log("DB is connected");
    });
    return mongoose;
  } // end of connection
=======
const mongoose = require('mongoose');
let ConstDB = require('../keys/ConstDB');
const mongoUrl = `mongodb://${ConstDB.DB_USER}:${ConstDB.DB_PASS}@${ConstDB.DB_HOST}`;

class DBConnection {
    constructor() {
        this.createConnection();
    }

    createConnection() {
        mongoose.connect(mongoUrl).then(() => {
            console.log("DB connected")
        }).catch(err => {
            console.log("Error : " + err)

        });

    }// end of connection


>>>>>>> 5062706ccc37d482745997277d08755d8d8a6007
}

module.exports = DBConnection;
