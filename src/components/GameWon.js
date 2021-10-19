import React from "react";
import image from "../img/events/win.jpeg";

function GameWon() {
  return (
    <div id="game-won">
      <div className="img-wrap">
        <img src={image} alt="" />
      </div>
      <p>Game won description goes here</p>
      <a href="/">
        <div className='btn-wrap'>
          <button className="backToHomeBtn">Restart the Game</button>
        </div>
      </a>
    </div>
  );
}

export default GameWon;
