
const Course = require('../models/Course')
const { mongooseToObject } = require('../../util/mongoose');
const { request, response } = require('express');

class courseController  {

    // [GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({slug : req.params.slug})
            .then(course => 
                res.render('courses/show',{course:mongooseToObject(course)})

            )
            .catch((next))
      
        }     

    // [GET] /courses/create
          
    create(req, res, next) {

        res.render('courses/create')
       
        }
    
    // [POST] /courses/store
          
    store(req, res, next) {
        const course = new Course(req.body);
        course.save()
            .then (() => res.redirect('/'))
            .catch(next)
        
    }
            
            

 
}
module.exports = new courseController;