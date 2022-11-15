var express = require('express');
var router = express.Router();


const registerController = require('../app/controllers/registerController');






router.use('/login', registerController.login);
router.use('/signup', registerController.signup);




module.exports  = router;