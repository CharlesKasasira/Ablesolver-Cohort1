const fs = require('fs')
const path = require('path')
const folderPath = 'test'

// const folderPath = 'test/subset'
// //Read contents of the directory. e.g: Folders and files and see the relative paths

// try{
//     const dirContents = fs.readdirSync(folderPath)
//     console.log(dirContents)
// } catch(err){
//     console.error(err)
// }

// Read contents of the directory. e.g: Folders and files and see the absolute/full paths

try{
    const dirContents = fs.readdirSync(folderPath).map(fileName =>{
        return path.join(folderPath, fileName)
    })
    console.log(dirContents)
} catch(err){
    console.error(err)
}