# Work for udemy course

Table Of Contents

| Title           | description                      |
| :--------------- | :-------------------------------- |
| [Intro](1)      | `process` `global`, what is node |
| [Why node](2.5) | non-blocking, benefits of node   |




## Intro {#1}
- Node is a javascript runtime running on v8, v8 takes js code and turns the into machine code
-  Node has the `global` variable which contains all variable accessible to node enviroment
- `process` is a variable ontop of `global`, that manipulates the current process
# Why node {#2.5}
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