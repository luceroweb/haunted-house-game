import React from 'react'
import img from '../img/Hall-option-1.jpg'
import '../main.css';

const Hallway = (props) => {
    return (
        <div>
            <h1>Hallway</h1>
            <img className='hallway' src={img} alt="" />
            <p>description of the hallway</p>
            {props.rooms.map((room, key)=> (
<a href={`/room/${room.name}`}><button>{room.name}</button></a>
            ))}
        </div>
    )
};

export default Hallway;

