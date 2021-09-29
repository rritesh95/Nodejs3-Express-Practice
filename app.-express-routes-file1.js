//const http = require('http'); //no need to create server as express does it for us internally

const express = require('express');

const app = new express();

app.use((req,res,next) => {
    console.log('this middleware will gets executed always');
    next(); //allows the request to continue to the next middleware in line
})

app.use('/add-product', (req,res,next) => {
    console.log("in add  product middleware");
    res.send('<h1>The "Add Product" Page</h1>');
    //we are not using next() here so request will not go to next middleware
});

app.use('/', (req,res,next) => { //path '/'should always be the last
    console.log('inside another middleware');
    res.send('<h1>Hello user</h1>'); //send is an alternative to write,setHeader, etc... given by 
    //express.js, we can still all those node.js methods also
})

app.listen(3000); //express.js's listen method internally implements createServer and listen method of it

// const server = http.createServer(app); //express.js do it internally

// server.listen(3000);  //express.js do it internally