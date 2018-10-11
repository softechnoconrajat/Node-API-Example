// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connecto to MongoDB Server');
  }

  console.log('connected to mongoDB Server');

//findOneAndUpdate
//
// db.collection('Todos').findOneAndUpdate({
//   _id : new ObjectID('5bbf4c24a2793447b122c188')
// }, { $set :{
//   completed:false
// }}, {
//   returnOriginal : false
// }).then((result)=>{
//   console.log(result);
// });

//findOneAndUpdae for Users collection
db.collection('Users').findOneAndUpdate({_id: new ObjectID('5bbf36aad3d4db38ea69280e')},
 { $set : {
  name :'Raj'
},  $inc : {
  age : 1
}
 },
{ returnOriginal : false}).then((result)=>{
  console.log(result);
});



//  db.close();
});
