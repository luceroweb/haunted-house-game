import React, { useState } from 'react';



const Event = ({ event }) => {
    //const [event, setEvent] = useState();
    const [action,setAction] = useState();
    const [newEventDisplay, selectNewEventDisplay] = useState("");
    //const [gamePlay, setGamePlay] = useState(game.display)
    //const generateList = events.map((event, )) => {}
    
    //const selectedEvent = Random.selectEvent()
  //setEvent(selectedEvent);
        //setNewEventDisplay('');
        console.log(event)
  
    return(
      <div>
        <h3>{event.name}</h3>
        <img src= {event.image} />
        <p>{event.description}</p>
        {event.actions.map((action, i) => <button key={i} onClick={() =>{setAction(action)}}></button>)}
      </div>
    )
};       
    
export default Event

  
 
    