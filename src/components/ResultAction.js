import React from "react";
import { Link } from "react-router-dom";
import KeyDisplay from "./KeyDisplay";
import Event from "./Event";

export const ResultAction = (props) => {
  if (props.action.type === "fail") {
    props.setIsGameOver(true);
    return <></>;
    // return null;
  }

  if (props.action.type === "redo") {
    return (
      <>
        {/* <p>{props.action.response}</p> */}
        {/* {props.closeEvent(2000)} */}
        <Event name={props.name} />
      </>
    );
    // return null;
  }

  if (props.action.action === "A coffin") {
    props.setHasSilverKey(true);
  } else if (
    props.action.action === "Believe the weird little alien, take the key."
  ) {
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
      <button onClick={() => props.setShowDialog(false)}>Continue</button>
    </>
  ) : null;
};

export default ResultAction;
