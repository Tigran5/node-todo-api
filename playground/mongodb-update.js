// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
       return console.log('Unabele to connect to Mongodb serever');
    }
    
    console.log('Connected to Mongodb server');
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5c8a51567a06860d9b801fe0')}, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result)
    // });
    
    db.collection('Users').findOneAndUpdate({_id: new ObjectID('5c8a2e1158339074a2fc5da4')}, {
        $set: {
            name: 'Tigran'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // client.close();
});