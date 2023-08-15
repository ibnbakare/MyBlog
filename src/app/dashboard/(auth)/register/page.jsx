"use client"
import React, { useState } from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'
const Register = () => {
  const [err,setErr] = useState(false)
  const router = useRouter()
  

// connect to the api to register user
  const handleForm = async (e)=>{
    e.preventDefault()
    const name = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value

    try{
      const res = await fetch('http://localhost:3000/api/auth/register',{
        method:"POST",
        body:JSON.stringify({name,email,password}),
        headers : {'Content-Type':'application/json'}
        
      })
      // The return value is *not* serialized
      // You can return Date, Map, Set, etc.
     
     
     
      console.log(res)
      {res.status === 201 && router.push("/dashboard/login")}
    }
    
     
      
    
    catch(err){
      setErr(true)
      console.log(err)

    }
   
  }
  return (
    <div >
        <form className={styles.container} onSubmit={handleForm}>
            <input type='text' 
            required
            placeholder='username'
            className={styles.input}
            />
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
        {err && "Something Went Wrong"}
        <Link href="/login" > Click here if registered</Link>
    </div>
  )
}

export default Register