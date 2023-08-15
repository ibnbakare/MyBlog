import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Post from "@/models/Post"

connect()
export const GET = async()=>{
try{



const posts = await Post.find()
console.log("cjecling")
return  NextResponse.json(posts,{status:200})


}catch(err){
    return NextResponse.json({msg:err},{status:500})
}
}
    
