import user from "@/models/User"
import connect from "@/utils/db"
import { NextResponse } from "next/server"


export const POST = async(request)=>{
await connect()
try {
    // get data from client
    const {name,email,password} = await request.json()

    if(!name || !email||!password){
        return NextResponse.json({body:"Please fill all the fields"},{status:401})
    }
   

    console.log(request.json)
    return NextResponse.json({msg:"created"},{status:201})
} catch (error) {
    return NextResponse.json({msg:error},{status:500})
}
}