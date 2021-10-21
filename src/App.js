import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import RoomData from "./components/RoomData.js";
import EventsData from "./components/EventsData";
import StartGame from "./components/StartGame";
import Hallway from "./components/Hallway";
import Room from "./components/Room";
import GameWon from "./components/GameWon";
import GameOver from "./components/GameOver";
import AudioMute from './components/AudioMute';
import Random from './util/Random';

function App() {
  const rooms = RoomData;
  const events = EventsData;
  const [audioOn, setAudioOn] = useState(true);
  console.log('your lucky events are ', Random.selectRandomElements(events, 3));
  return (
    <BrowserRouter>
      <AudioMute audioOn={audioOn} setAudioOn={setAudioOn} />
      <Switch>
        <Route exact path="/">
          <StartGame audioOn={audioOn} />
        </Route>
        <Route path="/startgame/:page">
          <StartGame audioOn={audioOn} />
        </Route>
        <Route path="/hallway/:page">
          <Hallway audioOn={audioOn} />
        </Route>
        <Route exact path="/hallway">
          <Hallway audioOn={audioOn} rooms={rooms} />
        </Route>
        <Route path="/room/:name">
          <Room rooms={rooms} events={events} />
        </Route>
        <Route path="/gamewon">
          <GameWon />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
