const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require("./../server/models/user")

//Todo.remove({})
// Todo.remove({}).then((result) => {
//     console.log(result);
// });

//Todo.findOneAndRemove().then(result)

Todo.findOneAndRemove({ _id: '590151c1d280eb57bc982f20' }).then((todo) => {

});
//Todo.findByIdAndRemove


Todo.findByIdAndRemove('590151c1d280eb57bc982f20').then((todo) => {
    console.log(todo);
});