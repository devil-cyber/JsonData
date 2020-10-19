const express = require('express');
const server = express();
const port = 8000;

server.get('/', (req, res) => {
    res.status(200).json({
        "message": "Serever started ",
        "goal": 'start your work'
    })
})
server.use('/', (req, res, next) => {
    res.status(404).json({
        'error': 'this is error 404'
    })
})


server.listen(port, (error => {
    if (error) { console.log(`Error occured in making the server`) }
    else { console.log(`Serever is running at port : ${port}`) }
}))