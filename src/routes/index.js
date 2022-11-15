
const newsRouter = require('./news');
const meRouter = require('./me');
const coursesRouter = require('./courses');
const siteRouter = require('./site');
const registerRouter = require('./register');


function route(app){
    
    app.use('/register', registerRouter)
    app.use('/news', newsRouter)
    app.use('/me', meRouter)
    app.use('/courses', coursesRouter) 
    app.use('/', siteRouter)




   

}

module.exports = route;