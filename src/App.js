import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import RoomData from "./components/RoomData.js";
import EventsData from "./components/EventsData";
import StartGame from "./components/StartGame";
import Hallway from "./components/Hallway";
import Room from "./components/Room";
import Inventory from "./components/Inventory";
import useSound from "use-sound";
import { ambienceHauntedCave } from "./sounds";

function App() {
	const rooms = RoomData;
	const events = EventsData;
	const [audioOn, setAudio] = useState(true);
	const [hasGoldKey, setHasGoldKey] = useState(false);
	const [hasSilverKey, setHasSilverKey] = useState(false);
	const [playAmbience, ambienceSoundData] = useSound(ambienceHauntedCave, {
		soundEnabled: audioOn,
		volume: 0.15,
		interrupt: true
	});
	// stop ambience sound when speaker button is toggled off
	if (!audioOn) {
		ambienceSoundData.stop();
	} else {
		// setTimeout hack to place playAmbience() in back of event queue 
    setTimeout(() => {
			playAmbience()
			// ambienceSoundData.sound?.loop();
		}, 0);
	}
	return (
		<BrowserRouter>
			<Inventory
				audioOn={audioOn}
				setAudio={setAudio}
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
					<Hallway
						audioOn={audioOn}
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
						audioOn={audioOn}
					/>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
