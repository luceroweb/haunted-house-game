import { useState } from "react";
import ShowKey from "./ShowKey";

function PresentKey(props) {
  const [presentedKey, setPresentedKey] = useState(null);

  return (
    <div className="btn-wrap">
      <button
        className="presentKey"
        onClick={() => {
          setPresentedKey(true);
        }}
      >
        Present Key
      </button>
      { 
      presentedKey !== null
      && !(props.hasGoldKey || props.hasSilverKey)
      && <p>You need to find a key first!</p>
      }
      {
      presentedKey
        && (props.hasGoldKey || props.hasSilverKey)
        && (
          <ShowKey
            hasGoldKey={props.hasGoldKey}
            hasSilverKey={props.hasSilverKey}
            setHasGoldKey={props.setHasGoldKey}
            audioOn={props.audioOn}
          />
      )}
    </div>
  );
}

export default PresentKey;
