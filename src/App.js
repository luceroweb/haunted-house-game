import React, {useState} from 'react';
import { 
  BrowserRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import StartGame from './components/StartGame';

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
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <StartGame />
        </Route>
        <Route exact path="/hallway">
          <div>Hallway</div>
        </Route>
        <Route path="/room/:name">
          <div>Room Name</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
