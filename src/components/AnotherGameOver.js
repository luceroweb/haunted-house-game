import React from 'react'
import gameOver from "../img/events/game-over.png"

function AnotherGameOver(){
    return(
        <div id='another-game'> 
            <div className='img-wrap'><img src={gameOver} alt=''/></div>
            <p>GameOver  </p>
            <div className='btn-wrap'> <a href='/'>
           <button className="backToHomeBtn">
            Restart the Game </button>
            </a></div>
        </div>
    )
}
export default AnotherGameOver

