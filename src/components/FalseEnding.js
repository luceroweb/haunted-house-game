import React from "react";
import { Link } from "react-router-dom";
import GoldKey from "../img/events/gold-key.jpeg";
import Header from "./Header";
import { falseending } from "./storyData";

const FalseEnding = ({setHasGoldKey}) => {

	return (
		<div id="false-ending">
			<Header />
			<img id="gold-key" src={GoldKey} alt="" />

      <div>
        {falseending.map(
          (paragraph, index) => (
            <p key={index}>{paragraph}</p>
          )
        )}
      </div>
			
			<Link to="/hallwayreroute">
				<button className="backToHomeBtn" onClick={() => setHasGoldKey(false)}>Keep Trying</button>
			</Link>
		</div>
	);
};

export default FalseEnding;
