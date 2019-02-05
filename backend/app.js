var createError = require("http-errors");
var cors = require('cors');
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var lessMiddleware = require("less-middleware");
var logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const DataBase = require("./db/DBConnection");
let db = new DataBase();

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var staffRouter = require("./routes/staff");
const questionRouter = require("./routes/question");
const authRouter = require("./routes/auth");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var studentsRouter = require("./routes/student");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(cors());

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public")));

// app.use(bodyParser.json);
// app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", authRouter);
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/question", questionRouter);
app.use(lessMiddleware(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/students", studentsRouter);
app.use("/staff", staffRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});
app.listen(4000, () => {
    console.log("Listening");
});
module.exports = app;
