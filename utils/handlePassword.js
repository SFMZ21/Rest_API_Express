const bcryptj = require("bcryptjs")
/**
 * contraseña sin encriptar: hola.01
 * @param {*} passwordPlain 
 */
const encrypt =async (passwordPlain) =>{
    const hash =await bcryptj.hash(passwordPlain,10)
    return hash
};

/**
 * Pasar contraseña sin encriptar y pasar contraseña encriptada
 * @param {*} passwordPlain 
 * @param {*} hashPassword 
 */
const compare =async (passwordPlain,hashPassword ) =>{
    return await bcryptj.compare(passwordPlain,hashPassword)
};

module.exports ={encrypt,compare};