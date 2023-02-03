var express = require('express');
var router = express.Router();

const midddlewareController = require('../app/controllers/middleController')
const siteController = require('../app/controllers/siteController');


router.get('/home', midddlewareController.checkUser,siteController.index);
router.get('/',  midddlewareController.checkUser,siteController.home);;


module.exports  = router;