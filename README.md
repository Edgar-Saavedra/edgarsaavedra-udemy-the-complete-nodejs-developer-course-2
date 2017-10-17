# Work for udemy course

Table Of Contents

| Title           | description                      |
| :--------------- | :-------------------------------- |
| [Intro](#1)      | `process` `global`, what is node |
| [Why node](#2.5) | non-blocking, benefits of node   |
| [Require](#2.9)| using require, file system, os modules|
| [modules](#v-10)| creating modules |




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


<h2 id="v-10">Modules</h2>

- `module` variable allows to modules by adding to its properties `module.exports.PROPERTY`
- using `require('./file.js');` and passing to var you can access module properties


<h2 id="v-11">Using 3rd Party</h2>

- `npm -v` get version
- `npm int` to create npm project
  - Creates single file in project, `package.json` use for modules installed
  - [npmjs.com](npmjs.com) to view module details
  - `$ npm install loadash --save`
    - --save updates the content of the package files.
  - modules installed into node_modules folder.
  - `var _ = require('lodash')` to require a 3rd party module


<h2 id="v-12">No restart app module</h2>

- `npm install nodemon -g`
  - it is a command line utility
  - -g installs into enviroment
  - nodemon allows for no need to restart application
  - RUN: `$ nodemon app.js`


<h2 id="v-13">Getting user input</h2>

- `console.log(process.argv);` to access commandline arguments
- `process.argv[2]` custom commands start at position 2
- process.argv allows access to all commandline arguments