import React from 'react'
import styles from "./page.module.css"
import Button from '@/component/button/button'
import Image from 'next/image'
import{items} from "./data"
import { notFound } from 'next/navigation'

const getData = (cat)=>{
  const data = items[cat]

  if(data){
    return data;

  }
  else{
    return notFound
  }
}

const Portfoilocategory = ({params}) => {
  console.log(params)
  // const{category} = params
  // const data = items[category]
  // console.log(data)
  const data = getData(params.category)
  return (
   
    <div className={styles.container}>
      <h2 className={styles.title}>{params.category}</h2>
      {data.map(item =>(
      <div className={styles.items} key={item.id}> 
    
        <div className={styles.imgContent}>
          <Image src ={item.image}
            fill={true}
            alt=''
            className={styles.img}
         />
        </div>
        <div className={styles.textContent}>
          <h2 className={styles.contentTitle}>{item.title}</h2>
          <p className={styles.desc}>{item.desc}</p>
          <Button title="See More" url = "#" />
        </div>
        
      </div>
))}
      
    </div>
  )
}

export default Portfoilocategory