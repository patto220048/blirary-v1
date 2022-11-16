var express = require('express');
var router = express.Router();


const MiddleController = require('../app/controllers/middleController');
const newsController = require('../app/controllers/NewsController');



router.get('/', MiddleController.verifyToken ,newsController.show);

module.exports  = router;