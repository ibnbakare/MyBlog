import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Link from 'next/link'
async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
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
// console.log()
  return (
    <div className={styles.mainContainer}>
      {data.map((item) =>(
        <Link href={`/blog/${item.userId}`} className={styles.container}  key={item.id}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/14039690/pexels-photo-14039690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.desc}>{item.body}</p>
        </div>
      </Link>
))}
      
        

       
    
    </div>
  )
}

export default Blog