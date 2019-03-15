// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
       return console.log('Unabele to connect to Mongodb serever');
    }
    
    console.log('Connected to Mongodb server');
    const db = client.db('TodoApp');

    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Unable delete the Todos', err);
    // });

    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result)
    // }, (err) => {
    //     console.log('Unabel delete the todo', err);
    // });
    
    // db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // Users 
    // db.collection('Users').deleteMany({name: 'Tigran'}).then((result) => {
    //     console.log.result
    // });


    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5c8a121fb4a14d6dfc5c9ada')
    }).then((result) => {
        console.log(result);
    });

    // client.close();
});