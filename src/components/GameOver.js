import React from "react";
import gameOver from "../img/events/game-over.png"
// import Footer from "./Footer";

function GameOver(props) {
  
   
  return props.isGameOver && props.i === props.selectedAction &&(
    
    <div>
       <img src={gameOver} className="death-image" alt="" />
      <p> {props.message}</p>
      <a href="/gameover">
      <button className="backToHomeBtn">Game Ove</button></a> 
  
      <gameover />
    
    </div>
   
    
  );
}
export default GameOver;
