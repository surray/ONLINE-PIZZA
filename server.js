const express = require('express');
const Pizza=require('./newuser/model/pizzamodel');
const app = express();
const path =require('path');
const dotenv = require('dotenv')
dotenv.config();
const cors =require("cors");

const dbs =require('./dbs');
app.use(cors());
app.use(express.json());

const pizzaRoute=require('./newuser/Route/pizzas');


app.use('/api/pizzas',pizzaRoute)



app.use(express.static(path.join(__dirname, "/newuser/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/newuser/build', 'index.html'));
});


app.listen(process.env.PORT || 5000, () => {
    console.log('Example app listening port ');
});


