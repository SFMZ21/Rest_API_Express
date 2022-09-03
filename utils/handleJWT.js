const jwt =require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET;
/**
 * 
 * @param {*} user 
 */
const tokenSing =async(user) =>{
const sing = jwt.sign(
    {
        _id: user._id,
        role: user.role
    },
    JWT_SECRET,
    {
        expiresIn:"2h",
    }

);
    return sing
}

const verifyToken =async(tokenJWT) =>{
    try{
        return jwt.verify(tokenJWT, JWT_SECRET)

    }catch(e){
        return null
    }
    
}
module.exports ={tokenSing,verifyToken}