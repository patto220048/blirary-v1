var express = require('express');
var router = express.Router();



const courseController = require('../app/controllers/courseController');
const MiddleController = require('../app/controllers/middleController');


router.post('/store', MiddleController.verifyToken,MiddleController.checkUser,courseController.store);
router.get('/create',MiddleController.verifyToken,MiddleController.checkUser,courseController.create);
router.put('/:id', courseController.update);
router.delete('/:id', courseController.destroy);



router.get('/:id/edit', courseController.edit);

router.get('/:slug',MiddleController.verifyToken, courseController.show);    
    
module.exports  = router;