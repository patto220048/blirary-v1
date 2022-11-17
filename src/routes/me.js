var express = require('express');
var router = express.Router();




const MiddleController = require('../app/controllers/middleController');
const meController = require('../app/controllers/meController');



router.get('/stored/courses', MiddleController.verifyToken,meController.storedCourse);

module.exports  = router;