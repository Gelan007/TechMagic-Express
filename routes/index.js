const express = require('express')
const usersRouter = require('./users')

const router = express.Router()

/*router.get('/', (req, res) => {
    res.send('Hello world')
})*/

router.use('/users', usersRouter)

module.exports = router