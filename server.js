const express = require("express")
const app = express()
const port = 3000
const indexRouter = require('./routes/index')
const errorMdlware = require('./middlewares/errors.mdware')

const studentStatistics = [{
    "name": "Aimee Zank",
    "scores": [
        {
            "score": 1.463179736705023,
            "type": "exam"
        },
        {
            "score": 11.78273309957772,
            "type": "quiz"
        },
        {
            "score": 35.8740349954354,
            "type": "homework"
        }
    ]
}]
const article = [{
    name: 'Express - introduction',
    description: 'Express - text',
    type: 'a',
    tags: []
}]
app.use(express.json())
app.use('/', indexRouter)

app.use(errorMdlware.errorHandler)
app.listen(port, () => {
    console.log(`Server listening on port ${port}...`)
})
