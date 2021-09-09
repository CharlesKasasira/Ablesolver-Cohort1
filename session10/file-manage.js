const fs = require('fs')

fs.open('./gitignore', 'r', (err, fd) =>{
    console.log(fd)
})

fs.open('./logs', 'r+', (err, fd) =>{
    console.log(fd)
})

fs.open('./logs', 'w+', (err, fd) =>{
    console.log(fd)
})

try{
    const fd = fs.openSync('test.txt', 'w+')
    console.log('openSync' + fd)
    fs.closeSync(fd)
    console.log('After closing' + fd)
} catch(err) {
    console.error(err)
}

/**
 * Quiz add the descriptions of fs.open or fs.openSync file mode below.
 * File reading modes.
 * r, r+, w+, a and a+
 * r:
 * r+:
 * w+:
 * a:
 * a+:
 */