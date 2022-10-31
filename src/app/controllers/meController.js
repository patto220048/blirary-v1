
const Course = require('../models/Course')
const {mutipleMongooseToOject } = require('../../util/mongoose');
const { request, response } = require('express');
const { restart } = require('nodemon');

class meController  {

    // [GET] /me/courses
    storedCourse(req, res, next) {
        Course.find({})
        .then(courses => res.render('me/stored-courses',{
            courses: mutipleMongooseToOject(courses)
        }))
        .catch(next);  
  
    }
}
module.exports = new meController;