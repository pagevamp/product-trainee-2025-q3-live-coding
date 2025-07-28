class School {
  students = [];

  // Get all students
  getAllStudents() {
    return this.students;
  }

  // Add student to
  addStudent(student) {
    this.students.push(student);
  }
}
