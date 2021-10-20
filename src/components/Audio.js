import { useState, useRef, forwardRef } from 'react';
import useSound from "use-sound";

import { hauntedHouseSounds } from '../sounds';

const Audio = ({ onLoaded }) => {
  /**
   * Add event audio clips to event object, just like images
  Create 'eventSound' function to trigger specific sounds during specific events.
  Play event sound when event occurs
  Only play sounds if 'audioOn' boolean is true
   */
  const [
    ambienceHauntedCave,
    doorCreak,
    werewolf,
    gameOver,
    evilLaugh,
  ] = hauntedHouseSounds;

  const onLoad = () => {
    const handlers = { play, stop };
    onLoaded(handlers);
  }

  const [ ambienceSound, ambienceData ] = useSound(
    ambienceHauntedCave,
    { volume: 0.75, interrupt: true, onload: onLoad }
  );

  const [ doorCreakSound, doorCreakData ] = useSound(
    doorCreak,
    { volume: 0.75, interrupt: true }
  );

  const [ werewolfSound, werewolfData ] = useSound(
    werewolf,
    { volume: 0.75, interrupt: true }
  );

  const [ gameOverSound, gameOverData ] = useSound(
    gameOver,
    { volume: 0.75, interrupt: true }
  );

  const [ evilLaughSound, evilLaughData ] = useSound(
    evilLaugh,
    { volume: 0.75, interrupt: true }
  );

  const soundData = {
    'ambience': {
      play: ambienceSound,
      data: ambienceData,
    },
    'door-creak': {
      play: doorCreakSound,
      data: doorCreakData,
    },
    'werewolf': {
      play: werewolfSound,
      data: werewolfData
    },
    'game-over': {
      play: gameOverSound,
      data: gameOverData
    },
    'evil-laugh': {
      play: evilLaughSound,
      data: evilLaughData
    }
  }
  
  /**
   * @param {string} name 
   */
  const play = (name) => {
    const test = soundData[name].play();
  }

  const stop = (name) => {
    console.log('i stopped');
  }


  return <h3>sounds</h3>
  // return (
  //   <div className="container">
  //     <div style={{ display: 'flex', justifyContent: 'center' }}>
  //       <button onClick={() => howlSound()} >HOWL</button>
  //       <button onClick={() => doorSound()} >DOOR CREAK</button>
  //       <button onClick={() => ambienceSound()} >AMBIENCE</button>
  //       <button onClick={() => evilLaughSound()} >EVIL LAUGH</button>
  //       <button onClick={() => gameOverSound()} >GAME OVER</button>
  //     </div>
  //     <button onClick={() => setSoundEnabled(!soundEnabled)}>{soundEnabled ? 'DISABLE' : 'ENABLE'} ALL SOUNDS</button>
  //   </div>
  // )
}

export default Audio;