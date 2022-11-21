
const newsRouter = require('./news');
const meRouter = require('./me');
const coursesRouter = require('./courses');
const siteRouter = require('./site');
const registerRouter = require('./register');
const { checkUser } = require('../app/controllers/middleController');




function route(app){
    

    app.use('*',checkUser)
    app.use('/register', registerRouter)
    app.use('/news', newsRouter)
    app.use('/me', meRouter)
    app.use('/courses', coursesRouter) 
    app.use('/', siteRouter)
    
    
    

   

}

module.exports = route;