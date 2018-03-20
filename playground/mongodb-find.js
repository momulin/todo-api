// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect MongoDB server');
  }
  console.log('Connected to MondoDB server');
  const db = client.db('TodoApp');

  db.collection('Todos').find({completed:true}).count().then((count)=>{
    console.log(`Todos count:${count}`);
  },(err)=>{
    console.log('Unable to fetch todos',err);
  });

  client.close();
});