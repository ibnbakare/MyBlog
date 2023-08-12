import mongoose from "mongoose";

const {Schema} = mongoose;


const userSchema = new Schema({
    name:{
        type:String,
        unique:true,
        required:true

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

const user = mongoose.models.users || mongoose.model("users",userSchema)

export default user;
// const User = mongoose.models.users || mongoose.model("users", userSchema);