import React from "react";
import image from "../img/events/win.jpeg";
import Header from "./Header";

function GameWon() {
  return (
    <div id="game-won">
      <Header/>
      <div className="img-wrap">
        <img src={image} alt="" />
      </div>
      
      <p>You return to the group with the key.  The cage containing Juan and the rest of the team lifts.  The team rushes out of the cage, and passes you to the door.  As you hold out the key, the group parts and you spot the door.  You insert the key into the keyhole and turn.  As the door unlocks, you push the heavy door open.  Fresh air rushes past you and into the house.  You and the team spill out into the street as you spot a figure strolling up the street to the house.</p>
      
      <p>“Irma?! What are you doing here?!” Eyob questions.</p>
    
      <p>“Hi everyone.  You’re early for the Bitwise Haunted House!” Irma says, a smile plastered on her face as she points to the small “Bitwise Industries” sign just above the doorway.</p>
    
      
      <div className='btn-wrap'>
      <a href="/">
        <button className="backToHomeBtn">Restart the Game</button>
      </a>
      </div>
    </div>
  );
}

export default GameWon;
