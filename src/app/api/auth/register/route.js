import User from "@/models/User"
import connect from "@/utils/db"
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"



export const POST = async(request)=>{

try {
    await connect()

   // get data from client
   
   const reqBody= await request.json()
   const {name,email,password} = reqBody
   console.log(reqBody)

// check if email exists
const user = await User.findOne({email})
if(user){
    return NextResponse.json({msg:"email exist before, trying loging in"}, {status:401})
}

   const salt = await bcrypt.genSalt(10)
   const hashedPassword = await bcrypt.hash(password, salt)

   const newUser = new User({
       name,
       email,
       password:hashedPassword
   })

   console.log(request.json)
   await newUser.save()
   return NextResponse.json({
    message: "User created successfully",
    success: true,
    newUser
},{status:201})
} catch (error) {
    return  NextResponse.json({msg:"can not create"},{status:500})
}
}