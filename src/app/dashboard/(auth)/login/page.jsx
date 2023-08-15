"use client"
import { signIn } from 'next-auth/react'
import React from 'react'

const page = () => {
  return (
    <div>
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
        <button onClick={() => signIn("google")} >Sign in With Google</button>
    </div>

  )
}

export default page