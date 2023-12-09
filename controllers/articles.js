const articles = [
    {
        name: 'Express - introduction',
        description: 'Express - text',
        type: 'a',
        tags: []
    },
    {
        name: 'Something1 - introduction',
        description: 'something1 - text',
        type: 'b',
        tags: []
    },
    {
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
    articles.push(req.body)
    res.status(201).json(req.body)
}

module.exports = {
    getArticles,
    createArticle
}