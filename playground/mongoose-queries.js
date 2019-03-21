const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5c92429ae7094a15e22211ae';

// if(!ObjectID.isValid(id)) {
//    return console.log('Id is invalid.');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log(todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log(todo);
// });
 
// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('id not found.');
//     }
//     console.log(todo);
// }).catch((e) => {
//     console.log(e);
// });

var id = '6c8f8c1ffbdb471b360c70ac';

    User.find({
        _id: id
    }).then((users) => {
        console.log(users);
    });
    
    User.findOne({
        _id: id
    }).then((user) => {
        console.log(user);
    });
     
    User.findById(id).then((user) => {
        if(!user) {
            return console.log('User not found.');
        }
        console.log(user);
    }).catch((e) => {
        console.log(e);
    });