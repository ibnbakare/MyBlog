"use client"
import React, { useState } from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
const Register = () => {
  const [err,setErr] = useState(false)
  const router = useRouter()
  

// connect to the api to register user
  const handleForm = async (e)=>{
    e.preventDefault()
    const username = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value

    try{
      const res = await fetch("/api/auth/register",{
        method:"post",
        body:JSON.stringify({username,email,password}),
        headers: {
          "Content-Type": "application/json",
        },

      } 
      )
      console.log(res)
      {res && router.push("/dashboard/login")}
    }
    catch(err){
      setErr(true)

    }
   
  }
  return (
    <div >
        <form className={styles.container} onSubmit={handleForm}>
            <input type='text' 
            
            placeholder='username'
            className={styles.input}
            />
            <input type='text' 
            
            placeholder='email'
            className={styles.input}
            />
            <input type='password' 
            
            placeholder='password'
            className={styles.input}
            
            />
            <button className={styles.button} > Register</button>
            
        </form>
        {err && "Something Went Wrong"}
        <Link href="/login" > Click here if registered</Link>
    </div>
  )
}

export default Register