import React from "react";
import { GiSpeaker, GiSpeakerOff } from 'react-icons/gi';

export default function AudioMute ({audioOn, setAudioOn}) {
    return (
        <div>
            <button className="btn-audio" onClick={() => setAudioOn(!audioOn)}>
                {
                    audioOn ?  //if audio on, then return GiSpeaker, else return Speakers 
                    <GiSpeaker /> :
                    <GiSpeakerOff />
                }
                </button>
        </div>
    );
};

