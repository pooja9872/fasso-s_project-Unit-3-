const express = require('express');

const app = express();
app.use(express.json());

const connect = require("./configs/db");

app.use(8888, async() => {
    await connect();
    console.log("listhening on to the port 8888")
})