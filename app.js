// const createError = require('http-errors');
// const express = require('express');
// const path = require('path');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');
// import mongoose from 'mongoose'

// db = mongoose.createConnection("mongodb://localhost:27017/")

// debugger
// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

// const app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;
import express from "express"
import mongoose from "mongoose"
const app = express()

const url = "mongodb://localhost:27017/katzefet"
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err))

import usersRouter from "./routes/users.route.js"
import storeItemsRouter from "./routes/storeItems.route.js"
import cors from "cors"

app.use(
  cors({
    origin: "http://localhost:1234",
  })
)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/users", usersRouter)
app.use("/storeItems", storeItemsRouter)

app.get("/", (req, res) => {
  res.send("API is running")
})

console.log(process)

const PORT = 5000
app.listen(PORT, () => console.log(`Server running in port ${PORT}`))
