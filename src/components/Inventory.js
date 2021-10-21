import React from "react";



function Inventory(props) {
	return (
		<div id="inventory">
            { props.goldKey && <span id="gold-key">G</span> }
            { props.silverKey && <span id="silver-key">S</span> }            
		</div>
	);
}

export default Inventory;