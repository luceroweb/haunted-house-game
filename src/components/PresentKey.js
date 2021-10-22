import { useState } from "react";
import ShowKey from "./ShowKey";

function PresentKey(props) {
  const [presentSilverKey, setPresentSilverKey] = useState(false);

  return (
    <div className="btn-wrap">
      <a href="/gamewon">
        <button
          className="presentKey"
          onClick={() => {
            setPresentSilverKey(props.hasSilverKey ? true : false);
          }}
        >
          Present Key
        </button>
      </a>
      {presentSilverKey && (
        <ShowKey
          hasGoldKey={props.hasGoldKey}
          hasSilverKey={props.hasSilverKey}
          setHasGoldKey={props.setHasGoldKey}
          //   onClick={play}
        />
      )}
    </div>
  );
}

export default PresentKey;
