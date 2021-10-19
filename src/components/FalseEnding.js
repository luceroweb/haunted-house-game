import React from 'react';
import GoldKey from '../img/events/gold-key.jpeg'

const FalseEnding = () => {
    return (
        <div>
            <img src={GoldKey} alt="" />
            <p>You were tricked by the alien, play again to win the Silver Key</p>
            <a href="/Hallway"><button>Restart</button></a>
        </div>
    );
}

export default FalseEnding;
