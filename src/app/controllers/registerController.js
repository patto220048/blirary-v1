
const jwt = require('jsonwebtoken');    
const User = require('../models/User');
const Users = require('../models/User')
const bcrypt = require('bcrypt');


const  RegisterController = {
    //[POST] /register/signup
    signup_cr : ( req, res, next) => {

        res.render('signup')

    } ,

    signup_out : async ( req, res, next) =>  {

        try {

            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);
            
            const newUser = await new Users({
                username: req.body.username,
                email: req.body.email,
                password: hashed,
            });

            const user = newUser.save();

            res.redirect('/register/login')

        }
        catch(next) {
            res.redirect('/')   
        }
    }
    ,

    //[POST] /register/login

    login_cr( req, res, next) {

        res.render('login')

    } ,


    login_out: async( req, res, next) =>
     {
        try{

            const user = await Users.findOne({username: req.body.username});
            if (!user){
                return res.status(404).json('wrong username');
            }
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if (!validPassword){
               return res.status(404).json('wrong password');
            }
            if (user && validPassword) {
                const accsetToken = jwt.sign({
                    user : user._id,
                    admin: user.admin
                },
                'secretkey',
                {expiresIn: '20s'})
                const cookie =res.cookie('accsetToken', 'Bearer ' + accsetToken, {
                    expires: new Date(Date.now() + 8 * 3600000)
                  },
                  {httpOnly: true,
                    path: "/",
                    sameSite: "strict",
                    secure : false,})

            
                res.redirect("/home")
                // res.status(200).json("cokie")

                
            }
        
        }
        catch{}
    },
    logout : (req, res) => {
        res.clearCookie('accsetToken')
        res.redirect('/')
    }
    
           

}

module.exports = RegisterController;