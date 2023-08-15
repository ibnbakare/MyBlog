import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import connect from "@/utils/db"
import User from "@/models/User"
import bcrypt from "bcryptjs"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    CredentialsProvider({
      name:Credentials,
      id:credentials,
      async authorized(credentials){
        await connect()
        try {
          const user = User.findOne({email:credentials.email})
          if(user){
            const isPasswordValid = await bcrypt.compare(
              credentials.password,user.password)
          
          if(isPasswordValid){
            return user
          }
          else{
            throw new Error("Wrong email or password")
          }
        }else{
          throw new Error("User not found")
        }
        } catch (error) {
          throw new Error(error)
        }
      }
    }

    )
  ],
})
export {handler as POST, handler as GET}
