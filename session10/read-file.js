// Read using asynchronous fs.readFile

const fs = require('fs')
const path = require('path')

const user = 'Charles Kasasira'
const PATH  = path.join('/', 'Users', user, 'Desktop/code/workspace/Solver-Cohort-1/JS sessions/session10', 'server.js')

fs.readFile(PATH, 'utf-8', (err, data) => {
    if(err){
        console.error(err)
        return
    }
    console.log(data)
})
/**
 * Test asynchronous
 * The line of code below will be output first because asynchronous doesn't block the thread.
 * Yet the code from :9 to :15 is asynchronous and will take more time to execute than the line below.
 */