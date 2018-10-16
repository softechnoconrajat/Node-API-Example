const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
  id: 10
};


var token = jwt.sign(data, '123abc');

console.log(token);

var decoded = jwt.verify(token, '123abc');

console.log('Decoded:', decoded);


// var text = 'This is the text';
//
// var hash = SHA256(text).toString();
//
// console.log(`Text: ${text}`);
// console.log(`hash: ${hash}`);
