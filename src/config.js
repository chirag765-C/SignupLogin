const mongoose=require('mongoose');

const connect=mongoose.connect("mongodb://localhost:27017/Login-tut");

//checking if database connected or not

connect.then(()=>{
    console.log("Database connected successfully");
})
.catch(()=>{
    console.log("Database not connected");
});

//Create a schema
const LoginSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

//collection part making model


const collection =new mongoose.model("users",LoginSchema);
module.exports=collection;
