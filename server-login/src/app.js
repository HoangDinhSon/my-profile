require("dotenv").config();
const express = require('express')
const { default: helmet } = require('helmet')
const morgan = require("morgan")
const compression = require("compression")
const {checkOverload}= require("./helpers/check.connect")
const app = express()


// init middleware
app.use(morgan("dev"));// dev 
app.use(helmet());
app.use(compression())
checkOverload()

//init DB 
require("./dbs/init.mongodb");

// init router
app.get('/', (req, res, next) => {
    const strCompress = "Hello you"
    return res.status(200).json({
        message: "Welcome server ",
        metadata: strCompress.repeat(1000000)
    })
})

// handling error



module.exports = app