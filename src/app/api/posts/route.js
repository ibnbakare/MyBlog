import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Post from "@/models/Post"

connect()
export const GET = async(request)=>{

    const url = new URL(request.url)
    const username = url.searchParams.get("username")
try{



const posts = await Post.find(username && {username})
console.log("cjecling")
return  NextResponse.json(posts,{status:200})


}catch(err){
    return NextResponse.json({msg:err},{status:500})
}
}
    
