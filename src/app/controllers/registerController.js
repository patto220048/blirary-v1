class RegisterController  {


    login ( req, res, next)  {

        res.render('login')

    }

    signup ( req, res, next)  {

        res.render('signup')

    }



 
}


module.exports = new RegisterController;