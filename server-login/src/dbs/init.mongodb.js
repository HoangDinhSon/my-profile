"use strict"

const mongoose = require("mongoose");
const connectString = "mongodb+srv://dinhson040494:plGrRVy9airsbZbf@info-user.qwqkhkr.mongodb.net/?retryWrites=true&w=majority&appName=info-user"
const { countConnect } = require("../helpers/check.connect");
class Database {

    constructor() {
        this.connect()
    }
    //connect
    connect(type = "mongodb") {
        if (1 === 1) { // in lại các hoạt động khi chúng ta query , 1==1 nói môi trường dev
            mongoose.set("debug", true);
            mongoose.set("debug", { color: true })
        }

        mongoose.connect(connectString, {
            maxPoolSize: 50
        })
            .then(_ => console.log("Connected mongoDb Successe", countConnect()))
            .catch(err => console.log("error connect database "))
    }
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database()
        }

        return Database.instance
    }


}
const instanceMongoDb = Database.getInstance()




module.exports = instanceMongoDb
