import Image from 'next/image'
import React from 'react'
import styles from "./page.module.css"
import {notFound} from "next/navigation"

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return notFound()
  }
 
  return res.json()
}
export const generateMetadata =async ({params}) =>{
  const {id} = params
  const info =await getData(id)
  
  return{
    title: info.title,
    description: info.desc
  }
 
}
const BlogInfo = async({params}) => {
  const {id} = params
  const data = await getData(id)
  
  console.log(data)
  return (
    <div className={styles.container}>
     
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>   {data.title}</h1>
          <p className={styles.desc}>
    
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, harum? Numquam labore impedit explicabo, repellat assumenda laudantium facilis quaerat corporis quidem, a error voluptatum tenetur nihil tempore iusto debitis unde.
          </p>
          <div className={styles.author}>
            <Image
              src={data.img}
             
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={data.img}

            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem temporibus voluptatum obcaecati explicabo repellendus voluptates ea reprehenderit eius expedita exercitationem.

        </p>
      </div>

      
    </div>
  )
}

export default BlogInfo