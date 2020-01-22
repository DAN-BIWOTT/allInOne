const express = require('express');
const router = express.Router();
const articles = require("../controllers/articles.controller");


router.get('/api/v1',articles.findAll);
router.post('/api/v1',articles.create);
router.get('/api/v1/:articleId',articles.findOne);
router.delete('/api/v1/:articleId',articles.delete);
router.put('/api/v1/:articleId',articles.update);

module.exports = router;