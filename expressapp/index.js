const express = require('express');
const app = express();
const ideas = require('./ideas.js');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

function connectToMongoDB() {
    return mongoose.connect('mongodb://127.0.0.1:27017').then(() => {

    }, (error) => {
        console.log(error);
        setTimeout(() => {
            connectToMongoDB()
        }, 10000);
    });
}

connectToMongoDB();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

ideas(app);

app.options("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.sendStatus(200);
});

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(4000, () => console.log('Example app listening on port 4000!'));