import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutPage = () => {
    var navigate=useNavigate();
    var redirect=()=>{
        navigate("/")
    }
  return (
    <div>

        <button onClick={redirect}>redirect</button>
    </div>
  )
}

export default AboutPage