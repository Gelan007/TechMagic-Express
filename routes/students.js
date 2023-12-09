const express = require('express')

//const usersMdware = require('../middlewares/users.mdware')
const studentsController = require('../controllers/students')

const router = express.Router()

router.get('/', studentsController.getStudentsStatistics)
/*router.get('/:email/', usersController.getUserByEmail)
router.post('/', usersMdware.validateBody, usersController.createUser)
router.patch('/:userEmail', usersMdware.validateBodyPartial, usersController.updateUser)
router.delete('/:userEmail', usersController.deleteUser)*/

module.exports = router