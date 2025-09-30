const Student = require('../models/student');

exports.getAllStudents = async () => {
  return Student.find();
};

exports.createStudent = async (studentData) => {
  const newStudent = new Student(studentData);
  await newStudent.save();
  return newStudent;
};

exports.getStudentById = async (id) => {
  return Student.findById(id);
};

exports.updateStudent = async (id, studentData) => {
  return Student.findByIdAndUpdate(id, studentData, { new: true });
};

exports.deleteStudent = async (id) => {
  return Student.findByIdAndDelete(id);
};
