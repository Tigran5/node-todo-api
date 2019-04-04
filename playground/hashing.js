const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = 'abc123!';


// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     });
// });

var hashedValue = '$2a$10$xmiGRAJyqlWpC0b1aXzzbOLuiXBQjFaST76liGBgQMue8OK8mWl1.'

bcrypt.compare(password, hashedValue, (err, result) => {
    console.log(result);
});

// var data = {
//     id: 10
// };

// var token = jwt.sign(data, '123abc');

// console.log(token);

// var decoded = jwt.verify(token, '123abc');

// console.log(JSON.stringify(decoded));

// var message = 'I am user number 5';
// var hash = crypto.createHash('sha256').update(message).digest('hex');

// console.log(`Message is ${message}: Hash is ${hash}`);
 
// var data = {
//     id: 5
// };

// var token = {
//     data,
//     hash: crypto.createHash('sha256').update(JSON.stringify(data) + 'somesecret').digest('hex').toString()
// };

// var resultHash =  crypto.createHash('sha256').update(JSON.stringify(token.data) + 'somesecret').digest('hex').toString()

// if(resultHash === token.hash) {
//     console.log('Data was not changed.');
// } else {
//     console.log('Data vas changed');
// }