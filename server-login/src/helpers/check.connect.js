"use strict"

const { log } = require("console");
const mongoose = require("mongoose");
const os = require("os")
const process = require("process")
const _SECONDS = 5000
//count connect
const countConnect = () => {
    const countConnect = mongoose.connections.length
    console.log(`Number of connections::${countConnect}`);
}
//check overload
const checkOverload = () => {
    setInterval(() => {
        const numConnection = mongoose.connections.length
        const numCores = os.cpus().length;
        const memoryUsage = process.memoryUsage().rss;
        // example maximun number of connectios based on number of cores
        const maxConnection = numCores * 5;// number of connect max of cpu

        console.log(`Active connections:${numConnection}`);
        console.log(`Memory use :: ${memoryUsage / 1024 / 1024} MB`);

        if (numConnection > maxConnection) {
            console.log("connect overload detected");

        }
    }, _SECONDS)// moniter every 5 second
}

module.exports = {
    countConnect, checkOverload
}