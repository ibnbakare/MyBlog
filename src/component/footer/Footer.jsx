import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div>
            <p>Copyright @2023</p>
        </div>
        <div className={styles.socials}>
            <Image src="/1.png" width={15} height={15} alt="facebook" />
            <Image src="/2.png" width={15} height={15} alt="facebook" />
            <Image src="/3.png" width={15} height={15} alt="facebook" />
            <Image src="/4.png" width={15} height={15} alt="facebook" />
            
        </div>
    </div>
  )
}

export default Footer