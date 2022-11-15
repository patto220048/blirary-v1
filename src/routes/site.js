var express = require('express');
var router = express.Router();


const siteController = require('../app/controllers/siteController');


router.get('/home', siteController.index);
router.get('/', siteController.home);;


module.exports  = router;