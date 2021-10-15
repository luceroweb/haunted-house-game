import React, { useState } from 'react';
import talkingHeads from '../img/events/talking-heads.jpg';

function FindKey(props){   


    const changeTwoStates = () => {
    
    if(!props.hasSilverKey){
        // "you win!"
    } else 
    if(!props.hasGoldKey){
        // "try again"
    }
    
    }
    //console.log(props.hasSilverKey)

    return(        
        <div>
            <img src = {talkingHeads} alt = "" />    

            {changeTwoStates()}

            <a href="/hallway"><button>Continue...</button></a>
        </div>
    )

};

export default FindKey;

