// // npm modules
const color=require('cli-color')
console.log(color.yellow("hello node js module"))
// //immediately invoke function
// (function (name){
//     var age=25
//     //every function in js has same behavior ,variable inside functionnot available outside
//     console.log(name)


// })("Prabhat")
// // console.log(age)
// // all the code inside a module is encapsulated


// npm modules

//immediately invoke function
// all file from the node js are wrapp from here and we used here
// (function (exports,require,module,__dirname,__filename){
//     var age=25
//     //every function in js has same behavior ,variable inside functionnot available outside
//     console.log(name)


// })("Prabhat")
// console.log(age)
// all the code inside a module is encapsulated


// local module

// const register=require('./auth')
// register("Prabhat")


// if multiple export are there
const auth=require('./auth')
auth.register("Prabhat")
auth.login("Prabhat",'secret')

// core modules

const path=require('path')
// console.log('This is file name',__filename)
//dirname
// console.log('folder name',  path.dirname(__filename))

//filename
console.log('file name',  path.basename(__filename))


//extension
console.log('extension name',  path.extname(__filename))


//parse
console.log('parse ',  path.parse(__filename))

//join
console.log('join ',  path.join(__dirname,'order','app.js'))


//file system module
const fs=require('fs')
const { error } = require('console')
//make a directory
// fs.mkdir(path.join(__dirname,'/test'),(err)=>{
//     if(err){
//         console.log('some thing went wrong')
//         console.log(err)
//         return
//     }
//     console.log("folder created")

// })

//create  a file
// fs.writeFile(path.join(__dirname,'test','test.txt'),'hello node',(err)=>{

//     if(err){
//         throw err
//     }

//     fs.appendFile(path.join(__dirname,'test','test.txt'),'more data',(err)=>{

//         if(err){
//             console.log('error while appending the data')
//         }
//         console.log('data appended')

//     })
//     console.log('file created')

// })

// read a file
// fs.readFile(path.join(__dirname,'test','test.txt'),(err,data)=>{


//     if(err){
//         throw err
//     }

//     const content=Buffer.from(data)
//     console.log(content.toString())
// })

// fs.readFile(path.join(__dirname,'test','test.txt'),'utf-8',(err,data)=>{


//     if(err){
//         throw err
//     }

//     // const content=Buffer.from(data)
//     console.log(data)
// })

//operating system module
const os=require('os')

// console.log('operating system time',os.type())
// // console.log('operating system time',os.platform())
// console.log('cpu architecture ',os.arch())
// // console.log('cpu architecture ',os.cpus())
// console.log('free memory ',os.freemem())
// console.log('total memory ',os.totalmem())
// console.log('uptime  ',os.uptime())


// event module
const Emitter=require('events')

// const myEmitter=new Emitter()
// myEmitter.on('somename',(data)=>{

//     console.log(data)

// })

// myEmitter.emit('somename',{
//     name:'Rakesh'
// })

// class Auth extends Emitter{
//     register(username){
//         console.log('Registered successfully.......')

//         this.emit('registered',username)
//     }
// }
// const authorization=new Auth()
// //listen


// //verify email
// authorization.on('registered',(data)=> {

//     console.log(`sending email to ${data}`)
// })

// //welcome email

// authorization.on('registered',(data)=> {

//     console.log(`sending welcome email to ${data}`)
// })

// authorization.register('prabhat')


