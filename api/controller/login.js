var db= require("../models")

module.exports.login=(req,res)=>{
    const {username,password} = req.body
    db.finduser(username,password).then((data)=>{
    const response = [
        {token:data},
        {
            status:"true"
        }
    ]
    //res.status(200)
    res.send({response})
})
}