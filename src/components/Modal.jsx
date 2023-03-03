import { ReactDOM } from "react-dom";
import { useState } from "react";
const Modal = ({ show,points,totalPoints }) => {
  const [startOver, setStartOver] = useState(false);
  return (
    <div className="backdrop">
      <div className="modal">
        <div className="header">
          {points == totalPoints ? <div><h1>{`EXCELLENT!!`}</h1><h3>{`SCORE: ${points}/${totalPoints}`}</h3></div> : <div><h1>{`TRY AGAIN`}</h1> <h3>{`SCORE: ${points}/${totalPoints}`}</h3></div>}
          <button className="modal-button" onClick={() => show(startOver)}>Try Again</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
