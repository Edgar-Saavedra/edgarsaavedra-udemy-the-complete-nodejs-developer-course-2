# Work for udemy course

Table Of Contents

| Title           | description                      |
| :--------------- | :-------------------------------- |
| [Intro](#1)      | `process` `global`, what is node |
| [Why node](#2.5) | non-blocking, benefits of node   |
| [Require](#2.9)| using require, file system, os modules |




<h2 id="1">Intro</h2>

- Node is a javascript runtime running on v8, v8 takes js code and turns the into machine code
-  Node has the `global` variable which contains all variable accessible to node enviroment
- `process` is a variable ontop of `global`, that manipulates the current process

<h2 id="2.5">Why Node</h2>

- non-blocking
   - blocking:  
    ```javascript
    var getUserSync = require(./getUserSync);
    var user1 = getUserSyng('1');
    console.log('user',user1);
    #sum has to wait to get user
    var sum = 1+2;
    console.log('sum',sum);
    ```
    - non blocking:
    ```javascript
    var getUser = require('./getUserSync');
    getUser('123',function(user1){
      console.log('user',user1)
    });
    # sum prints without having to wait to get user
    var sum = 1+2;
    console.log('sum',sum);
    ```
    - non blocking allows for faster processing.
    - non blocking does not require multiple threads, which saves resources
- npm
  - package manager for 3rd party modules

<h2 id="2.9">Using require</h2>

- nodejs.org/api
  - Will show you all available built in modules
  - fs : is the built in module to access file system
    - it will allow to manipulate files on the files system, like to add content to a file
  - os : module to get operating system data