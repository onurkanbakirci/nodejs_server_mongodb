var mongoose = require("mongoose")
var env = require('dotenv').config()
var jwt = require('jsonwebtoken');
var bcrypt = require("bcrypt")
const saltRounds = 10;

mongoose.connect(process.env.URL, {useNewUrlParser:true,useUnifiedTopology:true},function(err){
    if(!err){console.log("connected")}
})

var connect = mongoose.connection
var user = connect.collection("db")

function crypto (password){
    return new Promise((res,rej)=>{
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        res(hash)
    })
}

function finduser(username,password) {
    return new Promise((resolve,reject)=>{
        user.findOne({name:username,password:password}).then((data)=>{
            const token =jwt.sign({user_id:data._id},process.env.JWT_KEY)
        })
    })
}
function registeruser (username,password) {
    return new Promise((resolve,reject)=>{
        crypto(password).then((hash)=>{
        user.insertOne({name:username,password:hash}).then(()=>resolve(true))
    })
    })
}
module.exports={
    finduser,
    registeruser
}