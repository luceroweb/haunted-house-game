import { useState } from "react";
import ShowKey from "./ShowKey";
import useSound from "use-sound";
<<<<<<< HEAD
//import KeyDisplay from './KeyDisplay';
=======
>>>>>>> e7d705b4666ea31e031a99fdf4c5217c4db1252a
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
<<<<<<< HEAD
            //   play()
=======
>>>>>>> e7d705b4666ea31e031a99fdf4c5217c4db1252a
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
