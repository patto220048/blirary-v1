class NewsController  {


    // [GET] /news
    index(req, res) {
        res.render('news')
    }
    show(req, res){
        res.send("news deetail")
    }
}

module.exports = new NewsController;