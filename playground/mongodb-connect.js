// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connecto to MongoDB Server');
  }

  console.log('connected to mongoDB Server');

  var details = {name: 'Rajat', age : 27};
  var {name} = details;
  console.log(name);

  // db.collection('Todos').insertOne({
  //   text : 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('unable to inset todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name : 'Rajat',
  //   age: '27',
  //   location: 'Bangalore'
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert Users', err);
  //
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  //

  db.close();
});
