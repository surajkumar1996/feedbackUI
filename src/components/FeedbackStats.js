import React from 'react'

const FeedbackStats = ({feedback}) => {
    //calculate rating
    let avg=feedback.reduce((acc,cur)=>{
        return acc+cur.rating
    },0) / feedback.length
  return (
    <>
    <h4>{feedback.length} Reviews</h4>
    <h4>Average Rating :{isNaN(avg)?0:avg} </h4>
    </>
  )
}

export default FeedbackStats