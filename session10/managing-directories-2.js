const fs = require('fs')

const folderName = 'test'
const folderName2 = "test2"

try{
    if(!fs.existsSync(folderName)){
        fs.mkdirSync(folderName)
        console.log('Folder created successfully!')
    } else {
        console.log(`Directory ${folderName} exists`)
    }

    if(!fs.existsSync(folderName2)){
        fs.mkdirSync(folderName2)
        console.log('Folder2 created successfully!')
    } else {
        console.log(`Directory ${folderName2} exists`)
    }
} catch (err){
    console.log(err)
}