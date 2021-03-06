// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDb server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('58510a59d0894d42f5336833')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch Todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch Todos', err);
  // });

  db.collection('Users').find({
    name: 'Gregoire'
  }).toArray().then((docs) =>{
    console.log('Todos with name: Gregoire');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err)=>{
    console.log('Unable to fetch todos', err);
  });

  db.collection('Users').find({
    name: 'Gregoire'
  }).count().then((count) =>{
    console.log(`Todos count with name Gregoire: ${count}`);
  }, (err)=>{
    console.log('Unable to count todos', err);
  });

  // db.close();
});
