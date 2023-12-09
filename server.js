const express = require("express")
const app = express()
const port = 3000
const indexRouter = require('./routes/index')
const errorMdlware = require('./middlewares/errors.mdware')

function logger (req, res, next) {
    console.log(req.method, req.originalUrl)
    next()
}

app.use(express.json())
app.use('/', logger, indexRouter)


app.use(errorMdlware.errorHandler)
app.listen(port, () => {
    console.log(`Server listening on port ${port}...`)
})
