import React from "react";



export default function Inventory(goldKey, silverKey) {
	return (
		<div id="inventory">
            { goldKey && <span id="gold-key">G</span> }
            { silverKey && <span id="silver-key">S</span> }            
		</div>
	);
}