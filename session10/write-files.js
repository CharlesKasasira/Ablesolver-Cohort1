// const fs = require('fs')
// const path = require('path')

// const content = 'This is written using Nodejs fs.writeFile() API' //you can also fetch the content.

// // Asynchronous
// fs.writeFile('test1.txt', content, err =>{
//     if(err){
//         console.error(err)
//         return // Return out of the function if there was an error
//     }
//     //file written successfully
//     console.log('Viola!')
//     console.log('Content has written to the file successfully')
// })


// Synchronoous

const fs = require('fs')
const path = require('path')
const filePath = path.resolve('test2.txt')

let content = 'This written synchronously and the path has been generated with path module'

try{
    content = `${content}\n ${filePath}\n`

    const data = fs.writeFileSync(filePath, content)
    // file written succesfully
    console.log(`Viola!\n You've written to the file.`)
} catch(err){
    console.error(err)
}

let content2 = `\nAnd this must not overwrite the content too but we desire to read from the file as well.\n`

try{
    //Append to the file instead of overwriting it's content.
    fs.writeFileSync(filePath, content2, {flag:'a'})
    //file written successfully
    console.log(`Viola!\n You've written to the file.`)
} catch(err){
    console.error(err)
}


// Challenge: use the fs.appendFile() and the fs.appendFileSync to practice appending to a file.