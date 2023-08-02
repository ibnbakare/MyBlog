import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
const Portfolio = () => {
  return (
    <div className={styles.container}>

      <div className={styles.headTitle}>Choose A Gallery</div>
      <div className={styles.items}>
        <Link href="/portfolio/illustration"
        className={styles.item}>
          <span className={styles.title}>Illustration</span>
        </Link>

        <Link href="/portfolio/websites"
        className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>

        <Link href="/portfolio/application"
        className={styles.item}>
          <span className={styles.title}>Application</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio