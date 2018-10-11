// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connecto to MongoDB Server');
  }

  console.log('connected to mongoDB Server');

// deleted many
   // db.collection('Todos').deleteMany({text : 'to do lunch'}).then((result) =>{
   //   console.log('successfully deleted');
   // });

//delete one
   // db.collection('Todos').deleteOne({text: 'to do lunch'}).then((result)=>{
   //   console.log(`result ${result}`);
   // });

//find one and delete

// db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
//   console.log(result);
// });

//delete many
// db.collection('Users').deleteMany({text:'to do lunch'}).then((result)=>{
//   console.log(result);
// });

//delete one

// db.collection('Users').deleteOne({text:'to do lunch').then((result)=>{
//   console.log(result);
// });



//findOneAndDelete

db.collection('Users').findOneAndDelete({_id : new ObjectID('5bbf34842a78e038016df267')}).then((result)=>{console.log(result);

})





//  db.close();
});
