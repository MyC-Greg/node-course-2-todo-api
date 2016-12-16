var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds133398.mlab.com:33398/node-todo-api' || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
