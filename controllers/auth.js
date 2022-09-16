const {matchedData}= require("express-validator");
const {encrypt,compare}= require("../utils/handlePassword");
const {tokenSing} = require("../utils/handleJWT");
const {handleHttpError} = require("../utils/handleError");
const {usersModel} = require("../models");

/**
 * Este controlador es el encargado de registrar usuario 
 * @param {*} req 
 * @param {*} res 
 */
const registerCtrl = async (req,res) =>{
    try{
        req= matchedData(req);
        const password = await encrypt(req.password)
        const body ={...req, password}
        const dataUser = await usersModel.create(body)
        dataUser.set('password', undefined,{strict:false});

        const data ={
            token: await tokenSing(dataUser),
            user: dataUser
        }
        res.send({data});
    }catch(e){
        console.log(e)
        handleHttpError(res,"ERROR_REGISTER_USER");
    }
};

/**
 * Este controlador es el encargado de logear a una persona
 * @param {*} req 
 * @param {*} res 
 */
const loginCtrl = async(req,res) =>{
    try{
        req= matchedData(req);
        const user = await usersModel.findOne({email: req.email});
        if(!user){
            handleHttpError(res,"USER_NOT_EXIST",404)
            return
        }
        const hashPassword = user.get('password');
        const check = await compare(req.password, hashPassword)
        if(!check){
            handleHttpError(res,"PASSWORD_INVALID",401)
            return
        }
        user.set('password', undefined,{strict:false})
        const data ={
            token: await tokenSing(user),
            user
        }
        res.send({data})

    }catch(e){
        handleHttpError(res,"ERROR_LOGIN_USER");
    }
};

module.exports ={registerCtrl, loginCtrl}