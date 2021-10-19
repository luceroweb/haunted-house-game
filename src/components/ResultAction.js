import React from "react";
import KeyDisplay from "./KeyDisplay";

const ResultAction = (props) => {
  if(props.action.type === 'fail') {
    props.setIsGameOver(true);
  }

	if(props.action.action==="A coffin") {
		props.setHasSilverKey(true);
	} else if(props.action.action==="Believe the weird little alien, take the key." ) {
		props.setHasGoldKey(true);
	}

	return props.i === props.selectedAction ? (
    <>
      <p>{props.action.response}</p>
      <KeyDisplay 
        hasGoldKey={props.hasGoldKey}
        hasSilverKey={props.hasSilverKey}
        setHasGoldKey={props.setHasGoldKey}
      />
    </>
  ) : null;
}

export default ResultAction;
