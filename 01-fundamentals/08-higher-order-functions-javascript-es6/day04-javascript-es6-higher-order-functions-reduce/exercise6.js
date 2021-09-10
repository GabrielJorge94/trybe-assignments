const assert = require("assert");
const { get } = require("http");

const students = ["Pedro Henrique", "Miguel", "Maria Clara"];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

function studentAverage() {
  const getStudent = (student, index) => ({
    name: student,
    average:
      grades[index].reduce((acc, val) => acc + val, 0) / grades[index].length,
  });

  const studentArray = students.map(getStudent);
  return studentArray;
}

const expected = [
  { name: "Pedro Henrique", average: 7.8 },
  { name: "Miguel", average: 9.2 },
  { name: "Maria Clara", average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);
