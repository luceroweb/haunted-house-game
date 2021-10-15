import React from "react";


const ResultAction = (props) => {
	if(props.action.action==="A coffin."){
		props.setHasSilverKey(true);
		console.log("hasSilverKey");
	}else if(props.action.action==="Believe the weird little alien, take the key." ){
		props.setHasGoldKey(true);
		console.log("hasGoldKey");
	}



	return props.i === props.selectedAction ? (
		<p>{props.action.response}</p>
	) : null;
};
export default ResultAction;
