
const jwt = require('jsonwebtoken');    
const User = require('../models/User');
const Users = require('../models/User')
const bcrypt = require('bcryptjs');


// handle errors
const handlaError = (err) => {
    let errors = {email: "", password: "", username: ""}
    //duplicate
    if (err.code === 11000){
        errors.email = "That email or username is already registered"
        errors.username = "That email or username is already registered"
        return errors
    }
    //incorrect email
    if (err.message == 'incorrect email'){
        errors.email = "That email is incorrect"
    }
    //incorrect password
    if (err.message == 'incorrect password'){
        errors.password = "That password is incorrect"
    }



    //vilid error
    if (err.message.includes('user_db validation failed')) {
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
        })
        

    }
    return errors
    

}




// register
const  RegisterController = {
    //[POST] /register/signup
    signup_cr : ( req, res, next) => {

        res.render('signup')

    } ,

    signup_out : async ( req, res, next) =>  {


        const {email, password, username} = req.body

        try {
            
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);
            
            const newUser = await Users.create({
                username: req.body.username,
                email: req.body.email,
                password: hashed,
            });
            // create token sing up successfully
            const token = jwt.sign(
                {user: newUser._id},
                'secretkey',
                {expiresIn: '1h'})
            // // create cookie 
            const cookie =res.cookie('accsetToken', 'Bearer ' + token, {
                    expires: new Date(Date.now() + 8 * 3600000)
                  },
                  {HttpOnly: true,
                    path: "/",
                    sameSite: "strict",
                    secure : false,})

                    
            res.status(200).json({newUser: newUser._id})

        }
        catch(err) {
            errors = handlaError(err)
            res.status(400).json({ errors })

        }
        
       
    }
    ,

    //[POST] /register/login

    login_cr( req, res, next) {

        res.render('login')

    } ,


    login_out : async( req, res, next) =>{

        const {email, password } = req.body
        try{

            const user = await Users.findOne({email});
            if (!user){
               throw Error('incorrect email')
            }
            const validPassword = await bcrypt.compare(
                password,
                user.password
            );
            if (!validPassword){
                throw Error('incorrect password')
            }
            if (user && validPassword) {
                const accsetToken = jwt.sign({
                    user : user._id,
                    admin: user.admin
                },
                'secretkey',
                {expiresIn: '1h'})
                const cookie =res.cookie('accsetToken', 'Bearer ' + accsetToken, {
                    expires: new Date(Date.now() + 8 * 3600000)
                  },
                  {HttpOnly: true,
                    path: "/",
                    sameSite: "strict",
                    secure : false,})

                res.status(200).json({user: user._id})
               
            }
        
        }
        catch(err) {
            errors = handlaError(err)
            res.status(400).json({ errors })
        } 

    },


    logout : (req, res) => {
        res.clearCookie('accsetToken')
        res.redirect('/')
    }
    
           

}

module.exports = RegisterController;