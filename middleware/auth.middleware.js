const jwt = require('jsonwebtoken');

exports.auth = (req,res,next)=>{
    console.log("ifffff")
    if(req.headers.token){
        token,
        next();
    }else{
        return res.status(401).json({
                message:'Please Login First'
        })
    }
}