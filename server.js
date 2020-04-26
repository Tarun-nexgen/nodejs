let http = require('http');
let events = require('events');

let eventEmitter = new events.EventEmitter();

let server = http.createServer((req,res)=>{
    eventEmitter.emit('Someone requested');
    res.end('server works')
});
eventEmitter.on('Someone requested',()=>{
    console.log('A request has been made on server');
});

server.listen(3000,'Localhost',()=>{
    console.log('server started')
})