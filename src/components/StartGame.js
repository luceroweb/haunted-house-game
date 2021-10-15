import React from 'react';
import house from '../img/rooms/house.jpeg';


export default function StartGame({hallway}) {
  return (
    <div>      
      <img src={house} alt="" />
      <p>The Bitwise React Apprentices were out trick or treating on a dark and windy Halloween eve, when they stumbled across a creepy, rundown home at the end of a half-built construction site.  Juan, the leader of the group, walked up to the door, rang the doorbell and no one answered.</p>
      <p>He jiggled the door and it swung open.</p>
      <p>“Is there anyone home?” asks Myles.  “Do you think they have Skittles?”</p>
      <p>“Does it look like they have Skittles? They barely have time to clean from the looks of it!” Grace says, eyeing the cobwebs in the corner of the doorway.</p>
      <p>“Ooohh… I think I see some Skittles in the hallway!” Darla exclaims, pointing deeper into the darkened space just beyond the door.</p>
      <a href="/hallway"><button>Continue...</button></a>
    </div>
  )
};