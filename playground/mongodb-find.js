// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connecto to MongoDB Server');
  }

  console.log('connected to mongoDB Server');

  // db.collection('Todos').find().count().then((count)=>{
  //   console.log(`count: ${count}`);
  //   console.log(JSON.stringify(docs, undefined, 2));
  //
  //
  // }, (err)=> {
  //   console.log('Error occured', err);
  //
  // });

  db.collection('Users').find({name : 'Andrew'}).toArray().then((docs)=>{

    console.log('Output will be Users');
    console.log(JSON.stringify(docs, undefined, 2));

  }, (err) =>{

    console.log(`Error ${err}`);

  });


//  db.close();
});
