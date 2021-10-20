import React from "react";
import { GiSpeaker, GiSpeakerOff } from 'react-icons/gi';

export default function AudioMute ({audioOn, setAudioOn}) {
    return (
        <div>
            <button onClick={() => setAudioOn(!audioOn)}>
                {
                    audioOn ?
                    <GiSpeaker /> :
                    <GiSpeakerOff />
                }
                </button>
        </div>
    );
};