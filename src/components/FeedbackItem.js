import React, { useState } from 'react'
import Card from '../shared/Card'
import {FaTimes} from 'react-icons/fa'
const FeedbackItem = ({item,handleDelete}) => {

 

  return (
    <>
    <Card reverse={false}>
    
        <div className="num-display">
            {item.rating}
        </div>
        <button className='close' onClick={()=>handleDelete(item.id)}>
          <FaTimes color="purple" />
        </button>
        <div className="text-display">
            {item.text} 
        </div>
    
    </Card>
    </>
  )
}

export default FeedbackItem