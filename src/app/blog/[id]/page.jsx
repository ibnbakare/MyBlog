import Image from 'next/image'
import React from 'react'
import styles from "./page.module.css"

const BlogInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ad, quas optio voluptas nihil voluptates quod quo tempore velit!

          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/14039690/pexels-photo-14039690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
             
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>ridhwan bakare</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/14039690/pexels-photo-14039690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

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