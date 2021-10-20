import GameWon from "./GameWon";
import SilverKeyMessage from "./SilverKeyMessage";

// triggers when hasGoldKey or hasSilverKey are true
  export default function ShowKey (props) {
    var winMessage = '';
    // fake key and keep playing
    if (hasGoldKey) {
      <GameWon />
    }
    // real key and win
    else if (hasSilverKey) {
      winMessage=
      <SilverKeyMessage />
    }
    else {
      winMessage='';
    }
    return (
      <div>
        {winMessage}
        {props.hasGoldKey &&
        <div className="btn-wrap">
          <button onClick={()=>setHasGoldKey(false)}>Keep trying</button>
        </div>
        }
      </div>
    );
  };