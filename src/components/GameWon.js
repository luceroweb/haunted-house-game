import React from "react";
import { Link }from 'react-router-dom';
import useSound from "use-sound";
import { gameOverWin, gameOverWinTwo } from "../sounds";
import image from "../img/events/win.jpeg";
import Header from "./Header";
import silverKey from "../img/events/silver-key.jpg";
import Random from "../util/Random";
import { gamewon } from "./storyData";

function GameWon({ audioOn, onGameOver }) {
  // useState to prevent infinite loop bug when passing random sounds to useSound
  const [playGameOverWin, gameOverWinSoundData] = useSound(Random.selectEvent([gameOverWin, gameOverWinTwo]), {
    soundEnabled: audioOn,
    volume: 0.05,
    interrupt: true
  });
 
  if (!audioOn) {
    gameOverWinSoundData.stop();
  } else {
    // setTimeout hack to place playGameOverWin() in back of event queue 
    setTimeout(() => playGameOverWin(), 0);
  }

  return (
    <div id="game-won">
      <Header />      
      <div className="img-wrap">
        <img src={silverKey} alt="silver key" />
      </div>

      <div className="img-wrap">
        <img src={image} alt="" />
      </div>

      <div>
        {gamewon.map(
          (paragraph, index) => (
            <p key={index}>{paragraph}</p>
          )
        )}
      </div>

      <div className="btn-wrap">
        <Link to="/">
          <button className="backToHomeBtn" onClick={onGameOver}>Restart the Game</button>
        </Link>
      </div>
    </div>
  );
}

export default GameWon;
