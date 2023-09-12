const express = require('express');
var http = require("http");

const app = express();
const port =  5000;
var server = http.createServer(app);
var io = require("socket.io")(server);
//middleware
app.use(express.json());

io.on('connection',(socket)=>{
    console.log('connected')
    console.log(socket.id, 'has joined');
    socket.on("/test",(msg)=>{
        console.log(msg);
    })
});
app.get("/", (req, res) => {
    res.send("Hello world");
  });
server.listen(port,"0.0.0.0",()=>{
    
    console.log('server started')
})

