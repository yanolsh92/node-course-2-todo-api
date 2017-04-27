const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require("./../server/models/user")

// var id = '59013638b915b73244497497';
// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log("Todos", todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log("Todo", todo);
// });
// Todo.findById(id).then((todo) => {
// if(!todo){
//     return console.log('Id not found');
// }
//     console.log("Todo by id", todo);
// }).catch((e) => console.log(e));

var userId = "58e595d2479bc73050c31f22";

User.findById(userId).then((user) => {
    if (!user) {
        return console.log("UserId not found");
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});