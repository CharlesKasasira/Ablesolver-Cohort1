// Accepting CLI arguments in Node
// To provide the cli arguments at the CLI/Terminal use the following syntax
// node filename arg1 agr2 arg3
// Then from your node use the process.argv to access all the arguments
// In the code clossely look at line 13 to 20 which ouputs the CKI argumens to the wevpage
// and line 26 to 31 which output the CLI arguments to the console.

const HTTP = require('http')
require('dotenv').config()
const {SERVERNAME, PORT} = process.env 

// const HOSTNAME = localhost

const SERVER = HTTP.createServer((request, response) => {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html')
        let {argv} = process;
        argv = require('minimist')(argv.slice(2)) // You need to use require the mininmist package to be able to access name arguments
        // To name the argument you pass it like
        // node filename --key=value
        // console.log(argv)

        let html = ''
        html = argv['school']

        // if (argv.length>0){
        //     argv.forEach((name) =>{
        //         html += `<p>${name}</p>`
        //     });
        // }

    response.end(`<h1>Server running!</h1> ${html}`)
})

SERVER.listen(PORT, SERVERNAME, ()=>{
    console.log(`Server running on ${SERVERNAME}:${PORT}`)
    const {argv} = process 
    
    if(argv.length > 0){
        argv.forEach(name =>{
            console.log(name)
        })
    }
})