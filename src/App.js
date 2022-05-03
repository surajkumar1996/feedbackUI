import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';
import { useEffect, useState } from 'react';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom'  
function App() {
const [feedback,setFeedback]=useState(FeedbackData)

var addFeedback=(newFeedback)=>{
  setFeedback(feedback=>{
    return [...feedback,newFeedback];
  })
}

var deleteFeedback=(id)=>{
  if(window.confirm('Are you sure you want to delete ?')){
  setFeedback((feedback)=>{
    return feedback.filter((item)=>{
      return item.id!=id
    })
  })
}
}
  return (
    <Router>

      
    

    <Header text="Feedback UI" /> 
     {/* <FeedbackItem/> */}
     <div className="container">
   
     <Routes>
       <Route path='/' element={
         <>
           <FeedbackForm handleAdd={addFeedback} />
           <FeedbackStats feedback={feedback} />
           <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
           </>
       } />

     
      </Routes>
     </div> 

     <Routes> 
      <Route path='/about' element={<AboutPage/>} />
      </Routes>
     
    </Router>
  );
}

export default App;
