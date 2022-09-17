const express = require("express");
const router= express.Router();
const {validatorRegister, validatorLogin}= require("../validators/auth");
const { loginCtrl, registerCtrl } = require("../controllers/auth");

/**
 * http://localhost:3001/api
 * Route register new user
 * @openapi
 * /auth/register:
 *      post:
 *           tags:
 *                - auth
 *           summary: "Registrar nuevo usuario"
 *           description: "Esta ruta es para registrar un nuevo usuario"
 *           requestBody:
 *               content:
 *                    application/json:
 *                          schema:
 *                              $ref: "#/components/schemas/authRegister"
 *           responses:
 *               '201':
 *                      description: "Usuario registrado de manera correcta "
 *               '403':
 *                      description: "Error por validacion de usuario "
 *  
 */
 router.post("/register",validatorRegister,registerCtrl);

 /**
 * Route login  user
 * @openapi
 * /auth/login:
 *      post:
 *          tags:
 *              - auth
 *          summary: "Logear nuevo usuario"
 *          description: "Esta ruta es para logear a un  usuario"
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/authLogin"
 *          responses:
 *                  '201':
 *                      description: "El usuario se logea correctamente"
 *                  '403':
 *                      description: "Error al logear el usuario"
 */

 router.post("/login",validatorLogin,loginCtrl);

module.exports = router;
