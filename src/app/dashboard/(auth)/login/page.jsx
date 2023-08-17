"use client"
import { signIn, useSession } from 'next-auth/react'
import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
const page = () => {
  const router = useRouter()
  const {data,status} = useSession()
  if(status === 'authenticated') { 
      
    return(router.push("/dashboard"))}
  const handleForm = async (e)=>{
    e.preventDefault()
   
    const email = e.target[0].value
    const password = e.target[1].value
    signIn("credentials", {email,password}) 
    
  }
  
  return (
    <div>
       <div >
        <form className={styles.container} onSubmit={handleForm}>
           
            <input type='text' 
            required
            placeholder='email'
            className={styles.input}
            />
            <input type='password' 
            required
            placeholder='password'
            className={styles.input}
            
            />
            <button className={styles.button} > Register</button>
            
        </form>
  
        <Link href="/dashboard/register" > Click here to register</Link>
    </div>
        <button onClick={() => signIn("google")} >Sign in With Google</button>
    </div>

  )
}

export default page