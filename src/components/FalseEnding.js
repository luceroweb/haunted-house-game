import React from 'react';
import GoldKey from '../img/events/gold-key.jpeg';
import useSound from 'use-sound';
import gameOverLose from '../sounds/game-over-lose.wav';
import Header from './Header'

const FalseEnding = () => {
    const [play] = useSound(gameOverLose);
    return (
        <div id='false-ending' onMouseOverCapture={play}>
            <Header />
            <img src={GoldKey} alt="" />
            <p>You were tricked by the alien, play again to win the Silver Key</p>        
            <a href="/Hallway"><button className="backToHomeBtn">Restart</button></a>            
        </div>
    );
}

export default FalseEnding;


