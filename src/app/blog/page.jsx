import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Link from 'next/link'

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts',{ cache: 'no-store' })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const Blog = async() => {
const data = await getData()
console.log(data,"FE")
  return (
    
    <div className={styles.mainContainer}>
      {data.map((item) =>(
     <Link href={`/blog/${item._id}`} className={styles.container}  key={item.id}>
        <div className={styles.imageContainer}>
          <Image
            src={item.img}

            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.desc}>{item.content}</p>
        </div>
      </Link>
))}
      
        

       
    
    </div>
  )
}

export default Blog