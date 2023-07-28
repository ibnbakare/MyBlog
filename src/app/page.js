import React from 'react'
import styles from './page.module.css'
import Hero from 'public/hero.png'
import Image from 'next/image'
const page = () => {
  return (
    <div className={styles.container}>
        <div className={styles.items}>
          <h1 className={styles.title} >Better dessign for your digital products</h1>

          <p className={styles.desc}> Turing your ideas into reality. We bring together the teams from the global tech indsutry</p>

          <button className={styles.button}>See Our Work</button>
        </div>
        <div className={styles.items}>
          <Image className={styles.img} src={Hero}   alt=''/>
        </div>
    </div>
  )
}

export default page