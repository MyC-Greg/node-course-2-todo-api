var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var MONGODB_URI = 'mongodb://<dbuser>:<dbpassword>@ds133398.mlab.com:33398/node-todo-api';
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
