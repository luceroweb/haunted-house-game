import React from 'react'
import gameOver from "../img/events/game-over.png"

function AnotherGameOver(){
    return(
        <div id='another-game'> 
            <div className='img-wrap'><img src={gameOver} alt=''/></div>
            <p>GameOver  </p>
            <a href='/gameover'>
           <div className='btn-wrap'> <button className="backToHomeBtn">
            Restart the Game </button></div>
            </a>
        </div>
    )
}
export default AnotherGameOver

