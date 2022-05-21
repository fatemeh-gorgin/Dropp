// function sayHello(name){
//     console.log('Hello ' + name)
// }
// sayHello("Fatemeh")
// const logger = require('./logger')
// // console.log(logger)
// logger.log("message")

//path module
// const path = require('path')
// var pathObj = path.parse(__filename)
// console.log(pathObj)

//os module
// const os = require('os')
// var totalMme = os.totalmem()
// var freMem = os.freemem()
// console.log(`total: ${totalMme}`)
// console.log(`fre mem: ${freMem}`)

//file system module
// const fs = require('fs');
//sync 
// const files = fs.readdirSync('./')
// console.log(files)
//async , callback function
// fs.readdir('./' , function(err , files){
//     if(err) console.log(err)
//     else console.log(files)
// })

// //event module
// const EventEmitter = require('events')
// const emitter = new EventEmitter

// //register a listener
// emitter.on('messageLogged' , function(arg){
//     console.log('listener calles' , arg)
// })

// //rais an event 
// emitter.emit('messageLogged' , {id : 1 , url: 'http://'})

const http = require('http');
const server = http.createServer((req , res)=>{
    if(req.url === '/'){
        res.write('hello world');
        res.end()
    }
    if(req.url === '/api'){
        res.write(JSON.stringify([1 , 2 , 3]))
        res.end
    }
})
server.listen(3000)
console.log('listening on port 3000')