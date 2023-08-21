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
    
export  const DELETE = async(request,{params})=>{
try{
    await connect()
    const {id} = params

    await Post.findByIdAndDelete(id)
    return NextResponse.json("Post has been deleted",{status:200})
}catch(err){
    return NextResponse.json("err",{status:500})
}
}
    