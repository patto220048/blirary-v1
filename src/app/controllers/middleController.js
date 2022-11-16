const jwt = require('jsonwebtoken');    
const Users = require('../models/User');


const MiddleController = {

    verifyToken :(req, res, next)=>{

        const token = req.headers.token;
        if(token){
            const accessToken = token.split(' ')[1]
            const user = jwt.verify(accessToken , 'mytoken');
            req.user = user;
            next();
        }
       
        
    }



}

module.exports = MiddleController;