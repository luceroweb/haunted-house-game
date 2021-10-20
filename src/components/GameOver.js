import React from "react";
import gameOver from "../img/events/game-over.png"
import './Modal.css'


function GameOver(props) {
  
   
  return props.isGameOver && props.i === props.selectedAction &&(
    <div id='game-over' className='modal'> 
            <div className='img-wrap'><img src={gameOver} alt=''/></div>
            <p> {props.message}</p>
            <p>GameOver  </p>
            <div className='btn-wrap'> <a href='/'>
           <button className="backToHomeBtn">
            Restart the Game </button>
            </a></div>
        </div>
    
   
    
  );
}
export default GameOver;


