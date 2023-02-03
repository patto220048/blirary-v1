var express = require('express');
var router = express.Router();
const { restart } = require('nodemon');




const MiddleController = require('../app/controllers/middleController');
const meController = require('../app/controllers/meController');



router.get('/stored/courses', MiddleController.verifyTokenAdmin,meController.storedCourse);

module.exports  = router;