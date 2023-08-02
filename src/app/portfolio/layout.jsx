import React from 'react'
import styles from './page.module.css'

const PortLayout = ({children}) => {
  return (
    <div>
        <h2 className={styles.mainTitle}>Our Works</h2>
            {children}
   
    </div>

  )
}

export default PortLayout