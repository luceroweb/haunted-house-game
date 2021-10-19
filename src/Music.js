import useSound from 'use-sound';
import boopSfx from '.sounds/door-creak.mp3';
const Music = () => {
    const [play] =useSound(boopSfx);
    return <button onClick={play}> </button>
};

export default Music