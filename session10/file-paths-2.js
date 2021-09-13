const path = require('path')

const user = 'charles'
// Create apath using path.join(separator, ...n])
const PATH = path.join('/', 'Users', user, 'logs.txt')
const PATH2 = path.join('/', 'Users', user, 'option-dir', 'opt2', 'logs.txt')

console.log(PATH)
console.log(PATH2) 

//Get absolute path of a file

const absPath = path.resolve('file.txt')
console.log(absPath)

const absPath2 = path.resolve('tmp', 'file.txt')
console.log(absPath2)

// If you specify a foward slash / on the first argument the resolve will it's a absolute path.
const absPath3 = path.resolve('/etc','joe.txt')
console.log(absPath3)

//You also use ../ and double slashes
const absPath4 = path.resolve('/Users/joe/..//test.txt')
console.log(absPath4)

