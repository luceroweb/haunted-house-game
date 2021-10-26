import React, { useState } from "react";
import img from "../img/rooms/Hall-option-1.jpg";
import { useParams, Link } from "react-router-dom";
import useSound from "use-sound";
import { doorCreak } from "../sounds";
import PresentKey from "./PresentKey";
import PageNumber from "./PageNumber";

const Hallway = (props) => {
	const [playDoorCreak, doorCreakSoundData] = useSound(doorCreak, {
		soundEnabled: props.audioOn,
		volume: 0.8,
		interrupt: true,
	});
	let { page } = useParams();
	page = parseInt(page || 0);

	const pages = [
		<div>
			<p>
				The team of apprentices hesitantly step into the hallway, looking around
				into the begrimed space. The door slams shut behind them, shaking the
				dust from the ceiling above!
			</p>
		</div>,
		<div>
			<p>
				A booming voice from the rafters cackles“You’ve found my Haunted House!
				Come in, grab a chair, take a nap if you'd like, but in order to leave
				you must find the silver key!”
			</p>
		</div>,
		<div>
			<p>“What was that?!” Habteab exclaimed.</p>
			<p>“Who said what about a key?” Garet says.</p>
			<p>
				“We still haven’t found out if they have Skittles…” Myles sighs, rolling
				their eyes.
			</p>
		</div>,
		<div>
			<p>
				The voice continues, “In front of you is a hallway filled with doors.
				Each room has a challenge for you all to beat. One room holds the key.
				Complete the challenge, find the key, and save yourselves before it’s
				too late. You’ve been volun-told to search the rooms for the key.
				Everyone else stays put.”
			</p>
		</div>,
		<div>
			<p>
				As you step forward, a large metal cage slams down around Juan and the
				rest of the group. A look of fear passes among the group.
			</p>
			<p>
				“Remember” the voice pronounces “Nobody belongs here more than you!”
			</p>
		</div>,
	];

	// stop doorCreak sound when speaker button is toggled off
	if (!props.audioOn) {
		doorCreakSoundData.stop();
	}

	return (
		<div id="hallway">
			<h1>Hallway</h1>
			<div className="img-wrap">
				<img className="hallway" src={img} alt="" />
			</div>
			{page === 0 && <div>{pages[0]}</div>}
			{page === 1 && <div>{pages[1]}</div>}
			{page === 2 && <div>{pages[2]}</div>}
			{page === 3 && <div>{pages[3]}</div>}
			{page === 4 && <div>{pages[4]}</div>}
			{page !== 4 && (
				<div id="btn-wrap">
					<Link to={`/hallwayreroute`}>
						<button> Skip to Gameplay </button>
					</Link>
				</div>
			)}
			<div id="button-bar">
				{page !== 4 ? (
					<Link to={`/hallway/${page + 1}`}>
						<button id="btn">Continue Story</button>
					</Link>
				) : (
					props.rooms.map((room, index) => (
						<Link
							to={{
								pathname: `/room/${room.name}`,		
								}}
							key={index}
						>
							<button id="btn" onClick={() => playDoorCreak()}>
								{room.name}
							</button>
						</Link>
					))
				)}
			</div>
			{page === 4 && (
				<PresentKey
					hasGoldKey={props.hasGoldKey}
					hasSilverKey={props.hasSilverKey}
					setHasGoldKey={props.setHasGoldKey}
					setHasSilverKey={props.setHasSilverKey}
					audioOn={props.audioOn}
				/>
			)}
			<PageNumber pages={pages} page={page} title="Hallway" />
		</div>
	);
};

export default Hallway;
