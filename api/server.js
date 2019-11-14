const express= require('express')
const helmet=require('helmet')
const morgan=require('morgan')
const cors = require('cors');

const taskRouter = require('./helpers/tasksRouter')

const server = express();

server.use(helmet())
server.use(morgan())
server.use(express.json());
server.use(morgan('combined'))

//use the routerse
server.use('/api/tasks', taskRouter)

server.get('/', (req,res)=> {
    res.send('server is running yo')
})

module.exports = server;
