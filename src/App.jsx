import { useEffect, useState } from 'react'
import React from 'react'
import Question from './components/Question'
import Answers from './components/Answers'
import questions from "./questions.json"
import Modal from './components/modal'
import ReactDOM from 'react-dom'
import './App.css'

function App() {
  
  const [count, setCount] = useState(0)
  const [button, setButton] = useState(false)
  const [points, setPoints] = useState(0);
  const [enable, setEnable] = useState(false)
  const [start, setStart] = useState(false)
  const [finished, setFinished] = useState(false);

  const countHandler = (res) => {
    if (res) {
      setPoints((prev) => prev + 5)
    }

    if(count != questions.length-1){
      setCount((prev) => prev + 1);
      
    }else{
      setButton(true)
      setEnable(true)
    }   
  }

  const showModal = (finish) => {
    setFinished(finish);
    console.log(finish);
    window.location = "/"
  }

  if(start){
    return (
      <div className="App">
        <Question currentQuestion={count} totalQuestions={questions.length} text={questions[count].question} />
        <div className='answer-wrapper'>
          <Answers enable={enable} addCount={countHandler} data={questions[count].options} dataId={questions[count].id}/>
        </div>
        {button ? <button onClick={() => setFinished(true)} className='finished-button'>Finished!!</button> : "" }
        <h2>Score: {points}</h2>
        { finished ? ReactDOM.createPortal(<Modal show={showModal} points={points} totalPoints={(questions.length) * 5} />, document.querySelector('#points')) : ""}
      </div>
    )
  }else{
    return(
      <div className='start-div'>
        <h1>Start the quiz of JavaScript</h1>
        <button className='start-button' onClick={() => setStart(true)}>Start</button>
      </div>
    )
  }
  
}

export default App

