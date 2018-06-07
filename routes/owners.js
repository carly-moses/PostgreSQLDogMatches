"use strict";
const express = require("express");
const ownerRouter = express.Router();
const pg = require("pg");
const pool = require("../connections");

ownerRouter.get("/owners", (req, res) => {
    pool.query("SELECT * FROM owners ORDER BY owner_id").then((result) => {
        res.send(result.rows);
    });
});

ownerRouter.post("/owners", (req, res) => {
    pool.query("INSERT INTO owners (owner_name, owner_address, owner_age, dog_name, keyword) VALUES($1::text, $2::text, $3::int, $4::text, $5::text)",[req.body.owner_name, req.body.owner_address, req.body.owner_age, req.body.dog_name, req.body.keyword]).then(()=> {
        pool.query("SELECT * FROM owners ORDER BY owner_id").then((result) => {
            res.send(result.rows);
        });     
    });
});

ownerRouter.delete("/owners/:id", (req, res) => {
    pool.query("DELETE FROM owners WHERE owner_id =$1::int", [req.params.id]).then (()=> {
        pool.query("SELECT * FROM owners ORDER BY owner_id").then((result) => {
            res.send(result.rows);
        });
    });
});

ownerRouter.put("/owners/:id", (req, res) => {
    pool.query("UPDATE owners SET owner_name=$1::text, owner_address=$2::text, owner_age=$3::int, dog_name=$4::text, keyword=$5::text WHERE owner_id=$6::int", [req.body.owner_name, req.body.owner_address,req.body.owner_age,req.body.dog_name, req.body.keyword, req.params.id]).then(()=> {
        pool.query("SELECT * FROM owners ORDER BY owner_id").then((result) => {
            res.send(result.rows);
        });
    });
});

module.exports = ownerRouter;