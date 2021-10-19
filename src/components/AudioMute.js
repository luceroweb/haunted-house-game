import React, { useState } from "react";
import useSound from 'use-sound';
//import doorCreak from '../sounds/door-creak.mp3';

export default function AudioMute () {
    // all audio used in whole project
    const audioFiles = [
        'werewolf-howl',
        'zombie-moan',
        'chainsaw-rev',
        'ghost-scream',
        'evil-laugh',
        'haunted-door',
        'game-over-win',
        'game-over-lose'
    ];
    const isMute = false;
    // src: https://stackoverflow.com/questions/14044761/how-to-mute-all-sound-in-a-page-with-js
    const toggleMute = () => {
        document.querySelectorAll(audioFiles).forEach(
            audioFile => useSound(
                audioFile, { soundEnabled: (!isMute)})
                );
    };

    // test sound
    // const [play] = useSound(doorCreak);

    return (
        <div>
            <button onClick={toggleMute}>Toggle Mute</button>
            {/* test sound button */}
            {/* <button onClick={play}>CREAK</button> */}
        </div>
    );
};