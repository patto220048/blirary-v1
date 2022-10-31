var express = require('express');
var router = express.Router();


const courseController = require('../app/controllers/courseController');



router.post('/store', courseController.store);
router.get('/create', courseController.create);
router.put('/:id', courseController.update);

router.get('/:id/edit', courseController.edit);


router.get('/:slug', courseController.show);

module.exports  = router;