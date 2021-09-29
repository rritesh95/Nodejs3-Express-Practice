const express = require('express');
const bodyParser = require('body-parser'); //plugin we use to parse the request body

const app = new express();

app.use(bodyParser.urlencoded({ extended : false})); //this will parsed the request body and call next() to move forward
//to next middleware, body-parser has a history of integrating with express and getting detached so
//we are using 3rd party package so that code will not break if express.js detache it

//also body-parser works with form/json objects, other kind of input request we will handle
//in future lessons

app.use('/add-product', (req,res,next) => {
    res.send('<form action="/Product" method="POST"><input name="title" type="text"><button type="submit">Add Product</button></form>');
});

app.post('/product',(req,res) => { //can ommit "next" if not using as it's a last argument
    //replaced app.use with app.post to handle POST requests only
    console.log(req.body);
    res.redirect("/"); //another method from express.js to set redirection internally it will set
    //status code to 302
});

app.use('/', (req,res,next) => { 
    res.send('<h1>Hello user</h1>'); 
})

app.listen(3000);