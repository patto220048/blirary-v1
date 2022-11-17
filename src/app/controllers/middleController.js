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
                    res.redirect("/login")
                }
                req.user = user;
                next();

            })
            // res.json(accessToken);
        }
        else {
            res.status(401).json("you are not authenticated")
        }
    }
}

module.exports = midddlewareController