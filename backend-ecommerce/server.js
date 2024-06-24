const express = require('express');
const app = express();
const http =require('http');
require('./connection')
const server =http.createServer(app);
const {Server} = require('socket.io');
const cors = require('cors')
const io = new Server(server,{
    cors:'*',
    methods:'*'
})


app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

server.listen(8080,()=>{
    console.log('server running at port',8080)
})