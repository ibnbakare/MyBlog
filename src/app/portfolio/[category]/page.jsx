import React from 'react'
import styles from "./page.module.css"
import Button from '@/component/button/button'
import Image from 'next/image'
const Portfoilocategory = ({params}) => {
  console.log(params)
  const{category} = params
  return (
   
    <div className={styles.container}>
      <h2 className={styles.title}>{category}</h2>
      <div className={styles.items}> 
        <div className={styles.imgContent}>
          <Image src ="https://images.pexels.com/photos/17807349/pexels-photo-17807349/free-photo-of-art-architecture-travel-statue.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            fill={true}
            alt=''
            className={styles.img}
         />
        </div>
        <div className={styles.textContent}>
          <h2 className={styles.contentTitle}>Creative minds</h2>
          <p className={styles.desc}>Desc</p>
          <Button title="See More" url = "#" />
        </div>
        
      </div>
      
      <div className={styles.items}> 
        <div className={styles.imgContent}>
          <Image src ="https://images.pexels.com/photos/17807349/pexels-photo-17807349/free-photo-of-art-architecture-travel-statue.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            fill={true}
            alt=''
            className={styles.img}
         />
        </div>
        <div className={styles.textContent}>
          <h2 className={styles.contentTitle}>Creative minds</h2>
          <p className={styles.desc}>Desc</p>
          <Button title="See More" url = "#" />
        </div>
      </div>
    </div>
  )
}

export default Portfoilocategory