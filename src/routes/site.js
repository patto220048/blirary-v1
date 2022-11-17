var express = require('express');
var router = express.Router();

const midddlewareController = require('../app/controllers/middleController')
const siteController = require('../app/controllers/siteController');


router.get('/home', midddlewareController.verifyToken,siteController.index);
router.get('/', siteController.home);;


module.exports  = router;