const express = require('express')
const http = require('http');
const fs = require('fs');

const app = express();
const server = http.createServer(app);

app.get('/',(req,res)=>{
    fs.readFile('/Users/tarun/personalRepo/Sites/React resume/index.html',(err,data)=>{
        res.sendFile(data)
    })   
})

server.listen(3000,()=>{
    console.log('SERVER LISTENING ON 3000')
})
