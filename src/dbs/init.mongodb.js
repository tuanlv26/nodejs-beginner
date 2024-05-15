'use strict'

const mongoose = require('mongoose');
const connectString = `mongodb://localhost:27017/itvnew`
const { countConnect } = require('../helpers/check.connect');


class Database {

    constructor(){
        this.connect();
    }

    connect(type = 'mongodb'){
        if(1 === 1){
            mongoose.set('debug', true);
            mongoose.set('debug', { color: true})
        }

        mongoose.connect(connectString, {
            maxPoolSize: 50
        })
        .then( _ => {
            // countConnect();
            console.log(`Connected to MongoDB PRO`, countConnect())
        })
        .catch(err => console.error('Error connecting to MongoDB PRO', err));
    }

    static getInstance(){
        if(!Database.instance){
            Database.instance = new Database();
        }

        return Database.instance
    }
}

const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb;