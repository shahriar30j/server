// const http = require('http');

const express = require('express');
const bodyParser= require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended : true}));

// const routes = require('./routes');

// console.log(routes.someText);

// const server = http.createServer(routes.handler);


// app.use((req, res, next) => {
//     console.log('In the Middlewear');
//     next(); //allowes the request to continue to the next middle wear in line
// });

// app.use('/', (req, res, next) => {
//     console.log('This always runs');
//     next();
// });


app.use('/add-product', (req, res, next) => {
    // console.log('In Another Middlewear');
    res.send('<form action="/product" method="POST"><input type ="text" name="title"><button type="submit">Add Product</BUtton</form>')
});

// app.use('/product', (req, res, next) => {
app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');

});

app.use('/', (req, res, next) => {
    // console.log('In Another Middlewear');
    res.send('<h1>HI! Now you are in Home Page!</h1>')
});


// const server = http.createServer(app);

// server.listen(3000);  
// ABove two lines marged into following one line
app.listen(3000);