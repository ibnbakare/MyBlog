import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Button from '@/component/button/button'

export const metadata = {
  title: 'Contact page ',
  description: 'Contact Page',
}

const Contact = () => {
  return (
    <div className ={styles.container}>
  <h1 className={styles.title}> Contact Us!!! </h1>
    <div className={styles.content}>
      <div className={styles.imgContainer}>
        <Image src = "/contact.png" 
        alt='conatact image'
        fill={true}
        className={styles.img}
        />
      

      </div>

      <form className={styles.textContent}>
          <input type='text' placeholder='Name' className={styles.input} />
          <input type='text' placeholder='Email' className={styles.input} />
          <textarea 
          className={styles.textarea}
          cols="30"
          rows="10"

          />
          <Button title="Send" url="#" />
      </form>

    </div>
    </div>
  )
}

export default Contact