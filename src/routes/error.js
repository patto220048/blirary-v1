var express = require('express');
var router = express.Router();

const errController = require('../app/controllers/errController');



router.get('/error', errController.err)


module.exports  = router;