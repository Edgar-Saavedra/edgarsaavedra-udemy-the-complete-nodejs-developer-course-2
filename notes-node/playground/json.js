// obj to string
// var obj = {
//   name : 'Edgar'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

//string to object
// var personString =`{
//   "name" : "edgar",
//   "age" : 25
// }`;
// var person = JSON.parse(personString);
// console.log(person);
// console.log(typeof person);

const fs = require('fs');
var originalNote = {
  title : 'some title',
  body : 'some body'
};
var originalNote = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNote);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);