const express = require('express');
const server = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 8000;
server.use(express.json({ extended: false }));

server.use('/', require('./routes'));
server.use('/', (req, res, next) => {
    res.status(404).json({
        'error': 'this is error 404'
    })
})


server.listen(port, (error => {
    if (error) {
        console.log(`Error occured in making the server`)
    } else {
        console.log(`Serever is running at port : ${port}`)
    }
}))