console.log('starting app');

const fs = require('fs');
const os = require('os');
const _  = require('lodash');

console.log(_.isString(true));
console.log(_.isString('Edgar'));

var filteredArray = _.uniq(['And','Edgar',1,'Edgar',1,2,3,4]);
console.log(filteredArray);


// const notes = require('./notes.js');

// var user = os.userInfo();

// var res  = notes.addNote();
// console.log(notes.add(1,2));
// // console.log(user);

// fs.appendFile('greetings.txt',`\nHello ${user.username}
// You are ${notes.age}`,function(err) {
//   if(err) {
//     console.log('unable to write to file');
//   }
// });

