import React from 'react'

const Header = ({text}) => {

    var sty={color:'red'}


  return (
    <div className='container' style={sty}>
        <h2>{text}</h2>
    </div>
  )
}

export default Header