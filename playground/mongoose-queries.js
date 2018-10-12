const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

// var id = '5bc09db52bf089d10a276e94';
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not Valid');
// }
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todos one', todo);
// });
//
// Todo.findById(id).then((todo) => {
//
//   if(!todo){
//     return console.log('Id not found');
//   }
//
//   console.log('Todos find by id', todo);
// }).catch((e)=> console.log(e) );

var User_Id = '5bc0387baa655e2012e60231'

User.findById(User_Id).then((user) => {
  if(!user){
    return console.log('Id not found');
  }

  console.log('User find by id', JSON.stringify(user, undefined, 2) );
}).catch((e)=> console.log(e));
