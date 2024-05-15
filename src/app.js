require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const { default: helmet } = require('helmet');
const compression = require('compression');
const app = express();

console.log(`Process::`, process.env)

// init middleware
app.use(morgan('dev')); //maybe change dev to other mode like >> combined, common, dev, short, tiny
app.use(helmet());
app.use(compression());

// init database
require('./dbs/init.mongodb');
// const { checkOverload } = require('./helpers/check.connect');
// checkOverload();
//init routes
app.get('/', (req, res, next) => {
    const strCompress = 'Hello World! Welcome to itvnew';
    return res.status(200).json({
        message: 'Welcome to itvnew',
        metadata: strCompress.repeat(100000)
    })
})


// handle error


module.exports = app;