import React from "react";

function GameOver(props) {
  
  return props.isGameOver &&(
    
    <div>
      <img src={props.logo} />
      <p> {props.message}</p>
      <button >start Over</button>
    </div>
  );
}
export default GameOver;
