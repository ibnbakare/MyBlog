"use client"
import React, { useEffect, useState } from 'react'
import useSWR from "swr"
import styles from "./page.module.css"

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
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/posts/", fetcher)
    console.log(data)
  return (
    <div  className={styles.container}>
      <div className={styles.divA} ><span className={styles.names}>rb</span></div>
      <div className={styles.divB} >ridhwan</div>
      <div></div>
    </div>
  )
}

export default Dashboard