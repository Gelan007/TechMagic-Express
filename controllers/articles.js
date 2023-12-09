const articles = [{
    name: 'Express - introduction',
    description: 'Express - text',
    type: 'a',
    tags: []
}]

function getArticles(req, res) {
    res.json(articles)
}

module.exports = {
    getArticles
}