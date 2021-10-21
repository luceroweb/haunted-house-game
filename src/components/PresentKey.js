import { useState } from "react";
import ShowKey from "./ShowKey";
import useSound from "use-sound";
//import KeyDisplay from './KeyDisplay';
import gameWin from "../sounds/game-over-win.mp3";

function PresentKey(props) {
  const [presentSilverKey, setPresentSilverKey] = useState(false);
  const [play] = useSound(gameWin);

  return (
    <div className="btn-wrap">
      <a href="/gamewon">
        <button
          className="presentKey"
          onClick={() => {
            setPresentSilverKey(props.hasSilverKey ? true : false);
            //   play()
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
