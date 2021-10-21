import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import RoomData from "./components/RoomData.js";
import EventsData from "./components/EventsData";
import StartGame from "./components/StartGame";
import Hallway from "./components/Hallway";
import Room from "./components/Room";
import GameWon from "./components/GameWon";
import Inventory from "./components/Inventory";
// import GameOver from "./components/GameOver";


function App() {
  const rooms = RoomData;
  const events = EventsData;
  // const [audioOn, setAudioOn] = useState(true);
  const [hasGoldKey, setHasGoldKey] = useState(false);
  const [hasSilverKey, setHasSilverKey] = useState(false);

  return (
    <BrowserRouter>
      <Inventory
          goldKey={hasGoldKey}
          silverKey={hasSilverKey}
      />
      <Switch>
        <Route exact path="/">
          <StartGame />
        </Route>
        <Route path="/startgame/:page">
          <StartGame />
        </Route>
        <Route path="/hallway/:page">
          <Hallway />
        </Route>
        <Route exact path="/hallway">
          <Hallway 
          rooms={rooms}
          hasSilverKey={hasSilverKey}
          hasGoldKey={hasGoldKey}
          setHasSilverKey={setHasSilverKey}
          setHasGoldKey={setHasGoldKey}
          />
        </Route>
        <Route path="/room/:name">
          <Room 
            rooms={rooms} 
            events={events}
            hasSilverKey={hasSilverKey}
            hasGoldKey={hasGoldKey}
            setHasSilverKey={setHasSilverKey}
            setHasGoldKey={setHasGoldKey}
          />
        </Route>
        <Route path="/gamewon">
          <GameWon />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
