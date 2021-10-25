import React from "react";
import { Link } from "react-router-dom";
import GoldKey from "../img/events/gold-key.jpeg";
import useSound from "use-sound";
import gameOverLose from "../sounds/game-over-lose.wav";
import Header from "./Header";

const FalseEnding = (props) => {
	const [play] = useSound(gameOverLose, {
		soundEnabled: props.audioOn,
		volume: 0.25,
		interrupt: true
	  });
	return (
		<div id="false-ending" onMouseOverCapture={play}>
			<Header />
			<img src={GoldKey} alt="" />
			<p>You were tricked by the alien, play again to win the Silver Key</p>
			<Link to="/hallway/1">
				<button className="backToHomeBtn">Restart</button>
			</Link>
		</div>
	);
};

export default FalseEnding;
