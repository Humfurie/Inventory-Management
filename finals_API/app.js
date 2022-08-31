const express = require('express');
const cors = require('cors');


const app = express();

//middleware
app.use(cors());

// parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//defining routes
app.use('/items', require('./controller/itemController'));

// declaring port; assigning a value
const port = 8888;

// syntax = server.listen(port, hostname, backlog, callback);
app.listen(port, 'localhost', (err) =>{
    if(err) return console.log(err);
    console.log("connected to port " + port);
});

