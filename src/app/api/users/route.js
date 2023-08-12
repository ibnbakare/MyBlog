import { NextResponse } from "next/server"
import connect from "@/utils/db"
import User from "@/models/User"

connect()
export const GET = async()=>{
try{



const users = await User.find()
return  NextResponse.json(users,{status:200})

}catch(err){
    return NextResponse.json({msg:err},{status:500})
}
}
    
