
const mongoose=require('mongoose')

// similar to CREATE TABLE USER with columns username, email, password, timestamp
const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        
    }
},{timestamps:true})

module.exports=mongoose.model("User",UserSchema)