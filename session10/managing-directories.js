const fs = require('fs')

//Access onthe operating system's directory /etc 
// const dirname= '/etc'
// FileSystem.access(dirname, (err)=>{
//     if(err){
//         console.error(err)
//         return
//     }
//     console.log(`It's possible to accces the directory ${dirname}`)
// })

// Relative directory

const dirname2 = 'images'
fs.access(dirname2, (err)=>{
    if(err){
        console.error(err)
        return
    }
    console.log(`It's possible to accces the directory ${dirname2}`)
})