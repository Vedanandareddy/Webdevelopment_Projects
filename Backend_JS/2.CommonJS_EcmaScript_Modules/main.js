// there are two types of modules 
// oldest and default type of modules is commonjs 
// and the new modern type of modules is ecmmascript modules 
// each have different ways to use and if no type is specified it is considered as commonjs

const { createServer } = require('node:http');
// while using common module we use require to import modules

// import http from "http"
// import {createServer} from 'http'
// for importing a specific one using name import 



// node:http module exports an object with multiple properties (e.g., createServer, request, get, etc.). By using destructuring, you extract only the createServer function from that object.




const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World hi hello  world this is vedananda </h1>');
});
// creates a server 

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// starts server 

console.log(__dirname,__filename)


// in nodejs while using commonjs modules are wrapped in function that contain  below values thats how they are availabel in the code for usage 
// (function(exports, require, module, __filename, __dirname) {

//     // Module code actually lives here
  
//   });


