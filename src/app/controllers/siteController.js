
const Course = require('../models/Course')
const {mutipleMongooseToOject} = require('../../util/mongoose')

class siteController  {

    // [GET] /home?page=
    index(req, res, next) {
        const peg =[]
        const page = req.query.page || 1
        const perPage = 6
        Course
        .find({})
        .skip((perPage * page) - perPage) // page 1 value is 0
        .limit(perPage)
        .exec((err, courses) => {
            Course.countDocuments((err, count)=>{
                if (err) return next(err)
                for(var i =1; i< Math.ceil(count / perPage)+1; i++){
                    peg.push(i)
                }
                res.render('home',{
                    courses: mutipleMongooseToOject(courses),
                    current: parseInt(page),
                    pages: peg,
                    perPage: perPage
                })
        // res.json({
        //     courses: mutipleMongooseToOject(courses),
        //     current: parseInt(page),
        //     pages: Math.ceil(count / perPage),
        //     perPage: perPage
        // })
            })  
        })
       
        }
    
    home(req, res) {
        res.render('trangchu')
    }
    
    
}
module.exports = new siteController;


