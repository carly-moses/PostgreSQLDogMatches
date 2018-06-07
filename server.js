"use strict";

const express = require("express");
const app = express(); 
const bodyParser = require("body-parser");


const dogs = require("./routes/dogs");
const owners = require("./routes/owners");
const matches = require("./routes/matches");

app.use(bodyParser.json());

app.use("/portal", dogs); 
app.use("/portal", owners); 
app.use("/portal", matches); 

app.use(express.static(__dirname + "/public"));

let port = 3000; 

app.listen(port, ()=>{
    console.log(`Server is listening ${port}`);
});