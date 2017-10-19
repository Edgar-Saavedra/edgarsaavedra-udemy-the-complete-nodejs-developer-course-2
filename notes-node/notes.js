// console.log('Starting notes.js');
const fs = require('fs');

/**
 * fets notes from file system
 */
var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  }catch(e) {
    return [];
  }
}

/**
 * save a note to a file
 * @param {*} notes 
 */
var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}

var addNote = (title,body) => {
  // console.log('Adding note',title,body);
  // return 'New note';
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var duplicatNotes = notes.filter((note)=>note.title === title);
  
  if(duplicatNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
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