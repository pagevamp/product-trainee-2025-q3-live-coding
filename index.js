const fs = require("fs");

const students = fs.readFileSync("./students.json", "utf-8");
const parsedStudents = JSON.parse(students) || [];

function addStudent(newEntry) {
  const updatedStudents = parsedStudents.push(newEntry);
  fs.writeFileSync("./students.json", JSON.stringify(updatedStudents));
}

addStudent({ grade: 1, student: "John Smith" });
