// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    //deleteMany

    // db.collection("Todos").deleteMany({ text: "Eat lunch" }).then((result) => {
    //     console.log(result);
    // });

    // db.collection("Todos").deleteOne({ text: "Eat lunch" }).then((result) => {
    //     console.log(result);
    // });

    // db.collection("Todos").findOneAndDelete({ completed: false }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').deleteMany({ name: "Yan" });
    db.collection('Users').findOneAndDelete({
            _id: new ObjectID("58dc5086f44d4a3a7ca324ab")
        }).then((result) => {
            console.log(JSON.stringify(result, undefined, 2));
        })
        //deleteOne
        //findOneAndDelete
        // db.close();
});