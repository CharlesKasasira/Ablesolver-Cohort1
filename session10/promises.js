/**
 * Promise are alternative to callback
 * Because callbacks can make code look complicated hence had to maintain
 * They have 2 parts of them
 * 1. Definition of the promise
 * 2, Usage of the Promise/consuming
 */

// const DONE = true 
// // Definition of the promise
// const IS_IT_DONE  = new Promise((resolve, reject) => {
//     const SUCCESS = 'Promise resolved'
//     if(DONE) {
//         resolve(SUCCESS) // was passed as an argument to the constructor
//     }
//     else {
//         const FAILURE = 'Promise rejected'
//         reject(FAILURE)  // was passed as an argument to the constructor
//     }
// })

// // usage
// const CHECK_IF_DONE = () => {
//     IS_IT_DONE
//     .then(result => console.log(result))
//     .catch( error => console.log(error) )
// }

// //Invoke the checker
// CHECK_IF_DONE()

//  Import the file system module 'fs' and assign it to a variable
// const { rejects } = require('assert')
// const FS = require('fs')
// const { resolve } = require('path')

// const READ_FILE = (fileName) => {
//     return new Promise((resolve, reject) => {
//     // Create the readFile(filename, encoding, callback) maethod of the fs module

//         FS.readFile(fileName, 'utf8', (err, data) => { // specify the encoding to get a readable buffer
//             if(err){
//                 reject(err)
//                 return // stop the code execution
//             }
//             resolve(data) // resolve with date
//         })
//     })
// }

// // use the promise above
// READ_FILE('./readme.md')
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

const fetch = require('node-fetch')

const STATUS = response => {
    let { status, statusText } = response 

    if(status >= 200 && status < 300)
        return Promise.resolve(response)
    return Promise.reject(new Error(statusText))
}

const JSON = response => response.json()

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(STATUS)
    .then(JSON)
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error));