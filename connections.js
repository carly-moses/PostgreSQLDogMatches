"use strict";
const pg = require("pg");

const pool = new pg.Pool({
    user: "postgres",
    password: "C_Moses",
    host: "localhost",
    port: 5432,
    database: "postgres",
    ssl: false
});

module.exports = pool; 