'use strict'

const mongoose = require('mongoose');

const connectString = `mongodb://localhost:27017/itvnew`

mongoose.connect(connectString).then( _ => console.log('Connected to MongoDB')).catch(err => console.error('Error connecting to MongoDB', err));

if(1 === 0){
    mongoose.set('debug', true);
    mongoose.set('debug', { color: true})
}

module.exports = mongoose;