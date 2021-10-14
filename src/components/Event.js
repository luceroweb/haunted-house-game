import React, { useState } from 'react';



const Event = () => {
    const [event, setEvent] = useState();
    const [newEventDisplay, selectNewEventDisplay] = useState("");
    const [gamePlay, setGamePlay] = useState(game.display)
    //const generateList = events.map((event, )) => {}
    const randomEvent =() => {
    const selectedEvent = Random.selectEvent()
        setEvent(selectedEvent);
        //setNewEventDisplay('');
    };
};       
    

 

    //constructor(props) {
      //super(props);
      //this.state = {
        //count: 0
      //};
    //}
  
    render() {
      return (
        <div>
        {/* <p>You clicked {this.state.count} count</p> */}
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            passed
          </button>
        </div>
      );
    }
  }
  export default Event

  
 
    render() {
      return (
     
      )
    }
  };
  
function Event(props){
      return(
               <div>
              <img src ={props.logo} />
                <p> {props.message}</p>
              </div>
            //)

// var myArray = [
    // class Eventrandomstring extends Componenent {
        // const() {
            // select 'react'Event();
            // this.state = {
    
            // }
        //}
    
    //}
    // "passed",
    // "try again",
    // "Dead"
 // ];
  
  //var randomItem = myArray[Math.floor(Math.random()*myArray.length)];