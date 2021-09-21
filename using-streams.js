/**
 * Streams are an effecient way of handling files, network communication and information exchange.
 * Compared to traditional file reading methods which store the entire file in memory before processing, streams read small chunks inorder to process files piece by piece. 
 * This makesit quite effecient. 
 */
// Example of traditional file reading

const http = require('http')
const fs = require('fs')

const server = http.createServer(function(request, response){
    fs.readFile(`${__dirname}/text.txt`, function(error, data){
        if(error) console.error(error)
        response.end(data)
    })
})

server.listen(5890, () => console.log(`Server running at http://localhost:5890`))


//Using he code above when the file is big, you will notice performance constraints. 
//It's better implement a stream like the code below.

const streamServer = http.createServer((req, res)=>{
    try{
        const stream = fs.createReadStream(`${__dirname}/text.txt`)
        stream.pipe(res)

    } catch{
        res.end('An error occured!')
        console.error('An error occured')
    }
})

streamServer.listen(5891, () => console.log(`Streaming server listening at http://localhost:5891`))