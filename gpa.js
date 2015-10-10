var student1 = {
  name: 'Cade',
  age: '27',
  grades:  [4.2, 3.7, 2, 3.3, 1.0]
}
var student2 = {
  name: 'Andrew',
  age: '42',
  grades:  [4.1, 3.7, 2, 2.5, 1.0, 3.4, 2.2]
}

function calculateGPA (student){
  return student.grades.reduce(function (prev, curr){
    return prev + curr;
  })/student.grades.length;
}

console.log(calculateGPA(student2));
console.log(calculateGPA(student1));
