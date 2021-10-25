import React from "react";
import { Link } from "react-router-dom";
import GoldKey from "../img/events/gold-key.jpeg";
import Header from "./Header";

const FalseEnding = (props) => {
	return (
		<div id="false-ending">
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
