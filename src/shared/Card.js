import React from 'react'



const Card = ({children,reverse}) => {
   
    console.log(children)
  return (
    <>
    {/* <div className={`card ${reverse && 'rever'}`}> */}
    
      <div className="card">
        {children}
        </div>

    
    </>
  )
}

export default Card