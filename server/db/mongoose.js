var mongoose = require('mongoose');
//C:\Program Files\MongoDB\Server\3.4\bin>mongod.exe --dbpath /Users/Yan/mongo-data

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = { mongoose };

// process.env.NODE_ENV==='production'
// process.env.NODE_ENV==='development'
// process.env.NODE_ENV==='test'