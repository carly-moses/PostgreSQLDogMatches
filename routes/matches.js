"use strict";
const express = require("express");
const matchRouter = express.Router();
const pg = require("pg");
const pool = require("../connections");

matchRouter.get("/matches", (req, res) => {
    console.log(req.body);
    pool.query("SELECT * FROM dogs INNER JOIN owners ON dogs.keyword = owners.keyword").then((result)=>{
        res.send(result.rows); 
    });
});

module.exports = matchRouter; 