var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var MONGODB_URI = 'https://git.heroku.com/secure-reaches-47935.git';
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
