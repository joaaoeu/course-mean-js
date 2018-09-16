const _lodash = require('lodash');

const students = [{
  nome: 'Joao',
  grade: 7.6
}, {
  nome: 'Maria',
  grade: 8.6
}, {
  nome: 'Pedro',
  grade: 8.1
}];

const avarage = _lodash.sumBy(students, 'grade') / students.length;
console.log(avarage);