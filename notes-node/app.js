console.log('starting app');

const fs = require('fs');
const os = require('os');

const notes = require('./notes.js');

var user = os.userInfo();

var res  = notes.addNote();
console.log(notes.add(1,2));
// console.log(user);

fs.appendFile('greetings.txt',`\nHello ${user.username}
You are ${notes.age}`,function(err) {
  if(err) {
    console.log('unable to write to file');
  }
});

