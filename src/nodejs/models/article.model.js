const sql = require("../db/db.js");

const Articles = function(articles){
    this.title = articles.title
    this.body = articles.body
    this.id = articles.id
}

// CREATE
Articles.create = (newArticle, result) => {
    sql.query("INSERT INTO article SET ?",newArticle,(err,res)=>{
        if(err){
            console.log("Error: ",err);
            return(err,null);
        }

        console.log("Created Customer: ",{id: res.insertId,...newArticle});
        result(null,{id: res.insertId,...newArticle});
    })
}

// FIND BY ID
Articles.findById = (articleId, result) => {
    sql.query(`SELECT * FROM article WHERE id = ${articleId}`,(err,res)=>{
        if(err){
            console.log("error:",err);
            result(err,null);
        }else{
            console.log("found article: ",res[0]);
            result(null,res[0]);
            return;
        } 

        result({kind: "not_found"},null);
    });
}

// RETRIEVE EVERYTHING
Articles.getAll = (result) => {
    sql.query("SELECT * FROM article",(err,res)=>{
        if(err){
            result(err,null);
        }else{
            result(null,res);
        }
    });

}

// UPDATE BY ID
Articles.updateById =(id,article,result) => {
    sql.query(
        "UPDATE article SET title = ?, body = ? WHERE id = ?",
        [article.title,article.body,id],
        (err,res) => {
            if(err){
                console.log(err);
                result(err,null);
                return;
            }
            if(res.affectedRows == 0){
                result({kind: "not_found"},null);
                return;
            }
            console.log("update article: ", {id: id, ...article});
            result(null,{id: id, ...article});
        }
    )
}

// DELETE BY ID
Articles.remove = (id, result) => {
    sql.query(`DELETE FROM article WHERE id = ${id}`,(err,res) => {
        if(err){
            console.log("error: ", err);
            result(err,null);
            return;
        }

        if(res.affectedRows == 0){
            result({kind: "not_found"},null);
            return;
        }
        console.log("deleted article with id: ",id);
        result(null,res);
    })
}

module.exports = { Articles };
