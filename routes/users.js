const express = require('express')

const usersMdware = require('../middlewares/users.mdware')
const usersController = require('../controllers/users')

const router = express.Router()

router.get('/', usersController.getUsersList)
router.get('/:email/', usersController.getUserByEmail)
router.post('/', usersMdware.validateBody, usersController.createUser)
// router.patch('/:userId', usersMdware.validateBody, usersController.updateUser)
// router.delete('/:userId', usersController.deleteUser)

module.exports = router