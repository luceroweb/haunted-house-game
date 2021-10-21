import React from "react";
import AudioMute from "./AudioMute";


function Inventory(props) {
	return (
		<div id="inventory">
			<AudioMute
				audioOn={props.audio}
				setAudio={props.setAudio}
			/>
            { props.goldKey && <span id="gold-key">G</span> }
            { props.silverKey && <span id="silver-key">S</span> }            
		</div>
	);
}

export default Inventory;