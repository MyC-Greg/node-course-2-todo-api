// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDb server');

  //findOneAndUpdate

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('585120a2d0894d42f5336d50')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result)=>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('58503cda1fb2363ff0530570')
  },
  {
    $set: {
      name: 'Charlotte',
      location: 'Vienna-Austria'
    },
    $inc: {
    age: -1
    }
  },
{
    returnOriginal: false
  }).then((result) =>{
    console.log(result);
  });

  // db.close();
});
