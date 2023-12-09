const express = require('express')
const articlesController = require('../controllers/articles')
const articlesMdware = require('../middlewares/articles.mdware')
const router = express.Router()

router.get('/', articlesController.getArticles)
router.post('/', articlesMdware.validateBody, articlesController.createArticle)

module.exports = router