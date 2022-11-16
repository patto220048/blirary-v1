class NewsController  {


    // [GET] /news
    show(req, res){
        res.send("news deetail")
    }
}

module.exports = new NewsController;