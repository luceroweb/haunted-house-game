import React from 'react'
import ReactPlayer from 'react-player'

export const TrailerEmbed = () => {
    console.log(ReactPlayer)
    return (
<<<<<<< HEAD
        <div id="trailer-embed">
=======
        <div className='player-wrapper'>
>>>>>>> origin/staging
            <h3> Haunted House Project</h3>
            <div className="player">
                <ReactPlayer
<<<<<<< HEAD
                    className='react-player'
                    width='100%'
                    height='100%'
                    url='https://www.youtube.com/watch?v=5KCUT1os_ug'
=======
                className='react-player'
                    url='https://www.youtube.com/watch?v=zsRjgoRZlTY'
>>>>>>> origin/staging
                    playing={true}
                    muted={true}
                    controls={true}
                />
            </div>
            
            <div className="btn-wrap">
                <a href="/startgame"><button>Are You Ready?</button></a>
            </div>
        </div>
    )
}
