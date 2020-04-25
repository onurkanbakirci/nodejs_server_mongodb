var db = require("../models")

module.exports.signup=(req,res)=>{
    const {username,password} = req.body
    db.registeruser(username,password).then(()=>{res.send(`${username} succesfully registered`)})
}
