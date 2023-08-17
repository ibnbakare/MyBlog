"use client"
import React, { useEffect, useState } from 'react'
import useSWR from "swr"
import styles from "./page.module.css"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'

const Dashboard = () => {
  // const [data, setData] = useState([])
  // const [isLoading,setIsLoading] = useState(false)
  // const [err,setErr] = useState(false)

  // useEffect(
  //   () => {
  //     setIsLoading(true)
  //     const getData = async () => {
  //       const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)


  //       if (!res.ok) {
  //        setIsLoading(false)
  //         // This will activate the closest `error.js` Error Boundary
  //         return notFound()
  //       }
          
  //       setData(res.json())
  //       setIsLoading(false)
  //     }
  //     getData()
  //   }, [])
  const session = useSession()
  const router = useRouter()
  console.log(session)
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher)
    console.log(data)
    
     if(session.status === "loading"){
      return <div>Loading...</div>;
     } 
     if(session.status === "unauthenticated"){
      return (router.push("/dashboard/login"))
     }
    if(session.status === "authenticated"){
  return (
    <div  className={styles.container}>
      <div className={styles.divA} ><span className={styles.names}>rb</span></div>
      <div className={styles.divB} >{isLoading ? "Processing":"ridhwan"}</div>
      <div></div>
    </div>
  )
    }
}

export default Dashboard