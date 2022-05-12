const studentRouter = require('express').Router();

const {getStudents, createStudent, updateStudentById, deleteStudentById} = require('../controller/student.controller');

studentRouter.route('/')
    .get(getStudents)
    .post(createStudent)


studentRouter.route('/:id')
    .patch(updateStudentById)
    .delete(deleteStudentById)


module.exports = {studentRouter};