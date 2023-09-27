const register =function(username){
    console.log(`user ${username} has been registere`)
}
const  login=function(username,password){
    console.log(`user ${username} has been logged in`)
}
// module.exports=register
// module.exports=login
module.exports={

    // register:register,
    // login:login
    register,
    login
}
