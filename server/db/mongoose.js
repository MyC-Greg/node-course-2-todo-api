var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('https://git.heroku.com/secure-reaches-47935.git' || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
