import React from "react";
import gameOver from "../img/events/game-over.png"


function GameOver(props) {
  return (
    props.isGameOver &&
    props.i === props.selectedAction && (
      <div id="game-over" className="game-over-modal">
        <div className="img-wrap">
          <img src={gameOver} alt="" />
        </div>
        <p> {props.message}</p>
        <h1>Game Over</h1>
        <div className="btn-wrap">
          {" "}
          <a href="/">
            <button className="backToHomeBtn">Restart the Game </button>
          </a>
        </div>
      </div>
    )
  );
}
export default GameOver;
