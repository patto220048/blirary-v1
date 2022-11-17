const { response } = require('express');
const jwt = require('jsonwebtoken');

const midddlewareController = {
    //verifyToken
    verifyToken : (req, res, next) => {

        const token = req.cookies.accsetToken;
        if (token) {
            const accessToken = token.split(' ')[1]
            jwt.verify(accessToken,'secretkey',(err,user)=>{
                if (err) {
                    res.redirect("/register/login")
                }
                req.user = user;
                next();

            })
            // res.json(accessToken);
        }
        else {
            res.status(401).json("you are not authenticated")
        }
    },
    verifyTokenAdmin : (req, res, next) => {
        midddlewareController.verifyToken (req, res,() =>{
            if (req.user.admin)
            {
                next();
            }
            else {
                res.status(401).json("You are not admin")
            }


        })



    }
}

module.exports = midddlewareController