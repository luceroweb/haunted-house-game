import React from 'react'
import img from '../img/Hall-option-1.jpg'
import '../main.css';

const Hallway = () => {
    return (
        <div>

            <h1>Hallway</h1>
            <img className='hallway' src={img} alt="" />
            <p>description of the hallway</p>
            <button></button>
        </div>
    )
};

export default Hallway;

