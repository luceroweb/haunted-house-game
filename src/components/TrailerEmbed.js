import React from 'react'
import ReactPlayer from 'react-player'

export const TrailerEmbed = () => {
    console.log(ReactPlayer)
    return (
        <div id="trailer-embed">
            <h3> Haunted House Project</h3>
            <ReactPlayer
                className="player"
                width='80%'
                url='https://www.youtube.com/watch?v=5KCUT1os_ug'
                playing={true}
                muted={true}
                controls={true}
            />
            <div className="btn-wrap">
                <a href="/startgame"><button>Are You Ready?</button></a>
            </div>
        </div>
    )
}
