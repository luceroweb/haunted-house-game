import React from "react";
import { useParams, Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Header from "./Header";
import house from "../img/rooms/house.jpeg";

export default function StartGame({ hallway }) {
	let { page } = useParams();
	page = parseInt(page || 0);
	const pages = [[], []];

	return (
		<div id="start-game">
			{page === 0 && <Header />}
			<img src={house} alt="" />
			{/* <Typewriter
				style={{ textAlign: "left" }}
				options={{
					strings: pages[page],
					delay: 1,
					deleteSpeed: 1,
					pauseFor: 5000,
					autoStart: true,
					loop: false,
				}}
			/> */}
			{pages[page]}
			{page === 0 && (
				<div>
					<p>
						The Bitwise React Apprentices were out trick or treating on a dark
						and windy Halloween eve, when they stumbled across a creepy, rundown
						home at the end of a half-built construction site. Juan, the leader
						of the group, walked up to the door, rang the doorbell and no one
						answered.
					</p>
				</div>
			)}
			{page === 1 && (
				<div>
					<p>He jiggled the door and it swung open.</p>
					<p>
						“Is there anyone home?” asks Myles. “Do you think they have
						Skittles?”
					</p>
					<p>
						“Does it look like they have Skittles? They barely have time to
						clean from the looks of it!” Grace says, eyeing the cobwebs in the
						corner of the doorway.
					</p>
					<p>
						“Ooohh… I think I see some Skittles in the hallway!” Darla exclaims,
						pointing deeper into the darkened space just beyond the door.
					</p>
				</div>
			)}
			<div id="btn-wrap">
				<Link to={`/hallway/4`}>
					<button> Skip to Gameplay </button>
				</Link>
			</div>
			<div id="btn-wrap">
				{page === 1 ? (
					<Link to={`/hallway/0`}>
						<button>Continue Story</button>
					</Link>
				) : (
					<Link to={`/startgame/${page + 1}`}>
						<button>Continue Story</button>
					</Link>
				)}
			</div>
		</div>
	);
}
