console.log('starting app');

const fs = require('fs');
const _  = require('lodash');

//always add space between 3rd party and custom modules
const notes = require('./notes.js');

var command = process.argv[2];

if( command === 'add' ) {
  console.log('Adding new note');
} else if( command === 'list' ) {
  console.log('Listing all notes');
} else if( command === 'read' ) {
  console.log('Getting note');
} else if( command === 'remove' ) {
  console.log('Removing note');
} else {
  console.log(`Command, ${command}, not recognized`)
}