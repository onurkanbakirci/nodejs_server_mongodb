var express = require("express");
var cors = require("cors");
var bodyparser = require("body-parser")
//router
var router = require("./api/router");

var app= express();
var port = 8000;

app.use(cors())
app.use(bodyparser.json())

app.use("/",router.router);

app.listen(port,()=>{
    console.log("server çalışıyor")
})