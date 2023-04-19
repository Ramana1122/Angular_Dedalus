// 5. Get the student with the highest score [create a list of students with marks as a property]
const students = [
    { name: "Ramana", score: 80 },
    { name: "Ravi", score: 78 },
    { name: "Naveen", score: 70 },
  ]
  const topStudent = students.reduce(
    (a, b) => (a.score > b.score ? a : b)
  )
  console.log(topStudent)