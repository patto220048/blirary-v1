const User = require('../models/User');
const Users = require('../models/User')



class RegisterController  {
    //[POST] /register/signup
    signup_cr ( req, res, next)  {

        res.render('signup')

    } 
    signup_out ( req, res, next)  {

        const newuser = Users({
            username: req.body.username,
            password : req.body.password,
            email: req.body.email  
        })
        newuser.save()
        .then (() => res.redirect('/home'))
        .catch(() => res.json('that bai'))
       
    }

    //[POST] /register/login

    login_cr( req, res, next) {

        res.render('login')

    } 
    login_out( req, res, next) {
       Users.findOne({
        username: req.body.username,
        password: req.body.password
    })
       .then((username,password) =>{
        if(!username || password ){
            return res.json('not found')
        }
        else {
            return res.redirect('/home')
        }
    
       })
       .catch(next)

        
    }
           

 
}


module.exports = new RegisterController;