 import useSound from 'use-sound';
 import boopSfx from './sounds/ambience-haunted-cave.mp3';
 const AudioDemo = () => {
 const [play] = useSound(boopSfx,{volume:0.2});
 return <button onClick={play}>Boo!</button>;
}; 


export default AudioDemo;