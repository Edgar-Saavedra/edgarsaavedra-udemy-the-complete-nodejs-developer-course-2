console.log('starting app');

const fs = require('fs');

fs.appendFile('greetings.txt','\nHello World',function(err) {
  if(err) {
    console.log('unable to write to file');
  }
});