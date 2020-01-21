const sql = require("../db/db.js");

const Articles = function(articles){
    this.title = articles.title
    this.body = articles.body
    this.id = articles.id
}

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

Articles.getAll = (result) => {
    sql.query("SELECT * FROM article",(err,res)=>{
        if(err){
            console.log(err);
        }else{
            return(res)
        }
    });
}

module.exports = { Articles };