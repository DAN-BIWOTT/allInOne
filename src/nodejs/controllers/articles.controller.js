const Article = require("../models/article.model.js");

// CREATE
exports.create = (req,res) => {
    const article = new Article.Articles({
        title : req.body.title,
        body :req.body.body,
        id : req.body.id
    });

    Article.Articles.create(article,(err,data)=>{
        if(err){
            res.status(500).send({
                message: err.message || "Some error occured while creatind article"
            });
        }else{
            res.send(data);
        }
    })
};


// FIND ALL
exports.findAll = (req,res) => {

    Article.Articles.getAll((err,data)=>{
        if(err){
            res.status(500).send({
                message:
                    err.message || "some error occured while retreiving articles."
            })
        }else{
            console.log(data)
            res.send(data);
        }
    });
};
// FIND ONLY ONE
exports.findOne = (req,res) => {
    if(!req.body){
        res.status(400).send({
            message: "Content Cannot Be empty"
        })
    }
    Article.Articles.findById(req.params.articleId,(err,data) => {
        if(err){
            if(err.kind == "not_found"){
                res.status(404).send({
                    message: `not found article with id ${req.params.articleId}`
                });
            }else{
                res.status(500).send({
                    message: "Error retrieving article with id " + req.params.articleId
                });
            }
        }else{
            console.log(data)
            res.send(data);
        }
    })
};

// UPDATE
exports.update = (req,res) => {
    if(!req.body){
        res.status(400).send({
            message: "Content Cannot Be Empty"
        })
    }

    Article.Articles.updateById(
        req.params.articleId,
        new Article.Articles({
            title : req.body.title,
            body :req.body.body,
            id : req.body.id
        }),
        (err,data)=>{
            if(err){
                if(err.kind == "not_found"){
                    res.status(404).send({
                        message: "Not found article"
                    })
                }else{
                    res.status(500).send({
                        message: "Error updating the article"
                    })
                }
            } else {
                res.send(data);
            }
        }
    )
};

// DELETE
exports.delete = (req,res) => {
    Article.Articles.remove(
        req.params.articleId,
        (err,data)=>{
            if(err){
                if(err.kind == "not_found"){
                    res.status(404).send({
                        message: "Article not found"
                    })
                }else{
                    res.status(500).send({
                        message: "could not Delete Article. I dont know why."
                    })
                }
            }
            else{
                res.send({
                    message: "Article was deleted successfully"
                })
            }
        }
    );
};