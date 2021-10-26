import React from "react";
import KeyDisplay from "./KeyDisplay";
import Random from "../util/Random";
import { useEffect } from "react/cjs/react.development";

const ResultAction = (props) => {
  useEffect(() => {
    // Added useEffect to fix warning about bad useState call

    if (props.action.type === "fail") {
      props.setDeathNote(props.action.response);
      props.setIsGameOver(true);
    }

    if (props.action.action === "A coffin") {
      props.setHasSilverKey(true);
      props.setInformedOfSilverKey(false);
    } else if (
      props.action.action === "Believe the weird little alien, take the key."
    ) {
      props.setHasGoldKey(true);
      props.setInformedOfGoldKey(false);
    } else if (
      props.action.type === "pass" &&
      !props.hasSilverKey &&
      props.event.name !== "Alien"
    ) {
      let randomEventForSilverKey = Random.selectEvent(props.events);
      if (randomEventForSilverKey === props.event) {
        props.setHasSilverKey(true);
        props.setInformedOfSilverKey(false);
      }
    }
  });

  return props.i === props.selectedAction ? (
    <>
      <p>{props.action.response}</p>
      <KeyDisplay
        hasGoldKey={props.hasGoldKey}
        hasSilverKey={props.hasSilverKey}
        setHasGoldKey={props.setHasGoldKey}
        setInformedOfGoldKey={props.setInformedOfGoldKey}
        setInformedOfSilverKey={props.setInformedOfSilverKey}
        informedOfGoldKey={props.informedOfGoldKey}
        informedOfSilverKey={props.informedOfSilverKey}
      />
      {props.action.type !== "redo" && (
        <button onClick={() => props.setShowDialog(false)}>Continue</button>
      )}
    </>
  ) : null;
};

export default ResultAction;

