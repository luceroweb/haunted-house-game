import React from "react";
import silverKey from "../img/events/silver-key.jpg";
import goldKey from "../img/events/gold-key.jpeg";

function KeyDisplay(props) {
  return (
    <div>
      {props.hasSilverKey && (
        <div>
          <img src={silverKey} alt="silver key" />
          <h2>You have obtained the Silver Key!</h2>
        </div>
      )}
      {props.hasGoldKey && (
        <div>
          <img src={goldKey} alt="gold key" />
          <h2>You have obtained the Gold Key!</h2>
        </div>
      )}
    </div>
  );
}

export default KeyDisplay;
