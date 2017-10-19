// console.log('Starting notes.js');
const fs = require('fs');
var addNote = (title,body) => {
  // console.log('Adding note',title,body);
  // return 'New note';
  var notes = [];
  var note = {
    title,
    body
  };

  try {
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  }catch(e) {

  }
  
  var duplicatNotes = notes.filter((note)=>note.title === title);
  
  if(duplicatNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
  }
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Getting note',title);
};

var removeNote = (title) => {
  console.log('Removing note',title);
};

// module.exports = {
//   addNote: addNote
// };

// es6 syntax
module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}