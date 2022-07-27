/*const express = require("express");
const app = express();
app.get("/", (req,res) => {
    res.send("express");
});

app.get("/error", (req,res) => {
    process.exit(1);
});

app.listen(3000)
*/




const http = require('http');


const server = http.createServer( (req, res)=>{

    console.log("Log generated by Index File from Node App");
    res.write("Welcome to NODE App - New Changes");
    res.end();

}  );

server.listen(3000);


/*
Environment + Resources
------------
OS (Linux)
NodeJS (Software / CLI)
Open Port (3000)
index.js
package.json

Command Terminal
-------------------
node index.js
*/