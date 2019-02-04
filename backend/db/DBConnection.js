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
}

module.exports = DBConnection;
