import GoldKeyMessage from "./GoldKeyMessage";
import SilverKeyMessage from "./SilverKeyMessage";

// triggers when hasGoldKey or hasSilverKey are true
  export default function ShowKey (props) {
    var winMessage = '';
    // fake key and keep playing
    if (props.hasGoldKey) {
      <GoldKeyMessage />
    }
    // real key and win
    else if (props.hasSilverKey) {
      winMessage=
      <SilverKeyMessage />
    }
    else {
      winMessage='';
    }
    return (
      <div>
        {winMessage}
      { props.hasGoldKey &&
        <button onClick={()=>props.setHasGoldKey(false)}>Keep trying</button>}
      </div>
    );
  };