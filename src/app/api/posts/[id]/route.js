import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Post from "@/models/Post"

connect()
export const GET = async(request,{params})=>{
try{
const {id} = params


const post = await Post.findById(id)
return  NextResponse.json(post,{status:200})

}catch(err){
    return NextResponse.json({msg:err},{status:500})
}
}
    
