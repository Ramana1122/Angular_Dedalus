// 7. Filter only the students who got more than 70% in JavaScript
const students = [
    { name: "Ramana", jsScore: 80 },
    { name: "Ravi", jsScore: 90 },
    { name: "Naveen", jsScore: 70 },
  ]
  const passedStudents = students.filter((student) => student.jsScore > 70)
  console.log(passedStudents)