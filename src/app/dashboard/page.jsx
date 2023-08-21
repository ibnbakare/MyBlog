"use client"
import React, { useEffect, useState } from 'react'
import useSWR from "swr"
import styles from "./page.module.css"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import Image from 'next/image'

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
  const { data, error, mutate, isLoading } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher)
  console.log(data)

  if (session.status === "loading") {
    return <div>Loading...</div>;
  }
  if (session.status === "unauthenticated") {
    return (router.push("/dashboard/login"))
  }
  if (session.status === "authenticated") {

    const handleSubmit = async (e) => {
      e.preventDefault()
      const title = e.target[0].value
      const desc = e.target[1].value
      const img = e.target[2].value
      const content = e.target[3].value

      try {
        await fetch('http://localhost:3000/api/posts', {
          method: "POST",
          body: JSON.stringify({
            title,
            desc,
            img,
            content,
            username: session.data.user.name
          })
        });
        mutate();
      } catch (error) {
        console.log("this is FE error")
      }
    }
    const handleDelete =(id)=>{
      try {
        fetch(`/api/posts/${id}`,
        {
          method:"DELETE"
        }
        );
        mutate()
      } catch (error) {
        console.log(error)
      }
      
    }

    return (
    <div className={styles.container}>
      <div className={styles.par}>
        {isLoading ? "Data is Loading" :
          data === "null" ? " No Post" :

            data?.map((post) => (
                
             <div className={styles.post} key={post._id}>
                <div className={styles.imgContainer}>
                  <Image className={styles.img}
                    alt=''
                    src={post.img}
                    width={200}
                    height={100}
                  />
                  </div>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <span className={styles.delete} onClick={()=>handleDelete(post._id)}>X</span>
                
            </div>
            
            ))}
</div>
       
          <form className={styles.new} onSubmit={handleSubmit}>
            <h2> Add new Post</h2>
            <input type='text' placeholder='title' className={styles.input} />
            <input type='text' placeholder='desc' className={styles.input} />
            <input type='text' placeholder='Image' className={styles.input} />
            <textarea
              placeholder='Content'
              className={styles.textArea}
              cols="20"
              rows="10"
            >

            </textarea>
            <button className={styles.button} >Send</button>
          </form>
       






        {/* <div className={styles.divA} ><span className={styles.names}>rb</span></div>
      <div className={styles.divB} >{isLoading ? "Processing":"ridhwan"}</div>
      <div></div> */}
  </div>
    )
  }
}

export default Dashboard