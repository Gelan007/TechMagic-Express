const express = require("express")
const app = express()
const port = 3000
const indexRouter = require('./routes/index')
const errorMdlware = require('./middlewares/errors.mdware')



app.use(express.json())
app.use('/', indexRouter)

app.use(errorMdlware.errorHandler)
app.listen(port, () => {
    console.log(`Server listening on port ${port}...`)
})
