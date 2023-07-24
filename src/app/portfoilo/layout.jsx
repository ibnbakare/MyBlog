import React from 'react'

const PortLayout = ({children}) => {
  return (
    <div>
        <h2>Header</h2>
            {children}
    <h2>bottom</h2>
    </div>

  )
}

export default PortLayout