
require('./config/config');
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const port = process.env.PORT || 3000;

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {authenticate} = require('./middleware/authenticate');


var app = express();


//configuring the middleware

 app.use(bodyParser.json());

// //creating routes
// app.post('/todos', (req, res) => {
//   console.log(req.body);
//
//   res.send('doc');
// });




// creating routes

app.post('/todos', (req, res)=> {

  var todo = new Todo({
    text : req.body.text
  });

  todo.save().then((doc)=>{
    res.send(doc);
  }, (e)=>{
    res.status(400).send(e);
  });

});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});

  }, (e) => {
        res.status(400).send(e);
  });
});

// Making query on the basis of id name.

app.get('/todos/:id', (req, res) => {

  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  Todo.findById(id).then((todo)=>{

    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e)=> {
      res.status(400).send();
  });


});

app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(id).then((todo) => {
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e) => {
    res.status(400).send();

  });

});


//to update data. Here we are using npm module patch.
app.patch('/todos/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body , ['text', 'completed']);

  //checking if ObjectId is valid or not.
  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  if(_.isBoolean(body.completed) && body.completed){
    body.completedAt = new Date().getTime();
  }
  else{
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set:body}, {new:true}).then ((todo) => {
    if(!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });

});

//Post for the model user

app.post('/users', (req, res)=> {

  var body = _.pick(req.body, ['email', 'password']);
  var user = new User(body);

  user.save().then(()=>{
    return user.generateAuthToken();
  }).then((token) => {
    res.header('x-auth', token).send(user);
  }).catch((e) => {
    res.status(400).send(e);
  })
});




//private routing using token VALUE

app.get('/users/me', authenticate, (req, res) => {


  res.send(req.user);


});

//POST /users/login {email, password}

app.post('/users/login', (req, res) => {

  var body = _.pick(req.body, ['email', 'password']);

  User.findByCredentials(body.email, body.password).then((user) => {

    return user.generateAuthToken().then((token) => {
      res.header('x-auth', token).send(user);
    });

  }).catch((e) => {

    res.status(400).send();

  });
});

//Post method to logout/delete token

app.delete('/users/me/token', authenticate, (req, res) => {
  req.user.removeToken(req.token).then(() => {
    res.status(200).send();
  }, () => {
    res.status(400).send();
  });
});



app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});

module.exports = {app};
