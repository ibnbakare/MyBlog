"use client"
import { signIn } from 'next-auth/react'
import React from 'react'

const page = () => {
  return (
    <div>
        <button onClick={() => signIn("google")} >Sign in With Google</button>
    </div>

  )
}

export default page