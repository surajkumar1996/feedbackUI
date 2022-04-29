import React, { useState } from 'react'
import Button from '../shared/Button'
import Card from '../shared/Card'
import RatingSelect from './RatingSelect'

const FeedbackForm = ({handleAdd}) => {
    var [text,setText]=useState("")
    var [btnDisabled,setBtnDisabled]=useState(true)
    var [msg,setMsg]=useState('')
    var [rating,setRating]=useState(5);
    var handleChange=(e)=>{
        if(text===''){
            setBtnDisabled(true);
            setMsg(null)
        }else if(text !== "" && text.trim().length <=10){
            setBtnDisabled(true);
            setMsg('Text must be 10 character')
        }else{
            setBtnDisabled(false);
            setMsg(null)
        }
        setText(e.target.value);
    }
    var handleSubmit=(e)=>{
        e.preventDefault();
        if(text.trim().length > 10){
            var newFeedback={
                text,
                rating
            }
            handleAdd(newFeedback)
            setText("")
        }
    }
  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us ?</h2>
           <RatingSelect select={(rating)=>setRating(rating)}/>
            <div className="input-group">
                <input type="text" onChange={handleChange} value={text} placeholder='write a review' name="" id="" />
                {/* <button type='submit'>send</button> */}
                <Button type='submit' isDisabled={btnDisabled}>Send</Button>
            </div>
            {msg && <div className="message">{msg}</div>}
          
        </form>
    </Card>
  )
}

export default FeedbackForm