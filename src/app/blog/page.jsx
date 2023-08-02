import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Link from 'next/link'
const Blog = () => {
  return (
    <div className={styles.mainContainer}>
    
        <Link href={`/blog/me`} className={styles.container}>
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
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Desc</p>
          </div>
        </Link>
        
        <Link href={`/blog/me`} className={styles.container}>
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
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Desc</p>
          </div>
        </Link>
    
    </div>
  )
}

export default Blog