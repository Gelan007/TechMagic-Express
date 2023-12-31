const express = require('express')

const usersMdware = require('../middlewares/users.mdware')
const usersController = require('../controllers/users')

const router = express.Router()

router.get('/', usersController.getUsersList)
router.get('/:email/', usersController.getUserByEmail)
router.post('/', usersMdware.validateBody, usersController.createUser)
router.patch('/:email', usersMdware.validateBodyPartial, usersController.updateUser)
router.delete('/:email', usersController.deleteUser)

module.exports = router