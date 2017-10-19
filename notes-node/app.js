// console.log('starting app');

const fs = require('fs');
const _  = require('lodash');
const yargs = require('yargs');

//always add space between 3rd party and custom modules
const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
// console.log('Command: ',command);
// console.log('Process',process.argv);
// console.log("Yargs",argv);

if( command === 'add' ) {
  // console.log('Adding new note');
  notes.addNote(argv.title,argv.body);
} else if( command === 'list' ) {
  // console.log('Listing all notes');
  notes.getAll();
} else if( command === 'read' ) {
  // console.log('Getting note');
  notes.getNote(argv.title);
} else if( command === 'remove' ) {
  // console.log('Removing note');
  notes.removeNote(argv.title);
} else {
  console.log(`Command, ${command}, not recognized`)
}