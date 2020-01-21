const express = require('express');
const router = express.Router();
const con = require('../models/articleModel');


router.get('/',(req,res) => {
   console.log(con.Articles.getAll());
   res.send(con.Articles.getAll());
});

module.exports = router;