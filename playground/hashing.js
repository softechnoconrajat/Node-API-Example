const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
//
// });

var hashPassword = '$2a$10$OrmXu6YB/z4/wjpq.ZS/1uPav/G/PZa2Sf/eb.y5JcUGd9s3nep4i';

bcrypt.compare(password, hashPassword, (err, result) => {
  console.log(result);
});

// var data = {
//   id: 10
// };
//
//
// var token = jwt.sign(data, '123abc');
//
// console.log(token);
//
// var decoded = jwt.verify(token, '123abc');
//
// console.log('Decoded:', decoded);


// var text = 'This is the text';
//
// var hash = SHA256(text).toString();
//
// console.log(`Text: ${text}`);
// console.log(`hash: ${hash}`);
