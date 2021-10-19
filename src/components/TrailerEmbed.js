import React from 'react'
import ReactPlayer from 'react-player'

export const TrailerEmbed = () => {
    console.log(ReactPlayer)
    return (
        <div className='player-wrapper'>
            <h3> Haunted House Project</h3>
                <ReactPlayer
                className='react-player'
                    url='https://www.youtube.com/watch?v=zsRjgoRZlTY'
                    playing={true}
                    muted={true}
                    controls={true}
                />
                <a href="/startgame"><button>Are You Ready?</button></a>
        </div>
    )
}
