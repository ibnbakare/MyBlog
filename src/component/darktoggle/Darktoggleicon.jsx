"use client"

import React, { useContext } from 'react'
import styles from "./DarkToggle.module.css"
import { ThemeContext } from '@/context/ThemeContext'


const Darktoggleicon = () => {
// const mode = "dark"
const {toggle,mode} = useContext(ThemeContext)
  return (
    <div className={styles.container} onClick={toggle} >
    <div className={styles.icon}>M</div>
    <div className={styles.icon}>S</div>
    <div className={styles.ball} style={mode ==="light"? {left:"2px"} : {right:"2px"}} />
</div>
  )
}

export default Darktoggleicon




