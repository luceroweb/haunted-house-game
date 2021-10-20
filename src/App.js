import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import RoomData from "./components/RoomData.js";
import EventsData from "./components/EventsData";
import StartGame from "./components/StartGame";
import Hallway from "./components/Hallway";
import Room from "./components/Room";
import Audio from "./components/Audio";

function App() {
	const rooms = RoomData;
	const events = EventsData;
  const [ audioControls, setAudioControls ] = useState([]);

  return (
    <BrowserRouter>
      <Audio onLoaded={(controls) => setAudioControls(controls)} />
      <Switch>
        <Route exact path="/">
          <StartGame audioControls={audioControls}/>
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
