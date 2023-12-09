const express = require('express')
const studentsController = require('../controllers/students')

const router = express.Router()

router.get('/', studentsController.getStudentsStatistics)
router.get('/worst-homework-score', studentsController.getStudentWithWorstHomeworkScore)

module.exports = router