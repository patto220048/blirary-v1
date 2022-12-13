const { response } = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

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
            res.redirect("/error")
        }
    },

    // verify admin vilid
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



    },
    /// check user access and print information in header
    checkUser : async ( req, res, next) => {

        const token = req.cookies.accsetToken;
        if (token)
        {
            const accessToken = token.split(' ')[1]
            jwt.verify(accessToken,'secretkey',async (err,decode)=>{
                if (err) {
                    res.locals.user = null
                    next()
                }
                else {
                    let user = await User.findById(decode.user)
                    .then(user1 => {
                        res.locals.user = user1.username
                        res.locals.admin = user1.admin

                    })
                    next()
                   

                }
            })
            
        }
        else {
            res.locals.user = null
            next()
        }




    },





}

module.exports = midddlewareController