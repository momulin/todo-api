// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect MongoDB server');
  }
  console.log('Connected to MondoDB server');
  const db = client.db('TodoApp');

  db.collection('Users').findOneAndUpdate({
    _id:new ObjectID('5aaf8eb6a748b526c901a356')
  },{
    $set:{
      name:'bugi'
    },
    $inc: {
      age:10
    }
  },{
    returnOriginal:false
  }).then((result)=>{
    console.log(result);
  });

  // client.close();
});
