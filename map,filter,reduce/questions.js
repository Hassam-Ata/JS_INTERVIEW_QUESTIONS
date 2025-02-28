let students = [
  { name: "Hassam", rollNumber: 31, marks: 80 },
  { name: "Ali", rollNumber: 30, marks: 87 },
  { name: "Ahmed", rollNumber: 35, marks: 55 },
  { name: "kamran", rollNumber: 39, marks: 27 },
];

//Question 1 return only name of students in Capital

// console.log(students.map((student)=>{
//     return student.name.toUpperCase()
// }))

//Question 2 return only name of students who scored more than 60 marks

// console.log(students.filter((student)=>{
//     return student.marks>60
// }))

//Question 3 return only name of students who scored more than 60 marks and roll number greater than 30

// console.log(students.filter((student)=>{
//     return student.marks>60&&student.rollNumber>30
// }))

//Calculate sum of the marks of all students

// console.log(students.reduce((acc,curr)=>{
//     return acc+curr.marks
// },0))

//Question 5 Return Only name of student who scored more than 60

// console.log(students.filter((student)=>{
//     return student.marks>60
// }).map((student)=>{
//     return student.name
// }))

//Question 6 -Return total marks of students with marks greater than 60 after 20 marks have been added to those who scored less than 60

console.log(
  students
    .map((student) => {
      if (student.marks < 60) {
        student.marks += 20;
      }
      return student;
    })
    .filter((student) => {
      return student.marks > 60;
    })
    .reduce((acc, curr) => {
      return acc + curr.marks;
    }, 0)
);
