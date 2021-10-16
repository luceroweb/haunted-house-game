import React from "react";
import gameOver from "../img/events/game-over.png"
// import Footer from "./Footer";

function GameOver(props) {
  
  return props.isGameOver && props.i === props.selectedAction &&(
    
    <div>
      <img src={gameOver} className="death-image" alt="" />
      <p> {props.message}</p>
      <a href="/"><button >start Over</button></a>
      {/* <Footer /> */}
    </div>
  );
}
export default GameOver;
