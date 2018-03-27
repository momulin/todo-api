const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5ab246046488333bea270031';
var userid = '5ab0d80652cfc629ff2bdc25';

if(!ObjectID.isValid(id)){
  console.log('ID not valid');
}

// Todo.find({
//   _id: id
// }).then((todos)=>{
//   console.log('Todos',todos);
// });
//
// Todo.findOne({
//   completed:false
// }).then((todo)=>{
//   console.log('Todo',todo);
// });

Todo.findById(id).then((todo)=>{
  if(!todo){
    return console.log('Id not found');
  }
  console.log('Todo By Id',todo);
}).catch((e)=>console.log(e));

User.findById(userid).then((user)=>{
  if(!user){
    return console.log('Id not found');
  }
  console.log('User By Id',user);
}).catch((e)=>console.log(e));
