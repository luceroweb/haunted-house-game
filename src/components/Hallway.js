import React from 'react'
import img from '../img/rooms/Hall-option-1.jpg'
import '../main.css';
import { Link } from 'react-router-dom';

const Hallway = (props) => {
    return (
        <div>
            <h1>Hallway</h1>
            <img className='hallway' src={img} alt="" />
            <p>The team of apprentices hesitantly step into the hallway, looking around into the begrimed space.  The door slams shut behind them, shaking the dust from the ceiling above!</p>
            <p>A booming voice from the rafters cackles “You’ve found my Haunted House! Come in, grab a chair, take a nap if you'd like, but in order to leave you must find the silver key!”</p>
            <p>“What was that?!” Habteab exclaimed.</p>
            <p>“Who said what about a key?” Garet says.</p>
            <p>“We still haven’t found out if they have Skittles…” Myles sighs, rolling their eyes.</p>
            <p>The voice continues, “In front of you is a hallway filled with doors.  Each room has a challenge for you all to beat. One room holds the key.  Complete the challenge, find the key, and save yourselves before it’s too late. You’ve been volun-told to search the rooms for the key. Everyone else stays put.”</p>
            <p>As you step forward, a large metal cage slams down around Juan and the rest of the group.  A look of fear passes among the group.</p>
            <p>“Remember” the voice pronounces “Nobody belongs here more than you!”</p>
            {props.rooms.map((room, key)=> (
<Link to={`/room/${room.name}`}><button>{room.name}</button></Link>
            ))}
        </div>
    )
};

export default Hallway;

