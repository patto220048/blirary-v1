var express = require('express');
var router = express.Router();


const registerController = require('../app/controllers/registerController');
const MiddleController = require('../app/controllers/middleController');





router.use('/login', registerController.login_cr);
router.post('/login_out',registerController.login_out)

router.use('/signup', registerController.signup_cr);
router.post('/signup_out', registerController.signup_out);




module.exports  = router;