const fs = require('fs')
const path = require('path')

const folderPath = 'test'

const isFile = fileName => fs.lstatSync(fileName).isFile()

try{
    const filesInDirectory = fs.readdirSync(folderPath)
    const modifiedList = filesInDirectory.map(fileName => path.join(folderPath, fileName))

    const filteredList = modifiedList.filter(isFile)

    console.log(filteredList)
}
catch( err ){
    console.log(err)
}