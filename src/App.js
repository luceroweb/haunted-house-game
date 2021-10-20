import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import RoomData from "./components/RoomData.js";
import EventsData from "./components/EventsData";
import StartGame from "./components/StartGame";
import Hallway from "./components/Hallway";
import Room from "./components/Room";

function App() {
	const rooms = RoomData;
	const events = EventsData;

	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<StartGame />
				</Route>
				<Route path="/startgame/:page">
					<StartGame />
				</Route>
				<Route path="/hallway/:page">
					<Hallway  />
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
