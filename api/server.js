const express = require("express");

const machinesRouter = require("./machines/machines-router.js");

const server = express();

server.use(express.json());

server.use("/api/machines", machinesRouter);

server.get("/", (req, res) => {
    res.status(200).json("Welcome to Machines API");
});

module.exports = server;