
const Course = require('../models/Course')
const {mutipleMongooseToOject} = require('../../util/mongoose')

class siteController  {

    // [GET] /home
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('home',{
                    courses: mutipleMongooseToOject(courses)
                })
            })
            .catch(next)
       
        }
    
    home(req, res) {
        res.render('trangchu')
    }
    
    
}
module.exports = new siteController;


