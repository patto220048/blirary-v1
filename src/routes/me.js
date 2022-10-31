var express = require('express');
var router = express.Router();


const meController = require('../app/controllers/meController');



router.get('/stored/courses', meController.storedCourse);

module.exports  = router;