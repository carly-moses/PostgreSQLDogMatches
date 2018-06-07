"use strict";
const express = require("express");
const dogRouter = express.Router(); 
const pg = require("pg");
const pool = require("../connections");

dogRouter.get("/dogs", (req, res) =>{
    pool.query("SELECT * FROM dogs ORDER BY dog_id").then((result)=>{
        res.send(result.rows); 
    });
});

dogRouter.post("/dogs", (req, res) =>{
    pool.query("INSERT INTO dogs(dog_name, dog_age, dog_breed, dog_color, keyword) VALUES ($1::text, $2::int, $3::text, $4::text, $5::text)", [req.body.dog_name, req.body.dog_age, req.body.dog_breed, req.body.dog_color, req.body.keyword]).then(()=>{
        pool.query("SELECT * FROM dogs ORDER BY dog_id").then((result)=>{
            res.send(result.rows); 
        });
    });
});

dogRouter.delete("/dogs/:id", (req, res) =>{
    pool.query("DELETE FROM dogs WHERE dog_id=$1::int", [req.params.id]).then(()=>{
        pool.query("SELECT * FROM dogs ORDER BY dog_id").then((result)=>{
            res.send(result.rows); 
        });
    });
});

dogRouter.put("/dogs/:id", (req, res) =>{
    pool.query("UPDATE dogs SET dog_name=$1::text, dog_age=$2::int, dog_breed=$3::text, dog_color=$4::text, keyword=$5::text WHERE dog_id=$6::int",[req.body.dog_name, req.body.dog_age, req.body.dog_breed, req.body.dog_color, req.body.keyword, req.params.id]).then(()=>{
        pool.query("SELECT * FROM dogs ORDER BY dog_id").then((result)=>{
            res.send(result.rows); 
        });
    });
});

module.exports = dogRouter; 