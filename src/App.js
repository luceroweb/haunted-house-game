import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import RoomData from "./components/RoomData.js";
import EventsData from "./components/EventsData";
import StartGame from "./components/StartGame";
import Hallway from "./components/Hallway";
import Room from "./components/Room";
import { TrailerEmbed } from "./components/TrailerEmbed";
import GameOver from "./components/GameOver";
import AnotherGameOver from "./components/AnotherGameOver";
function App() {
	const rooms = RoomData;
	const events = EventsData;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <TrailerEmbed/>
        </Route>
        <Route exact path="/startgame">
          <StartGame />
        </Route>
        <Route exact path="/hallway">
          <Hallway rooms={rooms} />
        </Route>
        <Route path="/room/:name">
          <Room rooms={rooms} events={events} />
        </Route>

        <Route  path='/gameover'>
          <AnotherGameOver   />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
