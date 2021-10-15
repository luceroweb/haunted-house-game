import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.png";
import "./App.css";
import RoomData from "./components/RoomData.js";
import EventsData from "./components/EventsData.json";
import StartGame from "./components/StartGame";
import GameOver from "./components/GameOver";
import Hallway from "./components/Hallway";
import Room from "./components/Room";

function App() {
  const [hasGoldKey, setHasGoldKey] = useState(false);
  const [hasSilverKey, setHasSilverKey] = useState(false);
  const [rooms, setRooms] = useState(RoomData);
  const [events, setEvents] = useState(EventsData.json);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <StartGame />
        </Route>
        <Route exact path="/hallway">
          <Hallway rooms={rooms} />
        </Route>
        <Route path="/room/:name">
          <Room rooms={rooms} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
