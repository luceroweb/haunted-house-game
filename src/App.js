import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import RoomData from "./components/RoomData.js";
import EventsData from "./components/EventsData";
import StartGame from "./components/StartGame";
import Hallway from "./components/Hallway";
import Room from "./components/Room";
import AudioMute from "./components/AudioMute";

function App() {
	
	const [rooms, setRooms] = useState(RoomData);
	const [events, setEvents] = useState(EventsData);
  const [audioOn, setAudioOn] = useState(false);

  return (
    <BrowserRouter>
      <AudioMute />
      <Switch>
        <Route exact path="/">
          <StartGame />
        </Route>
        <Route exact path="/hallway">
          <Hallway rooms={rooms} />
        </Route>
        <Route path="/room/:name">
          <Room rooms={rooms} events={events} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
