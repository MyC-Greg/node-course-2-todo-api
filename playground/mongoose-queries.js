const {ObjectID} = require('mongodb');

const {mongoose} =require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5852c2aaa66a416ea72ada5f';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }


// Todo.find({
//   _id: id
// }).then((todos) =>{
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) =>{
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) =>{
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

  var id = '58526ed6fa4ed951c8e8f6b8';

  User.findById(id).then((user) => {
    if (!user) {
      return console.log('Id not found');
    }
    console.log('User: ', user);
  }, (e) => {
    console.log(e);
  });
