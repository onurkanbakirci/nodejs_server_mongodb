var express = require("express");
var router = express.Router()
var config = require("../config")
var login_controller = require("../controller/login")
var signup_controller = require("../controller/signup")

router.post(`${config.version}/login`,login_controller.login)
router.post(`${config.version}/signup`,signup_controller.signup)

module.exports={
    router,
}