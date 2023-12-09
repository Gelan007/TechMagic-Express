const express = require('express')
const usersRouter = require('./users')
const studentsRouter = require('./students')

const router = express.Router()

/*router.get('/', (req, res) => {
    res.send('Hello world')
})*/

router.use('/users', usersRouter)
router.use('/students', studentsRouter)

module.exports = router