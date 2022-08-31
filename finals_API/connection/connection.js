const mysql = require('mysql');

// syntax: agent.createConnection(options, [callback])
const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "node_finals"
});

// syntax: const socket.connect(port[, address][, callback]) 
connection.connect((err) => {
    if(err){
        console.log(err);
    } else{
        console.log("connected");
    }
});

module.exports = connection;