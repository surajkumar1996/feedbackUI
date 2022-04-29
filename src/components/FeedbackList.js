import React from 'react'
import FeedbackItem from './FeedbackItem'

const FeedbackList = ({feedback,handleDelete}) => {
  console.log(feedback)
    if(!feedback || feedback.length==0){
        return <p>No Feedback Yet</p>
    } 
  
  
    return (
    <>
    <div className="feedback-list">
    {feedback.map((item)=>{
      return  <FeedbackItem 
      handleDelete={handleDelete}
       key={item.id} 
       item={item}
        />
    })}
    </div>
    </>
  )
}

export default FeedbackList