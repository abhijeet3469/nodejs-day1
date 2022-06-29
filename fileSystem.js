console.log("Hello NodeJS 🔥");

// loops, conditions, functions, ojects ✅
// document or window ❌
// file system is a module "fs"- using that we can read, write, create, delete files.
// REPL- read, evaluate, print and loop - these things we can do in our server.
// CRUD Operation (sync and async) - create, read, update, delete

const fs = require("fs"); // // include module in node js file system

// Synchronous way - 1. create a file
// fs.writeFileSync('data.txt', 'Hey Mates, NODE JS is Awesome 🔥');

// 2. read the file and utf8 is encoder
// const data = fs.readFileSync('data.txt', 'utf8');
// console.log(data);

// 3. update the file
// fs.appendFileSync('data.txt', 'Author is Node JS');

// deleting
// fs.unlinkSync('data.txt');

// Asynchronous way- 1. create a file
// fs.writeFile('data2.txt', 'Hey mates, it is Async way', (error)=>{
//     console.log(error);
// })

// 2. read-
// fs.readFile('data2.txt', 'utf8', (err, data)=>{
//     console.log(err, data);
// })

// 3. update-
// fs.appendFile('data2.txt', '\n i am updating the text', (data)=>{
//     console.log(data);
// })

// 4. delete-
fs.unlink('data2.txt', (data)=>{
    console.log(data);
})