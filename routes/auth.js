const express = require("express");
const router= express.Router();
const {validatorRegister, validatorLogin}= require("../validators/auth");
const { loginCtrl, registerCtrl } = require("../controllers/auth");

/**
 * Register
 */
 router.post("/register",validatorRegister,registerCtrl);

 router.post("/login",validatorLogin,loginCtrl);

module.exports = router;
