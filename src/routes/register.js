var express = require('express');
var router = express.Router();


const registerController = require('../app/controllers/registerController');
const MiddleController = require('../app/controllers/middleController');



router.use('/logout', registerController.logout)


router.get('/login', registerController.login_cr);
router.post('/login',registerController.login_out)

router.get('/signup', registerController.signup_cr);
router.post('/signup',registerController.signup_out);




module.exports  = router;