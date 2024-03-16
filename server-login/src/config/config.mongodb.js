"use strict"
// require(dotenv).config();
const dev = {
    app: {
        port:process.env.DEV_PORT
    },
    db: {
        link: process.env.DEV_LINK_CONNECT_DATABASE
    }
}

const pro = {
    app: {
        port:process.env.PRO_PORT
    },
    db: {
        link: process.env.PRO_LINK_CONNECT_DATABASE
    }
}
const config = { dev, pro }
const env = process.env.NODE_ENV || "dev"
module.exports = config[env]
