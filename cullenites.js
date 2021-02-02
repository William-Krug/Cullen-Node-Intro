let students = ['Michael', 'Dusty', 'George', 'Vada'];

let instructor = 'Edan';

let alltheThingsWeWantToExport = {
  students: students,
  instructor: instructor,
  addStudent: function (student) {
    students.push(student);
  },
};

// module.exports
// means: "Here's the data I want to share"
//
// So... `students` will be the return value of require('./cullenites.js');
module.exports = alltheThingsWeWantToExport; // I want to share this data (the array)
