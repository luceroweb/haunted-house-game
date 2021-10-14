import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Hallway from './components/Hallway';

function App() {
  const [hasGoldKey, setHasGoldKey] = useState(false);
  const [hasSilverKey, setHasSilverKey] = useState(false);
  const [rooms, setRooms] = useState([
    {
      name: "Living Room",
      description: "living room description goes here",
      image: logo,
    },
    {
      name: "Kitchen",
      description: "kitchen description goes here",
      image: logo,
    },
  ]);
  const [events, setEvents] = useState([
    {
      name: "Ghost",
      description: "ghost description goes here",
      image: logo,
      actions: [
        { pass: 'pass goes here' },
        { fail: 'fail goes here, goes into fail screen' }, 
        { redo: 'try again goes here' },
      ]
    },
    {
      name: "Warewolf",
      description: "warewolf description goes here",
      image: logo,
      actions: [
        { pass: 'pass goes here' },
        { fail: 'fail goes here, goes into fail screen' }, 
        { redo: 'try again goes here' },
      ]
    },
  ]);

  return (
    <div className="App">
      <Hallway/>
    </div>
  );
}

export default App;
