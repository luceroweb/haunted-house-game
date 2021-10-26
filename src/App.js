import React, { useState } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import RoomData from "./components/RoomData.js";
import EventsData from "./components/EventsData";
import StartGame from "./components/StartGame";
import Hallway from "./components/Hallway";
import Room from "./components/Room";
import Inventory from "./components/Inventory";
import useSound from "use-sound";
import { ambienceHauntedCave } from "./sounds";
import Random from './util/Random';
import FalseEnding from "./components/FalseEnding";
import GameWon from "./components/GameWon";
import HallwayReroute from "./components/HallwayReroute";

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
	const [randomEvents, setRandomEvents] = useState(Random.selectRandomEvents(events));
  const [randomEventsIndex, setRandomEventsIndex] = useState(0);

	// stop ambience sound when speaker button is toggled off
	if (!audioOn) {
		ambienceSoundData.stop();
	} else {
		// setTimeout hack to place playAmbience() in back of event queue 
    setTimeout(() => {
			playAmbience()
			console.log(ambienceSoundData.sound);
			// ambienceSoundData.sound?.loop();
		}, 0);
	}

	/**
	 * called when user clicks continue after passing an event
	 * @listens onClick EventModal
	 */
	 const onEventPass = () => {
		if (randomEventsIndex + 1 >= randomEvents.length) {
			setRandomEvents(Random.selectRandomEvents(events));
			setRandomEventsIndex(0);
		} else {
			setRandomEventsIndex(randomEventsIndex + 1);
		}
	}

	return (
		<HashRouter>
			<Inventory
				audioOn={audioOn}
				setAudio={setAudio}
				goldKey={hasGoldKey}
				silverKey={hasSilverKey}
			/>
			<Switch>
				<Route exact path="/">
					<StartGame
					setHasSilverKey={setHasSilverKey}
					setHasGoldKey={setHasGoldKey} />
				</Route>
				<Route exact path="/haunted-house-game">
					<StartGame
					setHasSilverKey={setHasSilverKey}
					setHasGoldKey={setHasGoldKey} />
				</Route>
				<Route path="/startgame/:page">
					<StartGame
					setHasSilverKey={setHasSilverKey}
					setHasGoldKey={setHasGoldKey} />
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
				<Route path="/hallwayreroute">
					<HallwayReroute
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
						hasSilverKey={hasSilverKey}
						hasGoldKey={hasGoldKey}
						setHasSilverKey={setHasSilverKey}
						setHasGoldKey={setHasGoldKey}
						audioOn={audioOn}
						events={events}
						randomEvent={randomEvents[randomEventsIndex]}
						onEventPass={onEventPass}
					/>
				</Route>
				<Route path="/falseending">
					<FalseEnding
            setHasGoldKey={setHasGoldKey}
          />
				</Route>
				<Route path="/gamewon">
					<GameWon />
				</Route>
			</Switch>
		</HashRouter>
	);
}

export default App;
