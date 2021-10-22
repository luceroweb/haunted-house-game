import { useState } from "react";
import { Link } from "react-router-dom";
import ShowKey from "./ShowKey";

function PresentKey(props) {
  const [presentSilverKey, setPresentSilverKey] = useState(false);

  return (
    <div className="btn-wrap">
      <Link to="/gamewon">
        <button
          className="presentKey"
          onClick={() => {
            setPresentSilverKey(props.hasSilverKey ? true : false);
          }}
        >
          Present Key
        </button>
      </Link>
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
