import React from "react";
import ShowKey from "./ShowKey";
import silverKey from "../img/events/silver-key.jpg";
import goldKey from "../img/events/gold-key.jpeg";

function KeyDisplay(props) {
  return (
    //The test cases were changed to 'informedOf' instead of 'has' because now someone could carry both keys simultaneously and we don't want bug where the information displays for both simultaneously
    <div>
      {!props.informedOfSilverKey && (
        <div>
          <img src={silverKey} alt="silver key" />
          <h2>You have obtained the Silver Key!</h2>
          <ShowKey
            hasGoldKey={props.hasGoldKey}
            setHasGoldKey={props.setHasGoldKey}
            hasSilverKey={props.hasSilverKey}
          />
        </div>
      )}
      {!props.informedOfGoldKey && (
        <div>
          <img src={goldKey} alt="gold key" />
          <h2>You have obtained the Gold Key!</h2>
          <ShowKey
            hasGoldKey={props.hasGoldKey}
            setHasGoldKey={props.setHasGoldKey}
            hasSilverKey={props.hasSilverKey}
          />
        </div>
      )}
    </div>
  );
}

export default KeyDisplay;
