import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
import Button from '@/component/button/button'

const About = () => {
  return (
    <div>
      <div className={styles.imgContent}>
        <Image src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        fill={true}
        alt=""
        className={styles.img}
      />
      <div className={styles.imgText}>
          <h1 className={styles.imgTitle} >Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>Handcrafting award winning digital experience</h2>
      </div>
      </div>
      <div className={styles.textContent}>
      <div className={styles.items}>
        <h1 className={styles.title}>Who Are We?</h1>
        <p className={styles. desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iste eum obcaecati dolorum omnis! Corrupti, delectus aliquid.
          <br/>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique quas, facilis deserunt, ipsam reiciendis eligendi possimus quis nemo harum assumenda consectetur ab temporibus? Suscipit voluptas ab vitae enim magni necessitatibus?
        </p>
        
      </div>
      <div className={styles.items}>
      <h1 className={styles.title}>What We Do</h1>
      <p className={styles. desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iste eum obcaecati dolorum omnis! Corrupti, delectus aliquid.
          <br/>
        -Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique quas, facilis deserunt, ipsam reiciendis eligendi possimus quis nemo harum assumenda consectetur ab temporibus? Suscipit voluptas ab vitae enim magni necessitatibus?
        </p>
        <Button url="contact" title="click" />
      </div>

      </div>

    </div>
  )
}

export default About