'use strict';

const mongoose = require('mongoose');
const server = require('./src/server');
require('dotenv').config();
const MONGODB_URI = 'mongodb://localhost:27017/class-11-db';

const mongooseOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

mongoose.connect(process.env.MONGODB_URI||MONGODB_URI, mongooseOptions);
server.start();

