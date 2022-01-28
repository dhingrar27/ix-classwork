const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const feedRoutes = require('./routes/feed');
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers','Authorization');
});

app.use('/feed', feedRoutes);

mongoose
    .connect(
        'mongodb+srv://dhingrar27:OdyAAoWNE6nkyUGm@cluster0.1zpar.mongodb.net/Cluster0?retryWrites=true&w=majority'
    )
    .then(() => {
        app.listen(3000);
        console.log('Connected to MongoDb: 3000!');
    })
    .catch((err) => {
        console.log(err);
    });

