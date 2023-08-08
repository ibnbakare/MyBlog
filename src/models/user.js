import mongoose from "mongoose";

const {schema} = mongoose;


const userSchema = new schema({
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

export default mongoose.Model("user",userSchema)