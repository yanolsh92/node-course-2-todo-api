// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    db.collection("Todos").findOneAndUpdate({
        _id: new ObjectID('58e01ae256af70dc46991d39')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    db.collection("Users").findOneAndUpdate({
            _id: new ObjectID('58dc4b0a9e7734281cd99931')
        }, {
            $set: {
                name: 'Yan'
            },
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        })
        //58dc4b0a9e7734281cd99931
        // db.close();
});