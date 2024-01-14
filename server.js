// step one : install express
// step two : import express
const express = require("express")
const logger = require("./middleware/logger")
// strep three : intialition express
const app = express();
// use middleware !!!!!!!!!!!!!!!
app.use(logger)
app.use(express.static(__dirname + "/public"))
// step four : declare PORT
const PORT = 3002
// starting server ......
app.listen(PORT , (err)=> {
err? console.log(err):
console.log(`server is running on port ${PORT}`)})