var mongoose = require('mongoose');
//C:\Program Files\MongoDB\Server\3.4\bin>mongod.exe --dbpath /Users/Yan/mongo-data

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = { mongoose };