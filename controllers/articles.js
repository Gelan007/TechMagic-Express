const { v4: uuidv4 } = require('uuid');

const articles = [
    {
        id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
        name: 'Express - introduction',
        description: 'Express - text',
        type: 'a',
        tags: ['someTag1', 'someTag2']
    },
    {
        id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb5d",
        name: 'Something1 - introduction',
        description: 'something1 - text',
        type: 'b',
        tags: ['someTag1', 'someTag3', "someTag4"]
    },
    {
        id: "9b1deb4d-3b7d-4bad-d2dd-2b0d7b3dcb6d",
        name: 'Something2 - introduction',
        description: 'Something2 - text',
        type: 'a',
        tags: []
    }
]

function getArticles(req, res) {
    res.json(articles)
}
function createArticle(req, res) {
    const newArticle = {
        id: uuidv4(),
        ...req.body
    }
    articles.push(newArticle)
    res.status(201).json(req.body)
}
function updateArticleTags(req, res) {
    const articleId = req.params.articleId;
    const newTags = req.body.tags;
    const articleIndex = articles.findIndex(a => a.id === articleId);

    if(articleIndex === -1) {
        return res.status(404).json({message: 'Article not found'});
    }

    if(!newTags || !Array.isArray(newTags)) {
        return res.status(400).json({message: 'Tags must be an array'});
    }
    articles[articleIndex].tags = newTags;
    res.json(articles[articleIndex]);
}

module.exports = {
    getArticles,
    createArticle,
    updateArticleTags
}