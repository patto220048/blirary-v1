
const Course = require('../models/Course')
const {mutipleMongooseToOject} = require('../../util/mongoose')

class siteController  {

    // [GET] /trangchu
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('home',{
                    courses: mutipleMongooseToOject(courses)
                })
            })
            .catch(next)
       
        }

    
    
}
module.exports = new siteController;