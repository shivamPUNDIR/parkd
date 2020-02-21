const Express=require('express');
const Http=require("http").Server(Express);

const io=require('socket.io')(Http);

Http.listen(3000,()=>{
    console.log("hello");
})