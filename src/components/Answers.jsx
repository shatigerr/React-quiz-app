import { useState,useEffect } from "react";

const Answers = ({ data,addCount,enable,dataId }) => {



return(
  
    data.map((element) => (
        <div>
          <button className="answer-button" key={dataId} disabled={enable} onClick={() => addCount(element.correct)}>
            {element.answer}
          </button>
        </div>
      ))
    ) 
    
};


export default Answers;