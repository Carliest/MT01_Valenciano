const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const {
  validateCreateStudent,
  validateUpdateStudent
} = require('../validators/studentValidator');

router.get('/', studentController.getAllStudents);
router.post('/', validateCreateStudent, studentController.createStudent);
router.get('/:id', studentController.getStudentById);
router.put('/:id', validateUpdateStudent, studentController.updateStudent);
router.delete('/:id', studentController.deleteStudent);

module.exports = router;
