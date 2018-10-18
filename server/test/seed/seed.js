const {ObjectID} = require('mongodb');
const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');
const jwt = require('jsonwebtoken');


const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [{
  _id: userOneId,
  email:'rajat@softechnocon.com',
  password: 'abc1234',
  tokens: [{
    access : 'auth',
    token : jwt.sign({_id: userOneId, access : 'auth'}, '123abc').toString()
  }]
},
{
  _id: userTwoId,
  email: 'sinha@softechnocon.com',
  password: '123abc'

}];



const todos = [{
  _id : new ObjectID(),
  text: 'First test todo',
  completed :false,
  completedAt: 333

},
{
  _id : new ObjectID(),
  text: 'Second test todo',
  completed:true,
  completedAt:333
}];

const populateTodos = (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
};

const populateUsers = (done) => {
  User.remove({}).then(() => {
    var userOne = new User(users[0]).save();
    var userTwo = new User(users[1]).save();

    return Promise.all([userOne, userTwo])

  }).then(() => done());
};


module.exports = {todos, populateTodos, users, populateUsers};