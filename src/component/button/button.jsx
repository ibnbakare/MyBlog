import Link from 'next/link'
import React from 'react'
import styles from "./page.module.css"
const Button = ({url,title}) => {
  return (
   <Link href={`/${url}`}>
   <button className={styles.btn}>{title}</button>
   </Link>
  )
}

export default Button