'use strict'

// level 0
const dev = {
    app: {
        port: process.env.PORT
    },
    db: {
        host: 'localhost',
        port: 27017,
        name: 'dbDev',
    }
}

// level 01
const prod = {
    app: {
        port: process.env.PORT
    },
    db: {
        host: 'localhost',
        port: 27017,
        name: 'dbProd',
    }
}


const config = { dev, prod }
const env = process.env.NODE_ENV || 'dev';
module.exports = config[env];

