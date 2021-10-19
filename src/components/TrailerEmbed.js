import React from 'react'
import ReactPlayer from 'react-player'

export const TrailerEmbed = () => {
    console.log(ReactPlayer)
    return (
        <div>
            <h3> Haunted House Project</h3>
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=5KCUT1os_ug'
                    playing={true}
                    muted={true}
                    controls={true}
                />
                <a href="/startgame"><button>Are You Ready?</button></a>
        </div>
    )
}
